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
### [Motion] — GSAP + ScrollTrigger is the animation system (supersedes the CSS-only rule)
- Rule: `gsap` is installed and is the only animation library. All scroll motion goes through
  `components/ui/scroll-reveal-init.tsx` declaratively (`data-reveal`, `data-parallax`,
  `data-parallax-strength`) — no per-component GSAP code, no refs, no second library, no
  hand-rolled IntersectionObserver. The old `fade-up-in`/`float-y` keyframes and the
  `.js-reveal` CSS were deleted from `app/globals.css` when this landed.
- Why the change: the 2026-08-13 entry said "don't add GSAP speculatively." It stopped being
  speculative — the home redesign needed scrubbed parallax, which CSS can't do without
  `animation-timeline` (not safe to rely on yet).
- Where: `.claude/standards/motion-system.md` (full spec), `components/ui/scroll-reveal-init.tsx`.
- Date: 2026-08-16

## Navigation & Page Structure
### [Nav] — real routes, no dead links
- Rule: All eight routes exist (`/`, `/about`, `/services`, `/portfolio`, `/testimonials`,
  `/certifications`, `/contact`, `/legal`), and header, footer, and home CTAs all link to
  real paths — not hash anchors. The home page keeps its section ids (`#home`, `#about`,
  `#services`, `#portfolio`, `#testimonials`, `#contact`) so existing `/#contact`-style links
  from other pages still resolve. Never ship an `href="#"` or a link to an unbuilt page;
  route to `/contact` instead.
- Where: `components/ui/site-header.tsx`, `site-footer.tsx`, `home-page.tsx`.
- Date: 2026-08-16 (supersedes the 2026-08-14 anchor-nav rule)

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
### [Scroll reveal] — data-reveal + ScrollRevealInit, now GSAP-backed
- Rule: To fade an element up as it scrolls into view, add `data-reveal`. Do **not** add a
  per-item `style={{ animationDelay }}` — `ScrollTrigger.batch` staggers siblings 0.08s
  automatically, and the old delay props were removed everywhere when GSAP landed. One
  `<ScrollRevealInit />` per page. Never wrap hero/above-the-fold content in `data-reveal`
  — first paint must stay instant.
- Order matters inside the effect: `gsap.set([data-reveal], {opacity: 0})` must run
  **before** `ScrollTrigger.batch(...)`, otherwise the batch's `onEnter` fires for
  already-in-view elements first and the `set` then hides them permanently.
- Where: `components/ui/scroll-reveal-init.tsx`, every `components/ui/*-page.tsx`.
- Date: 2026-08-16 (supersedes the 2026-08-14 IntersectionObserver version)

### [Parallax] — data-parallax needs oversized slack on the moving wrapper
- Rule: `data-parallax` travels ±strength% of the element's own height (default 12). The
  moving wrapper must be inset *further* than the travel or the drift exposes an edge:
  `-inset-y-[14%]` for `data-parallax-strength="10"`, with `overflow-hidden` on the parent.
  Trigger is the element's parent, `scrub: true`.
- Where: `components/ui/home-page.tsx` hero.
- Date: 2026-08-16

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
  of that is usable as-is: it breaks the locked rules (Plus Jakarta Sans only, orange as
  spotlight never a fill, mostly light/neutral sections). Pull structure, section order, and factual copy
  (stats, credentials, license numbers) from `get_design_context`, then rebuild the visual
  layer against `docs/DESIGN_GUIDE.md` and `.claude/context/brand.md` — light/cream sections
  with `mvcb-black` reserved for hero + final-CTA high-contrast moments, Jakarta only, Bootstrap
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

## Visual Language (2026-08 home redesign)
### [Type] — Plus Jakarta Sans, one family (supersedes Geist)
- Rule: `Plus_Jakarta_Sans` via `next/font/google` in `app/layout.tsx`, exposed as
  `--font-jakarta-sans` and mapped to `--font-sans` in the `@theme inline` block. Geist is
  gone. One family only; hierarchy is weight (400 body / 700 subhead / 800 headline) plus
  size. Numbers always `tabular-nums`. Headlines `tracking-tight`, h1 `leading-[1.05]`.
- Date: 2026-08-16

