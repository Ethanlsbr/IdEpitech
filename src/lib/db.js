import { supabase } from './supabase'

export async function getProfile(id) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single()
  if (error) return null
  return data
}

export async function updateProfile(id, patch) {
  const { data, error } = await supabase.from('profiles').update(patch).eq('id', id).select().single()
  if (error) throw error
  return data
}

export async function saveExamResult({ userId, level, score, total, byConcept }) {
  const { error } = await supabase
    .from('exam_results')
    .insert({ user_id: userId, level, score, total, by_concept: byConcept })
  if (error) throw error
}

export async function getExamResults(userId) {
  const { data, error } = await supabase
    .from('exam_results')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  if (error) return []
  return data.map((row) => ({ ...row, byConcept: row.by_concept, createdAt: row.created_at }))
}

export async function setProgress({ userId, exerciseId, status, attempts, hintsUsed, solvedAt }) {
  const { error } = await supabase.from('progress').upsert({
    user_id: userId,
    exercise_id: exerciseId,
    status,
    attempts,
    hints_used: hintsUsed,
    solved_at: solvedAt ? new Date(solvedAt).toISOString() : null,
    updated_at: new Date().toISOString(),
  })
  if (error) throw error
}

export async function getProgress(userId) {
  const { data, error } = await supabase.from('progress').select('*').eq('user_id', userId)
  if (error) return {}
  const map = {}
  for (const row of data) {
    map[row.exercise_id] = { ...row, exerciseId: row.exercise_id }
  }
  return map
}

export async function getAllProfiles() {
  const { data, error } = await supabase.from('profiles').select('*').order('created_at')
  if (error) return []
  return data
}

export async function getAllProgress() {
  const { data, error } = await supabase.from('progress').select('user_id, exercise_id, status')
  if (error) return []
  return data
}

export async function updateProfileRole(id, role) {
  const { error } = await supabase.from('profiles').update({ role }).eq('id', id)
  if (error) throw error
}

export async function listVisibleExercises() {
  const { data, error } = await supabase
    .from('exercises')
    .select('*')
    .eq('hidden', false)
    .order('level')
    .order('position')
  if (error) return []
  return data
}

export async function listAllExercises() {
  const { data, error } = await supabase
    .from('exercises')
    .select('*')
    .order('level')
    .order('position')
  if (error) return []
  return data
}

export async function upsertExercise(exercise) {
  const { error } = await supabase.from('exercises').upsert(exercise)
  if (error) throw error
}

export async function deleteExercise(id) {
  const { error } = await supabase.from('exercises').delete().eq('id', id)
  if (error) throw error
}

export async function seedExercises(list) {
  const rows = list.map((exercise, index) => ({ ...exercise, position: index, hidden: false }))
  const { error } = await supabase.from('exercises').upsert(rows)
  if (error) throw error
}

export async function getSetting(key) {
  const { data, error } = await supabase.from('settings').select('value').eq('key', key).maybeSingle()
  if (error) return null
  return data?.value ?? null
}

export async function setSetting(key, value) {
  const { error } = await supabase.from('settings').upsert({ key, value })
  if (error) throw error
}
