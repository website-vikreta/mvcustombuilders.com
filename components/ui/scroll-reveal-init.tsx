"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders nothing — wires up every scroll effect on the page with GSAP.
 * Mark elements declaratively; never write per-component GSAP.
 *
 *   data-reveal            fade + lift. Siblings entering together stagger.
 *   data-reveal="mask"     clip-wipes up from its own bottom edge while it
 *                          lifts — the "overflow hidden" reveal. Use on cards,
 *                          images, and panels.
 *   data-reveal="text"     same wipe, tuned for headings: taller travel, no
 *                          fade, so the letters appear to rise out of the line.
 *   data-reveal="children" staggers the element's direct children instead of
 *                          the element itself. Cheapest way to make a grid or
 *                          a list feel alive without tagging every cell.
 *   data-draw               outlined SVG <text> that draws its own strokes.
 *   data-parallax          scroll-linked drift against the scroll. Optional
 *                          data-parallax-strength (percent, default 12).
 *
 * Everything runs inside gsap.matchMedia("(prefers-reduced-motion: no-preference)"),
 * so with reduced motion — or with no JS at all — nothing is hidden or moved.
 * Every reveal is `once`: it plays a single time and never re-hides on the way
 * back up.
 */

const HIDDEN = {
  mask: { clipPath: "inset(100% 0% 0% 0%)", y: 40, opacity: 1 },
  text: { clipPath: "inset(100% 0% 0% 0%)", y: 60, opacity: 1 },
  default: { clipPath: "inset(0% 0% 0% 0%)", y: 24, opacity: 0 },
} as const;

const SHOWN = {
  clipPath: "inset(0% 0% 0% 0%)",
  y: 0,
  opacity: 1,
} as const;

function revealKind(element: Element) {
  const value = element.getAttribute("data-reveal");
  if (value === "mask" || value === "text") return value;
  return "default" as const;
}

export default function ScrollRevealInit() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]:not([data-reveal='children'])",
      );
      const childTargets = gsap.utils
        .toArray<HTMLElement>("[data-reveal='children']")
        .flatMap((parent) => Array.from(parent.children) as HTMLElement[]);

      // Hidden only once JS is running and motion is allowed — a no-JS or
      // reduced-motion render never has anything to un-hide.
      for (const element of revealTargets) {
        gsap.set(element, {
          ...HIDDEN[revealKind(element)],
          willChange: "transform, opacity, clip-path",
        });
      }
      gsap.set(childTargets, {
        ...HIDDEN.mask,
        willChange: "transform, clip-path",
      });

      const play = (batch: Element[], duration: number) =>
        gsap.to(batch, {
          ...SHOWN,
          duration,
          ease: "expo.out",
          stagger: 0.08,
          overwrite: "auto",
          clearProps: "willChange,clipPath",
        });

      ScrollTrigger.batch(revealTargets, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => play(batch, 1.1),
      });

      ScrollTrigger.batch(childTargets, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => play(batch, 1),
      });

      // Outlined SVG lettering that draws itself, stroke by stroke.
      // getTotalLength() isn't available on <text>, so the dash pattern is a
      // fixed length long enough to cover any glyph — the offset animating to
      // 0 is what reads as drawing.
      for (const glyphs of gsap.utils.toArray<SVGTextElement>("[data-draw]")) {
        gsap.fromTo(
          glyphs,
          { strokeDasharray: 1400, strokeDashoffset: 1400 },
          {
            strokeDashoffset: 0,
            duration: 2.4,
            ease: "power1.inOut",
            scrollTrigger: { trigger: glyphs, start: "top 85%", once: true },
          },
        );
      }

      // Scroll-linked drift. "top bottom" assumes the element scrolls in
      // from below, which is wrong for anything already on screen at load
      // (the hero) — there, scrollY:0 doesn't correspond to progress:0 under
      // that start point, so the first ScrollTrigger.refresh() (fonts,
      // images, layout settling) snaps the element to wherever the
      // recalculated progress lands. "top top" makes progress:0 exactly
      // match scrollY:0, so there's nothing to snap to.
      for (const element of gsap.utils.toArray<HTMLElement>(
        "[data-parallax]",
      )) {
        const strength = Number(element.dataset.parallaxStrength ?? 12);
        const trigger = element.parentElement ?? element;
        const aboveTheFold = trigger.getBoundingClientRect().top + window.scrollY <= 0;

        gsap.fromTo(
          element,
          { yPercent: -strength },
          {
            yPercent: strength,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: aboveTheFold ? "top top" : "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    });

    return () => mm.revert();
  }, []);

  return null;
}
