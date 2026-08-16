# Code Standards — MV Custom Builders

## Rules That Are Not Negotiable
- TypeScript. No `any` without a comment explaining why.
- `next/image` for every image. No `<img>` tags.
- `next/font` for every font (already wired: Plus Jakarta Sans via `next/font/google` in
  `app/layout.tsx`). No CDN font links, no `<link rel="stylesheet">` to Google Fonts, no
  second typeface.
- CSS custom properties / Tailwind tokens for design values. No hardcoded hex in component
  files — use `bg-mvcb-orange`, `text-mvcb-black`, etc. or the shadcn neutral utilities.
- Accessibility: every interactive element is keyboard-navigable, with a visible focus state.
- No JS animation library (GSAP/Framer Motion/etc.) unless a real need can't be done in CSS +
  `tw-animate-css` — see `.claude/standards/motion-system.md`. Don't add one speculatively.

---

## File Naming
Follows the shadcn/Next.js convention already established in this repo — lowercase
kebab-case filenames, PascalCase exported component names:
```
components/ui/action.tsx              export default function Action
components/ui/input.tsx               export function Input
components/ui/under-construction.tsx  export default function UnderConstructionBlock
app/page.tsx                          App Router convention
app/layout.tsx                        App Router convention
lib/utils.ts                          camelCase for utils
```
Don't switch to PascalCase filenames (`Button.tsx`) — it would be inconsistent with every
file already in the repo and with new shadcn CLI output.

## Component Structure
```tsx
"use client"; // only if the component needs interactivity/state — server component by default

import { useState } from "react";

import Action from "@/components/ui/action";
import { cn } from "@/lib/utils";

interface ExampleProps {
  title: string;
}

export function Example({ title }: ExampleProps) {
  const [open, setOpen] = useState(false);

  return <section>{/* content */}</section>;
}
```
Server Components by default (no `"use client"`) — only opt into client components when
state, effects, or event handlers actually require it, matching
`components/ui/under-construction.tsx` (client, for the email form) vs. `app/page.tsx`
(server, just renders it).

## Accessibility Requirements
- `<html lang="en">` — already set in `app/layout.tsx`.
- All images: meaningful, specific `alt` text (or `alt=""` only for truly decorative images).
- Color contrast: verify AA for any new orange-on-black/orange-on-white text pairing.
- `prefers-reduced-motion`: handled centrally by `ScrollRevealInit`'s `gsap.matchMedia`
  block. Any animation outside it still needs its own guard.
- Focus indicators: never remove `outline`/`focus-visible` styling without replacing it.
  `Action` uses `focus-visible:outline-2 outline-offset-2 outline-mvcb-orange-strong` — an
  outline, not a ring, because rings are box-shadows and the site ships none.
  `Input`/`Textarea` keep their shadcn focus styling.
- Semantic HTML: `<nav>`, `<main>`, `<section>` — not everything is a `<div>`.
- Form fields: a real `<label>` (visually hidden with `sr-only` is fine, see
  `under-construction.tsx`'s email field) — never a placeholder used as the only label.

## Performance Patterns
```tsx
// Lazy-load anything genuinely heavy (not needed yet — nothing in this codebase
// currently warrants it, but the pattern is standard Next.js if it comes up):
const Heavy = dynamic(() => import("@/components/heavy"), { ssr: false });
```
- Images: `next/image` with `fill` + `object-cover` inside an aspect-ratio container, `priority`
  only on the actual LCP image (matches the coming-soon hero).
- No dependency added for something a few lines of Tailwind/CSS already solves.

## State Management
- Local UI state: `useState` (matches `under-construction.tsx`'s form state).
- No Redux, no Zustand, no global state library — nothing in this small marketing site needs
  it. Add one only if a real cross-page state need appears.
- Forms: plain controlled inputs + `@emailjs/browser` for submission (already the pattern in
  `under-construction.tsx`) — no React Hook Form or form library unless a form gets
  meaningfully more complex than a couple of fields.

## Error Handling
Match the existing pattern — a plain `try/catch` around the async call, a status state drives
a user-visible message:
```tsx
try {
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload);
  setStatus("success");
} catch {
  setStatus("error");
}
```
Client-visible error copy stays plain and specific (see `under-construction.tsx`: "Something
went wrong — please try again or call us directly."), not a generic "An error occurred."

## Git Commit Convention
```
feat: add services page
fix: correct mobile crop on hero image
perf: reduce hero image size
a11y: add missing label to contact form field
style: align button hover state with design-system.md
```
