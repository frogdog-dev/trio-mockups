# The Workforce Is Yours (displacement) — HubSpot release package (2026-10-05)

Courtney approved this page for the HubSpot build on 10/2. It's the page on trio.frogdog.io/displacement/ with the review bar, concept banner, review-only CSS and Atarim script removed.

## What's in here
- `displacement/index.html` — the page. All markup, page logic and styles are in this one file.
- `displacement/ds/` — design tokens + base styles the page loads (`ds/tokens/*.css`, `ds/styles.css`). Fonts come from Google Fonts (Open Sans) via `ds/tokens/fonts.css`.
- `displacement/img/` — logos and the four PEAK badges (600px web copies).

## How the page is built
- Courtney's Claude Design mockup, ported as-is. The markup lives in `<template id="dc-tpl-main">` and `<template id="dc-tpl-ModelComparison">`, rendered by a small inline runtime (`DC.define(...)` / `DC.mount(...)`) into `<div id="dc-root">`.
- Keep the two templates and the inline scripts together. Edit copy inside the templates.
- The quiz scoring is frozen. Don't change the logic in the `main` component's script.

## To do in HubSpot
1. **Lead capture.** There are two capture points, and both only `console.log('[CRM capture]', ...)` right now:
   - the form before the score (`reveal()`), and
   - the form behind the bottom "Book your free assessment" button (`bookDirect()`).
   Send both to a HubSpot form or the Forms API. Fields: firstname, lastname, email, company.
2. **Quiz result fields.** Every result is in `window.wiyAssessment` and in hidden inputs named `wiy_*` (model type, control index, exposure tier, capped flag, concentration %, annual spend, the three answers, the four point scores, meeting slot, assessment date). Chris needs to create these as HubSpot contact properties. Then send them with the submission.
3. **Booking calendar.** The Step 3 calendar and time slots are a front-end mockup (Central Time, sample slots). Swap in the HubSpot meetings link or embed for the right rep or team.
4. **White paper form** ("10 Questions to Ask Before Your Next MSP Renewal") only shows a thank-you message. Wire it to a HubSpot form. The PDF from Jesse is still needed.
5. **IP lookup.** The pre-score form calls `api.ipify.org` for the visitor's IP. Keep it or remove it (Trio's call). HubSpot already records IP and geo.
6. **Header and footer.** Use the site's global header and the main triowfs.com footer (Courtney asked for the main footer). The ones in this file are for preview.
7. **Conversions.** Once the forms are HubSpot forms, Carley can add them as Google Ads and LinkedIn conversion events in HubSpot Ads.

## Content notes
- The dollar figures in the quiz results are illustrative (the page's own disclaimer says so).
- PEAK copy reads "Everest Group 2025 and 2026 VMS and MSP PEAK Matrix®" per Courtney.

## Checked before packaging
- Quiz parity (10 scoring cases, including capped bands), gate, booking flow, bottom CTA form, PEAK logos, phone widths: all automated checks pass on the source page.
- This clean copy loads with no console errors and no missing files at 1440px and 375px.
