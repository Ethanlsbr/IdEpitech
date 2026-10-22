import { useEffect, useMemo, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import PatternPage from "../components/PatternPage";
import { CAMPUSES, EVENT_TYPES, fetchEvents } from "../datas/events";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const SELECT_CLASS =
  "rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] outline-none transition hover:border-emerald-500/50 hover:bg-[var(--surface-hover)]";

function typeInfo(type) {
  return (
    EVENT_TYPES[type] ?? {
      label: type,
      badge: "bg-[var(--surface-hover)] text-[var(--text-muted)]",
    }
  );
}

function formatTime(value) {
  return new Date(value).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function dayKey(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function Agenda() {
  const [campus, setCampus] = useState("all");
  const [type, setType] = useState("all");
  const [selected, setSelected] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  useEffect(() => {
    let active = true;
    fetchEvents().then((list) => {
      if (!active) return;
      setEvents(list);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(
    () =>
      events.filter(
        (event) =>
          (campus === "all" || event.campus === campus) &&
          (type === "all" || event.type === type),
      ),
    [events, campus, type],
  );

  const nextEvent = useMemo(() => {
    const now = new Date();
    return filtered
      .filter((event) => new Date(event.date) >= now)
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  }, [filtered]);

  const byDay = useMemo(() => {
    const map = {};
    filtered.forEach((event) => {
      const key = dayKey(new Date(event.date));
      (map[key] ??= []).push(event);
    });
    return map;
  }, [filtered]);

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const offset = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [
    ...Array.from({ length: offset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const todayKey = dayKey(new Date());

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <PatternPage>
      <HeaderBar />
      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)]">
            Agenda
          </h2>
          <div className="flex gap-2">
            <select
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
              className={SELECT_CLASS}
            >
              <option value="all">Tous les campus</option>
              {CAMPUSES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={SELECT_CLASS}
            >
              <option value="all">Tous les types</option>
              {Object.entries(EVENT_TYPES).map(([id, eventType]) => (
                <option key={id} value={id}>
                  {eventType.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--text-muted)]">
          {loading ? (
            "Chargement des événements…"
          ) : nextEvent ? (
            <>
              <span className="font-semibold text-[var(--text)]">
                Prochain événement :
              </span>{" "}
              {nextEvent.title} — {nextEvent.campus},{" "}
              {new Date(nextEvent.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </>
          ) : (
            "Aucun événement à venir pour ces filtres."
          )}
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMonth(new Date(year, monthIndex - 1, 1))}
              className="rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              ← Mois précédent
            </button>
            <span className="text-sm font-semibold capitalize text-[var(--text)]">
              {month.toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              onClick={() => setMonth(new Date(year, monthIndex + 1, 1))}
              className="rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
            >
              Mois suivant →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-wide text-[var(--text-faint)]">
            {WEEKDAYS.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map((day, index) => {
              if (day === null) return <div key={`empty-${index}`} />;

              const key = dayKey(new Date(year, monthIndex, day));
              const dayEvents = byDay[key] ?? [];
              const isToday = key === todayKey;

              return (
                <div
                  key={key}
                  className={`min-h-20 rounded-lg border p-1.5 ${
                    isToday
                      ? "border-emerald-500/50 bg-[var(--surface-hover)]"
                      : "border-[var(--border)]"
                  }`}
                >
                  <span
                    className={`text-[11px] ${
                      isToday
                        ? "font-bold text-emerald-400"
                        : "text-[var(--text-faint)]"
                    }`}
                  >
                    {day}
                  </span>
                  <div className="mt-1 flex flex-col gap-1">
                    {dayEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setSelected(event)}
                        title={`${event.title} — ${event.campus} — ${formatTime(
                          event.date,
                        )}${event.end ? ` – ${formatTime(event.end)}` : ""}`}
                        className={`truncate rounded px-1 py-0.5 text-left text-[10px] font-medium transition hover:opacity-75 ${
                          typeInfo(event.type).badge
                        }`}
                      >
                        {event.campus} · {event.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    typeInfo(selected.type).badge
                  }`}
                >
                  {typeInfo(selected.type).label}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-[var(--text)]">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
              >
                ✕
              </button>
            </div>

            <div className="mt-3 space-y-1 text-xs text-[var(--text-muted)]">
              <p>
                📍 {selected.campus}
                {selected.location ? ` — ${selected.location}` : ""}
              </p>
              <p>
                🕒{" "}
                {new Date(selected.date).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {selected.end ? ` – ${formatTime(selected.end)}` : ""}
              </p>
            </div>

            {selected.description && (
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">
                {selected.description}
              </p>
            )}

            {selected.link ? (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-center text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
              >
                S'inscrire
              </a>
            ) : (
              <p className="mt-4 text-xs text-[var(--text-faint)]">
                Lien d'inscription à venir.
              </p>
            )}
          </div>
        </div>
      )}
    </PatternPage>
  );
}
