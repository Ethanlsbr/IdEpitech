import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function AuthScreen() {
  const { login, signup } = useAuth()
  const [mode, setMode] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)

  const isSignup = mode === 'signup'

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)
    setBusy(true)
    try {
      if (isSignup) await signup(username, password)
      else await login(username, password)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="text-5xl">🐍</div>
          <h1 className="mt-3 text-2xl font-semibold text-zinc-100">IdEpitech</h1>
          <p className="mt-1 text-sm text-zinc-500">Apprends Python à ton niveau, en t'amusant.</p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-[#161b22] p-6">
          <div className="mb-5 grid grid-cols-2 gap-1 rounded-lg bg-zinc-900 p-1">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`rounded-md py-1.5 text-sm font-medium transition ${
                isSignup ? 'text-zinc-400 hover:text-zinc-200' : 'bg-zinc-700 text-white'
              }`}
            >
              Connexion
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`rounded-md py-1.5 text-sm font-medium transition ${
                isSignup ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Créer un compte
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-zinc-400">Nom d'utilisateur</span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-sky-500"
              />
            </label>

            <label className="block">
              <span className="text-xs font-medium text-zinc-400">Mot de passe</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                className="mt-1 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-sky-500"
              />
            </label>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-md bg-emerald-600 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
            >
              {busy ? '…' : isSignup ? 'Créer mon compte' : 'Se connecter'}
            </button>
          </form>
        </div>

        <p className="mt-4 text-center text-xs text-zinc-600">
          Connecte-toi pour retrouver ta progression.
        </p>
      </div>
    </div>
  )
}
