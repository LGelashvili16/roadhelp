---
name: RoadHelp
description: Industrial, editorial vehicle-transport design built around real flatbed photography and direct call actions.
colors:
  graphite-canvas: "#15191d"
  graphite-raised: "#1e2328"
  graphite-soft: "#252b31"
  graphite-ink: "#17191b"
  warm-paper: "#f4f1eb"
  quiet-copy: "#b5b7b7"
  hairline: "rgba(244, 241, 235, 0.16)"
  route-orange: "#ef6c35"
  route-orange-hover: "#ff7b42"
  daylight-canvas: "#f3f1ec"
  daylight-raised: "#e8e6e0"
  daylight-soft: "#dedbd3"
  daylight-ink: "#1b1f22"
  daylight-muted: "#555b60"
  daylight-hairline: "rgba(27, 31, 34, 0.17)"
typography:
  display:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", "Segoe UI", Arial, sans-serif'
    fontSize: "clamp(44px, 5.25vw, 78px)"
    fontWeight: 820
    lineHeight: 0.99
    letterSpacing: "-0.055em"
  headline:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", "Segoe UI", Arial, sans-serif'
    fontSize: "clamp(36px, 4vw, 58px)"
    fontWeight: 780
    lineHeight: 1.06
    letterSpacing: "-0.045em"
  title:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", "Segoe UI", Arial, sans-serif'
    fontSize: "clamp(22px, 2.2vw, 31px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", "Segoe UI", Arial, sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: '"Noto Sans Georgian Variable", "Noto Sans Variable", "Segoe UI", Arial, sans-serif'
    fontSize: "12px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  marker: "2px"
  compact-control: "8px"
  switcher: "12px"
  surface: "14px"
spacing:
  shell-gutter: "24px"
  shell-gutter-mobile: "16px"
  control-inline: "24px"
  section: "120px"
  section-mobile: "78px"
components:
  button-primary:
    backgroundColor: "{colors.route-orange}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.surface}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.route-orange-hover}"
    textColor: "{colors.graphite-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.surface}"
    padding: "0 24px"
    height: "52px"
  button-small:
    backgroundColor: "{colors.route-orange}"
    textColor: "{colors.graphite-ink}"
    rounded: "{rounded.surface}"
    padding: "0 18px"
    height: "42px"
  locale-option:
    backgroundColor: "transparent"
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.compact-control}"
    width: "32px"
    height: "30px"
---

# Design System: RoadHelp

## Overview

**Creative North Star: "The Flatbed Route Brief"**

RoadHelp should feel like a calm, capable transport operator presented through an industrial editorial lens. Graphite surfaces create the working environment; warm off-white type carries the information; orange behaves like a route marker, drawing attention to actions and operational detail. The design persuades with visible process and real vehicle photography, not corporate polish or unsupported proof.

The shipped homepage and About page are the reference implementation. About extends the world with a split hero, an arrival image of the truck, hairline-separated handling rows, and a high-contrast orange coverage field. Density is spacious but purposeful: large headings establish confidence, then structured rows make the service easy to scan.

**Key Characteristics:**

- Dark graphite-first surfaces with a system-aware off-white light mode.
- One warm orange signal for calls, route markers, active states, and small industrial details.
- Bold variable sans typography that handles Georgian, English, and Russian without changing character.
- Large, natural truck imagery with controlled crops and restrained depth.
- Hairline editorial rows instead of generic card collections.
- Call-first actions, with WhatsApp as the supporting route.

## Colors

The palette is mostly graphite and warm paper; route orange is deliberately rare and functional.

### Primary

- **Route Orange:** Use for the primary call action, route or sequence markers, active locale/navigation accents, selection, and the About coverage field.
- **Route Orange Hover:** Reserve for hover feedback on filled orange controls.

### Neutral

