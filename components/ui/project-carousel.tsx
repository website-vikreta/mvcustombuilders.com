"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

export type Project = {
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

/**
 * Project slider. Native CSS scroll-snap does the scrolling — the two orange
 * arrow buttons just call scrollBy — so swipe, trackpad, and keyboard all work
 * without a carousel library or any state to keep in sync. Slides are sized to
 * peek: you always see part of the next project, which is what tells people
 * the row scrolls.
 */
export default function ProjectCarousel({ items }: { items: Project[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }

  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Recent projects"
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
      >
        {items.map((project) => (
          <li
            key={project.title}
            className="group flex w-[86%] shrink-0 snap-start flex-col sm:w-[70%] lg:w-[calc(50%-0.75rem)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 86vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* flex-1 so this stretches to match the tallest card in the row —
                the border-bottom then lands on the same line for every card,
                whatever the title's line count. */}
            <div className="flex flex-1 flex-col border-b-2 border-mvcb-orange pt-6 pb-6">
              <h3 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 self-start text-xs font-bold tracking-[0.1em] text-mvcb-black uppercase hover:text-mvcb-orange"
              >
                {project.tag}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollByCard(-1)}
          className="flex h-12 w-12 items-center justify-center bg-mvcb-orange text-white transition-colors hover:bg-mvcb-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollByCard(1)}
          className="flex h-12 w-12 items-center justify-center bg-mvcb-orange text-white transition-colors hover:bg-mvcb-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mvcb-orange"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
