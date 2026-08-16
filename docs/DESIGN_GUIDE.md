# Design Guide — MV Custom Builders

A construction company that renovates old homes and historic buildings. The
site should feel like the work looks: sturdy, honest, precise, and lived-in —
not a slick tech startup and not a cheap contractor flyer.

## Principles

- **Mobile-first, always.** Build every screen at a ~375px width first. Add
  `sm:` / `md:` / `lg:` / `xl:` overrides to *enhance* the layout for larger
  screens — never to fix a layout that's broken on mobile. Stack content in a
  single column by default; move to side-by-side layouts only from `md:` up.
- **Photography for content, hairlines for structure.** Real photos — stock
  or actual project shots — carry every content-facing image slot:
  before/after renovation shots, craftsmanship close-ups (hands, tools,
  materials, joinery), finished interiors/exteriors in natural light. No
  illustration ever substitutes for a photo.
- **The Avelon reference is the visual target.** Behance project 249647967,
  read in detail on 2026-08-16 (see `.claude/learning.md` for the full
  breakdown). What we took from it, all client-approved:
  - Hard rectangles everywhere — no rounded corners at all.
  - Uppercase headings with tight negative tracking; sentence-case body.
  - A lowercase orange eyebrow with a small mark above each heading.
  - `01`–`06` numerals in orange on service rows and process steps.
  - Solid colour blocks: orange icon tiles, orange/navy/cream/black stat
    tiles, an orange CTA panel, an orange footer card.
  - Oversized outlined ghost lettering as a divider and footer watermark.
  - Scroll-snap carousels with square orange arrow buttons.
- **No structural line overlay.** An earlier pass drew five vertical hairlines
  down the page; it was removed on request. Don't reintroduce a grid overlay.
- Layouts stay on 1, 2, or 4 columns of the container. `grid-cols-3` is still
  avoided — it fights the 4-column rhythm of the stat and process rows.
- **Bootstrap Icons only.** `react-bootstrap-icons` is the sole icon source
  (`lucide-react` and `@remixicon/react` are uninstalled). Icons stay small
  and functional — buttons, form feedback, nav affordances, contact lines.
  Never blow an icon up into hero or section artwork; a photo goes there.

## Typography

- **Plus Jakarta Sans** for everything — body, UI, headlines, numbers.
  Loaded in `app/layout.tsx` via `next/font/google`, exposed as
  `--font-jakarta-sans`, wired to `--font-sans` in `app/globals.css`. One
  family only. No second typeface, no serif, no display face. Hierarchy
  comes from weight (400 body / 700 subheads / 800 headlines) and size.
- Mobile-first type scale — set the mobile size as the default Tailwind
  class, then bump at `md:`/`lg:`:
  - Body: `text-base` (16px), `leading-relaxed`.
  - Page headline (h1): `text-4xl sm:text-6xl md:text-7xl`,
    `font-extrabold`, `tracking-tight`, `leading-[1.05]`.
  - Section headline (h2): `text-3xl md:text-5xl`, `font-extrabold`, tight
    tracking.
  - Card title (h3): `text-lg`, `font-bold`.
  - Numbers (stats, step markers, indexes): `tabular-nums`, `font-extrabold`.
- **A heading gets an eyebrow above it.** Lowercase, orange, with a small
  mark: "proof in every project", "the same order, every job". Specific, and
  in the brand's plain voice. What stays banned is the generic uppercase
  category label ("OUR SERVICES", "HOW WE WORK") — that's the AI-template
  tell, not the eyebrow itself. `SectionHeading` in
  `components/ui/section.tsx` renders eyebrow + uppercase headline + intro.
- **Headings are uppercase**, `font-extrabold`, `tracking-[-0.02em]`, tight
  leading. Body copy is sentence case and normal weight — the contrast
  between the two is what carries the hierarchy.

## Color

Defined as CSS variables in `app/globals.css`. Reuse these tokens — don't
hardcode new hex values.

| Token | Value | Use |
|---|---|---|
| `--mvcb-black` | `#111111` | Dark section backgrounds, grounding/hero panels |
| `--mvcb-orange` | `#f97316` | Accent only — CTAs, highlights, small hazard-stripe details |
| `--mvcb-orange-strong` | `#ea580c` | Text/foreground on orange, or orange needing more contrast |
| `--mvcb-cream` | `#faf7f2` | Warm off-white — subtle hover surfaces and inset panels |
| `--mvcb-sand` | `#f0eae0` | One step deeper than cream — alternating section backgrounds |
| `--mvcb-charcoal` | `#1f1d1a` | Warm dark panel, softer than pure black (Instagram band) |
| `--mvcb-line` | `#e2ddd4` | Every border and divider. The only line colour. |
| `--mvcb-navy` | `#10222d` | The one non-orange solid tile colour (stat tile, Instagram panel) |
| shadcn neutral scale (`--background`, `--foreground`, `--muted`, `--border`, etc.) | — | Everything else: light-section backgrounds, body text, cards, borders |

Section rhythm on light pages alternates `background` → `sand` → `background`
→ `sand`. Cards sit on the opposite tone from their section with a
`border-mvcb-line` hairline. That tonal step is what separates sections —
there are no shadows anywhere on the site to do it instead.

Rules of thumb:
- Orange now carries large fills in four specific places: icon tiles, one stat
  tile, the final-CTA panel, and the footer card. Everywhere else it stays an
  accent — eyebrows, numerals, arrows, links, primary buttons. Don't invent a
  fifth orange surface without a reason.
- Black sections are for high-contrast moments (hero, CTA banner), not the
  whole page — most of the site should read as light/neutral so photography
  stays legible.
