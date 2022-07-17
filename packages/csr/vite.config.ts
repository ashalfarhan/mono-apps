/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3004,
  },
  test: {
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom',
    globals: true,
    coverage: {
      all: true,
      exclude: [
        'node_modules',
        'dist',
        'coverage',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'vite.config.ts',
        'src/**/*.test.tsx',
        'src/**/*.test.ts',
      ],
    },
  },
});
