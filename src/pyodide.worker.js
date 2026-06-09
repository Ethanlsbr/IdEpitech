const PYODIDE_VERSION = '0.28.3'
const INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`

importScripts(`${INDEX_URL}pyodide.js`)

let pyodide = null
let ready = false

const control = new Int32Array(new SharedArrayBuffer(8))
const DATA_SIZE = 1 << 20
const data = new Uint8Array(new SharedArrayBuffer(DATA_SIZE))

function makeWriter(stream) {
  return (text) => self.postMessage({ type: 'output', stream, text })
}

function stdin() {
  Atomics.store(control, 0, 0)
  self.postMessage({ type: 'input-request' })
  Atomics.wait(control, 0, 0)
  const status = Atomics.load(control, 0)
  if (status === 2) return null
  const len = Atomics.load(control, 1)
  return new TextDecoder().decode(data.slice(0, len))
}

async function init() {
  pyodide = await loadPyodide({
    indexURL: INDEX_URL,
    stdout: makeWriter('stdout'),
    stderr: makeWriter('stderr'),
  })
  pyodide.setStdin({ stdin, autoEOF: true })
  await pyodide.loadPackage('micropip')
  ready = true
  self.postMessage({ type: 'ready', version: pyodide.version })
}

const initPromise = init().catch((err) => {
  self.postMessage({ type: 'fatal', message: String(err) })
})

async function run(id, code) {
  await initPromise
  if (!ready) return
  try {
    await pyodide.loadPackagesFromImports(code, {
      messageCallback: (m) => self.postMessage({ type: 'status', text: m }),
    })
    const result = await pyodide.runPythonAsync(code)
    let repr
    if (result !== undefined && result !== null) {
      try {
        repr = pyodide.globals.get('repr')(result)
      } catch {
        repr = String(result)
      }
    }
    self.postMessage({ type: 'done', id, result: repr ?? null })
  } catch (err) {
    self.postMessage({ type: 'error', id, message: String(err.message || err) })
  }
}

self.onmessage = (e) => {
  const msg = e.data
  switch (msg.type) {
    case 'handshake':
      self.postMessage({
        type: 'shared',
        control: control.buffer,
        data: data.buffer,
      })
      break
    case 'run':
      run(msg.id, msg.code)
      break
    default:
      break
  }
}
