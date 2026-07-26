#!/usr/bin/env node
import { execSync } from "node:child_process";

const MAX_OUTPUT = 4000;

const run = (cmd) => {
  try {
    execSync(cmd, { stdio: "pipe", encoding: "utf8" });
    return null;
  } catch (error) {
    const out = `${error.stdout ?? ""}${error.stderr ?? ""}`.trim();
    return out.length > MAX_OUTPUT
      ? `${out.slice(0, MAX_OUTPUT)}\n...(truncado)`
      : out;
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
