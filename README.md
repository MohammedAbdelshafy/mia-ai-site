# Mia AI — Give AI a Body, Presence, and World

**Live:** https://mohammedabdelshafy.github.io/mia-ai-site/

Mia isn't software you operate — she's the employee you hire. An embodiment layer for AI: a persistent face, voice, and expressive reactions wrapped around an agent that actually does work. This repo is her public site: a 5-page experience with a live demo chat, a 57-agent directory, and cinematic mission visuals.

![Mia](https://mohammedabdelshafy.github.io/mia-ai-site/assets/mia-stand-hi.webp)

## The pages

| Page | What it is |
|------|-----------|
| [Home](https://mohammedabdelshafy.github.io/mia-ai-site/) | Hero with the live demo chatbox, mission theatre, and Mia herself |
| [Agents](https://mohammedabdelshafy.github.io/mia-ai-site/agents.html) | All 57 specialist agents with live search — GITHUB, MCP, THINK, WEB, NVIDIA… |
| [How it works](https://mohammedabdelshafy.github.io/mia-ai-site/how.html) | The mission pipeline: Think → Route → Execute → Verify |
| [Pricing](https://mohammedabdelshafy.github.io/mia-ai-site/pricing.html) | Free preview, Pro, Founding Lifetime, Team/Agency/Enterprise |
| [Watch](https://mohammedabdelshafy.github.io/mia-ai-site/watch.html) | Mia on video: the mission, the work, the delivery |

## Watch her work

- **The greeting:** https://raw.githubusercontent.com/MohammedAbdelshafy/mia-muse-assets/main/mia-hi-new.mp4
- **The mission** (planets, data, delivery): https://raw.githubusercontent.com/MohammedAbdelshafy/mia-muse-assets/main/mia-mission.mp4
- **The cosmic intro:** https://raw.githubusercontent.com/MohammedAbdelshafy/mia-muse-assets/main/mia-cosmic-intro.mp4

## What's inside

- **Live demo chat** — opens on page load, chat-first. Pick any of the 57 agents or let Mia auto-route. Mission theatre reacts to your task above the chatbox.
- **Mission theatre** — every task plays a cinematic: Mia flies through the data-space (Brief → Think → Tools → Execute → Verify) while the work "happens."
- **Agent swarm UI** — 57 specialists with real workflow definitions, searchable directory, per-agent chat routing.
- **Command Core** — THINK / MCP / CODE / WEB / NVIDIA skill visualization in the welcome experience.
- **Waitlist** — tries `/api/waitlist`, falls back to FormSubmit → inbox, then localStorage. No lead left behind.
- **PWA** — installable, mobile-first, zero horizontal overflow.

## Frontend

Static site, no build step: 5 HTML pages + `assets/site.css` + `assets/site.js`. The demo chat and agent brain are scripted in-page and labeled as a demo; the full brain ships with the private preview.

## Backend (`server/`)

Real waitlist API — Express + JSON file store:

```
cd server && npm install && npm start     # serves site + API on :3000
```

- `GET  /api/health` — liveness
- `POST /api/waitlist` `{name, email}` — validates, dedupes, stores

Deploy on any Node host (Render / Railway / Fly / VPS) to make the waitlist fully live. **Before deploying:** protect `/api/waitlist/stats` and `/api/waitlist/export` with founder auth.

## Honesty notes

- "Try for Free" opens the waitlist — no fake accounts or credits exist yet
- iOS/Android apps are marked "coming soon" — the PWA is the real experience today
- The on-page chat demo is scripted and says so; the mission visuals are cinematic, not live execution
- Device control is pre-launch/founding-pilot, not operational software

## For partners

Looking for 2–3 design partners who want an expressive front-end on their AI. The embodiment layer — face, voice, personality — is the next platform decision. [Talk to us.](https://mohammedabdelshafy.github.io/mia-ai-site/)
