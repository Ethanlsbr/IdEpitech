import Console from "./Console";
import { isCompleted } from "../completion";

export default function LearningConsole({ project, onNext, ...consoleProps }) {
  const completed = project?.hasEnd && isCompleted(project.id);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <Console {...consoleProps} />
      {completed && (
        <div className="flex flex-none items-center justify-between gap-3 border-t border-[var(--border)] bg-[var(--surface)] px-3 py-2">
          <span className="text-xs font-medium text-emerald-400">
            Exercice validé
          </span>
          <button
            type="button"
            onClick={onNext}
            disabled={!onNext}
            title={onNext ? "Ctrl/Cmd + Shift + Entrée" : undefined}
            className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {onNext ? "Exercice suivant →" : "Dernier exercice"}
          </button>
        </div>
      )}
    </div>
  );
}
