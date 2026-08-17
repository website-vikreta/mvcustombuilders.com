"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { GeoAlt, Search, X } from "react-bootstrap-icons";

import Action from "@/components/ui/action";
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

const SERVICES = [
  {
    title: "Whole-Home Renovation",
    category: "Structural",
    description:
      "Full structural renovations and gut rebuilds. Planning, permitting, framing, and finish work that keeps what's worth keeping instead of tearing it all out.",
  },
  {
    title: "Kitchen Remodeling",
    category: "Interior",
    description:
      "Custom cabinetry, integrated appliances, and stone counters in layouts built for how you live, matched to the home's original character.",
  },
  {
    title: "Bathroom Renovation",
    category: "Interior",
    description:
      "Custom tile work, glass walk-in enclosures, heated floors, and top-tier plumbing fixtures, fitted into the footprint an older home actually gives you.",
  },
  {
    title: "Basement Finishing",
    category: "Interior",
    description:
      "Media rooms, home gyms, and added suites finished with proper egress and moisture barriers, built to code from the ground up.",
  },
  {
    title: "Room Additions",
    category: "Structural",
    description:
      "Second-story pop-tops, sunrooms, and wing expansions built to match your home's existing roofline and framing, not bolted on as an afterthought.",
  },
  {
    title: "Exterior & Historic Restoration",
    category: "Exterior",
    description:
      "Masonry, siding, decking, and concrete work that respects the original materials and detailing instead of fighting the home's era.",
  },
  {
    title: "Framing & Structural Repair",
    category: "Structural",
    description:
      "Sistered joists, load-bearing wall corrections, and beam replacement for homes settling or showing real structural wear, not just cosmetic sag.",
  },
  {
    title: "Foundation & Masonry Repair",
    category: "Structural",
    description:
      "Crack injection, underpinning, and repointing on brick and stone foundations, addressed at the source instead of patched over.",
  },
  {
    title: "Electrical & Plumbing Upgrades",
    category: "Structural",
    description:
      "Panel upgrades, rewiring, and repiping brought up to current code, planned around the renovation instead of bolted on after the fact.",
  },
  {
    title: "Flooring Installation",
    category: "Interior",
    description:
      "Hardwood refinishing, engineered wood, and tile installed level and square, matched to a home's existing subfloor and transitions.",
  },
  {
    title: "Custom Cabinetry & Millwork",
    category: "Interior",
    description:
      "Built-in shelving, trim work, and cabinetry made to fit an older home's actual dimensions, not stock sizes forced into the space.",
  },
  {
    title: "Interior Painting & Drywall",
    category: "Interior",
    description:
      "Skim-coated walls, patched plaster, and finish painting that hides repairs instead of drawing attention to where old and new meet.",
  },
  {
    title: "Roof Replacement & Repair",
    category: "Exterior",
    description:
      "Full tear-offs and repairs on asphalt, slate, and flat roofing, with proper flashing and ventilation so the deck underneath lasts.",
  },
  {
    title: "Siding & Exterior Cladding",
    category: "Exterior",
    description:
      "Vinyl, fiber cement, and wood siding installed with correct house-wrap and flashing, matched to the home's original lines.",
  },
  {
    title: "Deck & Patio Construction",
    category: "Exterior",
    description:
      "Pressure-treated and composite decks, and paver or concrete patios, built to code with proper footings, not surface-set.",
  },
] as const;

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = useState<keyof typeof SORTS>("featured");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = SERVICES.filter((service) => {
    const matchesCategory = category === "All" || service.category === category;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q);
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
            Renovation &amp; Restoration Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Structural and finish work for old and historic homes across North
            &amp; Central Jersey, built on code compliance, not shortcuts.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
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
                placeholder="Search services..."
                aria-label="Search services"
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
                  aria-label="Sort services"
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
              {sorted.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col overflow-hidden border border-mvcb-line bg-background"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-mvcb-sand">
                    <span className="border border-mvcb-line bg-background px-3 py-1 text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                      Project Photos Coming Soon
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-bold tracking-[0.1em] text-mvcb-orange uppercase">
                      {service.category}
                    </span>
                    <h2 className="text-lg font-extrabold tracking-[-0.02em] uppercase text-mvcb-black">
                      {service.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Action
                      href="/contact"
                      variant="secondary"
                      size="sm"
                      className="mt-2 w-fit"
                    >
                      Ask about this service
                    </Action>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p
              data-reveal
              className="mt-10 border border-mvcb-line bg-mvcb-sand px-6 py-10 text-center text-sm font-semibold text-muted-foreground"
            >
              No services match your search.
            </p>
          )}
        </div>
      </section>

      {/* SERVICE AREA NOTE */}
      <section className="py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <div className="flex items-center gap-2 text-sm font-semibold text-mvcb-black">
            <GeoAlt
              className="h-4 w-4 shrink-0 text-mvcb-orange"
              aria-hidden="true"
            />
            Proudly serving North Jersey and Central Jersey
          </div>
          <p className="text-sm text-muted-foreground">
            Office: 31 Bridge St, Belleville, NJ 07109
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-5xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us the scope of the work and we&apos;ll walk you through
            pricing and timeline.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Action href="/contact" size="lg" withArrow>
              Get a free quote
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
