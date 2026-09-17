"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, ArrowRight, Search, X } from "react-bootstrap-icons";

import Action from "@/components/ui/action";
import BeforeAfterSlider from "@/components/ui/before-after-slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORIES = ["All", "Structural", "Interior", "Exterior"] as const;

const SORTS = {
  featured: "Featured",
  "name-asc": "Name (A–Z)",
  "name-desc": "Name (Z–A)",
  category: "Category",
} as const;

const PROJECTS = [
  {
    title: "Full-Service Salon Build-Out",
    category: "Interior",
    tag: "Commercial Interior Build-Out",
    description:
      "A raw white-box suite with an open ceiling, taped drywall, and no power at the stations, built out into a working salon: finished ceiling with a curved soffit, backlit arched mirrors, wired and plumbed styling stations, and plank flooring wall to wall.",
    beforeSrc: "/images/portfolio/before-after/salon-before.webp",
    afterSrc: "/images/portfolio/before-after/salon-after.webp",
    beforeAlt:
      "Empty commercial suite with exposed ceiling, bare drywall, and a concrete slab before build-out.",
    afterAlt:
      "Finished salon with backlit arched mirrors, styling stations, and plank flooring.",
  },
  {
    title: "Café Dining Room Build-Out",
    category: "Interior",
    tag: "Restaurant & Café Build-Out",
    description:
      "Exposed spiral duct, patched block walls, and a dusty slab turned into a finished dining room: a service window into the kitchen, patterned cement tile, textured dark walls, and a lit sign above the seating.",
    beforeSrc: "/images/portfolio/before-after/cafe-before.webp",
    afterSrc: "/images/portfolio/before-after/cafe-after.webp",
    beforeAlt:
      "Gutted commercial space with exposed ductwork and unfinished walls before the café build-out.",
    afterAlt:
      "Finished café dining room with patterned tile floor, wood tables, and a lit sign on the wall.",
  },
  {
    title: "Pool Deck & Rear Patio",
    category: "Exterior",
    tag: "Outdoor Living",
    description:
      "A poured pool shell sitting in graded dirt, finished into a full rear yard: stone decking around the pool and spa, a covered loggia off the house, planting beds, and low-voltage lighting.",
    beforeSrc: "/images/portfolio/before-after/pool-patio-before.webp",
    afterSrc: "/images/portfolio/before-after/pool-patio-after.webp",
    beforeAlt:
      "Backyard with an unfinished concrete pool shell and bare graded soil behind a white house.",
    afterAlt:
      "Finished pool, stone patio, and covered loggia lit at dusk behind the same house.",
  },
  {
    title: "Two-Story Home, Framing To Finish",
    category: "Structural",
    tag: "Framing & Exterior",
    description:
      "Caught at the halfway mark with the frame sheathed and scaffold still up, then closed in: insulated siding, black-trimmed windows, a standing-seam porch roof on timber posts, and final grading and lawn.",
    beforeSrc: "/images/portfolio/before-after/new-build-before.webp",
    afterSrc: "/images/portfolio/before-after/new-build-after.webp",
    beforeAlt:
      "Two-story house sheathed in OSB with scaffolding and lumber stacked in the yard.",
    afterAlt:
      "The same house finished in gray siding with a timber-post porch and a new lawn.",
  },
  {
    title: "Side Entry Stair Rebuild",
    category: "Exterior",
    tag: "Entry Stairs & Siding",
    description:
      "Siding opened back to the house wrap and a worn concrete stoop at the side door, rebuilt as a pressure-treated stair and landing with a vinyl rail, a new door, and siding closed back over the original stone foundation.",
    beforeSrc: "/images/portfolio/before-after/side-entry-before.webp",
    afterSrc: "/images/portfolio/before-after/side-entry-after.webp",
    beforeAlt:
      "Side entry with siding stripped to the house wrap and a cracked concrete stoop.",
    afterAlt:
      "The same side entry with a new wood stair, white vinyl railing, and siding restored.",
  },
  {
    title: "Front Porch & Paver Walkway",
    category: "Exterior",
    tag: "Porch & Hardscape",
    description:
      "Temporary posts, a bare foundation wall, and dirt where the yard should be, finished into a railed porch with columns and a lattice skirt, a wood stair, and a paver walk run out to the drive.",
    beforeSrc: "/images/portfolio/before-after/front-porch-before.webp",
    afterSrc: "/images/portfolio/before-after/front-porch-after.webp",
    beforeAlt:
      "Front porch under construction with temporary posts, exposed foundation, and bare soil.",
    afterAlt:
      "Finished front porch with white columns, railing, lattice skirt, and a paver walkway.",
  },
  {
    title: "Second-Story Addition & Re-Side",
    category: "Structural",
    tag: "Additions",
    description:
      "A cape framed out for a full second story on one wing, then wrapped and sided in deep navy with white trim, with the new roofline carried across the original so the addition reads as part of the house.",
    beforeSrc: "/images/portfolio/before-after/addition-before.webp",
    afterSrc: "/images/portfolio/before-after/addition-after.webp",
    beforeAlt:
      "House wrapped in building paper mid-addition, with scaffolding and lumber on site.",
    afterAlt:
      "The same house finished in navy siding with white trim and the addition blended into the roofline.",
  },
] as const;

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = useState<keyof typeof SORTS>("featured");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = PROJECTS.filter((project) => {
    const matchesCategory =
      category === "All" || project.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.tag.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    if (sort === "name-desc") return b.title.localeCompare(a.title);
    if (sort === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // Isotope-style dynamic layout: every time the visible/ordered set changes,
  // the grid re-renders in its new DOM order (CSS Grid reflows for free) and
  // this replays a staggered fade + lift over the current cells so the
  // filter/sort feels like one motion instead of a hard cut.
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.05,
        overwrite: true,
      },
    );
  }, [query, category, sort]);

  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-mvcb-black">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/portfolio/before-after/pool-patio-after.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-mvcb-black/70" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col px-8 py-20 sm:px-12 lg:px-16 md:py-28">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
            See The Transformation
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Seven of our own jobs across North &amp; Central Jersey, from
            commercial build-outs to additions, porches, and pool decks. Open
            any project and drag across the photo to compare.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
          {/* FILTER BAR */}
          <div
            data-reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="relative w-full sm:max-w-xs">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="h-11 pl-9"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-mvcb-black"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <Action
                  key={cat}
                  type="button"
                  size="sm"
                  variant={cat === category ? "primary" : "secondary"}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Action>
              ))}

              <Select
                value={sort}
                onValueChange={(value) => setSort(value as keyof typeof SORTS)}
              >
                <SelectTrigger
                  size="sm"
                  aria-label="Sort projects"
                  className="h-10 w-auto min-w-36"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(SORTS).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* GRID */}
          {sorted.length > 0 ? (
            <div
              ref={gridRef}
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {sorted.map((project) => (
                <Dialog key={project.title}>
                  <DialogTrigger className="group flex flex-col overflow-hidden border border-mvcb-line bg-background transition-colors hover:border-mvcb-black">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={project.afterSrc}
                        alt={project.afterAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-mvcb-black/0 opacity-0 transition-all duration-200 group-hover:bg-mvcb-black/50 group-hover:opacity-100">
                        <span className="flex items-center gap-2 border border-white px-4 py-2 text-xs font-bold tracking-[0.1em] text-white uppercase">
                          <ArrowLeftRight
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          Compare
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-6">
                      <span className="text-xs font-bold tracking-[0.1em] text-mvcb-orange uppercase">
                        {project.category}
                      </span>
                      <h2 className="text-lg font-extrabold tracking-[-0.02em] uppercase text-mvcb-black">
                        {project.title}
                      </h2>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-mvcb-black uppercase">
                        View before &amp; after
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl gap-0 p-0">
                    <div className="p-6 pr-14 pb-4 sm:p-8 sm:pr-16 sm:pb-4">
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="mt-1">
                        {project.tag}
                      </DialogDescription>
                    </div>
                    <BeforeAfterSlider
                      beforeSrc={project.beforeSrc}
                      afterSrc={project.afterSrc}
                      beforeAlt={project.beforeAlt}
                      afterAlt={project.afterAlt}
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <p
              data-reveal
              className="mt-10 border border-mvcb-line bg-mvcb-sand px-6 py-10 text-center text-sm font-semibold text-muted-foreground"
            >
              No projects match your search.
            </p>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-5xl">
            Ready to See Your Home Transformed?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us about your project and we&apos;ll walk you through scope,
            timeline, and pricing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Action href="/contact" size="lg" withArrow>
              Start your project
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
