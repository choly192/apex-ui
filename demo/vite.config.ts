import path from "path";
import { defineConfig, mergeConfig } from "vite";
import baseConfig from "../vite.config.base";

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: "./index.html",
      },
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name!);
          if (ext === ".css") {
            return "static/css/[name]-[hash][extname]";
          }
          return "static/media/[name]-[hash][extname]";
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
      },
    },
  },
  server: {
    open: true,
    port: 8081,
    hmr: true,
  },
});

export default config;
