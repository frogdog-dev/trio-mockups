# Trio concept pages - handoff for Will (2026-09-01)

## What this is
Four clickable, self-contained concept pages plus a review-hub landing page, all sharing one assets/ folder. Pure static HTML/CSS/vanilla-JS - no build step, no framework, no server needed. Serve the folder root on any static host.

## Structure
- index.html          review hub (links to all four pages)
- home/               Homepage concept
- mi/                 Market Intelligence  (LAUNCH PRIORITY)
- digital-worker/     Digital Workers
- applied-ai/         Applied AI (AI Approach)
- assets/             shared site.css, JS, images, the MI hero map SVG
- _headers            Netlify-style headers (ignore if not on Netlify)

## Cross-page navigation
Each page's top nav links across all four, so hosting the whole folder keeps them wired together.

## The MI hero animation
Self-contained inline JS in mi/index.html. ~16s narrated cinematic that plays ONCE on load and settles on a centered end card; a small circular replay control (bottom-right of the dashboard) re-runs it. Fully reduced-motion safe. Nothing external to load.

## What we need from you
1. Host this folder on the new staging environment.
2. Apply the comment / issue-tracker widget overlay on top.
3. Keep the cross-page nav toggle intact.

## Still-pending (client side, not blockers to hosting)
- Persona card photography (Amy is sending non-creepy stock).
- Clean re-export of the MI product screenshot (its baked-in "2026-0" axis label and "Solution" footer typo are inside the client screenshot, not our markup).

Questions -> Adam.
