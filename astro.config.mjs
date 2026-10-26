// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kevinlucas.com.br",
  base: "/",
  env: {
    schema: {
      // true = site completo; false (padrão) = página "em construção".
      SITE_PUBLISHED: envField.boolean({ context: "server", access: "public", default: false }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
