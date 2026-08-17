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
    title: "Commercial Interior Build-Out",
    category: "Interior",
    tag: "Commercial Renovation",
    description:
      "A gutted commercial space taken down to the studs and rebuilt into a finished salon: framing, electrical, lighting, and flooring in one pass.",
    beforeSrc: "/images/portfolio/IMG_5677.PNG",
    afterSrc: "/images/portfolio/IMG_5682.PNG",
    beforeAlt: "Gutted commercial interior before renovation.",
    afterAlt: "Finished salon interior after renovation.",
  },
  {
    title: "Exterior Renovation & Roof Replacement",
    category: "Exterior",
    tag: "Exterior & Roofing",
    description:
      "Roof deck replacement and full re-siding on a two-story home, structural work first, finish work last.",
    beforeSrc: "/images/portfolio/IMG_5668.PNG",
    afterSrc: "/images/portfolio/IMG_5669.PNG",
    beforeAlt: "Two-story house exterior before roof and siding work.",
    afterAlt: "Two-story house exterior with new roof and siding.",
  },
  {
    title: "Patio & Pool Surround Renovation",
    category: "Exterior",
    tag: "Outdoor Living",
    description:
      "Rebuilt outdoor living space with a new patio and pool surround, tied into the home's existing footprint.",
    beforeSrc: "/images/portfolio/IMG_5666.PNG",
    afterSrc: "/images/portfolio/IMG_5665.PNG",
    beforeAlt: "Home exterior before patio and pool surround renovation.",
    afterAlt: "Home exterior with a renovated patio and in-ground pool.",
  },
  {
    title: "Kitchen Remodel & Cabinetry",
    category: "Interior",
    tag: "Kitchen Remodeling",
    description:
      "Full kitchen gut and rebuild with custom cabinetry, stone counters, and integrated appliances.",
    beforeSrc: "/images/portfolio/IMG_5670.PNG",
    afterSrc: "/images/portfolio/IMG_5671.PNG",
    beforeAlt: "Kitchen before remodel, mid-demolition.",
    afterAlt: "Finished kitchen with new cabinetry and counters.",
  },
  {
    title: "Spa-Style Bathroom Renovation",
    category: "Interior",
    tag: "Bathroom Renovation",
    description:
      "Custom tile work, a glass walk-in enclosure, and heated floors fitted into an older home's existing footprint.",
    beforeSrc: "/images/portfolio/IMG_5672.PNG",
    afterSrc: "/images/portfolio/IMG_5673.PNG",
    beforeAlt: "Bathroom before renovation.",
    afterAlt: "Finished spa-style bathroom after renovation.",
  },
  {
    title: "Whole-Home Structural Rebuild",
    category: "Structural",
    tag: "Whole-Home Renovation",
    description:
      "Full structural renovation: framing, permitting, and finish work planned around what the home's original structure could keep.",
    beforeSrc: "/images/portfolio/IMG_5674.PNG",
    afterSrc: "/images/portfolio/IMG_5675.PNG",
    beforeAlt: "Home interior before structural rebuild.",
    afterAlt: "Home interior after structural rebuild.",
  },
  {
    title: "Basement Finishing & Media Room",
    category: "Interior",
    tag: "Basement Finishing",
    description:
      "Unfinished basement turned into a media room and home gym, with proper egress and moisture barriers built to code.",
    beforeSrc: "/images/portfolio/IMG_5676.PNG",
    afterSrc: "/images/portfolio/IMG_5678.PNG",
    beforeAlt: "Unfinished basement before build-out.",
    afterAlt: "Finished basement media room after build-out.",
  },
  {
    title: "Second-Story Room Addition",
    category: "Structural",
    tag: "Room Additions",
    description:
      "Second-story pop-top addition framed to match the home's existing roofline instead of bolted on as an afterthought.",
    beforeSrc: "/images/portfolio/IMG_5679.PNG",
    afterSrc: "/images/portfolio/IMG_5680.PNG",
    beforeAlt: "Home exterior before second-story addition.",
    afterAlt: "Home exterior after second-story addition.",
  },
  {
    title: "Historic Facade Restoration",
    category: "Exterior",
    tag: "Historic Restoration",
    description:
      "Masonry and siding work that respects the home's original detailing instead of fighting its era.",
    beforeSrc: "/images/portfolio/IMG_5681.PNG",
    afterSrc: "/images/portfolio/IMG_5318.PNG",
    beforeAlt: "Historic home facade before restoration.",
    afterAlt: "Historic home facade after restoration.",
  },
  {
    title: "Custom Built-In Cabinetry",
    category: "Interior",
    tag: "Custom Millwork",
    description:
      "Built-in shelving and cabinetry made to fit an older home's actual dimensions, not stock sizes forced into the space.",
    beforeSrc: "/images/portfolio/IMG_5658.PNG",
    afterSrc: "/images/portfolio/IMG_5659.PNG",
    beforeAlt: "Living room before custom built-in cabinetry.",
    afterAlt: "Living room after custom built-in cabinetry.",
  },
  {
    title: "Siding & Exterior Cladding",
    category: "Exterior",
    tag: "Exterior Cladding",
    description:
      "Fiber cement siding installed with correct house-wrap and flashing, matched to the home's original lines.",
    beforeSrc: "/images/portfolio/IMG_5660.PNG",
    afterSrc: "/images/portfolio/IMG_5661.PNG",
    beforeAlt: "Home exterior before new siding.",
    afterAlt: "Home exterior after new siding.",
  },
  {
    title: "Foundation & Masonry Repair",
    category: "Structural",
    tag: "Foundation Repair",
    description:
      "Crack injection and repointing on a brick foundation, addressed at the source instead of patched over.",
    beforeSrc: "/images/portfolio/IMG_5662.PNG",
    afterSrc: "/images/portfolio/IMG_5663.PNG",
    beforeAlt: "Foundation before masonry repair.",
    afterAlt: "Foundation after masonry repair.",
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
          <div className="absolute inset-0 bg-mvcb-black/80" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col px-8 py-20 sm:px-12 lg:px-16 md:py-28">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
            See The Transformation
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Real renovation and restoration work across North &amp; Central
            Jersey. Click any project below and hover the photo to compare.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 md:py-24">
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
      <section className="py-16 md:py-24">
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
