import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1000, // Set higher limit
    // OR: Use manual chunks for better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['@radix-ui/react-icons', 'lucide-react'],
          // split large libs
        },
      },
    },
  },


});


