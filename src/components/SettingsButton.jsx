import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../theme/ThemeContext";

function SettingsModal({ onClose }) {
  const { themeId, setThemeId, themes, mode, setMode } = useTheme();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onPointerDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Paramètres"
        onPointerDown={(event) => event.stopPropagation()}
        className="w-full max-w-sm rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[var(--text)]">
            Paramètres
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="rounded-md px-2 py-1 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
          >
            ✕
          </button>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium text-[var(--text-muted)]">
            Apparence
          </p>
          <div className="mt-2 flex gap-2">
            {[
              { id: "light", logo: "☀️", label: "Clair" },
              { id: "dark", logo: "🌙", label: "Sombre" },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={option.id === mode}
                onClick={() => setMode(option.id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-md border px-2 py-1.5 text-xs font-medium transition ${
                  option.id === mode
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                }`}
              >
                <span className="text-sm">{option.logo}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium text-[var(--text-muted)]">Thème</p>
          <ul className="mt-2 space-y-1">
            {Object.values(themes).map((theme) => (
              <li key={theme.id}>
                <button
                  type="button"
                  aria-pressed={theme.id === themeId}
                  onClick={() => setThemeId(theme.id)}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-xs transition hover:bg-[var(--surface-hover)] ${
                    theme.id === themeId
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <span className="text-sm">{theme.logo}</span>
                  {theme.label}
                  {theme.id === themeId && <span className="ml-auto">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function SettingsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Paramètres"
        aria-label="Paramètres"
        className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
      >
        ⚙️
      </button>

      {open && <SettingsModal onClose={() => setOpen(false)} />}
    </>
  );
}
