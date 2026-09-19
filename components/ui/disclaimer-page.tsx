// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

const SECTIONS = [
  { id: "general-information", title: "1. General Information Only" },
  { id: "project-photos", title: "2. Project Photos" },
  { id: "no-guarantee", title: "3. No Guarantee of Pricing or Timelines" },
  { id: "agreement-required", title: "4. Agreement & Permits Required" },
  { id: "no-liability", title: "5. No Liability Without Consultation" },
  { id: "contact", title: "6. Contact" },
];

export default function DisclaimerPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-mvcb-line py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-4xl">
            Disclaimer
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: September 18, 2026 &middot; MV Custom Builders LLC
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row">
          <nav aria-label="Disclaimer sections" className="shrink-0 lg:w-56">
            <span className="text-xs font-semibold tracking-wide text-mvcb-black uppercase">
              Sections
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted-foreground hover:text-mvcb-orange"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 flex-col gap-10">
            <div id="general-information">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                1. General Information Only
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The content on this website is provided for general
                informational purposes only. It&apos;s not intended as
                professional, legal, or financial advice, and shouldn&apos;t
                be treated as a substitute for a direct consultation with our
                team about your specific project.
              </p>
            </div>

            <div id="project-photos">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                2. Project Photos
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Photos on this website represent past projects we&apos;ve
                completed. They&apos;re shown to illustrate the type and
                quality of our work, not to promise a specific outcome.
                Results vary by project, based on the home&apos;s existing
                condition, scope, budget, and other site-specific factors.
              </p>
            </div>

            <div id="no-guarantee">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                3. No Guarantee of Pricing or Timelines
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nothing on this website is a guarantee of pricing,
                availability, or project timelines. Actual costs and
                schedules depend on the specifics of your project and are
                only confirmed once we&apos;ve walked the property and
                provided a formal, written estimate.
              </p>
            </div>

            <div id="agreement-required">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                4. Agreement &amp; Permits Required
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All construction, renovation, and restoration work requires a
                separate, signed agreement between you and MV Custom
                Builders LLC, along with any permits required by the
                applicable municipality and the NJ Division of Consumer
                Affairs. Nothing on this website substitutes for that
                agreement or those permits.
              </p>
            </div>

            <div id="no-liability">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                5. No Liability Without Consultation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                MV Custom Builders LLC is not liable for decisions made
                solely on the basis of this website&apos;s content, without a
                direct consultation with our team. Always confirm project
                specifics, pricing, and scope with us directly before making
                decisions based on anything you&apos;ve read here.
              </p>
            </div>

            <div id="contact">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                6. Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For questions about this disclaimer, contact our Belleville
                office:
              </p>
              <div className="mt-4 border border-mvcb-line bg-background p-4 text-sm">
                <p className="font-semibold text-mvcb-black">
                  MV Custom Builders LLC
                </p>
                <p className="mt-1 text-muted-foreground">
                  31 Bridge St, Belleville, NJ 07109
                </p>
                <p className="mt-1 text-muted-foreground">
                  Phone: (973) 555-0147
                </p>
                <p className="mt-1 text-muted-foreground">
                  NJ DCA License #13VH12948300 &middot; SBE Certification
                  #SBE202409
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
