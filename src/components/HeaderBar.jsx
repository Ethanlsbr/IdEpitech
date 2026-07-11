import { useLocation, useNavigate } from "react-router-dom";
import EpitechLogo from "../assets/epitech-eu_BIG.D.svg";

export default function HeaderBar() {
  let navigate = useNavigate();
  const isHome = useLocation().pathname === "/";
  const routeChange = () => {
    navigate("/");
  };

  return (
    <header className="flex items-start justify-between border-b border-zinc-800 bg-[#161b22] px-6 py-4">
      <button
        onClick={routeChange}
        disabled={isHome}
        className={`group ${isHome ? "cursor-default" : "cursor-pointer"}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">
            <span className={isHome ? "" : "group-hover:hidden"}>🐍</span>
            {!isHome && (
              <span className="hidden group-hover:inline text-[#B9CB4B]">⇜</span>
            )}
          </span>
          <h1 className="text-sm font-semibold text-zinc-100">IDEpitech</h1>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Choisissez un projet pour commencer à coder.
        </p>
      </button>
      {isHome && (
        <a
          href="https://www.epitech.eu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Epitech"
          className="shrink-0 transition hover:opacity-80"
        >
          <img src={EpitechLogo} alt="Epitech" className="h-8 w-auto" />
        </a>
      )}
    </header>
  );
}
