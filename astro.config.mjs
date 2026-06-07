// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kevin-lucas.github.io",
  base: "/kevinportfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
