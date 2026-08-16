"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "2022", label: "Founded" },
  { value: "280+", label: "Projects Completed" },
  { value: "NJ", label: "North & Central Jersey" },
  { value: "100%", label: "Licensed & Insured" },
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
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
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
    <div className="text-center md:text-left">
      <div className="text-3xl font-black tracking-tight text-mvcb-black md:text-4xl">
        {numeric ? `${count}${numeric.suffix}` : stat.value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
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
      className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:px-8 md:grid-cols-4 md:py-16"
    >
      {STATS.map((stat) => (
        <StatTile key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
