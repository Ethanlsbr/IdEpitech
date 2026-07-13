import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function HeaderBar() {
  let navigate = useNavigate();
  const { theme } = useTheme();
  const isHome = useLocation().pathname === "/";
  const routeChange = () => {
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4">
      <button
        onClick={routeChange}
        disabled={isHome}
        className={`group ${isHome ? "cursor-default" : "cursor-pointer"}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">
            <span className={isHome ? "" : "group-hover:hidden"}>
              {theme.logo}
            </span>
            {!isHome && (
              <span className="hidden group-hover:inline text-[var(--accent)]">
                ⇜
              </span>
            )}
          </span>
          <h1 className="text-sm font-semibold text-[var(--text)]">
            IDEpitech
          </h1>
        </div>
        <p className="mt-1 text-left text-xs text-[var(--text-faint)]">
          Choisissez un projet pour commencer à coder.
        </p>
      </button>

      <ThemeSwitcher />
    </header>
  );
}
