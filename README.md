# Commute Planner

Plan your drive, parking, and train timing in one place. Leave on time with live TfL data where available.

## Features

- Drive-to-parking estimates via OSRM routing
- Parking-to-platform walk estimates via OSRM routing
- Live TfL journey planning (arrival time, route details, delays)
- Today / Tomorrow / Auto day selector
- Arrival alerts with geolocation, vibration, speech, and notifications
- Start point and parking spot memory (persisted in local storage)
- Optional TfL app credentials if anonymous requests are blocked

## Live

**https://commute-planner.pages.dev**

## Usage

Open `index.html` in a browser. No build step required.

## Deploy

Hosted on Cloudflare Pages as `commute-planner`. To deploy:

```bash
wrangler pages deploy . --project-name commute-planner
```

## Privacy

Your location is checked only on this device, only while the page is open, and is never sent anywhere.
