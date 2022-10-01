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
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*/index.ts',
      ],
    },
  },
});
