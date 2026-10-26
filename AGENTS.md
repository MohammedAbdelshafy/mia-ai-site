# Mia site work guide

Mia is a public concept/demo site. Keep the experience clear about which interactions are scripted and which live actions, if any, are backed by a connected and tested runtime.

## Where to go

- Public home and plan concepts: [index.html](index.html), [pricing.html](pricing.html)
- How the concept works: [how.html](how.html)
- Example workflow videos: [watch.html](watch.html)
- Specialist-role directory: [agents.html](agents.html)
- Product pages: [ai-employee/](ai-employee/), [ai-agent-swarm/](ai-agent-swarm/), [ai-automation/](ai-automation/)
- Launch language and readiness gate: [product-hunt/LAUNCH_KIT.md](product-hunt/LAUNCH_KIT.md)
- Project contract: [CONTEXT.md](CONTEXT.md)

## Language rules

- Call scripted interactions a demo, walkthrough or example.
- Do not say Mia has actually sent a message, researched a live account, built software, or changed a connected system unless that action was independently verified.
- Do not claim “AI employee,” fully autonomous execution or available integrations as current functionality unless the connected runtime exists and has been tested.
- Prices, trials and plan names are proposals until account access, billing, cancellation and the promised features are verified end to end.
- Keep specialist profiles as role examples, not proof that live agents are running.

## Change rules

- Keep URLs, paths, asset names and anchors stable; inspect consumers before renaming.
- Keep the visual identity, but lead with a plain-language customer outcome.
- Preserve privacy, consent and waitlist handling. Do not expose waitlist exports or admin metrics.
- For static-page changes, verify links, form behavior, mobile layout and browser console errors. For server changes, run the appropriate tests too.

## Check before release

A new visitor should be able to tell what the demo can do now, what is illustrative and what requires a separate connected service. Never infer a successful deployment from a merged pull request alone.