- **Graphite Canvas:** Default dark page field and footer surface.
- **Raised Graphite:** Alternate sections, mobile navigation, and grouped content.
- **Soft Graphite:** One-step emphasis inside grouped process content.
- **Warm Paper:** Primary dark-mode text and strong focus outline.
- **Quiet Copy:** Secondary paragraphs, captions, and supporting information.
- **Hairline:** Dividers, row boundaries, and quiet control borders.
- **Daylight Canvas / Raised / Soft:** Corresponding light-scheme surfaces; keep them warm and off-white, never clinical white.
- **Daylight Ink / Muted / Hairline:** Light-scheme text and dividers with the same hierarchy as dark mode.

**The One Signal Rule.** Orange is the only chromatic accent. Do not add competing blues, greens, gradients, or status colors without a real semantic need.

**The Warm Neutral Rule.** Use warm paper and graphite rather than pure white and pure black; the site should retain a physical, road-ready character in both color schemes.

## Typography

**Display and body family:** Self-hosted Noto Sans Georgian Variable first, Noto Sans Variable second, then system sans fallbacks.

**Character:** One variable family keeps all three languages visually equal. Heavy, tightly tracked display type feels engineered and direct; body text stays open and calm enough for practical service information.

### Hierarchy

- **Display:** Hero statements only. Use the normative fluid display token, with very tight leading and tracking; allow locale-specific wrapping instead of shrinking one language independently.
- **Headline:** Major section titles. Keep line lengths compact and pair with generous space.
- **Title:** Row and process headings. Use strong weight and modest negative tracking.
- **Body:** Explanatory copy. Default to the body token and keep readable measures near 580–650px on wide screens.
- **Label:** Eyebrows, numbers, locales, and compact metadata. Heavy, tracked, and uppercase only where the content naturally supports it.

**The One Family Rule.** Do not introduce a display serif, condensed font, icon font, or Latin-only brand face; Georgian and Cyrillic must remain first-class.

## Layout

The shared shell caps content at 1180px. Desktop and tablet use 24px side gutters; screens at 720px and below use 16px. Standard sections use 120px vertical padding, reduced to 78px on mobile. Reuse the shell and section rhythm before adding local spacing.

Desktop compositions alternate between full-width editorial rows and asymmetric two-column grids. The homepage hero is full-viewport and copy-led; the About hero uses a text/photo split with the truck occupying the larger column. Section copy usually caps at 580–650px. Major gaps are fluid with `clamp()` so the layouts breathe without breaking text flow.

Responsive behavior is deliberate:

- At 900px, desktop navigation and the inline locale switcher collapse into the menu; multi-column content becomes one column where needed.
- At 720px, the header contracts, sections tighten, process panels stack, the About hero uses a 4:3 crop, and a fixed 68px call bar becomes the dominant action.
- At 430px, action rows may wrap, service row arrows can disappear, and CTA buttons share the available width.
- Layouts must tolerate long Georgian and Russian labels without horizontal overflow or clipped controls.

**The Editorial Row Rule.** When information repeats, prefer a ruled list or continuous grid with shared hairlines; do not turn every item into a floating card.

## Elevation & Depth

The system is flat by default. Depth comes from alternating graphite tones, hairline boundaries, full-bleed orange, photo scrims, and the physical presence of imagery. Shadows are exceptional: the About hero image uses one deep photographic shadow, and the open mobile menu uses one compact overlay shadow. Do not shadow ordinary sections, rows, or buttons.

Homepage photography fills the viewport under directional dark scrims so text remains legible while the truck stays visible. Supporting and About imagery uses rounded clipping, natural aspect ratios, `object-fit: cover`, intentional subject positioning, and localized captions/alt text. Keep image color natural; overlays establish hierarchy rather than decorative filters.

**The Evidence First Rule.** Use real RoadHelp truck imagery to prove the service and process. Avoid generic towing stock, abstract transport illustrations, and decorative image collages.

## Shapes

