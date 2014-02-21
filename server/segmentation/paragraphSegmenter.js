/**
 * ContentTranslation Server
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */


'use strict';

var util = require( 'util' ),
	Segmenter = require( __dirname + '/segmenter.js' ).Segmenter,
	SentenceSegmenter = require( __dirname + '/sentenceSegmenter.js' ).SentenceSegmenter,
	$ = require( 'jquery' );

function ParagraphSegmenter( content ) {
	Segmenter.call( this, content );
	this.links = {};
}

// Extend Segmenter
util.inherits( ParagraphSegmenter, Segmenter );

ParagraphSegmenter.prototype.segment = function () {
	var segmenter = this,
		$container = $( '<div>' ).html( this.content );

	segmenter.segmentedContent = '';
	// TODO: Following line effectively filters the page content.
	// We take only paragraphs and section titles. Will require a better
	// strategy for preprocessing article content.
	$container.find( 'p, h1, h2, h3, h4, h5, h6' ).each( function ( index, section ) {
		var $section = $( section ), sentenceSegments, sentenceSegmenter;

		sentenceSegmenter = new SentenceSegmenter( $section.html() );
		sentenceSegmenter.segment();
		sentenceSegments = sentenceSegmenter.getSegments();
		segmenter.segments = $.extend( segmenter.segments, sentenceSegments );
		// TODO: do we need segmentCount?
		segmenter.segmentCount += sentenceSegmenter.getSegmentCount();
		segmenter.links = $.extend( segmenter.links, sentenceSegmenter.getLinks() );
		$section.html( sentenceSegmenter.toHTML() );
		segmenter.segmentedContent +=  $section[0].outerHTML;
	} );
};

ParagraphSegmenter.prototype.getLinks = function () {
	return this.links;
};

ParagraphSegmenter.prototype.toHTML = function () {
	return this.segmentedContent;
};

module.exports.ParagraphSegmenter = ParagraphSegmenter;
