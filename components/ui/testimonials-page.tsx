import { Google, Instagram } from "react-bootstrap-icons";

import Action from "@/components/ui/action";
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
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-[-0.02em] uppercase text-white sm:text-5xl md:text-6xl">
            Client Testimonials
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
            See what our clients say about working with MV Custom Builders on
            renovation and restoration projects across New Jersey.
          </p>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                data-reveal
                className="flex h-full flex-col  border border-mvcb-line bg-background p-6"
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
                  <span className="mt-1 block text-xs font-bold tracking-[0.1em] text-mvcb-orange uppercase">
                    {testimonial.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-10 md:py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col gap-6 bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-3xl">
            Had a Great Experience?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-neutral-400">
            Share your feedback on Google or follow our latest projects on
            Instagram.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Action href="https://www.google.com/search?q=MV+Custom+Builders+Belleville+NJ+reviews">
              <Google className="h-4 w-4" aria-hidden="true" />
              Leave a Google review
            </Action>
            <Action
              href="https://www.instagram.com/mv_custom_builders"
              variant="secondary"
              tone="dark"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Follow on Instagram
            </Action>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 md:py-16">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col bg-mvcb-black px-8 py-12 sm:px-12 md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-white md:text-5xl">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
            Tell us about your project and we&apos;ll walk you through scope and
            pricing.
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
