import { RiInstagramLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import ScrollRevealInit from "@/components/ui/scroll-reveal-init";

const TESTIMONIALS = [
  {
    quote:
      "MV Custom Builders restored our historic home in Belleville without losing what made it special. Their attention to structural integrity and finish work is unmatched.",
    name: "Robert & Maria S.",
    location: "Belleville, NJ",
    tag: "Whole-Home Renovation",
  },
  {
    quote:
      "Our master bedroom addition and kitchen remodel finished right on budget. Communication through the whole design phase was flawless.",
    name: "Jason K.",
    location: "Montclair, NJ",
    tag: "Kitchen Remodeling & Addition",
  },
  {
    quote:
      "Very professional crew. They handled framing and insulation to a genuinely high standard, true craftsmen who take pride in the work.",
    name: "Daniel L.",
    location: "Clifton, NJ",
    tag: "Framing & Structural Work",
  },
  {
    quote:
      "Our master bathroom was transformed into a real spa. Heated tile floors, a precision glass enclosure, all handled without a hitch.",
    name: "Elena G.",
    location: "Wayne, NJ",
    tag: "Bathroom Renovation",
  },
  {
    quote:
      "They finished our basement with proper damp-proofing and a layout that actually works. It's become the best room in the house.",
    name: "Thomas D.",
    location: "Paramus, NJ",
    tag: "Basement Finishing",
  },
  {
    quote:
      "High-quality renovation work takes real trust. MV Builders delivered thorough, code-compliant craftsmanship with prompt updates the whole way through.",
    name: "Marcus & Jane V.",
    location: "Bloomfield, NJ",
    tag: "Whole-Home Renovation",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <ScrollRevealInit />

      {/* HERO */}
      <section className="bg-mvcb-black py-16 md:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8">
          <span className="text-xs font-semibold tracking-wide text-mvcb-orange uppercase">
            Real Client Stories
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Client Testimonials
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            See what our clients say about working with MV Custom Builders on
            renovation and restoration projects across New Jersey.
          </p>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
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
                  <span className="mt-1 block text-xs font-semibold tracking-wide text-mvcb-orange-strong uppercase">
                    {testimonial.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW */}
      <section className="border-y border-border bg-mvcb-cream py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center sm:px-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-mvcb-black md:text-3xl">
            Had a Great Experience?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Share your feedback on Google and help other New Jersey
            homeowners find us.
          </p>
          <Button
            asChild
            className="rounded-full bg-mvcb-orange px-6 font-bold text-mvcb-black hover:bg-mvcb-orange-strong"
          >
            <a
              href="https://www.google.com/search?q=MV+Custom+Builders+Belleville+NJ+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          </Button>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-background py-12">
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

      {/* FINAL CTA */}
      <section className="bg-mvcb-black py-16 md:py-24">
        <div
          data-reveal
          className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us about your project and we&apos;ll walk you through scope
            and pricing.
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
