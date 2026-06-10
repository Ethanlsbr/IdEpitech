import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import * as db from '../lib/db'

const SettingsContext = createContext(null)

export const DEFAULT_HINT_DELAYS = { 0: 3, 1: 5, 2: 8, 3: 12, 4: 20 }

export function SettingsProvider({ children }) {
  const [hintDelays, setHintDelays] = useState(DEFAULT_HINT_DELAYS)

  const refresh = useCallback(async () => {
    const value = await db.getSetting('hint_delays')
    if (value) setHintDelays({ ...DEFAULT_HINT_DELAYS, ...value })
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return (
    <SettingsContext.Provider value={{ hintDelays, refresh }}>{children}</SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext) ?? { hintDelays: DEFAULT_HINT_DELAYS, refresh: () => {} }
}
