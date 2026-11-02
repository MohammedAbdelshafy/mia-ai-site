# Mia AI Site — Agent Instructions

## Product truth and scope
- This repository contains a public concept/demo site. The public chat/task visuals are scripted and do not prove that a live task executed.
- Do not describe Mia as a deployed autonomous employee, a live clinic/customer integration, a production service, or a working connection to user accounts unless the specific capability is independently verified.
- Treat pricing and feature labels as proposals unless actual product behavior and payment readiness are verified.
- Use synthetic/demo data in public examples. Do not add real patient data, credentials, or private customer records.

## Repository workflow
- Before changing code, read this file, `README.md`, `CONTEXT.md`, and the specific page/server code in scope. Check the current branch, existing CI, tests, and the exact diff before writing.
- Use `.agents/skills/codex-repository-workflow/SKILL.md` for multi-step changes, bugs, refactors, and verification.
- The top-level site is currently documented as static HTML with no root build step. The server package currently exposes a `start` script; inspect the live files before assuming a test, lint, or build command exists.
- Prefer small, reversible changes. For behavior changes, add a focused regression test where feasible and run the actual relevant test/smoke checks. Report checks that were not run.
- Never expose the waitlist stats/export routes publicly without verifying founder authentication and appropriate access controls. Treat this as a known deployment/security requirement, not evidence that protection is already implemented.
- Do not deploy, alter production settings, change credentials/permissions, publish externally, or make destructive data changes without explicit approval.
- Use official current documentation for changing platform APIs and cite the evidence in project notes when useful.
- Do not claim a deployment, integration, subscription, test, or external action succeeded unless observed evidence supports it.

## Completion report
State the files changed, exact checks and observed results, remaining risks, and whether the result is a draft, reviewed, merged, or deployed. These states are not interchangeable.
