import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import * as db from '../lib/db'
import { EXERCISES as DEFAULT_EXERCISES } from '../data/exercises'
import { clampLevel, getLevel, LEVELS, levelBadge } from '../lib/levels'

export default function DashboardScreen({ onStartExercise, onRetakeExam, onSandbox, onAdmin }) {
  const { user, logout } = useAuth()
  const [progress, setProgress] = useState({})
  const [lastExam, setLastExam] = useState(null)
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    let active = true
    ;(async () => {
      const [p, exams] = await Promise.all([db.getProgress(user.id), db.getExamResults(user.id)])
      let ex = await db.listVisibleExercises()
      if (ex.length === 0 && user.role === 'admin') {
        const all = await db.listAllExercises()
        if (all.length === 0) {
          await db.seedExercises(DEFAULT_EXERCISES)
          ex = await db.listVisibleExercises()
        }
      }
      if (active) {
        setProgress(p)
        setLastExam(exams[0] ?? null)
        setExercises(ex)
      }
    })()
    return () => {
      active = false
    }
  }, [user.id, user.role])

  const recommended = clampLevel(user.level ?? 0)
  const level = getLevel(recommended)
  const orderedLevels = [...LEVELS].sort(
    (a, b) => Math.abs(a.id - recommended) - Math.abs(b.id - recommended),
  )
  const solvedCount = Object.values(progress).filter((p) => p.status === 'solved').length

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">🐍</span>
          <h1 className="text-sm font-semibold text-zinc-100">IdEpitech</h1>
        </div>
        <div className="flex items-center gap-3">
          {user.role === 'admin' && (
            <button
              onClick={onAdmin}
              className="rounded-md bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20"
            >
              Admin
            </button>
          )}
          <button onClick={onSandbox} className="text-xs text-zinc-400 hover:text-zinc-200">
            Bac à sable
          </button>
          <button
            onClick={onRetakeExam}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-500"
          >
            Refaire l'examen
          </button>
          <span className="text-xs text-zinc-500">{user.username}</span>
          <button onClick={logout} className="text-xs text-zinc-500 hover:text-zinc-300">
            Déconnexion
          </button>
        </div>
      </header>

      <div className="thin-scroll flex-1 overflow-auto">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <section className="rounded-xl border border-zinc-800 bg-[#161b22] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">Ton niveau</p>
                <div className="mt-1 flex items-center gap-3">
                  <h2 className="text-2xl font-semibold text-zinc-100">{level.label}</h2>
                  <span className={`rounded px-2 py-0.5 text-xs ${levelBadge(recommended)}`}>
                    {level.tagline}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold text-emerald-400">{solvedCount}</p>
                <p className="text-xs text-zinc-500">exercices réussis</p>
              </div>
            </div>
            {lastExam && (
              <p className="mt-4 text-xs text-zinc-500">
                Dernier examen : {lastExam.score}/{lastExam.total} bonnes réponses
              </p>
            )}
          </section>

          {exercises.length === 0 && (
            <p className="mt-8 text-sm text-zinc-500">
              Aucun exercice disponible pour le moment
              {user.role === 'admin' && ' — va dans Admin → Contenu pour les initialiser.'}
            </p>
          )}

          {orderedLevels.map((lvl) => {
            const list = exercises.filter((e) => e.level === lvl.id)
            if (list.length === 0) return null
            const done = list.filter((e) => progress[e.id]?.status === 'solved').length
            return (
              <section key={lvl.id} className="mt-8">
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-sm font-semibold text-zinc-200">{lvl.label}</h3>
                  {lvl.id === recommended && (
                    <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                      Recommandé pour toi
                    </span>
                  )}
                  <span className="text-xs text-zinc-600">
                    {done}/{list.length}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {list.map((exercise) => {
                    const isSolved = progress[exercise.id]?.status === 'solved'
                    return (
                      <button
                        key={exercise.id}
                        onClick={() => onStartExercise(exercise)}
                        className="flex flex-col items-start rounded-lg border border-zinc-800 bg-[#161b22] p-4 text-left transition hover:border-zinc-600"
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-sm font-medium text-zinc-100">{exercise.title}</span>
                          {isSolved && <span className="text-emerald-400">✓</span>}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {exercise.concepts.map((c) => (
                            <span key={c} className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-400">
                              {c}
                            </span>
                          ))}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
