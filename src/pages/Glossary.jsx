import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import MobileBlock from "../components/MobileBlock";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import PatternPage from "../components/PatternPage";
import { glossary } from "../glossary";
import { useTheme } from "../theme/ThemeContext";

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 text-2xl font-bold text-[var(--text)]">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-6 mb-3 text-lg font-semibold text-[var(--text)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-4 mb-2 text-base font-semibold text-[var(--text)]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-3 text-sm leading-relaxed text-[var(--text-muted)]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-3 list-disc space-y-1 pl-6 text-sm text-[var(--text-muted)]">
      {children}
    </ul>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--text)]">{children}</strong>
  ),
  pre: ({ children }) => (
    <pre className="thin-scroll my-4 overflow-auto rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4 font-mono text-sm">
      {children}
    </pre>
  ),
  code: ({ className, children, ...props }) => {
    const { mode } = useTheme();

    return className?.includes("language-") ? (
      <code
        className={`${className} ${mode === "light" ? "!bg-[var(--text-muted)]" : ""}`}
        {...props}
      >
        {children}
      </code>
    ) : (
      <code
        className={
          "rounded bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300" +
            mode ===
          "light"
            ? "!bg-[var(--text-muted)]"
            : ""
        }
      >
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="thin-scroll my-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm text-[var(--text-muted)]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--surface)]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-[var(--border)] px-4 py-2 text-left font-semibold text-[var(--text)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[var(--border)] px-4 py-2 align-top">
      {children}
    </td>
  ),
};

function Markdown({ source }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={markdownComponents}
    >
      {source}
    </ReactMarkdown>
  );
}

function MarkdownViewer({ entry, onBack }) {
  return (
    <div className="thin-scroll flex h-full flex-col bg-[var(--bg)]">
      <header className="flex items-center gap-4 border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-[var(--border-strong)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:border-purple-500/60 hover:text-purple-300"
        >
          ← Retour
        </button>
        <div>
          <h1 className="text-sm font-semibold text-[var(--text)]">
            {entry.name}
          </h1>
          <p className="text-xs text-[var(--text-faint)]">
            {entry.description}
          </p>
        </div>
      </header>
      <main className="thin-scroll flex-1 overflow-auto">
        <article className="mx-auto max-w-3xl px-6 py-8">
          <Markdown source={entry.code} />
        </article>
      </main>
    </div>
  );
}

export function Glossary() {
  const [activeId, setActiveId] = useState(null);
  const active = glossary.find((entry) => entry.id === activeId) ?? null;

  return (
    <>
      <MobileBlock />
      <div className="hidden h-full md:block">
        {active ? (
          <MarkdownViewer entry={active} onBack={() => setActiveId(null)} />
        ) : (
          <PatternPage>
            <HeaderBar />
            <main className="mx-auto max-w-5xl px-6 py-8">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                Glossaire Python
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {glossary.map((entry) => (
                  <LearningCard
                    key={entry.id}
                    project={entry}
                    onOpen={setActiveId}
                  />
                ))}
              </div>
            </main>
          </PatternPage>
        )}
      </div>
    </>
  );
}
