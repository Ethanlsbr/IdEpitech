import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PyodideProvider } from "./usePyodide";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LearningPage } from "./pages/LearningPage.jsx";
import { Glossary } from "./pages/Glossary.jsx";
import { ThemeProvider } from "./theme/ThemeContext.jsx";
import { applyThemeStyles } from "./theme/themes.jsx";

applyThemeStyles();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PyodideProvider>
                <App />
              </PyodideProvider>
            }
          />
          <Route
            path="/learning"
            element={
              <PyodideProvider>
                <LearningPage />
              </PyodideProvider>
            }
          />
          <Route
            path="/glossary"
            element={
              <PyodideProvider>
                <Glossary />
              </PyodideProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
