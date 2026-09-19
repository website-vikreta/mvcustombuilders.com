// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

const SECTIONS = [
  { id: "website-disclaimer", title: "1. Website Disclaimer" },
  { id: "project-photos-and-estimates", title: "2. Project Photos and Estimates" },
  { id: "external-links", title: "3. External Links" },
  { id: "testimonials", title: "4. Testimonials" },
  { id: "errors-and-omissions", title: "5. Errors and Omissions" },
  { id: "logos-and-trademarks", title: "6. Logos and Trademarks" },
  { id: "contact", title: "7. Contact Us" },
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
      {number}. {title}
    </h2>
  );
}

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
            Last updated: September 19, 2026 &middot; MV Custom Builders LLC
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
            <div id="website-disclaimer">
              <SectionHeading number="1" title="Website Disclaimer" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The information provided by MV Custom Builders
                (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;,
                &quot;us&quot;) on mvcustombuilders.com (the &quot;Site&quot;)
                is for general informational purposes only. All information
                on the Site is provided in good faith; however, we make no
                representation or warranty of any kind, express or implied,
                regarding the accuracy, adequacy, validity, reliability,
                availability, or completeness of any information on the
                Site.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                Under no circumstance shall we have any liability to you for
                any loss or damage of any kind incurred as a result of the
                use of the Site or reliance on any information provided on
                the Site. Your use of the Site and your reliance on any
                information on the Site is solely at your own risk.
              </p>
            </div>

            <div id="project-photos-and-estimates">
              <SectionHeading number="2" title="Project Photos and Estimates" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Project photos, before/after images, and case studies shown
                on this Site represent the outcome of specific past projects
                for specific clients under specific conditions. They are
                shown for illustrative purposes only and do not guarantee
                similar results, pricing, materials, or timelines for any
                other project.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Any pricing information, quote, or estimate provided through
                this Site or its contact form is preliminary and
                non-binding. Final pricing, scope, and timeline are
                determined only through direct consultation and are governed
                exclusively by a separately signed written agreement between
                MV Custom Builders and the client, subject to applicable
                permits and inspections. Nothing on this Site should be
                relied upon as a guarantee of cost, availability, or project
                duration.
              </p>
            </div>

            <div id="external-links">
              <SectionHeading number="3" title="External Links" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Site may contain links to other websites or content
                belonging to or originating from third parties. Such
                external links are not investigated, monitored, or checked
                for accuracy, adequacy, validity, reliability, availability,
                or completeness by us.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                We do not warrant, endorse, guarantee, or assume
                responsibility for the accuracy or reliability of any
                information offered by third-party websites linked through
                the Site. We will not be a party to or in any way
                responsible for monitoring any transaction between you and
                third-party providers of products or services.
              </p>
            </div>

            <div id="testimonials">
              <SectionHeading number="4" title="Testimonials" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The Site may display testimonials and reviews sourced from
                our public Google Business Profile. These reflect the
                real-life experiences and opinions of the individual
                reviewers, are not edited or reviewed by us before
                publication on Google, and are displayed on this Site as
                posted publicly. These experiences are personal to those
                particular reviewers and may not necessarily be
                representative of all clients&apos; experiences.
              </p>
              <p className="mt-3 text-sm leading-relaxed font-semibold text-mvcb-black uppercase">
                Your individual results may vary.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The views and opinions contained in these reviews belong
                solely to the individual reviewer and do not necessarily
                reflect our views or guarantee similar outcomes for future
                projects.
              </p>
            </div>

            <div id="errors-and-omissions">
              <SectionHeading number="5" title="Errors and Omissions" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                While we have made every effort to ensure the information on
                this Site is accurate, MV Custom Builders is not responsible
                for any errors, omissions, or for results obtained from the
                use of this information. All information on this Site is
                provided &quot;as is,&quot; with no guarantee of
                completeness, accuracy, or timeliness, and without warranty
                of any kind, express or implied.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                In no event will MV Custom Builders, its partners, agents,
                or employees be liable to you or anyone else for any
                decision made or action taken in reliance on the information
                on this Site, or for any consequential, special, or similar
                damages, even if advised of the possibility of such damages.
              </p>
            </div>

            <div id="logos-and-trademarks">
              <SectionHeading number="6" title="Logos and Trademarks" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All logos and trademarks of third parties referenced on
                mvcustombuilders.com, including certification and licensing
                marks, are the property of their respective owners. Display
                of such logos indicates that MV Custom Builders holds the
                referenced license, certification, or membership as of the
                date noted, and does not imply additional endorsement,
                sponsorship, or affiliation beyond that credential.
              </p>
            </div>

            <div id="contact">
              <SectionHeading number="7" title="Contact Us" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Should you have any feedback, comments, or questions about
                this Disclaimer, please contact us by email:{" "}
                <a
                  href="mailto:mvcustombuilder@gmail.com"
                  className="text-mvcb-black underline hover:text-mvcb-orange"
                >
                  mvcustombuilder@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
