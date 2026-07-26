# Bootstrap: Librería de secciones White Label (React + Vite + TS)

Documento operativo para que un **agente de Cursor** cree desde cero el proyecto de la **librería de secciones**: design system interno (`shared/ui`), catálogo documentado, secciones exportables y la misma disciplina de rules/skills/hooks que el template white-label.

---

## 0. Prompt para pegar al agente (nuevo repo vacío)

```text
Leé y seguí EXACTAMENTE el archivo docs/BOOTSTRAP_SECTIONS_LIBRARY.md (o el que te adjunte).
Creá el proyecto completo de librería de secciones White Label con React 19 + Vite + TypeScript + styled-components.
Incluí:
- Estructura de carpetas
- Aliases, theme, GlobalStyles, barrel de iconos
- Rules en .cursor/rules (las listadas en el doc)
- Skills create-feature, create-section, create-pr, new-branch, review-pr
- Hook check-code en .cursor/hooks.json + check-code.mjs
- Feature docsComponents en /docs_components (catálogo de shared/ui)
- Feature docsSections en /docs_sections (catálogo de secciones exportables)
- Entry público de librería (src/library/index.ts) + build library en Vite
- Un Button mínimo en shared/ui documentado en el catálogo
- Una sección de ejemplo (HeroPlaceholder) exportable y documentada
No inventes otra arquitectura. Cuando termines, dejá npm run dev y npm run build:lib funcionando.
```

---

## 1. Objetivo del proyecto

Este repo **no es la app de marca blanca**. Es:

1. **Playground interno** (Vite app) para desarrollar y documentar.
2. **Librería publicable** de **secciones completas** (`HeroBanner`, `Recommendations`, `SportsEvents`, etc.) que el Backoffice ordenará por Drag & Drop y que la plataforma white-label renderizará desde un JSON.

### Capas

| Capa | Ubicación | ¿Se exporta en la lib? | Catálogo |
|------|-----------|------------------------|----------|
| UI primitiva (Button, Switch, Tag…) | `src/shared/ui/` | Sí (opcional, peer de secciones) | `/docs_components` |
| Secciones de producto | `src/sections/` | **Sí (API principal)** | `/docs_sections` |
| Playground / docs | `src/features/docs*` | No | — |
| Theme / tokens | `src/shared/theme/` | Sí | dentro de docs |

Flujo mental:

```
shared/ui  →  sections/*  →  export library  →  BO (orden) + White Label (render JSON)
```

---

## 2. Qué copiar del template y qué no

### Incluir (necesario)

- Estructura `app` / `features` / `shared` / `assets`
- Rules: `project-structure`, `styled-components`, `theme`, `imports-and-icons`, `features`, `docs-components`, **+ nuevas** `docs-sections` y `sections-library`
- Skills: `create-feature`, **`create-section`**, `create-pr`, `new-branch`, `review-pr`
- Hook `check-code` (lint + tsc al terminar turnos)
- styled-components + `ThemeProvider` + `GlobalStyles` + `styled.d.ts`
- Barrel de iconos `@assets/icons` (nunca `react-icons` directo)
- Catálogo `/docs_components`

### No incluir (por ahora)

- `white-label-brands.mdc` (la lib recibe `primaryColor` / theme por props o JSON; no `VITE_BRAND`)
- `http-client` / `error-handling` / axios (salvo que más adelante las secciones necesiten data; entonces se agrega)
- Features de producto (`home`, `hipicas`, `shell`) — eso vive en la app white-label

---

## 3. Scaffold inicial (comandos)

```bash
npm create vite@latest wl-sections-library -- --template react-ts
cd wl-sections-library
npm install
npm install styled-components react-router-dom react-icons
npm install -D @types/node vite-plugin-dts
```

Scripts sugeridos en `package.json`:

```json
{
  "name": "@wl/sections-library",
  "private": false,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "build:lib": "tsc -b && vite build --config vite.lib.config.ts",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "styled-components": "^6.0.0"
  }
}
```

---

## 4. Estructura de carpetas objetivo

