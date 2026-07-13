import Monaco from "@monaco-editor/react";
import { useRef } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function Editor({ value, onChange, onRunRef, language }) {
  const monacoRef = useRef(null);
  const { mode } = useTheme();

  function handleMount(editor, monaco) {
    monacoRef.current = monaco;
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRunRef.current?.();
    });
  }

  return (
    <Monaco
      height="100%"
      defaultLanguage={language}
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
  );
}
