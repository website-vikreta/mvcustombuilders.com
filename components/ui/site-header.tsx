"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  EnvelopeFill,
  GeoAlt,
  Instagram,
  List,
  TelephoneFill,
  X,
} from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";

import Action from "@/components/ui/action";
import { CONTAINER } from "@/components/ui/section";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

/** All six point at /services — per-service routes don't exist yet. */
const SERVICES = [
  "Whole-Home Renovation",
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Basement Finishing",
  "Room Additions",
  "Exterior & Historic Restoration",
].map((label) => ({ label, href: "/services" }));

const PHONE_DISPLAY = "(973) 555-0147";
const PHONE_HREF = "tel:+19735550147";
const EMAIL = "info@mvcustombuilders.com";
const LOCATION = "Belleville, NJ";
const INSTAGRAM_HANDLE = "@mv_custom_builders";
const INSTAGRAM_HREF = "https://www.instagram.com/mv_custom_builders";

const BAR_LINK =
  "flex h-11 items-center gap-2 text-white/70 transition-colors hover:text-white";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const trigger = useRef<HTMLAnchorElement>(null);
  const panel = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!services) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setServices(false);
      trigger.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [services]);

  // Dropdown reveal: eased open/close instead of an abrupt mount/unmount.
  // Runs on every state change, including the very first mount (closed).
  useEffect(() => {
    if (!panel.current) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.to(panel.current, {
      autoAlpha: services ? 1 : 0,
      y: services ? 0 : -10,
      duration: reduced ? 0 : 0.25,
      ease: services ? "power2.out" : "power2.in",
      overwrite: true,
    });
  }, [services]);

  // Contact bar folds away on scroll down, returns on scroll up — the sticky
  // nav row underneath is never touched, so it stays visible at all times.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const barHeight = bar.offsetHeight;
    let hidden = false;
    let anchor = 0;

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate: (self) => {
        const scroll = self.scroll();
        const delta = scroll - anchor;
        // Ignore sub-5px net movement from the last decision point: trackpad
        // and smooth-scroll frames arrive as many tiny per-tick deltas, and
        // toggling (or re-anchoring) on each one is what reads as a shake.
        // Only move the anchor once movement actually clears the dead zone,
        // so small same-direction frames keep accumulating toward it instead
        // of resetting every tick.
        if (Math.abs(delta) < 5) return;
        anchor = scroll;
        const hide = delta > 0 && scroll > barHeight;
        if (hide === hidden) return;
        hidden = hide;
        gsap.to(bar, {
          height: hide ? 0 : barHeight,
          duration: reduced ? 0 : 0.3,
          ease: "power2.inOut",
          overwrite: true,
        });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-md">
      <div ref={barRef} className="overflow-hidden bg-mvcb-black">
        <div
          className={cn(
            CONTAINER,
            "flex items-center justify-between gap-6 text-xs font-bold tracking-[0.1em] uppercase",
          )}
        >
          <div className="flex items-center gap-6">
            <span className={cn(BAR_LINK, "hidden sm:flex")}>
              <GeoAlt className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {LOCATION}
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className={cn(BAR_LINK, "hidden normal-case sm:flex")}
            >
              <EnvelopeFill
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(BAR_LINK, "normal-case")}
            >
              <Instagram className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {INSTAGRAM_HANDLE}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={PHONE_HREF} className={BAR_LINK}>
              <TelephoneFill
                className="h-3.5 w-3.5 shrink-0"
                aria-hidden="true"
              />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          CONTAINER,
          "flex h-16 items-center justify-between md:h-20",
        )}
      >
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-base font-extrabold tracking-[-0.02em] text-mvcb-black uppercase md:text-lg">
            MV Custom
          </span>
          <span className="text-[0.65rem] font-bold tracking-[0.3em] text-mvcb-orange uppercase">
            Builders
          </span>
        </Link>

        {/* items-start, not items-center: the Services wrapper is taller than
            its siblings (its pb-2 covers the dropdown's hover gap — see the
            comment on that div), and centering a taller box pushes its
            top-anchored content up relative to the shorter siblings. */}
        <nav className="hidden items-start gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                // pb-2 (not a margin on the panel below) so the ~0.5rem visual
                // gap before the dropdown is still part of this div's own
                // hoverable box — a margin-created gap has nothing painted in
                // it, so the pointer briefly isn't over any element while
                // crossing it and the menu closes before it's reached.
                className="relative pb-2"
                onMouseEnter={() => setServices(true)}
                onMouseLeave={() => setServices(false)}
                onFocus={() => setServices(true)}
              >
                <Link
                  ref={trigger}
                  href={link.href}
                  aria-expanded={services}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-mvcb-black"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </Link>

                {/* always mounted so GSAP can ease it in and out, not just pop.
                    grid-of-cells layout + an orange CTA strip — matches the
                    solid-block accents used the rest of the site. min-h-24 on
                    every cell keeps the grid uniform whether a label wraps to
                    one line or two. */}
                <ul
                  ref={panel}
                  aria-hidden={!services}
                  className="invisible absolute top-full left-0 grid w-[34rem] grid-cols-2 border-t border-l border-mvcb-line bg-white opacity-0"
                >
                  {SERVICES.map((service) => (
                    <li
                      key={service.label}
                      className="border-r border-b border-mvcb-line"
                    >
                      <Link
                        href={service.href}
                        tabIndex={services ? 0 : -1}
                        onClick={() => setServices(false)}
                        className="group/item flex min-h-24 items-center gap-4 px-5 py-4 transition-colors hover:bg-mvcb-black focus-visible:bg-mvcb-black"
                      >
                        <span className="flex-1 text-sm font-bold tracking-[0.06em] text-mvcb-black uppercase transition-colors group-hover/item:text-white group-focus-visible/item:text-white">
                          {service.label}
                        </span>
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 -translate-x-1 text-mvcb-black opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:text-mvcb-orange group-hover/item:opacity-100 group-focus-visible/item:translate-x-0 group-focus-visible/item:text-mvcb-orange group-focus-visible/item:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                  <li className="col-span-2 border-b border-mvcb-line">
                    <Link
                      href="/services"
                      tabIndex={services ? 0 : -1}
                      onClick={() => setServices(false)}
                      className="flex items-center justify-between gap-3 bg-mvcb-orange px-5 py-4 text-xs font-bold tracking-[0.1em] text-white uppercase transition-colors hover:bg-mvcb-black"
                    >
                      View all services
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:text-mvcb-black"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <Action href="/contact" size="sm" withArrow>
            Get a quote
          </Action>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-mvcb-black/20 text-mvcb-black md:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <List className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="bg-background px-8 py-6 sm:px-12 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div key={link.href}>
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-11 flex-1 items-center py-3 text-sm font-bold tracking-[0.1em] text-mvcb-black uppercase"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services"
                      aria-expanded={mobileServices}
                      onClick={() => setMobileServices((value) => !value)}
                      className="flex h-11 w-11 items-center justify-center border border-mvcb-black/20 text-mvcb-black"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileServices && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  {mobileServices && (
                    <ul className="mb-2 border-l border-mvcb-line pl-4">
                      {SERVICES.map((service) => (
                        <li key={service.label}>
                          <Link
                            href={service.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-11 items-center py-3 text-sm font-bold tracking-[0.1em] text-muted-foreground uppercase"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center py-3 text-sm font-bold tracking-[0.1em] text-mvcb-black uppercase"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href={PHONE_HREF}
              className="flex min-h-11 items-center gap-2 text-base font-extrabold text-mvcb-black"
            >
              <TelephoneFill className="h-4 w-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Action
              href="/contact"
              fullWidth
              withArrow
              onClick={() => setOpen(false)}
            >
              Get a free quote
            </Action>
          </div>
        </div>
      )}
    </header>
  );
}
