import { useNavigate } from "react-router-dom";

export default function HeaderBar() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  return (
    <header className="border-b border-zinc-800 bg-[#161b22] px-6 py-4">
      <button onClick={routeChange} className="group cursor-pointer">
        <div className="flex items-center gap-2">
          <span className="text-lg">
            <span className="group-hover:hidden">🐍</span>
            <span className="hidden group-hover:inline text-[#B9CB4B]">⇜</span>
          </span>
          <h1 className="text-sm font-semibold text-zinc-100">IDEpitech</h1>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Choisissez un projet pour commencer à coder.
        </p>
      </button>
    </header>
  );
}
