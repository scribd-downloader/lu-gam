import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    sitemap({
      hostname: "https://ludoking.pro", // Replace with your actual domain
      outDir: "dist", // Ensure it matches your build output folder
      routes: ["/"], // Only include the main page
    }),
  ],
});
