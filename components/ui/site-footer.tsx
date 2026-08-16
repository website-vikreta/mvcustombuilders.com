const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Projects", href: "#portfolio" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "Contact Team", href: "#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-mvcb-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              MV CUSTOM <span className="text-mvcb-orange">BUILDERS</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              A licensed renovation and restoration contractor serving old
              and historic homes across North and Central New Jersey.
              Licensed under the NJ Division of Consumer Affairs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>Office: 31 Bridge St, Belleville, NJ 07109</li>
              <li>
                Phone:{" "}
                <a href="tel:+19735550147" className="hover:text-white">
                  (973) 555-0147
                </a>
              </li>
              <li>Hours: Mon &ndash; Sat, 8:00 AM &ndash; 5:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Credentials
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li>NJ DCA License #13VH12948300</li>
              <li>SBE Certification #SBE202409</li>
              <li>OSHA Certified &amp; Fully Insured</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 MV Custom Builders LLC. All rights reserved.</p>
          <p>Built in NJ. Licensed &amp; Insured.</p>
        </div>
      </div>
    </footer>
  );
}