### [Icons] — react-bootstrap-icons only (supersedes lucide + remixicon)
- Rule: `react-bootstrap-icons` is the single icon source; `lucide-react` and
  `@remixicon/react` were uninstalled. Size with Tailwind (`h-4 w-4`), not the `size` prop.
  The shadcn CLI still emits lucide imports — swap them immediately after generating a
  component (`select.tsx` was converted this way: `ChevronDownIcon`→`ChevronDown`,
  `CheckIcon`→`Check`).
- Substitutions used: `BadgeCheck`→`PatchCheckFill`, `FileCheck2`→`FileEarmarkCheck`,
  `HardHat`→`ConeStriped`, `MapPin`→`GeoAlt`, `Phone`→`TelephoneFill`,
  `CheckCircle2`→`CheckCircleFill`, `Loader2`→`ArrowRepeat`, `Menu`→`List`,
  `MessageSquare`→`ChatSquareText`, `RiInstagramLine`→`Instagram`.
- Date: 2026-08-16

### [Geometry] — superseded twice on 2026-08-16; see [Avelon] below for what shipped
- Rule: The only structural graphic on the site is the **column rules**: five hairlines
  splitting `CONTAINER` into four equal columns, rendered once by
  `components/ui/column-rules.tsx` in `app/layout.tsx`. A fixed, `pointer-events-none`
  overlay at `z-30` (above section backgrounds, below the `z-50` sticky header) with two
  blend layers — `mix-blend-multiply` at `black/[0.07]` darkens light surfaces and vanishes
  on black, `mix-blend-screen` at `white/[0.09]` lightens dark surfaces and vanishes on
  white — so one overlay reads correctly on every section without per-section copies.
- Deleted and banned: blueprint grids, ruler ticks, corner brackets, solid/outlined
  decorative blocks and arcs, filled icon tiles, and section index numbers. The 2026-08-16
  "drawing-set + two bold moments" pass built all of that; it read busy and templated, and
  the user cut it the same day. Short `h-px w-10 bg-mvcb-orange` accent rules under a card
  title survive — they're type-level punctuation, not a graphic.
- Alignment: `column-rules.tsx` and `CONTAINER` must keep identical `max-w-6xl px-6 sm:px-8`.
- Where: `components/ui/column-rules.tsx`, `app/layout.tsx`, `app/globals.css`.
- Date: 2026-08-16 (second pass)

