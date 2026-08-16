import {
  BadgeCheck,
  FileCheck2,
  HardHat,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { RiInstagramLine } from "@remixicon/react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import StatCounters from "@/components/ui/stat-counters";

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "DCA Licensed Renovation Contractor" },
  { icon: ShieldCheck, label: "SBE Approved" },
  { icon: HardHat, label: "OSHA Certified" },
  { icon: FileCheck2, label: "Licensed & Insured" },
];

const SERVICES = [
  {
    title: "Whole-Home Renovation",
    description:
      "Full structural renovations and gut rebuilds — planning, permitting, framing, and finish work that keeps what's worth keeping.",
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, integrated appliances, and stone counters in layouts built for how you live, matched to the home's original character.",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Custom tile work, glass walk-in enclosures, heated floors, and top-tier plumbing fixtures.",
  },
  {
    title: "Basement Finishing",
    description:
      "Media rooms, home gyms, and added suites finished with proper egress and moisture barriers.",
  },
  {
    title: "Room Additions",
    description:
      "Second-story pop-tops, sunrooms, and wing expansions built to match your home's existing roofline and framing.",
  },
  {
    title: "Exterior & Historic Restoration",
    description:
      "Masonry, siding, decking, and concrete work that respects the original materials instead of fighting the home's era.",
  },
];

const PORTFOLIO_PROJECTS = [
  { tag: "Whole-Home Renovation", title: "The Belleville Landmark Restoration" },
  { tag: "Kitchen Remodeling", title: "Clifton Transitional Kitchen" },
  { tag: "Bathroom Renovation", title: "Montclair Master Bath" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "A detailed walk-through of your home, your goals, budget, and timeline — including what needs to be preserved, not just replaced.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Blueprint prep, engineering checks, and Belleville/DCA permitting, planned around your home's existing structure.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Site work, framing, plumbing, electrical, and finish carpentry, held to the same quality controls on every job.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "A room-by-room inspection, handoff of permits and certifications, and the keys back in your hands.",
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
      "Very professional crew. They handled framing and insulation to a genuinely high standard — true craftsmen who take pride in the work.",
    name: "Daniel L.",
    location: "Clifton, NJ",
  },
];

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "DCA Licensed",
    description:
      "Regulated by the NJ Division of Consumer Affairs for safe residential builds.",
  },
  {
    icon: ShieldCheck,
    title: "SBE Approved",
    description:
      "Official Small Business Enterprise status matching top NJ standards.",
  },
  {
    icon: HardHat,
    title: "OSHA Certified",
    description:
      "Site compliance held to maximum safety protocols on every job.",
  },
  {
    icon: FileCheck2,
    title: "Insured & Bonded",
    description:
      "Comprehensive structural liability coverage protecting our clients.",
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
      <section id="home" className="relative w-full bg-mvcb-cream">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-blueprint-grid-light"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 md:py-24 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col lg:w-1/2">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Belleville, NJ &middot; Licensed &amp; Insured
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-mvcb-black sm:text-5xl md:text-6xl">
              Your Old Home, Restored Right.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Licensed renovation and restoration builders serving North
              &amp; Central Jersey since 2022. We bring structural precision
              and real craftsmanship to every historic and older home we
              touch &mdash; restored, not replaced.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-mvcb-orange px-6 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
              >
                <a href="#contact">Start Your Project</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-mvcb-black px-6 font-bold text-mvcb-black hover:bg-mvcb-black hover:text-white"
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-mvcb-black"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-mvcb-orange-strong"
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/images/under-construction-hero.webp"
              alt="Three builders on ladders installing metal siding over house wrap on a home exterior."
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS / ABOUT SNAPSHOT */}
      <section id="about" className="border-y border-border bg-background">
        <StatCounters />
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Precision Construction
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Uncompromising build quality tailored to your home&apos;s
              actual needs. Serving North &amp; Central Jersey since 2022.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                data-reveal
                style={{ animationDelay: `${index * 60}ms` }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-mvcb-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-mvcb-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Our Portfolio
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Our Work Speaks For Itself
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Recent renovation and restoration projects across North &amp;
              Central Jersey neighborhoods. Before/after photography for
              these projects is being finalized &mdash; check back soon.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <div
                key={project.title}
                data-reveal
                style={{ animationDelay: `${index * 80}ms` }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center bg-blueprint-grid-light">
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Before / After Coming Soon
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-mvcb-black">
                    {project.title}
                  </h3>
                  <a
                    href="#contact"
                    className="mt-3 inline-block text-sm font-semibold text-mvcb-black underline underline-offset-4 hover:text-mvcb-orange-strong"
                  >
                    Ask About This Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-mvcb-black px-6 font-bold text-mvcb-black hover:bg-mvcb-black hover:text-white"
            >
              <a href="#contact">View Full Portfolio</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Our Build Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A structured workflow that keeps timelines on track, budgets
              respected, and quality non-negotiable.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={item.step}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-mvcb-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-mvcb-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Reviews
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Real stories from property owners across North &amp; Central
              Jersey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                data-reveal
                style={{ animationDelay: `${index * 80}ms` }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-mvcb-black">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-mvcb-black">
                    {testimonial.name}
                  </span>
                  <span className="block text-muted-foreground">
                    {testimonial.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=MV+Custom+Builders+Belleville+NJ+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-mvcb-black underline underline-offset-4 hover:text-mvcb-orange-strong"
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                data-reveal
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <Icon
                  className="h-6 w-6 text-mvcb-orange-strong"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-base font-semibold text-mvcb-black">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="border-y border-border bg-mvcb-cream py-12">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:px-8"
        >
          <h2 className="text-xl font-semibold text-mvcb-black md:text-2xl">
            Follow Our Work @MV_Custom_Builders
          </h2>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-mvcb-black px-5 font-semibold text-mvcb-black hover:bg-mvcb-black hover:text-white"
          >
            <a
              href="https://www.instagram.com/mv_custom_builders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <RiInstagramLine className="h-4 w-4" aria-hidden="true" />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal>
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Coverage
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Proudly Serving
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              MV Custom Builders is licensed to perform residential
              renovation and restoration work across these NJ municipalities.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {COVERAGE.map((area, index) => (
              <div
                key={area.region}
                data-reveal
                style={{ animationDelay: `${index * 80}ms` }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-mvcb-black">
                  {area.region}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {area.towns}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-mvcb-black">
            <MapPin
              className="h-4 w-4 shrink-0 text-mvcb-orange-strong"
              aria-hidden="true"
            />
            Headquarters: 31 Bridge St, Belleville, NJ 07109
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-mvcb-black py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Restore Your Home&apos;s Character?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Talk to our team about your project scope, get a pricing
            walkthrough, and get on the schedule.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-mvcb-orange px-8 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
            >
              <a href="tel:+19735550147">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
