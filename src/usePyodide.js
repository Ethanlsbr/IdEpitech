import { useCallback, useEffect, useRef, useState } from "react";

export function usePyodide({ onOutput, onInputRequest }) {
  const workerRef = useRef(null);
  const controlRef = useRef(null);
  const dataRef = useRef(null);
  const runResolveRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [version, setVersion] = useState(null);

  const cbRef = useRef({ onOutput, onInputRequest });
  cbRef.current = { onOutput, onInputRequest };

  useEffect(() => {
    const worker = new Worker(new URL("./pyodide.worker.js", import.meta.url));
    workerRef.current = worker;

    worker.onmessage = (event) => {
      const msg = event.data;
      switch (msg.type) {
        case "shared":
          controlRef.current = new Int32Array(msg.control);
          dataRef.current = new Uint8Array(msg.data);
          break;
        case "ready":
          setVersion(msg.version);
          setStatus("ready");
          break;
        case "output":
          cbRef.current.onOutput({ stream: msg.stream, text: msg.text });
          break;
        case "status":
          cbRef.current.onOutput({ stream: "system", text: msg.text + "\n" });
          break;
        case "input-request":
          cbRef.current.onInputRequest();
          break;
        case "done":
          setStatus("ready");
          runResolveRef.current?.({ ok: true, result: msg.result });
          runResolveRef.current = null;
          break;
        case "error":
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
    return () => worker.terminate();
  }, []);

  const run = useCallback(
    (code) => {
      if (status !== "ready") return Promise.resolve({ ok: false });
      setStatus("running");
      return new Promise((resolve) => {
        runResolveRef.current = resolve;
        workerRef.current.postMessage({ type: "run", id: Date.now(), code });
      });
    },
    [status],
  );

  const sendInput = useCallback((line) => {
    const control = controlRef.current;
    const data = dataRef.current;
    if (!control || !data) return;
    const bytes = new TextEncoder().encode(line);
    const len = Math.min(bytes.length, data.length);
    data.set(bytes.subarray(0, len));
    Atomics.store(control, 1, len);
    Atomics.store(control, 0, 1);
    Atomics.notify(control, 0);
  }, []);

  return { status, version, run, sendInput };
}
