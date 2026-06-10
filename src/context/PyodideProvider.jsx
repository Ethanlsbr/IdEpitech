import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const PyodideContext = createContext(null)

export function PyodideProvider({ children }) {
  const workerRef = useRef(null)
  const controlRef = useRef(null)
  const dataRef = useRef(null)
  const runResolveRef = useRef(null)
  const testResolveRef = useRef(null)
  const statusRef = useRef('loading')
  const handlersRef = useRef({ onOutput: () => {}, onInputRequest: () => {} })
  const [status, setStatus] = useState('loading')
  const [version, setVersion] = useState(null)

  const apply = useCallback((next) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  useEffect(() => {
    const worker = new Worker(new URL('../pyodide.worker.js', import.meta.url))
    workerRef.current = worker

    worker.onmessage = (e) => {
      const msg = e.data
      switch (msg.type) {
        case 'shared':
          controlRef.current = new Int32Array(msg.control)
          dataRef.current = new Uint8Array(msg.data)
          break
        case 'ready':
          setVersion(msg.version)
          apply('ready')
          break
        case 'output':
          handlersRef.current.onOutput({ stream: msg.stream, text: msg.text })
          break
        case 'status':
          handlersRef.current.onOutput({ stream: 'system', text: msg.text + '\n' })
          break
        case 'input-request':
          handlersRef.current.onInputRequest()
          break
        case 'done':
          apply('ready')
          runResolveRef.current?.({ ok: true, result: msg.result })
          runResolveRef.current = null
          break
        case 'error':
          apply('ready')
          handlersRef.current.onOutput({ stream: 'stderr', text: msg.message + '\n' })
          runResolveRef.current?.({ ok: false, error: msg.message })
          runResolveRef.current = null
          break
        case 'tests':
          apply('ready')
          testResolveRef.current?.(msg.report)
          testResolveRef.current = null
          break
        case 'tests-error':
          apply('ready')
          testResolveRef.current?.({ compileError: msg.message, tests: [] })
          testResolveRef.current = null
          break
        case 'fatal':
          apply('error')
          handlersRef.current.onOutput({ stream: 'stderr', text: msg.message + '\n' })
          break
        default:
          break
      }
    }

    worker.postMessage({ type: 'handshake' })
    return () => worker.terminate()
  }, [apply])

  const setHandlers = useCallback((handlers) => {
    handlersRef.current = {
      onOutput: handlers.onOutput ?? (() => {}),
      onInputRequest: handlers.onInputRequest ?? (() => {}),
    }
  }, [])

  const run = useCallback((code) => {
    if (statusRef.current !== 'ready') return Promise.resolve({ ok: false })
    apply('running')
    return new Promise((resolve) => {
      runResolveRef.current = resolve
      workerRef.current.postMessage({ type: 'run', id: Date.now(), code })
    })
  }, [apply])

  const runTests = useCallback((code, tests) => {
    if (statusRef.current !== 'ready') return Promise.resolve({ compileError: null, tests: [] })
    apply('running')
    return new Promise((resolve) => {
      testResolveRef.current = resolve
      workerRef.current.postMessage({ type: 'runtests', id: Date.now(), code, tests })
    })
  }, [apply])

  const sendInput = useCallback((line) => {
    const control = controlRef.current
    const data = dataRef.current
    if (!control || !data) return
    const bytes = new TextEncoder().encode(line)
    const len = Math.min(bytes.length, data.length)
    data.set(bytes.subarray(0, len))
    Atomics.store(control, 1, len)
    Atomics.store(control, 0, 1)
    Atomics.notify(control, 0)
  }, [])

  const value = { status, version, run, runTests, sendInput, setHandlers }
  return <PyodideContext.Provider value={value}>{children}</PyodideContext.Provider>
}

export function usePyodideRuntime() {
  const ctx = useContext(PyodideContext)
  if (!ctx) throw new Error('usePyodideRuntime doit être utilisé dans un PyodideProvider')
  return ctx
}
