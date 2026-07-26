# @wl/sections-library

Librería de secciones y UI compartida para plataformas white-label (casino).

## Qué exporta

- Secciones: `GlobalNav`, `Footer`, `HeroBanner`, `FeaturedPromotions`, `Recommendations`, `SportsEvents`, `CasinoGames`, `LatestWinners`, …
- `sectionRegistry` / `sectionCatalog` / `SectionType`
- Primitivos UI: `Button`, `Carousel`, `IconButton`, …
- `theme` / `createTheme`

## Peer dependencies

El host debe proveer:

- `react` ^19
- `react-dom` ^19
- `styled-components` ^6

Envolvé la app con `ThemeProvider` (podés usar `createTheme()` de esta lib o un theme compatible).

## Install desde GitHub (privado)

```bash
npm install git+ssh://git@github-universalsoft/MauUniversal/wl-sections-library.git#v0.1.0
```

O en `package.json`:

```json
"@wl/sections-library": "git+ssh://git@github-universalsoft/MauUniversal/wl-sections-library.git#v0.1.0"
```

> El host SSH `github-universalsoft` debe estar en tu `~/.ssh/config` (IdentityFile de la cuenta MauUniversal).

Al instalar desde git, el script `prepare` corre `build:lib` y genera `dist/`.

## Desarrollo local (playground)

```bash
npm install
npm run dev
```

- Docs UI: `/docs_components`
- Docs secciones: `/docs_sections`

## Build de la librería

```bash
npm run build:lib
```

Salida: `dist/wl-sections-library.js`, `dist/wl-sections-library.cjs`, tipos en `dist/library/index.d.ts`.
