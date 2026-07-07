import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Sandbox from "./pages/Sandbox";
import MobileBlock from "./components/MobileBlock";
import { projects } from "./projects";

const STORAGE_KEY = "manta-active-project";

export default function App() {
  const [activeId, setActiveId] = useState(() =>
    localStorage.getItem(STORAGE_KEY),
  );
  const active = projects.find((project) => project.id === activeId) ?? null;

  useEffect(() => {
    if (activeId) {
      localStorage.setItem(STORAGE_KEY, activeId);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [activeId]);

  return (
    <>
      <MobileBlock />
      <div className="hidden h-full md:block">
        {active ? (
          <Sandbox project={active} onBack={() => setActiveId(null)} />
        ) : (
          <HomePage projects={projects} onOpen={setActiveId} />
        )}
      </div>
    </>
  );
}
