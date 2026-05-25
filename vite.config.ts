import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/RUN/",
  plugins: [react()],
  build: {
    target: "es2022",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          maps: ["leaflet", "react-leaflet"],
          charts: ["recharts"],
          motion: ["framer-motion"]
        }
      }
    }
  }
});
