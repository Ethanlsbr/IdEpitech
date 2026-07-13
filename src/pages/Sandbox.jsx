import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "../components/Editor";
import Toolbar from "../components/Toolbar";
import Subject from "../components/Subject";
import { usePythonLanguage, SAMPLE_PYTHON } from "../languages/python";
import { useHtmlLanguage, SAMPLE_HTML } from "../languages/html";
import Hints from "../components/Hints";

const STORAGE_KEY = "manta-code-";

function buildHtmlDocument({ html, css, javascript }) {
  const styleTag = css ? `\n<style>\n${css}\n</style>` : "";
  const scriptTag = javascript ? `\n<script>\n${javascript}\n</script>` : "";
  return `${html}${styleTag}${scriptTag}`;
}

export default function Sandbox({ project, onBack }) {
  const language = project.language;
  const isHtml = language === "html";

  const [lang, setLang] = useState(language);

  const [files, setFiles] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY + project.id);

    if (isHtml) {
      if (saved) {
        try {
          return { html: "", css: "", javascript: "", ...JSON.parse(saved) };
        } catch {
          // Legacy value: a single HTML string stored before the split.
          return { html: saved, css: "", javascript: "" };
        }
      }
      return {
        html: project.explanation ?? SAMPLE_HTML,
        css: "",
        javascript: "",
      };
    }

    return { [language]: saved ?? project.explanation ?? SAMPLE_PYTHON };
  });

  const code = files[lang] ?? "";
  const setCode = useCallback(
    (next) => setFiles((prev) => ({ ...prev, [lang]: next })),
    [lang],
  );
  const [editorWidth, setEditorWidth] = useState(50);
  const [rightPanel, setRightPanel] = useState(false);
  const runRef = useRef(null);
  const splitRef = useRef(null);
  const dragStateRef = useRef({ startX: 0, startWidth: 50 });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY + project.id,
      isHtml ? JSON.stringify(files) : files[language],
    );
  }, [files]);

  const onRequestPanel = useCallback(() => setRightPanel(true), []);

  const python = usePythonLanguage({ onRequestPanel, project });
  const html = useHtmlLanguage({ onRequestPanel, project });
  const active = isHtml ? html : python;

  const { status, version, execute, renderPanel } = active;

  const handleRun = useCallback(
    () => execute(isHtml ? buildHtmlDocument(files) : files[language]),
    [execute, files, isHtml, language],
  );

  runRef.current = handleRun;

  const handleDragMove = useCallback((event) => {
    const container = splitRef.current;

    if (!container) return;

    const { startX, startWidth } = dragStateRef.current;
    const delta = event.clientX - startX;
    const nextWidth = startWidth + (delta / container.clientWidth) * 100;
    setEditorWidth(Math.min(80, Math.max(20, nextWidth)));
  }, []);

  const stopDragging = useCallback(() => {
    window.removeEventListener("pointermove", handleDragMove);
    window.removeEventListener("pointerup", stopDragging);
    window.removeEventListener("pointercancel", stopDragging);
  }, [handleDragMove]);

  const handleDividerPointerDown = useCallback(
    (event) => {
      if (event.button !== 0) return;

      event.preventDefault();
      dragStateRef.current = {
        startX: event.clientX,
        startWidth: editorWidth,
      };

      window.addEventListener("pointermove", handleDragMove);
      window.addEventListener("pointerup", stopDragging);
      window.addEventListener("pointercancel", stopDragging);
    },
    [editorWidth, handleDragMove, stopDragging],
  );

  return (
    <div className="relative hidden h-full flex-col md:flex">
      <Toolbar
        status={status}
        version={version}
        onRun={handleRun}
        onBack={onBack}
        langage={language}
        projectName={project.name}
      />

      <main
        ref={splitRef}
        className="grid flex-1 grid-cols-1 overflow-hidden md:flex md:flex-row"
      >
        <section
          className="min-h-0 min-w-0 border-zinc-800 md:border-r"
          style={{
            flex: `0 0 ${editorWidth}%`,
          }}
        >
          <Editor
            value={code}
            onChange={setCode}
            onRunRef={runRef}
            language={language}
            lang={lang}
            onLangChange={setLang}
          />
        </section>
        <button
          type="button"
          aria-label="Resize editor and console"
          onPointerDown={handleDividerPointerDown}
          className="hidden md:block md:h-full md:w-2 md:flex-none md:cursor-col-resize md:bg-zinc-800/60 md:hover:bg-sky-500/60"
          style={{ touchAction: "none" }}
        />
        <section className="flex min-h-0 min-w-0 flex-col md:flex-1">
          {project.subject && (
            <div className="flex flex-none border-b border-zinc-800">
              <button
                type="button"
                onClick={() => setRightPanel(false)}
                className={`flex-1 px-3 py-1.5 text-xs font-medium ${
                  !rightPanel
                    ? "bg-[#484E6A] text-white-800"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                }`}
              >
                SUJET
              </button>
              <button
                type="button"
                onClick={() => setRightPanel(true)}
                className={`flex-1 px-3 py-1.5 text-xs font-medium ${
                  rightPanel
                    ? "bg-[#484E6A] text-white-800"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                }`}
              >
                {project.id === "fil-ariane" ? "LABYRINTHE" : "CONSOLE"}
              </button>
            </div>
          )}
          {rightPanel ? renderPanel() : <Subject subject={project.subject} />}
        </section>
      </main>
      <Hints project={project} />
    </div>
  );
}
