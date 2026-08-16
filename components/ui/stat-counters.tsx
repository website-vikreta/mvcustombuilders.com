"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string; tone: keyof typeof TILES };

/** Solid tiles, alternating colour — the reference themes stat band. */
const TILES = {
  orange: "bg-mvcb-orange text-white",
  navy: "bg-mvcb-navy text-white",
  cream: "bg-mvcb-cream text-mvcb-black",
  black: "bg-mvcb-black text-white",
} as const;

const STATS: Stat[] = [
  { value: "2022", label: "Building since", tone: "orange" },
  { value: "280+", label: "Projects completed", tone: "navy" },
  { value: "20+", label: "NJ towns served", tone: "cream" },
  { value: "100%", label: "Licensed and insured", tone: "black" },
];

const COUNT_UP_DURATION_MS = 1200;

function parseNumericStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { target: Number(match[1]), suffix: match[2] };
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reducedMotion ? 0 : COUNT_UP_DURATION_MS;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress =
        duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function StatTile({ stat, active }: { stat: Stat; active: boolean }) {
  const numeric = parseNumericStat(stat.value);
  const count = useCountUp(numeric?.target ?? 0, active && numeric !== null);

  return (
    <div
      data-reveal
      className={`flex min-h-44 flex-col justify-between p-6 md:min-h-56 md:p-8 ${TILES[stat.tone]}`}
    >
      <div className="text-5xl leading-none font-extrabold tracking-[-0.03em] tabular-nums md:text-6xl">
        {numeric ? `${count}${numeric.suffix}` : stat.value}
      </div>
      <div
        className={`mt-8 text-xs leading-snug font-bold tracking-[0.1em] uppercase ${
          stat.tone === "cream" ? "text-muted-foreground" : "text-white/80"
        }`}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function StatCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
    >
      {STATS.map((stat) => (
        <StatTile key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
