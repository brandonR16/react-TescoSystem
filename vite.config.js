
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-TescoSystem/',
  server: {
    host: '0.0.0.0',
    open: true
  }
});
