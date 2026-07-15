import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "../components/Editor";
import Toolbar from "../components/Toolbar";
import Subject from "../components/Subject";
import { usePythonLanguage, SAMPLE_PYTHON } from "../languages/python";
import { useHtmlLanguage, SAMPLE_HTML } from "../languages/html";
import { useCLanguage, SAMPLE_C } from "../languages/c";
import Hints from "../components/Hints";

const STORAGE_KEY = "manta-code-";

export default function Sandbox({ project, onBack }) {
  const language = project.language;

  const getSample = (language) => {
    if (language == "html") return SAMPLE_HTML;
    if (language == "python") return SAMPLE_PYTHON;
    if (language == "c") return SAMPLE_C;
    return "";
  };

  const [code, setCode] = useState(() => {
    return (
      localStorage.getItem(STORAGE_KEY + project.id) ??
      project.explanation ??
      getSample(language)
    );
  });
  const [editorWidth, setEditorWidth] = useState(50);
  const [rightPanel, setRightPanel] = useState(false);
  const runRef = useRef(null);
  const splitRef = useRef(null);
  const dragStateRef = useRef({ startX: 0, startWidth: 50 });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY + project.id, code);
  }, [code]);

  const onRequestPanel = useCallback(() => setRightPanel(true), []);

  const getActive = (language) => {
    if (language == "html") return useHtmlLanguage({ onRequestPanel, project });
    if (language == "python")
      return usePythonLanguage({ onRequestPanel, project });
    if (language == "c") return useCLanguage({ onRequestPanel, project });
    return "";
  };

  const active = getActive(language);

  const { status, version, execute, renderPanel } = active;

  const handleRun = useCallback(() => execute(code), [execute, code]);

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
        language={language}
        projectName={project.name}
      />

      <main
        ref={splitRef}
        className="grid flex-1 grid-cols-1 overflow-hidden md:flex md:flex-row"
      >
        <section
          className="min-h-0 min-w-0 border-[var(--border)] md:border-r"
          style={{
            flex: `0 0 ${editorWidth}%`,
          }}
        >
          <Editor
            value={code}
            onChange={setCode}
            onRunRef={runRef}
            language={language}
          />
        </section>
        <button
          type="button"
          aria-label="Resize editor and console"
          onPointerDown={handleDividerPointerDown}
          className="hidden md:block md:h-full md:w-2 md:flex-none md:cursor-col-resize md:bg-[var(--border)] md:hover:bg-sky-500/60"
          style={{ touchAction: "none" }}
        />
        <section className="flex min-h-0 min-w-0 flex-col md:flex-1">
          {project.subject && (
            <div className="flex flex-none border-b border-[var(--border)]">
              <button
                type="button"
                onClick={() => setRightPanel(false)}
                className={`flex-1 px-3 py-1.5 text-xs font-medium ${
                  !rightPanel
                    ? "bg-[var(--tab-active)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                }`}
              >
                SUJET
              </button>
              <button
                type="button"
                onClick={() => setRightPanel(true)}
                className={`flex-1 px-3 py-1.5 text-xs font-medium ${
                  rightPanel
                    ? "bg-[var(--tab-active)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
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