The recurring surface/control radius is gently rounded, not pill-like. Smaller radii belong to locale options and orange marker bars. Hairline borders define structure; skewed orange bars echo the logo and act as compact industrial punctuation. Keep silhouettes robust and geometric, with no soft blob shapes or excessive rounding.

## Components

### Buttons and links

- **Primary call button:** Filled route orange with dark ink, heavy label type, a 52px minimum height, and the standard surface radius. Hover lifts by 2px and brightens; active presses down and scales slightly.
- **Secondary button:** Transparent with a hairline border and warm-paper text. It supports WhatsApp or a lower-priority action and must not visually compete with the call button.
- **Text link:** Bold inline label plus an orange diagonal arrow. Hover movement is small and directional.
- **Mobile call bar:** Fixed to the bottom below 720px, full-width orange, 68px minimum height, and split between localized action text and the phone number. Reserve page bottom padding for it.
- **Focus:** Buttons, links, and menu summaries use a clearly visible 3px outline with a 4px offset. Preserve keyboard focus in both color schemes.

### Editorial rows and panels

- **Service and approach rows:** Use top/bottom hairlines, a small orange number or skewed marker, a strong title, muted body copy, and an optional compact call affordance.
- **Process group:** A continuous three-column framed grid with 1px separators; a single soft-graphite middle panel may provide rhythm. Stack to one column on mobile.
- **Coverage field:** A full orange section with dark text and hairline place rows. Keep it factual and restrained; it is a high-contrast information block, not a promotional banner.

### Navigation and locale behavior

- The absolute header overlays hero surfaces and uses a quiet bottom hairline.
- Desktop navigation is compact and low-contrast at rest; hover and `aria-current="page"` restore full contrast.
- Locale options must link to the equivalent current page, not always the homepage. The selected locale uses `aria-current="page"`.
- From non-home pages, section navigation points to the locale-aware homepage plus the section anchor.
- At mobile width, use the native `details`/`summary` menu and include all localized navigation and locale choices.

### Photography

- Use Astro-processed responsive images with meaningful localized alt text, explicit `widths`/`sizes`, and WebP output.
- Hero evidence loads eagerly; supporting images load lazily.
- The About hero image is a split-layout anchor with a narrow skewed orange edge marker, caption, and restrained arrival motion.

### Motion

Use 180ms ease transitions for control feedback. Image movement is slower and subtle: a small hover zoom or a short eased truck arrival. Motion should reinforce direction and tactility, never delay reading or calling. Under `prefers-reduced-motion: reduce`, disable smooth scrolling and reduce all animation/transition duration to effectively zero.

## Do's and Don'ts

### Do:

- **Do** make calling the clearest primary action and keep WhatsApp visibly secondary.
- **Do** use real truck photography, localized alternative text, readable scrims, and intentional crops.
- **Do** preserve page-aware navigation and equivalent Georgian, English, and Russian locale links on every shipped page.
- **Do** use semantic landmarks, logical heading order, keyboard-accessible controls, visible focus, and reduced-motion behavior.
- **Do** show careful handling through concrete process language and visible flatbed method.
- **Do** verify long Georgian and Russian copy at desktop, tablet, and narrow mobile widths.

### Don't:

- **Don't** add generic gradient-heavy SaaS styling, glass effects, floating card grids, oversized pills, decorative icons, or competing accent colors.
- **Don't** use generic roadside-rescue imagery or imply services beyond vehicle evacuation and transport by flatbed.
- **Don't** invent roadside repair, tire changes, fuel delivery, storage, 24/7 availability, prices, response times, reviews, certifications, fleet size, destinations, addresses, or operating hours.
- **Don't** turn the About page into company-history, metric-card, testimonial, or fleet-marketing content; its shipped role is driver, method, service area, handling process, then contact.
- **Don't** add a static contact form without a real endpoint, validation, privacy handling, and success/error states.
- **Don't** ship a navigation or content change in only one locale.
