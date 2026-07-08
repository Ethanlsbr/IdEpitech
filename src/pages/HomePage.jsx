import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import ProjectCard from "../components/ProjectCard";

export default function HomePage({ projects, onOpen }) {
  return (
    <div className="thin-scroll h-full overflow-auto bg-[#0d1117]">
      <HeaderBar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Apprentissage
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <LearningCard
              name={"Glossaire"}
              description={"Apprenez les mots clés"}
              goTo={"/glossary"}
            />
            <LearningCard
              name={"Exercices d'Apprentissage"}
              description={"Apprenez les bases"}
              goTo={"/learning"}
            />
          </div>
        </section>
        <section className="mt-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Projets
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onOpen} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
