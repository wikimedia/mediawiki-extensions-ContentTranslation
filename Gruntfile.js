/* eslint-env node */
module.exports = function ( grunt ) {
	'use strict';

	var conf = grunt.file.readJSON( 'extension.json' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		eslint: {
			options: {
				reportUnusedDisableDirectives: true,
				extensions: [ '.js', '.json' ],
				cache: true
			},
			all: [
				'**/*.js{,on}',
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
		banana: conf.MessagesDirs
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint', 'banana' ] );
	grunt.registerTask( 'test', [ 'lint' ] );
	grunt.registerTask( 'default', 'test' );
};
