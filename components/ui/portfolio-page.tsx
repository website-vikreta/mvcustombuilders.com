import Image from "next/image";
import Link from "next/link";

import BeforeAfterSlider from "@/components/ui/before-after-slider";
import { Button } from "@/components/ui/button";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";

const PROJECTS = [
  {
    tag: "Commercial Renovation",
    title: "Commercial Interior Build-Out",
    description:
      "A gutted commercial space taken down to the studs and rebuilt into a finished salon: framing, electrical, lighting, and flooring in one pass.",
    image: "/images/portfolio/IMG_5682.PNG",
    alt: "Finished salon interior with styling mirrors, ambient lighting, and new flooring.",
  },
  {
    tag: "Exterior & Roofing",
    title: "Exterior Renovation & Roof Replacement",
    description:
      "Roof deck replacement and full re-siding on a two-story home, structural work first, finish work last.",
    image: "/images/portfolio/IMG_5669.PNG",
    alt: "Two-story house exterior with new siding, mid-renovation.",
  },
  {
    tag: "Outdoor Living",
    title: "Patio & Pool Surround Renovation",
    description:
      "Rebuilt outdoor living space with a new patio and pool surround, tied into the home's existing footprint.",
    image: "/images/portfolio/IMG_5665.PNG",
    alt: "Home exterior with a renovated patio and in-ground pool.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-mvcb-black">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-blueprint-grid-light opacity-10" />
          <div className="absolute inset-0 bg-mvcb-black/80" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:px-8 md:py-28">
          <span className="text-xs font-semibold tracking-wide text-mvcb-orange uppercase">
            Our Portfolio
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            See The Transformation
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Real renovation and restoration work across North &amp; Central
            Jersey. Drag the slider below to see the difference for
            yourself.
          </p>
        </div>
      </section>

      {/* FEATURED BEFORE/AFTER */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div data-reveal className="text-center">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              Featured Project
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Commercial Interior Build-Out
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From a gutted shell down to the studs, to a finished space
              ready for clients. Drag the divider to compare.
            </p>
          </div>

          <div data-reveal className="mt-10">
            <BeforeAfterSlider
              beforeSrc="/images/portfolio/IMG_5677.PNG"
              afterSrc="/images/portfolio/IMG_5682.PNG"
              beforeAlt="Gutted commercial interior with exposed steel roof trusses and bare concrete floor, before renovation."
              afterAlt="Finished salon interior with styling mirrors, ambient lighting, and new flooring, after renovation."
            />
          </div>

          <div
            data-reveal
            className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3"
          >
            <div>
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Project Type
              </span>
              <p className="mt-1 text-sm font-semibold text-mvcb-black">
                Commercial Interior Build-Out
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Location
              </span>
              <p className="mt-1 text-sm font-semibold text-mvcb-black">
                North Jersey
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Scope
              </span>
              <p className="mt-1 text-sm font-semibold text-mvcb-black">
                Framing, Electrical, Finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-mvcb-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
              More of Our Work
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-mvcb-black md:text-5xl">
              Recent Projects
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                data-reveal
                style={{ animationDelay: `${index * 80}ms` }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-mvcb-black">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-block text-sm font-semibold text-mvcb-black underline underline-offset-4 hover:text-mvcb-orange-strong"
                  >
                    Ask About This Project
                  </Link>
                </div>
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
            Ready to See Your Home Transformed?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us about your project and we&apos;ll walk you through
            scope, timeline, and pricing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-mvcb-orange px-8 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
            >
              <a href="tel:+19735550147">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
