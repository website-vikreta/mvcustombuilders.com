# Session State — Live Scratchpad

> Update this file at the end of every task. This is the only context file loaded by default
> alongside the task-specific file. Keep it under 100 lines.

---

## Current Task
<!-- What are we building right now? -->
`.claude/` folder integration — this whole folder was imported from a different reference
project ("Website Vikreta," an AI marketing agency) and didn't match MV Custom Builders.
Rewrote `agents/*.md`, `context/*.md`, `standards/*.md`, and reset `learning.md` to match
this project's real stack and content (see `docs/DESIGN_GUIDE.md`, `CLAUDE.md`,
`package.json`). No page/component work done in this pass.

## Locked Decisions
<!-- Things decided and not up for debate again -->
- Palette: `--mvcb-black` (#111111), `--mvcb-orange` (#f97316, spotlight only),
  `--mvcb-orange-strong` (#ea580c), `--mvcb-cream` (#faf7f2) + shadcn neutral scale for
  everything else.
- Framework: Next.js 16 (App Router), TypeScript, Tailwind v4 (CSS-first, no
  tailwind.config.js), shadcn/ui `radix-nova` style (see `components.json`).
- Font: Geist Sans only, via `next/font/google` (`--font-geist-sans`). No second typeface.
- Icons: `lucide-react` (shadcn default) + `@remixicon/react`, small/functional only.
- Photography: real photos only, no illustration/graphic hero art.
- Mobile-first: build at ~375px first, layer `sm:`/`md:`/`lg:` up.
- No animation library installed — CSS/`tw-animate-css` + `motion-safe:` only, add
  GSAP/Framer Motion only if a real need can't be done in CSS.
- Forms: `@emailjs/browser` (already used by the coming-soon signup form).

## In Progress
<!-- Decisions being worked through -->
_None_

## Open Questions
<!-- Things that need answers before proceeding -->
- Real business specifics (years in business, service area, team, licensing) — see
  `.claude/context/business.md` "Not Yet Confirmed" — needed before writing an About page.
- Full-site route map (About / Services / Projects / Contact, etc.) — not yet scoped, don't
  build ahead of real content.

## Pages Completed
<!-- Route + status -->
- `/` — coming-soon page (`app/page.tsx` → `components/ui/under-construction.tsx`): hero
  photo, headline, email capture form (EmailJS). Live.

## Components Locked
<!-- Reusable components finalized and not to be changed -->
- `components/ui/button.tsx` — shadcn Button (radix-nova), variants
  default/outline/secondary/ghost/destructive/link, sizes xs/sm/default/lg/icon(+variants).
- `components/ui/input.tsx` — shadcn Input.
- `components/ui/under-construction.tsx` — coming-soon page block (hero image + email
  signup).

## Known Constraints
- Orange used as a spotlight only — never a large fill/background.
- Sans-serif only — Geist, no exceptions.
- Every content image needs real, specific alt text.
- `next/image` for every image, no exceptions.
- Respect `prefers-reduced-motion` on any entrance animation.

## Last Updated
2026-08-13 — `.claude/` folder reference-repo cleanup (this entry).
