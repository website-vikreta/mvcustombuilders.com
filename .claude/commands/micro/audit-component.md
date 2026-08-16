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
- [ ] Font uses `font-sans` (Plus Jakarta Sans, via `--font-jakarta-sans`) — no hardcoded
      font-family, no second typeface
- [ ] Icons come from `react-bootstrap-icons` only
- [ ] Corners are rounded per the radius rules — nothing square
- [ ] Heading uppercase + lowercase orange eyebrow; no dead links
- [ ] No `rounded-*` classes — everything is square-cornered
- [ ] No `shadow-*` anywhere
- [ ] Buttons and links are `Action`, not hand-rolled
- [ ] Section padding comes from `Section`/`SECTION_Y`; grids are 2 or 4 columns
- [ ] Scroll motion is `data-reveal`/`data-parallax`, nothing hand-rolled
- [ ] Nothing is hidden behind hover (hover is desktop-only)
- [ ] Mobile-first: check the component actually reads correctly at ~375px, not just
      patched down from a desktop layout

## Output
- Pass / Fail per check
- Specific lines to fix
- Fixed version of component
