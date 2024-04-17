import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import IISAdapter from 'sveltekit-adapter-iis'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		version: {
			pollInterval: 300000,
		  },
		adapter: IISAdapter({
			// the hostname/port that the site will be hosted on in IIS.
			// can be changed later in web.config
			origin: 'http://localhost:8080',
			pages: "build"
			// ... other options
		  }),
	}
};

export default config;
