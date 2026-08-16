# Motion System — MV Custom Builders

## Philosophy
Motion is restrained and functional — this is a trade-craft brand (sturdy, honest, precise),
not a startup. If a page reads fine with an animation removed, cut the animation. What motion
does here is give weight to scrolling: things settle into place, photography drifts against
the scroll, nothing bounces or spins.

**GSAP is the animation library.** `gsap` (with `ScrollTrigger`, free since 3.13) is
installed and is the only one. Don't add Framer Motion, Lenis, AOS, or Three.js on top of it,
and don't hand-roll IntersectionObserver reveal code — `ScrollRevealInit` already covers it.

---

## The One Entry Point — `<ScrollRevealInit />`

`components/ui/scroll-reveal-init.tsx` is a client component that renders nothing and wires
every scroll effect on the page. Render it once, at the top of a page component:

```tsx
export default function SomePage() {
  return (
    <>
      <ScrollRevealInit />
      ...
    </>
  );
}
```

Then mark elements declaratively — no per-component GSAP code, no refs:

```
data-reveal                     fade + 28px lift in, 0.7s power2.out, when the element
                                 hits 88% viewport height. Elements that enter together
                                 stagger 0.08s apart automatically (ScrollTrigger.batch).

data-parallax                   scroll-linked drift: the element travels from -strength%
data-parallax-strength="10"      to +strength% of its own height while its parent passes
                                 through the viewport. Default strength 12. Scrubbed, so
                                 it tracks the scrollbar exactly.
```

### Parallax markup requirement
A parallaxed image needs vertical slack or the drift exposes an edge. Oversize the moving
wrapper and clip it on the parent:

```tsx
<div className="absolute inset-0 overflow-hidden">
  <div data-parallax data-parallax-strength="10" className="absolute -inset-y-[14%] inset-x-0">
    <Image src="..." alt="" fill priority sizes="100vw" className="object-cover" />
  </div>
</div>
```

`-inset-y-[14%]` gives more slack than the 10% travel, so the photo always covers the frame.

---

## Reduced Motion & No-JS

Everything runs inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, and the
`gsap.set()` that hides `[data-reveal]` elements lives inside that same block. So:

- **No JS** → nothing is ever hidden; the page renders complete and static.
- **Reduced motion** → nothing is hidden or moved; no reveal, no parallax.
- **Motion allowed** → elements hide the instant GSAP initialises, then reveal on scroll.

Never move the hiding step into CSS — that's what makes the no-JS path safe. And never
`data-reveal` above-the-fold hero content: first paint must be readable immediately. The hero
*photo* may parallax; the hero *text* never reveals.

---

## Rules
- No animation on initial paint above the fold.
- No looping animations on primary content.
- Hover/focus transitions stay `0.2s`–`0.3s`, colour and border only (image scale on a
  portfolio card is the one allowed transform, `duration-700`).
- Hover is desktop-only by construction — Tailwind v4's `hover:` variant compiles to
  `@media (hover: hover)`, so it never fires on touch. Never put content or an affordance
  behind hover; on mobile there is no hover state at all.
- Interactive states need a visible, non-animated focus indicator. Motion is never a
  substitute for accessible state.

## Hover States (existing pattern)
```tsx
// Button — background/color transition, no transform/scale gimmicks
className="bg-mvcb-orange hover:bg-mvcb-orange-strong transition-colors"

// Card — border colour only
className="border border-mvcb-line transition-colors duration-300 hover:border-mvcb-orange"
```
