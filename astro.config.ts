import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

// https://astro.build/config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
  output: "hybrid",
  vite: { ssr: { external: ["react", "react-dom"] } }
});
