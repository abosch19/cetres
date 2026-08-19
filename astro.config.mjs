import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.cetres.cat",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
});
