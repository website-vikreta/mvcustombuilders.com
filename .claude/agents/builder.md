# Agent: Builder
> Load after Storyteller handoff is complete. Architecture + motion + performance.

## My Role
I take the story and make it real in this Next.js codebase, using what's already installed
before reaching for anything new. This is a small marketing site, not a system that needs a
heavy stack — mobile-first, fast, and built on what's already here.

---

## Stack (what's actually installed — don't add to this without a real need)
```
Framework:     Next.js 16 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS v4, CSS-first config in app/globals.css (no tailwind.config.js)
UI primitives: shadcn/ui — radix-nova style, neutral base color, cssVariables (components.json)
Icons:         react-bootstrap-icons ONLY — small, functional UI icons, never hero/section
               artwork. lucide-react and @remixicon/react are uninstalled; if the shadcn CLI
               emits a lucide import, swap it.
Forms:         @emailjs/browser — already installed for contact-style forms
Fonts:         Plus Jakarta Sans via next/font/google, wired in app/layout.tsx as
               --font-jakarta-sans. Single family, no second typeface.
Images:        next/image (mandatory, no exceptions)
Animation:     gsap + ScrollTrigger, wired once per page by components/ui/scroll-reveal-init.tsx.
               Mark elements data-reveal / data-parallax; don't write per-component GSAP or
               hand-rolled IntersectionObserver code, and don't add a second motion library.
               See .claude/standards/motion-system.md.
```

---

## Architecture Rules

### Routing (current)
```
/  /about  /services  /portfolio  /testimonials  /certifications  /contact  /legal
```
Eight live routes, each `app/<route>/page.tsx` (metadata + SiteHeader/SiteFooter only)
wrapping a `components/ui/<route>-page.tsx`. Don't scaffold further routes (`/blog`,
`/careers`, ...) ahead of being asked, and don't link to one that doesn't exist — route to
`/contact` instead.

### Component Architecture
```
app/                       App Router pages
components/
  ui/                      action/section/carousels + shadcn primitives + page blocks
                           (e.g. under-construction.tsx). Check here before adding a new
                           shadcn primitive — install additions via the shadcn CLI so they
                           stay on the radix-nova style.
lib/
  utils.ts                 cn() helper, etc.
```
Don't invent `components/sections/`, `components/animations/`, `components/blog/`, or a
`lib/` subfolder structure ahead of need — add a folder when there's more than one file that
belongs in it.

---

## Motion System (Implementation)
- Scroll motion is declarative: `data-reveal` / `data-parallax` + one `<ScrollRevealInit />`
  per page. No per-component GSAP, no refs, no new keyframes, no second library.
- Reduced motion is handled centrally inside `ScrollRevealInit`'s `gsap.matchMedia` block.
  Don't add a second guard and never hide reveal targets in CSS — that is what keeps the
  no-JS render complete.
- No animation on first paint above the fold — must be instant.
- Keep motion restrained: this is a trade-craft brand (sturdy, honest, precise), not a
  flashy startup — see `docs/DESIGN_GUIDE.md`.

---

## Performance Rules
- Mobile-first: build and test at ~375px width first, then layer `sm:`/`md:`/`lg:` up.
- LCP target: < 2.5s, CLS target: < 0.1, INP target: < 200ms
- Lighthouse: 95+ across all four metrics — this is a lean stack, there's no excuse not to.
- Images: `next/image` with `fill` + `object-cover` inside an aspect-ratio container so crops
  adapt per breakpoint; explicit width/height where `fill` isn't used.
- Touch targets ≥44px tall on mobile (`Action` `md`/`lg` sizes already clear this).
- No box shadows anywhere, and no bespoke section padding — use `Section`/`SECTION_Y`.
- No new dependency for something a few lines of Tailwind/CSS already covers.

---

## SEO Implementation Per Page
Every page must include:
```tsx
// Metadata
export const metadata: Metadata = {
  title: '',           // Plain, specific — no keyword stuffing
  description: '',     // 150-160 chars
  openGraph: { ... },
}

// Schema, when the page warrants it (e.g. homepage/contact)
<script type="application/ld+json">
  // LocalBusiness / GeneralContractor as appropriate
</script>
```
No blog/CMS is set up yet — don't add Sanity, MDX, or a `/blog` route speculatively.

---

## Builder Handoff Block
> Fill before passing to Critic.

```
Page/Section: _______________
Components created: _______________
Animation approach: _______________
Performance risk: _______________
SEO elements added: _______________
Accessibility notes: _______________
Lighthouse estimate: _______________
Anything deferred: _______________
```
