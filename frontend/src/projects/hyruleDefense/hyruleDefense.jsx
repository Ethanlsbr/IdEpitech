import { useEffect, useMemo, useRef, useState } from "react";
import { saveCompletion } from "../../completion";
import Icon from "../../components/Icon";

const STEP_DELAY = 220;
const MIN_DELAY = 20;
const MAX_DELAY = 600;

const LEGEND = [
  { style: "bg-emerald-400", label: "Rune fixée" },
  { style: "bg-slate-700", label: "Case encore vide" },
  { style: "bg-rose-500", label: "Conflit (rune en double)" },
];

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
    .join("");
  const textLines = text.split("\n");
  const golden =
    !text.includes("getLine") &&
    !text.includes("getColumn") &&
    !text.includes("getBlock");

  let difficulty = null;
  const snapshots = [];
  let current = null;

  for (const line of textLines) {
    const trimmed = line.trim();

    const diff = trimmed.match(/^DIFFICULTE (\w+)/);
    if (diff) {
      difficulty = diff[1];
      continue;
    }

    if (trimmed === "--- TOUR ---") {
      current = [];
      continue;
    }

    if (current) {
      const cells = trimmed.split(/\s+/).filter(Boolean);
      if (cells.length === 9 && cells.every((c) => /^[0-9]$/.test(c))) {
        current.push(cells.map(Number));
        if (current.length === 9) {
          snapshots.push(current);
          current = null;
        }
      }
    }
  }

  return { difficulty, snapshots, golden };
}

function groups() {
  const all = [];
  for (let y = 0; y < 9; y += 1) {
    all.push(Array.from({ length: 9 }, (_, x) => [y, x]));
  }
  for (let x = 0; x < 9; x += 1) {
    all.push(Array.from({ length: 9 }, (_, y) => [y, x]));
  }
  for (let by = 0; by < 3; by += 1) {
    for (let bx = 0; bx < 3; bx += 1) {
      const block = [];
      for (let dy = 0; dy < 3; dy += 1) {
        for (let dx = 0; dx < 3; dx += 1) {
          block.push([by * 3 + dy, bx * 3 + dx]);
        }
      }
      all.push(block);
    }
  }
  return all;
}

const GROUPS = groups();

function firstFault(grid) {
  for (const group of GROUPS) {
    const byValue = new Map();
    for (const [y, x] of group) {
      const v = grid[y][x];
      if (!v) continue;
      if (!byValue.has(v)) byValue.set(v, []);
      byValue.get(v).push([y, x]);
    }
    const bad = [];
    for (const cells of byValue.values()) {
      if (cells.length > 1) bad.push(...cells);
    }
    if (bad.length) return new Set(bad.map(([y, x]) => `${y},${x}`));
  }
  return null;
}

function isComplete(grid) {
  return grid.every((row) => row.every((v) => v >= 1 && v <= 9));
}

function cellBorders(y, x) {
  const cls = ["border-[var(--border)]"];
  cls.push(x % 3 === 0 ? "border-l-2" : "border-l");
  cls.push(y % 3 === 0 ? "border-t-2" : "border-t");
  cls.push(x === 8 ? "border-r-2" : "");
  cls.push(y === 8 ? "border-b-2" : "");
  return cls.join(" ");
}

