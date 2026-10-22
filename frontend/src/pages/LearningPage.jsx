import { useEffect, useState } from "react";
import Sandbox from "./Sandbox";
import MobileBlock from "../components/MobileBlock";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import CollapsibleSection from "../components/CollapsibleSection";
import PatternPage from "../components/PatternPage";
import { learningProjects, LANGUAGES } from "../projects";
import { completionMark } from "../completion";
import { useNavigate } from "react-router-dom";

const LEARNING_STORAGE_KEY = "manta-active-learning";

export function LearningPage() {
  const [activeId, setActiveId] = useState(() =>
    localStorage.getItem(LEARNING_STORAGE_KEY),
  );
  const active =
    learningProjects.find((project) => project.id === activeId) ?? null;

  const nextExercise = (() => {
    if (!active) return null;
    const sameLang = learningProjects.filter(
      (project) => project.language === active.language,
    );
    const index = sameLang.findIndex((project) => project.id === active.id);
    return index >= 0 ? (sameLang[index + 1] ?? null) : null;
  })();
  const [completion, setCompletion] = useState("all");
  let navigate = useNavigate();

  const matchesCompletion = (project) => {
    if (completion === "all") return true;
    if (!project.hasEnd) return false;
    const mark = completionMark(project.id);
    if (completion === "no") return mark === false;
    if (completion === "yes") return mark === true;
    return true;
  };

  useEffect(() => {
    if (activeId) {
      localStorage.setItem(LEARNING_STORAGE_KEY, activeId);
    } else {
      localStorage.removeItem(LEARNING_STORAGE_KEY);
    }
  }, [activeId]);

  const isProjetOk = (id) => {
    return localStorage.getItem(id) == "true";
  };

  const countOk = (lang) => {
    let count = 0;
    learningProjects.map((project) => {
      if (project.language === lang && isProjetOk(project.id)) {
        count++;
      }
    });
    return count;
  };

  return (
    <>
      <MobileBlock
        onBack={() => {
          navigate("/");
        }}
      />
      <div className="hidden h-full md:block">
        {active ? (
          <Sandbox
            key={active.id}
            project={active}
            onBack={() => setActiveId(null)}
            onNext={nextExercise ? () => setActiveId(nextExercise.id) : null}
          />
        ) : (
          <PatternPage>
            <HeaderBar />
            <main className="mx-auto max-w-5xl px-6 py-8">
              <div className="mb-4 flex justify-end">
                <select
                  value={completion}
                  onChange={(e) => setCompletion(e.target.value)}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] outline-none transition hover:border-emerald-500/50 hover:bg-[var(--surface-hover)]"
                >
                  <option value="all">Toutes complétions</option>
                  <option value="no">Non complété</option>
                  <option value="yes">Complété</option>
                </select>
              </div>
              {Object.entries(LANGUAGES).map(([id, lang]) => {
                const exercises = learningProjects.filter(
                  (project) =>
                    project.language === id && matchesCompletion(project),
                );

                if (exercises.length === 0) return null;

                return (
                  <CollapsibleSection
                    key={id}
                    title={`${lang.label} - ${countOk(id)}/${exercises.length}`}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {exercises.map((project) => (
                        <LearningCard
                          key={project.id}
                          project={project}
                          onOpen={setActiveId}
                          ok={isProjetOk(project.id)}
                        />
                      ))}
                    </div>
                  </CollapsibleSection>
                );
              })}
            </main>
          </PatternPage>
        )}
      </div>
    </>
  );
}
