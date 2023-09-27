module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:i18next/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 'off',
		indent: [2, 'tab'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'linebreak-style': 'off',
		'comma-dangle': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'object-curly-newline': 'off',
		'no-shadow': 'off',
		'no-undef': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
		'max-len': ['error', { ignoreComments: true, code: 100 }],
		'implicit-arrow-linebreak': 'off',
		'operator-linebreak': 'off',
		'react/jsx-wrap-multilines': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
};
