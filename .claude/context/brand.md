# Brand — MV Custom Builders

## Palette
Defined as CSS variables in `app/globals.css`. Reuse these tokens — never hardcode new hex
values in components.

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Grounding black | `--mvcb-black` | `#111111` | Dark section backgrounds, hero/CTA panels — high-contrast moments, not the whole page |
| Accent orange | `--mvcb-orange` | `#f97316` | Spotlight only — CTAs, links, small hazard-stripe details |
| Accent orange, strong | `--mvcb-orange-strong` | `#ea580c` | Text/foreground on orange, or orange needing more contrast |
| Warm cream | `--mvcb-cream` | `#faf7f2` | Warm off-white surface for cards and inset panels |
| Warm sand | `--mvcb-sand` | `#f0eae0` | One step deeper than cream — alternating section backgrounds |
| Warm charcoal | `--mvcb-charcoal` | `#1f1d1a` | Softer dark panel where pure black would be too hard |
| Hairline | `--mvcb-line` | `#e2ddd4` | Default border/divider colour |
| Deep navy | `--mvcb-navy` | `#10222d` | The one non-orange solid tile colour |
| shadcn neutral scale | `--background`, `--foreground`, `--muted`, `--border`, etc. | — | Everything else: light-section backgrounds, body text, cards, borders |

**Rule:** Orange carries large fills in four approved places only — icon tiles, one stat
tile, the final-CTA panel, the footer card. Everywhere else it stays an accent.
**Rule:** Black sections are for high-contrast moments only — most of the site should read
light/neutral so photography stays legible.
**Rule:** Check AA contrast before shipping any new orange-on-black or orange-on-white text
combination.

---

## Typography Direction
- **Font:** Plus Jakarta Sans only, loaded via `next/font/google` as
  `--font-jakarta-sans` in `app/layout.tsx`. No second typeface, no serif or display face
  anywhere. Hierarchy comes from weight (400/700/800) and size.
- **Mobile-first type scale** (see `docs/DESIGN_GUIDE.md` for the full scale):
  body `text-base`/`leading-relaxed`; section headline `text-3xl md:text-5xl font-extrabold`
  tight tracking; numbers `tabular-nums`.
- **Eyebrow, then uppercase headline, then intro.** The eyebrow is lowercase orange with a
  small mark and says something specific ("proof in every project"); a generic uppercase
  category label is still banned. Headings are uppercase `tracking-[-0.02em]`.
- **Font mood:** Plain, sturdy, geometric — not playful, not corporate-slick.

---

## Voice & Tone
**What we sound like:**
- Plain, confident, trade language — "built to last," "we don't cut corners," "restored,
  not replaced."
- Specific over vague — name the material, the era of the home, the actual scope of work,
  rather than a generic claim.
- Short sentences.

**What we never sound like:**
- Marketing-agency jargon ("synergy," "elevate your living experience," "holistic")
- Generic contractor-flyer bravado ("#1 in the area!", excessive exclamation points)

**Example — Wrong:**
> "We elevate your living experience through holistic renovation solutions."

**Example — Right:**
> "This 1920s foundation needed real repair, not a patch. We rebuilt it to last another
> hundred years."

---

## Motion Identity
- Restrained and functional, not decorative. This is a trade-craft brand — motion should
  feel sturdy, not flashy or startup-slick.
- GSAP + ScrollTrigger via `<ScrollRevealInit />` is the only motion system: `data-reveal`
  for scroll-in reveals, `data-parallax` for scroll-linked drift. See
  `.claude/standards/motion-system.md`.
- All of it is gated by `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, so
  reduced motion and no-JS get static, fully visible content.
- No animation on first paint above the fold — content must be instantly readable. The hero
  photo may parallax; the hero text never reveals.

---

## Photography / Visual Direction
- Real photography only — stock or actual project shots. Before/after renovation shots,
  craftsmanship close-ups (hands, tools, materials, joinery), finished interiors/exteriors in
  natural light.
- No illustrations or icon collages standing in for a photo. Structure comes
  from solid colour blocks, uppercase type, and outlined ghost lettering — the
  Avelon reference system (see `.claude/learning.md`). The five-line vertical
  grid overlay tried earlier the same day was removed; don't bring it back.
- Avoid generic corporate-stock cliché: posed hard hats, thumbs-up, staged blueprints on a
  table.
- Icons come from `react-bootstrap-icons` and nothing else. Small and functional only —
  buttons, form states, nav affordances, contact lines. Never hero/section artwork.
