import ProjectCard from "../components/ProjectCard";

export default function HomePage({ projects, onOpen }) {
  return (
    <div className="thin-scroll h-full overflow-auto bg-[#0d1117]">
      <header className="border-b border-zinc-800 bg-[#161b22] px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🐍</span>
          <h1 className="text-sm font-semibold text-zinc-100">IDEpitech</h1>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Choisissez un projet pour commencer à coder.
        </p>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpen} />
          ))}
        </div>
      </main>
    </div>
  );
}
