# Astro bundles `react` on a server for a simple API route

1. `.astro` pages are prerendered (static).
2. `react` is marked as `external` in `astro.config.ts`.

Bundled Cloudflare `_worker.js` still contains `react`.

## Steps to reproduce

```sh
pnpm install
pnpm build
grep 'external' astro.config.ts
grep 'react.production.min.js' dist/_worker.js
```
