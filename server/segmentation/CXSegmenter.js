/**
 * ContentTranslation Server - Segmenter
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

var CXParserFactory = require( __dirname + '/CXParserFactory.js' ).CXParserFactory,
	$ = require( 'jquery' );

function CXSegmenter( content, language ) {
	this.content = content;
	this.segmentCount = 0;
	this.segments = {};
	this.segmentedContent = null;
	this.links = {};
	this.parser = ( new CXParserFactory() ).getParser( language || 'en' );
}

CXSegmenter.prototype.segment = function () {
	this.parse();
	this.extractSegments();
};

CXSegmenter.prototype.parse = function () {
	this.parser.parse( this.content );
	this.links = this.parser.links;
	this.segmentedContent = this.parser.segmentedContent;
};

CXSegmenter.prototype.getLinks = function () {
	return this.links;
};

CXSegmenter.prototype.extractSegments = function () {
	var segmenter = this,
		$container = $( '<div>' ).html( this.segmentedContent );

	$container.find( '.cx-segment' ).each( function ( index, section ) {
		var $section = $( section ),
			segmentId = $section.data( 'segmentid' );
		segmenter.segments[segmentId] = {
			source: $section.html()
		};
	} );
};

CXSegmenter.prototype.getSegmentCount = function () {
	return this.segmentCount;
};

CXSegmenter.prototype.getSegments = function () {
	return this.segments;
};

CXSegmenter.prototype.getSegmentedContent = function () {
	return this.segmentedContent;
};

module.exports.CXSegmenter = CXSegmenter;
