import { useCallback, useEffect, useRef, useState } from "react";
import Editor from "../components/Editor";
import Toolbar from "../components/Toolbar";
import Subject from "../components/Subject";
import { usePythonLanguage, SAMPLE_PYTHON } from "../languages/python";
import { useHtmlLanguage, SAMPLE_HTML } from "../languages/html";

const STORAGE_KEY = "manta-code";

export default function Sandbox({ project, onBack }) {
  const langage = project.language;
  const isHtml = langage === "html";

  const [code, setCode] = useState(() => {
    return (
      localStorage.getItem(STORAGE_KEY) ??
      (isHtml ? SAMPLE_HTML : SAMPLE_PYTHON)
    );
  });
  const [editorWidth, setEditorWidth] = useState(50);
  const [rightPanel, setRightPanel] = useState(false);
  const runRef = useRef(null);
  const splitRef = useRef(null);
  const dragStateRef = useRef({ startX: 0, startWidth: 50 });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, code);
  }, [code]);

  const onRequestPanel = useCallback(() => setRightPanel(true), []);

  const python = usePythonLanguage({ onRequestPanel });
  const html = useHtmlLanguage({ onRequestPanel });
  const active = isHtml ? html : python;

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
    <div className="hidden h-full flex-col md:flex">
      <Toolbar
        status={status}
        version={version}
        onRun={handleRun}
        onBack={onBack}
        langage={langage}
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
            langage={langage}
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
                CONSOLE
              </button>
            </div>
          )}
          {rightPanel ? renderPanel() : <Subject subject={project.subject} />}
        </section>
      </main>
    </div>
  );
}
