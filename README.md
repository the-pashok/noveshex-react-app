# Noveshex — landing page (reference implementation)

- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict)
- No UI kit, no CSS framework — CSS custom properties + a few utility classes
- Light/dark follows the OS via `prefers-color-scheme` (CSS only: no provider, no
  localStorage, no flash, no hydration mismatch). `data-theme="light|dark"` on `<html>`
  pins a theme if a switcher is ever needed.
- Responsive: fluid `clamp()` type, `auto-fit` grids, breakpoints at 1024 / 840 / 620px
- App screens presented in a draggable, keyboard-navigable coverflow slider

## Run

```bash
npm install
npm run dev
```

## Structure

```
app/
  layout.tsx        root layout — Manrope, metadata, OG image, theme-color
  page.tsx          the whole page: 11 sections in order
  globals.css       tokens (both themes) + utility classes + breakpoints
components/
  Header.tsx        sticky header + burger + mobile panel   ("use client")
  Hero.tsx          headline, store buttons, floating phone
  SectionsStrip.tsx pill row
  Features.tsx      6 feature cards
  FeatureIcons.tsx  the 6 stroke icons
  ScreensSlider.tsx coverflow slider                        ("use client")
  ThemeShowcase.tsx "One app. Two moods." (demo, no toggle)
  Pricing.tsx       Base/Pro/Max + period toggle            ("use client")
  Faq.tsx           native <details> accordion
  CtaBanner.tsx     lime call-to-action block
  Disclaimer.tsx    legal notice (must ship)
  Footer.tsx        4-column footer
  PhoneFrame.tsx    CSS phone mockup, 1 or 2 screenshots
  StoreButtons.tsx  App Store + Google Play pair
  Icons.tsx         chevrons, store glyphs, check ring
data/content.ts     every string, price, screen caption — edit content HERE
public/shots/       10 app screenshots (660x1434)
public/icons/       16 standalone SVGs
public/og-image.png 1200x630 social preview
```

## Before launch

- Real App Store / Google Play URLs (currently `#get`)
- Real legal + company routes in the footer
- Verify the price matrix in `data/content.ts` — only Pro/year came from the app
