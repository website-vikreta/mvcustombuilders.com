# MV Custom Builders — Project Guide

Marketing website for a construction company that specializes in **renovating
old homes and historic buildings**. Next.js 16 (App Router) + Tailwind v4 +
shadcn/ui (`radix-nova` style). Eight live routes: `/`, `/about`,
`/services`, `/portfolio`, `/testimonials`, `/certifications`, `/contact`,
`/legal`.
  
## Hard rules — never break these

1. **Never `git commit` or `git push`.** Leave the working tree as-is and let
   the user review and commit themselves — no exceptions, even if a task
   feels "done" or the user says "save that."
2. **Mobile-first.** Design and write CSS for the smallest viewport first,
   then layer on `sm:` / `md:` / `lg:` overrides. Never write desktop styles
   and patch mobile in after.
3. **One typeface — Plus Jakarta Sans.** Wired in `app/layout.tsx` via
   `next/font/google` as `--font-jakarta-sans`. No second family, no serif,
   no display face. Weight and size carry hierarchy, not a second font.
4. **Real photography for content.** Photos (real project shots preferred,
   stock as placeholder) carry every content-facing image slot — no
   illustrations or icon-collages standing in for a photo.
5. **The visual system follows the Avelon reference** (Behance project
   249647967, saved reading in `.claude/learning.md`). Its signatures, all
   deliberate and all approved by the client:
   - **Hard rectangles.** Nothing is rounded. `--radius` is `0rem`.
   - **Uppercase headings**, Plus Jakarta 800, `tracking-[-0.02em]`, tight
     leading. Body copy stays sentence case.
   - **Lowercase orange eyebrows** with a small mark above headings
     ("proof in every project") — the `Eyebrow` component. This reverses the
     earlier no-eyebrow rule; the lowercase-and-specific form is the point,
     never a shouty uppercase category label.
   - **Numbers**: `01`–`06` in orange on service rows and process steps.
   - **Solid colour blocks**: orange icon tiles, orange/navy/cream/black stat
     tiles, an orange final-CTA panel, an orange footer card. Orange as a
     large fill is now allowed in these specific places (it overrides the old
     "orange is a spotlight, never a fill" rule).
   - **Ghost type**: oversized outlined lettering as a section divider and a
     footer watermark (`GhostType`), always `aria-hidden`.
6. **No box shadows anywhere.** Depth comes from hairlines, tone steps, and
   spacing. `shadow-*` is banned outright, including on cards, popovers, and
   sticky bars.
7. **One clickable: `components/ui/action.tsx`.** `Action` renders a
   `next/link`, an `<a>`, or a `<button>` from its props and carries every
   variant (`primary`/`secondary`/`ghost`/`inline`), size, tone, loading,
   disabled, arrow, and icon-only case. There is no `Button` component any
   more — don't reintroduce one, and don't hand-roll a styled `<a>`.
8. **Spacing comes from `components/ui/section.tsx`.** `Section` +
   `SECTION_Y` / `CONTAINER` / `CONTENT_GAP` / `GRID_GAP` are the only
   vertical rhythm on the site. Never write a bespoke `py-*` on a section.
9. **Bootstrap Icons only.** `react-bootstrap-icons` is the single icon
   source. `lucide-react` and `@remixicon/react` are removed — do not
   reinstall them, and if the `shadcn` CLI generates a component importing
   lucide, swap the import before committing.
10. **Square corners, everywhere.** `--radius: 0rem`. No `rounded-*` classes on
   cards, photos, buttons, badges, or inputs. The only curves on the site are
   true circles, and there are none right now.
11. **No hover-dependent UI on mobile.** Tailwind v4's `hover:` variant is
   already gated behind `@media (hover: hover)`, so use it freely — but
   never put information or affordance behind hover alone; touch users must
   get the same content without it.
12. **No dead links.** Every `href` points at a route that exists or an
   on-page id that exists. Nothing links to `#` or a planned-but-unbuilt
   page; route to `/contact` instead.
13. **Headings are uppercase, with an eyebrow above them.** Use
   `SectionHeading` (`components/ui/section.tsx`): optional lowercase orange
   `eyebrow`, uppercase `title`, optional sentence-case `intro`. Keep the
   eyebrow specific and lowercase ("the same order, every job"), never a
   generic category label in caps ("OUR SERVICES") — that distinction is the
   whole rule.
14. Full visual language — colors, type scale, imagery direction, spacing,
   voice — lives in **`docs/DESIGN_GUIDE.md`**. Read it before styling
   anything customer-facing.

## Before Any Implementation — Run This Pipeline

```
1. STORYTELLER    → .claude/agents/storyteller.md
2. BUILDER        → .claude/agents/builder.md
3. CRITIC         → .claude/agents/critic.md
```
Never skip to code. Story → Experience → Motion → Architecture → Code.

## Always Load With Task
- `.claude/context/session.md` — current decisions, what's locked
- `.claude/context/brand.md` — palette, type, voice
- The ONE relevant standards file for the task

## Reference Index