export default function HyruleDefense({ lines, status, onClear, project }) {
  const running = status === "running";
  const parsed = useMemo(
    () => (running ? null : parseRun(lines)),
    [running, lines],
  );
  const error = parsed?.error ?? null;
  const run = error ? null : parsed;
  const snapshots = run?.snapshots ?? [];
  const total = snapshots.length;
  const difficulty = run?.difficulty ?? null;

  const [step, setStep] = useState(0);
  const [delay, setDelay] = useState(STEP_DELAY);
  const prevTotal = useRef(0);

  useEffect(() => {
    if (total !== prevTotal.current) setStep(0);
    prevTotal.current = total;
  }, [total]);

  useEffect(() => {
    if (step >= total - 1) return undefined;
    const id = setTimeout(
      () => setStep((s) => Math.min(s + 1, total - 1)),
      delay,
    );
    return () => clearTimeout(id);
  }, [step, total, delay]);

  const grid = total ? snapshots[Math.min(step, total - 1)] : null;
  const fault = grid ? firstFault(grid) : null;
  const complete = grid ? isComplete(grid) : false;
  const solved = complete && !fault;
  const atEnd = step >= total - 1;
  const victory = atEnd && solved && difficulty === "difficile";
  const golden = victory && (run?.golden ?? false);

  useEffect(() => {
    if (victory) saveCompletion(project.id, golden);
  }, [victory, golden, project.id]);

  let banner = null;
  if (atEnd && solved) {
    banner = {
      tone: "var(--success)",
      text:
        difficulty === "difficile"
          ? "✨ Le sceau le plus difficile est restauré ! Hyrule est sauvée."
          : "✨ Sceau restauré ! Tentez maintenant le sceau difficile pour terminer.",
    };
  } else if (atEnd && fault) {
    banner = {
      tone: "var(--danger)",
      text: "⚠️ Le sceau est corrompu : une rune apparaît deux fois (en rouge).",
    };
  } else if (atEnd && grid) {
    banner = {
      tone: "var(--warning)",
      text: "🕯️ Le sceau est incomplet, des runes manquent encore.",
    };
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-[var(--bg)]">
      <div className="panel-head">
        <span className="panel-title">
          SCEAU SHEIKAH
          {difficulty && (
            <span className="ml-2 text-[var(--text-faint)]">
              · {difficulty}
            </span>
          )}
          {total > 0 && (
            <span className="ml-2 text-[var(--text-faint)]">
              · tour {Math.min(step + 1, total)}/{total}
            </span>
          )}
        </span>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]">
            Vitesse
            <input
              type="range"
              min={MIN_DELAY}
              max={MAX_DELAY}
              step={10}
              value={MIN_DELAY + MAX_DELAY - delay}
              onChange={(e) =>
                setDelay(MIN_DELAY + MAX_DELAY - Number(e.target.value))
              }
              className="h-1 w-24 cursor-pointer accent-[var(--accent)]"
            />
          </label>
          <button onClick={onClear} className="btn btn-ghost btn-sm">
            <Icon name="stop" size={12} />
            Arrêter
          </button>
        </div>
      </div>

      <div className="thin-scroll flex min-h-0 flex-1 flex-col gap-4 overflow-auto p-5">
        {running ? (
          <div className="m-auto flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span
              className="status-dot animate-pulse"
              style={{ "--tone": "var(--accent)" }}
            />
            Résolution en cours…
          </div>
        ) : error ? (
          <div
            className="callout mx-auto w-full max-w-2xl p-4"
            style={{ "--tone": "var(--danger)" }}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-bold tracking-[0.08em]">
              <Icon name="alert" size={15} />
              ERREUR PYTHON
            </div>
            <pre className="thin-scroll overflow-auto font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
              {error}
            </pre>
          </div>
        ) : grid ? (
          <>
            {banner && (
              <div
                className="callout mx-auto px-4 py-2.5 text-center text-sm font-semibold"
                style={{ "--tone": banner.tone }}
              >
                {banner.text}
              </div>
            )}
            <div className="mx-auto grid aspect-square w-full max-w-md grid-cols-9 overflow-hidden rounded-lg bg-[var(--surface)] shadow-[var(--shadow-md)]">
              {grid.flatMap((row, y) =>
                row.map((v, x) => {
                  const key = `${y},${x}`;
                  const isFault = fault?.has(key);
                  let tone = "text-[var(--text-muted)]";
                  if (isFault)
                    tone =
                      "bg-[color-mix(in_oklab,var(--danger)_22%,transparent)] text-[var(--danger)]";
                  else if (solved)
                    tone =
                      "bg-[color-mix(in_oklab,var(--success)_14%,transparent)] text-[var(--success)]";
                  else if (!v) tone = "bg-slate-500/10 text-transparent";
                  else tone = "text-[var(--text)]";
                  return (
                    <div
                      key={key}
                      className={`flex aspect-square items-center justify-center text-sm font-semibold tabular-nums sm:text-base ${cellBorders(
                        y,
                        x,
                      )} ${tone}`}
                    >
                      {v || "·"}
                    </div>
                  );
                }),
              )}
            </div>

            <div className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {LEGEND.map(({ style, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs font-medium text-[var(--text-muted)]"
                >
                  <span
                    className={`inline-block h-3 w-3 rounded-[4px] ${style}`}
                  />
                  {label}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className="m-auto max-w-md text-center text-sm leading-loose text-[var(--text-muted)]">
            Exécutez votre code pour restaurer le sceau.
            <br />
            Chargez un sceau avec{" "}
            <code className="inline-code">charger_facile()</code>,{" "}
            <code className="inline-code">charger_moyen()</code> ou{" "}
            <code className="inline-code">charger_difficile()</code>, puis
            appelez <code className="inline-code">afficher(sudoku)</code> à
            chaque tour.
          </div>
        )}
      </div>
    </div>
  );
}
