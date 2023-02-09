const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'ram': 'repeat(auto-fit, minmax(240px, 1fr))',
			}
		}
	},
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};

module.exports = config;
