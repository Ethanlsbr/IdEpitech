const mantaPattern = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><g fill="${color}"><path d="M100 62c-15 0-28 7-36 18-9-7-20-9-31-7 9 4 13 11 12 19-11 6-20 17-24 30 17-11 32-15 47-13 7 9 18 13 32 13s25-4 32-13c15-2 30 2 47 13-4-13-13-24-24-30-1-8 3-15 12-19-11-2-22 0-31 7-8-11-21-18-36-18z"/><path d="M97 98h6l-3 44z"/></g></svg>`;

const cobraPattern = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path d="M74 152c0-22 26-26 26-48 0-18-26-16-15-37 9-17 44-13 49 7 3 15-11 20-22 17" fill="none" stroke="${color}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><circle cx="112" cy="91" r="7" fill="${color}"/></svg>`;

const bubblePattern = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><g fill="none" stroke="${color}" stroke-width="3"><circle cx="50" cy="60" r="18"/><circle cx="150" cy="40" r="10"/><circle cx="120" cy="120" r="24"/><circle cx="40" cy="150" r="13"/><circle cx="170" cy="150" r="8"/></g></svg>`;

const leafPattern = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><g fill="${color}"><path d="M60 40c-22 6-36 28-32 52 22-4 40-22 44-46 1-4-8-8-12-6z"/><path d="M60 40c8 20 4 44-12 60 18 2 38-12 40-34 1-14-16-30-28-26z" opacity="0.6"/><path d="M140 120c-18 4-30 22-27 42 18-3 33-18 36-38 1-3-6-5-9-4z"/></g></svg>`;

function AquariumOverlay() {
  const bubbles = [
    ["6%", 14, 0, 11],
    ["18%", 22, 3, 14],
    ["31%", 10, 6, 9],
    ["45%", 28, 1.5, 16],
    ["58%", 12, 4.5, 10],
    ["70%", 18, 2, 13],
    ["83%", 24, 5, 15],
    ["92%", 9, 7, 8],
  ];
  return (
    <>
      {bubbles.map(([left, size, delay, dur], i) => (
        <span
          key={i}
          className="ocean-bubble"
          style={{
            left,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            animationDuration: `${dur}s`,
          }}
        />
      ))}
    </>
  );
}

