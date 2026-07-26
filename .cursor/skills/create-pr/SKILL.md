---
name: create-pr
description: Commits pending changes, pushes the source branch, and opens a pull request between two branches via the GitHub MCP. Use when the user asks to create/open a PR, ship changes, or promote a branch (e.g. "PR de dev a staging", "de staging a prod", "abrí un pull request").
---

# Crear PR (commit + push + pull request)

Automatiza el flujo commit -> push -> PR entre dos ramas.

## Entradas

- **head** (origen) y **base** (destino). Si el usuario no las da, preguntá.
- Flujo de promoción esperado: `feature/* -> dev -> staging -> prod`. Si piden algo fuera de ese orden (ej. `dev -> prod`), confirmá antes de seguir.

## Workflow

```
- [ ] 1. Detectar owner/repo y validar ramas
- [ ] 2. Commitear cambios pendientes en head (si hay)
- [ ] 3. Push de head al remoto
- [ ] 4. Crear el PR vía MCP con la plantilla
- [ ] 5. Devolver la URL del PR
- [ ] 6. (Solo si piden mergear) Verificar head SHA y mergear seguro
```

**1. Contexto**
- `owner`/`repo` se derivan de `git remote get-url origin`. No hardcodear.
- Confirmá que `head` existe y que estás parado en ella (`git status`).

**2. Commit (solo si hay cambios)**
- Antes de commitear: `git check-ignore .env` para asegurar que NO se filtren secretos. Nunca commitees `.env` ni tokens.
- Mensaje estilo conventional commits (`feat:`, `fix:`, `chore:`, `refactor:`). Título + cuerpo con varios `-m`.

**3. Push**
- `git push origin <head>` (usa SSH ya configurado).

**4. PR vía MCP**
- Tool `create_pull_request` del server GitHub (aparece como `github` o `user-github`).
- Args: `owner`, `repo`, `head`, `base`, `title`, `body`.
- Si existe `.github/pull_request_template.md`, completá el body con esa plantilla.

**5.** Devolvé la URL que retorna la tool.

**6. Merge seguro (solo si el usuario pide mergear)**
- ⚠️ Nunca mergees sin confirmar que el PR apunta al commit que acabás de pushear.
- Antes de `merge_pull_request`, verificá que coincidan:
  - Local: `git rev-parse origin/<head>` (hacé `git fetch origin <head>` primero).
  - PR remoto: `head.sha` que devuelve `pull_request_read` para ese PR.
  - Si NO coinciden, esperá unos segundos y reintentá; no mergees hasta que coincidan.
- Mergeá con `merge_pull_request` (`owner`, `repo`, `pullNumber`, `merge_method`).
- **Después** de mergear, confirmá que el merge sí incluyó tu commit.
- Recién con `base` alineado y verificado, borrá la rama (local y remota) si el usuario lo pidió.

## Entorno (PowerShell en Windows) — evitar errores

- NO uses `&&` ni heredoc `$(cat <<'EOF')`: no funcionan en esta shell.
- Encadená con `;` o comandos separados. Commit multilínea: repetir `-m "..."`.
- El hook de `stop` corre `lint` + `tsc`; asegurate de que queden en verde antes de cerrar.
