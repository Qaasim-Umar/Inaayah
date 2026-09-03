# Inaayatullah International Academy Design System

## Direction

Editorial Islamic Academic: dignified, contemporary, warm, visually led and academically aspirational. The composition should feel like an established Nigerian school rather than a generic software template.

## Source of truth

- Runtime theme tokens live in `src/app/globals.css`.
- Browser-only theme values live in `src/lib/theme.ts`.
- School-wide factual content lives in `src/lib/site.ts`.
- Components consume semantic utilities such as `bg-brand`, `text-foreground`, `bg-surface`, `border-border` and `ring-focus`.
- Raw colour values do not belong in React components.

## Brand palette

- `brand`: deep navy for primary actions, headings and prominent surfaces.
- `sky`: light blue drawn from the circular crest.
- `accent`: cyan for focus, links and restrained highlights.
- `background`: warm off-white page canvas.
- `surface`: white content surface.
- `surface-muted`: warm neutral supporting surface.
- `sand`: restrained warm accent.
- `foreground` and `muted-foreground`: accessible text roles.
- `success`, `warning` and `danger`: semantic feedback only.

## Typography

- Display and headings: Oswald in semibold and bold weights.
- Body, navigation and interface: Manrope in regular through bold weights.
- Arabic passages: Noto Naskh Arabic.
- Body copy remains at least 16px with a comfortable line height.
- Longer text should remain within approximately 65 to 75 characters per line.

## Layout

- Mobile-first responsive implementation.
- Maximum content width: 80rem.
- Page gutters: 20px mobile, 32px tablet, 48px desktop.
- Use a 4px/8px spacing rhythm.
- Avoid horizontal overflow at 375px.

## Shape and elevation

- Buttons use compact rectangular geometry with a restrained corner radius.
- Editorial cards use square or subtly rounded corners, fine rules and generous internal spacing.
- Shadows are rare, restrained and tokenized as `shadow-soft` and `shadow-card`.
- Prefer typography, photography, borders and contrast over floating card effects.
- Avoid pill-heavy layouts, glassmorphism, heavy gradients and ornamental clutter.

## Editorial composition

- Use oversized serif headlines paired with compact uppercase supporting labels.
- Alternate solid brand fields, warm neutral space and authentic school photography.
- Use asymmetry and occasional controlled overlaps to create an institutional editorial feel.
- Keep navigation focused; secondary destinations belong in the menu panel.

## Interaction and accessibility

- Interactive targets are at least 44 to 48px high.

## Copy punctuation

- Never use em dashes or en dashes in user facing copy.
- Use commas, colons, full stops, or the word "to" for ranges.
- Rewrite optional hyphenated wording where a clear alternative is available.
- All controls require visible hover, active and keyboard-focus states.
- Focus is represented by the `focus` semantic colour.
- Respect `prefers-reduced-motion`.
- Use SVG icons from one consistent family when icons are introduced.
- Never use emojis as interface icons.
- Colour must not be the sole way information is communicated.

## Imagery

- Prefer authentic Nigerian learners, educators and campus scenes.
- Photography should feel candid, respectful and editorial, not staged.
- Do not present generated placeholder photography as documentary evidence of the real campus.
- Replace placeholders with approved Academy photography before launch.

## Brand assets

- Primary mark: approved circular Academy crest.
- Preserve original proportions and colours.
- Maintain generous clear space around the crest.
- Secondary wordmark may be used only when its smaller lettering remains legible.
