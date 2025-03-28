// import path from "path"
import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    test: {
        globals: true,
        setupFiles: './test/setup',
        // alias: {
        //     "@src": path.resolve(__dirname,'/src')
        // }
    },
}))