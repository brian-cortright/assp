---
name: Action Sports Safety Project
description: Brand site for a 501(c)(3) that prepares, equips, and trains action-sports communities. Pine + Clay over warm paper; honest materials; donate is the spine.
colors:
  pine: "#2D4A3E"
  pine-deep: "#1E332B"
  pine-line: "#3F6354"
  clay: "#C4622D"
  clay-deep: "#A24E20"
  clay-pale: "#F2DCC9"
  sand: "#F2E8D9"
  chalk: "#FAF7F2"
  stone: "#8B8178"
  stone-line: "#C6BFB5"
  ink: "#1C1917"
  ink-2: "#4A423B"
  ink-3: "#6E655B"
  focus: "#C4622D"
typography:
  display:
    fontFamily: "Fraunces, 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(3rem, 6vw + 1rem, 5.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, 'Source Serif 4', Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Fraunces, 'Source Serif 4', Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "3px"
  md: "5px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-6: "24px"
  s-8: "32px"
  s-12: "48px"
  s-16: "64px"
  s-20: "80px"
  s-24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.clay-deep}"
    textColor: "{colors.chalk}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.pine}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-outline-hover:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.pine-deep}"
  surface-canvas:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
  surface-paper:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
  surface-pine:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.chalk}"
    padding: "{spacing.s-12} {spacing.s-6}"
---

<!-- SEED: tokens are committed; component implementations land after global.css is refactored to this palette. Re-run /impeccable document once the refactor ships to capture real components and write .impeccable/design.json. -->

# Design System: Action Sports Safety Project

## 1. Overview

**Creative North Star: "Parking Lot After a Long Ride"**

ASSP's visual system reads as terrain. Pine forest at the edge of the lot, trail dust on the tailgate, warm paper light at the end of the day. The palette and type are warm-side and committed; nothing on the page is cool or institutional. Pine anchors trust. Clay carries the ask. Sand and Chalk keep the page from going corporate-heavy. The result is a site that a small foundation reviewer reads as serious, and a rider reads as by-us-for-us, without either group feeling the language switch.

The system explicitly rejects the five default looks the org's category falls into: nonprofit-template charity sites (soft blue and green gradients, smiling-kid stock photography, donation thermometers), safety-bureaucracy aesthetics (institutional blues, compliance gray, PDF density), action-sports and energy-drink brands (hard black, neon yellow or red, motocross slashes, italic shouting caps), SaaS startups (purple-to-pink gradients, hero-metric grids, glassmorphism), and GoFundMe-style emotional appeals (full-bleed beneficiary photography, big yellow CTAs). If a draft can be mistaken for any of those, the draft is wrong.

Density is generous. Type does the persuading; the layout does not need ornament to feel finished. Motion is restrained — state changes and a few honest transitions, nothing choreographed.

**Key Characteristics:**

- Two-color spine: Pine for anchoring surfaces and headings, Clay for actions.
- Warm-side everything: no neutral is cool, no hue is bluer than the moss tertiary.
- Serif display + grotesque body + mono labels — three voices, never blended.
- Generous spacing on a 4pt scale; rhythm comes from contrast between sections, not from cards.
- Flat by default. Depth comes from color and spacing, not shadows.

## 2. Colors: The Terrain Palette

A six-role palette pulled from the physical places action-sports communities live in. All hues sit between roughly 35° (clay) and 158° (pine); nothing is cool.

### Primary

- **Pine** (`#2D4A3E`, `oklch(33% 0.04 158)`): the trust color. Carries headings, navigation, dark hero panels, the footer slab. Anchors the page the way a tree line anchors a landscape.

### Secondary

- **Clay** (`#C4622D`, `oklch(58% 0.16 41)`): the action color. Primary CTAs only, plus active states and the few moments of emphasis that must read across an entire screen. Used sparingly so it never stops meaning "act now."

### Tertiary (warm surfaces)

- **Sand** (`#F2E8D9`, `oklch(92% 0.03 80)`): warm paper surface. Used for cards on dark backgrounds, pull quotes, and program callout blocks.
- **Chalk** (`#FAF7F2`, `oklch(97% 0.008 75)`): primary page background. Warmer and softer than `#fff`. Never use `#fff`.

### Neutral

- **Ink** (`#1C1917`, `oklch(20% 0.008 50)`): body text. Warm near-black; never use `#000`.
- **Stone** (`#8B8178`, `oklch(56% 0.015 60)`): captions, metadata, labels, secondary type.
- **Stone Line** (`#C6BFB5`, `oklch(82% 0.012 70)`): borders, dividers, rules. Calibrated to read against both Chalk and Sand.

### Named Rules

