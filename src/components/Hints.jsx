import { useEffect, useState } from "react";

const COOLDOWN_MS = 60 * 60 * 1000;
const STORAGE_KEY = "manta-hints-";

function loadState(id) {
  try {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEY + id)) ?? {
        count: 0,
        last: 0,
      }
    );
  } catch {
    return { count: 0, last: 0 };
  }
}

export default function Hints({ project }) {
  const hints = project.hints ?? [];
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(() => loadState(project.id));
  const [now, setNow] = useState(Date.now());
  const [viewIndex, setViewIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(timer);
  }, []);
  if (hints.length === 0) return null;
  const remaining = state.count === 0 ? 0 : COOLDOWN_MS - (now - state.last);
  const canClaim = state.count < hints.length && remaining <= 0;
  const claim = () => {
    if (!canClaim) return;
    const next = { count: state.count + 1, last: Date.now() };
    localStorage.setItem(STORAGE_KEY + project.id, JSON.stringify(next));
    setState(next);
    setViewIndex(next.count - 1);
  };
  const safeIndex = Math.min(viewIndex, Math.max(state.count - 1, 0));

  const label =
    state.count >= hints.length
      ? "Tous les indices débloqués"
      : canClaim
        ? "Demander un indice"
        : `Prochain indice dans ${Math.ceil(remaining / 60000)} min`;
  return (
    <div className="absolute bottom-3 right-3 z-10 w-72 max-w-[80vw]">
      {open && (
        <div className="mb-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-lg">
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Indices ({state.count}/{hints.length})
          </span>
          {state.count === 0 ? (
            <p className="mt-2 text-xs italic text-[var(--text-faint)]">
              Aucun indice débloqué pour l'instant.
            </p>
          ) : (
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewIndex((i) => Math.max(i - 1, 0))}
                disabled={safeIndex === 0}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Indice précédent"
              >
                ‹
              </button>
              <p className="min-h-[3rem] flex-1 text-xs leading-relaxed text-[var(--text-muted)]">
                💡 {hints[safeIndex]}
              </p>
              <button
                type="button"
                onClick={() =>
                  setViewIndex((i) => Math.min(i + 1, state.count - 1))
                }
                disabled={safeIndex >= state.count - 1}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Indice suivant"
              >
                ›
              </button>
            </div>
          )}
          {state.count > 0 && (
            <div className="mt-1 text-center text-[10px] text-[var(--text-faint)]">
              {safeIndex + 1} / {state.count}
            </div>
          )}
          <button
            type="button"
            onClick={claim}
            disabled={!canClaim}
            className="mt-3 w-full rounded-md bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {label}
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="ml-auto flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] shadow-lg transition hover:bg-[var(--surface-hover)]"
      >
        💡 Indices
      </button>
    </div>
  );
}
