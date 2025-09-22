import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  // Don't bundle peer dependencies
  noExternal: ['@headlessui/react', 'lucide-react'],
  // Ensure CSS is handled properly
  banner: {
    js: '"use client";', // For Next.js compatibility
  },
});