import {resolve} from 'node:path'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths()],
    // assetsInclude: ['**/*.glb'],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
            },
        },
    },
})