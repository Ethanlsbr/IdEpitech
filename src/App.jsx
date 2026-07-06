import { useState } from "react";
import HomePage from "./pages/HomePage";
import Sandbox from "./pages/Sandbox";
import MobileBlock from "./components/MobileBlock";
import { projects } from "./projects";

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((project) => project.id === activeId) ?? null;

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
