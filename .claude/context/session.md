# Session State — Live Scratchpad

> Update this file at the end of every task. This is the only context file loaded by default
> alongside the task-specific file. Keep it under 100 lines.

---

## Current Task
<!-- What are we building right now? -->
Built the home page (`app/page.tsx`) on branch `feature/home-page`, from a client-supplied
Figma reference (pasted as text, not a live Figma file). The reference read as a generic
"new home builder" template — reframed headline/service copy to match our locked
restoration/renovation positioning (see `.claude/context/business.md`) while keeping the
reference's section structure, stats, credentials, and testimonials intact.

## Locked Decisions
<!-- Things decided and not up for debate again -->
- Palette: `--mvcb-black` (#111111), `--mvcb-orange` (#f97316, spotlight only),
  `--mvcb-orange-strong` (#ea580c), `--mvcb-cream` (#faf7f2) + shadcn neutral scale for
  everything else.
- Framework: Next.js 16 (App Router), TypeScript, Tailwind v4 (CSS-first, no
  tailwind.config.js), shadcn/ui `radix-nova` style (see `components.json`).
- Font: Geist Sans only, via `next/font/google` (`--font-geist-sans`). No second typeface.
- Icons: `lucide-react` (shadcn default) + `@remixicon/react`, small/functional only.
- Photography: real photos only, no illustration/graphic hero art.
- Mobile-first: build at ~375px first, layer `sm:`/`md:`/`lg:` up.
- No animation library installed — CSS/`tw-animate-css` + `motion-safe:` only, add
  GSAP/Framer Motion only if a real need can't be done in CSS.
- Forms: `@emailjs/browser` (already used by the coming-soon signup form).

## In Progress
<!-- Decisions being worked through -->
_None_

## Open Questions
<!-- Things that need answers before proceeding -->
- Real project photography — the home page portfolio section currently shows a textured
  "Before / After Coming Soon" placeholder instead of images (see Known Constraints below).
  Swap in real before/after shots as soon as the client provides them.
- Verify the @MV_Custom_Builders Instagram handle is real before shipping the footer/social
  link to production — see `.claude/context/business.md`.
- Team size, revenue model, primary lead source — still open, see `business.md`.
- Full-site route map (About / Services / Projects / Contact as real routes, not just
  homepage anchors) — not yet scoped, don't build ahead of real content.

## Pages Completed
<!-- Route + status -->
- `/` — full home page (`app/page.tsx`), replacing the coming-soon page. Composed of
  `SiteHeader` + `HomePage` + `SiteFooter`. Sections (all anchor-linked from nav, single
  page — no sub-routes yet): hero, stats/about snapshot, services (6), portfolio (3, no
  real photos yet), build process (4 steps), testimonials (3), credentials strip (4),
  Instagram strip, coverage areas, dark CTA banner, footer. Includes page metadata +
  `GeneralContractor` JSON-LD schema. `components/ui/under-construction.tsx` is no longer
  wired into any route but left in place (not deleted) in case the coming-soon page is
  needed again before the full site ships.

## Components Locked
<!-- Reusable components finalized and not to be changed -->
- `components/ui/button.tsx` — shadcn Button (radix-nova), variants
  default/outline/secondary/ghost/destructive/link, sizes xs/sm/default/lg/icon(+variants).
- `components/ui/input.tsx` — shadcn Input.
- `components/ui/under-construction.tsx` — coming-soon page block (hero image + email
  signup). Currently unused by any route.
- `components/ui/site-header.tsx` — sticky nav, "use client" (mobile hamburger menu state).
  Anchor links to homepage sections (`#home`, `#about`, `#services`, `#portfolio`,
  `#testimonials`, `#contact`) — update to real routes once those pages exist.
- `components/ui/site-footer.tsx` — footer with quick links, contact info, credentials.
- `components/ui/home-page.tsx` — all home-page-specific sections in one file (server
  component). Don't split into `components/sections/` unless a second page reuses pieces
  of it.

## Known Constraints
- Orange used as a spotlight only — never a large fill/background.
- Sans-serif only — Geist, no exceptions.
- Every content image needs real, specific alt text.
- `next/image` for every image, no exceptions.
- Respect `prefers-reduced-motion` on any entrance animation.
- Only one real project photo exists in the repo (`public/images/under-construction-hero.webp`,
  reused for the home-page hero). Rather than fabricate stock photo URLs or reuse that one
  photo dishonestly across the portfolio section, the portfolio cards use the existing
  `bg-blueprint-grid-light` texture (already an approved non-photo exception) with a
  "Before / After Coming Soon" label instead. Replace with real photos before launch — don't
  leave the placeholder in for the live site.

## Last Updated
2026-08-14 — home page built on `feature/home-page` from a client Figma reference (this
entry).
