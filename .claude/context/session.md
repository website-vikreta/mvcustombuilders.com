# Session State — Live Scratchpad

> Update this file at the end of every task. This is the only context file loaded by default
> alongside the task-specific file. Keep it under 100 lines.

---

## Current Task
<!-- What are we building right now? -->
**2026-08-16, branch `feature/home-redesign`** — home page rebuilt to a modern, premium
look (reference point: onthespothome.com, borrowed for feel only, nothing copied). Global
changes that hit every page: Plus Jakarta Sans replaces Geist, `react-bootstrap-icons`
replaces lucide + remixicon, `--radius` 1rem (heavy rounding), three new warm tokens
(`sand`/`charcoal`/`line`), GSAP + ScrollTrigger replaces the IntersectionObserver reveal,
and every eyebrow label above a heading was stripped site-wide. Home-only: full-bleed
parallax hero, real portfolio photos, rewritten copy, no dead links.

**Second pass**: box shadows removed site-wide; `Button` deleted in favour of one `Action`
component; one spacing scale in `components/ui/section.tsx`.

**Third pass — the Avelon reference** (Behance 249647967, client-supplied and approved for
direct copying, see the `[Avelon]` entry in `.claude/learning.md`): square corners
everywhere (`--radius: 0rem`), uppercase headings with lowercase orange eyebrows, `01`–`06`
numerals back on service rows and process steps, solid orange/navy/cream/black stat tiles,
orange icon tiles, an orange final-CTA panel and footer card, outlined ghost display type as
a divider and footer watermark, split label+arrow buttons, scroll-snap project and
testimonial carousels, and a service list that inverts on hover. The five-line vertical grid
overlay built earlier in the session was removed on request.

### Previous session
Full site built from the live Figma file (`GAj7JAlVa4YdztIM6IUSX7`, via the `figma-desktop`
MCP server). All 8 page frames under page `0:1` now have real routes: `/` (home, pre-existing),
`/about`, `/services`, `/portfolio`, `/contact`, `/testimonials`, `/certifications`, `/legal`.
The Figma file itself renders everything in a dark theme with an `Outfit` display font and
solid-orange CTA fills — none of that was used as-is; every page was reskinned to the locked
light/Jakarta/spotlight-orange system and reframed from generic "custom home builder" copy to
the site's restoration positioning. See the `[Figma reference]` entry in `.claude/learning.md`.
Nav (`site-header.tsx`/`site-footer.tsx`) now links to the real routes instead of homepage
anchors. **Git note**: every page was branched as `feature/<page-name>` per the naming
convention, but per standing instructions this session never runs `git commit` — all of the
above sits uncommitted in one working tree regardless of which branch is checked out. The user
needs to split/commit this themselves onto the intended branches (or squash it — their call).

