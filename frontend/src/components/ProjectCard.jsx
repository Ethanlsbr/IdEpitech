import { LANGUAGES } from "../projects";
import { useTheme } from "../theme/ThemeContext";

export default function ProjectCard({ project, onOpen, ok }) {
  const lang = LANGUAGES[project.language];
  const { theme } = useTheme();
  const themeCard =
    theme.slots?.card ??
    "rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-emerald-500/50 hover:bg-[var(--surface-hover)]";
  const shell =
    ok === "gold"
      ? `${themeCard} border-amber-400/40! bg-amber-400/[0.06]! hover:border-amber-400/70! hover:bg-amber-400/10!`
      : themeCard;

  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      style={{ "--lang-color": lang.color }}
      className={`group flex flex-col gap-3 p-5 text-left transition ${
        ok === "gold" ? "" : "hover:!border-[var(--lang-color)]"
      } ${shell}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">{lang.icon}</span>
        <div className="flex items-center gap-2">
          {!project.hasEnd ? (
            <span
              className="flex h-5 items-center justify-center rounded-full bg-[var(--surface-hover)] px-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-faint)]"
              title="Projet libre, sans validation"
            >
              Libre
            </span>
          ) : ok === "gold" ? (
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-400"
              title="Terminé — bonus doré"
            >
              ✓
            </span>
          ) : ok ? (
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--lang-color) 12%, transparent)",
                color: "var(--lang-color)",
              }}
              title="Terminé"
            >
              ✓
            </span>
          ) : (
            <span
              className="flex h-5 items-center justify-center rounded-full bg-[var(--surface-hover)] px-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-faint)]"
              title="À faire"
            >
              À faire
            </span>
          )}
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${lang.badge}`}
          >
            {lang.label}
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text)]">
          {project.name}
        </h2>
        <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>
      </div>
      <span
        className={`mt-auto text-xs font-medium opacity-0 transition group-hover:opacity-100 ${
          ok === "gold" ? "text-amber-400" : "text-[var(--lang-color)]"
        }`}
      >
        Ouvrir →
      </span>
    </button>
  );
}
