# Portfolio Maintenance Roadmap

This roadmap protects the restored historical portfolio design while keeping the static site dependable and accessible.

## Guardrails and Non-Goals

- Preserve the visual layout, typography, colors, page structure, project descriptions, and historical character selected from commit `14cfc32`.
- Make only evidence-based fixes for broken links, assets, compatibility, accessibility, or deployment reliability.
- Do not redesign, modernize, rewrite portfolio copy, add speculative projects, introduce a framework, or add analytics, tracking, or third-party features.
- Test desktop and mobile after every change. Keep GitHub Pages deployment source on `master`.

## Now

| Item | Rationale | Acceptance signal | Dependencies / risks |
| --- | --- | --- | --- |
| Recheck active external project links periodically | External repositories and hosted demos can move or disappear. | Each retained project/demo link returns a successful HTTP response. | Some hosts block automated checks; confirm in a browser before changing a link. |
| Keep Pages workflow healthy | The site is static and depends on GitHub Pages Actions publishing `master`. | The deployment run succeeds and the live site returns HTTP 200 with current committed blobs. | GitHub Actions or Pages availability can delay deployment. |
| Preserve keyboard and screen-reader basics | Navigation, referrals, contact fields, and controls must remain usable without a mouse. | No console errors; keyboard can navigate, open/close referral dialogs, and submit valid contact information. | Avoid CSS/layout changes when improving semantics. |

## Next

| Item | Rationale | Acceptance signal | Dependencies / risks |
| --- | --- | --- | --- |
| Review image alt text against the visible project cards | Existing generic alt text may not always describe the displayed image. | Updated text accurately describes an image without changing visible card copy or layout. | Requires a manual content review; do not invent descriptions. |
| Assess inactive historical Blog and Contact navigation entries | These pages exist in source but are intentionally not visible in the current historical navigation. | Any decision is documented and preserves the selected layout. | Product decision required; do not expose or remove them by default. |
| Add a lightweight repeatable link/asset check only if maintenance needs justify it | Manual validation is sufficient today; automation could prevent regressions. | A no-dependency check covers local assets and active links without altering deployment behavior. | Avoid adding tooling churn to this archived-era static site. |

## Later

| Item | Rationale | Acceptance signal | Dependencies / risks |
| --- | --- | --- | --- |
| Refresh project links only when a verified replacement exists | Broken links should not be replaced with guesses. | Replacement destination is confirmed by the portfolio owner and responds successfully. | Requires owner confirmation when repository names or hosting change. |
| Revisit the historical design only under an explicit redesign request | The selected state is a deliberate snapshot, not a starting point for unsolicited modernization. | A separate scoped plan identifies approved visual/content changes. | Must not be bundled with reliability maintenance. |
