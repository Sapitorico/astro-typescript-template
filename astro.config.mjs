// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
