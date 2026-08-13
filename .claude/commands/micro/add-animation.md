# Command: /add-animation
> Add or improve a specific animation on an existing component.

## Load
- `.claude/standards/motion-system.md`
- `.claude/learning.md` — logged motion conventions + anti-patterns
- `.claude/context/session.md` for locked decisions

## Input Required
- Component name / file path
- What element is being animated
- Trigger: scroll / hover / click / page load / user action

## Process
1. **Component enter/exit (dropdown, dialog, popover)?** Use `tw-animate-css` utility
   classes (`animate-in`/`animate-out`, `fade-in`, `zoom-in-95`, etc.) — this is already how
   shadcn/radix components animate in this project. Don't hand-roll a custom transition for
   something the utility classes already cover.
2. **Hover/focus state?** Plain CSS `transition-colors`/`transition-transform`, 0.2s–0.3s —
   matches the existing Button pattern. No scale/rotate/shadow-pop gimmicks (see
   design-system.md accent/shadow rules).
3. **Scroll or load entrance animation?** No JS animation library is installed — don't add
   GSAP/Framer Motion for this. Use a `motion-safe:`-gated Tailwind arbitrary-value animation
   or a `@keyframes` block in `app/globals.css`. If the animation is the `fade-up-in`/
   `float-y` pattern `docs/DESIGN_GUIDE.md` names, define it there under those exact names if
   it doesn't exist yet (see motion-system.md) — don't invent a differently-named equivalent.
4. Confirm `prefers-reduced-motion` is respected (`motion-safe:`, not a bare animation).
5. No animation on first paint above the fold.

## Output
- Modified component only
- Note if a new `@keyframes` was added to `app/globals.css` (and its name)
- Log any new reusable convention to `.claude/learning.md`; update session.md if this sets a
  pattern
