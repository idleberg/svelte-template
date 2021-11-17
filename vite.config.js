import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [
		svelte({
			/* plugin options */
		})
	],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@lib': path.resolve('./src/lib'),
      '@stores': path.resolve('./src/stores'),
      '@workers': path.resolve('./src/workers')
    }
  }
});