## Locked Decisions
<!-- Things decided and not up for debate again -->
- Palette: `--mvcb-black` (#111111), `--mvcb-orange` (#f97316, spotlight only),
  `--mvcb-orange-strong` (#ea580c), `--mvcb-cream` (#faf7f2), `--mvcb-sand` (#f0eae0),
  `--mvcb-charcoal` (#1f1d1a), `--mvcb-line` (#dfd8cc) + shadcn neutral scale for
  everything else.
- Framework: Next.js 16 (App Router), TypeScript, Tailwind v4 (CSS-first, no
  tailwind.config.js), shadcn/ui `radix-nova` style (see `components.json`).
- Font: Plus Jakarta Sans only (`--font-jakarta-sans`). No second typeface. Icons:
  `react-bootstrap-icons` only — lucide/remixicon uninstalled.
- Mobile-first: build at ~375px first, layer `sm:`/`md:`/`lg:` up. Hover is a desktop-only
  enhancement; never hide content or affordance behind it.
- Motion: `gsap` + `ScrollTrigger` via `ScrollRevealInit` (`data-reveal`, `data-parallax`),
  all inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`.
- Square corners everywhere; `--radius: 0rem`. Zero box shadows site-wide.
- Headings uppercase `tracking-[-0.02em]`, with a lowercase orange eyebrow above them.
- One clickable: `components/ui/action.tsx` (`Button` deleted). One spacing scale:
  `components/ui/section.tsx`. No grid-line overlay — it was built and removed.
- Grids are 1, 2, or 4 columns; never 3.
- Forms: `@emailjs/browser` — used on both the coming-soon signup and the new `/contact` form.
- New shadcn primitives added this session via CLI: `textarea.tsx`, `select.tsx`.

## In Progress
<!-- Decisions being worked through -->
_None_

## Open Questions
- `info@mvcustombuilders.com` in the header contact bar is a **placeholder** — the domain is
  right but the mailbox was never confirmed. Same standing issue as the `(973) 555-0147`
  phone number. Both need real values before launch.
<!-- Things that need answers before proceeding -->
- Real project photography now exists (`public/images/portfolio/`, 25 real jobsite photos from
  the client's Drive folder) but only covers 3 identifiable projects (a commercial interior
  build-out with genuine before/after shots, an exterior siding/roof job, a patio/pool area).
  The home page's portfolio teaser now uses those same three real projects (resolved
  2026-08-16); its three invented project titles were dropped since no photos backed them.
- The before/after pair used on `/portfolio` (gutted commercial space → finished salon) was a
  best-effort visual guess, confirmed with the user, not verified against real project records.
- Verify the @MV_Custom_Builders Instagram handle is real before shipping the footer/social
  link to production.
- Team size, revenue model, primary lead source — still open, see `business.md`.
- `/legal` privacy policy is placeholder boilerplate (structure from Figma, rewritten plain) —
  needs real legal review before launch, not attorney-drafted.

## Pages Completed
<!-- Route + status -->
- `/` — home page, fully redesigned 2026-08-16 (`app/page.tsx` +
  `components/ui/home-page.tsx`). Sections, in order: parallax hero, stats band, services,
  portfolio, process, testimonials, credentials, Instagram band, coverage, final CTA. Same
  ten sections as before the redesign — nothing was dropped.
- `/about` — `app/about/page.tsx` + `components/ui/about-page.tsx`. Dark hero, company story,
  `StatCounters`, credentials, "why choose us", dark CTA.
- `/services` — `services-page.tsx`. 6-service bento list (reused home page's exact service
  copy), placeholder photo slots, dark CTA.
- `/portfolio` — `portfolio-page.tsx`. Featured `BeforeAfterSlider` (real photos, draggable),
  3-project gallery grid (real photos), dark CTA.
- `/contact` — `contact-page.tsx`. Full EmailJS-wired form (name/email/phone/project
  type/message), info cards, live Google Maps embed (real Belleville address), dark CTA.
- `/testimonials` — `testimonials-page.tsx`. 6 client quotes (3 reused from home page, 3 new
  from the Figma reference, re-tagged to real service names), real Google-review link, no
  fabricated rating/review-count stat (see `.claude/learning.md`).
- `/certifications` — `certifications-page.tsx`. 4 real credential cards (real license/cert
  numbers), trust statement, dark CTA.
- `/legal` — `legal-page.tsx`. Privacy policy with sidebar TOC, plain-language sections, real
  contact block (no fabricated email address).

## Components Locked
<!-- Reusable components finalized and not to be changed -->
- `components/ui/before-after-slider.tsx` — new. Draggable before/after image compare (native
  `<input type="range">` under a clip-path overlay, keyboard + touch accessible for free).
- `components/ui/site-header.tsx` / `site-footer.tsx` — nav now uses `next/link` + real routes
  (`/`, `/about`, `/services`, `/portfolio`, `/testimonials`, `/certifications`, `/contact`),
  not anchors. Footer bottom bar adds a `/legal` Privacy Policy link.
- One `components/ui/<route>-page.tsx` per route (mirrors `home-page.tsx`), wrapped by a thin
  `app/<route>/page.tsx` with only `SiteHeader` + `SiteFooter` + `metadata`.
- `components/ui/action.tsx` — the site's only button/link. `components/ui/section.tsx` —
  `Section`/`SectionHeading`/`Eyebrow` + the spacing constants (`SECTION_Y`
  is now `py-16 md:py-24`, reduced 2026-08-17).
  `components/ui/project-carousel.tsx` + `testimonial-carousel.tsx` — scroll-snap sliders.
- `components/ui/input.tsx`, `select.tsx`, `textarea.tsx` — shadcn primitives (`button.tsx`
  was deleted).

## Known Constraints
- Orange used as a spotlight only — never a large fill/background.
- Sans-serif only — Plus Jakarta Sans, no exceptions. Real photography for content; the
  four-column hairline overlay is the only non-photo visual layer. No fabricated stock imagery.
- Every fabricated-sounding fact (ratings, review counts, emails, project durations) gets cut
  or replaced with something real/verifiable — see `.claude/learning.md` for the specific
  calls made this session.

## Last Updated
2026-08-16 — two passes on branch `feature/home-redesign`. (1) Home redesign + global
font/icon/radius/motion changes. (2) Minimal pass, applied to all 8 pages: box shadows
purged, `Action` replaces `Button`, `Section` spacing scale, four-column hairline overlay
with content aligned to it, section index numbers and all solid geometric blocks removed,
every 3-column grid converted to 2. Open item for the user: `(973) 555-0147` is a reserved
placeholder number, still wired into the header, footer, CTAs, and the `GeneralContractor`
schema in `app/page.tsx`.
