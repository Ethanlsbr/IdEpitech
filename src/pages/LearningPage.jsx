import { useEffect, useState } from "react";
import Sandbox from "./Sandbox";
import MobileBlock from "../components/MobileBlock";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import PatternPage from "../components/PatternPage";
import { learningPythonProjects } from "../projects";
import { useNavigate } from "react-router-dom";

const LEARNING_STORAGE_KEY = "manta-active-learning";

export function LearningPage() {
  const [activeId, setActiveId] = useState(() =>
    localStorage.getItem(LEARNING_STORAGE_KEY),
  );
  const active =
    learningPythonProjects.find((project) => project.id === activeId) ?? null;
  let navigate = useNavigate();

  useEffect(() => {
    if (activeId) {
      localStorage.setItem(LEARNING_STORAGE_KEY, activeId);
    } else {
      localStorage.removeItem(LEARNING_STORAGE_KEY);
    }
  }, [activeId]);

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
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
                Python
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {learningPythonProjects.map((project) => (
                  <LearningCard
                    key={project.id}
                    project={project}
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
