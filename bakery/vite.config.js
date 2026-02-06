import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Use absolute path '/' for Vercel (or other web) deployments to ensure assets load correctly on sub-routes
  // Use relative path './' for Electron to work with file protocol
  base: process.env.VERCEL ? '/' : './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});