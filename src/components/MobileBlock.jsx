export default function MobileBlock({ onBack }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 bg-[#0d1117] px-6 text-center md:hidden">
      <div className="text-6xl animate-bounce">🐍</div>

      <div>
        <h1 className="text-xl font-semibold text-zinc-100">
          Oups, mauvais aquarium !
        </h1>
        <p className="mt-2 max-w-sm text-sm text-zinc-400">
          IDEpitech a besoin d&apos;un grand écran pour nager à l&apos;aise.
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
  );
}
