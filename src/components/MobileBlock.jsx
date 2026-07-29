import { useTheme } from "../theme/ThemeContext";
import PatternPage from "./PatternPage";

export default function MobileBlock({ onBack }) {
  const { theme } = useTheme();

  return (
    <div className="h-full md:hidden">
      <PatternPage>
        <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="text-6xl animate-bounce">{theme.logo}</div>

          <div>
            <h1 className="text-xl font-semibold text-[var(--text)]">
              Oups, mauvais environnement !
            </h1>
            <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
              IDEpitech a besoin d&apos;un grand écran pour{" "}
              {theme.type == "manta" ? "nager" : "ramper"} à l&apos;aise.
              Reviens sur un ordinateur pour coder confortablement.
            </p>
          </div>

          <button
            onClick={onBack}
            className="cursor-pointer rounded-md bg-[#B9CB4B] px-4 py-2 text-sm font-semibold text-[#0d1117] transition hover:brightness-110"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </PatternPage>
    </div>
  );
}
