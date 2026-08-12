# Design Guide — MV Custom Builders

A construction company that renovates old homes and historic buildings. The
site should feel like the work looks: sturdy, honest, precise, and lived-in —
not a slick tech startup and not a cheap contractor flyer.

## Principles

- **Mobile-first, always.** Build every screen at a ~375px width first. Add
  `sm:` / `md:` / `lg:` / `xl:` overrides to *enhance* the layout for larger
  screens — never to fix a layout that's broken on mobile. Stack content in a
  single column by default; move to side-by-side layouts only from `md:` up.
- **Photography, not graphics.** Real photos — stock or actual project shots
  — carry the visual weight of the site: before/after renovation shots,
  craftsmanship close-ups (hands, tools, materials, joinery), finished
  interiors/exteriors in natural light. No illustrations, no icon
  collages, no abstract graphic hero art. The one deliberate exception
  already in the codebase is the hazard-stripe band and blueprint-grid
  texture on the coming-soon page — functional, minimal, jobsite-referencing
  textures, not decorative illustration. Don't extend that pattern into new
  decorative graphics elsewhere.
- **Icons are UI, not art.** `lucide-react` and `@remixicon/react` are
  already installed — use them small and functional (buttons, form
  feedback, nav affordances). Never blow an icon up into hero or section
  artwork; a photo goes there instead.

## Typography

- **Geist Sans** for all UI and body text, **Geist Mono** only for
  incidental technical/numeric accents if ever needed (e.g. a measurement or
  reference code) — both are already loaded in `app/layout.tsx` via
  `next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`.
  Don't add another typeface.
- Sans-serif only, everywhere — no serif or display fonts, including for
  headlines.
- Mobile-first type scale — set the mobile size as the default Tailwind
  class, then bump at `md:`/`lg:`:
  - Body: `text-base` (16px), `leading-relaxed`.
  - Section headline: `text-3xl md:text-5xl`, `font-semibold`, tight
    tracking.
  - Eyebrow/label (e.g. "SINCE 1998", "OUR PROCESS"): `text-xs md:text-sm`,
    `tracking-wide`, `uppercase` — use sparingly, small caps labels only, not
    full headlines in caps.

## Color

Defined as CSS variables in `app/globals.css`. Reuse these tokens — don't
hardcode new hex values.

| Token | Value | Use |
|---|---|---|
| `--mvcb-black` | `#111111` | Dark section backgrounds, grounding/hero panels |
| `--mvcb-orange` | `#f97316` | Accent only — CTAs, highlights, small hazard-stripe details |
| `--mvcb-orange-strong` | `#ea580c` | Text/foreground on orange, or orange needing more contrast |
| shadcn neutral scale (`--background`, `--foreground`, `--muted`, `--border`, etc.) | — | Everything else: light-section backgrounds, body text, cards, borders |

Rules of thumb:
- Orange is a spotlight color — buttons, links, small accents, the caution
  stripe. It should never be a large fill (no orange section backgrounds,
  no orange cards).
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
- Generous spacing — this is a trade-craft brand, not a dense dashboard.
  Favor `py-16 md:py-24` section rhythm and `gap-8`+ between major blocks
  over tight spacing.
- Touch targets ≥44px tall on mobile (shadcn `Button` `default`/`lg` sizes
  already clear this).
- Respect `prefers-reduced-motion` for any entrance animation — the existing
  `fade-up-in` / `float-y` keyframes in `globals.css` already gate on
  `motion-safe:`; keep following that pattern for new motion.

## Components

- Reach for `components/ui/` first — `Button`, `Input`, and whatever's
  added via the `shadcn` CLI — before building a new primitive from
  scratch.
- New shadcn additions should stay on the `radix-nova` style already set in
  `components.json` so components look consistent.

## Voice

Plain, confident, trade language — "built to last," "we don't cut
corners," "restored, not replaced." Avoid marketing-agency jargon
("synergy," "elevate your living experience"). Short sentences. Specific
over vague (name the material, the era of the home, the actual scope) rather
than generic claims.
