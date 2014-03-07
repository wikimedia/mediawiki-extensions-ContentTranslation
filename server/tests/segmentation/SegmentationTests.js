'use strict';

var assert = require( 'assert' ),
	CXSegmenter = require( __dirname + '/../../segmentation/CXSegmenter.js' ).CXSegmenter,
	tests = require( './SegmentationTests.json' );

for ( var lang in tests ) {
	var languageTests = tests[lang];
	for ( var i in languageTests ) {
		var test = languageTests[i],
			segmenter;
		segmenter = new CXSegmenter( test.source, lang );
		segmenter.segment();
		var result = segmenter.getSegmentedContent();
		result = result.replace( /(\r\n|\n|\t|\r)/gm, '' );
		console.log( test.result + '\n' + result );
		assert.equal( test.result, result );
	}
}
