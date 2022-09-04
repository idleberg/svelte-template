const sveltePreprocess = require('svelte-preprocess')

module.exports = {
	emitCss: true,
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		typescript: true
	})
};
