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
   matches the existing `Action` pattern. No scale/rotate/shadow-pop gimmicks — the site
   ships no box shadows at all (see design-system.md).
3. **Scroll entrance or parallax?** Add `data-reveal` (or `data-parallax` +
   `data-parallax-strength`) to the element and make sure the page renders
   `<ScrollRevealInit />`. That is the whole job — no per-component GSAP, no refs, no new
   keyframes, no second library. See motion-system.md.
4. Reduced motion is already handled inside `ScrollRevealInit`'s `gsap.matchMedia` block —
   don't add a second guard, and don't hide anything in CSS.
5. No animation on first paint above the fold.

## Output
- Modified component only
- Note if a new `@keyframes` was added to `app/globals.css` (and its name)
- Log any new reusable convention to `.claude/learning.md`; update session.md if this sets a
  pattern
