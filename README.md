# RoadHelp

Georgian-first static marketing site for RoadHelp, a flatbed towing driver serving Tbilisi, Georgia, and nearby countries.

## Stack

- Astro with strict TypeScript
- Static output for Cloudflare Pages
- Georgian at `/`
- English at `/en/`
- Russian at `/ru/`
- Responsive Astro image optimization
- Local-business structured data, canonical URLs, hreflang, sitemap, and social metadata

## Local development

```sh
pnpm install
pnpm run dev
```

Production check:

```sh
pnpm run build
```

The Cloudflare Pages build command is `pnpm run build` and the output directory is `dist`.

## Required launch edits

1. Replace the placeholder phone and WhatsApp values in `src/content/site.ts`.
2. Confirm operating hours before adding any availability claim.

## Generated imagery

The hero and regional transport images were created with the built-in image generation workflow and are stored in `src/assets`.
