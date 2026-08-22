# Russell Watson Portfolio

Interview-focused portfolio for Russell Watson, a security-minded software engineer in Phoenix, Arizona.

**Live site:** <https://wats3082.github.io/Portfolio-2025-RW/>

## What the site covers

- Evidence-backed case studies for [Sentinel Ops](https://github.com/wats3082/System-pacs-security) and [Weather API v2](https://github.com/wats3082/weather-api-v2)
- Supporting work that is clearly labeled as a prototype or playable demo
- Scannable role, stack, capability, and implementation details
- Direct résumé, email, LinkedIn, and GitHub calls to action
- Semantic, keyboard-friendly HTML with responsive layouts, theme preferences, reduced-motion support, canonical metadata, and structured person data

The site intentionally makes no claim that Sentinel Ops is deployed. Weather API v2's turbulence score is described as a demonstration heuristic, consistent with that repository's documented limitations.

## Local preview

This is a dependency-free static site with no runtime backend calls. The project cards are maintained as repository-derived editorial content, so the public demo remains useful without credentials, API keys, or fake service responses.

From the repository root:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000>. The separate `aws-backend/` proof of concept is not used by the portfolio.

## Content maintenance

Treat repository documentation as the source of truth:

1. Confirm a project URL, implemented capability, stack item, and deployment status in its repository before changing a card.
2. Keep each flagship story in `index.html` structured as **Problem → Approach → Evidence**.
3. Use numbers only when they can be counted in source or are explicitly documented. Do not add traffic, performance, customer, revenue, or adoption metrics without evidence.
4. Label incomplete work (`Frontend prototype`, `Deployment pending`) and keep known limitations beside the relevant link.
5. When adding a live link, verify it independently and use source-only links when deployment is unavailable.
6. Update the meta description and structured data when the positioning or canonical URL changes.

Visual tokens and responsive behavior live in `assets/css/style.css`; theme and active-navigation behavior live in `assets/js/script.js`.

## Interview talking points

- **Sentinel Ops:** why shared Zod contracts connect the React client, Lambda services, and AWS CDK deployment; how caller-supplied UUIDs and conditional writes make event ingestion idempotent; why video is metadata-only.
- **Weather API v2:** how cache TTLs vary by resource; why the turbulence score is explicitly bounded as a surface-weather heuristic; how Cognito separates protected saved locations from public weather endpoints.
- **Delivery approach:** how operational experience changes product decisions, why visible failure states are better than mock success, and how type checks, tests, builds, and infrastructure synthesis create one delivery path.

## Repository map

```text
index.html             Portfolio content and metadata
assets/css/style.css   Responsive visual system
assets/js/script.js    Theme and navigation behavior
robots.txt             Search crawler policy
sitemap.xml            Canonical page discovery
aws-backend/           Separate PACS proof of concept
```

## Deployment

Pushes to `master` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow:

1. Checks out the repository without injecting credentials into the site.
2. Stages only `index.html`, crawler metadata, the active stylesheet and script, and the favicon.
3. Adds `.nojekyll`, uploads the static artifact, and deploys through GitHub's official Pages actions.

GitHub Pages must use **GitHub Actions** as its build source. The published project URL is:

<https://wats3082.github.io/Portfolio-2025-RW/>

All local asset references are document-relative (`./assets/...`), navigation uses in-page fragments, and canonical metadata includes the `/Portfolio-2025-RW/` project path.
