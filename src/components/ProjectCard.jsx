import { LANGUAGES } from "../projects";

export default function ProjectCard({ project, onOpen }) {
  const lang = LANGUAGES[project.language];

  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-800 bg-[#161b22] p-5 text-left transition hover:border-emerald-500/50 hover:bg-[#1b222c]">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{lang.icon}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${lang.badge}`}>
          {lang.label}
        </span>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-zinc-100">{project.name}</h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>
      <span className="mt-auto text-xs font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
        Ouvrir →
      </span>
    </button>
  );
}
