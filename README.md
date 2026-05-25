# Быстрее ветра

Premium single-user PWA running tracker for Irina.

## Stack

- React + TypeScript + Vite
- TailwindCSS + shadcn/ui-style primitives
- Framer Motion
- Leaflet / React Leaflet
- LocalStorage seed persistence
- Web App Manifest + Service Worker

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The Vite base path is `/RUN/`. Deploy the generated `dist` folder, not the source project root. The included GitHub Actions workflow builds the app and publishes `dist` to Pages.

## iPhone PWA

Open the deployed HTTPS URL in Safari, tap Share, then Add to Home Screen. The app uses `display: standalone`, portrait orientation, Apple touch icon, theme color, splash-compatible metadata, and offline static caching.
