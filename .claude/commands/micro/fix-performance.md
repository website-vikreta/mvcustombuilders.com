# Command: /fix-performance
> Diagnose and fix a performance issue on a page or component.

## Load
- `.claude/agents/builder.md` (performance section only)
- `.claude/context/session.md`

## Input Required
- Page route or component
- Lighthouse score (if known)
- Metric failing: LCP / CLS / INP / TTFB / bundle size

## Diagnosis Path

### If LCP > 2.5s
- Is the hero image using `priority` on `next/image`? (matches the coming-soon page pattern)
- Is the hero font preloaded? (Geist via `next/font/google` handles this automatically)
- Is there a large render-blocking script above the fold?
- Is the LCP element above the fold at all?

### If CLS > 0.1
- Do all images have explicit `width`/`height`, or `fill` inside a sized aspect-ratio
  container?
- Is any dynamic content injected above existing content?
- Is there a late-loading banner/notice pushing layout?

### If INP > 200ms
- Is there a heavy event handler on scroll/resize without debounce?
- Is a CSS animation/transition triggering layout recalculation (animating `width`/`height`/
  `top`/`left` instead of `transform`/`opacity`)?
- Is any synchronous work happening on user interaction?

### If bundle is unexpectedly large
- Run `next build` and check the output — this codebase has a lean dependency list
  (`package.json`), so a large bundle usually means an accidental heavy import, not an
  expected cost.
- Any unused imports?
- Was a new dependency added for something CSS/Tailwind or an existing installed package
  already covers? (See `.claude/standards/code-standards.md` and `motion-system.md` — no
  animation library is installed on purpose.)

## Output
- Root cause identified
- Code fix applied
- Expected Lighthouse delta
