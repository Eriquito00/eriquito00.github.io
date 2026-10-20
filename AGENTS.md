# AGENTS.md

Personal portfolio SPA: React 19 + TypeScript + Vite 8. Deployed as a GitHub Pages **user site** (`Eriquito00/eriquito00.github.io`, branch `main`), so it serves at the root domain. Single app — no monorepo, no backend, no tests, no CI workflows.

## Commands (npm; `package-lock.json` is the lockfile)

- `npm run dev` — dev server
- `npm run lint` — ESLint flat config (`eslint.config.js`)
- `npm run typecheck` — `tsc --noEmit`; only type-checks `src/` (per tsconfig `include`)
- `npm run build` / `npm run preview` — production build to `dist/` / serve it

No test runner exists. Verify changes with: `npm run lint && npm run typecheck && npm run build`.

Known state: `typecheck` and `build` pass; `lint` fails with **one pre-existing error** in the dead file `src/components/SEO/SEO.tsx` (`react-hooks/set-state-in-effect`). Don't wire that component in to "fix" it — see Dead code.

## i18n: every visible string exists in 3 languages

- Dictionaries: `src/i18n/translations.ts` (`es`, `ca`, `en`; `es` is the default), shape typed by `TranslationDictionary` in `src/i18n/types.ts`. New UI string = add the key to the type **and** all three dictionaries, or `tsc` fails.
- Content is split by `id` across two places:
  - structure in `src/components/<Section>/<section>Data.ts` (projects, experience, skills)
  - per-language copy in `translations.ts`, looked up by the same id: `t.projects.copies[id]`, `t.experience.items[id]`, `t.skills.categories[id]`
- Those lookups have **no fallback** and the types are `Record<string, …>`, so a missing id compiles fine and crashes at runtime (`undefined.description`). Adding a project / experience item / skill category requires adding its id + copy to **all three** dictionaries.
- Certificates live **only** in translations (`t.certificates.copies`, includes `title`/`file`/`filter`); their PDFs are in `public/docs/`.
- Adding a project: webp in `src/assets/projects/` + import in `projectsData.ts` + copies in all 3 dictionaries.

## Quirks

- Theme/language persist in localStorage: `portfolio-theme` (default `dark`), `portfolio-language` (default `es`). `main.tsx` applies the theme before first render to avoid a flash — preserve that if touching it.
- Real SEO logic: `LanguageProvider` sets `document.title` and the meta description from `translations[lang].seo` on language change; static defaults (Spanish + GA4 id `G-4TXP2ZJF4C`) are hard-coded in `index.html`.
- `public/sitemap.xml`, `robots.txt`, `llms.txt` are hand-maintained, not generated — update them manually when routes or content change.
- CSS: each component imports its own `.css`, all aggregated in `src/styles/index.css` (`foundation.css` first, `responsive.css` last — order matters for overrides). New component CSS must be imported there.
- `vite.config.js` intentionally has no `base` override (root-domain site); don't add one.

## Dead code (don't imitate)

- `src/components/SEO/SEO.tsx` — never imported anywhere; also the source of the pre-existing lint error.
- `src/components/SEO/seoData.ts` — never imported.
- `src/data/seoData.ts` — imported only by the dead `SEO.tsx`.
