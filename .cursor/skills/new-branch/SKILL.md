---
name: new-branch
description: Creates a new branch off dev following the project naming convention and publishes it to origin. Use when the user asks to create/start a new branch, start work on a feature/fix, or "sacar una rama de dev".
---

# Crear rama nueva (desde dev)

Saca una rama nueva a partir de `dev`, con nombre convencional, y la publica en el remoto.

## Convención de nombres

`<tipo>/<descripcion-kebab>` — ej. `feature/agregar-login`, `fix/error-validacion-monto`.

- **Tipos permitidos**: `feature`, `fix`, `hotfix`, `chore`, `refactor`, `docs`.
- **descripcion**: minúsculas, sin acentos ni caracteres especiales, palabras separadas por guiones (kebab-case). Corta y clara.

## Entradas

- **tipo** (de la lista) y **descripción**. Si el usuario no los da, preguntá. Si da una frase, derivá el tipo del contexto y convertí la descripción a kebab-case.

## Workflow

```
- [ ] 1. Verificar working tree limpio
- [ ] 2. Sincronizar dev
- [ ] 3. Crear y cambiar a la rama
- [ ] 4. Publicarla en origin
```

**1. Working tree limpio**
- `git status --short`. Si hay cambios sin commitear, avisá antes de seguir (se arrastrarían a la rama nueva).

**2. Sincronizar dev**
- `git checkout dev` ; `git pull origin dev` (la rama debe salir de `dev` actualizado). Si aún no existe `dev`, usá la rama base del repo (`main`/`master`) y confirmá con el usuario.

**3. Crear rama**
- Construí el nombre `<tipo>/<descripcion-kebab>`.
- `git checkout -b <nombre>`.

**4. Publicar**
- `git push -u origin <nombre>` (deja la rama lista y trackeando el remoto).

Al terminar, recordá al usuario que el PR **a `dev`** se hace después con la skill `create-pr`.

## Entorno (PowerShell en Windows)

- NO uses `&&` ni heredoc. Encadená con `;` o comandos separados.
