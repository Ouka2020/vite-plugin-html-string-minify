import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts(),
    viteStaticCopy({
      targets: [{ src: 'src/client.d.ts', dest: '../' }]
    })
  ],
  build: {
    lib: {
      entry: ['src/index.ts'],
      name: 'vite-plugin-html-string-minify',
      formats: ['es', 'cjs']
    },
    rollupOptions: { external: ['vite', 'minify'] }
  },
  esbuild: {
    drop: ['console', 'debugger']
  }
})
