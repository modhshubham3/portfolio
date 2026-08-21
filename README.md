# Shubham Modh — Portfolio

Personal portfolio of **Shubham Modh**, full-stack .NET developer building
real-time GPS fleet-tracking platforms (~700 buses) on C#, PostgreSQL, Kafka,
and Angular.

Built with **Next.js 16** (App Router, static export) and **Tailwind CSS 4**.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

Outputs a fully static site to `out/` (`output: "export"` in
`next.config.ts`), so it deploys anywhere — Vercel picks it up automatically.

## Structure

- `src/app/` — layout (fonts, metadata, theme bootstrap) and the single page
- `src/components/` — one component per section: Nav, Hero, About, Stack,
  Projects, Experience, Education, CollegeProjects, Contact, Footer, plus small
  client components (ThemeToggle, Typewriter, Reveal, MobileMenu)
- `src/app/globals.css` — design tokens (dark-first, light via system
  preference or the toggle) mapped to Tailwind utilities via `@theme`

## Notes

- Dark/light theme: respects the OS by default; the navbar toggle overrides
  and persists the choice in `localStorage`.
- All animations are gated behind `prefers-reduced-motion`.
- No client-side data fetching, no external assets except Google Fonts via
  `next/font`.
