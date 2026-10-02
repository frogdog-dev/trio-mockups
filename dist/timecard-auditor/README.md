# Timecard Auditor — HubSpot release package (2026-10-02)

Courtney's approved Timecard Auditor page, cleaned for the HubSpot build. Same page that's on trio.frogdog.io/timecard-auditor/, with the review bar, concept banner and Atarim script removed.

## What's in here
- `timecard-auditor/index.html` — the page. All page-specific CSS and JS is inline in this one file.
- `timecard-auditor/img/trio-logo-white.png` — footer logo.
- `assets/css/site.css` — shared Trio styles (same file the other dist pages use).
- `assets/trio-logo-stacked.png` — header logo.

No build step, no framework, nothing external except Google Fonts.

## Page sections (in order)
1. `#top` Hero — dark band with the animated auditor widget (inline JS, plays on load, respects reduced motion).
2. `#problem` The problem — leak list.
3. `#audits` What it audits — catalog of checks.
4. `#see` See it work — interactive demo. Runs on a small inline runtime (`DC.define(...)`) and a `<template id="dc-tpl-see">`. Keep the template and both scripts together.
5. `#how` How it works — 3-step flow.
6. `#changes` What changes — dark stat band + case-study card ($2M / $291K).
7. `#trust` Built on trust — 3 principle cards.
8. `#maturity` Manual / Assisted / Autonomous.
9. `#demo` Final CTA — button opens a form in place.
10. `#faq` FAQ.

## To do in HubSpot
1. Use the site's global header and footer. The nav/footer in this file are for preview only (some links still use the old `/solutions/...` paths).
2. Wire the final CTA form (`#ctaForm`) to a HubSpot form. Right now it only validates and shows the thank-you state; it doesn't submit anywhere.
   - Fields: first name, last name, work email, health system, title (optional).
   - Thank-you text on the page: "We'll be in touch within one business day to schedule your session."
   - Tracking: once it's a HubSpot form, it can be set up as a Google Ads conversion event in HubSpot Ads like the others.
3. Remap relative links: `../mi/` → `/platform/market-intelligence`, `../home/` → `/`, `../digital-worker/` → the Digital Workers page.
4. The Digital Workers parent page isn't live yet (`https://www.triowfs.com/digital-workers/` returns 404). Point those links at the real URL once it exists.
5. Add a meta description. The page has a title and JSON-LD (Organization, SoftwareApplication, FAQPage) but no meta description.
6. The dollar figures in the "See it work" demo are illustrative sample data.

## Checked before packaging
- Loads with no console errors and no missing files at 1440px and 375px.
- No review chrome left in the file.
- CTA button opens the form; an empty submit is blocked.
