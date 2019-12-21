/* eslint-env node, es6 */
module.exports = function ( grunt ) {
	'use strict';

	var conf = grunt.file.readJSON( 'extension.json' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		eslint: {
			options: {
				extensions: [ '.js', '.json' ],
				cache: true
			},
			all: [
				'**/*.{js,json}',
				'!{lib,vendor,node_modules}/**'
			]
		},
		stylelint: {
			options: {
				syntax: 'less'
			},
			src: [
				'**/*.css',
				'**/*.less',
				'!lib/**',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		// eslint-disable-next-line no-restricted-properties
		banana: Object.assign( {
			options: { requireLowerCase: false }
		}, conf.MessagesDirs )
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint', 'banana' ] );
	grunt.registerTask( 'test', [ 'lint' ] );
	grunt.registerTask( 'default', 'test' );
};
