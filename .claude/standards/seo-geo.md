# SEO Standards — MV Custom Builders

## The Thesis
A construction company selling trust needs to be findable and to read as credible the moment
someone lands — real local search and a title tag matter more here than chasing AI-answer
citations. No blog/CMS is installed or planned yet, so skip GEO/content-marketing tactics
(glossaries, "what is X" posts, tool-comparison pages) that assume a blog — they're not
relevant to a single-page brochure/coming-soon site.

---

## Technical SEO Checklist (Every Page)

### Meta
```tsx
export const metadata: Metadata = {
  title: '',           // Plain, specific — company name + what we do, not keyword-stuffed
  description: '',     // 150-160 chars, written for humans
  openGraph: {
    title: '',
    description: '',
    url: '',
    siteName: 'MV Custom Builders',
    images: [{ url: '/og/[page].jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}
```
Current `app/layout.tsx` metadata:
```
title: "MV Custom Builders"
description: "MV Custom Builders renovates old homes and historic buildings."
```
Extend per-page metadata as real pages are added — don't leave every route sharing the root
layout's generic title/description once there's more than one page.

### Schema Markup
The relevant type for this business is `GeneralContractor` (a subtype of `LocalBusiness`),
not the generic `Organization` schema a services/agency site would use:
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "MV Custom Builders",
  "description": "MV Custom Builders renovates old homes and historic buildings.",
  "url": "https://mvcustombuilders.com"
}
```
Add `address`, `areaServed`, `telephone`, and `sameAs` (social profiles) once those are
confirmed — see `.claude/context/business.md` "Not Yet Confirmed." Don't fabricate a service
area or phone number to fill the schema out early.

---

## Content SEO Rules

### URL Structure
```
/services/[specific-service]     Good — e.g. /services/historic-restoration
/services/service-1              Bad
```

### Heading Hierarchy (Every Page)
- One `<h1>` only.
- `<h2>` for major sections, `<h3>` for subsections.
- Never skip levels (h1 → h3 is wrong).

### Image SEO
```tsx
<Image
  src="/images/[descriptive-filename].webp"
  alt="[Real, specific description — the material/scope shown, per docs/DESIGN_GUIDE.md]"
  fill
  className="object-cover"
/>
```
Matches the existing pattern in `under-construction.tsx` — its hero image alt text
("Three builders on ladders installing metal siding over house wrap on a home exterior.")
is the bar: specific, not generic.

---

## Core Web Vitals (SEO Ranking Signal)
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |

Matches the performance floor in `.claude/agents/builder.md` — these aren't a separate SEO
budget, they're the same numbers.

---

## Sitemap + Robots
Not yet set up — add `app/sitemap.ts` / `app/robots.ts` (Next.js App Router's built-in
convention) once there's more than one real route. Not needed for a single coming-soon page.
