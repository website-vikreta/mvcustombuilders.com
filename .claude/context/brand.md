# Brand — MV Custom Builders

## Palette
Defined as CSS variables in `app/globals.css`. Reuse these tokens — never hardcode new hex
values in components.

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Grounding black | `--mvcb-black` | `#111111` | Dark section backgrounds, hero/CTA panels — high-contrast moments, not the whole page |
| Accent orange | `--mvcb-orange` | `#f97316` | Spotlight only — CTAs, links, small hazard-stripe details |
| Accent orange, strong | `--mvcb-orange-strong` | `#ea580c` | Text/foreground on orange, or orange needing more contrast |
| Warm cream | `--mvcb-cream` | `#faf7f2` | Warm off-white surface (used behind light sections, e.g. the coming-soon page) |
| shadcn neutral scale | `--background`, `--foreground`, `--muted`, `--border`, etc. | — | Everything else: light-section backgrounds, body text, cards, borders |

**Rule:** Orange is a spotlight color, never a large fill. No orange section backgrounds, no
orange cards.
**Rule:** Black sections are for high-contrast moments only — most of the site should read
light/neutral so photography stays legible.
**Rule:** Check AA contrast before shipping any new orange-on-black or orange-on-white text
combination.

---

## Typography Direction
- **Font:** Geist Sans only, loaded via `next/font/google` as `--font-geist-sans` in
  `app/layout.tsx`. No second typeface, no serif or display face anywhere.
- **Mobile-first type scale** (see `docs/DESIGN_GUIDE.md` for the full scale):
  body `text-base`/`leading-relaxed`; section headline `text-3xl md:text-5xl font-semibold`
  tight tracking; eyebrow/label `text-xs md:text-sm tracking-wide uppercase` used sparingly.
- **Font mood:** Plain, sturdy, precise — not playful, not corporate-slick.

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
- Every non-essential entrance animation respects `prefers-reduced-motion` via the
  `motion-safe:` variant — see `.claude/standards/motion-system.md`.
- No animation on first paint above the fold — content must be instantly readable.

---

## Photography / Visual Direction
- Real photography only — stock or actual project shots. Before/after renovation shots,
  craftsmanship close-ups (hands, tools, materials, joinery), finished interiors/exteriors in
  natural light.
- No illustrations, icon collages, or abstract graphic hero art. The one deliberate exception
  already in the codebase is the hazard-stripe band and blueprint-grid texture on the
  coming-soon page — functional, jobsite-referencing texture, not decorative illustration.
  Don't extend that pattern into new decorative graphics elsewhere.
- Avoid generic corporate-stock cliché: posed hard hats, thumbs-up, staged blueprints on a
  table.
- Icons (`lucide-react`, `@remixicon/react`) are small and functional only — buttons, form
  states, nav affordances. Never hero/section artwork.
