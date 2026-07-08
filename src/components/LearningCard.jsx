import { useNavigate } from "react-router-dom";

export default function LearningCard({
  name,
  description,
  goTo,
  project,
  onOpen,
}) {
  let navigate = useNavigate();
  const handleClick = () => {
    if (project && onOpen) {
      onOpen(project.id);
    } else {
      navigate(goTo);
    }
  };

  const title = project?.name ?? name;
  const desc = project?.description ?? description;

  return (
    <button
      type="button"
      className="group flex flex-col gap-3 rounded-xl border border-purple-500/20 bg-[#161b22] p-5 text-left transition hover:border-purple-500/60 hover:bg-[#1b222c]"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl">📚</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-purple-500/10 text-purple-300`}
        >
          Learning
        </span>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-zinc-100">{title}</h2>
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">{desc}</p>
      </div>
      <span className="mt-auto text-xs font-medium text-purple-300 opacity-0 transition group-hover:opacity-100">
        Ouvrir →
      </span>
    </button>
  );
}
