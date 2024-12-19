import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3060 },
  build: {
    outDir: 'dist' // Ensure output goes to dist folder
  }
});
