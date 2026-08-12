# MV Custom Builders — Project Guide

Marketing website for a construction company that specializes in **renovating
old homes and historic buildings**. Next.js 16 (App Router) + Tailwind v4 +
shadcn/ui (`radix-nova` style). Currently a coming-soon page; the full site
will grow from here.

## Hard rules — never break these

1. **Never `git commit` or `git push`.** Leave the working tree as-is and let
   the user review and commit themselves — no exceptions, even if a task
   feels "done" or the user says "save that."
2. **Mobile-first.** Design and write CSS for the smallest viewport first,
   then layer on `sm:` / `md:` / `lg:` overrides. Never write desktop styles
   and patch mobile in after.
3. **Sans-serif only — Geist.** Already wired in `app/layout.tsx` via
   `next/font/google` (`--font-geist-sans`, `--font-geist-mono`). Don't add a
   second typeface; don't use a serif or display face anywhere.
4. **Real photography over graphics.** Stock photos or real project photos
   only for anything content-facing — no illustrations, icon-collages, or
   decorative SVG art. Small functional icons (lucide-react /
   `@remixicon/react`, already installed) are fine for UI affordances
   (buttons, form states, nav), not as hero/section artwork.
5. Full visual language — colors, type scale, imagery direction, spacing,
   voice — lives in **`docs/DESIGN_GUIDE.md`**. Read it before styling
   anything customer-facing.

## Architecture

- **Routes**: `app/` (App Router).
- **Components**: `components/ui/` — shadcn-generated primitives plus
  hand-built blocks (e.g. `under-construction.tsx`). Check here before writing a
  new primitive; add new shadcn primitives via the `shadcn` CLI
  (`components.json` is already configured: `radix-nova` style, neutral base,
  lucide icons, `@/*` aliases).
- **Utilities**: `lib/utils.ts` (`cn` helper, etc.).
- **Styling**: Tailwind v4, CSS-first config in `app/globals.css` — there is
  no `tailwind.config.js`. Brand tokens (`--mvcb-black`, `--mvcb-orange`,
  `--mvcb-orange-strong`) sit on top of the shadcn neutral palette. Default
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