```text
wl-sections-library/
├── .cursor/
│   ├── hooks.json
│   ├── hooks/
│   │   └── check-code.mjs
│   ├── rules/
│   │   ├── project-structure.mdc
│   │   ├── styled-components.mdc
│   │   ├── theme.mdc
│   │   ├── imports-and-icons.mdc
│   │   ├── features.mdc
│   │   ├── docs-components.mdc
│   │   ├── docs-sections.mdc          ← NUEVA
│   │   └── sections-library.mdc       ← NUEVA
│   └── skills/
│       ├── create-feature/SKILL.md
│       ├── create-section/SKILL.md    ← NUEVA
│       ├── create-pr/SKILL.md
│       ├── new-branch/SKILL.md
│       └── review-pr/SKILL.md
├── docs/
│   └── BOOTSTRAP_SECTIONS_LIBRARY.md  (este archivo, opcional copiarlo)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── library/
│   │   └── index.ts                   ← API pública de la librería
│   ├── app/
│   │   └── router/
│   │       ├── index.ts
│   │       └── router.tsx
│   ├── assets/
│   │   └── icons/
│   │       ├── index.ts               ← ÚNICO import de react-icons
│   │       └── customIcons/           ← SVGs propios si hace falta
│   ├── features/
│   │   ├── docsComponents/            ← catálogo shared/ui → /docs_components
│   │   └── docsSections/              ← catálogo sections → /docs_sections
│   ├── sections/                      ← SECCIONES EXPORTABLES
│   │   ├── registry.ts                ← type string → componente
│   │   ├── types.ts
│   │   ├── heroPlaceholder/
│   │   │   ├── HeroPlaceholder.tsx
│   │   │   ├── HeroPlaceholder.elements.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   └── shared/
│       ├── theme/Theme.ts
│       ├── styles/GlobalStyles.tsx
│       ├── types/styled.d.ts
│       ├── utils/styles-utils.ts
│       └── ui/
│           └── buttons/button/
│               ├── Button.tsx
│               └── Button.elements.ts
├── vite.config.ts                     ← app playground
├── vite.lib.config.ts                 ← build de librería
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

---

## 5. Aliases (obligatorio)

### `vite.config.ts` (playground)

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@app": path.resolve(__dirname, "src/app"),
      "@features": path.resolve(__dirname, "src/features"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@sections": path.resolve(__dirname, "src/sections"),
    },
  },
});
```

### `tsconfig.app.json` → `compilerOptions.paths`

```json
{
  "@/*": ["./src/*"],
  "@shared/*": ["./src/shared/*"],
  "@app/*": ["./src/app/*"],
  "@features/*": ["./src/features/*"],
  "@assets/*": ["./src/assets/*"],
  "@sections/*": ["./src/sections/*"]
}
```

Misma config estricta que el template:

- `verbatimModuleSyntax: true`
- `noUnusedLocals` / `noUnusedParameters`
- `erasableSyntaxOnly: true` (sin `enum` / `namespace`)
- `jsx: "react-jsx"`

---

## 6. Theme + styled-components (igual que el template)

### `src/shared/utils/styles-utils.ts`

```ts
export const pxToRem = (px: number) => `${px / 16}rem`;
```

### `src/shared/theme/Theme.ts`

- Factory `createTheme(primaryColor?: string)` con los mismos tokens del template white-label (`brand`, escalas, `button`, `danger/success/warning`, `text`, `background`, `border`, `typography`, `radii`, `shadows`, `zIndex`, `transitions`, `spacing(factor)`).
- Export `theme = createTheme()`.
- Se puede copiar `Theme.ts` del template casi tal cual (sin depender de `@app/brands` al inicio: default `#E91E91`).

### `src/shared/types/styled.d.ts`

```ts
import "styled-components";
import { theme } from "../theme/Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: typeof theme.color;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    breakpoints: typeof theme.breakpoints;
    shadows: typeof theme.shadows;
    radii: typeof theme.radii;
    zIndex: typeof theme.zIndex;
    transitions: typeof theme.transitions;
  }
}
```

