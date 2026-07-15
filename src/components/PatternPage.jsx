import { useHideDecorations } from "./ThemeBackground";

export default function PatternPage({ children, animated = true }) {
  useHideDecorations(!animated);

  return (
    <div className="thin-scroll h-full overflow-auto">
      <div className="relative min-h-full">
        <div className="home-pattern absolute inset-0" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
