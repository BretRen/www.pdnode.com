import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// alias: {
		// 	"$components": 'src/components',
		// 	"$/": "src/",
		// },
		alias: {
			"$components": './src/components'  // 确保这里写对了
		},
		adapter: adapter()
	}
}

export default config;
