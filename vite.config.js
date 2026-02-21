import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// HAPUS baris import tailwindcss dari sini

export default defineConfig({
  plugins: [react()], // Hanya gunakan react()
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})