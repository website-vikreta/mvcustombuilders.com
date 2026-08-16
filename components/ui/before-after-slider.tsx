"use client";

import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Image from "next/image";
import { useId, useState } from "react";

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
  const labelId = useId();

  return (
    <div
      className={`relative aspect-[4/3] w-full touch-none overflow-hidden  select-none ${className}`}
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
        Drag to compare before and after
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        aria-labelledby={labelId}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
