# TCA Hero — "marry the two heroes" build spec

Adam's ask: keep our orb watcher (he loves it), but our inbox dropped ALL the narrative
detail Courtney's floating hero had. "You know for sure she'll claw it all back." Restore
every beat of her story — styled in OUR unified system + our polish + our orb.

## Ground truth: her animation (rendered frame-by-frame)
Source: `~/Downloads/_tca_extract/Timecard Auditor.dc.html`, id `#story-frame`, autoplay 2.7s/step, 6 steps.
Frames captured at: `deliverables/_qa/her-anim/{1-assessing,2-checking,3-exception,4-routing,5-declined,6-blocked}.png` — LOOK AT THESE.

Her hero = a full-width **A/P Inbox** dashboard card with FOUR detail layers we dropped:

1. **Inbox table** — dark slate top nav (trio logo · DASHBOARD · LOCUMS · BILLING[active,teal underline] · REPORTS),
   title "A/P Inbox · Submitted Timecards & Expenses", columns INVOICE NO | CLIENT | SPECIALTY | STATUS.
   Rows show the FULL status spectrum, not just one exception:
   - 57007 · Canyon Memorial Hospital · Med Surg · **Submitted** (gray)
   - 56977 · Harpewood United Hospital · Neurology · **[the watched row]** (highlighted, badge cycles)
   - 57035 · Moore Memorial Health · Critical Care · **Passed** (green)
   - 56842 · St. Augustine Hospital (SAH) · Med Surg · **Failed** (red)
2. **Tab bar** — All · Ready for Review · Failed. Active tab advances with the story (All → Ready for Review → Failed).
3. **Watched-row badge cycle** (her BOT_STEPS), row-bg shifts with it:
   Assessing(gray) → Checking OT rules(blue, info-subtle bg) → ⚑ Exception(orange, warning bg) →
   → Reviewer(orange, warning bg) → ✗ Declined(red, danger bg) → ⛔ Failed / "Blocked · spend never cleared"(red, danger bg)
4. **Caption strip** under the card — 4 narrated beats w/ progress dots, active one bold+colored dot:
   "Assesses every submission" · "Flags what breaks policy" · "Routes only the exception to a person" · "A person declines it — it never clears"

Plus TWO modals over the dimmed card:
- **Timecard Review modal** (mid-story, steps 4–5): header "Timecard #56977 / Timecard Review" + status pill (Needs Further Review → Declined).
  "STEPS PERFORMED" 2×2 checks: ✓ Timesheets · ✓ Expenses General · **✗ Overtime Policy**(orange) · ✓ Ground Transport.
  Callout: "**OVERTIME_POLICY** — 4.0 hours of overtime billed on 6/15 without prior supervisor approval on file, per policy #4.2."
  Buttons: [✗ Declined](red, active) · [Approve](outline). This is the human decision. (NOTE: this matches our watched row "RN · Overtime · 4.0 hrs OT · 6/15 · no approval on file" — reuse our row content.)
- **Payoff modal** (final, step 6): green ✓, "Caught before it cleared.",
  "This unapproved overtime charge would have paid out undetected. Instead, it was flagged, reviewed and declined — the spend never left the building."
  Stat pair: **$291K** caught before payment · **$2M+** verified savings. CTA "See the full impact."

## Our current hero (baseline to preserve)
`deliverables/_unified/timecard-auditor/index.html`, section `#top`, split layout:
- LEFT: eyebrow "A PRE-PAY GATE, NOT A POST-PAY AUDIT" + H1 "Every timecard, audited before the spend clears." + subcopy + [Request a demo][See how it works].
- RIGHT: white A/P inbox card (Trio VMS · Accounts Payable · Timecard review, "AUDITING" pill, "Flagged before payout" chip, SAMPLE footer) with 3 rows (RN·Regular $3,744 CLEARED / RN·Overtime $624 EXCEPTION[orange accent] / Surgical Tech·Night differential $1,014 CLEARED).
- The **orb** teammate ("TIMECARD AUDITOR / ON WATCH") sits on the flagged row's orange accent bar. States: running/thinking/attention/resolved. CSS lines ~78–142. Adam LOVES the orb — keep it.
Our rows use concrete dollar amounts (better than her generic rows) — KEEP our rows; add spectrum + narrative on top.

