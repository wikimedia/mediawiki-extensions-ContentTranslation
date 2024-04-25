module.exports = {
	root: true,
	extends: [
		'wikimedia/client/es6',
		'wikimedia/jquery',
		'wikimedia/mediawiki',
		'wikimedia/language/es2019'
	],
	rules: {
		'no-implicit-globals': 'off',
		'es-x/no-array-prototype-includes': 'off',
		'es-x/no-async-functions': 'off',
		'es-x/no-object-values': 'off',
		'es-x/no-promise-prototype-finally': 'off'
	}
};
