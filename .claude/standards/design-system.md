# Design System — MV Custom Builders

## Color Tokens
Real tokens, defined in `app/globals.css`. Never hardcode hex in component files — use the
Tailwind classes/CSS vars below.

```css
:root {
  /* MV Custom Builders brand palette */
  --mvcb-black:         #111111;  /* grounding — dark hero/CTA panels only */
  --mvcb-orange:        #f97316;  /* spotlight accent — CTAs, links, small details */
  --mvcb-orange-strong: #ea580c;  /* orange needing text/foreground contrast */
  --mvcb-cream:         #faf7f2;  /* warm off-white — hover surfaces, inset panels */
  --mvcb-sand:          #f0eae0;  /* alternating section background */
  --mvcb-charcoal:      #1f1d1a;  /* warm dark, softer than black */
  --mvcb-line:          #dfd8cc;  /* every border, divider, and the column rules */

  /* shadcn neutral scale (oklch) — everything else: backgrounds, text, borders, cards */
  --background, --foreground, --card, --popover, --primary, --secondary,
  --muted, --accent, --destructive, --border, --input, --ring, ...
}
```
Tailwind exposes the brand tokens directly: `bg-mvcb-black`, `bg-mvcb-orange`,
`text-mvcb-orange-strong`, `bg-mvcb-cream`, etc. (see the `@theme inline` block in
`app/globals.css`).

## Typography Scale
> Font: **Plus Jakarta Sans** only, loaded via `next/font/google` in `app/layout.tsx`
> (`--font-jakarta-sans`). No other typeface, anywhere. Weight carries hierarchy:
> 400 body, 700 subheads/labels, 800 headlines. Numbers get `tabular-nums`.
>
> **Headings are uppercase** with a lowercase orange eyebrow above them (`Eyebrow` /
> `SectionHeading` in `components/ui/section.tsx`). Eyebrows must be specific and lowercase
> ("proof in every project"); a generic uppercase category label ("OUR SERVICES") is still
> banned.

Mobile-first — set the mobile class as the default, add `md:`/`lg:` to enhance:
```
Body:              text-base (16px), leading-relaxed
Page headline:     text-4xl sm:text-6xl md:text-7xl, font-extrabold, tracking-tight
Section headline:  text-3xl md:text-5xl, font-extrabold, tracking-tight
Card title:        text-lg, font-bold
Numbers:           tabular-nums, font-extrabold
Data label:        text-sm text-muted-foreground (a category on a card, a footer column
                    heading) — small uppercase is fine here, never above a heading
```
There is no fluid `clamp()` token scale in this codebase (unlike some reference designs) —
use the plain Tailwind size classes above consistently instead of inventing new ad-hoc sizes.

## Spacing
One scale, exported from `components/ui/section.tsx`. Never write a bespoke section
padding — use `<Section>` or these constants:
```
SECTION_Y     py-16 md:py-24     every full-width section, no exceptions
CONTAINER     mx-auto max-w-6xl px-6 sm:px-8
CONTENT_GAP   mt-12 md:mt-16     heading block → content
GRID_GAP      gap-6              between cards in a grid
```
- Inside a card, related items step `mt-3` → `mt-5` → `mt-7`.
- Single column, stacked, on mobile. Grids from `md:` up, and only 2 or 4 columns so
  card edges land on the column rules — never `grid-cols-3`.

## Structure
No line overlay, no grid graphic — an earlier five-line vertical overlay was built and then
removed on request. Structure comes from: uppercase type, solid colour blocks (orange, navy,
cream, black), hairline `border-mvcb-line` card outlines, and generous `SECTION_Y` space.
Sections themselves stay transparent; tone lives on the panels and cards inside them.

## Radius
**Square corners are the brand rule — nothing ships rounded.** `--radius: 0rem` in
`app/globals.css`, and no `rounded-*` class belongs in a component. Cards, photos, buttons,
badges, icon tiles, and inputs are hard rectangles.

