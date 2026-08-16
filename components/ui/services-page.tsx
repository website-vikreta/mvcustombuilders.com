import { GeoAlt } from "react-bootstrap-icons";

import Action from "@/components/ui/action";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";

const SERVICES = [
  {
    title: "Whole-Home Renovation",
    description:
      "Full structural renovations and gut rebuilds. Planning, permitting, framing, and finish work that keeps what's worth keeping instead of tearing it all out.",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, integrated appliances, and stone counters in layouts built for how you live, matched to the home's original character.",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Custom tile work, glass walk-in enclosures, heated floors, and top-tier plumbing fixtures, fitted into the footprint an older home actually gives you.",
  },
  {
    title: "Basement Finishing",
    description:
      "Media rooms, home gyms, and added suites finished with proper egress and moisture barriers, built to code from the ground up.",
  },
  {
    title: "Room Additions",
    description:
      "Second-story pop-tops, sunrooms, and wing expansions built to match your home's existing roofline and framing, not bolted on as an afterthought.",
  },
  {
    title: "Exterior & Historic Restoration",
    description:
      "Masonry, siding, decking, and concrete work that respects the original materials and detailing instead of fighting the home's era.",
  },
];

export default function ServicesPage() {
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

      {/* SERVICES BENTO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              data-reveal
              className={`flex flex-col overflow-hidden  border border-mvcb-line bg-background md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-mvcb-sand md:aspect-auto md:w-1/2">
                <span className="border border-mvcb-line bg-background px-3 py-1 text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                  Project Photos Coming Soon
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 p-8 md:w-1/2">
                <h2 className="text-2xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black">
                  {service.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Action
                  href="/contact"
                  variant="secondary"
                  className="mt-2 w-fit"
                >
                  Ask about this service
                </Action>
              </div>
            </div>
          ))}
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
