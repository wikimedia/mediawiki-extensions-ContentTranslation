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
	this.paragraphs = [];
	this.links = {};
}

// Extend Segmenter
util.inherits( ParagraphSegmenter, Segmenter );

ParagraphSegmenter.prototype.segment = function () {
	var segmenter = this,
		$container = $( '<div>' ).html( this.content );

	$container.find( 'p' ).each( function ( index, paragraph ) {
		var $paragraph = $( paragraph ),
			sentenceSegments,
			sentenceSegmenter = new SentenceSegmenter( $paragraph.html() );

		sentenceSegmenter.segment();
		sentenceSegments = sentenceSegmenter.getSegments();
		segmenter.segments = $.extend( segmenter.segments, sentenceSegments );
		segmenter.segmentCount += sentenceSegmenter.getSegmentCount();
		segmenter.links = $.extend( segmenter.links, sentenceSegmenter.getLinks() );
		segmenter.paragraphs.push( sentenceSegmenter.toHTML() );
	} );
};

ParagraphSegmenter.prototype.getLinks = function () {
	return this.links;
};

ParagraphSegmenter.prototype.toHTML = function () {
	var i, paragraph, paragraphs = '';

	for ( i = 0; i< this.paragraphs.length; i++ ) {
		paragraph = $( this.paragraphs[i] );
		paragraphs += $( '<p>' ).append( paragraph ).prop( 'outerHTML' );
	}

	return paragraphs;
};

module.exports.ParagraphSegmenter = ParagraphSegmenter;
