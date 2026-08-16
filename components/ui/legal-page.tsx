const SECTIONS = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-it", title: "2. How We Use It" },
  { id: "third-party-sharing", title: "3. Third-Party Sharing" },
  { id: "your-privacy-rights", title: "4. Your Privacy Rights" },
  { id: "security", title: "5. Security" },
  { id: "contact", title: "6. Contact" },
];

export default function LegalPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-mvcb-line py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: August 16, 2026 &middot; MV Custom Builders LLC
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 md:py-24">
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
                We collect the information needed to plan projects and respond
                to inquiries: your name, email, phone number, project site
                address, and details relevant to permitting with the NJ Division
                of Consumer Affairs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We also use cookies and basic site analytics to see how visitors
                use the site and to manage incoming quote requests.
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
                <li>Estimate project scope and pricing.</li>
                <li>
                  Prepare permit and licensing paperwork with local
                  municipalities.
                </li>
                <li>
                  Communicate with you about scheduling and project updates.
                </li>
              </ul>
            </div>

            <div id="third-party-sharing">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                3. Third-Party Sharing
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We don&apos;t sell or rent your information to marketing
                companies. We share it only with subcontractors (electricians,
                HVAC technicians, surveyors) when it&apos;s necessary to
                complete a project, and only the details they need to do their
                part of the work.
              </p>
            </div>

            <div id="your-privacy-rights">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                4. Your Privacy Rights
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You can ask to review, update, or delete the information we have
                on file for you at any time. Contact us using the information in
                Section 6 below.
              </p>
            </div>

            <div id="security">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                5. Security
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We store client information behind standard access controls and
                limit who on our team can view it. Only office staff and the
                project lead working on your job have access to your details.
              </p>
            </div>

            <div id="contact">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                6. Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For questions about this policy, contact our Belleville office:
              </p>
              <div className="mt-4  border border-mvcb-line bg-background p-4 text-sm">
                <p className="font-semibold text-mvcb-black">
                  MV Custom Builders LLC
                </p>
                <p className="mt-1 text-muted-foreground">
                  31 Bridge St, Belleville, NJ 07109
                </p>
                <p className="mt-1 text-muted-foreground">
                  Phone: (973) 555-0147
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
