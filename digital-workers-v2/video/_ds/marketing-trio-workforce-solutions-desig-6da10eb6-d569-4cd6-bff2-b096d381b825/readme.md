# Trio Workforce Solutions — Design System

A brand + product design system for **Trio Workforce Solutions (TrioWFS)** — the only
**Vendor Management System (VMS) purpose-built for U.S. healthcare** contingent
staffing. Trio operates under **American Health Staffing Group (AHSG)**.

This system encodes Trio's brand foundations (logo, color, type, spacing),
reusable React UI primitives, and high-fidelity recreations of the real Trio
products, so any agent can generate on-brand interfaces, decks, and assets.

---

## Company & product context

Trio VMS manages the full contingent-workforce lifecycle for hospitals and health
systems — nursing, allied health, locums, per diem, float pools, and credentialing.
Where generalized VMS platforms are retrofitted for healthcare, **Trio is built for
clinical work from the ground up**. It earned **Star Performer + Major Contender** in
the Everest Group VMS PEAK Matrix® for two consecutive years (2025, 2026).

**Products represented in this system:**
- **Trio VMS** — the web platform. Programs, recruiting, jobs, submissions, shifts,
  billing, IRM (Internal Resource Management), and a task dashboard. *(see `ui_kits/trio-vms/`)*
- **Trio Market Intelligence** — a dark, Power-BI-style analytics dashboard of bill-rate
  data by region, profession, and facility size. *(see `ui_kits/trio-market-intelligence/`)*
- **Trio AI** — Submission Evaluator, Timecard Auditor, Market Intelligence, and a
  Digital Worker Framework (surfaced inside the VMS).
- **Trio Shifts** — the worker mobile app. *No source screens were provided, so it is
  not recreated here (flagged below).*

### Sources used to build this system
- `uploads/trio ws logo guidelines.pdf` — official logo + color spec (PMS/CMYK/RGB).
- `uploads/ELT Readout_2026_PEAK_VMS_Executive_Summary.pptx` — contains the real
  **Trio VMS dashboard** and **Market Intelligence** product screenshots + brand color usage.
- `uploads/What_Is_a_PMM_2.pptx` — product-marketing deck; established the deck/slide
  style and the **Open Sans** brand typeface.

Extracted product screenshots are kept in `assets/reference/` for fidelity checks.

---

## CONTENT FUNDAMENTALS

How Trio writes. The voice is **confident, plain-spoken, and revenue-focused** — a
specialist talking to professionals, never hype.

