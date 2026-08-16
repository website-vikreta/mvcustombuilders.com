import {
  BadgeCheck,
  Calendar,
  FileCheck2,
  Hammer,
  HardHat,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import StatCounters from "@/components/ui/stat-counters";

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    title: "DCA Licensed Renovation Contractor",
    description:
      "Regulated by the NJ Division of Consumer Affairs for safe residential builds.",
  },
  {
    icon: ShieldCheck,
    title: "SBE Approved Contractor",
    description:
      "Official Small Business Enterprise status matching top NJ standards.",
  },
  {
    icon: HardHat,
    title: "OSHA Certified Operations",
    description:
      "Site compliance held to maximum safety protocols on every job.",
  },
  {
    icon: FileCheck2,
    title: "Licensed & Insured Coverage",
    description:
      "Comprehensive structural liability coverage protecting our clients.",
  },
];

const WHY_US = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    description:
      "From foundation repair and structural framing to finish carpentry, every step gets the same attention.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "You'll know your timeline, your budget, and who to call, without chasing anyone down.",
  },
  {
    icon: Calendar,
    title: "On-Time Delivery",
    description:
      "A structured process that keeps your project on schedule instead of slipping month to month.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "State registration and real insurance coverage back every job, protecting your investment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-mvcb-black">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/under-construction-hero.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-mvcb-black/70" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:px-8 md:py-28">
          <span className="text-xs font-semibold tracking-wide text-mvcb-orange uppercase">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            About MV Custom Builders
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            We&apos;ve restored old and historic homes across North &amp;
            Central Jersey since 2022. Real structural work, not a surface
            fix.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
          <div
            data-reveal
            className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-border bg-blueprint-grid-light lg:w-1/2"
          >
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Team Photo Coming Soon
            </span>
          </div>
          <div data-reveal className="flex flex-col lg:w-1/2">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Established April 2022
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Built On Craft, Not Shortcuts
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              MV Custom Builders LLC was founded on April 14, 2022, with one
              focus: real structural craftsmanship for old and historic
              homes across North and Central Jersey.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We handle everything from foundation repair and structural
              framing to finish carpentry, always working around what&apos;s
              original instead of tearing it out. A hundred-year-old house
              deserves a crew that understands why it was built the way it
              was.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <StatCounters />
      </section>

      {/* CREDENTIALS */}
      <section className="bg-mvcb-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Our Credentials
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Fully Licensed, Certified &amp; Approved
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We meet New Jersey&apos;s safety, compliance, and consumer
              protection standards on every job.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                data-reveal
                style={{ animationDelay: `${index * 60}ms` }}
                className="rounded-2xl border border-border bg-card p-6"
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

      {/* WHY CHOOSE US */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              The MV Advantage
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Why Homeowners Choose MV Custom Builders
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We bridge the gap between a design plan and the real structural
              condition of an old house.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mvcb-orange/10">
                  <Icon
                    className="h-5 w-5 text-mvcb-orange-strong"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-mvcb-black">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-mvcb-black py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Start Your Restoration?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us about your home and what needs fixing. We&apos;ll walk
            the property and give you a straight answer on scope and cost.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-mvcb-orange px-8 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
