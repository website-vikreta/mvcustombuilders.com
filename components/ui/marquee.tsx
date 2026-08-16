"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

/**
 * Seamless infinite marquee. The phrase is rendered twice and the track is
 * moved by exactly half its width, so the loop point lands on an identical
 * frame and there is never a gap. Asterisks separate the repeats.
 *
 * Holds still under prefers-reduced-motion.
 */
export default function Marquee({
  text,
  className,
  duration = 60,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration,
        ease: "none",
        repeat: -1,
      });
      return () => tween.kill();
    });

    return () => mm.revert();
  }, [duration]);

  return (
    <div aria-hidden="true" className="overflow-hidden select-none">
      <div ref={trackRef} className="flex w-max">
        {[0, 1].map((copy) => (
          <span key={copy} className={`flex shrink-0 ${className ?? ""}`}>
            {[0, 1, 2].map((repeat) => (
              <span key={repeat} className="flex shrink-0 items-center">
                {text}
                <span className="px-6 text-mvcb-orange">&#42;</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
