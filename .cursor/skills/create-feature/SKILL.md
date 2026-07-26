---
name: create-feature
description: Scaffolds a new feature under src/features/<feature>/ following the project conventions (components, hooks, types, data, public index). Use when the user asks to create, scaffold, or add a new feature.
---

# Crear feature

Genera un feature autocontenido en `src/features/<feature>/` respetando las reglas `features`, `styled-components` y `theme`.

En esta librería, los features típicos son solo playground (`docs*`), no producto. Las secciones exportables van en `src/sections/` (skill `create-section`).

## Pasos

1. Pedí (o inferí) el nombre del feature en `camelCase` (ej. `docsComponents`).
2. Preguntá qué necesita para no crear carpetas vacías: ¿tiene UI?, ¿hooks?, ¿data?
3. Creá SOLO las carpetas necesarias con esta estructura:

```
src/features/<feature>/
  components/                  -> UI propia (par .tsx + .elements.ts)
  hooks/                       -> hooks del feature
  types.ts
  data.ts
  index.ts                     -> API pública (obligatorio)
```

No exijas `services/` ni httpClient por defecto.

4. Escribí el `index.ts` re-exportando solo lo público.
5. Verificá con ReadLints que no queden errores.

## Reglas clave (no romper)

- El feature NO importa de otro feature. Lo compartido va a `@shared/*`.
- La app consume el feature solo por su `index.ts` (nada de imports profundos).
- UI con patrón `.tsx` (props sin `$`) + `.elements.ts` (styled con `$transient`), usando tokens del theme.

## Templates

`types.ts`:

```ts
export interface ExampleItem {
  id: string;
  label: string;
}
```

`index.ts` (API pública):

```ts
export * from "./types";
// export { FeaturePage } from "./pages/FeaturePage";
```

`components/Componente/Componente.tsx` + `Componente.elements.ts`: seguir la regla `styled-components`.

## Checklist final

- [ ] Carpeta en `src/features/<feature>/` con `index.ts` público
- [ ] Sin imports cross-feature ni profundos
- [ ] UI con par `.tsx` + `.elements.ts` y tokens del theme
- [ ] Sin errores de lint (ReadLints)
