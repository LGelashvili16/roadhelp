import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://roadhelp.ge",
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "ka",
        locales: {
          ka: "ka",
          en: "en",
          ru: "ru",
        },
      },
    }),
  ],
  build: {
    format: "directory",
  },
  compressHTML: true,
});
