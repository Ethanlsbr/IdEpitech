import { useState } from "react";
import HomePage from "./pages/HomePage";
import Sandbox from "./pages/Sandbox";
import { projects } from "./projects";

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const active = projects.find((project) => project.id === activeId) ?? null;

  if (!active) {
    return <HomePage projects={projects} onOpen={setActiveId} />;
  }
  return <Sandbox onBack={() => setActiveId(null)} />;
}
