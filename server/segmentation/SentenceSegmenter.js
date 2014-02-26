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
	crypto = require( 'crypto' ),
	Segmenter = require( __dirname + '/Segmenter.js' ).Segmenter,
	LinkSegmenter = require( __dirname + '/LinkSegmenter.js' ).LinkSegmenter,
	$ = require( 'jquery' );

function SentenceSegmenter( content ) {
	Segmenter.call( this, content );
	this.lookup = [];
	this.links = {};
}

// Extend Segmenter
util.inherits( SentenceSegmenter, Segmenter );

SentenceSegmenter.prototype.segment = function () {
	var i, segmentId, linkSegmenter,
		sentences = this.content.split( '. ' );

	this.segmentCount += sentences.length;
	for ( i = 0; i< this.segmentCount; i++ ) {
		segmentId = crypto.createHash( 'md5' ).update( sentences[i] )
			.digest( 'hex' ).substr( 0, 5 );
		linkSegmenter = new LinkSegmenter( sentences[i] );
		linkSegmenter.segment();
		this.links = $.extend( this.links, linkSegmenter.getSegments() );
		this.segments[segmentId] = {
			source: linkSegmenter.toHTML() +
				( ( i+1 !== this.segmentCount )? '. ': '.' ) // XXX
		};
		// We need this lookup to keep the order of segments
		// while constructing the segmented content using
		// toHTML method.
		this.lookup.push( segmentId );
	}
};

SentenceSegmenter.prototype.getLinks = function () {
	return this.links;
};

SentenceSegmenter.prototype.toHTML = function () {
	var i, segmentId, $sentence, $sentences = '';

	for ( i = 0; i< this.segmentCount; i++ ) {
		segmentId = this.lookup[i];
		$sentence = $( '<span>' )
			.addClass( 'cx-segment' )
			.attr( 'data-segment', segmentId )
			.html( this.segments[segmentId].source );
		$sentences += $sentence.prop( 'outerHTML' );
	}

	return $sentences;
};

module.exports.SentenceSegmenter = SentenceSegmenter;