function Roots({ className, flip }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="4"
      strokeLinecap="round"
      style={{ opacity: 0.35, transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path d="M2 8c26 6 40 24 44 48s18 40 44 46" />
      <path d="M2 40c20 4 30 18 34 36" />
      <path d="M2 70c16 2 26 12 30 28" />
      <path d="M46 56c10-6 22-6 32 2" />
    </svg>
  );
}

function ForestSnake() {
  return (
    <div className="forest-snake" aria-hidden="true">
      <span className="flip-text">🐍</span>
    </div>
  );
}

function ForestOverlay() {
  const flowers = [
    { emoji: "🌷", left: "12%", bottom: "6%", delay: 0 },
    { emoji: "🌷", left: "27%", bottom: "3%", delay: 1.2 },
    { emoji: "🌷", left: "48%", bottom: "7%", delay: 0.6 },
    { emoji: "🌷", left: "66%", bottom: "4%", delay: 1.8 },
    { emoji: "🌷", left: "84%", bottom: "6%", delay: 0.9 },
  ];
  return (
    <>
      <Roots className="absolute -left-2 top-0 h-40 w-40" />
      <Roots className="absolute -right-2 top-0 h-40 w-40" flip />
      <Roots className="absolute -left-2 bottom-0 h-32 w-32 rotate-180" flip />
      {flowers.map((f, i) => (
        <span
          key={i}
          className="forest-flower text-xl"
          style={{
            left: f.left,
            bottom: f.bottom,
            animationDelay: `${f.delay}s`,
          }}
        >
          {f.emoji}
        </span>
      ))}
      <ForestSnake />
    </>
  );
}

const bubbleCard =
  "rounded-[2rem] border border-white/25 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-10px_rgba(0,0,0,0.55)] backdrop-blur-sm hover:bg-white/20 hover:border-white/40 animate-[float_6s_ease-in-out_infinite]";

const leafCard =
  "rounded-[1.6rem_0.4rem_1.6rem_0.4rem] border border-[var(--border)] bg-[var(--surface)]/85 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]";

export const THEMES = {
  default: {
    id: "default",
    label: "Default",
    logo: "🐟",
    type: "manta",
    pattern: (color) => {
      null;
    },
    colors: {
      dark: {
        bg: "#0d1117",
        surface: "#161b22",
        surfaceHover: "#1b222c",
        border: "#27272a",
        borderStrong: "#3f3f46",
        text: "#e6edf3",
        textMuted: "#a1a1aa",
        textFaint: "#71717a",
        accent: "#58a6ff",
        accentContrast: "#0d1117",
        tabActive: "#484e6a",
        scrollThumb: "#30363d",
        scrollThumbHover: "#484f58",
      },
      light: {
        bg: "#f6f8fa",
        surface: "#ffffff",
        surfaceHover: "#eef1f4",
        border: "#d0d7de",
        borderStrong: "#b8c0c9",
        text: "#1f2328",
        textMuted: "#57606a",
        textFaint: "#8b949e",
        accent: "#0969da",
        accentContrast: "#ffffff",
        tabActive: "#484e6a",
        scrollThumb: "#c4ccd4",
        scrollThumbHover: "#a6b0ba",
      },
    },
  },
  manta: {
    id: "manta",
    label: "Manta",
    logo: "🐟",
    type: "manta",
    pattern: mantaPattern,
    colors: {
      dark: {
        bg: "#0d1117",
        surface: "#161b22",
        surfaceHover: "#1b222c",
        border: "#27272a",
        borderStrong: "#3f3f46",
        text: "#e6edf3",
        textMuted: "#a1a1aa",
        textFaint: "#71717a",
        accent: "#58a6ff",
        accentContrast: "#0d1117",
        tabActive: "#484e6a",
        scrollThumb: "#30363d",
        scrollThumbHover: "#484f58",
      },
      light: {
        bg: "#f6f8fa",
        surface: "#ffffff",
        surfaceHover: "#eef1f4",
        border: "#d0d7de",
        borderStrong: "#b8c0c9",
        text: "#1f2328",
        textMuted: "#57606a",
        textFaint: "#8b949e",
        accent: "#0969da",
        accentContrast: "#ffffff",
        tabActive: "#484e6a",
        scrollThumb: "#c4ccd4",
        scrollThumbHover: "#a6b0ba",
      },
    },
  },
  cobra: {
    id: "cobra",
    label: "Cobra",
    logo: "🐍",
    type: "cobra",
    pattern: cobraPattern,
    colors: {
      dark: {
        bg: "#0d130e",
        surface: "#161d16",
        surfaceHover: "#1c261c",
        border: "#2a332a",
        borderStrong: "#3d493d",
        text: "#e7f0e6",
        textMuted: "#9db09b",
        textFaint: "#6f7f6d",
        accent: "#5fcf6b",
        accentContrast: "#0d130e",
        tabActive: "#3f5a3f",
        scrollThumb: "#2f3d2f",
        scrollThumbHover: "#465846",
      },
      light: {
        bg: "#f3f7f2",
        surface: "#ffffff",
        surfaceHover: "#eaf1e9",
        border: "#cfe0cd",
        borderStrong: "#b4c9b2",
        text: "#16231a",
        textMuted: "#4d5f4c",
        textFaint: "#7d8f7b",
        accent: "#2f9e44",
        accentContrast: "#ffffff",
        tabActive: "#3f5a3f",
        scrollThumb: "#c4d6c2",
        scrollThumbHover: "#a6bda4",
      },
    },
  },
  aquarium: {
    id: "aquarium",
    label: "Manta Aquarium",
    logo: "🐠",
    type: "manta",
    pattern: bubblePattern,
    slots: { card: bubbleCard },
    Overlay: AquariumOverlay,
    colors: {
      dark: {
        bg: "#04212f",
        surface: "#0b3550",
        surfaceHover: "#0e4a6b",
        border: "#12546f",
        borderStrong: "#1d7396",
        text: "#e6f7ff",
        textMuted: "#93c7dd",
        textFaint: "#5f9bb5",
        accent: "#35d0e0",
        accentContrast: "#04212f",
        tabActive: "#0e6b8a",
        scrollThumb: "#14597a",
        scrollThumbHover: "#1d7fa8",
      },
      light: {
        bg: "#e8f7fb",
        surface: "#ffffff",
        surfaceHover: "#d8eef6",
        border: "#b8dcea",
        borderStrong: "#8fc7dd",
        text: "#0a3a4a",
        textMuted: "#3d7186",
        textFaint: "#6ea3b6",
        accent: "#0891b2",
        accentContrast: "#ffffff",
        tabActive: "#0e7490",
        scrollThumb: "#a9d5e6",
        scrollThumbHover: "#7fbdd6",
      },
    },
  },
  forest: {
    id: "forest",
    label: "Cobra Deep Forest",
    logo: "🌲",
    type: "cobra",
    pattern: leafPattern,
    slots: { card: leafCard },
    Overlay: ForestOverlay,
    colors: {
      dark: {
        bg: "#0c1a0f",
        surface: "#13230f",
        surfaceHover: "#1b3016",
        border: "#29401f",
        borderStrong: "#3c5a2c",
        text: "#eaf3e1",
        textMuted: "#a9c299",
        textFaint: "#7a9468",
        accent: "#86c232",
        accentContrast: "#0c1a0f",
        tabActive: "#3a5a2a",
        scrollThumb: "#2b421f",
        scrollThumbHover: "#3f5e2f",
      },
      light: {
        bg: "#eef5e6",
        surface: "#ffffff",
        surfaceHover: "#e2eed4",
        border: "#cbdcb4",
        borderStrong: "#a9c489",
        text: "#1c2e14",
        textMuted: "#4c6138",
        textFaint: "#7a9061",
        accent: "#4d7c1f",
        accentContrast: "#ffffff",
        tabActive: "#3a5a2a",
        scrollThumb: "#c3d6a8",
        scrollThumbHover: "#a6bf85",
      },
    },
  },
};

export const DEFAULT_THEME = "default";
export const DEFAULT_MODE = "dark";

function paletteToVars(palette) {
  return Object.entries(palette)
    .map(
      ([key, value]) =>
        `--${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${value};`,
    )
    .join("");
}

export function buildThemeCss() {
  let css = `:root{${paletteToVars(THEMES[DEFAULT_THEME].colors[DEFAULT_MODE])}}`;
  for (const theme of Object.values(THEMES)) {
    for (const mode of ["dark", "light"]) {
      css += `[data-theme="${theme.id}"][data-mode="${mode}"]{${paletteToVars(
        theme.colors[mode],
      )}}`;
    }
  }

  return css;
}

export function applyThemeStyles() {
  const id = "theme-vars";
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("style");
    element.id = id;
    document.head.appendChild(element);
  }
  element.textContent = buildThemeCss();
}
