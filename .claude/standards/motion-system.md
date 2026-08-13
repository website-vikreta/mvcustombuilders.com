# Motion System — MV Custom Builders

## Philosophy
Motion is restrained and functional — this is a trade-craft brand (sturdy, honest, precise),
not a startup. If a page reads fine with an animation removed, cut the animation.

**No JS animation library is installed.** Don't add GSAP, Framer Motion, or Three.js for a
need that CSS transitions/keyframes + `tw-animate-css` already cover — see
`.claude/agents/builder.md`. If a genuine interaction need can't be done in CSS, confirm with
the user before adding a dependency.

---

## What's Actually Available
```
tw-animate-css   Already installed (imported in app/globals.css). Provides Tailwind
                  animate-in/animate-out style utilities — the enter/exit animations
                  shadcn/radix components (dropdowns, dialogs, popovers) use out of the box.
                  Reach for these utility classes first for component enter/exit states
                  before writing custom CSS.
CSS transitions   Plain `transition-colors`/`transition-transform` etc. for hover/focus
                  states — see Button's own hover/active transitions.
CSS @keyframes    For bespoke entrance animation (e.g. a hero fade-up on load), define a
                  keyframe in app/globals.css and gate it behind `motion-safe:` — see below.
```

## `motion-safe:` — Required for Any Entrance Animation
`docs/DESIGN_GUIDE.md` requires every entrance animation to respect
`prefers-reduced-motion`. Use Tailwind's `motion-safe:` variant on the animated element
rather than a JS media-query check:
```tsx
<div className="opacity-0 motion-safe:animate-[fade-up-in_0.6s_ease-out_forwards]">
```
`docs/DESIGN_GUIDE.md` names `fade-up-in` and `float-y` as the site's entrance-animation
convention. Those keyframes don't exist in `app/globals.css` yet — when a page first needs
one, define it there (in the existing `@layer base` block or a new `@layer utilities` block)
using those exact names, so future pages reuse the same keyframe instead of each page
defining its own:
```css
@keyframes fade-up-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
```

## Rules
- No animation on initial paint above the fold — content must be instantly readable
  (matches the coming-soon page: hero image has `priority`, no entrance animation on it).
- Respect `prefers-reduced-motion` — always via `motion-safe:`, never a bare animation.
- No looping animations except subtle, ambient ones (e.g. `float-y` on a small accent) — never
  looping motion on primary content.
- Keep transitions short and functional: `0.2s`–`0.3s` for hover/focus states
  (`Loader2` spin on the coming-soon form's submit button is the existing example —
  `animate-spin`, a built-in Tailwind utility, not a custom keyframe).
- Touch targets and interactive states must have a visible, non-animated focus indicator —
  motion is a bonus, not a substitute for accessible state.

## Hover States (existing pattern)
```tsx
// Button — background/color transition, no transform/scale gimmicks
className="bg-mvcb-orange hover:bg-mvcb-orange-strong transition-colors"
```
Keep hover states this plain: color/opacity transitions, not scale/rotate/shadow-pop effects.
