"use client";

import { useLayoutEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  tag?: string;
};

/**
 * Infinite horizontal carousel. The item list is tripled (a copy before, the
 * "real" copy, a copy after) and the track starts scrolled to the start of
 * the middle copy, so there's always a full set of cards to scroll into in
 * either direction. Once a scroll settles (`scrollend` — fires for both the
 * button's smooth scroll and a manual swipe) and the position has drifted
 * into an outer copy, it's snapped back into the middle copy with no
 * animation — that snap is invisible because the outer copies are pixel-
 * identical to the middle one. No carousel library, no index state.
 */
export default function TestimonialCarousel({
  items,
  label = "Client testimonials",
}: {
  items: Testimonial[];
  label?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const loop = [...items, ...items, ...items];

  // Start on the middle copy before first paint, so there's no visible jump.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = track.scrollWidth / 3;
  }, [items.length]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function normalize() {
      if (!track) return;
      const third = track.scrollWidth / 3;
      if (track.scrollLeft < third * 0.5) {
        track.scrollLeft += third;
      } else if (track.scrollLeft > third * 1.5) {
        track.scrollLeft -= third;
      }
    }

    track.addEventListener("scrollend", normalize);
    return () => track.removeEventListener("scrollend", normalize);
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <section aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={trackRef}
        tabIndex={0}
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {loop.map((item, index) => (
          <li
            key={index}
            aria-hidden={index >= items.length || undefined}
            className="flex w-[86%] shrink-0 snap-start flex-col bg-mvcb-cream p-8 sm:w-[62%] md:w-[calc(50%-0.75rem)] md:p-10"
          >
            {item.tag ? (
              <span className="mb-6 text-xs font-bold tracking-[0.1em] text-mvcb-orange uppercase">
                {item.tag}
              </span>
            ) : null}
            <blockquote className="flex-1 text-base leading-relaxed text-mvcb-black md:text-lg">
              {item.quote}
            </blockquote>
            <div className="mt-10 text-xs font-bold tracking-[0.1em] uppercase">
              <span className="text-mvcb-black">{item.name}</span>
              <span className="ml-3 text-muted-foreground">
                {item.location}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => scrollByCard(-1)}
          className="flex h-12 w-12 items-center justify-center bg-mvcb-orange text-white transition-colors hover:bg-mvcb-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => scrollByCard(1)}
          className="flex h-12 w-12 items-center justify-center bg-mvcb-orange text-white transition-colors hover:bg-mvcb-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
