# Adithya V Mohan — Portfolio

A dark-mode, glassmorphic, cinematic portfolio built with Next.js 14 (App Router), Tailwind CSS, React Three Fiber / drei, and Framer Motion. All copy is sourced directly from the uploaded CV (`data/resume.ts` is the single source of truth — edit that file to update content anywhere on the site).

## Design system

- **Palette** — void `#05070D`, glass white overlays, cyan `#5FF0E0`, violet `#7C5CFF`, rose `#FF6FA8` used sparingly.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (labels, dates, tags).
- **Signature element** — `StackCore`, a rotating glass icosahedron wrapped in three counter-rotating rings (frontend / backend / database), used in the hero behind the profile photo.

## Theme

A day/night toggle sits in the top nav (sun/moon icon). It flips a `data-theme` attribute on `<html>` between `dark` (default) and `light`, which swaps a set of CSS custom properties in `app/globals.css` — background, text, muted, glass, and accent colors all repaint instantly with a smooth transition. The choice is remembered in `localStorage` and falls back to the visitor's OS preference on first visit, with an inline script that applies it before paint so there's no flash of the wrong theme.

To adjust the light-mode palette, edit the `[data-theme="light"]` block in `app/globals.css`.

## About the assets

Only two files were provided: your **photo** and your **CV**. No college photos or city photographs were supplied, so:

- Your photo is used in the **Hero** (inside the glass + holographic-ring frame) and **About** sections, exactly as requested.
- **Education** uses icon-based glass cards instead of campus photography, since no college images were uploaded.
- "City storytelling" is an **abstract illustrated skyline silhouette** (`components/ui/CitySilhouette.tsx`), not a real photo — it's a placeholder gesture toward Sharjah/Dubai. Swap in real photography any time by dropping images into `public/assets/` and replacing that component (or adding an `<Image>` layer) with your own city shots.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

```
app/                Next.js App Router entry (layout, globals.css, page)
components/          Section components (Hero, About, Skills, Experience, Projects, Education, Achievements, Contact, Footer)
components/three/    React Three Fiber elements (StackCore, ParticleField, SkillOrb)
components/ui/       Reusable primitives (GlassCard, SectionHeading, CitySilhouette)
data/resume.ts        All content — edit here to update the site
public/assets/        Your photo lives here
```

## Notes

- Fully responsive from mobile up; the 3D canvases degrade gracefully and respect `prefers-reduced-motion`.
- SEO: metadata, Open Graph/Twitter tags, and JSON-LD `Person` structured data are wired up in `app/layout.tsx` and `app/page.tsx` — update the `metadataBase` URL once you have a real domain.
- Add real LinkedIn/portfolio URLs in `data/resume.ts` (`profile.links`) once available — they were blank on the CV.
