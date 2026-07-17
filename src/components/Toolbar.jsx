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

const getIcon = (language) => {
  if (language == "html") return LANGUAGES.html.icon;
  if (language == "python") return LANGUAGES.python.icon;
  if (language == "c") return LANGUAGES.c.icon;
  return "?";
};

const getLabel = (language, version) => {
  if (language == "html") return version ? `HTML ${version}` : "HTML";
  if (language == "python") return version ? `Python ${version}` : "Pyodide";
  if (language == "c") return version ? `C ${version}` : `C`;
  return "?";
};

function extension(lang) {
  if (lang === "python") return "py";
  if (lang === "html") return "html";
  if (lang === "css") return "css";
  if (lang === "js") return "js";
  if (lang === "c") return "c";
  return "txt";
}

export default function Toolbar({
  status,
  version,
  onRun,
  onBack,
  language,
  projectName,
  ok,
  code,
}) {
  const s = STATUS[status] || STATUS.loading;
  const canRun = status === "ready" || status === "running";
  const icon = getIcon(language);
  const label = getLabel(language, version);

  function exportCode(code) {
    const filename = `${projectName.replaceAll(" ", "_")}.${extension(language)}`;
    var a = document.createElement("a"),
      file = new File([code], filename, {
        type: "text/plain",
      });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

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
        <span className="font-normal text-[var(--text-muted)]">Projet</span>
        {projectName}
        {ok && (
          <span
            className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-bold text-emerald-400"
            title="Terminé"
          >
            ✓
          </span>
        )}
      </h1>

      <div className="md:flex items-center gap-3 hidden">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${s.color} ${s.pulse ? "animate-pulse" : ""}`}
          />
          <span className="text-xs text-[var(--text-muted)]">{s.label}</span>
        </div>

        <button
          onClick={() => {
            exportCode(code);
          }}
          title="Télécharger le code"
          className="flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
        >
          <span className="text-sm leading-none">⭳</span>
          Exporter
        </button>

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
