import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check2 } from "react-bootstrap-icons";

import Action from "@/components/ui/action";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";
import type { Service } from "@/lib/services";

export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-mvcb-black">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-mvcb-black/70" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col px-8 py-20 sm:px-12 lg:px-16 md:py-28">
          <Link
            href="/services"
            className="mb-6 flex w-fit items-center gap-2 text-xs font-bold tracking-[0.1em] text-neutral-300 uppercase transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All services
          </Link>
          <p className="flex items-center gap-2 text-sm font-semibold text-mvcb-orange">
            {service.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-[-0.02em] text-white uppercase sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            {service.intro}
          </p>
        </div>
      </section>

      {/* PHOTO */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
          <div
            data-reveal="mask"
            className="relative aspect-[16/9] w-full overflow-hidden"
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
          <div className="max-w-2xl" data-reveal>
            <h2 className="text-3xl leading-[1.05] font-extrabold tracking-[-0.02em] text-mvcb-black uppercase md:text-5xl">
              What&apos;s Included
            </h2>
          </div>
          <div
            data-reveal="children"
            className="mt-10 grid grid-cols-1 gap-px border border-mvcb-line bg-mvcb-line sm:grid-cols-2"
          >
            {service.included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-background p-5"
              >
                <Check2
                  className="mt-0.5 h-4 w-4 shrink-0 text-mvcb-orange"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-mvcb-black">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white uppercase md:text-5xl">
            Ready to Start Your {service.title} Project?
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
