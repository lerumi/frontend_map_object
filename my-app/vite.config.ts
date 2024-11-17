import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend_map_object",
  server: {
    proxy: {
        "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
      },
    },
    port: 3000
  },
});
