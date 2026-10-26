# Mia

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

The site and server can run separately. Before exposing the server publicly, protect the waitlist stats and export routes with founder authentication.

## Project materials

- [Launch and sales notes](MIA_LAUNCH_MARKETING_KIT.md)
- [Skills and growth playbook](MIA_SKILLS_GROWTH_PLAYBOOK.md)
- [Assets repository](https://github.com/MohammedAbdelshafy/mia-muse-assets)

The display name in customer-facing copy is **Mia**. The repository slug and URL remain `mia-ai-site`.
