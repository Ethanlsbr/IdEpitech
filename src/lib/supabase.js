import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  throw new Error(
    'Supabase non configuré : renseigne VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY dans un fichier .env',
  )
}

export const supabase = createClient(url, anonKey)
