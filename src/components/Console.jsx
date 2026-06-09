import { useEffect, useRef } from 'react'

const STREAM_STYLE = {
  stdout: 'text-zinc-100',
  stderr: 'text-red-400',
  system: 'text-zinc-500 italic',
  result: 'text-emerald-400',
  prompt: 'text-sky-400',
  input: 'text-amber-300',
}

export default function Console({ lines, awaitingInput, onSubmitInput, onClear }) {
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [lines, awaitingInput])

  useEffect(() => {
    if (awaitingInput) inputRef.current?.focus()
  }, [awaitingInput])

  return (
    <div className="flex h-full flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-1.5">
        <span className="text-xs font-semibold tracking-wide text-zinc-400">
          CONSOLE
        </span>
        <button
          onClick={onClear}
          className="rounded px-2 py-0.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
        >
          Effacer
        </button>
      </div>

      <div className="thin-scroll flex-1 overflow-auto px-3 py-2 font-mono text-[13px] leading-relaxed">
        {lines.map((l, i) => (
          <span key={i} className={`whitespace-pre-wrap ${STREAM_STYLE[l.stream] || ''}`}>
            {l.text}
          </span>
        ))}

        {awaitingInput && (
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault()
              onSubmitInput(inputRef.current.value)
              inputRef.current.value = ''
            }}
          >
            <span className="text-sky-400">❯ </span>
            <input
              ref={inputRef}
              className="flex-1 bg-transparent font-mono text-[13px] text-amber-300 outline-none"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        )}
        <div ref={endRef} />
      </div>
    </div>
  )
}
