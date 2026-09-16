# Inaayatullah International Academy Design System

## Direction

A welcoming school community, expressed through framed compositions, soft colour, rounded panels and clear, balanced content. Design for phones first. Keep the existing hero and gallery compositions, with the updated site typography.

## Typography

- Headings and expressive text: Bricolage Grotesque.
- Lora is reserved for selective editorial accents in upright styles only.
- Hero headline: Bricolage Grotesque.
- Body, navigation, labels and controls: Manrope.
- Body copy uses a comfortable line height and starts at 16px. Supporting captions and labels can be smaller.
- Use a clear hierarchy. Section titles scale from 32px on phones to 52px on larger screens.

## Colour and shape

- Preserve the Academy navy, cyan and sky blue brand colours.
- Use warm ivory for the canvas, white for cards, and soft blue, sage and sand for supporting surfaces.
- Keep all colours in semantic tokens in `src/app/globals.css`.
- Main panels use 28px corners. Cards use 16px to 24px corners. Buttons use 12px corners.
- Borders and shadows stay light. Avoid glass effects, heavy gradients and continuous decorative movement.

## Layout and content

- Mobile gutters start at 20px. Content expands to a maximum width of 80rem.
- Use stacked panels on phones, then two or three columns when space permits.
- Keep a short heading, one focused paragraph and a small number of useful details per section.
- Programme details use native expandable disclosures, with full keyboard support and no extra client library.
- Condense the Director’s message into a quotation panel.
- Keep a three step admissions journey with a clear next action.
- Keep the hero imagery, composition and wording. Only adjust typography, fitting and link destinations as needed.
- Keep the gallery composition, imagery and captions.
- Keep image overlays compact on phones. Show one short title and hide secondary copy until larger screens.

## Interaction and performance

- Use a choreographed hero entrance, a continuous Academy highlights ticker and staggered section reveals.
- Give cards, icons, gallery images, buttons and expandable content clear motion feedback.
- Hover movement is enabled only on devices that support hovering. Press feedback works on touch screens.
- Respect reduced motion, including when the preference changes during a visit.
- Server content stays visible when JavaScript is unavailable.
- Use CSS transforms and opacity for movement. Do not add an animation or carousel library.
- Keep continuous animation to the highlights ticker, hero artwork and small status details.
- Provide a visible ticker pause control and pause it during pointer hover.
- Use Next.js responsive images with deferred loading below the hero.
- Keep the mobile navigation compact, keyboard accessible and easy to dismiss.
- Touch controls are at least 44px, with 48px preferred for primary actions.

## Content and navigation

- School facts live in `src/lib/site.ts`.
- Keep Home visible in both desktop and mobile navigation.
- Navigation targets existing sections or available pages.
- Never invent contact details. Enable WhatsApp only when a valid school number is configured.
- Use authentic Academy photography across public pages, with specific alternative text that describes each activity.
- Never use em dashes or en dashes in user facing copy or documentation.
- Use commas, colons, full stops or the word "to" for ranges. Avoid optional hyphenated wording.
