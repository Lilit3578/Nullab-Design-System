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
  // For Next.js compatibility
  banner: {
    js: '"use client";',
  },
  // Don't try to process CSS in tsup - we'll handle it separately
  onSuccess: 'echo "JS build complete. Run npm run build:css to build CSS."'
});