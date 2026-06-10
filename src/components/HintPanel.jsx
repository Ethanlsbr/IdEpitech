import { useEffect, useState } from 'react'
import { helpPolicy } from '../lib/levels'
import { useSettings } from '../context/SettingsProvider'

export default function HintPanel({ hints, solution, levelId, onHintRevealed }) {
  const policy = helpPolicy(levelId)
  const { hintDelays } = useSettings()
  const delay = hintDelays?.[levelId] ?? policy.hintDelay
  const [open, setOpen] = useState(policy.panelOpen)
  const [revealed, setRevealed] = useState(Math.min(policy.revealed, hints.length))
  const [showSolution, setShowSolution] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const id = setInterval(() => setCooldown((c) => Math.max(0, c - 1)), 1000)
    return () => clearInterval(id)
  }, [cooldown])

  function revealNext() {
    if (cooldown > 0) return
    setRevealed((n) => Math.min(n + 1, hints.length))
    setCooldown(delay)
    onHintRevealed?.()
  }

  return (
    <div className="rounded-lg border border-zinc-800 bg-[#161b22]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-2.5 text-left"
      >
        <span className="text-sm font-medium text-zinc-200">
          💡 Aide
          {revealed > 0 && <span className="ml-2 text-xs text-zinc-500">{revealed}/{hints.length} indices</span>}
        </span>
        <span className="text-xs text-zinc-500">{open ? '▾' : '▸'}</span>
      </button>

      {open && (
        <div className="space-y-3 border-t border-zinc-800 px-4 py-3">
          {policy.encouragement && revealed === 0 && (
            <p className="text-sm text-zinc-400">
              Pas de panique, on avance pas à pas. Dévoile un indice quand tu bloques.
            </p>
          )}

          {hints.slice(0, revealed).map((hint, i) => (
            <p key={i} className="text-sm text-zinc-300">
              <span className="mr-2 text-zinc-500">{i + 1}.</span>
              {hint}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            {revealed < hints.length && (
              <button
                type="button"
                onClick={revealNext}
                disabled={cooldown > 0}
                className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {cooldown > 0
                  ? `Patiente ${cooldown}s…`
                  : revealed === 0
                    ? 'Donne-moi un indice'
                    : 'Indice suivant'}
              </button>
            )}
            {revealed === hints.length && !showSolution && (
              <button
                type="button"
                onClick={() => setShowSolution(true)}
                disabled={cooldown > 0}
                className="rounded-md border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {cooldown > 0 ? `Solution dans ${cooldown}s…` : 'Voir la solution'}
              </button>
            )}
          </div>

          {showSolution && (
            <pre className="mt-2 overflow-auto rounded-lg bg-[#0d1117] p-3 font-mono text-[12px] text-emerald-300">
              {solution}
            </pre>
          )}
        </div>
      )}
    </div>
  )
}
