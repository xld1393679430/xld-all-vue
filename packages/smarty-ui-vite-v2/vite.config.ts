import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from './config/unocss'

export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    Unocss()
  ],
  
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "MyUI",
      fileName: "my-ui",
      formats: ["es", "cjs", "umd", "iife"],
    },
    outDir: './dist'
  },
});