The derived scale still exists (everything resolves to 0):
```
--radius-sm: calc(var(--radius) * 0.6)
--radius-md: calc(var(--radius) * 0.8)
--radius-lg: var(--radius)
--radius-xl: calc(var(--radius) * 1.4)
--radius-2xl / 3xl / 4xl: progressively larger
```
Use the corresponding Tailwind `rounded-*` classes rather than arbitrary radius values.

## Component Rules

### Buttons and links — `components/ui/action.tsx`
There is no `Button` component; it was deleted. `Action` is every clickable on the site and
picks its own element from its props: `next/link` for an internal path, `<a target="_blank">`
plus a screen-reader "(opens in a new tab)" note for an external URL, a plain `<a>` for
`tel:`/`mailto:`/`sms:`, and `<button>` when there is no `href` — or when `disabled`/`loading`
is set, so a dead control can never be navigated by keyboard.
- Variants: `primary` (orange fill), `secondary` (outlined), `ghost`, `inline` (underlined
  text link, no padding or height).
- Sizes: `sm` (40px, desktop header only), `md` (48px, default), `lg` (56px).
- `tone="dark"` on any black/charcoal surface — it flips `secondary`/`ghost`/`inline`.
- Other props: `withArrow`, `loading` + `loadingLabel`, `disabled`, `fullWidth`, `iconOnly`
  (requires `aria-label`), `type` for form submits.
- Don't override its colours inline. Layout-only classes (`w-fit`, `shrink-0`, `mt-*`) are
  fine; a bespoke `bg-*`/`rounded-*` is not.
- Touch targets ≥44px tall on mobile — `md`/`lg` clear this.

### Images
- `next/image` always. Use `fill` + `object-cover` inside an aspect-ratio container so crops
  adapt per breakpoint (see the hero image pattern in `under-construction.tsx`).
- Real, specific alt text — never filler like "construction image."

### Icons
- **`react-bootstrap-icons` only.** `lucide-react` and `@remixicon/react` are uninstalled;
  don't reinstall them. Icons stay small and functional (buttons, form state, nav, contact
  lines) — never hero/section artwork.
- Size them with Tailwind (`h-4 w-4`), not the package's `size` prop, so they match
  surrounding text.
- Names in use: `PatchCheckFill` (licensed), `ShieldCheck` (approved), `ConeStriped`
  (safety/OSHA), `FileEarmarkCheck` (insured/documents), `GeoAlt` (location),
  `TelephoneFill` (phone), `Clock` (hours), `Instagram`, `ArrowRight`, `List`/`X` (menu),
  `CheckCircleFill` (form success), `ArrowRepeat` (spinner, with `animate-spin`),
  `ChevronDown`/`ChevronUp`/`Check` (select primitive).

---

## Accent Color Usage — `--mvcb-orange`
**Orange is a spotlight, not a fill.** No orange section backgrounds, no orange cards.

**Where orange belongs:**
- A primary CTA button
- Links, hover states on interactive elements
- Small accent details (the hazard-stripe band on the coming-soon page)
- Inline error/alert text where `--mvcb-orange-strong` is already used
  (see `under-construction.tsx` field-error pattern)

**Where orange never goes:**
- Backgrounds of full sections or large areas
- Body text or paragraph copy
- Card or container backgrounds at scale

**The test:** Check AA contrast on any new orange-on-black or orange-on-white text pairing
before shipping it.

- Gradients only as a photo scrim (`bg-gradient-to-t from-mvcb-black ...`), never as a
  decorative surface colour
- **No box shadows, no exceptions.** Not on cards, popovers, sticky bars, or drag handles.
  Depth comes from hairlines, tone steps, and space. A `shadow-*` class in a diff is a bug,
  including the ones the shadcn CLI ships with (`select.tsx`'s popover shadow was replaced
  with a border for exactly this reason)
- No `rounded-*` classes at all — see Radius above
