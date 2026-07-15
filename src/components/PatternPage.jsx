import ThemeDecorations from "./ThemeDecorations";

export default function PatternPage({ children }) {
  return (
    <div className="thin-scroll h-full overflow-auto bg-[var(--bg)]">
      <div className="relative min-h-full">
        <div className="home-pattern absolute inset-0" aria-hidden="true" />
        <ThemeDecorations />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
