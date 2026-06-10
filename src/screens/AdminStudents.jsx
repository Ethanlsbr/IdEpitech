import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { usePresence } from '../context/PresenceProvider'
import * as db from '../lib/db'
import { getLevel } from '../lib/levels'

export default function AdminStudents() {
  const { user } = useAuth()
  const { online } = usePresence()
  const [profiles, setProfiles] = useState([])
  const [progress, setProgress] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    const [p, pr, ex] = await Promise.all([
      db.getAllProfiles(),
      db.getAllProgress(),
      db.listVisibleExercises(),
    ])
    setProfiles(p)
    setProgress(pr)
    setTotal(ex.length)
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const solvedByUser = useMemo(() => {
    const map = {}
    for (const row of progress) {
      if (row.status === 'solved') map[row.user_id] = (map[row.user_id] ?? 0) + 1
    }
    return map
  }, [progress])

  const onlineById = useMemo(() => {
    const map = {}
    for (const entry of online) map[entry.id] = entry
    return map
  }, [online])

  async function changeRole(profile, role) {
    setBusyId(profile.id)
    try {
      await db.updateProfileRole(profile.id, role)
      await load()
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-zinc-200">
          Élèves <span className="text-zinc-600">({profiles.length})</span>
        </h2>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {online.length} en ligne
          </span>
          <button
            onClick={load}
            className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 hover:border-zinc-500"
          >
            Rafraîchir
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-zinc-500">Chargement…</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#161b22] text-xs text-zinc-500">
              <tr>
                <th className="px-4 py-2.5 font-medium">Élève</th>
                <th className="px-4 py-2.5 font-medium">Niveau</th>
                <th className="px-4 py-2.5 font-medium">Complétion</th>
                <th className="px-4 py-2.5 font-medium">Statut</th>
                <th className="px-4 py-2.5 font-medium">Rôle</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => {
                const solved = solvedByUser[profile.id] ?? 0
                const pct = total ? Math.round((solved / total) * 100) : 0
                const presence = onlineById[profile.id]
                const isSelf = profile.id === user.id
                return (
                  <tr key={profile.id} className="border-t border-zinc-800">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-zinc-100">{profile.username}</span>
                        {profile.role === 'admin' && (
                          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-300">
                            admin
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-zinc-300">
                      {profile.level == null ? (
                        <span className="text-zinc-600">Pas évalué</span>
                      ) : (
                        getLevel(profile.level).label
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 overflow-hidden rounded bg-zinc-800">
                          <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-zinc-400">
                          {solved}/{total}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {presence ? (
                        <span className="flex items-center gap-1.5 text-xs text-zinc-300">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          {presence.activity}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                          <span className="h-2 w-2 rounded-full bg-zinc-700" />
                          Hors ligne
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {isSelf ? (
                        <span className="text-xs text-zinc-600">toi</span>
                      ) : profile.role === 'admin' ? (
                        <button
                          disabled={busyId === profile.id}
                          onClick={() => changeRole(profile, 'student')}
                          className="rounded-md border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-500 disabled:opacity-50"
                        >
                          Repasser élève
                        </button>
                      ) : (
                        <button
                          disabled={busyId === profile.id}
                          onClick={() => changeRole(profile, 'admin')}
                          className="rounded-md bg-amber-500/10 px-2.5 py-1 text-xs text-amber-300 hover:bg-amber-500/20 disabled:opacity-50"
                        >
                          Passer admin
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
