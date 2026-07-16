import { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import ProjectCard from "../components/ProjectCard";
import PatternPage from "../components/PatternPage";
import { LANGUAGES, DIFFICULTIES } from "../projects";

export default function HomePage({ projects, onOpen }) {
  const [language, setLanguage] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      (language === "all" || project.language === language) &&
      (difficulty === "all" || project.difficulty === difficulty),
  );

  return (
    <PatternPage>
      <HeaderBar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <section>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
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
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
              Projets
            </h2>
            <div className="flex gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] outline-none transition hover:border-emerald-500/50 hover:bg-[var(--surface-hover)]"
              >
                <option value="all">Tous les languages</option>
                {Object.entries(LANGUAGES).map(([id, lang]) => (
                  <option key={id} value={id}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] outline-none transition hover:border-emerald-500/50 hover:bg-[var(--surface-hover)]"
              >
                <option value="all">Toutes difficultés</option>
                {DIFFICULTIES.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={onOpen}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Aucun projet ne correspond à ces filtres.
            </p>
          )}
        </section>
      </main>
    </PatternPage>
  );
}
