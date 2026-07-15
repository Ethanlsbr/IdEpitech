import { useTheme } from "../theme/ThemeContext";

export default function ThemeDecorations() {
  const { theme } = useTheme();
  const Overlay = theme.Overlay;

  if (!Overlay) return null;

  return (
    <div className="theme-decorations" aria-hidden="true">
      <Overlay />
    </div>
  );
}
