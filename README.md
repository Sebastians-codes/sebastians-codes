# Sebastian's Codes Portfolio

A single-page portfolio for Me, a backend-focused developer who loves tinkering with .NET, Rust, and Svelte projects. The site showcases highlighted projects, experience, and a contact section, while offering an immersive themeable UI with project deep links.

## Highlights

- Data-driven layout powered by `src/lib/data/portfolio.json` for quick content updates
- Bun-powered development workflow with fast installs and script execution
- Light/dark theme toggle with persistence via `localStorage`
- Project detail overlays that can be bookmarked through hash-based routing
- Responsive design with background glow effects and smooth section navigation

## Tech Stack

- Bun for package management and lightning-fast dev scripts
- Svelte 5 with the `$state` compiler feature
- Vite 7 for dev server and bundling
- TypeScript for typed components and stores
- Tailored component library under `src/lib/components`

## Getting Started

1. Install dependencies (requires [Bun](https://bun.sh/))
   ```bash
   bun install
   ```
2. Start the Vite dev server
   ```bash
   bun run dev
   ```
3. Open the URL shown in the terminal (default `http://localhost:5173`).

### Build for Production

```bash
bun run build
```

Vite outputs the static build to `dist/`. Preview the production bundle locally with `bun run preview`.

## Content Management

- Hero, About, Skills, Projects, and Contact copy live in `src/lib/data/portfolio.json`.
- Each project entry supports `slug`, `longDescription`, `highlights`, `stack`, and external `links`. Slugs map to hash routes like `#/projects/tasker`.
- Update favicons and other public assets under `public/`.

## Project Structure

```
src/
├── App.svelte              # Root page orchestrating sections and project overlay
├── assets/                 # Local images and static files referenced by components
├── lib/
│   ├── components/         # UI sections (Hero, Projects, Experience, etc.)
│   ├── data/portfolio.json # Portfolio content source of truth
│   └── types.ts            # Shared TypeScript interfaces
└── main.ts                 # Entry point mounting the app
```

## Customisation Tips

- Adjust the default theme in `preferences.defaultTheme` within `portfolio.json`.
- Add socials, new project entries, or experience items directly in the same data file.
- Tweak global styles in `src/app.css` and component-specific styles within their `.svelte` files.

Happy shipping!