| Need | File |
|------|------|
| Who we are | `.claude/context/business.md` |
| Who we serve | `.claude/context/target-users.md` |
| Brand rules | `.claude/context/brand.md` |
| Vision | `.claude/context/vision.md` |
| Current session | `.claude/context/session.md` |
| Concept + emotion | `.claude/agents/storyteller.md` |
| Build + perf | `.claude/agents/builder.md` |
| Score + critique | `.claude/agents/critic.md` |
| Visual design | `.claude/standards/design-system.md` |
| Animation | `.claude/standards/motion-system.md` |
| SEO/GEO | `.claude/standards/seo-geo.md` |
| Code rules | `.claude/standards/code-standards.md` |
| Design/code conventions log | `.claude/learning.md` |

## Architecture

- **Routes**: `app/` (App Router).
- **Components**: `components/ui/` — shadcn-generated primitives plus
  hand-built blocks (e.g. `under-construction.tsx`). Check here before writing a
  new primitive; add new shadcn primitives via the `shadcn` CLI
  (`components.json` is already configured: `radix-nova` style, neutral base,
  `@/*` aliases). The CLI still emits lucide imports — replace them with
  `react-bootstrap-icons` equivalents right after generating.
- **Motion**: GSAP + ScrollTrigger + ScrollToPlugin only (all free). No Lenis,
  no Framer Motion, no ScrollSmoother (Club plugin, not licensed here). Wired
  once per page by `components/ui/scroll-reveal-init.tsx` — mark elements and
  never write per-component GSAP:
  - `data-reveal` — fade + lift
  - `data-reveal="mask"` — clip-wipe up (cards, images, panels)
  - `data-reveal="text"` — taller wipe for headings
  - `data-reveal="children"` — stagger the element's direct children
  - `data-line` — a rule that draws itself left to right
  - `data-parallax` (+ optional `data-parallax-strength`, default 12)
  Every reveal is `once`: it plays one time and never re-hides on scroll-up.
  All of it sits inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`,
  so reduced-motion and no-JS users get static, fully visible content.
- **Native cursor and native scroll — no custom wrappers.** A trailing-dot
  custom cursor (`cursor-dot.tsx`) and an eased-scroll wrapper
  (`smooth-scroll.tsx`) were both tried and both removed (see
  `.claude/learning.md`). Don't reintroduce either without being asked. The
  base layer in `app/globals.css` instead puts `cursor: pointer` on every
  actionable element (`a[href]`, `button:not(:disabled)`, `[role="button"]`,
  `select`, `label[for]`, `summary`) and leaves everything else at the
  default cursor.
- **Layout kit** (use these, don't re-create them):
  - `components/ui/section.tsx` — `Section` (tone `light`/`dark`/`navy`/`orange`;
    `light` is transparent, the others render an inset solid panel),
    `SectionHeading`, `Eyebrow`, plus the `SECTION_Y` (`py-16 md:py-24`) /
    `CONTAINER` / `CONTENT_GAP` / `GRID_GAP` constants. Every page hardcodes
    these as literal classes rather than importing them (sections stay local,
    unexported JSX per page) — changing the scale means a find/replace across
    every `*-page.tsx`, not just an edit here.
  - `components/ui/action.tsx` — every button and link on the site.
  - `components/ui/project-carousel.tsx` and `testimonial-carousel.tsx` —
    scroll-snap sliders with orange square arrow buttons. No carousel library.
  - `components/ui/stat-counters.tsx` — the four solid stat tiles, count-up on
    scroll.
  - `components/ui/marquee.tsx` — seamless infinite marquee (renders the phrase
    twice, moves the track exactly -50%). Used for the footer wordmark.
- **Utilities**: `lib/utils.ts` (`cn` helper, etc.).
- **Styling**: Tailwind v4, CSS-first config in `app/globals.css` — there is
  no `tailwind.config.js`. Brand tokens (`--mvcb-black`, `--mvcb-orange`,
  `--mvcb-orange-strong`, `--mvcb-cream`, `--mvcb-sand`, `--mvcb-charcoal`,
  `--mvcb-line`, `--mvcb-navy`) sit on top of the shadcn neutral palette. Default
  Tailwind breakpoints (`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280).
- **Path alias**: `@/*` → project root.

## Working on this repo

This is a small marketing site, not a system that needs a multi-agent
pipeline — default to handling tasks directly rather than spinning up
subagents. Reach for the `Explore` agent only for genuinely open-ended,
multi-file searches. For any non-trivial UI change:

- Run the dev server (`npm run dev`) and check the page at a mobile viewport
  width first, then wider.
- Run `npm run lint` before calling a change done.
- Prefer extending an existing `components/ui/` block over adding a new
  dependency or a new abstraction for a one-off need.

## Learning Log — Consistency Memory
`.claude/learning.md` is the persistent record of every reusable design + code convention.
- **Read it** before building any page/component. Reuse what exists.
- **Update it** whenever a reusable decision is made (spacing, type scale, color use, component pattern, motion timing, naming, anti-pattern). One entry = one rule, exact values.
- **Honor it** — if new work conflicts with a logged rule, follow the rule or update it with reason. No silent divergence.

## Token Rule
Load `session.md` + one agent + one standard per task. Do not bulk-load everything.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
