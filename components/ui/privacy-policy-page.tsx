// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

const SECTIONS = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-it", title: "2. How We Use It" },
  { id: "third-party-services", title: "3. Third-Party Services" },
  { id: "cookies", title: "4. Cookies & Analytics" },
  { id: "no-selling-data", title: "5. We Don't Sell Your Data" },
  { id: "your-rights", title: "6. Your Rights" },
  { id: "contact", title: "7. Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-mvcb-line py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: September 18, 2026 &middot; MV Custom Builders LLC
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row">
          <nav aria-label="Policy sections" className="shrink-0 lg:w-56">
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
            <div id="information-we-collect">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                When you submit our contact form, we collect the information
                you provide: your name, email address, phone number, project
                type, and your message describing the project.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We also use Google Analytics (GA4) to collect standard usage
                data about visitors to this website, such as pages viewed,
                approximate location, device and browser type, and how you
                arrived at the site.
              </p>
            </div>

            <div id="how-we-use-it">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                2. How We Use It
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We use this information to:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground [&>li]:list-disc">
                <li>Respond to your inquiry and follow up on quote requests.</li>
                <li>
                  Understand how visitors use this website so we can improve
                  it.
                </li>
              </ul>
            </div>

            <div id="third-party-services">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                3. Third-Party Services
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We use EmailJS to process and deliver contact form submissions
                to our office. We use Google Analytics (GA4) to measure site
                traffic and usage. These providers process data on our behalf
                and are bound by their own privacy and data-handling terms.
              </p>
            </div>

            <div id="cookies">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                4. Cookies &amp; Analytics
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Google Analytics (GA4) sets cookies in your browser to
                distinguish visitors and measure site usage. You can disable
                cookies in your browser settings, though some site features
                may not work as intended without them.
              </p>
            </div>

            <div id="no-selling-data">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                5. We Don&apos;t Sell Your Data
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We don&apos;t sell or rent your personal information to
                marketing companies or any other third party.
              </p>
            </div>

            <div id="your-rights">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                6. Your Rights
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You can ask to review, update, or delete the information we
                have on file for you at any time. Contact us using the
                information in Section 7 below, and we&apos;ll process your
                request promptly.
              </p>
            </div>

            <div id="contact">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                7. Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For questions about this policy or to request your data be
                deleted, contact our Belleville office:
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