### `src/shared/styles/GlobalStyles.tsx`

- `createGlobalStyle` con reset básico, Poppins (o la font del sistema de diseño), `-webkit-tap-highlight-color: transparent`, fondo `theme.color.background.primary`.

### `src/App.tsx`

```tsx
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@app/router";
import { GlobalStyles } from "@shared/styles/GlobalStyles";
import { theme } from "@shared/theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

---

## 7. Iconos (igual que el template)

Archivo único: `src/assets/icons/index.ts`

Reglas:

1. `react-icons` **solo** se importa ahí.
2. Re-export con nombre semántico + sufijo `Icon` (`MenuIcon`, `CloseIcon`, …).
3. Custom SVG en `customIcons/` + re-export desde el barrel.
4. Consumo: `import { MenuIcon } from "@assets/icons"`.

Seed mínimo sugerido:

```ts
import { IoMenu, IoClose, IoChevronDown, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ImSpinner2 } from "react-icons/im";

export const MenuIcon = IoMenu;
export const CloseIcon = IoClose;
export const ChevronDownIcon = IoChevronDown;
export const ChevronBackIcon = IoChevronBack;
export const ChevronForwardIcon = IoChevronForward;
export const LoadingSpinnerIcon = ImSpinner2;
```

Agregar al barrel (y al catálogo de icons en docs) cada icono nuevo que necesiten las secciones.

---

## 8. Router del playground

Rutas mínimas:

| Path | Página |
|------|--------|
| `/` | Redirect a `/docs_components` o landing breve |
| `/docs_components` | Catálogo UI interna |
| `/docs_sections` | Catálogo de secciones exportables |

```tsx
// src/app/router/router.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import { DocsComponentsPage } from "@features/docsComponents";
import { DocsSectionsPage } from "@features/docsSections";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/docs_components" replace />} />
    <Route path="/docs_components" element={<DocsComponentsPage />} />
    <Route path="/docs_sections" element={<DocsSectionsPage />} />
    <Route path="*" element={<Navigate to="/docs_components" replace />} />
  </Routes>
);
```

---

## 9. Secciones exportables + registry

### Tipos

```ts
// src/sections/types.ts
export type SectionType =
  | "HeroPlaceholder"
  // | "Recommendations"
  // | "SportsEvents"
  ;

export interface SectionDefinition {
  type: SectionType;
  label: string;
  description: string;
  // props tipadas por sección a futuro
}
```

### Registry (contrato con el JSON del BO)

```ts
// src/sections/registry.ts
import type { ComponentType } from "react";
import { HeroPlaceholder } from "./heroPlaceholder";
import type { SectionType } from "./types";

export const sectionRegistry: Record<SectionType, ComponentType> = {
  HeroPlaceholder,
};

export const sectionCatalog: { type: SectionType; label: string; description: string }[] = [
  {
    type: "HeroPlaceholder",
    label: "Hero (placeholder)",
    description: "Bloque hero de ejemplo para el editor y el runtime.",
  },
];
```

### API pública de la librería

```ts
// src/library/index.ts
export { theme, createTheme } from "@shared/theme/Theme";
export { sectionRegistry, sectionCatalog } from "@sections/registry";
export type { SectionType, SectionDefinition } from "@sections/types";
export { HeroPlaceholder } from "@sections/heroPlaceholder";
// exportar también primitivos shared/ui que quieras reutilizar fuera
export { Button } from "@shared/ui/buttons/button/Button";
```

### Build library (`vite.lib.config.ts`)

- Entry: `src/library/index.ts`
- `build.lib` formats: `es` + `cjs`
- `rollupOptions.external`: `react`, `react-dom`, `react/jsx-runtime`, `styled-components`
- Plugin `vite-plugin-dts` para `.d.ts`
- Consumers: Backoffice (preview de secciones) y White Label (render por `type`)

JSON que consumirá la plataforma (referencia):

```json
{
  "pages": {
    "home": [
      { "type": "HeroPlaceholder" },
      { "type": "Recommendations" }
    ]
  }
}
```

El runtime hace: `const Cmp = sectionRegistry[item.type]; return <Cmp key={...} />`.

---

## 10. Catálogos (documentación viva)

### `/docs_components` — UI interna (`shared/ui`)

Misma regla que el template:

- Al crear/actualizar algo en `src/shared/ui/`, documentar en `features/docsComponents`.
- Uso + props + preview de variantes.
- Reutilizar `DocSection`, `DocSectionBlock`, `DocCodeBlock`.

### `/docs_sections` — secciones exportables

Nueva superficie de docs:

- Al crear/actualizar algo en `src/sections/<nombre>/`, documentar en `features/docsSections`.
- Mostrar: nombre `type` del registry, descripción, preview a ancho real, props si aplica.
- El BO usará este catálogo mentalmente: “qué bloques existen”.

Seed: documentar `Button` + `HeroPlaceholder`.

---

## 11. Cursor Rules (crear estos archivos)

Crear cada `.mdc` con el frontmatter indicado. El agente debe escribir el contenido completo (adaptado a este repo; no dejar placeholders vacíos).

### 11.1 `.cursor/rules/project-structure.mdc`

```md
---
description: Estructura de carpetas, stack y convenciones de la librería de secciones
alwaysApply: true
---

