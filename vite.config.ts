import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/theme-chalk/${name}.css`;
          },
          // resolveComponent: (name) => {
          //   console.log(name);
          //   return `element-plus/lib/components/${name}`;
          // }
        }
      ]
    })
  ],
  base: mode === "development" ? "/" : "./", //此时把环境打包路径也配置好，避免生产环境打包出现白屏
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
})
