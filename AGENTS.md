# Commute Planner Handoff

## Current Shape
- Single-file static app in `index.html`
- Static assets: `favicon.svg`, `og-image.png`
- Deployed on Cloudflare Pages as `commute-planner`
- GitHub: `aesrael/TFL-commute-planner`

## What Is Done
- Station search with TfL API, stores coords from results
- Day selector (Auto/Today/Tomorrow) in station panel
- Arrive-by time in station panel
- Parking spot and start point with Nominatim geocoding
- Drive/walk auto-estimates via OSRM, shown when parking is set
- Parking buffer (3 min grace) between parking and walk
- Traffic buffer (5 min default)
- Walk warning for long distances (>20 min, OSRM unreliable)
- Nudge banner when far from station but no parking set
- TfL journey lookup uses station coords (not hub IDs) for accuracy
- Full breakdown panel auto-opens with results
- Recalculate closes assumptions and scrolls to top
- 0.00000 coords cleared on load to re-fetch location
- Arrival alerts with geolocation, vibration, speech, notifications
- Em dashes removed from user-facing copy

## Notes
- Prefer editing `index.html` directly unless there is a strong reason to split
- OSRM foot profile is unreliable for long distances (>20 min)
- TfL hub IDs (HUBLEW/HUBWAT) geocode wrong; always use lat,lng from search results
- Nominatim has 1 req/sec rate limit; debounce geocoding at 1500ms

## Useful Files
- `/Users/aesrael/Desktop/commuter/index.html`
- `/Users/aesrael/Desktop/commuter/favicon.svg`
- `/Users/aesrael/Desktop/commuter/og-image.png`
