import { defineConfig } from 'vite';

import dts from 'vite-plugin-dts';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
      '/#': path.resolve(__dirname, 'types')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: '@herodotus/utils',
      fileName: format => `index.${format}.js`
    },
    minify: 'terser',
    terserOptions: {
      // 生产环境下移除console
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      keep_classnames: true
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['lodash-es', 'axios', 'sweetalert2', 'moment', 'colord', 'sm-crypto', 'js-base64', 'shortid'],
      output: {
        assetFileNames: `assets/[name].[ext]`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'lodash-es': 'lodashEs',
          axios: 'axios',
          sweetalert2: 'sweetalert2',
          moment: 'moment',
          colord: 'colord',
          'sm-crypto': 'smCrypto',
          'js-base64': 'jsBase64',
          shortid: 'shortid'
        }
      }
    }
  }
});