import Monaco from '@monaco-editor/react'
import { useRef } from 'react'

export default function Editor({ value, onChange, onRunRef }) {
  const monacoRef = useRef(null)

  function handleMount(editor, monaco) {
    monacoRef.current = monaco
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRunRef.current?.()
    })
  }

  return (
    <Monaco
      height="100%"
      defaultLanguage="python"
      theme="vs-dark"
      value={value}
      onChange={(v) => onChange(v ?? '')}
      onMount={handleMount}
      options={{
        fontSize: 14,
        fontFamily: "'Cascadia Code', 'Fira Code', monospace",
        fontLigatures: true,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        tabSize: 4,
        automaticLayout: true,
        padding: { top: 12 },
        wordWrap: "on",
        renderWhitespace: 'selection',
        cursorSmoothCaretAnimation: "on",
        cursorWidth: 3,
        cursorBlinking: "expand",
      }}
    />
  )
}
