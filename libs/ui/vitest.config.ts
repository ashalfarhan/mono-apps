import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom',
    globals: true,
    coverage: {
      all: true,
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/icons',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/**/*.stories.tsx',
        'src/**/*.stories.mdx',
        'src/**/index.ts',
      ],
    },
  },
});
