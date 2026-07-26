---
name: review-pr
description: Reviews a pull request (or a local branch diff) against the project's rules plus quality, bugs and security. Produces structured feedback and can post it as a GitHub review. Use when the user asks to review a PR, review changes, or "revisá el PR".
---

# Review de PR

Revisa cambios contra las convenciones del proyecto + calidad, bugs y seguridad.

## Entradas

- **PR** (número) o, si no hay PR, una rama/diff local (`git diff <base>...<head>`).

## Workflow

```
- [ ] 1. Obtener el diff
- [ ] 2. Revisar contra reglas + calidad/seguridad
- [ ] 3. (Opcional) análisis profundo con subagentes
- [ ] 4. Entregar feedback estructurado
- [ ] 5. (Opcional) publicar la review en el PR
```

**1. Diff**
- PR: tool `pull_request_read` con `method: "get_diff"` (owner/repo derivados del remote, `pullNumber`). Usá `get_files` si necesitás la lista.
- Local: `git diff <base>...<head>`.

**2. Criterios (checklist)**
Revisá contra las reglas del proyecto (`.cursor/rules/`):
- **project-structure / features / sections-library**: ubicación correcta, sin imports cross-feature ni profundos, `index.ts` público; secciones en `src/sections/` con registry.
- **styled-components**: par `.tsx` + `.elements.ts`, transient props `$`, sin CSS hardcodeado que exista en el theme.
- **theme**: uso de tokens (`pxToRem`, `spacing`, breakpoints); tokens nuevos reflejados en `styled.d.ts`.
- **imports-and-icons**: aliases (`@shared`, `@sections`…), iconos desde `@assets/icons`, `import type`, sin no-usados.
- **docs-components / docs-sections**: cambios en `shared/ui` o `sections` documentados en el catálogo correspondiente.
- **Calidad general**: bugs, edge cases, tipos (`any`), estados/errores no manejados, `console.log` olvidados, dead code.
- **Seguridad**: secretos hardcodeados, datos sensibles en logs, validación de inputs.

**3. Profundidad (opcional)**
Para revisiones exigentes, lanzá los subagentes `bugbot` (bugs) y `security-review` (seguridad) y consolidá.

**4. Feedback**
Agrupá por severidad:
- 🔴 **Crítico**: bloquea el merge.
- 🟡 **Sugerencia**: conviene mejorar.
- 🟢 **Nice to have**: opcional.
Citá archivo y línea. Si no hay hallazgos críticos, decilo explícito.

**5. Publicar (solo si lo piden)**
- `pull_request_review_write` con `method: "create"`.
- `event: "COMMENT"` por defecto. Usá `APPROVE` o `REQUEST_CHANGES` **solo si el usuario lo pide explícitamente**.