- **Person & address.** Direct second person to the reader ("How partnering with PMM
  helps **you** win"), first person for the speaker ("**I'm** here to scale the Trio
  story"). Marketing/product copy uses an organizational "we" ("**we** are advancing
  through it").
- **Tone.** Assertive but evidence-led. Claims are backed by proof ("cited by Everest
  as delivered capabilities, **not roadmap promises**"). Confidence without bragging.
- **Sentence rhythm.** Short declaratives for impact, often as fragments for emphasis:
  *"Two years. Two charts. Same result."* / *"Built for Healthcare, Not Adapted."*
- **Casing.**
  - **Uppercase eyebrow labels** above almost every section — short, tracked-out:
    `WHAT IS A PMM?`, `THE TAKEAWAY`, `COMPETITIVE INTELLIGENCE`, `2ND CONSECUTIVE YEAR`.
  - **Title Case or sentence case** for headings.
  - Sentence case for body.
- **Framing devices.** "Bottom line:", "The Takeaway", "For you:", "Where we go from
  here" — explicit reader signposts. Numbered lists (`01 02 03 04`) for agendas and
  ranked points.
- **Vocabulary.** Healthcare-staffing domain language used precisely: *contingent
  workforce, credentialing, privileging, float pools, locums, per diem, bill rate,
  IRM, submission, requisition, supplier.* Product features are branded nouns: *Trio AI
  Submission Evaluator, Timecard Auditor, Market Intelligence, Digital Worker Framework.*
- **Emoji:** none. Not part of the brand. Don't introduce them.
- **Symbols.** `®` on "PEAK Matrix®"; `™` on the Trio wordmark; `&` acceptable in short
  labels ("AI & Automation"); `•` as a metadata separator on covers.

**Do:** lead with the proof, name the buyer outcome, keep it tight.
**Don't:** add adjectives where a number works, hedge, or pad with filler.

---

## VISUAL FOUNDATIONS

The brand is literally **"trio"** — three interlocking hexagons in **green, blue, and
orange**, anchored by a **slate** wordmark. That trio of colors + slate IS the palette.

- **Color.** See `tokens/colors.css`. Brand core: Trio Green `#79BB43`, Trio Blue
  `#0081BB` (Process Blue), Trio Orange `#F58220`, Trio Slate `#455560`. Each hex has a
  light/deep pair (the logo's two-tone fill). **Process Blue is the product's primary
  interactive color**; orange is the accent/attention/CTA color; green = success;
  a derived pink-red `#d64550` = danger/past-due. Neutrals are a 13-step slate ramp.
  Use brand colors and the ramp — don't invent new hues. The product UI is restrained:
  mostly white + slate + one blue, with color reserved for status and data.
- **Two themes.** Light (the VMS app — `--surface-page #f4f6f7`, white cards, slate top
  bar) and **Dark** (Market Intelligence — `--surface-dark #1b232a` panels with **mint-green
  `#7fe3a0` KPI figures**). The dark theme is data-viz only; don't use it for marketing.
- **Type.** **Open Sans** everywhere (the decks' theme font). Semibold (600) for
  headings, Regular (400) for body, Extrabold (800) for big numerals. Product UI base is
  a compact **14px**; decks/marketing scale large (36–68px). Uppercase tracked eyebrows
  at 11–14px. See `tokens/typography.css`.
- **Spacing & layout.** 4px base scale. App chrome: 56px top bar, 240px left rail.
  Content sits on cards over a light-gray page. Generous white space; nothing cramped.
- **Corners.** Soft, not pill-everything: inputs 4px, buttons/badges 6px, cards/panels
  8px, modals 12px. Status labels and toggles are full pills.
- **Cards.** White, 1px subtle border (`--border-subtle`), 8px radius, **soft cool-gray
  shadow** (`--shadow-sm`, never pure black). KPI tiles add an icon-led label, a big
  Extrabold figure, a stat breakdown, and an optional segmented progress bar.
- **Shadows.** Cool-gray, low-opacity, layered (`tokens/spacing.css`). Elevation rises
  xs → modal. Avoid harsh or colored drop shadows.
- **Borders & dividers.** Hairline `1px` in the slate-tinted neutral; rows separated by
  `--border-subtle`. Left-accent color bars appear on agenda/feature cards (a real deck
  motif) — used sparingly, with brand colors only.
- **Backgrounds.** Mostly flat — white, light gray, or solid slate. **No gradients** in
  product UI. The hexagon **mark is used large and low-opacity (8–12%)** as a watermark
  on slate slides. **No bluish-purple gradients, no glassmorphism in product.**
- **Imagery.** Real clinical settings — clinicians using technology, candid, warm
  natural light. No staged stock clichés. **Per the logo guidelines, never place the
  logo over a photograph.** See `assets/imagery/`.
- **Motion.** Subtle and functional: 120–320ms, standard ease (`--ease-standard`).
  Fades and small position/shadow shifts on hover; no bounces, no decorative loops.
- **States.** Hover = slightly darker fill (buttons) or tinted-blue background (nav/rows)
  + a 1px lift on interactive cards. Active/selected = Process-blue tint
  (`--color-primary-subtle`) with blue text/left-border. Focus = blue-light ring
  (`--shadow-focus`). Disabled = muted gray at ~65% opacity.
- **Transparency/blur.** Rare. Reserved for overlays/scrims (modal `--surface-overlay`)
  and the slide-deck nav bar. Not a decorative device.

---

## ICONOGRAPHY

Trio's product UI uses a **clean, single-weight line-icon style** — 2px stroke, rounded
caps/joins, ~18px in the VMS sidebar and toolbars (dashboard, recruiting, jobs, shifts,
billing, settings, search, chevrons, etc.).

- **No icon font, sprite, or SVG icon files were provided** in the source material, so
  the set is recreated in the matching style in **`assets/icons/icons.jsx`** — one
  `Icon` component, `<Icon name="…" />`, drawn in the **Lucide** geometry (ISC-licensed),
  which matches Trio's stroke weight and fill style. **Substitution flagged** — swap for
  the licensed product icon set when it's available, keeping the same names.
- **Emoji:** never used. **Unicode glyphs:** only the small `▾` chevron and `“` quote
  mark as typographic accents.
- **Two real raster icons** were pulled from the decks into `assets/icons/`
  (`arrow-orange.png`, `check-green.png`) — orange directional arrow and green success
  check, both consistent with the palette.
- **The hexagon mark** (`assets/logos/trio-mark.png`) is the brand's hero glyph — use it
  for watermarks, loaders, and favicon-scale marks, not as a UI icon.

When building, reach for `Icon` (line icons) for UI affordances; use brand colors for
any colored icon; never hand-draw a one-off icon in a different style.

---

## Repository index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for downloaded use.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — **auto-generated;
  do not edit.**

**Assets** (`assets/`)
- `logos/` — `trio-logo-primary.png` (full color), `trio-logo-white.png` (reversed for
  dark), `trio-logo-stacked.png`, `trio-mark.png` (hexagon mark).
- `imagery/` — `clinicians-tablet.jpg`, `mi-region-map.png` (region map from the product).
- `icons/` — `icons.jsx` (the `Icon` line-icon component), plus `arrow-orange.png`,
  `check-green.png`.
- `reference/` — original product screenshots (`vms-dashboard.png`,
  `market-intelligence.jpg`) kept for fidelity checks.

**Foundations** (`guidelines/foundations/`) — specimen cards for the Design System tab:
colors (brand core, tints, semantic, status, slate scale, text & surfaces), type
(family, display, body), spacing (scale, radii, elevation), brand (logo, mark, imagery).

**Components** (`components/`) — reusable React primitives. Read each `*.prompt.md`.
- `core/` — **Button**, **Badge**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**
- `surfaces/` — **Card**, **StatCard** (the VMS KPI tile)
- `navigation/` — **Tabs**, **SidebarNav**

**UI kits** (`ui_kits/`)
- `trio-vms/` — interactive VMS app: Locums Program dashboard, Jobs, Submissions, with
  the slate top bar + left rail + footer (`index.html` + `vms-*.jsx`).
- `trio-market-intelligence/` — the dark analytics dashboard.
- `trio-slides/` — sample presentation slides reflecting the decks (`slides.jsx` + a
  deck viewer `index.html` + per-slide cards).

### Usage
Consumers link `styles.css` and load `_ds_bundle.js`, then read components from the
compiled namespace (run `check_design_system` for the exact name):
```js
const { Button, StatCard, SidebarNav, Icon } = window.<Namespace>;
```

### Caveats / not yet covered
- **Fonts** are served via the Google Fonts CDN (Open Sans) — no licensed binaries were
  provided. Drop `.woff2` files in `assets/fonts/` + local `@font-face` to self-host.
- **Icons** are recreated in the Lucide style — not the exact product set (flagged above).
- **Trio Shifts (mobile)** is not recreated — no source screens were available.
- Product **screenshots**, not source code, were the reference for the UI kits; layouts
  are faithful recreations, not pixel diffs.
