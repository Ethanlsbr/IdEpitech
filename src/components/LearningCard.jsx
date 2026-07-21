import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";

export default function LearningCard({
  name,
  description,
  goTo,
  project,
  onOpen,
  ok,
  icon = "📚",
  tag = "Learning",
}) {
  let navigate = useNavigate();
  const { theme } = useTheme();
  const handleClick = () => {
    if (project && onOpen) {
      onOpen(project.id);
    } else {
      navigate(goTo);
    }
  };

  const title = project?.name ?? name;
  const desc = project?.description ?? description;
  const themeCard =
    theme.slots?.card ??
    "rounded-xl border border-purple-500/20 bg-[var(--surface)] hover:bg-[var(--surface-hover)]";
  const shell =
    ok === "gold"
      ? `${themeCard} border-amber-400/40! bg-amber-400/[0.06]! hover:border-amber-400/70! hover:bg-amber-400/10!`
      : themeCard;

  return (
    <button
      type="button"
      className={`group flex flex-col gap-3 p-5 text-left transition ${
        ok === "gold" ? "" : "hover:!border-purple-500/60"
      } ${shell}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <div className="flex items-center gap-2">
          {ok === "gold" ? (
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-400"
              title="Terminé — bonus doré"
            >
              ✓
            </span>
          ) : ok ? (
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-purple-300"
              title="Terminé"
            >
              ✓
            </span>
          ) : (
            project &&
            onOpen &&
            project.hasEnd && (
              <span
                className="flex h-5 items-center justify-center rounded-full bg-[var(--surface-hover)] px-2 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-faint)]"
                title="À faire"
              >
                À faire
              </span>
            )
          )}
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-purple-500/10 text-purple-300`}
          >
            {tag}
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text)]">{title}</h2>
        <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
          {desc}
        </p>
      </div>
      <span
        className={`mt-auto text-xs font-medium opacity-0 transition group-hover:opacity-100 ${
          ok === "gold" ? "text-amber-400" : "text-purple-300"
        }`}
      >
        Ouvrir →
      </span>
    </button>
  );
}