### [Headings] — superseded on 2026-08-16; eyebrows and numbers are back, see [Avelon]
- Rule: A section is a headline, an optional one-line intro, then content. No uppercase
  eyebrow ("OUR SERVICES") **and no index number or rule** ("01 ——") — the numbered version
  is the same template tell in different clothes. `SectionHeading` lives in
  `components/ui/section.tsx` and takes only `title`, `intro`, `tone`; it has no label or
  index prop, so the pattern can't creep back. Headings are sentence case and read like
  sentences ("How a job runs", not "Our Build Process"). Uppercase micro-labels are still
  fine as *data* labels (footer column headings, a project's category on a card).
- History: eyebrow spans were stripped site-wide in the first 2026-08-16 pass and replaced
  with `01` + hairline + ticks; the numbers were cut in the second pass the same day.
- Date: 2026-08-16 (second pass)

### [Radius] — square corners, nothing rounded (supersedes heavy rounding)
- Rule: `--radius: 0rem`. No `rounded-*` class anywhere: cards, photos, buttons, badges,
  icon tiles, and inputs are all hard rectangles. The heavy-rounding rule held for about an
  hour on 2026-08-16 and was reversed when the Avelon reference landed — square corners are
  what make the site read as industrial rather than as a SaaS landing page.
- Date: 2026-08-16 (third pass)

### [Section rhythm] — background → sand → background → sand
- Rule: Alternate light sections between `bg-background` and `bg-mvcb-sand`; `bg-mvcb-cream`
  is for cards and inset panels sitting on white, not for full sections. Dark panels are
  inset rounded blocks (`bg-mvcb-black` CTA, `bg-mvcb-charcoal` Instagram band) rather than
  full-bleed dark sections — the hero is the only edge-to-edge dark area.
- Where: `components/ui/home-page.tsx`.
- Date: 2026-08-16

### [Hero] — full-bleed parallax photo, nothing on top of it
- Rule: Home hero is `min-h-[86svh] md:min-h-[92svh]`, edge-to-edge photo in a
  `data-parallax` wrapper under a `bg-gradient-to-t from-mvcb-black` scrim, content
  bottom-aligned (`justify-end`), `rounded-b-[2rem] md:rounded-b-[3rem]`. No grid overlay,
  no orange blocks — those were cut. Trust badges sit *below* the CTAs as hairline pills,
  never above the h1. The stats band that follows is a plain 4-column grid in the container
  (one stat per column rule, `border-t` on each cell) — no card, no overlap, no shadow.
- Date: 2026-08-16 (second pass)

### [Hover] — desktop-only by construction
- Rule: Tailwind v4's `hover:` variant already compiles to `@media (hover: hover)`, so hover
  styles never fire on touch — use them freely for polish (border colour, `group-hover`
  image `scale-105`, number tint) but never put content, controls, or meaning behind hover.
  No mobile-specific hover overrides are needed or wanted.
- Date: 2026-08-16

### [Links] — no dead hrefs
- Rule: Every link targets a real route or a real on-page id. Home CTAs point at `/contact`
  and `/portfolio` (they used to point at `#contact`/`#portfolio` anchors). The home page
  still carries `id="contact"`, `id="portfolio"`, etc. so other pages' `/#contact` links
  keep resolving. Nothing links to `#` or an unbuilt page.
- Date: 2026-08-16

### [Home portfolio] — real photos replaced the "coming soon" placeholders
- Rule: The home portfolio cards now use the same three real projects as
  `components/ui/portfolio-page.tsx` (`IMG_5682` salon interior, `IMG_5669` exterior/roof,
  `IMG_5665` patio/pool) with the same honest alt text. The three invented project titles
  ("The Belleville Landmark Restoration", "Clifton Transitional Kitchen", "Montclair Master
  Bath") were dropped — they had no photography behind them, and pairing them with unrelated
  real photos would have been dishonest. Keep home and `/portfolio` in sync when new photos
  land.
- Date: 2026-08-16

### [Action] — one component for every button and link
- Rule: `components/ui/action.tsx` is the only clickable on the site; `components/ui/button.tsx`
  was deleted. It picks its element from props: `next/link` for an internal path, `<a
  target="_blank" rel="noopener noreferrer">` + an `sr-only` "(opens in a new tab)" for an
  external URL, a plain `<a>` for `tel:`/`mailto:`/`sms:`, and `<button>` when there's no
  `href` — or when `disabled`/`loading` is set, so a dead control is never keyboard-navigable
  even if an `href` was passed.
- Props: `variant` primary/secondary/ghost/inline, `size` sm(40px)/md(48px)/lg(56px),
  `tone` light/dark, `withArrow`, `loading` + `loadingLabel` (spinner + `aria-busy`),
  `disabled`, `fullWidth`, `iconOnly` (needs `aria-label`), `type` for submits.
- Focus ring is an `outline`, not a Tailwind `ring` — rings compile to box-shadow and this
  site ships zero shadows.
- Never override its colours inline; layout-only classes (`w-fit`, `shrink-0`, `mt-*`) are fine.
- Where: every page component, `site-header.tsx`, `contact-page.tsx`, `under-construction.tsx`.
- Date: 2026-08-16

### [Spacing] — one scale, from section.tsx
- Rule: `components/ui/section.tsx` exports `Section` (tone light/sand/dark) plus the
  constants `SECTION_Y` (`py-20 md:py-32`), `CONTAINER` (`mx-auto max-w-6xl px-6 sm:px-8`),
  `CONTENT_GAP` (`mt-12 md:mt-16`, heading block → content) and `GRID_GAP` (`gap-6`). Every
  section on every page uses these — a bespoke `py-*` on a section is a bug. Inside a card,
  related items step `mt-3` → `mt-5` → `mt-7`.
- Grids are 1, 2, or 4 columns of the container so card edges land on the column rules:
  `md:grid-cols-2`, `md:grid-cols-4`, or `md:grid-cols-4` + `md:col-span-2`. Never
  `grid-cols-3` — every 3-column grid on the site was converted to 2.
- Date: 2026-08-16

### [Shadows] — zero, site-wide
- Rule: No `shadow-*` anywhere: not on cards, not on the sticky header, not on the select
  popover, not on the before/after drag handle. Depth is hairlines (`border-mvcb-line`),
  tone steps (`background` ↔ `sand`), and space. When the shadcn CLI emits a shadow (it does
  on `select.tsx`), replace it with a border in the same commit.
- Date: 2026-08-16

## The Avelon Reference (2026-08-16)
### [Avelon] — the visual system the site is built against
- Source: Behance project 249647967, "Avelon — Construction & Building WordPress Theme" by
  WebGeniusLab. The client supplied it late in the session and approved copying its geometry
  outright. Full-page mockup was read directly (downloaded, sliced, viewed) rather than from
  the page copy, which says nothing useful.
- What the reference does, and what we took:
  - **Hard rectangles, zero radius.** Cards, photos, buttons, badges, icon tiles.
  - **Uppercase headings**, very tight tracking, tight leading; sentence-case body in a
    lighter weight. We use Plus Jakarta 800 uppercase `tracking-[-0.02em]` (the reference
    uses a condensed face; the client chose to keep one typeface instead).
  - **Lowercase orange eyebrow with a small mark** above each heading ("reliable.
    experienced. proven."). Ours: the `Eyebrow` component with a `Bricks` icon.
  - **Numerals** `01`–`06` in orange on list rows and process steps.
  - **Split buttons**: label cell + divider + square arrow cell. `Action`'s `withArrow`.
  - **Solid colour tiles**: orange / navy / light / black stat blocks with oversized
    numerals; orange square icon tiles; an orange CTA band; an orange footer card.
  - **Ghost display type**: oversized outlined lettering as a divider and a footer
    watermark. Ours: `GhostType` + `.text-ghost` / `.text-ghost-dark` in `app/globals.css`.
  - **Peeking carousels** for projects and testimonials with square orange arrow buttons.
  - **Service rows** that invert to a dark background on hover, with a square arrow cell.
- What we did **not** take: its condensed display face (one-typeface rule held), its stock
  line-art illustrations (real photography rule held), and its box shadows (zero-shadow rule
  held).
- Date: 2026-08-16

### [Column rules] — built, then removed the same day
- What happened: a fixed overlay drawing five vertical hairlines (four equal columns of the
  container) was added in `app/layout.tsx`, with sections made transparent so it showed
  through, then deleted on request an hour later. `components/ui/column-rules.tsx` no longer
  exists.
- What survives from it: sections are still transparent and tone lives on the panels and
  cards inside them (`Section` `tone="dark"|"navy"|"orange"` renders an inset solid panel,
  not a full-bleed band), and `CONTAINER` keeps the wider `px-8 sm:px-12 lg:px-16` padding
  that was introduced to keep content off the lines.
- Don't reintroduce a grid-line overlay without being asked for it by name.
- Date: 2026-08-16

### [Carousels] — scroll-snap, no library
- Rule: `components/ui/project-carousel.tsx` and `components/ui/testimonial-carousel.tsx`
  are the two sliders. Both are a `flex` track with `snap-x snap-mandatory overflow-x-auto`
  and `.scrollbar-none`, slides sized to peek (`w-[86%] sm:w-[70%] lg:w-[calc(50%-0.75rem)]`),
  and two square orange arrow buttons calling `scrollBy`. Swipe, trackpad, and keyboard all
  work for free; there is no carousel state to keep in sync and no dependency. Don't install
  Embla/Swiper/Keen for a third one — copy the pattern.
- Date: 2026-08-16

### [Reveal] — once, and smoother
- Rule: `ScrollTrigger.batch` runs with `once: true`, so a revealed element never animates
  or hides again on scroll-up. Values: from `opacity 0, y 18`, to `duration 1.1,
  ease "expo.out", stagger 0.09`, trigger `start: "top 92%"`, `willChange` set during and
  cleared after. The earlier `0.7s power2.out` version re-fired on scroll-back and read
  cheap.
- Date: 2026-08-16

### [Motion] — the reveal vocabulary
- Rule: `components/ui/scroll-reveal-init.tsx` owns every scroll effect. Attributes:
  `data-reveal` (fade + 24px lift), `data-reveal="mask"` (clip-wipe `inset(100% 0 0 0)` →
  `inset(0)` + 40px lift — the overflow-hidden reveal, for cards/images/panels),
  `data-reveal="text"` (same wipe, 60px, no fade — headings rise out of their line),
  `data-reveal="children"` (staggers direct children, so a grid or list animates without
  tagging every cell), `data-draw` (SVG `<text>` outline that draws itself via
  `stroke-dashoffset`), `data-parallax`. All are `once: true`, `expo.out`, ~1.1s, 0.08
  stagger. SplitText is a Club plugin and is not available here — clip wipes and the SVG
  draw are the substitutes for per-line text reveals.
- **Removed: eased/smooth scroll.** `components/ui/smooth-scroll.tsx` tweened the real
  `window` scroll with ScrollToPlugin on wheel input — tried, then explicitly removed by the
  user. Native browser scrolling is the rule now; do not reintroduce a smooth-scroll wrapper
  or library without being asked.
- Cursor (`cursor-dot.tsx`): `gsap.quickTo` dot (0.15s) + lagging ring (0.5s); the ring scales
  to 2.4 and turns orange over `a, button, [role=button], input, select, textarea`. The native
  cursor stays visible on purpose — hiding it costs more than the effect is worth.
- Marquee (`marquee.tsx`): the phrase is rendered twice and the track animates to
  `xPercent: -50`, so the loop point lands on an identical frame — no gap, no whitespace.
  Default duration 60s, deliberately slow; 18s read as frantic.
- Date: 2026-08-16

### [Header] — contact bar + services dropdown
- Rule: `site-header.tsx` has two rows: a slim `bg-mvcb-black` contact bar (location, email,
  Instagram handle, phone — location and email `hidden sm:flex`) above the sticky nav row.
  The Services nav item is both a link to `/services` and a dropdown trigger: opens on hover
  and focus-within, closes on mouse leave, on Escape (focus returns to the trigger), or on
  navigation. Mobile shows the same six items inline behind an `aria-expanded` toggle. All
  six service links point at `/services` — per-service routes don't exist and the
  no-dead-links rule stands.
- The nav row itself carries no phone number — it lived in the contact bar above (always
  visible) and in the mobile menu already, so repeating it next to "Get a quote" on desktop
  was redundant. Removed 2026-08-17.
- The contact bar folds away (GSAP `height` tween, `power2.inOut`, ~0.3s) on scroll down, past
  its own height, and returns on any scroll up — a `ScrollTrigger.create({ start: 0, onUpdate
  })` reading `self.direction`. The nav row underneath is never touched, so it's always
  visible; when the bar collapses, the nav row simply moves up into its place since it's
  normal document flow inside the `sticky` header, not a separate fixed layer.
- Services panel: a grid-of-cells layout (`border-t border-l` on the `<ul>`, `border-r
  border-b` on every `<li>`) with an orange `col-span-2` "View all services" CTA row at the
  bottom — reuses the site's solid-block accent language instead of a plain two-column text
  list, which read as a generic SaaS mega-menu. No numbers on the rows (tried, then cut —
  read as clutter at that size) and no fade-in-only arrow; every cell is `min-h-24` so the
  grid stays visually uniform regardless of whether a label wraps to one line or two — CSS
  Grid only equalizes height *within* a row, not across the whole grid, so cells were
  previously uneven whenever the two labels in a row wrapped differently.
- Always mounted, not conditionally rendered, so GSAP can ease it open and closed (`autoAlpha`
  + 10px `y`, 0.25s, `power2.out`/`power2.in`) instead of popping. Initial closed state is
  `invisible opacity-0` in the className, matching `autoAlpha`'s hidden state, so there's no
  flash before the mount effect runs.
- The ~0.5rem gap before the panel is `pb-2` on the *trigger's wrapper div*, not `margin-top`
  on the panel. A margin-created gap has nothing painted in it, so on the way from the trigger
  down into the panel the pointer is briefly over no element in the wrapper's subtree at all —
  `mouseleave` fires on the wrapper mid-transit and the menu closes before the cursor reaches
  it. Padding on the wrapper keeps that space inside the wrapper's own hoverable box; the
  panel's `top-full` then lands flush against the *bottom of that padding*, so the visual gap
  is preserved with zero dead zone.
- Date: 2026-08-16, updated 2026-08-17

### [Footer] — credit line
- Rule: the footer bottom bar's third item is "Design & Developed by Website Vikreta",
  linking to https://www.websitevikreta.com, `target="_blank" rel="noopener noreferrer"` with
  an `sr-only` "(opens in a new tab)" note — same pattern as the Instagram link elsewhere.
  Replaced the old "Built in NJ. Licensed & insured." line. Only "Website Vikreta" itself is
  the link (`hover:text-mvcb-orange`) — "Design & Developed by" is plain `text-white/85`, not
  part of the anchor.
- Date: 2026-08-17

### [Removed] — custom cursor
- Rule: `components/ui/cursor-dot.tsx` (a GSAP trailing-dot + swelling ring) was tried, then
  removed — it read as "weird," not premium. The native browser cursor is the rule now. In
  its place, `app/globals.css`'s base layer puts `cursor: pointer` explicitly on every
  actionable element (`a[href]`, `button:not(:disabled)`, `[role="button"]`, `select`,
  `label[for]`, `summary`) — native `<button>` elements default to `cursor: default`, not
  `pointer`, so this was needed regardless of the custom cursor experiment. Don't reintroduce
  a custom cursor without being asked.
- Date: 2026-08-17

### [Selection] — brand-dark highlight
- Rule: `::selection` in `app/globals.css`'s base layer is `background: var(--mvcb-black);
  color: white` site-wide. No per-component override needed.
- Date: 2026-08-17

### [Spacing] — SECTION_Y and the panel paddings, reduced
- Rule: `SECTION_Y` in `components/ui/section.tsx` is `py-16 md:py-24` (was `py-20 md:py-32`)
  — the original scale read as "huge" gaps between sections. The `dark`/`navy` inset panel
  padding dropped to `px-8 py-12 sm:px-12 md:px-16 md:py-20` and `orange` to `px-8 py-10
  sm:px-12 md:px-16 md:py-14`. Every page hardcodes the literal `py-20 md:py-32` /
  `px-8 py-16 sm:px-12 md:px-16 md:py-24` classes rather than importing the constants (see the
  `[Component split]` entry above — sections stay local, unexported JSX), so the reduction was
  a site-wide find/replace across every `*-page.tsx`, not just an edit to `section.tsx`. If
  you change the scale again, grep for the old literal across `components/ui/*-page.tsx` too.
- Home page's `STATS` block was `pb-20 md:pb-32` only (no top padding) — a leftover from
  before `Section` existed, sitting directly under the "Restored." word divider. That
  asymmetry made the STATS↔divider gap half the size of every other inter-section gap on the
  page. Fixed by rendering it through `<Section id="about">` like everything else. If a
  section ever needs to sit flush against the block above it (deliberately, like the word
  divider sits flush under the hero), that's a one-off `pb-*`-only div, not a `<Section>` —
  don't let a second one drift back to that pattern without a comment explaining why.
- Date: 2026-08-17

### [Parallax] — above-the-fold elements need a different start point
- Rule: `data-parallax`'s ScrollTrigger used `start: "top bottom"` unconditionally, which
  assumes the element scrolls into view from below the viewport. For an element already on
  screen at load (the hero image, `scrollY: 0`), that start point puts `scrollY: 0` far from
  `progress: 0` — the tween's computed progress at mount is already high, and the very next
  `ScrollTrigger.refresh()` (fonts, layout, images settling) recomputes it and snaps the
  element to a different position. That snap is what read as "the hero image jumps on load."
  Fix: at setup, check whether the trigger element's top (in document coordinates,
  `getBoundingClientRect().top + window.scrollY`) is `<= 0` — if so it's the first thing on
  the page, so use `start: "top top"` instead, which makes `scrollY: 0` exactly `progress: 0`
  and removes the snap entirely. Below-the-fold parallax elements keep `"top bottom"`
  unchanged. No new attribute needed — the check is automatic per-element.
- Where: `components/ui/scroll-reveal-init.tsx`.
- Date: 2026-08-17
