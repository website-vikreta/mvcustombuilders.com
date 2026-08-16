import Image from "next/image";
import Link from "next/link";

import BeforeAfterSlider from "@/components/ui/before-after-slider";
import Action from "@/components/ui/action";
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
          <div className="absolute inset-0 bg-mvcb-black/80" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col px-8 py-20 sm:px-12 lg:px-16 md:py-28">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
            See The Transformation
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            Real renovation and restoration work across North &amp; Central
            Jersey. Drag the slider below to see the difference for yourself.
          </p>
        </div>
      </section>

      {/* FEATURED BEFORE/AFTER */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <div data-reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-5xl">
              Commercial Interior Build-Out
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From a gutted shell down to the studs, to a finished space ready
              for clients. Drag the divider to compare.
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
            className="mt-8 grid grid-cols-2 gap-6 border-t border-mvcb-line pt-8 sm:grid-cols-2"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                Project Type
              </span>
              <p className="mt-1 text-sm font-semibold text-mvcb-black">
                Commercial Interior Build-Out
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
                Location
              </span>
              <p className="mt-1 text-sm font-semibold text-mvcb-black">
                North Jersey
              </p>
            </div>
            <div>
              <span className="text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <div data-reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-5xl">
              Recent Projects
            </h2>
          </div>

          <div className="mt-12 grid md:mt-16 gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                data-reveal
                className="overflow-hidden  border border-mvcb-line bg-background"
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
                  <span className="inline-block  bg-mvcb-sand px-3 py-1 text-xs font-semibold text-mvcb-black">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 text-base font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-3 inline-block text-sm font-semibold text-mvcb-black underline underline-offset-4 hover:text-mvcb-orange"
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
