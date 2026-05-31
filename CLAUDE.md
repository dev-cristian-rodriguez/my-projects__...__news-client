# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # ESLint (zero warnings policy)
pnpm format     # Prettier over src/
```

Package manager is **pnpm** (not npm or yarn).

## Environment

Requires a `.env` file at the root with:

```
VITE_URL_BACKEND_DJANGO=<django api base url>
VITE_NEXT_APP=<next.js app url>
```

The Django backend is the sole data source — all news fetches hit `VITE_URL_BACKEND_DJANGO`.

## Architecture

**Entry point flow:** `src/www.jsx` → `src/Main.jsx` → `ThemeProvider` wraps `RoutesApp`.

**Routing** (`src/routes/index.routes.jsx`): Uses `HashRouter`. Three routes, all wrapped in `Layout`:
- `/` → `Home` — landing page with hero, benefits cards, and video
- `/news` → `News` — fetches initial news from `/news/initial_news/`, shows category pills + search
- `/news/:slug` → `LeakedNews` — fetches from `/news/news_category/?slug=<slug>`, handles both category filtering and free-text search via the same slug param

**Theme system** (`src/context/ThemeContext.jsx`): Dark mode is toggled by adding/removing the `dark` class on `document.documentElement`. Persists to `localStorage`. Consumed via `useTheme()` hook.

**Layout** (`src/components/Layout/index.jsx`): Wraps every view with `Navbar` + `Footer` in a flex-column full-height shell.

**Loading states**: Views control their own skeleton display via a `showNews` boolean that flips to `true` on a successful API response. `NewsGridSkeleton` from `src/components/skeleton/NewsCardSkeleton.jsx` is shared between `News` and `LeakedNews`.

## Styling

- **Tailwind CSS v3** with `darkMode: 'class'`
- Custom brand color token: `primary` (`#b50938`), `primary-dark`, `primary-light` — use these instead of raw hex values
- Font: Poppins (sans-serif via Tailwind `fontFamily.sans`)
- Path alias `@/` resolves to `src/`
