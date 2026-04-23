# Noveshex React App

Dark-first Noveshex redesign built with React + Vite + React Router.

## Stack

- React 18
- Vite
- React Router
- Plain CSS with reusable design tokens

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/
  components/   # Reusable UI building blocks
  data/         # Navigation, page metadata, legal content
  layout/       # Shared application layout
  pages/        # Route-level pages
  styles/       # Global design system and layout styles
```

## Notes

- Legal pages are driven from `src/data/siteData.js` via slug-based routing.
- Replace the placeholder legal copy with approved production text before launch.
- Hash links on the homepage are intentionally simple for compatibility with static hosting.
