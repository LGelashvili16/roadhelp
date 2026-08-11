# RoadHelp Agent Instructions

## Project purpose

RoadHelp is a Georgian-first marketing website for one flatbed tow-truck driver. The business offers only:

- Vehicle evacuation and transport within Tbilisi.
- Vehicle transport throughout Georgia.
- Cross-border vehicle transport to nearby countries by prior arrangement.

Do not invent additional services such as roadside repair, tire changes, fuel delivery, vehicle storage, or 24/7 availability. Do not invent prices, response times, reviews, certifications, fleet size, addresses, or operating hours.

## Technology and deployment

- Astro 7 with strict TypeScript 6.
- Static output only; deployment target is Cloudflare Pages.
- pnpm is the package manager. Do not create npm or Yarn lockfiles.
- Georgian (`ka`) is the primary language at `/`.
- English is served under `/en/`.
- Russian is served under `/ru/`.
- The production site URL is configured in `astro.config.mjs`.
- Keep the site mostly server-rendered/static. Add client-side JavaScript only when it provides necessary interaction.

Use these commands:

```sh
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

`pnpm run build` runs both `astro check` and the production build. Run it before handing off implementation changes.

## Current architecture

- `src/pages/` contains thin locale route entry points.
- `src/components/HomePage.astro` composes the homepage.
- `src/components/SiteHeader.astro` owns primary navigation and the locale switcher.
- `src/layouts/BaseLayout.astro` owns global metadata, canonical links, language alternates, Open Graph tags, and JSON-LD.
- `src/content/site.ts` contains contact details, locale definitions, and typed homepage copy.
- `src/styles/global.css` contains the shared visual system and responsive styles.
- `src/assets/` contains images processed by Astro.
- `public/` contains assets copied without processing, including Cloudflare headers, robots.txt, the favicon, and the social card.

Prefer Astro components and typed content objects over duplicated page markup. Use the `@/*` TypeScript alias for imports when it makes an import clearer.

## Localization rules

Every public page and every navigation change must ship in Georgian, English, and Russian together. Never leave one language pointing to another language's content.

- Keep `Locale`, `localeOptions`, paths, visible labels, metadata, image alternative text, and accessibility labels typed.
- Store substantial new page copy in page-specific modules under `src/content/` rather than continuing to grow one large file. Shared locale and contact data may remain in `src/content/site.ts`.
- Locale links must point to the equivalent page in the selected language, not always to that locale's homepage.
- Keep Georgian as `x-default` and the root-language version.
- Use UTF-8 and preserve native Georgian and Cyrillic text.
- Do not machine-transliterate Georgian or Russian text.

## Planned pages

The next planned pages are About, Contact, and Services. Prefer the plural `/services/` route.

| Page | Georgian | English | Russian |
| --- | --- | --- | --- |
| About | `/about/` | `/en/about/` | `/ru/about/` |
| Contact | `/contact/` | `/en/contact/` | `/ru/contact/` |
| Services | `/services/` | `/en/services/` | `/ru/services/` |

Implement each as one shared component with thin locale route files, following the existing homepage pattern. Suggested component names are `AboutPage.astro`, `ContactPage.astro`, and `ServicesPage.astro`.

Before adding these pages:

1. Introduce a typed route helper or route map that can return the equivalent path for a page and locale.
2. Update `SiteHeader.astro` so page navigation works from every route; homepage section links must include the locale-aware homepage path when used outside the homepage.
3. Extend `BaseLayout.astro` to accept the current page path or route key. Canonical URLs and all `hreflang` alternates must describe the current page, not the homepage.
4. Add the new routes to primary navigation only when their localized pages exist in all three languages.

Page content boundaries:

- About should explain the driver, flatbed transport approach, service area, and careful handling. Use only verified facts.
- Contact should prioritize click-to-call and WhatsApp. Because the site is static, do not add a contact form unless a real form endpoint, validation behavior, privacy handling, and success/error states are defined.
- Services should expand only the three approved transport scopes: Tbilisi, all of Georgia, and nearby countries by arrangement. It may explain suitable vehicle situations and the loading process without making unsupported guarantees.

## SEO and structured data

- Every page needs a unique localized title and meta description.
- Generate one self-referencing canonical URL per localized page.
- Generate corresponding `ka`, `en`, `ru`, and `x-default` alternates for that same page.
- Keep Open Graph URL and locale metadata aligned with the canonical page.
- Keep JSON-LD claims accurate. Shared business data belongs in `AutomotiveBusiness`; page-specific schema should be added only when it represents visible content.
- Preserve Astro sitemap generation and verify new pages appear in the generated sitemap.
- Update `public/robots.txt` only if the final production domain changes.

## Design and frontend standards

- Preserve the existing industrial, editorial visual direction: dark surfaces, warm orange accent, bold typography, large imagery, and restrained motion.
- Reuse the existing shell, spacing, button, heading, and color tokens before creating new patterns.
- Keep layouts responsive at mobile, tablet, and desktop widths. Long Georgian and Russian labels must not overflow.
- Use semantic landmarks and a logical heading hierarchy.
- All interactive elements need keyboard access and visible focus states.
- Images need meaningful localized `alt` text unless decorative.
- Respect `prefers-reduced-motion` and avoid unnecessary animation.
- Use Astro's `<Image />` for processed source images and provide appropriate `widths`, `sizes`, loading priority, and formats.

## Business data and launch blockers

The phone, WhatsApp URL, and dispatch wording may still be placeholders. Keep them centralized and easy to replace. Before making launch-readiness claims, confirm:

- Real phone and WhatsApp numbers.
- Verified service area and cross-border destinations.
- Operating hours or whether calls are strictly by arrangement.
- Any address shown publicly.

## Verification checklist

For changes affecting routes, localization, metadata, navigation, or layout:

1. Run `pnpm run build` and require zero errors.
2. Confirm all Georgian, English, and Russian routes build.
3. Inspect generated canonical and `hreflang` tags for each changed page.
4. Confirm changed pages are present in the generated sitemap.
5. Test navigation and the locale switcher on desktop and a narrow mobile viewport.
6. Check for horizontal overflow, keyboard focus, missing alt text, and untranslated strings.
7. Stop temporary development servers and remove temporary browser-test artifacts after QA.

Do not commit generated or machine-local directories such as `node_modules/`, `dist/`, `.astro/`, `.pnpm-store/`, `.wrangler/`, or browser-test output. Project-local skills under `.agents/skills/` and `skills-lock.json` are intentional repository files.
