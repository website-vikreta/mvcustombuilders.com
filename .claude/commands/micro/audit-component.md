# Command: /audit-component
> Quick design + performance audit on a single component.

## Load
- `.claude/agents/critic.md` (scoring rubric only)
- `.claude/standards/design-system.md` (token compliance)

## Input Required
- Component file path or pasted code

## Audit Checks
- [ ] Uses design tokens (`bg-mvcb-orange`, `text-mvcb-black`, shadcn neutral utilities) —
      no hardcoded hex
- [ ] Orange (`--mvcb-orange`/`--mvcb-orange-strong`) used as a spotlight only — never a
      section/card background or large fill
- [ ] Radius uses the scale in design-system.md (`rounded-sm`/`md`/`lg`/`xl`/...) — not an
      arbitrary value
- [ ] Typography uses the scale in design-system.md — no ad-hoc `text-[...]` sizes
- [ ] Hover state follows motion-system.md (plain color/opacity transition, 0.2s–0.3s)
- [ ] Keyboard accessible (interactive elements have a visible focus state)
- [ ] `next/image` if images present, with real specific alt text
- [ ] Font uses `font-sans` (Geist, via `--font-geist-sans`) — no hardcoded font-family, no
      second typeface
- [ ] Any entrance animation is gated behind `motion-safe:`
- [ ] Mobile-first: check the component actually reads correctly at ~375px, not just
      patched down from a desktop layout

## Output
- Pass / Fail per check
- Specific lines to fix
- Fixed version of component
