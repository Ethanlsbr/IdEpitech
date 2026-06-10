import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

const PresenceContext = createContext(null)

export function PresenceProvider({ children }) {
  const { user } = useAuth()
  const channelRef = useRef(null)
  const subscribedRef = useRef(false)
  const activityRef = useRef('En ligne')
  const [online, setOnline] = useState([])

  useEffect(() => {
    if (!user) return undefined

    const channel = supabase.channel('presence:learners', {
      config: { presence: { key: user.id } },
    })
    channelRef.current = channel

    const track = () =>
      channel.track({
        id: user.id,
        username: user.username,
        role: user.role,
        activity: activityRef.current,
        at: Date.now(),
      })

    channel.on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState()
      setOnline(Object.values(state).map((entries) => entries[0]))
    })

    channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        subscribedRef.current = true
        track()
      }
    })

    return () => {
      subscribedRef.current = false
      channelRef.current = null
      supabase.removeChannel(channel)
    }
  }, [user])

  const setActivity = useCallback(
    (activity) => {
      activityRef.current = activity
      if (channelRef.current && subscribedRef.current && user) {
        channelRef.current.track({
          id: user.id,
          username: user.username,
          role: user.role,
          activity,
          at: Date.now(),
        })
      }
    },
    [user],
  )

  return <PresenceContext.Provider value={{ online, setActivity }}>{children}</PresenceContext.Provider>
}

export function usePresence() {
  return useContext(PresenceContext) ?? { online: [], setActivity: () => {} }
}
