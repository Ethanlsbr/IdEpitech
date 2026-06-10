import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { getProfile, updateProfile } from '../lib/db'

const AuthContext = createContext(null)
const EMAIL_DOMAIN = 'idepitech.local'

function toEmail(username) {
  return `${username.trim().toLowerCase()}@${EMAIL_DOMAIN}`
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadProfile = useCallback(async (sessionUser) => {
    setUser(sessionUser ? await getProfile(sessionUser.id) : null)
  }, [])

  useEffect(() => {
    let active = true
    ;(async () => {
      const { data } = await supabase.auth.getSession()
      if (!active) return
      await loadProfile(data.session?.user ?? null)
      setLoading(false)
    })()
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      loadProfile(session?.user ?? null)
    })
    return () => {
      active = false
      sub.subscription.unsubscribe()
    }
  }, [loadProfile])

  const signup = useCallback(async (username, password) => {
    if (!username.trim()) throw new Error('Choisis un nom d\'utilisateur.')
    if (password.length < 6) throw new Error('Le mot de passe doit faire au moins 6 caractères.')
    const { error } = await supabase.auth.signUp({
      email: toEmail(username),
      password,
      options: { data: { username: username.trim() } },
    })
    if (error) {
      if (/already registered/i.test(error.message)) throw new Error('Ce nom est déjà pris.')
      throw new Error(error.message)
    }
  }, [])

  const login = useCallback(async (username, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: toEmail(username),
      password,
    })
    if (error) throw new Error('Identifiants incorrects.')
  }, [])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  const setLevel = useCallback(
    async (level) => {
      if (!user) return
      setUser(await updateProfile(user.id, { level }))
    },
    [user],
  )

  const value = { user, loading, signup, login, logout, setLevel }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth doit être utilisé dans un AuthProvider')
  return ctx
}
