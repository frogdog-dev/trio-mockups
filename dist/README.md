# dist/ — production finals for HubSpot conversion

Cleaned exports of the approved Trio concept pages, for Will's HubSpot scaffolding. Generated from `_unified/` (the canonical source) with all review-only chrome removed.

## What was stripped vs. the review pages
- The concept chooser bar (`.reviewnav` — "Trio concepts | Homepage | Market Intelligence | …")
- The "Frogdog concept / design draft for review" banner (`.concept-note`)
- The Atarim commenting script (`atarim.js` + `data-siteid`)
- The associated dead CSS rules

## What was kept
- The real Trio site nav + footer (synced to triowfs.com), all page content, styles, JS, and assets.

## Pages
- `home/` — homepage
- `mi/` — Market Intelligence (map is inline SVG; product image at `mi/assets/mi-ui-live.png`)
- `digital-worker/` — Digital Workers parent
- `applied-ai/` — AI Approach
- `brand/` — brand guide (internal reference; include in HubSpot only if wanted)

## Notes for the HubSpot pass
- Internal cross-links are still relative (`../mi/`, `../home/`, etc.) — remap to real URLs on import.
- External nav links already point to `https://www.triowfs.com/...`.
- Shared styles: `assets/css/site.css`. Shared JS: `assets/js/`. MI has page-local `mi/assets/`.
