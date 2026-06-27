import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static SPA. Builds to /dist as plain HTML/CSS/JS for GitHub Pages, Netlify, or Vercel.
// base "./"... no — clean absolute paths so /authors/:id routing works on subpaths.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
