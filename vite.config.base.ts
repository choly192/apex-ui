import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      // less: {
      //   javascriptEnabled: true,
      //   modifyVars: theme,
      // },
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    tsconfigPaths({ loose: true }),
    svgr({ include: "**/*.svg?react" }),
    splitVendorChunkPlugin(),
  ],
  define: {
    __DEV__: process.env.NODE_ENV !== "production",
  },
  // test: {
  //   environment: "jsdom",
  //   setupFiles: path.resolve(__dirname, "./vitest-setup.ts"),
  // },
});
