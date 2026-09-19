// PLACEHOLDER LEGAL CONTENT — must be reviewed and approved by a licensed
// attorney before this page goes live in production.

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "acceptable-use", title: "2. Acceptable Use" },
  { id: "intellectual-property", title: "3. Intellectual Property" },
  { id: "quotes-not-binding", title: "4. Quotes & Estimates" },
  { id: "separate-contract", title: "5. Construction Services" },
  { id: "liability", title: "6. Limitation of Liability" },
  { id: "governing-law", title: "7. Governing Law" },
  { id: "contact", title: "8. Contact" },
];

export default function TermsOfServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-mvcb-line py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16">
          <h1 className="text-3xl font-extrabold tracking-[-0.02em] uppercase text-mvcb-black md:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: September 18, 2026 &middot; MV Custom Builders LLC
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-10 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row">
          <nav aria-label="Terms sections" className="shrink-0 lg:w-56">
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
            <div id="acceptance">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                By using this website, you agree to these Terms of Service. If
                you don&apos;t agree with any part of these terms, please
                don&apos;t use this website.
              </p>
            </div>

            <div id="acceptable-use">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                2. Acceptable Use
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                You agree to use this website only for lawful purposes: to
                learn about our services and to submit genuine inquiries. You
                may not use this site to submit false information, attempt to
                disrupt or gain unauthorized access to it, or scrape or reuse
                its content for commercial purposes without our permission.
              </p>
            </div>

            <div id="intellectual-property">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                3. Intellectual Property
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                All content on this website, including project photos, project
                descriptions, text, and the MV Custom Builders name and logo,
                is the property of MV Custom Builders LLC unless otherwise
                noted. You may not reproduce, distribute, or use it
                commercially without our written permission.
              </p>
            </div>

            <div id="quotes-not-binding">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                4. Quotes &amp; Estimates
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Any quote, estimate, or pricing information given in response
                to a contact form submission is preliminary and non-binding.
                It&apos;s intended to give you a general sense of scope and
                cost and is not a firm offer until confirmed in a formal,
                written, signed agreement.
              </p>
            </div>

            <div id="separate-contract">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                5. Construction Services
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This website is for informational and marketing purposes
                only. Any actual construction, renovation, or restoration
                work is subject to a separate, signed contract between you
                and MV Custom Builders LLC, covering scope, pricing,
                schedule, permitting, and other project-specific terms.
                Nothing on this website constitutes that contract.
              </p>
            </div>

            <div id="liability">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                6. Limitation of Liability
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This website and its content are provided &quot;as is,&quot;
                without warranties of any kind. MV Custom Builders LLC is not
                liable for any damages arising from your use of, or inability
                to use, this website, or from reliance on its content, to the
                fullest extent permitted by law.
              </p>
            </div>

            <div id="governing-law">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                7. Governing Law
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                These terms are governed by the laws of the State of New
                Jersey, without regard to its conflict-of-law provisions.
              </p>
            </div>

            <div id="contact">
              <h2 className="text-xl font-extrabold tracking-[-0.02em] text-mvcb-black uppercase">
                8. Contact
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For questions about these terms, contact our Belleville
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
                  #SBE202409 &middot; OSHA Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
