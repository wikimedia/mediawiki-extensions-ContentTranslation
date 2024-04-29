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
		'es-x/no-async-functions': 'off'
	}
};
