---
name: create-section
description: Scaffolds a new exportable section under src/sections/<name>/, registers it, exports it from the library entry, and documents it in /docs_sections. Use when the user asks to create a section, bloque, or sección exportable.
---

# Crear sección exportable

1. Nombre en `camelCase` de carpeta / `PascalCase` de componente (ej. `featuredPromotions` / `FeaturedPromotions`).
2. Elegí scope:
   - home → `src/sections/home/<nombre>/`
   - global/chrome → `src/sections/<nombre>/` (ej. `globalNav`)
3. Crear:
```
src/sections/home/<nombre>/   # o src/sections/<nombre>/ si es global
  <Nombre>.tsx
  <Nombre>.elements.ts
  index.ts
```
4. Si es home, re-exportar en `sections/home/index.ts`.
5. Agregar `SectionType` en `sections/types.ts`.
6. Registrar en `sectionRegistry` + `sectionCatalog` con `scope: "home" | "global"`.
7. Exportar en `sections/index.ts` y `library/index.ts`.
8. Documentar en `features/docsSections` y montar en la page.
9. Usar solo `@shared/ui`, theme e icons — sin cross-feature.
10. ReadLints limpio.

Checklist: carpeta por scope + registry + docs_sections + library export + sin hardcode de tokens.
