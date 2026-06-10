import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import * as db from '../lib/db'
import { computeResult, createExam, EXAM_LENGTH, isFinished, nextQuestion, submitAnswer } from '../lib/exam'
import { getLevel } from '../lib/levels'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    ref.current = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(ref.current)
  }, [])
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return <span className="font-mono text-xs text-zinc-500">{mm}:{ss}</span>
}

export default function ExamScreen({ onDone, onCancel }) {
  const { user, setLevel } = useAuth()
  const [state, setState] = useState(() => createExam())
  const [question, setQuestion] = useState(null)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    setQuestion(nextQuestion(createExam()))
  }, [])

  async function finish(finalState) {
    const res = computeResult(finalState)
    setResult(res)
    await db.saveExamResult({
      userId: user.id,
      level: res.level,
      score: res.score,
      total: res.total,
      byConcept: res.byConcept,
    })
    await setLevel(res.level)
  }

  function next() {
    const updated = submitAnswer(state, question, selected)
    setState(updated)
    setSelected(null)
    setRevealed(false)
    if (isFinished(updated)) finish(updated)
    else setQuestion(nextQuestion(updated))
  }

  if (result) {
    const level = getLevel(result.level)
    return (
      <div className="flex h-full items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-[#161b22] p-8 text-center">
          <p className="text-sm text-zinc-500">Ton niveau estimé</p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-100">{level.label}</h2>
          <p className="mt-1 text-sm text-zinc-400">{level.tagline}</p>
          <p className="mt-6 text-sm text-zinc-400">
            {result.score} bonnes réponses sur {result.total}
          </p>
          <button
            onClick={() => onDone(result)}
            className="mt-6 w-full rounded-md bg-emerald-600 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Voir mes exercices
          </button>
        </div>
      </div>
    )
  }

  if (!question) return null

  const progress = Math.round((state.asked.length / EXAM_LENGTH) * 100)

  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Question {state.asked.length + 1} / {EXAM_LENGTH}
          </span>
          <div className="flex items-center gap-3">
            <Timer />
            {onCancel && (
              <button onClick={onCancel} className="text-xs text-zinc-500 hover:text-zinc-300">
                Quitter
              </button>
            )}
          </div>
        </div>

        <div className="mb-6 h-1 overflow-hidden rounded bg-zinc-800">
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
        </div>

        <div className="rounded-xl border border-zinc-800 bg-[#161b22] p-6">
          <h2 className="text-base font-medium text-zinc-100">{question.prompt}</h2>
          {question.code && (
            <pre className="mt-4 overflow-auto rounded-lg bg-[#0d1117] p-4 font-mono text-[13px] text-zinc-200">
              {question.code}
            </pre>
          )}

          <div className="mt-5 space-y-2">
            {question.choices.map((choice, i) => {
              const isPicked = selected === i
              const isAnswer = i === question.answer
              let tone = 'border-zinc-700 hover:border-zinc-500'
              if (revealed && isAnswer) tone = 'border-emerald-500 bg-emerald-500/10'
              else if (revealed && isPicked) tone = 'border-red-500 bg-red-500/10'
              else if (isPicked) tone = 'border-sky-500 bg-sky-500/10'
              return (
                <button
                  key={i}
                  type="button"
                  disabled={revealed}
                  onClick={() => setSelected(i)}
                  className={`w-full rounded-lg border px-4 py-2.5 text-left font-mono text-sm text-zinc-100 transition ${tone}`}
                >
                  {choice}
                </button>
              )
            })}
          </div>

          <div className="mt-6 flex justify-end">
            {revealed ? (
              <button
                onClick={next}
                className="rounded-md bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {state.asked.length + 1 >= EXAM_LENGTH ? 'Terminer' : 'Suivant'}
              </button>
            ) : (
              <button
                onClick={() => selected != null && setRevealed(true)}
                disabled={selected == null}
                className="rounded-md bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:opacity-40"
              >
                Valider
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
