import { useState } from "react";

export default function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="mb-10 last:mb-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="mb-4 flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)] transition hover:text-[var(--text-muted)]"
      >
        <span
          className={`text-[0.7em] transition-transform ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
        {title}
      </button>
      {open && children}
    </section>
  );
}
