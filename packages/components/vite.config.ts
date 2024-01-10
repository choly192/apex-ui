import path from 'path';
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

const NODE_ENV = process.env.NODE_ENV || 'development';

const isEnvProduction = NODE_ENV === 'production';
const isEnvDevelopment = NODE_ENV === 'development';

const workDir = process.cwd();

// https://vitejs.dev/config/
const config = defineConfig({
  build: {
    ...(isEnvProduction && { target: 'es2015', cssTarget: 'chrome61' }),
    ...(isEnvDevelopment && { minify: false }),
    // outDir: path.resolve(workDir, "../dist"),
    lib: {
      formats: ['es'],
      entry: path.resolve(workDir, './index.ts'),
      // UMD 格式的包名
      name: 'apexLib',
      fileName: 'index'
      // fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames'],
      output: {
        // CSS、图片等资源的文件名
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@comp': path.resolve(__dirname, '../components')
    }
  }
});

export default mergeConfig(baseConfig, config);
