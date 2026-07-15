import { LANGUAGES } from "../projects";
import ThemeSwitcher from "./ThemeSwitcher";

const STATUS = {
  loading: {
    label: "Chargement de Pyodide…",
    color: "bg-amber-400",
    pulse: true,
  },
  ready: { label: "Prêt", color: "bg-emerald-400", pulse: false },
  running: { label: "Exécution…", color: "bg-sky-400", pulse: true },
  error: { label: "Erreur", color: "bg-red-500", pulse: false },
};

export default function Toolbar({
  status,
  version,
  onRun,
  onBack,
  langage,
  projectName,
}) {
  const s = STATUS[status] || STATUS.loading;
  const canRun = status === "ready" || status === "running";
  const isHtml = langage === "html";
  const icon = isHtml ? LANGUAGES.html.icon : LANGUAGES.python.icon;
  const label = isHtml
    ? version
      ? `HTML ${version}`
      : "HTML"
    : version
      ? `Python ${version}`
      : "Pyodide";

  return (
    <header className="relative flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2">
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
          >
            {" "}
            ← Projets{" "}
          </button>
        )}
        <span className="text-lg md:block hidden">{icon}</span>
        <h1 className="text-sm font-semibold text-[var(--text)] hidden">
          IDEpitech
        </h1>
        <span className="text-xs text-[var(--text-faint)] hidden">{label}</span>
      </div>

      <h1 className="notch absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1.5 rounded-b-2xl border-x border-b border-[var(--border-strong)] px-6 pb-3 pt-2.5 text-xs font-semibold text-[var(--text)] shadow-[0_8px_18px_-10px_rgba(0,0,0,0.8)]">
        <span className="font-normal text-[var(--text-muted)]">Project</span>
        {projectName}
      </h1>

      <div className="md:flex items-center gap-3 hidden">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${s.color} ${s.pulse ? "animate-pulse" : ""}`}
          />
          <span className="text-xs text-[var(--text-muted)]">{s.label}</span>
        </div>

        <button
          onClick={onRun}
          disabled={!canRun}
          className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ▶ Exécuter
          <kbd className="rounded bg-emerald-700/60 px-1 text-[10px]">⌘↵</kbd>
        </button>
      </div>
    </header>
  );
}
