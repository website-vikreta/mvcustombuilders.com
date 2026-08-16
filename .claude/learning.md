# Learning Log — Uniformity & Consistency

Persistent memory of design + code conventions for this site. Every reusable decision lands
here so the site stays uniform across pages and sessions.

## How To Use This File
- **Before building** any page/component: read this file. Reuse what exists. Do not reinvent.
- **After learning** anything reusable, or after making a mistake worth not repeating: log it
  here immediately, in the same session. One entry = one rule.
- **On conflict**: if new work contradicts a logged rule, stop. Either follow the rule or
  update the rule with reason. Never silently diverge.
- Keep entries short, specific, copy-pasteable. Prefer exact values (px, ms, hex/token names)
  over prose.

## Entry Format
```
### [Topic] — short title
- Rule: <the convention, exact values>
- Where: <files/components using it>
- Why: <reason, if not obvious>
- Date: YYYY-MM-DD
```

---

## Housekeeping
### [Cleanup] — reference-repo content purged
- What happened: this entire `.claude/` folder (agents, context, standards, and this file)
  was originally copied from a different project ("Website Vikreta," an unrelated AI
  marketing agency — Next.js 14, GSAP, Sanity CMS, blog/careers pages, a yellow/black
  Epilogue-only brand). None of it matched MV Custom Builders. All of it was rewritten
  against real sources: `docs/DESIGN_GUIDE.md`, `CLAUDE.md`, `package.json`, and the actual
  code (`app/`, `components/ui/`, `app/globals.css`). This log's prior ~500 lines of entries
  (blog cards, testimonial carousels, careers pages, case-study sections — none of which
  exist in this codebase) were deleted rather than kept, since they described components and
  pages that were never built here and would only mislead future sessions.
- Why it matters going forward: if a future session or reference material mentions Sanity,
  GSAP, blog posts, careers pages, Epilogue font, or a yellow (`#FFD600`) accent — that's
  leftover reference-repo framing, not this project. Check `docs/DESIGN_GUIDE.md` and
  `CLAUDE.md` before trusting it.
- Date: 2026-08-13

## Code Conventions
### [Naming] — lowercase kebab-case component files
- Rule: Component files are lowercase kebab-case (`under-construction.tsx`, not
  `UnderConstruction.tsx`), matching shadcn CLI output. Exported component names are still
  PascalCase (`export function Button`).
- Where: every file in `components/ui/`.
- Date: 2026-08-13

## Color & Accent
### [Accent] — orange is a spotlight, never a fill
- Rule: `--mvcb-orange` / `--mvcb-orange-strong` only appear as CTAs, links, small accent
  details, or text needing emphasis — never as a section/card background or large fill.
- Where: `under-construction.tsx` (submit button bg, field-error text color).
- Date: 2026-08-13

## Animation & Motion
### [Motion] — no JS animation library installed
- Rule: Don't add GSAP/Framer Motion/etc. speculatively. Use CSS transitions,
  `tw-animate-css` utilities, and `motion-safe:`-gated `@keyframes` first. See
  `.claude/standards/motion-system.md` for the full pattern, including the `fade-up-in`/
  `float-y` keyframe names `docs/DESIGN_GUIDE.md` expects (not yet defined anywhere in
  `app/globals.css` — define them there, under those exact names, the first time a page
  actually needs one).
- Date: 2026-08-13

## Navigation & Page Structure
### [Nav] — single-page anchor nav until real routes exist
- Rule: `components/ui/site-header.tsx` and `site-footer.tsx` link to homepage sections via
  hash anchors (`#home`, `#about`, `#services`, `#portfolio`, `#testimonials`, `#contact`),
  not real routes — because only `/` exists. When a section becomes its own route (e.g.
  `/about`), update the nav links to real paths at that point; don't pre-build routes.
- Where: `components/ui/site-header.tsx`, `components/ui/site-footer.tsx`.
- Date: 2026-08-14

### [Component split] — header/footer are shared, page sections are not
- Rule: `SiteHeader`/`SiteFooter` live as their own `components/ui/*.tsx` files because
  every future page will reuse them. Homepage-only sections (hero, services, portfolio,
  etc.) stay as local, unexported functions inside one `components/ui/home-page.tsx` file
  instead of one file per section — don't create `components/sections/` until a second page
  actually needs to reuse one of those sections.
- Where: `components/ui/site-header.tsx`, `components/ui/site-footer.tsx`,
  `components/ui/home-page.tsx`.
- Date: 2026-08-14

## Motion & Animation
### [Scroll reveal] — data-reveal + ScrollRevealInit, not a library
- Rule: To fade an element up as it scrolls into view, add `data-reveal` to it (optionally
  `style={{ animationDelay: "Nms" }}` on mapped list items for a subtle stagger — 60–80ms
  per index is the value used so far). One `<ScrollRevealInit />` (client component, no
  visual output) per page wires an `IntersectionObserver` over every `[data-reveal]`
  element and toggles `.is-visible` once. The CSS (in `app/globals.css`) only hides
  `[data-reveal]` content under `.js-reveal` on `<html>`, and `ScrollRevealInit` only adds
  that class when JS has run AND `prefers-reduced-motion` allows it — so content stays
  fully visible with no JS and with reduced motion, no `<noscript>` needed. Reuses the
  `fade-up-in` keyframe (now defined in `app/globals.css`, exact spec from
  `.claude/standards/motion-system.md`). Never wrap the hero/above-the-fold content in
  `data-reveal` — first paint must stay instant.
- Where: `components/ui/scroll-reveal-init.tsx`, `app/globals.css`,
  `components/ui/home-page.tsx` (every section below the hero).
- Date: 2026-08-14

### [Count-up numbers] — IntersectionObserver + requestAnimationFrame, no library
- Rule: For a stat that should animate from 0 to its real value once scrolled into view
  (e.g. "280+"), use a small dedicated client component with its own
  `IntersectionObserver` (fires once, threshold 0.4) gating a `requestAnimationFrame` count
  from 0 to the parsed target over ~1200ms with a cubic ease-out. Parse the numeric prefix
  and keep any suffix (`+`, `%`) static. Non-numeric stats (e.g. "NJ") render as-is, no
  counting. Reduced motion collapses the animation to duration 0 (same code path, first
  frame lands on the final value) rather than a separate synchronous branch — calling
  `setState` synchronously in an effect body (outside a callback) trips
  `react-hooks/set-state-in-effect` in this repo's eslint config.
- Where: `components/ui/stat-counters.tsx`.
- Date: 2026-08-14

## Content / Photography
### [Photography] — don't reuse one real photo with fabricated alt text
- Rule: When real project photography doesn't exist yet for a section (e.g. portfolio
  before/afters), don't repeat the one real photo in the repo with invented alt text
  describing a different (fake) scene — that's dishonest alt text. Instead use the existing
  `bg-blueprint-grid-light` texture (already an approved non-photo exception, from the
  coming-soon page) as a clearly-labeled placeholder ("Before / After Coming Soon") until
  real photos are supplied.
- Where: portfolio section, `components/ui/home-page.tsx`.
- Date: 2026-08-14
