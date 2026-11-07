# Mia AI

Mia is a public demo exploring how a work assistant could turn a goal into a clear plan and show the steps involved.

**Site:** https://mohammedabdelshafy.github.io/mia-ai-site/

## What is here

- Home page with a scripted task walkthrough
- A directory of 57 specialist profiles
- Pages describing the concept, example workflows, videos and plan ideas
- A small server for collecting waitlist requests

## Important limits

- The public chat and task visuals are scripted. They do not prove that a live task was executed.
- Submitting the waitlist is not account creation or paid access.
- Device control and connected-tool execution are not generally available production features. They depend on a separate, verified runtime and permissions.
- Prices and plan labels are proposals until the actual features, account access and billing path are confirmed.
- Do not describe Mia as a live employee, fully autonomous operator, or a working connection to inbox/calendar/accounts unless that capability is live and tested.

## Local preview

This is a static site without a build step. Open `index.html` locally or serve it with a local HTTP server. The optional waitlist API is in `server/`:

```bash
cd server
npm install
npm start
```

The site and API run separately. Before publishing, provision an MIA-owned private Postgres database and founder authentication. The server now explicitly allowlists public files.

## Project materials

- [Launch and sales notes](MIA_LAUNCH_MARKETING_KIT.md)
- [Skills and growth playbook](MIA_SKILLS_GROWTH_PLAYBOOK.md)
- [Assets repository](https://github.com/MohammedAbdelshafy/mia-muse-assets)

The approved product name is **Mia AI**. The repository slug and URL remain `mia-ai-site`.

## MIA lead capture deployment (draft; NOT LIVE)

- Create a separate MIA-owned Postgres database; **do not reuse unrelated business projects**. Apply `server/schema.sql` in that new DB.
- Put `DATABASE_URL`, a strong `MIA_ADMIN_TOKEN`, and reviewed `MIA_ALLOWED_ORIGINS` on the server. Never put credentials in public JavaScript.
- Generate and commit an npm lockfile in `server/` after a trusted install; run `npm test` and a real HTTP integration test before deployment. The draft currently includes pure unit tests, not an end-to-end production result.
- Deploy a persistent Node-compatible API host and check `GET /api/health` returns `database:ready`.
- Set the HTTPS origin in the public `assets/mia-config.js` (the URL is public; no secrets), then verify a new synthetic signup returns both `lead_id` and `event_id`; check exactly one row in the DB. Verify duplicate, malformed, offline and rate-limited cases.
- Verify inquiry consent copy, privacy notice, retention/deletion process, approved origin, and the server-to-CRM destination before public launch.
- This branch intentionally **removes the FormSubmit fallback** and does not claim completion until the API is deployed and tested. In the meantime the UI must say an invite request could not be confirmed.
- Earlier research incorrectly described a browser-localStorage fallback. Before this PR, the page actually used FormSubmit when no API was configured. No migration of old FormSubmit submissions has been attempted.
- Founder export is token-protected; the API restricts static file serving. Production abuse controls and backups remain deployment requirements.

No production website, customer database or live integrations have been changed by this draft PR.
