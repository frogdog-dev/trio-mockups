# dist/ — production finals for HubSpot conversion

Cleaned exports of the approved Trio concept pages, generated from `_unified/` with all review-only chrome removed (concept chooser nav, "design draft" banner, Atarim script, and dead CSS). Real Trio nav/footer + content preserved.

## Pages
- `home/`, `mi/` (Market Intelligence), `digital-worker/`, `applied-ai/` (AI Approach), `brand/` (internal reference)

## Notes for the HubSpot pass
- Internal cross-links are relative (`../mi/`, `../home/`) — remap to real URLs on import.
- External nav links already point to `https://www.triowfs.com/...`.
- MI persona photos are real (`mi/assets/persona-*.jpg`); MI product image at `mi/assets/mi-ui-live.png`.
- Shared styles/JS: `assets/css/site.css`, `assets/js/site.js`.