- Check contrast when placing orange on black or white — verify AA before
  shipping new orange-on-color text combinations.

## Imagery

- Source real project photography where it exists; use licensed stock only
  as a placeholder, and prefer stock that looks like an actual jobsite or
  renovated home — natural light, real materials (wood, brick, plaster),
  visible craft/tools/hands at work. Avoid generic corporate-stock cliché
  (posed hard hats, thumbs-up, stock blueprints on a table).
- Every content image needs real alt text describing what renovation work
  is shown — not filler like "construction image."
- Crop for mobile first: a photo that's a wide landscape on desktop should
  still read as a sensible portrait/square crop on a phone, not a squeezed
  sliver. Use `next/image` with `fill` + `object-cover` inside an
  aspect-ratio container so crops adapt per breakpoint.

## Layout & spacing

- Single column, stacked, on mobile. Two-column (image/text) or grid layouts
  only from `md:` up.
- **One spacing scale, defined in `components/ui/section.tsx`.** Never write a
  bespoke `py-*` on a section — use `<Section>` or the exported constants:
  ```
  SECTION_Y     py-16 md:py-24     every full-width section, no exceptions
  CONTAINER     mx-auto max-w-6xl px-6 sm:px-8
  CONTENT_GAP   mt-12 md:mt-16     heading block → the content under it
  GRID_GAP      gap-6              between cards in any grid
  ```
  Related items inside a card step `mt-3` → `mt-5` → `mt-7`. Uniformity here
  is what makes the page read as one system.
- **No box shadows. Anywhere.** Not on cards, popovers, sticky bars, or
  slider handles. Depth is hairlines, tone steps, and space. `shadow-*` in a
  diff is a bug.
- Touch targets ≥44px tall on mobile (`Action` sizes `md`/`lg` clear this;
  `sm` is 40px and is for the desktop header only).
- **Square corners, everywhere.** `--radius` is `0rem` and no `rounded-*`
  class belongs in a diff. Cards, photos, buttons, badges, icon tiles, and
  inputs are all hard rectangles — this is what makes the site read as
  industrial rather than as a SaaS landing page.
- **Hover is a desktop enhancement only.** Tailwind v4's `hover:` variant
  already compiles to `@media (hover: hover)`, so hover styles simply never
  fire on touch — use them for polish (border colour, image scale, subtle
  lifts) but never hide content, controls, or meaning behind hover. On
  mobile there is no hover state and nothing should be missing because of it.
- **Motion is GSAP + ScrollTrigger**, wired once per page by
  `<ScrollRevealInit />`. Add `data-reveal` for a fade-and-lift on scroll-in
  (siblings auto-stagger), `data-parallax` + optional
  `data-parallax-strength` for scroll-linked drift. It is all inside
  `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, so reduced
  motion and no-JS render everything static and visible. Never put
  `data-reveal` on above-the-fold hero content.

## Components

- **`Action` is the only clickable.** `components/ui/action.tsx` covers every
  button and link on the site — there is no `Button` component. It picks its
  own element: `next/link` for an internal path, `<a target="_blank">` plus a
  screen-reader note for an external URL, a plain `<a>` for `tel:`/`mailto:`,
  and `<button>` when there's no `href` or when it's disabled or loading.
  ```tsx
  <Action href="/contact" size="lg" withArrow>Get a free quote</Action>
  <Action href="/portfolio" variant="secondary" tone="dark">See the work</Action>
  <Action href="tel:+19735550147" variant="secondary" size="lg">Call us</Action>
  <Action type="submit" loading={sending} loadingLabel="Sending">Send request</Action>
  <Action href="/contact" variant="inline" withArrow>Ask about this job</Action>
  ```
  Variants: `primary` (orange), `secondary` (outlined), `ghost`, `inline`
  (underlined text link). Sizes `sm`/`md`/`lg`. `tone="dark"` for anything on
  a black surface. Never restyle it inline beyond layout classes
  (`w-fit`, `shrink-0`, `mt-*`) — a one-off colour override defeats the point.
- `Section` / `SectionHeading` for page structure, `ColumnRules` for the grid
  overlay (already mounted in the root layout — don't add another).
- New shadcn additions should stay on the `radix-nova` style already set in
  `components.json` so components look consistent, minus any shadow the CLI
  ships with.

## Voice

Plain, confident, trade language — "built to last," "we don't cut
corners," "restored, not replaced." Avoid marketing-agency jargon
("synergy," "elevate your living experience"). Short sentences. Specific
over vague (name the material, the era of the home, the actual scope) rather
than generic claims.

### Writing that doesn't read as machine-written

The copy tells on itself faster than the layout does. Rules, in order of how
badly they give it away:

1. **No eyebrow labels over headings.** (See Typography.)
2. **Em dashes stay rare.** One per page at most. Where a draft has an em
   dash, a full stop is almost always better: "Structural work done
   properly. Finish work done by hand."
3. **No triads.** "Sturdy, honest, and precise." "Planning, permitting, and
   precision." Three-item lists of adjectives are the strongest tell. Two
   items, or one specific thing.
4. **No inflated adjectives.** Cut "uncompromising," "unmatched," "seamless,"
   "meticulous," "world-class," "state-of-the-art," "precision" as a noun.
   A licensed builder describing real work doesn't need them.
5. **Headings are sentences, not labels.** "How a job runs" beats "Our Build
   Process." "What we build" beats "Precision Construction." Sentence case,
   not Title Case.
6. **Say the concrete thing.** "Proper egress and moisture barriers go in
   before anything pretty does" over "finished to the highest standards."
7. **Never invent a checkable fact** — no review counts, star ratings, years
   of experience, or project numbers that aren't in
   `.claude/context/business.md`.
