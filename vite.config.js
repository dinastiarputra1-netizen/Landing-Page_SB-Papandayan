import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Base URL disesuaikan dengan nama repositori GitHub Anda
  base: "/Landing-Page_SB-Papandayan/", 
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})