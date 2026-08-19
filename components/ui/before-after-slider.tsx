"use client";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Image from "next/image";
import { useId, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelId = useId();

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-labelledby={labelId}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      onMouseMove={(event) => updateFromClientX(event.clientX)}
      onMouseLeave={() => setValue(50)}
      onTouchMove={(event) => updateFromClientX(event.touches[0].clientX)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") setValue((v) => Math.max(0, v - 5));
        if (event.key === "ArrowRight") setValue((v) => Math.min(100, v + 5));
      }}
      className={`relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange ${className}`}
    >
      <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
      <span className="absolute bottom-4 left-4  bg-mvcb-black/70 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
        Before
      </span>

      <div
        className="absolute inset-0 overflow-hidden transition-[clip-path] duration-100 ease-out"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        <span className="absolute right-4 bottom-4  bg-mvcb-orange px-3 py-1 text-xs font-semibold tracking-wide text-mvcb-black uppercase">
          After
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white transition-[left] duration-100 ease-out"
        style={{ left: `${value}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center  bg-white text-mvcb-black border border-mvcb-line">
          <ChevronLeft className="-mr-1 h-4 w-4" aria-hidden="true" />
          <ChevronRight className="-ml-1 h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      <span id={labelId} className="sr-only">
        Move your cursor or finger across the image to compare before and
        after. Left and right arrow keys also work.
      </span>
    </div>
  );
}
