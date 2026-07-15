import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PyodideContext = createContext(null);

const EXEC_TIMEOUT_MS = 2_000;

export function PyodideProvider({ children }) {
  const workerRef = useRef(null);
  const controlRef = useRef(null);
  const dataRef = useRef(null);
  const interruptRef = useRef(null);
  const inflightRef = useRef(null);
  const runResolveRef = useRef(null);
  const cbRef = useRef({ onOutput: () => {}, onInputRequest: () => {} });
  const execTimerRef = useRef(null);
  const timedOutRef = useRef(false);
  const awaitingInputRef = useRef(false);
  const [status, setStatus] = useState("loading");
  const [version, setVersion] = useState(null);
  const outBufRef = useRef([]);
  const outFlushTimerRef = useRef(null);

  const flushOutput = useCallback(() => {
    if (outFlushTimerRef.current) {
      clearTimeout(outFlushTimerRef.current);
      outFlushTimerRef.current = null;
    }
    const buffered = outBufRef.current;
    if (!buffered.length) return;
    outBufRef.current = [];
    for (const chunk of buffered) cbRef.current.onOutput(chunk);
  }, []);

  const queueOutput = useCallback(
    (chunk) => {
      outBufRef.current.push(chunk);
      if (!outFlushTimerRef.current) {
        outFlushTimerRef.current = setTimeout(flushOutput, 16);
      }
    },
    [flushOutput],
  );

  const interrupt = useCallback(() => {
    if (interruptRef.current) interruptRef.current[0] = 2;
    if (awaitingInputRef.current && controlRef.current) {
      awaitingInputRef.current = false;
      Atomics.store(controlRef.current, 0, 2);
      Atomics.notify(controlRef.current, 0);
    }
  }, []);

  const clearExecTimer = useCallback(() => {
    if (execTimerRef.current) {
      clearTimeout(execTimerRef.current);
      execTimerRef.current = null;
    }
  }, []);

  const armExecTimer = useCallback(() => {
    clearExecTimer();
    execTimerRef.current = setTimeout(() => {
      timedOutRef.current = true;
      interrupt();
    }, EXEC_TIMEOUT_MS);
  }, [clearExecTimer, interrupt]);

  useEffect(() => {
    const worker = new Worker(new URL("./pyodide.worker.js", import.meta.url));
    workerRef.current = worker;
    worker.onmessage = (event) => {
      const msg = event.data;
      switch (msg.type) {
        case "shared":
          controlRef.current = new Int32Array(msg.control);
          dataRef.current = new Uint8Array(msg.data);
          interruptRef.current = new Uint8Array(msg.interrupt);
          break;
        case "ready":
          setVersion(msg.version);
          setStatus("ready");
          break;
        case "output":
          queueOutput({ stream: msg.stream, text: msg.text });
          break;
        case "status":
          queueOutput({ stream: "system", text: msg.text + "\n" });
          break;
        case "input-request":
          clearExecTimer();
          flushOutput();
          awaitingInputRef.current = true;
          cbRef.current.onInputRequest();
          break;
        case "done":
          clearExecTimer();
          flushOutput();
          timedOutRef.current = false;
          awaitingInputRef.current = false;
          setStatus("ready");
          runResolveRef.current?.({ ok: true, result: msg.result });
          runResolveRef.current = null;
          break;
        case "interrupted": {
          clearExecTimer();
          flushOutput();
          const timedOut = timedOutRef.current;
          timedOutRef.current = false;
          awaitingInputRef.current = false;
          setStatus("ready");
          if (timedOut) {
            cbRef.current.onOutput({
              stream: "stderr",
              text: `⏱ Exécution arrêtée après ${EXEC_TIMEOUT_MS / 1000}s (boucle infinie ?)\n`,
            });
          }
          runResolveRef.current?.({ ok: false, interrupted: true, timedOut });
          runResolveRef.current = null;
          break;
        }
        case "error":
          clearExecTimer();
          flushOutput();
          timedOutRef.current = false;
          awaitingInputRef.current = false;
          setStatus("ready");
          cbRef.current.onOutput({
            stream: "stderr",
            text: msg.message + "\n",
          });
          runResolveRef.current?.({ ok: false, error: msg.message });
          runResolveRef.current = null;
          break;
        case "fatal":
          setStatus("error");
          flushOutput();
          cbRef.current.onOutput({
            stream: "stderr",
            text: msg.message + "\n",
          });
          break;
        default:
          break;
      }
    };
    worker.postMessage({ type: "handshake" });
    return () => {
      clearExecTimer();
      if (outFlushTimerRef.current) {
        clearTimeout(outFlushTimerRef.current);
        outFlushTimerRef.current = null;
      }
      worker.terminate();
    };
  }, [clearExecTimer, flushOutput, queueOutput]);

  const run = useCallback(
    async (code) => {
      if (inflightRef.current) {
        interrupt();
        await inflightRef.current;
      }
      setStatus("running");
      timedOutRef.current = false;
      const promise = new Promise((resolve) => {
        runResolveRef.current = resolve;
        workerRef.current.postMessage({ type: "run", id: Date.now(), code });
      });
      armExecTimer();
      let tracked;
      tracked = promise.finally(() => {
        if (inflightRef.current === tracked) inflightRef.current = null;
      });
      inflightRef.current = tracked;
      return promise;
    },
    [interrupt, armExecTimer],
  );
  const sendInput = useCallback(
    (line) => {
      const control = controlRef.current;
      const data = dataRef.current;
      if (!control || !data) return;
      const bytes = new TextEncoder().encode(line);
      const len = Math.min(bytes.length, data.length);
      data.set(bytes.subarray(0, len));
      awaitingInputRef.current = false;
      Atomics.store(control, 1, len);
      Atomics.store(control, 0, 1);
      Atomics.notify(control, 0);
      if (runResolveRef.current) armExecTimer();
    },
    [armExecTimer],
  );
  const setCallbacks = useCallback((callbacks) => {
    cbRef.current = callbacks;
  }, []);
  const value = { status, version, run, interrupt, sendInput, setCallbacks };
  return (
    <PyodideContext.Provider value={value}>{children}</PyodideContext.Provider>
  );
}

export function usePyodide({ onOutput, onInputRequest } = {}) {
  const { status, version, run, interrupt, sendInput, setCallbacks } =
    useContext(PyodideContext);
  useEffect(() => {
    setCallbacks({
      onOutput: onOutput ?? (() => {}),
      onInputRequest: onInputRequest ?? (() => {}),
    });
    return () => setCallbacks({ onOutput: () => {}, onInputRequest: () => {} });
  }, [setCallbacks, onOutput, onInputRequest]);
  return { status, version, run, interrupt, sendInput };
}
