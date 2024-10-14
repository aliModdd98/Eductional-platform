import { defineConfig } from "vite";
import react from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
