# BouwReach

Premium Next.js website for BouwReach, a Dutch niche agency focused on generating project inquiries for construction, prefab, facade, window, and renovation companies.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Features

- Dutch and English versions
- Homepage, packages, contact, thank-you, privacy, and cookies pages
- Structured logo system with full wordmark and BR monogram usage rules
- Asset-driven media system based on semantic classification
- Reusable premium card and section components

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for Dutch or [http://localhost:3000/en](http://localhost:3000/en) for English.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Project Structure

```text
app/                Next.js app routes
components/         Reusable UI and brand/media components
lib/                Media classification and discovery logic
assets/             Logos, images, videos, and media sources
```

## Media System

Media is selected from the `assets/` directory and classified by:

- folder location
- filename
- derived alt text
- optional JSON sidecar metadata

This powers homepage curation, frame selection, and overlay behavior.

## Logo System

The branding system uses two variants:

- Full logo for header and footer
- BR monogram for subtle watermark and card-level branding

The placement logic is intentionally restrained so branding feels premium and consistent instead of decorative.

## Quality Checks

Before pushing to GitHub:

```bash
npm run lint
npm run typecheck
npm run build
```

## Notes

- The site is not designed as an npm package, so `private` remains enabled in `package.json`.
- Media discovery currently reads from the filesystem at runtime, which is fine for this project but can be optimized later with caching or a generated manifest if needed.
