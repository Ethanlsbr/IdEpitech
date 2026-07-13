import { useEffect, useMemo, useRef, useState } from "react";

const TRAIL_STYLE = "bg-sky-400";
const PLAYER_STYLE = "bg-rose-400 ring-1 ring-rose-200";
const STEP_DELAY = 90;
const MIN_DELAY = 5;
const MAX_DELAY = 300;

const CELL_STYLE = {
  x: "bg-slate-500",
  "-": "bg-slate-950",
  o: "bg-emerald-400",
};

const MOVES = {
  North: [-1, 0],
  South: [1, 0],
  East: [0, 1],
  West: [0, -1],
};

const LEGEND = [
  { style: CELL_STYLE.x, label: "Mur" },
  { style: TRAIL_STYLE, label: "Fil parcouru" },
  { style: PLAYER_STYLE, label: "Thésée(Joueur)" },
  { style: CELL_STYLE.o, label: "Sortie" },
];

function extractFirstList(text) {
  const start = text.indexOf("[");
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < text.length; i += 1) {
    if (text[i] === "[") depth += 1;
    else if (text[i] === "]") {
      depth -= 1;
      if (depth === 0) return { json: text.slice(start, i + 1), start, end: i };
    }
  }
  return null;
}

export function parseRun(lines) {
  let runStart = 0;
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].stream === "system" && lines[i].text.includes("$ run")) {
      runStart = i;
    }
  }

  const runLines = lines.slice(runStart);

  const error = runLines
    .filter((line) => line.stream === "stderr")
    .map((line) => line.text)
    .join("")
    .trim();
  if (error) return { error };

  const text = runLines
    .filter((line) => line.stream === "stdout")
    .map((line) => line.text)
    .join("\n");

  const found = extractFirstList(text);
  if (!found) return null;

  let grid;
  try {
    grid = JSON.parse(found.json.replaceAll("'", '"'));
  } catch {
    return null;
  }

  if (!Array.isArray(grid)) return null;
  grid = grid.filter((row) => Array.isArray(row) && row.length);
  if (!grid.length) return null;

  const header = text.slice(0, found.start).trim().split(" ");
  const py = Number(header[0]);
  const px = Number(header[1]);
  let start =
    Number.isInteger(py) && Number.isInteger(px) ? { y: py, x: px } : null;

  for (let y = 0; y < grid.length && !start; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      if (grid[y][x] === "-") {
        start = { y, x };
        break;
      }
    }
  }
  if (!start) return null;

  const commands = text
    .slice(found.end + 1)
    .split("\n")
    .map((line) => line.trim());

  const moves = commands.filter((line) => Object.hasOwn(MOVES, line));

  let outcome = null;
  if (commands.includes("PlayerOut")) outcome = "won";

  return { grid, start, moves, outcome };
}

function walk(start, moves, count) {
  let current = start;
  const visited = new Set([`${start.y},${start.x}`]);
  for (let i = 0; i < count; i += 1) {
    const [dy, dx] = MOVES[moves[i]];
    current = { y: current.y + dy, x: current.x + dx };
    visited.add(`${current.y},${current.x}`);
  }
  return { current, visited };
}

function cellStyle(grid, visited, current, y, x) {
  if (current.y === y && current.x === x) return PLAYER_STYLE;
  if (grid[y][x] === "o") return CELL_STYLE.o;
  if (visited.has(`${y},${x}`)) return TRAIL_STYLE;
  return CELL_STYLE[grid[y][x]] ?? "bg-transparent";
}

export default function FilDariane({ lines, status, onClear }) {
  const running = status === "running";
  const parsed = useMemo(
    () => (running ? null : parseRun(lines)),
    [running, lines],
  );
  const error = parsed?.error ?? null;
  const run = error ? null : parsed;
  const total = run ? run.moves.length : 0;

  const [step, setStep] = useState(0);
  const [delay, setDelay] = useState(STEP_DELAY);
  const prevTotal = useRef(0);

  useEffect(() => {
    if (total < prevTotal.current) setStep(0);
    prevTotal.current = total;
  }, [total]);

  useEffect(() => {
    if (step >= total) return undefined;
    const id = setTimeout(() => setStep((s) => Math.min(s + 1, total)), delay);
    return () => clearTimeout(id);
  }, [step, total, delay]);

  const cols = run ? Math.max(...run.grid.map((row) => row.length)) : 0;
  const { current, visited } = run
    ? walk(run.start, run.moves, Math.min(step, total))
    : {};
  const finished = run && step >= total;
  const outcome = finished ? run.outcome : null;

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[var(--bg)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-3 py-1.5">
        <span className="text-xs font-semibold tracking-wide text-[var(--text-muted)]">
          LABYRINTHE
        </span>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            Vitesse
            <input
              type="range"
              min={MIN_DELAY}
              max={MAX_DELAY}
              step={5}
              value={MIN_DELAY + MAX_DELAY - delay}
              onChange={(e) =>
                setDelay(MIN_DELAY + MAX_DELAY - Number(e.target.value))
              }
              className="h-1 w-24 cursor-pointer accent-sky-400"
            />
            <span className="w-12 tabular-nums text-[var(--text-faint)]">
              {delay} ms
            </span>
          </label>
          <button
            onClick={onClear}
            className="rounded px-2 py-0.5 text-xs text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
          >
            Arrêter
          </button>
        </div>
      </div>

      <div className="thin-scroll flex min-h-0 flex-1 flex-col gap-3 overflow-auto p-4">
        {running ? (
          <div className="m-auto flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="h-3 w-3 animate-ping rounded-full bg-sky-400" />
            Exécution en cours…
          </div>
        ) : error ? (
          <div className="mx-auto w-full max-w-2xl rounded-md border border-red-500/30 bg-red-500/10 p-4">
            <div className="mb-2 text-xs font-semibold tracking-wide text-red-300">
              ERREUR PYTHON
            </div>
            <pre className="thin-scroll overflow-auto whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-red-200">
              {error}
            </pre>
          </div>
        ) : run ? (
          <>
            {outcome && (
              <div
                className={`mx-auto rounded-md px-4 py-2 text-center text-sm font-semibold ${
                  outcome === "won"
                    ? "bg-emerald-500/15 text-emerald-300"
                    : "bg-amber-500/15 text-amber-300"
                }`}
              >
                {outcome === "won"
                  ? "🎉 Thésée est sorti du labyrinthe !"
                  : "🧵 Thésée est bloqué, le fil s'arrête ici."}
              </div>
            )}
            <div
              className="mx-auto grid w-full max-w-3xl gap-px"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
            >
              {run.grid.flatMap((row, y) =>
                row.map((_, x) => (
                  <div
                    key={`${y}-${x}`}
                    className={`aspect-square ${cellStyle(
                      run.grid,
                      visited,
                      current,
                      y,
                      x,
                    )}`}
                  />
                )),
              )}
            </div>

            <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {LEGEND.map(({ style, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]"
                >
                  <span
                    className={`inline-block h-3 w-3 rounded-sm ${style}`}
                  />
                  {label}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className="m-auto text-center text-sm text-[var(--text-faint)]">
            Exécutez votre code pour guider Thésée.
            <br />
            Utilisez{" "}
            <code className="text-[var(--text-muted)]">
              up() · down() · left() · right()
            </code>{" "}
            pour le déplacer.
          </div>
        )}
      </div>
    </div>
  );
}
