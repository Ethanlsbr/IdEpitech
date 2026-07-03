import { useCallback, useEffect, useRef, useState } from 'react'
import Editor from './components/Editor'
import Console from './components/Console'
import Toolbar from './components/Toolbar'
import { usePyodide } from './usePyodide'

const SAMPLE = `# Welcome to Manta Editor

print("Hello Manta!")
`

const STORAGE_KEY = 'manta-code'

export default function App() {
  const [code, setCode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) ?? SAMPLE
  })
  const [lines, setLines] = useState([])
  const [awaitingInput, setAwaitingInput] = useState(false)
  const [editorWidth, setEditorWidth] = useState(50)
  const runRef = useRef(null)
  const splitRef = useRef(null)
  const dragStateRef = useRef({ startX: 0, startWidth: 50 })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, code)
  }, [code])

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

  const handleInputRequest = useCallback(() => setAwaitingInput(true), [])

  const { status, version, run, sendInput } = usePyodide({
    onOutput: appendOutput,
    onInputRequest: handleInputRequest,
  })

  const handleRun = useCallback(async () => {
    if (status !== 'ready') return
    setLines((prev) => [
      ...prev,
      { stream: 'system', text: `\n$ run · ${new Date().toLocaleTimeString()}\n` },
    ])
    const res = await run(code)
    if (res?.ok && res.result != null) {
      appendOutput({ stream: 'result', text: `=> ${res.result}\n` })
    }
  }, [status, code, run, appendOutput])

  runRef.current = handleRun

  const submitInput = useCallback(
    (line) => {
      appendOutput({ stream: 'input', text: line + '\n' })
      setAwaitingInput(false)
      sendInput(line)
    },
    [appendOutput, sendInput],
  )

  const handleDragMove = useCallback((event) => {
    const container = splitRef.current
    if (!container) return

    const { startX, startWidth } = dragStateRef.current
    const delta = event.clientX - startX
    const nextWidth = startWidth + (delta / container.clientWidth) * 100
    setEditorWidth(Math.min(80, Math.max(20, nextWidth)))
  }, [])

  const stopDragging = useCallback(() => {
    window.removeEventListener('pointermove', handleDragMove)
    window.removeEventListener('pointerup', stopDragging)
    window.removeEventListener('pointercancel', stopDragging)
  }, [handleDragMove])

  const handleDividerPointerDown = useCallback(
    (event) => {
      if (event.button !== 0) return

      event.preventDefault()
      dragStateRef.current = {
        startX: event.clientX,
        startWidth: editorWidth,
      }

      window.addEventListener('pointermove', handleDragMove)
      window.addEventListener('pointerup', stopDragging)
      window.addEventListener('pointercancel', stopDragging)
    },
    [editorWidth, handleDragMove, stopDragging],
  )

  return (
    <div className="flex h-full flex-col">
      <Toolbar
        status={status}
        version={version}
        onRun={handleRun}
        onReset={() => setLines([])}
      />

      <main ref={splitRef} className="grid flex-1 grid-cols-1 overflow-hidden md:flex md:flex-row">
        <section
          className="min-h-0 min-w-0 border-zinc-800 md:border-r"
          style={{
            flex: `0 0 ${editorWidth}%`,
          }}
        >
          <Editor value={code} onChange={setCode} onRunRef={runRef} />
        </section>
        <button
          type="button"
          aria-label="Resize editor and console"
          onPointerDown={handleDividerPointerDown}
          className="hidden md:block md:h-full md:w-2 md:flex-none md:cursor-col-resize md:bg-zinc-800/60 md:hover:bg-sky-500/60"
          style={{ touchAction: 'none' }}
        />
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
