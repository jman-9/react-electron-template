import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/main.ts', 'src/preload.ts'],
  outDir: 'dist',
  format: ['cjs'],
  target: 'es2020',
  clean: true,
});
