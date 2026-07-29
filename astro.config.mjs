import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://towauto.ge",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  compressHTML: true,
});
