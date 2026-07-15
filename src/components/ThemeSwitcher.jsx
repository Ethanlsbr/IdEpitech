import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeSwitcher() {
  const { themeId, setThemeId, themes, mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    window.addEventListener("pointerdown", onClick);

    return () => window.removeEventListener("pointerdown", onClick);
  }, [open]);

  const isDark = mode === "dark";

  return (
    <div ref={ref} className="relative flex items-center gap-1.5">
      <button
        type="button"
        onClick={toggleMode}
        title={isDark ? "Passer en clair" : "Passer en sombre"}
        aria-label={isDark ? "Passer en clair" : "Passer en sombre"}
        className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
      >
        {isDark ? "🌙" : "☀️"}
      </button>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs font-medium text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
      >
        <span className="text-sm">{themes[themeId].logo}</span>
        {themes[themeId].label}
        <span className="text-[var(--text-faint)]">▾</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-20 mt-1 min-w-[9rem] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] py-1 shadow-lg"
        >
          {Object.values(themes).map((theme) => (
            <li key={theme.id}>
              <button
                type="button"
                role="option"
                aria-selected={theme.id === themeId}
                onClick={() => {
                  setThemeId(theme.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs transition hover:bg-[var(--surface-hover)] ${
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
      )}
    </div>
  );
}
