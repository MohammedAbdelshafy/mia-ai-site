# Mia AI Skills & Growth Playbook

**Purpose:** a selective capability pack for Mia's site, quality gate, growth engine, and NVIDIA-adjacent workflows.
**Status:** recommendations are documented here; third-party skill catalog records remain external. The community catalog is read-only and no third-party skill has been installed into a runtime by this document.

## Current baseline

- GrowMyWebsite scan of the live homepage: **100/100, 12/12 on-page checks passed** (scan performed 2026-10-11).
- GrowMyWebsite's next growth guidance: keyword and search-intent research, question-led content, AI search presence, internal linking, mobile speed, and measurement tied to qualified conversions. Do not keep changing metadata that already passes.
- The most useful next work is proving the real conversion journey, adding deeper customer-focused content, and measuring qualified pilot applications.

## Add these Mia “skills” as first-party workflows

### 1. Search & Growth Strategist
**Trigger:** “grow traffic”, “SEO audit”, “rank for”, “AI search”, “content plan”.
**Responsibilities:** check site metadata and indexability; map buyer intent; find missing questions; plan topic clusters; strengthen internal links; draft evidence-led articles; monitor organic entry pages.
**Guardrails:** no keyword stuffing, fabricated statistics, fake testimonials, mass page generation, or claims of rankings without data.
**Success metrics:** organic qualified visits, engaged visits, design-partner requests, and confirmed signup rate.

### 2. Conversion & Funnel Auditor
**Trigger:** “increase sales”, “conversion”, “pricing”, “signup issue”.
**Responsibilities:** walk hero → sample mission → proof → offer → signup; inspect broken actions; measure CTA clicks and signup outcomes; propose one testable improvement at a time.
**Guardrails:** distinguish clicks from successful submissions; never declare conversion lift without a comparison period and measured evidence; make only truthful product claims.

### 3. Front-End Craft & Accessibility Reviewer
**Trigger:** “redesign”, “polish UI”, “mobile issue”, “accessibility”.
**Responsibilities:** review layout hierarchy, responsive states, keyboard focus, semantic structure, labels, motion sensitivity, error/success state, contrast, reduced motion.
**Quality gate:** use automated checks plus a manual keyboard and mobile review. Do not call an audit WCAG-compliant merely because one scanner passes.

### 4. Browser QA & Release Verifier
**Trigger:** “test site”, “deploy”, “before merge”, “check live”.
**Responsibilities:** test route reachability, modal open/close, sample mission selection, chat submit/Enter, invalid email, remote form success/failure, mobile widths, console errors, and deployed asset freshness.
**Release rule:** identify whether evidence comes from static assertions, unit tests, a real browser, the API, or the live deployed page.

### 5. Privacy & Integration Gatekeeper
**Trigger:** any API, form, connector, customer data, agent action, or deployment.
**Responsibilities:** check secrets stay server-side; validate API URLs and response bodies; require explicit auth for founder data; log only necessary metadata; fail closed when integrations are missing.
**Release rule:** GitHub Pages is static. The Express API needs a separately deployed service and explicit `window.MIA_CONFIG.waitlistApiBase` configuration. Never imply form persistence succeeded unless a remote service confirms it.

### 6. NVIDIA / Accelerated AI Specialist (conditional)
**Trigger only when the actual workload uses NVIDIA-specific tech** such as CUDA, TensorRT, NIM, NeMo, NemoClaw, Jetson, Omniverse, TAO, or GPU inference.
**Responsibilities:** select the relevant NVIDIA catalog skill, check prerequisites and GPU availability, assess cost/latency, validate inference quality, and compare CPU/GPU paths.
**Guardrails:** do not route normal SEO, HTML, or website tasks to NVIDIA skills simply because “AI” appears in the request.

## External skill catalog shortlist

These are useful upstream references, not claimed installed in Mia's runtime:

| Workflow | Candidate | Source/status | Use |
|---|---|---|---|
| SEO strategy | `seo` | [affaan-m/ECC](https://github.com/affaan-m/ECC), discovery-only | Keyword intent, technical SEO, content gaps, schema and Core Web Vitals |
| UI quality | `frontend-design-review` | [microsoft/skills](https://github.com/microsoft/skills), discovery-only | Front-end design review, usability, responsive behavior and trustworthy interface |
| Accessibility | `wcag-audit-patterns` | [wshobson/agents](https://github.com/wshobson/agents), discovery-only | WCAG 2.2 review with automated and manual remediation guidance |
| Debugging discipline | `systematic-debugging` | [obra/superpowers](https://github.com/obra/superpowers), pinned in catalog | Root-cause-first debugging rather than speculative patching |
| NVIDIA contribution workflow | `nemoclaw-contributor-create-pr` | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw), pinned catalog record | NVIDIA NemoClaw contribution/PR work only |
| NVIDIA skill discovery | `nemoclaw-skills-guide` | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw), pinned catalog record | Discover the relevant NemoClaw-specific skill for NemoClaw repository work |
| Browser E2E | Playwright browser automation | [Catalog search](https://github.com/AndyShiu/claude-skill-playwright-browser), discovery-only | Visual/browser verification; select a pinned install if reproducibility is required |

**Important:** “pinned” means the catalog provides a specific source commit and expected skill file hash. It does not mean installed on Mia, on the user's machine, or in this repository. For discovery-only entries, do not install from a mutable branch. Inspect skill instructions and security first, then pin a reproducible commit if it will be added.

## Roadmap, in order

### Now: conversion proof
- Test live site on mobile and desktop.
- Confirm the form destination receives a submission; test provider error and retry.
- Deploy and configure the API before promising persistent waitlist capture.
- Add privacy-respecting analytics for sample starts/completions, CTA clicks, confirmed signups, pilot requests, and source.
- Keep pricing and execution claims aligned with what is actually operational.

### Next: content-led acquisition
Create a small, useful content cluster:
- “How to add a character and guided task workflow to an AI SaaS product”
- “AI chat widget vs an embodied assistant experience”
- “How to design transparent agent progress and verification states”
- “A launch checklist for customer-facing AI assistants”
Every piece should link to a real example, describe limitations plainly, and invite the reader to request a pilot.

### Then: repeatable sales motion
- Focus on AI SaaS founders and automation agencies with an existing product.
- Offer a single, fixed-scope embodiment pilot after discovery; confirm acceptance criteria and delivery capacity before quoting.
- Personalize a small number of relevant founder messages rather than blasting generic outreach.
- Track qualified calls, proposals, paid pilots, objections, and delivered outcomes.

### Conditional NVIDIA work
Do not add CUDA/NIM/TensorRT complexity to this static website. Introduce an NVIDIA workflow only when an identified customer or Mia backend job needs GPU inference, video analytics, model serving, or simulation. Then add the exact relevant, pinned skill and validate it in the environment where the workload runs.

## Acceptance checklist

- [ ] Public experience stays honest about simulation vs live execution.
- [ ] No false signup success.
- [ ] Founder-only routes are protected and tested.
- [ ] Mobile, keyboard, reduced-motion and error states reviewed.
- [ ] Performance and SEO measured with more than one source.
- [ ] Conversion metrics are defined before claiming improvement.
- [ ] External skills are pinned, reviewed and installed by an explicit workflow before being advertised as active.
