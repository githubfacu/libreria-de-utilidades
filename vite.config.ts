import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import viteConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'lvlup-utils-lib'
        }
    },
    resolve:{
        alias: {
            '@src': resolve(__dirname, 'src'),
            '@types': resolve(__dirname, 'src/types'),
            // '@utils': resolve(__dirname, '/src/utils')
        }
    },
    plugins: [dts({
        outDir: 'dist', 
        exclude: ['**/*.test.ts', '/test'],
        insertTypesEntry: true
    }), viteConfigPaths()]
})