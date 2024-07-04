import { minify } from 'minify'
import { Plugin } from 'vite'

const htmlStringMinify = (): Plugin => {
  return {
    name: 'vite-plugin-html-string-minify',
    enforce: 'pre',
    async load(id) {
      if (!id.endsWith('.html?minify')) return

      const m = (await minify(id.split('?')[0])).replaceAll('"', '\\"')
      return `export default "${m}"`
    }
  }
}

export default htmlStringMinify
