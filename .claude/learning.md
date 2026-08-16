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
### [Figma reference] — reskin, don't copy the file's literal theme
- Rule: The `mvcustombuilders` Figma file (`GAj7JAlVa4YdztIM6IUSX7`) renders every page in a
  near-black theme with an `Outfit` display font and a solid-orange gradient CTA banner. None
  of that is usable as-is: it breaks the locked rules (Geist-only, orange as spotlight never a
  fill, mostly light/neutral sections). Pull structure, section order, and factual copy
  (stats, credentials, license numbers) from `get_design_context`, then rebuild the visual
  layer against `docs/DESIGN_GUIDE.md` and `.claude/context/brand.md` — light/cream sections
  with `mvcb-black` reserved for hero + final-CTA high-contrast moments, Geist only, lucide
  icons instead of the file's exported SVGs. Also reframe any "custom home builder" / new-build
  language in the source copy to the site's actual renovation/restoration positioning (see
  `.claude/context/business.md`) — the Figma file's product-level copy assumes a generalist
  new-build company, not a historic-restoration specialist.
- Where: `components/ui/about-page.tsx` (node `2:782`); apply the same conversion to the
  remaining Figma page frames — Services `2:941`, Portfolio `2:1110`, Contact `2:1347`,
  Testimonials `2:1512`, Certifications `2:1737`, Legal `2:1878` — all under page id `0:1`.
- Date: 2026-08-16

### [Page-specific component files] — one file per route, mirrors home-page.tsx
- Rule: Each real route (`/about`, `/services`, ...) gets its own
  `components/ui/{route}-page.tsx` holding that page's sections as local unexported
  functions/JSX (same pattern as `home-page.tsx`), wrapped by a thin `app/{route}/page.tsx`
  that only adds `SiteHeader`, `SiteFooter`, and route `metadata`. Don't put page content
  directly in `app/{route}/page.tsx`.
- Where: `components/ui/about-page.tsx` + `app/about/page.tsx`.
- Date: 2026-08-16

### [Real photo reuse] — the one real photo can be a decorative dark-overlay hero on other pages
- Rule: `public/images/under-construction-hero.webp` is the only real project photo in the
  repo. The home page already uses it as a contentful hero image with real alt text. Other
  pages may reuse the same file as a *decorative* dark-overlay hero background (`aria-hidden`,
  `alt=""`, `opacity-40` + a `mvcb-black/70` scrim, text overlaid on top) since the text
  carries the meaning there, not the image, so it's not fabricated alt text for a different
  scene. Don't give it a second real, descriptive alt text on a second page. For photo slots
  that need to be a real contentful image (e.g. a team photo, a specific job-site shot) and no
  real photo exists yet, use the `bg-blueprint-grid-light` placeholder card pattern instead
  (see the entry below) — don't stretch the one real photo to fill that role.
- Where: `components/ui/about-page.tsx` hero section.
- Date: 2026-08-16

### [Testimonials] — reuse given client quotes, but never fabricate a review platform stat
- Rule: The Figma testimonials page invents a specific, checkable statistic ("4.9 out of 5,
  50+ Google Verified Reviews") and tags every card "GOOGLE REVIEW" with a 5-star row. There is
  no real data behind that number, and presenting it as fact is a false, checkable claim (unlike
  a placeholder texture, which reads as obviously unfinished). Drop the fabricated rating/count
  and the per-card "GOOGLE REVIEW" badge/stars entirely; keep only the given quote, name,
  location, and a real link out to Google search/reviews for anyone who wants to check for
  themselves — same pattern the home page already used. The client-supplied testimonial
  quotes/names themselves (Robert & Maria S., Jason K., Daniel L., plus Elena G., Thomas D.,
  Marcus & Jane V. added on the testimonials page) are still used as given per
  `.claude/context/business.md`, only re-tagged from "Custom Home Building"/"New Construction
  Framing" service categories to the site's real renovation service names.
- Where: `components/ui/testimonials-page.tsx`; `components/ui/home-page.tsx` testimonials
  section already followed the no-fabricated-stat half of this rule.
- Date: 2026-08-16

### [Photography] — don't reuse one real photo with fabricated alt text
- Rule: When real project photography doesn't exist yet for a section (e.g. portfolio
  before/afters), don't repeat the one real photo in the repo with invented alt text
  describing a different (fake) scene — that's dishonest alt text. Instead use the existing
  `bg-blueprint-grid-light` texture (already an approved non-photo exception, from the
  coming-soon page) as a clearly-labeled placeholder ("Before / After Coming Soon") until
  real photos are supplied.
- Where: portfolio section, `components/ui/home-page.tsx`.
- Date: 2026-08-14
