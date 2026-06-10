import { useCallback, useEffect, useMemo, useState } from 'react'
import * as db from '../lib/db'
import { EXERCISES as DEFAULT_EXERCISES } from '../data/exercises'
import { getLevel } from '../lib/levels'
import AdminExerciseForm from './AdminExerciseForm'

function stripMeta(exercise) {
  const { created_at, ...rest } = exercise
  return rest
}

export default function AdminContent() {
  const [exercises, setExercises] = useState([])
  const [visibility, setVisibility] = useState({})
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null)
  const [busy, setBusy] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const list = await db.listAllExercises()
    setExercises(list)
    setVisibility(Object.fromEntries(list.map((e) => [e.id, !e.hidden])))
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const dirty = useMemo(
    () => exercises.some((e) => !e.hidden !== visibility[e.id]),
    [exercises, visibility],
  )

  async function seed() {
    setBusy(true)
    try {
      await db.seedExercises(DEFAULT_EXERCISES)
      await load()
    } finally {
      setBusy(false)
    }
  }

  async function publish() {
    setBusy(true)
    try {
      const changed = exercises.filter((e) => !e.hidden !== visibility[e.id])
      for (const e of changed) {
        await db.upsertExercise({ ...stripMeta(e), hidden: !visibility[e.id] })
      }
      await load()
    } finally {
      setBusy(false)
    }
  }

  async function remove(id) {
    if (!window.confirm('Supprimer cet exercice ?')) return
    setBusy(true)
    try {
      await db.deleteExercise(id)
      await load()
    } finally {
      setBusy(false)
    }
  }

  if (editing) {
    return (
      <AdminExerciseForm
        exercise={editing === 'new' ? null : editing}
        onCancel={() => setEditing(null)}
        onSaved={async () => {
          setEditing(null)
          await load()
        }}
      />
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-zinc-200">
          Exercices <span className="text-zinc-600">({exercises.length})</span>
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEditing('new')}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
          >
            + Nouvel exercice
          </button>
          <button
            onClick={publish}
            disabled={!dirty || busy}
            className="rounded-md bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky-500 disabled:opacity-40"
          >
            Publier la visibilité
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Chargement…</p>
      ) : exercises.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-700 p-8 text-center">
          <p className="text-sm text-zinc-400">Aucun exercice en base.</p>
          <button
            onClick={seed}
            disabled={busy}
            className="mt-4 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-50"
          >
            Initialiser les exercices par défaut
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#161b22] text-xs text-zinc-500">
              <tr>
                <th className="px-4 py-2.5 font-medium">Visible</th>
                <th className="px-4 py-2.5 font-medium">Titre</th>
                <th className="px-4 py-2.5 font-medium">Niveau</th>
                <th className="px-4 py-2.5 font-medium" />
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercise) => (
                <tr key={exercise.id} className="border-t border-zinc-800">
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={visibility[exercise.id] ?? false}
                      onChange={(e) =>
                        setVisibility((v) => ({ ...v, [exercise.id]: e.target.checked }))
                      }
                      className="h-4 w-4 accent-emerald-500"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-zinc-100">{exercise.title}</td>
                  <td className="px-4 py-3 text-zinc-400">{getLevel(exercise.level).label}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setEditing(exercise)}
                      className="mr-3 text-xs text-sky-400 hover:text-sky-300"
                    >
                      Éditer
                    </button>
                    <button
                      onClick={() => remove(exercise.id)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
