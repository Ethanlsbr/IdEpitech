import { useEffect, useState } from 'react'
import { useSettings } from '../context/SettingsProvider'
import * as db from '../lib/db'
import { LEVELS } from '../lib/levels'

export default function AdminSettings() {
  const { hintDelays, refresh } = useSettings()
  const [delays, setDelays] = useState(hintDelays)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setDelays(hintDelays)
  }, [hintDelays])

  async function save() {
    setSaving(true)
    setSaved(false)
    const clean = {}
    for (const level of LEVELS) clean[level.id] = Math.max(0, Number(delays[level.id]) || 0)
    await db.setSetting('hint_delays', clean)
    await refresh()
    setSaving(false)
    setSaved(true)
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <h2 className="text-sm font-semibold text-zinc-200">Délai entre les indices</h2>
      <p className="mt-1 text-sm text-zinc-500">
        Temps d'attente (en secondes) imposé avant de pouvoir dévoiler l'indice suivant, par niveau.
      </p>

      <div className="mt-6 space-y-3 rounded-xl border border-zinc-800 bg-[#161b22] p-6">
        {LEVELS.map((level) => (
          <div key={level.id} className="flex items-center justify-between">
            <span className="text-sm text-zinc-300">{level.label}</span>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                value={delays[level.id] ?? 0}
                onChange={(e) =>
                  setDelays((d) => ({ ...d, [level.id]: e.target.value }))
                }
                className="w-20 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 outline-none focus:border-sky-500"
              />
              <span className="text-xs text-zinc-500">s</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={save}
          disabled={saving}
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500 disabled:opacity-50"
        >
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
        {saved && <span className="text-sm text-emerald-400">Enregistré ✓</span>}
      </div>
    </div>
  )
}
