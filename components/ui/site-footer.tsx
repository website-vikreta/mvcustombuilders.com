import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  GeoAlt,
  Instagram,
  ShieldFillCheck,
  TelephoneFill,
} from "react-bootstrap-icons";

import Marquee from "@/components/ui/marquee";
import { CONTAINER } from "@/components/ui/section";
import { CREDENTIAL_LOGOS } from "@/lib/credential-logos";

const TRUST_LOGO_FILTER_DEFAULT = "grayscale brightness-0 invert opacity-80";
// SBE's badge has fine white text on navy inside a starburst — brightness-0 + invert
// flattens all of that to one solid shape, so it gets a gentler grayscale/levels
// treatment instead that keeps the text and outline readable.
const TRUST_LOGO_FILTER_SBE = "grayscale brightness-[1.8] contrast-[1.2] opacity-90";

// Fixed so every logo occupies the same footprint regardless of its native aspect
// ratio (OSHA's wordmark is ~2.6:1) — that's what keeps the labels aligned.
const TRUST_LOGO_SLOT_CLASS =
  "flex h-8 w-24 shrink-0 items-center justify-center sm:h-9";
// DCA and SBE read small next to OSHA's wide wordmark, so their slot runs a
// touch taller — width stays w-24 so the labels still line up.
const TRUST_LOGO_SLOT_CLASS_LG =
  "flex h-9 w-24 shrink-0 items-center justify-center sm:h-10";

const TRUST_LOGOS = [
  {
    src: CREDENTIAL_LOGOS.dca,
    alt: "NJ DCA Licensed New Home Builder",
    label: "DCA Licensed",
    width: 1570,
    height: 1002,
    filterClass: TRUST_LOGO_FILTER_DEFAULT,
    slotClass: TRUST_LOGO_SLOT_CLASS_LG,
  },
  {
    src: CREDENTIAL_LOGOS.sbe,
    alt: "SBE Certified",
    label: "SBE Approved",
    width: 1298,
    height: 1212,
    filterClass: TRUST_LOGO_FILTER_SBE,
    slotClass: TRUST_LOGO_SLOT_CLASS_LG,
  },
  {
    src: CREDENTIAL_LOGOS.osha,
    alt: "OSHA Certified",
    label: "OSHA Certified",
    width: 2030,
    height: 775,
    filterClass: TRUST_LOGO_FILTER_DEFAULT,
    slotClass: TRUST_LOGO_SLOT_CLASS,
  },
];

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
      {/* mx-auto max-w-6xl only (no horizontal padding) so the orange card's
          own edges land flush with the black CTA panels on every other
          page — those panels carry their own px-* as internal padding
          rather than sitting inset inside a padded container. */}
      <div className="mx-auto max-w-6xl">
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
            <ul className="mt-6 space-y-3">
              {TRUST_LOGOS.map(({ src, alt, label, width, height, filterClass, slotClass }) => (
                <li key={alt} className="flex items-center gap-3">
                  <span className={slotClass}>
                    <Image
                      src={src}
                      alt={alt}
                      width={width}
                      height={height}
                      className={`h-full w-full object-contain ${filterClass}`}
                    />
                  </span>
                  <span className="text-sm text-white/85">{label}</span>
                </li>
              ))}
              {/* Licensed & Insured has no badge file yet — shield icon stands in until a real insurance/bonding badge is available */}
              <li className="flex items-center gap-3">
                <span className={TRUST_LOGO_SLOT_CLASS}>
                  <ShieldFillCheck
                    className="h-8 w-8 text-white/80 sm:h-9 sm:w-9"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-sm text-white/85">Licensed &amp; Insured</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-8 py-8 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
          <p>&copy; 2026 MV Custom Builders LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
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
