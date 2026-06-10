import { useCallback, useEffect, useRef, useState } from 'react'
import Editor from '../components/Editor'
import Console from '../components/Console'
import HintPanel from '../components/HintPanel'
import { useAuth } from '../context/AuthContext'
import { usePyodideRuntime } from '../context/PyodideProvider'
import * as db from '../lib/db'
import { getLevel, levelBadge } from '../lib/levels'

export default function ExerciseScreen({ exercise, levelId, onBack, onSolved }) {
  const { user } = useAuth()
  const { status, run, runTests, sendInput, setHandlers } = usePyodideRuntime()
  const [code, setCode] = useState(exercise.starter)
  const [lines, setLines] = useState([])
  const [awaitingInput, setAwaitingInput] = useState(false)
  const [report, setReport] = useState(null)
  const [solved, setSolved] = useState(false)
  const attemptsRef = useRef(0)
  const hintsRef = useRef(0)
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

  const level = getLevel(levelId)

  const handleRun = useCallback(async () => {
    if (status !== 'ready') return
    setLines((prev) => [...prev, { stream: 'system', text: '\n$ run\n' }])
    const res = await run(code)
    if (res?.ok && res.result != null) appendOutput({ stream: 'result', text: `=> ${res.result}\n` })
  }, [status, code, run, appendOutput])

  runRef.current = handleRun

  async function handleValidate() {
    if (status !== 'ready') return
    setReport(null)
    setLines((prev) => [...prev, { stream: 'system', text: '\n$ validation\n' }])
    attemptsRef.current += 1
    const result = await runTests(code, exercise.tests)
    setReport(result)
    const passed = !result.compileError && result.tests.length > 0 && result.tests.every((t) => t.ok)
    if (passed && !solved) {
      setSolved(true)
      await db.setProgress({
        userId: user.id,
        exerciseId: exercise.id,
        status: 'solved',
        attempts: attemptsRef.current,
        hintsUsed: hintsRef.current,
        solvedAt: Date.now(),
      })
      onSolved?.()
    }
  }

  function submitInput(line) {
    appendOutput({ stream: 'input', text: line + '\n' })
    setAwaitingInput(false)
    sendInput(line)
  }

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-sm text-zinc-400 hover:text-zinc-200">
            ← Retour
          </button>
          <span className="text-sm font-semibold text-zinc-100">{exercise.title}</span>
          <span className={`rounded px-2 py-0.5 text-xs ${levelBadge(levelId)}`}>
            {level.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={status !== 'ready'}
            className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 disabled:opacity-40"
          >
            ▶ Exécuter
          </button>
          <button
            onClick={handleValidate}
            disabled={status !== 'ready'}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-40"
          >
            ✓ Valider
          </button>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
        <aside className="thin-scroll w-full shrink-0 space-y-4 overflow-auto border-b border-zinc-800 p-4 lg:w-80 lg:border-b-0 lg:border-r">
          <div className="rounded-lg border border-zinc-800 bg-[#161b22] p-4">
            <h2 className="text-sm font-semibold text-zinc-100">Énoncé</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{exercise.prompt}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {exercise.concepts.map((c) => (
                <span key={c} className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-400">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <HintPanel
            hints={exercise.hints}
            solution={exercise.solution}
            levelId={levelId}
            onHintRevealed={() => (hintsRef.current += 1)}
          />

          {report && (
            <div className="rounded-lg border border-zinc-800 bg-[#161b22] p-4">
              <h3 className="text-sm font-semibold text-zinc-100">Résultats</h3>
              {report.compileError ? (
                <pre className="mt-2 overflow-auto rounded bg-[#0d1117] p-3 font-mono text-[12px] text-red-400">
                  {report.compileError}
                </pre>
              ) : (
                <ul className="mt-2 space-y-1.5">
                  {report.tests.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={t.ok ? 'text-emerald-400' : 'text-red-400'}>
                        {t.ok ? '✓' : '✗'}
                      </span>
                      <span className="text-zinc-300">
                        {t.name}
                        {t.error && <span className="block text-xs text-red-400">{t.error}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {solved && (
                <p className="mt-3 rounded bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                  🎉 Exercice réussi ! Tous les tests passent.
                </p>
              )}
            </div>
          )}
        </aside>

        <section className="min-h-0 min-w-0 flex-1 border-zinc-800 lg:border-r">
          <Editor value={code} onChange={setCode} onRunRef={runRef} />
        </section>

        <section className="min-h-0 min-w-0 flex-1">
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
