import Link from "next/link";
import { Clock, GeoAlt, Instagram, TelephoneFill } from "react-bootstrap-icons";

import Marquee from "@/components/ui/marquee";
import { CONTAINER } from "@/components/ui/section";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/portfolio" },
  { label: "Client Testimonials", href: "/testimonials" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact Team", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto bg-mvcb-black pt-20 md:pt-32">
      <div className={CONTAINER}>
        {/* orange contact card, per the reference's footer block */}
        <div className="grid grid-cols-1 gap-10 bg-mvcb-orange p-8 md:grid-cols-3 md:p-12">
          <div>
            <h2 className="text-xs font-bold tracking-[0.1em] text-white/80 uppercase">
              Get in touch
            </h2>
            <a
              href="tel:+19735550147"
              className="mt-6 flex items-center gap-3 text-2xl font-extrabold tracking-[-0.02em] text-white underline-offset-4 hover:underline md:text-3xl"
            >
              <TelephoneFill className="h-5 w-5 shrink-0" aria-hidden="true" />
              (973) 555-0147
            </a>
            <p className="mt-6 flex items-start gap-3 text-sm text-white/85">
              <GeoAlt className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              31 Bridge St, Belleville, NJ 07109
            </p>
            <p className="mt-3 flex items-start gap-3 text-sm text-white/85">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Mon &ndash; Sat, 8:00 AM &ndash; 5:00 PM
            </p>
            <a
              href="https://www.instagram.com/mv_custom_builders"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] text-white uppercase underline-offset-4 hover:underline"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              @mv_custom_builders
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.1em] text-white/80 uppercase">
              Company
            </h2>
            <ul className="mt-6 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.1em] text-white/80 uppercase">
              Credentials
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              <li>NJ DCA License #13VH12948300</li>
              <li>SBE Certification #SBE202409</li>
              <li>OSHA Certified &amp; Fully Insured</li>
            </ul>
            <p className="mt-6 max-w-xs text-sm text-white/85">
              A licensed renovation and restoration contractor for old and
              historic homes across North and Central New Jersey.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 MV Custom Builders LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-white">
              Privacy Policy
            </Link>
            <p>
              Design &amp; Developed by{" "}
              <a
                href="https://www.websitevikreta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-mvcb-orange"
              >
                Website Vikreta
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <Marquee
        text="MV Custom Builders"
        className="text-ghost-dark text-[12vw] leading-[1.1] font-extrabold tracking-[-0.03em] uppercase"
      />
    </footer>
  );
}
