import { useState } from 'react'
import AdminStudents from './AdminStudents'
import AdminContent from './AdminContent'
import AdminSettings from './AdminSettings'

const TABS = [
  { key: 'students', label: 'Élèves' },
  { key: 'content', label: 'Contenu' },
  { key: 'settings', label: 'Réglages' },
]

export default function AdminScreen({ onBack }) {
  const [tab, setTab] = useState('students')

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-sm text-zinc-400 hover:text-zinc-200">
            ← Retour
          </button>
          <span className="text-sm font-semibold text-zinc-100">Espace admin</span>
          <nav className="flex items-center gap-1">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                  tab === t.key ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="thin-scroll flex-1 overflow-auto">
        {tab === 'students' && <AdminStudents />}
        {tab === 'content' && <AdminContent />}
        {tab === 'settings' && <AdminSettings />}
      </div>
    </div>
  )
}
