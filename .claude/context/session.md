# Session State — Live Scratchpad

> Update this file at the end of every task. This is the only context file loaded by default
> alongside the task-specific file. Keep it under 100 lines.

---

## Current Task
<!-- What are we building right now? -->
Full site built from the live Figma file (`GAj7JAlVa4YdztIM6IUSX7`, via the `figma-desktop`
MCP server). All 8 page frames under page `0:1` now have real routes: `/` (home, pre-existing),
`/about`, `/services`, `/portfolio`, `/contact`, `/testimonials`, `/certifications`, `/legal`.
The Figma file itself renders everything in a dark theme with an `Outfit` display font and
solid-orange CTA fills — none of that was used as-is; every page was reskinned to the locked
light/Geist/spotlight-orange system and reframed from generic "custom home builder" copy to
the site's restoration positioning. See the `[Figma reference]` entry in `.claude/learning.md`.
Nav (`site-header.tsx`/`site-footer.tsx`) now links to the real routes instead of homepage
anchors. **Git note**: every page was branched as `feature/<page-name>` per the naming
convention, but per standing instructions this session never runs `git commit` — all of the
above sits uncommitted in one working tree regardless of which branch is checked out. The user
needs to split/commit this themselves onto the intended branches (or squash it — their call).

## Locked Decisions
<!-- Things decided and not up for debate again -->
- Palette: `--mvcb-black` (#111111), `--mvcb-orange` (#f97316, spotlight only),
  `--mvcb-orange-strong` (#ea580c), `--mvcb-cream` (#faf7f2) + shadcn neutral scale for
  everything else.
- Framework: Next.js 16 (App Router), TypeScript, Tailwind v4 (CSS-first, no
  tailwind.config.js), shadcn/ui `radix-nova` style (see `components.json`).
- Font: Geist Sans only. No second typeface. Icons: `lucide-react` + `@remixicon/react`.
- Mobile-first: build at ~375px first, layer `sm:`/`md:`/`lg:` up.
- No animation library — CSS/`tw-animate-css` + `motion-safe:` + `data-reveal`/
  `ScrollRevealInit` for scroll reveals (see `.claude/learning.md`).
- Forms: `@emailjs/browser` — used on both the coming-soon signup and the new `/contact` form.
- New shadcn primitives added this session via CLI: `textarea.tsx`, `select.tsx`.

## In Progress
<!-- Decisions being worked through -->
_None_

## Open Questions
<!-- Things that need answers before proceeding -->
- Real project photography now exists (`public/images/portfolio/`, 25 real jobsite photos from
  the client's Drive folder) but only covers 3 identifiable projects (a commercial interior
  build-out with genuine before/after shots, an exterior siding/roof job, a patio/pool area).
  The home page's own portfolio teaser section still shows the old "Coming Soon" placeholder —
  not updated this session, out of scope (only `/portfolio` was requested). Consider swapping
  it in later.
- The before/after pair used on `/portfolio` (gutted commercial space → finished salon) was a
  best-effort visual guess, confirmed with the user, not verified against real project records.
- Verify the @MV_Custom_Builders Instagram handle is real before shipping the footer/social
  link to production.
- Team size, revenue model, primary lead source — still open, see `business.md`.
- `/legal` privacy policy is placeholder boilerplate (structure from Figma, rewritten plain) —
  needs real legal review before launch, not attorney-drafted.

## Pages Completed
<!-- Route + status -->
- `/` — home page, unchanged this session (`app/page.tsx` + `components/ui/home-page.tsx`).
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
- `components/ui/button.tsx`, `input.tsx`, `select.tsx`, `textarea.tsx` — shadcn primitives.

## Known Constraints
- Orange used as a spotlight only — never a large fill/background.
- Sans-serif only — Geist, no exceptions. Real photography only, no fabricated stock imagery.
- Every fabricated-sounding fact (ratings, review counts, emails, project durations) gets cut
  or replaced with something real/verifiable — see `.claude/learning.md` for the specific
  calls made this session.

## Last Updated
2026-08-16 — full site (7 new pages + nav update) built from the live Figma file, this entry.
