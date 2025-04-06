import { defineConfig, globalIgnores } from 'eslint/config'
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  globalIgnores([
    "**/build",
    "**/public",
    "**/dist",
    "**/dist/*",
    "**/tests/*",
    "coverage",
    ".astro/*",
    "node_modules/*",
  ]),
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  oxlint.configs["flat/recommended"],
  eslintConfigPrettier,
]);
