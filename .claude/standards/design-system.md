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
  --mvcb-cream:         #faf7f2;  /* warm off-white surface */

  /* shadcn neutral scale (oklch) — everything else: backgrounds, text, borders, cards */
  --background, --foreground, --card, --popover, --primary, --secondary,
  --muted, --accent, --destructive, --border, --input, --ring, ...
}
```
Tailwind exposes the brand tokens directly: `bg-mvcb-black`, `bg-mvcb-orange`,
`text-mvcb-orange-strong`, `bg-mvcb-cream`, etc. (see the `@theme inline` block in
`app/globals.css`).

## Typography Scale
> Font: **Geist Sans** only, loaded via `next/font/google` in `app/layout.tsx`
> (`--font-geist-sans`). Geist Mono is reserved for incidental technical/numeric accents only.
> No other typeface, anywhere.

Mobile-first — set the mobile class as the default, add `md:`/`lg:` to enhance:
```
Body:              text-base (16px), leading-relaxed
Section headline:  text-3xl md:text-5xl, font-semibold, tight tracking
Eyebrow / label:   text-xs md:text-sm, tracking-wide, uppercase — sparingly, short labels
                    only (e.g. "SINCE ____", "OUR PROCESS"), never full headlines in caps
```
There is no fluid `clamp()` token scale in this codebase (unlike some reference designs) —
use the plain Tailwind size classes above consistently instead of inventing new ad-hoc sizes.

## Spacing
- Section vertical rhythm: `py-16 md:py-24` (per `docs/DESIGN_GUIDE.md`) — this is a
  trade-craft brand, generous spacing over a dense dashboard feel.
- Gaps between major blocks: `gap-8` or more.
- Single column, stacked, on mobile. Two-column (image/text) or grid layouts only from
  `md:` up.

## Radius
Scale is derived from `--radius: 0.625rem` in `app/globals.css`:
```
--radius-sm: calc(var(--radius) * 0.6)
--radius-md: calc(var(--radius) * 0.8)
--radius-lg: var(--radius)
--radius-xl: calc(var(--radius) * 1.4)
--radius-2xl / 3xl / 4xl: progressively larger
```
Use the corresponding Tailwind `rounded-*` classes rather than arbitrary radius values.

## Component Rules

### Buttons (`components/ui/button.tsx`, shadcn `radix-nova`)
- Variants that exist: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`.
- Sizes that exist: `xs`, `sm`, `default`, `lg`, `icon` (+ `icon-xs`/`icon-sm`/`icon-lg`).
- Don't invent new variants for a one-off need — compose with `className` overrides (as the
  coming-soon page does: `bg-mvcb-orange` + `rounded-full` on top of the base button) before
  adding a new variant to the component itself.
- Touch targets ≥44px tall on mobile — `default`/`lg` sizes already clear this; watch this
  when using `sm`/`xs` on touch-primary layouts.

### Images
- `next/image` always. Use `fill` + `object-cover` inside an aspect-ratio container so crops
  adapt per breakpoint (see the hero image pattern in `under-construction.tsx`).
- Real, specific alt text — never filler like "construction image."

### Icons
- `lucide-react` (shadcn default, e.g. `CheckCircle2`, `Loader2`) and `@remixicon/react` —
  small and functional (buttons, form state, nav) only. Never hero/section artwork.

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

- No color gradients
- No box shadows as a default treatment — depth comes from color/border, not drop shadow
- No border-radius beyond the scale above
