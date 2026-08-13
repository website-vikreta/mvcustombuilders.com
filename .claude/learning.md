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
