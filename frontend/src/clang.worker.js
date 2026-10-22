const ASSET_BASE = new URL("/wasm-clang/", self.location.href).href;
const CLANG_VERSION = "8.0.1";
const STACK_SIZE = 1024 * 1024;
const ESUCCESS = 0;

const control = new Int32Array(new SharedArrayBuffer(8));
const DATA_SIZE = 1 << 20;
const data = new Uint8Array(new SharedArrayBuffer(DATA_SIZE));

const ANSI_RE = /\x1b\[[0-9;]*m/g;

let stdinBuf = new Uint8Array(0);
let stdinPos = 0;
let stdinEof = false;

function resetStdin() {
  stdinBuf = new Uint8Array(0);
  stdinPos = 0;
  stdinEof = false;
}

function requestStdinLine() {
  Atomics.store(control, 0, 0);
  self.postMessage({ type: "input-request" });
  Atomics.wait(control, 0, 0);
  if (Atomics.load(control, 0) === 2) {
    stdinEof = true;

    return false;
  }
  const len = Atomics.load(control, 1);
  stdinBuf = new Uint8Array(len + 1);
  stdinBuf.set(data.subarray(0, len));
  stdinBuf[len] = 10;
  stdinPos = 0;

  return true;
}

class ProcExit extends Error {
  constructor(code) {
    super(`process exited with code ${code}.`);
    this.code = code;
  }
}

class AbortError extends Error {}

function readStr(u8, o, len = -1) {
  let str = "";
  const end = len === -1 ? u8.length : o + len;
  for (let i = o; i < end && u8[i] !== 0; ++i)
    str += String.fromCharCode(u8[i]);

  return str;
}

function getImportObject(obj, names) {
  const result = {};
  for (const name of names) result[name] = obj[name].bind(obj);

  return result;
}

class Memory {
  constructor(memory) {
    this.memory = memory;
    this.check();
  }

  check() {
    if (!this.buffer || this.buffer.byteLength === 0) {
      this.buffer = this.memory.buffer;
      this.u8 = new Uint8Array(this.buffer);
      this.u32 = new Uint32Array(this.buffer);
    }
  }

  read32(o) {
    return this.u32[o >> 2];
  }
  write8(o, v) {
    this.u8[o] = v;
  }
  write32(o, v) {
    this.u32[o >> 2] = v;
  }
  write64(o, vlo, vhi = 0) {
    this.write32(o, vlo);
    this.write32(o + 4, vhi);
  }
  readStr(o, len) {
    return readStr(this.u8, o, len);
  }

  writeStr(o, str) {
    o += this.write(o, str);
    this.write8(o, 0);

    return str.length + 1;
  }

  write(o, buf) {
    if (buf instanceof ArrayBuffer) return this.write(o, new Uint8Array(buf));

    if (typeof buf === "string") {
      return this.write(
        o,
        buf.split("").map((x) => x.charCodeAt(0)),
      );
    }

    new Uint8Array(this.buffer, o, buf.length).set(buf);

    return buf.length;
  }
}

class MemFS {
  constructor({ compileStreaming, hostWrite, memfsFilename }) {
    this.hostWrite = hostWrite;
    this.hostMem_ = null;

    const env = getImportObject(this, [
      "abort",
      "host_write",
      "host_read",
      "memfs_log",
      "copy_in",
      "copy_out",
    ]);

    this.ready = compileStreaming(memfsFilename)
      .then((module) => WebAssembly.instantiate(module, { env }))
      .then((instance) => {
        this.instance = instance;
        this.exports = instance.exports;
        this.mem = new Memory(this.exports.memory);
        this.exports.init();
      });
  }

  set hostMem(mem) {
    this.hostMem_ = mem;
  }

  addDirectory(path) {
    this.mem.check();
    this.mem.write(this.exports.GetPathBuf(), path);
    this.exports.AddDirectoryNode(path.length);
  }

  addFile(path, contents) {
    const length =
      contents instanceof ArrayBuffer ? contents.byteLength : contents.length;
    this.mem.check();
    this.mem.write(this.exports.GetPathBuf(), path);
    const inode = this.exports.AddFileNode(path.length, length);
    const addr = this.exports.GetFileNodeAddress(inode);
    this.mem.check();
    this.mem.write(addr, contents);
  }

  getFileContents(path) {
    this.mem.check();
    this.mem.write(this.exports.GetPathBuf(), path);
    const inode = this.exports.FindNode(path.length);
    const addr = this.exports.GetFileNodeAddress(inode);
    const size = this.exports.GetFileNodeSize(inode);

    return new Uint8Array(new Uint8Array(this.mem.buffer, addr, size));
  }

  abort() {
    throw new AbortError();
  }

  host_write(fd, iovs, iovs_len, nwritten_out) {
    this.hostMem_.check();
    let size = 0;
    let str = "";
    for (let i = 0; i < iovs_len; ++i) {
      const buf = this.hostMem_.read32(iovs);
      iovs += 4;
      const len = this.hostMem_.read32(iovs);
      iovs += 4;
      str += this.hostMem_.readStr(buf, len);
      size += len;
    }
    this.hostMem_.write32(nwritten_out, size);
    this.hostWrite(str, fd);

    return ESUCCESS;
  }

  host_read(fd, iovs, iovs_len, nread) {
    this.hostMem_.check();
    let size = 0;
    for (let i = 0; i < iovs_len; ++i) {
      const buf = this.hostMem_.read32(iovs);
      iovs += 4;
      const len = this.hostMem_.read32(iovs);
      iovs += 4;

      if (stdinPos >= stdinBuf.length && (stdinEof || !requestStdinLine())) {
        break;
      }
      this.hostMem_.check();

      const avail = Math.min(len, stdinBuf.length - stdinPos);
      if (avail === 0) break;
      this.hostMem_.write(buf, stdinBuf.subarray(stdinPos, stdinPos + avail));
      stdinPos += avail;
      size += avail;
      if (avail !== len) break;
    }
    this.hostMem_.write32(nread, size);

    return ESUCCESS;
  }

  memfs_log(buf, len) {
    this.mem.check();
    console.log(this.mem.readStr(buf, len));
  }

  copy_out(clang_dst, memfs_src, size) {
    this.hostMem_.check();
    const dst = new Uint8Array(this.hostMem_.buffer, clang_dst, size);
    this.mem.check();
    dst.set(new Uint8Array(this.mem.buffer, memfs_src, size));
  }

  copy_in(memfs_dst, clang_src, size) {
    this.mem.check();
    const dst = new Uint8Array(this.mem.buffer, memfs_dst, size);
    this.hostMem_.check();
    dst.set(new Uint8Array(this.hostMem_.buffer, clang_src, size));
  }
}

class App {
  constructor(module, memfs, name, ...args) {
    this.argv = [name, ...args];
    this.environ = { USER: "alice" };
    this.memfs = memfs;

    const wasi_unstable = getImportObject(this, [
      "proc_exit",
      "environ_sizes_get",
      "environ_get",
      "args_sizes_get",
      "args_get",
      "random_get",
      "clock_time_get",
      "poll_oneoff",
    ]);
    Object.assign(wasi_unstable, this.memfs.exports);

    this.ready = WebAssembly.instantiate(module, { wasi_unstable }).then(
      (instance) => {
        this.instance = instance;
        this.exports = instance.exports;
        this.mem = new Memory(this.exports.memory);
        this.memfs.hostMem = this.mem;
      },
    );
  }

  async run() {
    await this.ready;
    try {
      this.exports._start();
    } catch (exn) {
      if (exn instanceof ProcExit) return exn.code;

      throw exn;
    }

    return 0;
  }

  proc_exit(code) {
    throw new ProcExit(code);
  }

  environ_sizes_get(environ_count_out, environ_buf_size_out) {
    this.mem.check();
    let size = 0;
    const names = Object.getOwnPropertyNames(this.environ);
    for (const name of names)
      size += name.length + this.environ[name].length + 2;
    this.mem.write64(environ_count_out, names.length);
    this.mem.write64(environ_buf_size_out, size);

    return ESUCCESS;
  }

  environ_get(environ_ptrs, environ_buf) {
    this.mem.check();
    for (const name of Object.getOwnPropertyNames(this.environ)) {
      this.mem.write32(environ_ptrs, environ_buf);
      environ_ptrs += 4;
      environ_buf += this.mem.writeStr(
        environ_buf,
        `${name}=${this.environ[name]}`,
      );
    }
    this.mem.write32(environ_ptrs, 0);

    return ESUCCESS;
  }

  args_sizes_get(argc_out, argv_buf_size_out) {
    this.mem.check();
    let size = 0;
    for (const arg of this.argv) size += arg.length + 1;
    this.mem.write64(argc_out, this.argv.length);
    this.mem.write64(argv_buf_size_out, size);

    return ESUCCESS;
  }

  args_get(argv_ptrs, argv_buf) {
    this.mem.check();
    for (const arg of this.argv) {
      this.mem.write32(argv_ptrs, argv_buf);
      argv_ptrs += 4;
      argv_buf += this.mem.writeStr(argv_buf, arg);
    }
    this.mem.write32(argv_ptrs, 0);

    return ESUCCESS;
  }

  random_get(buf, buf_len) {
    this.mem.check();
    crypto.getRandomValues(new Uint8Array(this.mem.buffer, buf, buf_len));

    return ESUCCESS;
  }

  clock_time_get(clock_id, precision, time_out) {
    this.mem.check();
    const ns = BigInt(Date.now()) * 1000000n;
    this.mem.write64(
      time_out,
      Number(ns & 0xffffffffn),
      Number((ns >> 32n) & 0xffffffffn),
    );

    return ESUCCESS;
  }

  poll_oneoff() {
    return ESUCCESS;
  }
}

class Tar {
  constructor(buffer) {
    this.u8 = new Uint8Array(buffer);
    this.offset = 0;
  }

  readStr(len) {
    const result = readStr(this.u8, this.offset, len);
    this.offset += len;

    return result;
  }

  readOctal(len) {
    return parseInt(this.readStr(len), 8);
  }

  alignUp() {
    this.offset = (this.offset + 511) & ~511;
  }

  readEntry() {
    if (this.offset + 512 > this.u8.length) return null;

    const entry = {
      filename: this.readStr(100),
      mode: this.readOctal(8),
      owner: this.readOctal(8),
      group: this.readOctal(8),
      size: this.readOctal(12),
      mtim: this.readOctal(12),
      checksum: this.readOctal(8),
      type: this.readStr(1),
      linkname: this.readStr(100),
    };

    if (this.readStr(8) !== "ustar  ") return null;

    entry.ownerName = this.readStr(32);
    entry.groupName = this.readStr(32);
    entry.devMajor = this.readStr(8);
    entry.devMinor = this.readStr(8);
    entry.filenamePrefix = this.readStr(155);
    this.alignUp();
    if (entry.type === "0") {
      entry.contents = this.u8.subarray(this.offset, this.offset + entry.size);
      this.offset += entry.size;
      this.alignUp();
    }

    return entry;
  }

  untar(memfs) {
    let entry;
    while ((entry = this.readEntry())) {
      if (entry.type === "0") memfs.addFile(entry.filename, entry.contents);
      else if (entry.type === "5") memfs.addDirectory(entry.filename);
    }
  }
}

async function compileStreaming(name) {
  const res = await fetch(ASSET_BASE + name);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);

  return WebAssembly.compileStreaming(
    new Response(res.body, { headers: { "Content-Type": "application/wasm" } }),
  );
}

