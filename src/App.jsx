import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import Sandbox from "./pages/Sandbox";
import MobileBlock from "./components/MobileBlock";
import { projects } from "./projects";
import Subject from "./components/Subject";
import Toolbar from "./components/Toolbar";
import CreateSubject from "./projects/createSubject/CreateSubject";
import { completionMark } from "./completion";

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
    <div className="h-full block">
      {active ? (
        active.custom === "create-subject" ? (
          <>
            <MobileBlock onBack={() => setActiveId(null)} />
            <div className="hidden h-full md:block">
              <CreateSubject onBack={() => setActiveId(null)} />
            </div>
          </>
        ) : active.subject ? (
          <>
            <div className="md:hidden h-full block">
              <Toolbar
                onBack={() => setActiveId(null)}
                projectName={active.name}
                ok={active.hasEnd && completionMark(active.id)}
              />
              <Subject subject={active.subject} />
            </div>
            <div className="hidden h-full md:block">
              <Sandbox project={active} onBack={() => setActiveId(null)} />
            </div>
          </>
        ) : (
          <>
            <MobileBlock onBack={() => setActiveId(null)} />
            <div className="hidden h-full md:block">
              <Sandbox project={active} onBack={() => setActiveId(null)} />
            </div>
          </>
        )
      ) : (
        <HomePage projects={projects} onOpen={setActiveId} />
      )}
    </div>
  );
}
