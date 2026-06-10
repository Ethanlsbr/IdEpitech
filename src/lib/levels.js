export const LEVELS = [
  { id: 0, key: 'never', label: 'Jamais fait', tagline: 'On démarre de zéro' },
  { id: 1, key: 'beginner', label: 'Débutant', tagline: 'Les bases' },
  { id: 2, key: 'intermediate', label: 'Intermédiaire', tagline: 'En confiance' },
  { id: 3, key: 'advanced', label: 'Avancé', tagline: 'Solide' },
  { id: 4, key: 'expert', label: 'Expert', tagline: 'Maîtrise' },
]

export const MIN_LEVEL = 0
export const MAX_LEVEL = 4

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id) ?? LEVELS[0]
}

export function clampLevel(id) {
  return Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, Math.round(id)))
}

const HELP_POLICY = {
  0: { panelOpen: true, revealed: 1, encouragement: true, hintDelay: 3 },
  1: { panelOpen: true, revealed: 1, encouragement: true, hintDelay: 5 },
  2: { panelOpen: true, revealed: 0, encouragement: false, hintDelay: 8 },
  3: { panelOpen: false, revealed: 0, encouragement: false, hintDelay: 12 },
  4: { panelOpen: false, revealed: 0, encouragement: false, hintDelay: 20 },
}

export function helpPolicy(levelId) {
  return HELP_POLICY[clampLevel(levelId)]
}

const BADGE = {
  0: 'text-zinc-300 bg-zinc-500/10',
  1: 'text-emerald-300 bg-emerald-500/10',
  2: 'text-sky-300 bg-sky-500/10',
  3: 'text-violet-300 bg-violet-500/10',
  4: 'text-amber-300 bg-amber-500/10',
}

export function levelBadge(levelId) {
  return BADGE[clampLevel(levelId)]
}