async function readBuffer(name) {
  const res = await fetch(ASSET_BASE + name);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);

  return res.arrayBuffer();
}

let phase = "compile";

function hostWrite(text, fd) {
  const clean = text.replace(ANSI_RE, "");

  if (!clean) return;

  const stream =
    phase === "compile" ? "stderr" : fd === 2 ? "stderr" : "stdout";
  self.postMessage({ type: "output", stream, text: clean });
}

const CLANG_ARGS = [
  "-disable-free",
  "-isysroot",
  "/",
  "-internal-isystem",
  "/include",
  `-internal-isystem`,
  `/lib/clang/${CLANG_VERSION}/include`,
  "-ferror-limit",
  "19",
  "-fmessage-length",
  "80",
  "-fno-color-diagnostics",
];

const UNBUFFER_STDOUT = `
__attribute__((constructor)) static void __manta_unbuffer(void)
{
    setvbuf(stdout, 0, _IONBF, 0);
}
`;

function prepareSource(source) {
  return source.includes("stdio.h") ? source + UNBUFFER_STDOUT : source;
}

let memfs = null;
let clangModule = null;
let lldModule = null;
let ready = false;

async function init() {
  memfs = new MemFS({ compileStreaming, hostWrite, memfsFilename: "memfs" });
  await memfs.ready;

  self.postMessage({ type: "status", text: "Chargement de la bibliothèque C" });
  new Tar(await readBuffer("sysroot.tar")).untar(memfs);

  self.postMessage({ type: "status", text: "Compilation de clang" });
  clangModule = await compileStreaming("clang");
  self.postMessage({ type: "status", text: "Compilation de wasm-ld" });
  lldModule = await compileStreaming("lld");

  ready = true;
  self.postMessage({ type: "ready", version: CLANG_VERSION });
}

