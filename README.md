# Mia AI — public site

Live: https://mohammedabdelshafy.github.io/mia-ai-site/

Dark sci-fi landing page for Mia AI — "Give AI a body, presence, and world."

## What's inside

- **Hero** — AI-generated Mia artwork, capability chips, live demo chatbox
- **Agent crew** — 6 specialist agents under Mia's command (Marketing, Research,
  Outreach, Build, Content, Verify). Tap one, then ask — the demo brain routes
  your message to the right agent skill and tags the reply ⚡
- **Mission space-viz** — every task you send plays a canvas animation: Mia flies
  through a starfield from planet to planet (Brief → Explore → Gather → Verify →
  Deliver) while the work "happens". Respects `prefers-reduced-motion`.
- **Sections** — Watch Mia in action, devices, honest pricing (free during private
  preview), FAQ, waitlist modal
- **PWA** — `manifest.json` + icons, installable on phones

## Frontend

Static site: `index.html` + `assets/`. No build step. The demo chat and agent
brain are scripted in-page (labeled as a demo); the full brain ships with the
private preview.

## Backend (`server/`)

Real waitlist API — Express + JSON file store, zero-config:

```
cd server && npm install && npm start     # serves site + API on :3000
```

Endpoints:

- `GET  /api/health` — liveness
- `POST /api/waitlist` `{name, email}` — validates, dedupes, stores
- `GET  /api/waitlist/count`

The frontend tries `POST /api/waitlist` first and falls back to browser-local
storage on static hosts (GitHub Pages). Deploy the server on any Node host
(Render / Railway / Fly / VPS: set `PORT`) to make the waitlist fully live.

## Honesty notes

- "Try for Free" opens the waitlist — no fake accounts or credits exist yet
- iOS/Android apps are marked "coming soon"
- The on-page chat demo is scripted and says so
