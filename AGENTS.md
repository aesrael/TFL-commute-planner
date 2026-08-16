# Commute Planner Handoff

## Current Shape
- Single-file static app in `index.html`
- Static assets in repo root:
  - `favicon.svg`
  - `og-image.png`
- Deployed on Cloudflare Pages as `commute-planner`
- Latest live deploy at `https://fec902ac.commute-planner.pages.dev`

## What Is Done
- App title is `Commute Planner`
- Empty-state route flow is in place
  - no default station names
  - route fields start blank
  - user enters origin and destination first
  - train station fields show computed values first and unlock edit with an explicit toggle
- Parking spot is user-entered and saved
  - parking name can be geocoded
  - `lat,lng` input is accepted too
- Start point can also be entered
  - drive time auto-calculates from start point to parking
  - if no start point is set, current location can be used
  - on first open, the app can ask for current location and save it as the start point
- Auto assumptions
  - drive time and parking walk show computed values first when available
  - manual edit is behind an Edit or Use auto toggle
- Travel estimates
  - public OSRM used for drive and walk estimates
  - TfL live journey data used where available
- Alerts
  - arrival alerts persist in local storage
  - alerts stay active until the user moves away and back again
  - geolocation, vibration, speech, and notifications are wired in
- Copy cleanup
  - visible em dashes were removed from app content where possible
  - long wait times now render more naturally instead of huge minute counts
- SEO and sharing
  - meta description added
  - Open Graph and Twitter card tags added
  - canonical URL added
  - JSON-LD `WebApplication` metadata added
- Branding
  - favicon is a simple car icon
  - OG image exists at `og-image.png`

## Notes
- Keep user-facing copy free of em dashes if possible
- If social preview does not show, check the scraper can reach `og-image.png` on the live Pages domain
- Prefer editing `index.html` directly unless there is a strong reason to split the app

## Useful Files
- `/Users/aesrael/Desktop/commuter/index.html`
- `/Users/aesrael/Desktop/commuter/favicon.svg`
- `/Users/aesrael/Desktop/commuter/og-image.png`
