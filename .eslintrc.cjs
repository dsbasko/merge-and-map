module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'eslint-config-airbnb',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'no-tabs': 'off',
		'object-curly-newline': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		indent: ['error', 'tab'],
		'no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],
	},
	ignorePatterns: ['node_modules/', 'dist/', 'build/'],
};
