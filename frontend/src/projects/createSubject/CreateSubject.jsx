import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "../../components/Editor";
import { usePyodide } from "../../usePyodide";
import builderRaw from "./sujetCobra.py?raw";

const STORAGE_KEY = "manta-create-subject-md";

const SAMPLE_MD = `# Mon super sujet

Bienvenue ! Écrivez votre sujet en **Markdown** à gauche, puis cliquez sur
**Exécuter** pour générer le PDF stylisé à droite.

## Objectif

Décrivez ici ce que l'étudiant doit accomplir.

- Un premier point
- Un deuxième point
- Un \`troisième\` point

## Exemple de code

\`\`\`python
def hello():
    print("Hello Manta!")
\`\`\`

> Astuce : les citations deviennent des encadrés d'information.

| Fonction | Rôle |
| --- | --- |
| \`charger()\` | Prépare les données |
| \`resoudre()\` | Calcule la solution |
`;

function toBase64(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

export default function CreateSubject({ onBack }) {
  const [markdown, setMarkdown] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? SAMPLE_MD,
  );
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(null);
  const [building, setBuilding] = useState(false);
  const runRef = useRef(null);
  const pdfUrlRef = useRef(null);

  const { status, run } = usePyodide({});

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, markdown);
  }, [markdown]);

  useEffect(
    () => () => {
      if (pdfUrlRef.current) URL.revokeObjectURL(pdfUrlRef.current);
    },
    [],
  );

  const handleRun = useCallback(async () => {
    if (status !== "ready" && status !== "running") return;
    setError(null);
    setBuilding(true);

    const source = `${builderRaw}

import base64
_md = base64.b64decode("${toBase64(markdown)}").decode("utf-8")
build_from_markdown(_md)
`;

    const res = await run(source);
    setBuilding(false);

    if (!res?.ok) {
      setError(
        res?.timedOut
          ? "Génération interrompue (trop longue). Réessayez : reportlab est plus rapide au 2ᵉ essai."
          : (res?.error ?? "La génération du PDF a échoué."),
      );
      return;
    }
    if (!res.pdf) {
      setError("Aucun PDF n'a été produit. Vérifiez votre Markdown.");
      return;
    }

    const url = URL.createObjectURL(
      new Blob([res.pdf], { type: "application/pdf" }),
    );
    if (pdfUrlRef.current) URL.revokeObjectURL(pdfUrlRef.current);
    pdfUrlRef.current = url;
    setPdfUrl(url);
  }, [status, run, markdown]);

  runRef.current = handleRun;

  const canRun = status === "ready" || status === "running";
  const busy = building || status === "loading";

  return (
    <div className="relative hidden h-full flex-col md:flex">
      <header className="relative flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              ← Projets
            </button>
          )}
          <span className="text-lg">📝</span>
        </div>

        <h1 className="notch absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-1.5 rounded-b-2xl border-x border-b border-[var(--border-strong)] px-6 pb-3 pt-2.5 text-xs font-semibold text-[var(--text)] shadow-[0_8px_18px_-10px_rgba(0,0,0,0.8)]">
          <span className="font-normal text-[var(--text-muted)]">Projet</span>
          Crée ton propre sujet IDEpitech
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                busy
                  ? "animate-pulse bg-sky-400"
                  : status === "ready"
                    ? "bg-emerald-400"
                    : "bg-amber-400"
              }`}
            />
            <span className="text-xs text-[var(--text-muted)]">
              {status === "loading"
                ? "Chargement de Pyodide…"
                : building
                  ? "Génération…"
                  : "Prêt"}
            </span>
          </div>

          {pdfUrl && (
            <a
              href={pdfUrl}
              download="sujet.pdf"
              className="flex items-center gap-1.5 rounded-md border border-[var(--border-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              <span className="text-sm leading-none">⭳</span>
              PDF
            </a>
          )}

          <button
            onClick={handleRun}
            disabled={!canRun || building}
            className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ▶ Exécuter
            <kbd className="rounded bg-emerald-700/60 px-1 text-[10px]">⌘↵</kbd>
          </button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <section className="min-h-0 min-w-0 flex-1 border-r border-[var(--border)]">
          <Editor
            value={markdown}
            onChange={setMarkdown}
            onRunRef={runRef}
            language="markdown"
            lang="markdown"
            onLangChange={() => {}}
          />
        </section>

        <section className="flex min-h-0 min-w-0 flex-1 flex-col bg-[var(--bg)]">
          {error ? (
            <div className="m-auto w-full max-w-lg rounded-md border border-red-500/30 bg-red-500/10 p-4">
              <div className="mb-2 text-xs font-semibold tracking-wide text-red-300">
                ERREUR
              </div>
              <pre className="thin-scroll overflow-auto whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-red-200">
                {error}
              </pre>
            </div>
          ) : pdfUrl ? (
            <object
              width="100%"
              height="100%"
              data={pdfUrl}
              type="application/pdf"
            >
              {" "}
            </object>
          ) : (
            <div className="m-auto max-w-md px-6 text-center text-sm text-[var(--text-faint)]">
              Écrivez votre sujet en Markdown, puis cliquez sur{" "}
              <span className="font-semibold text-[var(--text-muted)]">
                Exécuter
              </span>{" "}
              pour générer le PDF ici.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
