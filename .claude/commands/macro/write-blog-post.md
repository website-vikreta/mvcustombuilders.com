# Command: /write-blog-post
> SEO-optimized blog post pipeline.

**Note:** No blog or CMS exists in this codebase yet (see `.claude/context/session.md` — the
site is currently a single coming-soon page). This command is here for if/when a blog gets
built. Don't scaffold `/blog` routes or content just because this command exists — use it
once a blog is actually part of the scoped work.

## Inputs Required
- Topic / working title
- Target keyword (primary)
- Secondary keywords (2-3)
- Content goal: (local search ranking / lead gen)

---

## Step 1 — Keyword Intelligence
Before writing, define:
- Primary keyword + search intent (informational / commercial)
- Realistic for a local trade business: think "historic home renovation [city]," not
  broad national keywords a small contractor site won't rank for.

---

## Step 2 — Structure First
Load: `.claude/standards/seo-geo.md`

Define the outline:
```
H1: [Primary keyword in question or statement form]
Meta description: [150-160 chars]
Intro: Direct answer paragraph (2-3 sentences, no preamble)
H2: [Section 1 — core concept]
H2: [Section 2 — deeper detail, specific to old/historic-home work]
H2: [Section 3 — practical application or examples, real project detail if available]
CTA: [Link to contact / relevant page]
```

---

## Step 3 — Write
Voice rules from `.claude/context/brand.md`:
- Name the worry. Don't soften it.
- No jargon before outcome.
- Specific beats vague — the material, the era, the actual scope, not a generic claim.
- Plain, confident trade language ("built to last," "restored, not replaced") — never
  marketing-agency phrasing.

---

## Step 4 — SEO Checklist
Before finishing:
- [ ] Primary keyword in H1, first paragraph, one H2, meta description
- [ ] Secondary keywords distributed naturally (not stuffed)
- [ ] Images: descriptive filenames + real, specific alt text
- [ ] `GeneralContractor`/`Article` schema ready per `.claude/standards/seo-geo.md`

---

## Frontmatter Format
```md
---
title: ''
description: ''
publishedAt: 'YYYY-MM-DD'
updatedAt: 'YYYY-MM-DD'
category: ''
tags: []
---
```
