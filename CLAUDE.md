# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kevin Lucas's personal portfolio (https://kevinlucas.com.br), an Astro + Tailwind CSS v4 site with its own visual identity (green-tinted black + neon lime). It is a single static page whose content is driven by `src/config.ts`. Site content and section headings are in Brazilian Portuguese.

There is no linter, type-checker script, or test suite. `npm run build` is the only way to confirm changes compile.

## Deployment

Pushing to `master` deploys to GitHub Pages via `.github/workflows/deploy.yml` (`withastro/action`). `astro.config.mjs` sets `site: "https://kevinlucas.com.br"` and `base: "/"` — the site is served from the domain root, so don't add a base path.

`SITE_PUBLISHED` (boolean, declared with `astro:env` in `astro.config.mjs`) decides at build time what `index.astro` renders: `true` = full site, `false` or unset = `UnderConstruction.astro` (with `noindex`). In CI it comes from the GitHub repository variable `vars.SITE_PUBLISHED` (see `deploy.yml`); after changing it, re-run the workflow (`gh workflow run deploy.yml`). Locally the default is the under-construction page — run `SITE_PUBLISHED=true npm run dev` (or put it in `.env`, which is gitignored) to work on the real site.

## Gotchas and cross-file rules

- Tailwind v4 is configured entirely through `@tailwindcss/vite` and `src/styles/global.css` (`@theme` tokens + `kl-` custom classes). There is no `tailwind.config.js` (the README's file tree is out of date).
- The background color token is `night`, not `base`, because `text-base` is already Tailwind's font-size utility. `index.astro` overrides `--color-lime` on `<html>` with `siteConfig.accentColor`, so the config value wins over the `@theme` default.
- Astro drops the space between an expression and a following element (`{title} <span>` renders as "titlespan"). Write `{title}{" "}<span>` instead; plain text before an element (`texto <span>`) keeps its space.
- **Shared visual patterns** are repeated inline, with no abstraction: section header = pill with lime dot + Space Grotesk title with a `kl-gradient-text` highlight; primary button = `kl-gradient rounded-xl text-night` + hover lift/`shadow-glow`; secondary = bordered ghost.
- **Conditional sections:** every section renders nothing when its config data is empty or missing. The `has*` checks in `Header.astro` build the nav links (desktop + mobile drawer). Social links render only when their value is truthy. The contact form only renders when `contact.formAction` (e.g. a Formspree endpoint) is set.
- **Adding a section:** add data to `config.ts`, create the component with a `<section id="...">`, add it to `index.astro`, and add the matching link / `has*` check in `Header.astro`.
- **Icons:** Tabler Icons are pasted in as inline `<svg>` markup (no icon package). Copy new icons from tabler.io the same way.
- **UI text:** section labels and headings ("Atuação", "Trajetória", "Baixar CV", nav labels, etc.) are hardcoded in Portuguese in the components, not in config.

## Conventions (from `.cursor/rules`)

- Use Tailwind utility classes for styling; keep the site's own identity: green-tinted black background, neon lime accent with gradients, Space Grotesk headings (sentence case) and Inter body text, rounded corners (`rounded-xl` buttons, `rounded-2xl` cards, `rounded-3xl` images).
- Prefer config changes over component changes; keep component logic minimal and don't add abstraction layers.
- Keep the single-page structure; new sections must hide when their config data is removed.
