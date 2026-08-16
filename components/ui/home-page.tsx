import Image from "next/image";
import {
  ConeStriped,
  FileEarmarkCheck,
  GeoAlt,
  PatchCheckFill,
  ShieldCheck,
} from "react-bootstrap-icons";

import Action from "@/components/ui/action";
import ProjectCarousel from "@/components/ui/project-carousel";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import {
  CONTAINER,
  CONTENT_GAP,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui/section";
import StatCounters from "@/components/ui/stat-counters";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";

const TRUST_BADGES = [
  "DCA Licensed",
  "SBE Approved",
  "OSHA Certified",
  "Fully Insured",
];

const HERO_HIGHLIGHTS = [
  { step: "01", title: "Whole-home renovation" },
  { step: "02", title: "Kitchens & baths" },
  { step: "03", title: "Historic restoration" },
];

const SERVICES = [
  {
    step: "01",
    title: "Whole-Home Renovation",
    description:
      "Full structural renovations and gut rebuilds. Planning, permitting, framing, and finish work, keeping what's worth keeping.",
  },
  {
    step: "02",
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, integrated appliances, and stone counters, laid out for how you actually cook.",
  },
  {
    step: "03",
    title: "Bathroom Renovation",
    description:
      "Custom tile work, glass walk-in enclosures, heated floors, and fixtures that hold up after the first winter.",
  },
  {
    step: "04",
    title: "Basement Finishing",
    description:
      "Media rooms, home gyms, and in-law suites. Proper egress and moisture barriers go in before anything pretty does.",
  },
  {
    step: "05",
    title: "Room Additions",
    description:
      "Second-story pop-tops, sunrooms, and wing expansions framed to meet your existing roofline instead of fighting it.",
  },
  {
    step: "06",
    title: "Exterior & Historic Restoration",
    description:
      "Masonry, siding, decking, and concrete. We work with the original materials rather than covering them up.",
  },
];

const PORTFOLIO_PROJECTS = [
  {
    tag: "Commercial renovation",
    title: "Commercial Interior Build-Out",
    description:
      "A gutted commercial space taken down to the studs and rebuilt into a finished salon. Framing, electrical, lighting, and flooring in one pass.",
    image: "/images/portfolio/IMG_5682.PNG",
    alt: "Finished salon interior with styling mirrors, ambient lighting, and new flooring.",
  },
  {
    tag: "Exterior & roofing",
    title: "Exterior Renovation & Roof Replacement",
    description:
      "Roof deck replacement and full re-siding on a two-story home. Structural work first, finish work last.",
    image: "/images/portfolio/IMG_5669.PNG",
    alt: "Two-story house exterior with new siding, mid-renovation.",
  },
  {
    tag: "Outdoor living",
    title: "Patio & Pool Surround Renovation",
    description:
      "Rebuilt outdoor living space with a new patio and pool surround, tied into the home's existing footprint.",
    image: "/images/portfolio/IMG_5665.PNG",
    alt: "Home exterior with a renovated patio and in-ground pool.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We walk the house with you and talk through goals, budget, and timeline. That includes what should be preserved, not only what gets replaced.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Blueprint prep, engineering checks, and Belleville and DCA permitting, all planned around the structure that's already standing.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Site work, framing, plumbing, electrical, and finish carpentry. Same quality controls on a powder room as on a full gut.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "A room-by-room inspection with you, every permit and certification handed over, and the keys back in your hands.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "MV Custom Builders restored our historic home in Belleville without losing what made it special. Their attention to structural integrity and finish work is unmatched.",
    name: "Robert & Maria S.",
    location: "Belleville, NJ",
  },
  {
    quote:
      "Our master bedroom addition and kitchen remodel finished right on budget. Communication through the whole design phase was flawless.",
    name: "Jason K.",
    location: "Montclair, NJ",
  },
  {
    quote:
      "Very professional crew. They handled framing and insulation to a genuinely high standard. True craftsmen who take pride in the work.",
    name: "Daniel L.",
    location: "Clifton, NJ",
  },
];

const CREDENTIALS = [
  {
    icon: PatchCheckFill,
    title: "DCA Licensed",
    description:
      "Registered with the NJ Division of Consumer Affairs for residential building work.",
  },
  {
    icon: ShieldCheck,
    title: "SBE Approved",
    description:
      "Certified Small Business Enterprise under New Jersey's state program.",
  },
  {
    icon: ConeStriped,
    title: "OSHA Certified",
    description:
      "Site safety protocols followed on every job, on the small ones too.",
  },
  {
    icon: FileEarmarkCheck,
    title: "Insured & Bonded",
    description:
      "Full structural liability coverage, so a problem on site stays our problem.",
  },
];

const COVERAGE = [
  {
    region: "North Jersey",
    towns:
      "Belleville, Newark, Clifton, Montclair, Nutley, Bloomfield, Wayne, Paramus, Hackensack, Paterson, Fort Lee",
  },
  {
    region: "Central Jersey",
    towns:
      "Edison, Woodbridge, Union, Elizabeth, Middletown, Brunswick, Princeton, Morristown, Summit",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section
        id="home"
        className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-mvcb-black md:min-h-[94svh]"
      >
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div
            data-parallax
            data-parallax-strength="10"
            className="absolute -inset-y-[14%] inset-x-0"
          >
            <Image
              src="/images/under-construction-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-mvcb-black via-mvcb-black/75 to-mvcb-black/40" />
        </div>

        <div className={`relative w-full ${CONTAINER} pt-32 pb-0 md:pt-40`}>
          <Eyebrow tone="dark">belleville, nj &middot; since 2022</Eyebrow>
          <h1
            data-reveal="text"
            className="mt-6 max-w-4xl text-4xl leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-6xl md:text-7xl"
          >
            Your old home,
            <br />
            restored right.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            We renovate old and historic houses across North and Central Jersey.
            Structural work done properly. Finish work done by hand. Restored,
            not replaced.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Action href="/contact" size="lg" withArrow>
              Start your project
            </Action>
            <Action
              href="/portfolio"
              variant="secondary"
              size="lg"
              tone="dark"
              withArrow
            >
              See the work
            </Action>
          </div>

          <ul
            data-reveal="children"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {TRUST_BADGES.map((label) => (
              <li
                key={label}
                className="text-xs font-bold tracking-[0.1em] text-white/70 uppercase"
              >
                {label}
              </li>
            ))}
          </ul>

          {/* numbered highlights, sitting on the photo like the reference */}
          <ul
            data-reveal="children"
            className="mt-14 grid grid-cols-1 border-t border-white/15 sm:grid-cols-3"
          >
            {HERO_HIGHLIGHTS.map((item) => (
              <li
                key={item.step}
                className="border-b border-white/15 py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="text-sm font-bold tabular-nums text-white/50">
                  {item.step}
                </span>
                <p className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-white uppercase">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-16 md:h-20" />
      </section>

      {/* WORD DIVIDER — the outline of the word draws itself as you scroll past */}
      {/* edge to edge, and flush to the hero above it */}
      <div className="pb-16 md:pb-24">
        <svg
          role="img"
          aria-label="Restored."
          viewBox="0 0 1700 300"
          preserveAspectRatio="none"
          className="h-[18vw] w-full cursor-default select-none"
        >
          <text
            data-draw
            x="0"
            y="240"
            textLength="1700"
            lengthAdjust="spacingAndGlyphs"
            fill="none"
            stroke="color-mix(in srgb, var(--mvcb-line) 90%, black 10%)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="font-sans text-[280px] font-extrabold uppercase"
          >
            Restored.
          </text>
        </svg>
      </div>

      {/* STATS */}
      <Section id="about">
        <StatCounters />
      </Section>

      {/* WHY US / CREDENTIALS */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="licensed. insured. checkable."
            title="A contractor you can verify before you hire"
            intro="Every licence and certification below is registered in our name and can be looked up. Ask us for the numbers and we'll send them."
          />

          <div className="flex flex-col">
            {CREDENTIALS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                data-reveal="mask"
                className="flex h-full gap-6 border border-mvcb-line border-b-0 p-6 last:border-b md:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-mvcb-orange">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-[-0.01em] text-mvcb-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES — numbered rows */}
      <Section id="services">
        <SectionHeading
          eyebrow="from walkthrough to final coat"
          title="What we build"
          intro="Six things we do, all of them on houses that were standing long before we showed up."
        />

        <ul data-reveal="children" className={CONTENT_GAP}>
          {SERVICES.map((service) => (
            <li key={service.step}>
              <a
                href="/services"
                className="group flex flex-col gap-4 bg-mvcb-cream p-6 transition-colors hover:bg-mvcb-black md:flex-row md:items-center md:gap-10 md:p-8"
              >
                <span className="text-sm font-bold tabular-nums text-mvcb-orange md:w-12">
                  {service.step}
                </span>
                <h3 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase transition-colors group-hover:text-white md:w-80 md:shrink-0 md:text-2xl">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-neutral-300">
                  {service.description}
                </p>
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-mvcb-black/20 text-mvcb-black transition-colors group-hover:border-mvcb-orange group-hover:bg-mvcb-orange group-hover:text-white"
                >
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="proof in every project"
            title="Case studies of work we've finished"
            intro="Renovation and restoration jobs across North and Central Jersey. Photos are ours, not stock."
          />
          <div data-reveal className="shrink-0">
            <Action href="/portfolio" variant="secondary" withArrow>
              All projects
            </Action>
          </div>
        </div>

        <div data-reveal="mask" className={CONTENT_GAP}>
          <ProjectCarousel items={PORTFOLIO_PROJECTS} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading
          eyebrow="the same order, every job"
          title="How a job runs"
          intro="Four stages. You always know which one you're in."
        />

        <ol
          className={`${CONTENT_GAP} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {PROCESS_STEPS.map((item) => (
            <li
              key={item.step}
              data-reveal="mask"
              className="flex h-full flex-col border border-mvcb-line p-6 md:p-8 lg:border-r-0 lg:last:border-r"
            >
              <span className="text-2xl font-extrabold tabular-nums text-mvcb-orange">
                {item.step}
              </span>
              <h3 className="mt-6 text-lg font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="in their words"
            title="What owners tell us"
            intro="Three of the people whose houses we've worked on."
          />
          <div data-reveal className="shrink-0">
            <Action
              href="https://www.google.com/search?q=MV+Custom+Builders+Belleville+NJ+reviews"
              variant="secondary"
              withArrow
            >
              All reviews
            </Action>
          </div>
        </div>

        <div data-reveal="mask" className={CONTENT_GAP}>
          <TestimonialCarousel items={TESTIMONIALS} />
        </div>
      </Section>

      {/* COVERAGE */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="north & central jersey"
            title="Where we work"
            intro="We're licensed for residential renovation and restoration across these New Jersey municipalities."
          />

          <div className="flex flex-col gap-8">
            {COVERAGE.map((area) => (
              <div key={area.region} data-reveal>
                <h3 className="text-lg font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                  {area.region}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {area.towns}
                </p>
              </div>
            ))}

            <div
              data-reveal
              className="flex items-center gap-3 bg-mvcb-cream p-6 text-sm font-bold tracking-[0.05em] text-mvcb-black uppercase"
            >
              <GeoAlt
                className="h-4 w-4 shrink-0 text-mvcb-orange"
                aria-hidden="true"
              />
              31 Bridge St, Belleville, NJ 07109
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section id="contact" tone="navy">
        <div
          data-reveal
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="max-w-md text-3xl leading-[1.02] font-extrabold tracking-[-0.02em] text-white uppercase md:text-5xl">
              Tell us what the house needs
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-300">
              Walk us through the project and we&rsquo;ll come back with scope,
              a realistic timeline, and a price.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
            <Action href="/contact" size="lg" withArrow>
              Get a free quote
            </Action>
            <Action
              href="tel:+19735550147"
              variant="ghost"
              size="lg"
              tone="dark"
            >
              (973) 555-0147
            </Action>
          </div>
        </div>
      </Section>
    </>
  );
}
