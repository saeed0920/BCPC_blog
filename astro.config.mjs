import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import tailwindcssNesting from "tailwindcss/nesting";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.bircpc.ir",
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcssNesting()],
      },
    },
  },
});
