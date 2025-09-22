import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: false, // Disable minification to help with debugging
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  // Keep dependencies external to avoid bundling issues
  noExternal: ['@headlessui/react', 'lucide-react'],
  splitting: false,
  sourcemap: true,
  // For Next.js compatibility
  banner: {
    js: '"use client";',
  },
  // Ensure proper ESM/CJS handling
  platform: 'browser',
  target: 'es2020',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  }
});