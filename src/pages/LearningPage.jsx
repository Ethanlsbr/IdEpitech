import { useEffect, useState } from "react";
import Sandbox from "./Sandbox";
import MobileBlock from "../components/MobileBlock";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import CollapsibleSection from "../components/CollapsibleSection";
import PatternPage from "../components/PatternPage";
import { learningProjects, LANGUAGES } from "../projects";
import { useNavigate } from "react-router-dom";

const LEARNING_STORAGE_KEY = "manta-active-learning";

export function LearningPage() {
  const [activeId, setActiveId] = useState(() =>
    localStorage.getItem(LEARNING_STORAGE_KEY),
  );
  const active =
    learningProjects.find((project) => project.id === activeId) ?? null;
  let navigate = useNavigate();

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
          <Sandbox project={active} onBack={() => setActiveId(null)} />
        ) : (
          <PatternPage>
            <HeaderBar />
            <main className="mx-auto max-w-5xl px-6 py-8">
              {Object.entries(LANGUAGES).map(([id, lang]) => {
                const exercises = learningProjects.filter(
                  (project) => project.language === id,
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
