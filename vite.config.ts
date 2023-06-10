import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { cwd } from "node:process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./public",
  resolve: {
    alias: { "/src": resolve(cwd(), "src") },
  },
});
