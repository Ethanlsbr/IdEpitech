import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";

export default function LearningCard({
  name,
  description,
  goTo,
  project,
  onOpen,
  ok,
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

  console.log(project);

  const title = project?.name ?? name;
  const desc = project?.description ?? description;
  const shell =
    theme.slots?.card ??
    "rounded-xl border border-purple-500/20 bg-[var(--surface)] hover:bg-[var(--surface-hover)]";

  return (
    <button
      type="button"
      className={`group flex flex-col gap-3 p-5 text-left transition hover:!border-purple-500/60 ${shell}`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">📚</span>
        <div className="flex items-center gap-2">
          {ok ? (
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
            Learning
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[var(--text)]">{title}</h2>
        <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
          {desc}
        </p>
      </div>
      <span className="mt-auto text-xs font-medium text-purple-300 opacity-0 transition group-hover:opacity-100">
        Ouvrir →
      </span>
    </button>
  );
}
