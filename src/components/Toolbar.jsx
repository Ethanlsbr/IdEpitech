import { LANGUAGES } from "../projects";

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

export default function Toolbar({ status, version, onRun, onBack, langage }) {
  const s = STATUS[status] || STATUS.loading;
  const canRun = status === "ready";
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
    <header className="flex items-center justify-between border-b border-zinc-800 bg-[#161b22] px-4 py-2">
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            onClick={onBack}
            className="rounded-md px-2 py-1 text-xs text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
          >
            {" "}
            ← Projets{" "}
          </button>
        )}
        <span className="text-lg">{icon}</span>
        <h1 className="text-sm font-semibold text-zinc-100">IDEpitech</h1>
        <span className="text-xs text-zinc-500">{label}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${s.color} ${s.pulse ? "animate-pulse" : ""}`}
          />
          <span className="text-xs text-zinc-400">{s.label}</span>
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
