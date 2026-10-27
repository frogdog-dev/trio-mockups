# Agency Experience landing page: HubSpot build notes

**Live URL:** info.triowfs.com/agency-partnerships
**Staged for review:** https://trio.frogdog.io/agency-partnerships/
**Deadline:** live well before the webinar on Tue Nov 17, 10:00 to 10:45 a.m. CST.

This folder holds the page and its images:
- `index.html`: the whole page, plain HTML with one `<style>` block and one small script.
- `img/`: the hero photo, Gary's headshot, the primary and white logos, and the hex mark.

## 1. Template

1. Use a landing page template with **no global header and no global footer**. The page has its own anchor-nav header and its own footer.
2. Load Open Sans 400, 600, 700 and 800. The Google Fonts `<link>` is in the `<head>`.
3. Move the `<style>` block into the template's stylesheet, or into the page's head HTML.
4. Keep the title, meta description, canonical link and FAQPage JSON-LD from the `<head>`.

## 2. Form: "Connect with Agency Experience"

Build one HubSpot form with these fields:

| Label | Property | Type | Options | Required |
|---|---|---|---|---|
| First name | firstname | single-line | | yes |
| Last name | lastname | single-line | | yes |
| Work email | email | email | | yes |
| Agency | company | single-line | | yes |
| Your role | *new* | dropdown | Owner or executive / Account manager / Recruiter / Operations or billing / Other | no |
| Recruiters on your team | *new* | dropdown | 1 to 5 / 6 to 15 / 16 to 50 / More than 50 | no |
| Primary specialties you staff | *new* | single-line | placeholder: e.g., Med-Surg, ICU, Allied | no |
| States you staff most | *new* | multiple checkboxes | all 50 states + DC (two-letter codes) | no |
| Your priorities, and where you'd like to get more from Trio | *new* | multi-line | | no |

1. Check for existing contact properties before you create the new ones.
2. Set the submit button to "Connect with Agency Experience".
3. Keep the line under the button: "Next, you'll pick a time on Gary's calendar."
4. After submit, show Gary's meetings scheduler inline in place of the form: https://meetings.hubspot.com/gwatson6/marketings-agency-experience-scheduler-gary-watson
5. Style the fields to match the page: 44px fields, border `#dfe3e6`, radius 4px, focus ring `#00AAE5`.
6. The states field is a pill grid on our page (CSS only, under `.state-grid` / `.state-opt`). Reuse that CSS on HubSpot's checkbox list, or fall back to a scrolling checkbox list.

The form column has `id="connect"`. Keep that id on the form wrapper, because every "Connect" link points to it.

## 3. Webinar pop-up

The script at the bottom of `index.html` runs the pop-up. You can use it as is.
- **Opens:** when the visitor scrolls past 700px.
- **How often:** once per browser tab session (sessionStorage key `trio_ae_webinar_seen`).
- **Closes on:** the X, "Maybe later", the Esc key, or a click on the dark backdrop.
- **Focus:** moves to the X when the pop-up opens and stays inside the pop-up.
- **Manual triggers:** "Register for the webinar" in the Events section and "Agency product webinar" in the footer.
- **After Nov 17:** the script removes the pop-up and hides both triggers from 2026-11-18 06:00 UTC (end of the 17th, Central). Nothing to do on the day.
- **Zoom link** (opens in a new tab): https://events.zoom.us/ev/ArrVz58pnM4X66rVYWUpWRECSXPVmrrYLpLgVLDBNnMCLtknEU-A~AvtqtF37xJU3y3DjZUmmzFg8d_5iCEL40US9zlMhKem_3UmB2gKPsd0BMTAIaZwdiHNINROJRUU9cXV-Z40XGZKPWA
- **Testing the after-date state:** add `?ae_now=2026-11-18` to the URL.

## 4. Links

- Header nav and footer "What's new", "Get more from Trio" and "FAQ" are in-page anchors.
- "Connect with Agency Experience" (closing band), footer "Connect with the team" and footer "Contact" all go to `#connect`.
- FAQ answer email: info@triowfs.com.
- The "Let us know!" text in the product card is not a link (Courtney 10/26).

## 5. Tracking

Set up conversion events for:
1. Form submit.
2. Meeting booked.
3. "Register on Zoom" click.

## 6. Still open with Courtney

- After Nov 17 the Events section still describes the webinar; only the pop-up and the two register buttons go away. Does she want that section changed after the 17th (recording link, or removed)?
