import { useEffect, useLayoutEffect, useRef } from "react";

const STREAM_STYLE = {
  stdout: "text-[var(--text)]",
  stderr: "text-red-400",
  system: "text-[var(--text-faint)] italic",
  result: "text-emerald-400",
  prompt: "text-sky-400",
  input: "text-amber-300",
};

export default function Console({
  lines,
  awaitingInput,
  onSubmitInput,
  onClear,
}) {
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [lines, awaitingInput]);

  useEffect(() => {
    if (awaitingInput) inputRef.current?.focus();
  }, [awaitingInput]);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[var(--bg)]">
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

      <div
        ref={scrollRef}
        className="thin-scroll flex-1 overflow-auto px-3 py-2 font-mono text-[13px] leading-relaxed"
      >
        {lines.map((line, index) => (
          <span
            key={index}
            className={`whitespace-pre-wrap ${STREAM_STYLE[line.stream] || ""}`}
          >
            {line.text}
          </span>
        ))}

        {awaitingInput && (
          <form
            className="flex"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitInput(inputRef.current.value);
              inputRef.current.value = "";
            }}
          >
            <span className="text-sky-400">❯ </span>
            <input
              ref={inputRef}
              className="flex-1 bg-transparent font-mono text-[13px] text-amber-300 outline-none"
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        )}
      </div>
    </div>
  );
}