const initPromise = init().catch((error) => {
  self.postMessage({ type: "fatal", message: String(error) });
});

async function build(source) {
  memfs.addFile("main.c", prepareSource(source));

  const clang = new App(
    clangModule,
    memfs,
    "clang",
    "-cc1",
    "-emit-obj",
    ...CLANG_ARGS,
    "-O2",
    "-o",
    "main.o",
    "-x",
    "c",
    "main.c",
  );
  if ((await clang.run()) !== 0) return false;

  const libdir = "lib/wasm32-wasi";
  const lld = new App(
    lldModule,
    memfs,
    "wasm-ld",
    "--no-threads",
    "--export-dynamic",
    "-z",
    `stack-size=${STACK_SIZE}`,
    `-L${libdir}`,
    `${libdir}/crt1.o`,
    "main.o",
    "-lc",
    "-o",
    "main.wasm",
  );
  return (await lld.run()) === 0;
}

async function run(id, source) {
  await initPromise;
  if (!ready) return;

  resetStdin();
  phase = "compile";

  try {
    if (!(await build(source))) {
      self.postMessage({ type: "error", id, message: "Compilation échouée." });
      return;
    }

    phase = "run";
    const module = await WebAssembly.compile(
      memfs.getFileContents("main.wasm"),
    );
    const app = new App(module, memfs, "main");
    const code = await app.run();
    self.postMessage({ type: "done", id, result: code === 0 ? null : code });
  } catch (error) {
    self.postMessage({
      type: "error",
      id,
      message: String(error.message || error),
    });
  } finally {
    phase = "compile";
  }
}

self.onmessage = (event) => {
  const msg = event.data;
  switch (msg.type) {
    case "handshake":
      self.postMessage({
        type: "shared",
        control: control.buffer,
        data: data.buffer,
      });
      break;
    case "run":
      run(msg.id, msg.code);
      break;
    default:
      break;
  }
};
