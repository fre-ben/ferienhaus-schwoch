import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{ ignores: ['dist', '**/*/env.d.ts'] },
	{
		rules: {
			'no-useless-escape': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
];
