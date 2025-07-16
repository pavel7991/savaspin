import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './'),
			'~icons': path.resolve(__dirname, './images/icons')
		}
	}
})