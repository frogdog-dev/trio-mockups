# TCA Hero — FULL SWAP to Courtney's top hero

## Decision (Adam, explicit)
Replace our page's ENTIRE top hero (`#top`) with a faithful reproduction of **Courtney's top-of-page hero**, then keep the rest of OUR body sections. "Full swap — the entire thing." Adam wasn't in love with the "married" hero I built; Courtney clearly focused her energy on this hero and will death-of-a-thousand-cuts us back to it, so we adopt it. Also do a **sanity/tighten pass under the hood** — clean implementation, no cruft. "Make the back dark" = her dark gradient background (below).

## Ground truth (LOOK AT THESE)
- Full render of her top hero: `/Users/adamblak/Documents/Claude/Projects/Trio/ahsa/deliverables/_qa/her-anim/her-TOP-viewport.png` — match this.
- Her exact hero section markup (rendered outerHTML): `/Users/adamblak/Documents/Claude/Projects/Trio/ahsa/deliverables/_qa/her-anim/her-hero-section.html` — use for structure/copy/order.
- Her computed styles: `.../her-hero-styles.json`.

## Her hero = what to reproduce (dark, split)
**Background:** `linear-gradient(155deg, #1b232a 0%, #123a44 58%, #1b4438 100%)` (dark slate→teal→green) + a faint large hexagon motif (low-opacity, top-right) + a very subtle dark-overlaid photo bleed on the right (person-at-laptop feel). Photo is OPTIONAL — if a suitable hero photo already exists in `assets/`, use it under a heavy dark overlay; otherwise skip the photo and keep gradient + hex only (do NOT download/invent images).

**Left column:**
- Breadcrumb (light, muted): "Digital Workers / Timecard Auditor".
- Pill (dark, rounded, subtle border): hex mark + "TRIO DIGITAL WORKER" + a divider + green-dot "LIVE IN PRODUCTION".
- H1 (white, Archivo, big): "Every timecard, audited before the spend clears." (same as ours).
- Subcopy (light gray): "The Timecard Auditor reviews every time and expense submission against your contracted rates, differentials, and overtime rules, flagging out-of-policy charges before they hit payroll and surfacing only the exceptions that need a person." (NO em dash — use commas.)
- CTAs: [Request a demo] (solid orange) + [See how it works →] (outline, light border on dark).
- **Stat row (3):** `$2M+` verified savings (cyan `--teal`/`--brand-cyan`) · `$291K` caught before payment (orange `--brand-orange`) · `~8 min` to audit a full timecard (green `--brand-green`). Big number + small caption under each. Tag these ILLUSTRATIVE consistent with the page concept-note (numbers pending marketing sign-off) — a small "illustrative" note near the stat row is fine.

**Right column — the animated "Timecard Auditor" card (dark card, rounded, subtle border/shadow):**
- Header row: the **orb** (teal circle, eyes, small orange dot on top = the "floating" bot Adam loves — KEEP the orb, place it here in the header) + "Timecard Auditor" (white, bold) + green-dot "LIVE" + subtext line that cycles the current action in cyan ("Assessing submission" → "Checking overtime rules" → "Flagging exception" → "Routing to a person" → "Caught before payout").
- Inner WHITE card: label "TIMECARD #48213"; rows: `Shift · Aug 12 … 8.0h`, `Shift · Aug 14 … 12.5h`, **`Overtime · Aug 15`** [status badge that cycles: Assessing(cyan) → Checking(cyan) → ⚑ Exception(orange) → → Reviewer(orange) → ✗ Caught(red/redorange)] (this row highlighted/outlined), `Shift · Aug 18 … 8.0h`.
- Card footer: left "AUTONOMOUS" … right "HUMAN-REVIEWED" (small caps, muted), with a subtle progress/track between if easy.
- Below the card: a pill "● Running live inside Trio VMS — auditing time & expense across the supplier panel." (use a comma or keep her copy; green dot).

**Animation (KEEP IT HER-SIMPLE — this is a tighten, not the elaborate modal story):** one orb + the single Overtime row cycling its status badge in sync with the header subtext, ~2.2–2.6s/beat, ~5 beats, looping. The orb reacts (assessing→checking→attention→caught/settle). NO tabs, NO review modal, NO caption strip, NO payoff modal — those belong to her mid-page See-it-work, not this hero. Reuse our existing polished orb CSS (`.orb`, lines ~78–142 of index.html) for the bot; simplify to the assessing cycle.

## Build target
- File: `/Users/adamblak/Documents/Claude/Projects/Trio/ahsa/deliverables/_unified/timecard-auditor/index.html`. Replace the entire `#top` hero section (currently the "married" hero) with this. Read the current hero + orb CSS + orb-driving JS first; reuse the orb, delete the now-dead married-hero JS/CSS (tabs, modal, captions, payoff ribbon) so nothing is orphaned. This is the "under the hood" tighten.
- Keep ALL other sections below untouched (#problem, #audits, #see, #how, #changes, #trust, #maturity, #demo, #faq). NOTE: our body may already have a "see it work" animated area — leave it; it's a different treatment and no longer duplicates the hero (the hero is now the simple assessing card).
- **Seam:** the hero is dark; the first body section below is light. Ensure a clean transition (no diagonal-bleed artifact; a crisp edge or a subtle dark→light band). Audit for the diagonal-seam bug we've hit before.

## Guardrails (non-negotiable)
- Brand tokens ONLY from site.css :root — map her Open Sans/--trio-blue/--color-* to OURS: text teal/ink, --teal #009fc7, --teal2 #005e78, --brand-cyan #00aae5, --brand-orange #f58220, --brand-redorange #f05523, --brand-green #79bb43, --brand-lime #a6ce42, --deep #152d38. Headlines Archivo, body Inter. Match her LOOK but in our type + tokens. The dark gradient hues above (#1b232a/#123a44/#1b4438) are on-brand deep/teal/green — fine to use directly (or via --deep + teal/green mixes).
- All motion behind `@media (prefers-reduced-motion: no-preference)`; reduced-motion rests on a legible still state (row = caught, orb calm). Decorative animation `aria-hidden="true"`; card carries a descriptive aria-label.
- IntersectionObserver pause offscreen.
- Mobile ≤600px: stack (headline+stats, then card), card + rows legible, orb clear of text, decorative bits hidden if cramped. Test 390px.
- Don't touch site.css. Don't touch other pages. Don't add off-brand colors.

## Verify (frogdog-web-prototype §8–9)
Render harness (puppeteer-core → Chrome, headless:'new', force `.reveal,.stagger`→`.in`, threadAll if present). Base pattern: `deliverables/hero-cinematic-v2/_render/shot_tca.js`. Capture: hero at 3–4 animation beats (assessing / exception / caught) desktop, reduced-motion frame, mobile 390px, and a full-page-top shot showing the dark→light seam. Save to `deliverables/_unified/_qa/timecard-auditor/`. Read your own shots. Run the MANDATORY 3-art-director red-team (brand fidelity vs her hero + our system / motion / editorial), iterate to unanimous APPROVE. Zero console errors. DO NOT deploy — hand back for Adam's review + deploy.
