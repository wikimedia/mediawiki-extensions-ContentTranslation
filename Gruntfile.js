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
				cache: true,
				fix: grunt.option( 'fix' )
			},
			all: [
				'**/*.{js,json}',
				'!{lib,vendor,node_modules,app}/**'
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
				'!vendor/**',
				'!app/**'
			]
		},
		// eslint-disable-next-line es/no-object-assign
		banana: Object.assign( {
			options: { requireLowerCase: false }
		}, conf.MessagesDirs )
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint', 'banana' ] );
	grunt.registerTask( 'test', [ 'lint' ] );
	grunt.registerTask( 'default', 'test' );
};
