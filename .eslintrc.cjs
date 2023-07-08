
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},

    // For Testing Library
    plugins: ['testing-library'],
    rules: {
		'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/await-fire-event': 'error',
		'testing-library/no-await-sync-query': 'error',
		'testing-library/no-debugging-utils': 'warn',
        'testing-library/no-render-in-setup': 'error',
        'testing-library/render-result-naming-convention': 'warn',
        'testing-library/no-node-access': 'warn',
		'testing-library/no-dom-import': 'off', 
	},

    overrides:[
        {
            files: ['**/*.+(spec|test).[jt]s'],
            extends: ['plugin:testing-library/react'],
        },
    ]
};
