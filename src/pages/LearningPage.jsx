import { useEffect, useState } from "react";
import Sandbox from "./Sandbox";
import MobileBlock from "../components/MobileBlock";
import HeaderBar from "../components/HeaderBar";
import LearningCard from "../components/LearningCard";
import { learningPythonProjects } from "../projects";

const LEARNING_STORAGE_KEY = "manta-active-learning";

export function LearningPage() {
  const [activeId, setActiveId] = useState(() =>
    localStorage.getItem(LEARNING_STORAGE_KEY),
  );
  const active =
    learningPythonProjects.find((project) => project.id === activeId) ?? null;

  useEffect(() => {
    if (activeId) {
      localStorage.setItem(LEARNING_STORAGE_KEY, activeId);
    } else {
      localStorage.removeItem(LEARNING_STORAGE_KEY);
    }
  }, [activeId]);

  return (
    <>
      <MobileBlock />
      <div className="hidden h-full md:block">
        {active ? (
          <Sandbox project={active} onBack={() => setActiveId(null)} />
        ) : (
          <div className="thin-scroll h-full overflow-auto bg-[#0d1117]">
            <HeaderBar />
            <main className="mx-auto max-w-5xl px-6 py-8">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
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
          </div>
        )}
      </div>
    </>
  );
}
