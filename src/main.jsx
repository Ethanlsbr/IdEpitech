import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PyodideProvider } from "./usePyodide";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PyodideProvider>
      <App />
    </PyodideProvider>
  </StrictMode>,
);