**The Clay Earns Its Salience Rule.** Clay is a tertiary color, not a carry color. It appears at most **two times on any single page**, only on the page's primary action(s): the donate CTA, the apply-for-grant CTA, the contact submit. **Allowed Clay surfaces:** the donate button in the sticky nav (one), and one primary CTA in the page body (one). **Banned Clay surfaces:** body link underlines, inactive chips, "see more" affordances, icon decoration, tag bullets, monogram backgrounds, full-section drenches, hover washes on non-action elements. **Clay-as-action must always be paired with a second signal** (a label, an underline, position in the layout) so the meaning survives for color-blind readers. If Clay is on a page in more than two places, two of those places are wrong.

**The Pine Carries the Page Rule.** Pine is the trust anchor and the workhorse. Header, footer, dark sections, dark CTAs on light, headings, focused borders on inputs all use Pine. Sand and Chalk hold the warm paper layer. Clay only punctuates.

**The Warm-Side Rule.** No cool neutrals. Every neutral is tinted toward Stone or Ink (hue ~50-70deg). Cool grays read as "tech company" and break the terrain metaphor immediately.

**The Pine Is the Slab Rule.** Dark sections are Pine, not Ink. Ink is for type. Pine is for surfaces. Mixing them up turns the page into a black-on-black trap.

## 3. Typography

**Display Font:** Fraunces (with Source Serif 4, Georgia, serif fallback)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with Menlo, Monaco, Courier New, monospace fallback)

**Character:** Fraunces brings warmth and a hint of editorial weight without going period-piece. Inter keeps body copy current and legible at small sizes. JetBrains Mono on eyebrows and labels signals craft and field-note specificity. The three voices stay in their lanes; they never blend.

### Hierarchy

- **Display** (Fraunces, weight 500, `clamp(3rem, 6vw + 1rem, 5.5rem)`, line-height 1.02, tracking -0.01em): hero headlines only. One per page.
- **Headline** (Fraunces, 500, `clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem)`, line-height 1.1): section openings.
- **Title** (Fraunces, 500, 1.5rem, line-height 1.2): program names, board card names, sub-section titles.
- **Body** (Inter, 400, 1rem, line-height 1.65): primary reading text. Cap measure at **65–75ch**.
- **Body Lg** (Inter, 400, 1.25rem, line-height 1.55): hero subhead, mission statement, lead paragraphs.
- **Label** (JetBrains Mono, 500, 0.75rem, tracking 0.08em, uppercase): eyebrows, metadata, captions, in-page tags, button text.

### Named Rules

**The Three Voices Rule.** Fraunces is for things that say what something is. Inter is for things that explain it. JetBrains Mono is for things that locate it (date, place, program number, role). Never use Fraunces for body copy, never use mono for headlines, never use Inter for eyebrow labels.

**The No-Italic-Caps Rule.** Italic uppercase reads as "extreme." Never set labels or buttons in italic caps.

## 4. Elevation

The system is **flat at rest**. Depth is conveyed through color (Pine slab against Chalk page), spacing (generous vertical rhythm separating sections), and type contrast (Display against Body). Shadows are rare and only used to communicate state, never to decorate.

### Shadow Vocabulary

- **State lift** (`box-shadow: 0 1px 0 0 var(--clay-deep)`): the only "shadow" used at rest is a 1px hairline beneath an active Clay CTA. It reads as ink, not as a drop shadow.
- **Focus ring** (`outline: 2px solid #C4622D; outline-offset: 2px`): keyboard focus is a hard Clay ring with offset, not a glow. Readable in bright outdoor light.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat. No `box-shadow` on cards, panels, or modals at rest. If a thing needs a shadow to feel real, the thing is wrong.

**The No-Glass Rule.** No `backdrop-filter`, no translucent overlays for decoration, no glassmorphism in any form. Sticky headers are solid Pine.

## 5. Components

Components specs below describe the **target state** after the `global.css` refactor to this palette. Until that refactor ships, the live site reflects an older terracotta-over-bark scheme; the spec is the source of truth.

### Buttons

- **Shape:** subtle radius (`3px`). Not pill, not square. The radius is small enough to read as honest material, not pharmaceutical.
- **Primary (Clay):** Clay background, Chalk text, JetBrains Mono label at 0.75rem with 0.08em tracking, uppercase, padding `14px 28px`. Used for donate, apply for grant, submit, primary contact actions.
- **Hover / Focus:** background shifts to Clay-deep (`#A24E20`); 150ms transition on background only (no transform, no scale). Focus-visible adds a 2px Clay outline with 2px offset.
- **Outline (secondary):** transparent background, Pine text, 1px Pine border. Hover fills with Sand and shifts text to Pine-deep.
- **White (on Pine slabs):** Chalk background, Pine text, used inside dark Pine sections where Clay-on-Pine would clash.

### Cards / Containers

