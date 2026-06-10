import { useState } from 'react'
import * as db from '../lib/db'
import { LEVELS } from '../lib/levels'

const FIELD = 'w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-sky-500'
const MONO = `${FIELD} font-mono`

function readFile(file, apply) {
  const reader = new FileReader()
  reader.onload = () => apply(reader.result)
  reader.readAsText(file)
}

export default function AdminExerciseForm({ exercise, onCancel, onSaved }) {
  const [title, setTitle] = useState(exercise?.title ?? '')
  const [level, setLevel] = useState(exercise?.level ?? 0)
  const [concepts, setConcepts] = useState((exercise?.concepts ?? []).join(', '))
  const [prompt, setPrompt] = useState(exercise?.prompt ?? '')
  const [starter, setStarter] = useState(exercise?.starter ?? '')
  const [hints, setHints] = useState((exercise?.hints ?? []).join('\n'))
  const [tests, setTests] = useState(exercise?.tests ?? [{ name: '', expr: '' }])
  const [solution, setSolution] = useState(exercise?.solution ?? '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  function updateTest(index, key, value) {
    setTests((list) => list.map((t, i) => (i === index ? { ...t, [key]: value } : t)))
  }

  async function save() {
    if (!title.trim()) {
      setError('Le titre est obligatoire.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      await db.upsertExercise({
        id: exercise?.id ?? `ex-${crypto.randomUUID().slice(0, 8)}`,
        level: Number(level),
        title: title.trim(),
        prompt,
        starter,
        hints: hints.split('\n').map((h) => h.trim()).filter(Boolean),
        concepts: concepts.split(',').map((c) => c.trim()).filter(Boolean),
        tests: tests.filter((t) => t.name.trim() && t.expr.trim()),
        solution,
        hidden: exercise?.hidden ?? false,
        position: exercise?.position ?? 0,
        view_code: exercise?.view_code ?? null,
      })
      await onSaved()
    } catch (err) {
      setError(err.message)
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-zinc-200">
          {exercise ? 'Éditer l\'exercice' : 'Nouvel exercice'}
        </h2>
        <button onClick={onCancel} className="text-sm text-zinc-400 hover:text-zinc-200">
          Annuler
        </button>
      </div>

      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-medium text-zinc-400">Titre du sujet</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={`mt-1 ${FIELD}`} />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-zinc-400">Niveau</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className={`mt-1 ${FIELD}`}
            >
              {LEVELS.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-medium text-zinc-400">Concepts (séparés par des virgules)</span>
          <input value={concepts} onChange={(e) => setConcepts(e.target.value)} className={`mt-1 ${FIELD}`} />
        </label>

        <label className="block">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">Énoncé / description</span>
            <label className="cursor-pointer text-xs text-sky-400 hover:text-sky-300">
              Importer un .md
              <input
                type="file"
                accept=".md,.markdown,.txt"
                className="hidden"
                onChange={(e) => e.target.files[0] && readFile(e.target.files[0], setPrompt)}
              />
            </label>
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className={`mt-1 ${FIELD}`}
          />
        </label>

        <label className="block">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">Code de base</span>
            <label className="cursor-pointer text-xs text-sky-400 hover:text-sky-300">
              Importer un .py
              <input
                type="file"
                accept=".py"
                className="hidden"
                onChange={(e) => e.target.files[0] && readFile(e.target.files[0], setStarter)}
              />
            </label>
          </div>
          <textarea
            value={starter}
            onChange={(e) => setStarter(e.target.value)}
            rows={4}
            className={`mt-1 ${MONO}`}
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium text-zinc-400">Indices (un par ligne, du plus léger au plus précis)</span>
          <textarea
            value={hints}
            onChange={(e) => setHints(e.target.value)}
            rows={3}
            className={`mt-1 ${FIELD}`}
          />
        </label>

        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">
              Tests (nom + expression Python qui doit être vraie)
            </span>
            <button
              type="button"
              onClick={() => setTests((list) => [...list, { name: '', expr: '' }])}
              className="text-xs text-sky-400 hover:text-sky-300"
            >
              + Ajouter un test
            </button>
          </div>
          <div className="space-y-2">
            {tests.map((test, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={test.name}
                  onChange={(e) => updateTest(i, 'name', e.target.value)}
                  placeholder="Nom du test"
                  className={`${FIELD} flex-1`}
                />
                <input
                  value={test.expr}
                  onChange={(e) => updateTest(i, 'expr', e.target.value)}
                  placeholder="ex: double(3) == 6"
                  className={`${MONO} flex-1`}
                />
                <button
                  type="button"
                  onClick={() => setTests((list) => list.filter((_, j) => j !== i))}
                  className="px-2 text-zinc-500 hover:text-red-400"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="text-xs font-medium text-zinc-400">Solution</span>
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            rows={4}
            className={`mt-1 ${MONO}`}
          />
        </label>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="rounded-md px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800">
            Annuler
          </button>
          <button
            onClick={save}
            disabled={busy}
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-50"
          >
            {busy ? 'Enregistrement…' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  )
}
