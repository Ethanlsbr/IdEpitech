import { useCallback, useEffect, useRef, useState } from 'react'
import Editor from '../components/Editor'
import Console from '../components/Console'
import Toolbar from '../components/Toolbar'
import { usePyodideRuntime } from '../context/PyodideProvider'

const SAMPLE = `print("Hello Manta!")
`

export default function SandboxScreen({ onBack }) {
  const { status, version, run, sendInput, setHandlers } = usePyodideRuntime()
  const [code, setCode] = useState(SAMPLE)
  const [lines, setLines] = useState([])
  const [awaitingInput, setAwaitingInput] = useState(false)
  const runRef = useRef(null)

  const appendOutput = useCallback(({ stream, text }) => {
    setLines((prev) => {
      const last = prev[prev.length - 1]
      if (last && last.stream === stream) {
        const merged = [...prev]
        merged[merged.length - 1] = { stream, text: last.text + text }
        return merged
      }
      return [...prev, { stream, text }]
    })
  }, [])

  useEffect(() => {
    setHandlers({ onOutput: appendOutput, onInputRequest: () => setAwaitingInput(true) })
    return () => setHandlers({})
  }, [setHandlers, appendOutput])

  const handleRun = useCallback(async () => {
    if (status !== 'ready') return
    setLines((prev) => [
      ...prev,
      { stream: 'system', text: `\n$ run · ${new Date().toLocaleTimeString()}\n` },
    ])
    const res = await run(code)
    if (res?.ok && res.result != null) appendOutput({ stream: 'result', text: `=> ${res.result}\n` })
  }, [status, code, run, appendOutput])

  runRef.current = handleRun

  function submitInput(line) {
    appendOutput({ stream: 'input', text: line + '\n' })
    setAwaitingInput(false)
    sendInput(line)
  }

  return (
    <div className="flex h-full flex-col">
      <Toolbar
        status={status}
        version={version}
        onRun={handleRun}
        onReset={() => setLines([])}
        onBack={onBack}
      />
      <main className="grid flex-1 grid-cols-1 overflow-hidden md:flex md:flex-row">
        <section className="min-h-0 min-w-0 border-zinc-800 md:flex-1 md:border-r">
          <Editor value={code} onChange={setCode} onRunRef={runRef} />
        </section>
        <section className="min-h-0 min-w-0 md:flex-1">
          <Console
            lines={lines}
            awaitingInput={awaitingInput}
            onSubmitInput={submitInput}
            onClear={() => setLines([])}
          />
        </section>
      </main>
    </div>
  )
}
