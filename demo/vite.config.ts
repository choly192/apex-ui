import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './index.html'
      },
      output: {
        assetFileNames: assetInfo => {
          const ext = path.extname(assetInfo.name!);
          if (ext === '.css') {
            return 'static/css/[name]-[hash][extname]';
          }
          return 'static/media/[name]-[hash][extname]';
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  },
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      cache: false
    })
  ],
  server: {
    open: true,
    port: 8081,
    hmr: true
  }
});

export default config;