# Estructura del proyecto

Librería Vite + React 19 + TypeScript + styled-components de secciones White Label.
Incluye playground de documentación y build publicable.

## Dónde va cada cosa

```
src/
  library/     -> API pública exportada por el package
  app/         -> router del playground
  features/    -> playground features (docsComponents, docsSections)
  sections/    -> SECCIONES exportables (producto)
  shared/      -> design system interno
    theme/ styles/ types/ utils/ ui/
  assets/icons -> barrel único de iconos
```

## Nomenclatura

- Componentes: `PascalCase`, carpeta `camelCase`.
- UI = `Componente.tsx` + `Componente.elements.ts`.
- Named exports; `export default` solo en `App.tsx`.
- Interfaces sin prefijo `I`.
- Comillas dobles y punto y coma.
- Sin comentarios que narren el código.

## Stack

React 19, styled-components 6, react-icons, react-router-dom (solo playground).
```

### 11.2 `.cursor/rules/styled-components.mdc`

Copiar del template (mismo contenido de patrón `.tsx` + `.elements.ts` + transient `$`).  
`globs`: `src/shared/ui/**,src/sections/**,src/app/**,**/*.elements.ts`  
`alwaysApply: true`

### 11.3 `.cursor/rules/theme.mdc`

Copiar del template (tokens + `pxToRem` + `styled.d.ts`).  
Ajuste: `brand.primary` se setea vía `createTheme(primaryColor)` / JSON de marca, no por env de brand del template.  
`alwaysApply: true`

### 11.4 `.cursor/rules/imports-and-icons.mdc`

Igual que el template + alias `@sections/`.  
Tabla de aliases actualizada.  
`alwaysApply: true`

### 11.5 `.cursor/rules/features.mdc`

Igual que el template, pero:

- Features del playground (`docsComponents`, `docsSections`) siguen la regla.
- Las **secciones de producto NO van en `features/`**: van en `src/sections/`.
- Sin forzar `services/`/axios hasta que haga falta.

`globs: src/features/**`  
`alwaysApply: false`

### 11.6 `.cursor/rules/docs-components.mdc`

Copiar del template (catálogo `/docs_components` para `shared/ui`).  
`alwaysApply: true`

### 11.7 `.cursor/rules/docs-sections.mdc` (NUEVA)

```md
---
description: Toda sección nueva en src/sections debe documentarse en /docs_sections y registrarse en sectionRegistry
globs: src/sections/**,src/features/docsSections/**
alwaysApply: true
---

# Catálogo de secciones (`/docs_sections`)

Cuando creés o actualices una sección en `src/sections/`, en el mismo cambio:

1. Implementá `Seccion.tsx` + `Seccion.elements.ts` (+ `index.ts` de carpeta).
2. Registrala en `src/sections/registry.ts` con su `SectionType`.
3. Exportala desde `src/sections/index.ts` y `src/library/index.ts`.
4. Documentala en `features/docsSections` (uso, `type` del JSON, props, preview).
5. Montá la sección de docs en `DocsSectionsPage`.

## Alcance

- **Sí:** bloques de `src/sections/` (exportables al BO / white-label).
- **No:** primitivos de `@shared/ui` (esos van a `/docs_components`).

## Contrato

El `type` string del registry es el mismo que viaja en el JSON de configuración de marca.
```

### 11.8 `.cursor/rules/sections-library.mdc` (NUEVA)

```md
---
description: Contratos de la librería de secciones (registry, boundaries, API pública)
alwaysApply: true
---

# Librería de secciones

## Boundaries

- `sections/*` puede usar `@shared/*` y `@assets/icons`.
- `sections/*` NO importa de `@features/*`.
- `features/docs*` puede importar sections y shared solo para documentar.
- Consumidores externos solo usan el entry `src/library/index.ts` (o el package build).

## Registry

- Toda sección exportable tiene un `SectionType` único en `sections/types.ts`.
- Debe existir en `sectionRegistry` y `sectionCatalog`.
- No renderizar secciones “sueltas” sin registro si están pensadas para el JSON del BO.

## Composición

- Las secciones se arman con componentes de `@shared/ui` + tokens del theme.
- No hardcodear colores/espaciados que existan en el theme.
```

---

## 12. Skills

### 12.1 `.cursor/skills/create-feature/SKILL.md`

Adaptar el del template:

- Scaffolds bajo `src/features/<feature>/`.
- Para esta lib, features típicos: solo playground (`docs*`), no producto.
- No exigir `services/` ni httpClient por defecto.
- UI con `.tsx` + `.elements.ts`.

### 12.2 `.cursor/skills/create-section/SKILL.md` (NUEVA — crítica)

```md
---
name: create-section
description: Scaffolds a new exportable section under src/sections/<name>/, registers it, exports it from the library entry, and documents it in /docs_sections. Use when the user asks to create a section, bloque, or sección exportable.
---

# Crear sección exportable

1. Nombre en `camelCase` de carpeta / `PascalCase` de componente (ej. `featuredPromotions` / `FeaturedPromotions`).
2. Crear:
```
src/sections/<nombre>/
  <Nombre>.tsx
  <Nombre>.elements.ts
  index.ts
```
3. Agregar `SectionType` en `sections/types.ts`.
4. Registrar en `sectionRegistry` + `sectionCatalog`.
5. Exportar en `sections/index.ts` y `library/index.ts`.
6. Documentar en `features/docsSections` y montar en la page.
7. Usar solo `@shared/ui`, theme e icons — sin cross-feature.
8. ReadLints limpio.

Checklist: registry + docs_sections + library export + sin hardcode de tokens.
```

### 12.3 Skills de git (copiar del template)

- `create-pr/SKILL.md`
- `new-branch/SKILL.md`
- `review-pr/SKILL.md`

(Ajustar nombres de ramas/base si el repo usa otra convención; si no hay, dejar `dev` como en el template.)

---

## 13. Hook check-code (igual que el template)

### `.cursor/hooks.json`

```json
{
  "version": 1,
  "hooks": {
    "stop": [
      {
        "command": "node .cursor/hooks/check-code.mjs",
        "timeout": 180,
        "loop_limit": 3
      }
    ]
  }
}
```

### `.cursor/hooks/check-code.mjs`

```js
#!/usr/bin/env node
import { execSync } from "node:child_process";

const MAX_OUTPUT = 4000;

const run = (cmd) => {
  try {
    execSync(cmd, { stdio: "pipe", encoding: "utf8" });
    return null;
  } catch (error) {
    const out = `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    return out.length > MAX_OUTPUT ? `${out.slice(0, MAX_OUTPUT)}\n...(truncado)` : out;
  }
};

const problems = [];

const lint = run("npm run lint");
if (lint) problems.push(`ESLint:\n${lint}`);

const types = run("npx tsc -b");
if (types) problems.push(`TypeScript:\n${types}`);

if (problems.length > 0) {
  const followup_message =
    "El chequeo automático (ESLint / TypeScript) encontró problemas. Corregilos antes de terminar:\n\n" +
    problems.join("\n\n");
  process.stdout.write(JSON.stringify({ followup_message }));
} else {
  process.stdout.write(JSON.stringify({}));
}

process.exit(0);
```

Asegurar que `npm run lint` y `tsc -b` existan y pasen en el scaffold.

---

## 14. Seed mínimo de código (para “día 0” usable)

El agente debe dejar el repo en estado runnable con:

1. **`Button`** en `shared/ui/buttons/button/` (primary/ghost, sizes básicos) + sección en `/docs_components`.
2. **`HeroPlaceholder`** en `sections/heroPlaceholder/` (bloque visual simple con tokens) + registry + `/docs_sections`.
3. Páginas de docs con layout tipo catálogo (header + lista de secciones DocSection), inspiradas en `docsComponents` del template.
4. Icons section básica en docs (opcional pero recomendada).

Convenciones de código idénticas al template:

- Named exports arrow functions
- Props públicas sin `$`; styled con `$transient`
- `background` shorthand, no `background-color`
- Sin `enum`

---

## 15. Orden de ejecución para el agente

1. Scaffold Vite React-TS + deps.
2. Aliases vite + tsconfig.
3. Theme, `styled.d.ts`, GlobalStyles, `pxToRem`, App + router.
4. Barrel de iconos.
5. Crear **todas** las rules y skills + hook check-code.
6. Feature `docsComponents` (shell de página + helpers DocSection/DocCodeBlock).
7. `Button` + documentarlo.
8. `sections/` + `HeroPlaceholder` + registry + `library/index.ts`.
9. Feature `docsSections` + documentar HeroPlaceholder.
10. `vite.lib.config.ts` + script `build:lib`.
11. Correr `npm run lint`, `npx tsc -b`, `npm run dev` (smoke), `npm run build:lib`.
12. Resumen al usuario: cómo agregar la próxima sección (`create-section`).

---

## 16. Checklist de aceptación

- [ ] `npm run dev` abre playground
- [ ] `/docs_components` muestra al menos Button (+ icons si aplica)
- [ ] `/docs_sections` muestra al menos HeroPlaceholder con su `type`
- [ ] `sectionRegistry` / `sectionCatalog` existen y están exportados
- [ ] `src/library/index.ts` es el entry de la lib
- [ ] `npm run build:lib` genera dist usable
- [ ] `.cursor/rules/*` listadas en §11 existen
- [ ] `.cursor/skills/create-section` existe
- [ ] `.cursor/hooks.json` + `check-code.mjs` existen
- [ ] No hay imports de `react-icons` fuera de `assets/icons/index.ts`
- [ ] No hay cross-imports `sections` → `features`

---

## 17. Cómo se trabaja el día a día (para humanos y agentes)

1. ¿Necesito un átomo nuevo (botón, tag, input)? → `shared/ui` + docs en `/docs_components`.
2. ¿Necesito un bloque de pantalla para el BO/JSON? → skill **create-section** en `src/sections` + docs en `/docs_sections` + registry.
3. La app white-label y el BO consumen el package; no clonan componentes a mano.
4. El orden de secciones en Home/Casino/etc. **no se hardcodea en la lib**: lo define el JSON de marca.

---

## 18. Nota sobre el JSON del BO (contexto, no implementar aún)

```json
{
  "theme": { "primary": "#E91E91" },
  "pages": {
    "home": [
      { "type": "HeroPlaceholder" }
    ]
  }
}
```

La librería provee los `type` válidos (`sectionCatalog`) y los componentes (`sectionRegistry`). El editor solo ordena; el runtime de la white-label resuelve y renderiza.

---

*Generado como playbook a partir del template `whiteLabelTemplate` (rules, skills, hooks, theme, icons, docs_components).*
```

---

## Fin del documento

Si el agente termina y algo del checklist falla, debe corregirlo antes de declarar el bootstrap completo.
