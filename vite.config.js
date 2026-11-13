import { copyFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function spaFallback() {
  return {
    name: "spa-fallback",
    apply: "build",
    closeBundle() {
      copyFileSync("dist/index.html", "dist/404.html");
    },
  };
}

export default defineConfig({
  base: "/se_finalProject_frontEnd_X/",
  plugins: [react(), spaFallback()],
});