- **Corner Style:** `3px` to match buttons; cards never round more than buttons.
- **Background:** Chalk on a Chalk page is invisible — cards exist only when they're truly the best affordance. Default surface for grouped content is Sand on Chalk pages, or Sand on Pine slabs.
- **Border:** 1px Stone-Line for cards on Chalk; no border for cards on Pine (the Sand surface is its own boundary).
- **Internal Padding:** `s-6` (24px) to `s-8` (32px), with the larger value reserved for cards holding a heading + body.
- **Shadow Strategy:** none at rest. See Elevation.
- **No nested cards.** Ever.

### Inputs / Fields

- **Style:** 1px Stone-Line border on Chalk, `3px` radius, 12px vertical padding, Inter body at 1rem.
- **Focus:** border shifts to Clay; outline 2px Clay with 2px offset. No glow.
- **Label:** JetBrains Mono label style above the field, never inside it. Placeholder text is supplemental, not a label substitute.
- **Error:** error message in a darker terracotta tone below the field with a leading icon; never red, never a left stripe.

### Navigation

- **Header:** solid Pine background, Chalk text, sticky on scroll. Fraunces wordmark on the left, Inter nav links on the right at body-small size. Active route gets a 1px Clay underline 4px below the baseline.
- **Mobile:** disclosure menu opens to a full-width Pine sheet; links stack at body-lg size with 24px vertical rhythm; the donate action sits at the top of the sheet as a full-width Clay button.

### Eyebrow / Section Lead

- **Style:** JetBrains Mono, uppercase, 0.75rem, 0.08em tracking, Stone color. Sits 8px above section headlines. The eyebrow is the locator (program 03 · trail equipment · since 2024); the headline says what.

### Signature: The Impact Ladder

- A vertically stacked numbered list of donation tiers; each rung shows a dollar figure in Fraunces Display-small, a short bold title in Inter, and a one-line clarifier. Rungs share a 1px Stone-Line rule between them. No cards, no icons, no gradients. The rhythm itself does the work.

## 6. Do's and Don'ts

### Do:

- **Do** use Pine (`#2D4A3E`) as the trust-anchor and carry color: header, footer, dark slabs, dark CTAs on light, headings on Chalk, focused input borders.
- **Do** reserve Clay (`#C4622D`) for the page's primary action(s) and nothing else. Maximum two Clay surfaces per page (typically one in the nav, one in the body).
- **Do** pair Clay with a second visual signal (label, underline, position) so meaning survives without color.
- **Do** use Chalk (`#FAF7F2`) as the page background. Never use `#fff`.
- **Do** use Ink (`#1C1917`) for body type. Never use `#000`.
- **Do** use Sand (`#F2E8D9`) for warm paper surfaces, callouts, cards on Pine slabs.
- **Do** keep body copy in Inter at 65-75ch measure.
- **Do** name disciplines specifically (skating, mountain biking, trail running) instead of "action sports" when a specific discipline applies.
- **Do** vary section openings; do not give every section the same eyebrow + Fraunces-clamp-headline opener.
- **Do** respect `prefers-reduced-motion: reduce`; all non-essential motion degrades to static.
- **Do** keep the layout flat. Depth from color and spacing, not shadows.

### Don't:

- **Don't** introduce blue, navy, teal, or cool gray. The palette is warm-side; cool hues break the terrain metaphor.
- **Don't** use `#000` or `#fff` anywhere. Every neutral is tinted toward Stone or Ink.
- **Don't** use Clay on tag bullets, monogram backgrounds, body links, list markers, icon decoration, inactive chips, hover washes on non-action elements, or as a full-section drench. Clay is for action, not for accent.
- **Don't** use gradients on text (`background-clip: text`) or on Clay buttons.
- **Don't** use glassmorphism, backdrop-blur, or translucent overlays as decoration.
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent on cards, callouts, or alerts).
- **Don't** use the hero-metric template (big number + small label + supporting stat grid). It's a SaaS cliche.
- **Don't** stack cards inside cards.
- **Don't** use identical card grids (same-sized icon + heading + text, repeated). Vary structure.
- **Don't** ship a page about action-sports communities with zero photographs of action-sports communities. If real assets are not yet shot, ship documented "photo pending" slots, not colored placeholders dressed as design.
- **Don't** use stock photography of smiling kids, beneficiary-as-spectacle imagery, or anything that could read as a charity-template hero.
- **Don't** use words this brand refuses: "extreme," "hardcore," "cutting-edge," "synergy," "leverage," "scalable," "stakeholders," "the underserved," "life-changing," "empower." See PRODUCT.md `Voice & Tone`.
- **Don't** use italic uppercase for labels, buttons, or eyebrows.
- **Don't** animate CSS layout properties (width, height, margin, top/left). Animate `transform` and `opacity` only.
- **Don't** rely on shadows to create hierarchy. Use color contrast and spacing.
- **Don't** use generic microcopy ("Scroll to learn more," "Learn more," "Get started"). Be specific to what the next thing actually is.
