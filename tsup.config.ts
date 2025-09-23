import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],           // Main entry point
  format: ['cjs', 'esm'],            // CommonJS and ES Modules output
  dts: true,                        // Generate TypeScript declaration files
  clean: true,                      // Clean output folder before build
  minify: false,                    // No minification (good for debugging)
  external: ['react', 'react-dom', 'react/jsx-runtime'], // Mark these as peer deps
  noExternal: ['@headlessui/react', 'lucide-react'],    // Bundle these deps
  splitting: false,                 // No code splitting (needed for cjs support)
  sourcemap: true,                 // Generate source maps
  banner: {
    js: '"use client";',           // Add React server components client directive
  },
  platform: 'browser',             // Target browser environment
  target: 'es2020',               // ES2020 target
  esbuildOptions(options) {
    options.jsx = 'automatic';    // Use React 17+ JSX transform
  }
});
