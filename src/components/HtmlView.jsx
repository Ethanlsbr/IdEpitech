import { useEffect, useRef } from "react";

export default function HtmlView({ html, onClear }) {
  return (
    <div className="flex h-full flex-col bg-[#0d1117]">
      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-1.5">
        <span className="text-xs font-semibold tracking-wide text-zinc-400">
          CONSOLE
        </span>
        <button
          onClick={onClear}
          className="rounded px-2 py-0.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
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
