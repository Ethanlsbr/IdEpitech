import Monaco from "@monaco-editor/react";
import { useRef } from "react";
import { useTheme } from "../theme/ThemeContext";

const HTML_TABS = [
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "javascript", label: "JAVASCRIPT" },
];

export default function Editor({
  value,
  onChange,
  onRunRef,
  language,
  lang,
  onLangChange,
}) {
  const monacoRef = useRef(null);
  const { mode } = useTheme();

  function handleMount(editor, monaco) {
    monacoRef.current = monaco;
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRunRef.current?.();
    });
  }

  return (
    <div className="flex h-full flex-col">
      {language === "html" && (
        <div className="flex flex-none border-b border-[var(--border)]">
          {HTML_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onLangChange(tab.id)}
              className={`flex-1 px-3 py-1.5 text-xs font-medium ${
                lang === tab.id
                  ? "bg-[var(--tab-active)] text-white"
                  : "text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className="min-h-0 flex-1">
        <Monaco
          height="100%"
          language={lang}
          theme={mode === "light" ? "vs" : "vs-dark"}
          value={value}
          onChange={(v) => onChange(v ?? "")}
          onMount={handleMount}
          options={{
            fontSize: 14,
            fontFamily: "'Cascadia Code', 'Fira Code', monospace",
            fontLigatures: true,
            minimap: { enabled: true },
            scrollBeyondLastLine: true,
            smoothScrolling: true,
            tabSize: 4,
            automaticLayout: true,
            padding: { top: 12 },
            wordWrap: "on",
            renderWhitespace: "selection",
            cursorSmoothCaretAnimation: "on",
            cursorWidth: 3,
            cursorBlinking: "expand",
          }}
        />
      </div>
    </div>
  );
}
