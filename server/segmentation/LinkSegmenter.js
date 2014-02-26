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
	$ = require( 'jquery' );

function LinkSegmenter( content ) {
	Segmenter.call( this, content );
}

// Extend Segmenter
util.inherits( LinkSegmenter, Segmenter );

LinkSegmenter.prototype.segment = function () {
	var segmenter = this, $container = $( '<div>' ).html( this.content );

	$container.find( 'a' ).each( function( index, link ) {
		var $link = $( link ), hash;

		hash = crypto.createHash( 'md5' ).update( $link.prop( 'href' ) )
			.digest( 'hex' ).substr( 0, 5 );
		$link
			.attr( 'data-linkid', hash )
			.addClass( 'cx-link' );
		segmenter.segments[hash] = {
			href: $link.prop( 'href' )
		};
	} );
	this.segmentedContent = $container.html();
};

LinkSegmenter.prototype.toHTML = function () {
	return this.segmentedContent;
};

module.exports.LinkSegmenter = LinkSegmenter;
