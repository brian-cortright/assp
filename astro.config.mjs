import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://actionsportssafetyproject.org",
  output: "static",
  server: {
    port: 4321,
  },
  integrations: [react(), sitemap()],
});
