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
	ParagraphSegmenter = require( __dirname + '/paragraphSegmenter.js' ).ParagraphSegmenter;

function CXSegmenter( content ) {
	Segmenter.call( this, content );
	this.links = {};
}

// Extend Segmenter
util.inherits( CXSegmenter, Segmenter );

CXSegmenter.prototype.segment = function () {
	var paragraphSegmenter = new ParagraphSegmenter( this.content );
	paragraphSegmenter.segment();
	this.segments = paragraphSegmenter.getSegments();
	this.segmentedContent = paragraphSegmenter.toHTML();
	this.links = paragraphSegmenter.getLinks();
};

CXSegmenter.prototype.getLinks = function () {
	return this.links;
};

module.exports.CXSegmenter = CXSegmenter;