## THE MARRIAGE (design decisions — build these)
Keep our split hero (headline left, inbox card right) as the resting frame + our polish + our orb.
Drive HER 6-beat story arc through the inbox card, orb-narrated, one shared step index (single interval/rAF so orb+row+modal+tab+captions stay in sync). ~2.5s/beat, ~15s loop.

1. **Rows**: keep our 3 concrete rows; give them the full spectrum look (one neutral "Submitted", greens "Cleared", the watched RN·Overtime row). Watched row's status badge cycles her 6 phases (Assessing → Checking OT rules → ⚑ Exception → → Reviewer → ✗ Declined → ⛔ Blocked) with row-bg easing neutral→warning→danger. Orb maps: running→thinking→attention(exception/routing)→resolved(caught). Add an orb "settle/proud" nuance for the caught beat.
2. **Tab bar**: add a compact All · Ready for Review · Failed tab row atop the card list; active tab advances All→Ready for Review→Failed with the story. Style in our system (teal active, muted rest).
3. **Timecard Review modal**: bring it in, SCOPED to the card (an overlay within/over the card, NOT a full-screen takeover that buries the H1). Our styling: header "Timecard #—— · Timecard Review" + status pill; "STEPS PERFORMED" 2×2 checks (✓ Timesheets · ✓ Expenses General · ✗ Overtime Policy[--brand-orange] · ✓ Ground Transport); OVERTIME_POLICY callout with our row's exact detail ("4.0 hrs OT billed 6/15 · no prior supervisor approval · policy #4.2"); [Decline](active, --brand-redorange/danger) / [Approve](outline). This is the detail she'll claw back — make it crisp.
4. **Caption strip**: add her 4-beat narrated strip full-width beneath the hero columns, progress dots, active beat bold + teal dot. Exact copy above.
5. **Payoff**: NOT a full-screen modal (would cover the landing headline every loop). Resolve to a compact success state ON the card — a "Caught before it cleared" success ribbon/row-flip + a small inline stat lockup **$291K caught before payment · $2M+ verified savings** (keep her numbers as placeholders; our concept-note already says proof numbers pending marketing sign-off). Orb → resolved/proud.

## Guardrails (non-negotiable)
- Brand tokens ONLY (site.css :root): --teal #009fc7, --teal2 #005e78, --brand-orange #f58220, --brand-redorange #f05523, --brand-green #79bb43 (PMS 376), --brand-lime #a6ce42, --deep #152d38 + derived ramps. NO off-brand blues/greens/reds. (Her mock used --trio-blue/--color-danger etc.; map to OUR tokens.)
- Inter type, our card polish, our radii/shadows. Must look like it belongs on the same page as the rest of the sections.
- Whimsy gated: `@media (prefers-reduced-motion: no-preference)` for all motion; reduced-motion falls back to a calm still state (row settled on the caught/exception beat, orb "running" still, captions on beat 1 or final — pick the most legible). `aria-hidden="true"` on the decorative animation. IntersectionObserver to pause offscreen.
- Mobile: card + captions must reflow cleanly; orb clear of the logo; modal scoped and legible. Test at 390px.
- Don't touch other sections. Don't duplicate content that already exists elsewhere on the page (the page has ONE "Caught before it cleared" line + a "policy #4.2" mention already — the hero can echo the phrase in the payoff ribbon, that's fine, but don't add a second full stat band if one exists downstream; check first).

## Verify (frogdog-web-prototype §8–9)
Render harness (puppeteer-core via Chrome, force `.reveal/.stagger .in`, thread diagrams). Capture ALL 6 beats desktop, the review modal, the payoff, reduced-motion, and mobile (390px). Then MANDATORY 3-art-director red-team (brand fidelity / motion / editorial) — iterate to unanimous APPROVE. Zero console errors.
Save shots to `deliverables/_unified/_qa/timecard-auditor/`. Do NOT deploy — hand back for Adam's review.
