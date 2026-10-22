import { useEffect, useRef } from "react";

export default function HtmlView({ html, onClear }) {
  return (
    <div className="flex h-full flex-col bg-[var(--bg)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-1.5">
        <span className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
          CONSOLE
        </span>
        <button
          onClick={onClear}
          className="rounded px-2 py-0.5 text-xs text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
        >
          Effacer
        </button>
      </div>

      <iframe
        title="Aperçu HTML"
        sandbox="allow-scripts"
        srcDoc={html}
        className="h-full w-full flex-1 border-0 bg-white"
      />
    </div>
  );
}
