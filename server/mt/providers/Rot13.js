/**
 * Rot13 Translation service
 *
 * A dummy interface to test the CX MT
 */

'use strict';

var Q = require( 'q' ),
	SAXParser = require( 'sax' ).SAXParser;

/**
 * @class Rot13Service
 */
function Rot13Service( config ) {
	this.config = config;
	this.parser = null;
}

function rot13( text ) {
	return text.replace( /[a-zA-Z]/g, function ( c ) {
		return String.fromCharCode( ( c <= 'Z' ? 90 : 122 ) >= ( c = c.charCodeAt( 0 ) + 13 ) ? c : c - 26 );
	} );
}

Rot13Service.prototype.translate = function ( segments ) {
	var rot13 = this,
		deferred = Q.defer(),
		mt = {};

	// Simulate a 1000 millisecond delay.
	setTimeout( function () {
		var translation,
			segmentId;
		for ( segmentId in segments ) {
			rot13.parser = new SAXParser();
			rot13.prepareParser();
			// Wrap the source with <p> to make it valid dom fragment
			rot13.parser.write( '<p>' + segments[ segmentId ].source + '</p>' );
			translation = rot13.parser.parsedText;
			translation = translation.substr( 3, translation.length - 7 );
			mt[ segmentId ] = translation;
		}
		deferred.resolve( mt );
	}, 1000 );

	return deferred.promise;
};

Rot13Service.prototype.prepareParser = function () {
	var parser = this.parser;
	parser.parsedText = '';
	/**
	 * Entity handler
	 */
	function entity( str ) {
		return str.replace( '"', '&quot;' );
	}

	parser.onopentag = function ( tag ) {
		var attrName;
		parser.parsedText += '<' + tag.name;
		for ( attrName in tag.attributes ) {
			parser.parsedText += ' ' + attrName + '="' + entity( tag.attributes[ attrName ] ) + '"';
		}
		parser.parsedText += '>';
	};

	parser.onclosetag = function ( tag ) {
		parser.parsedText += '</' + tag + '>';
	};

	parser.ontext = function ( text ) {
		parser.parsedText += rot13( text );
	};
};

module.exports.Rot13Service = Rot13Service;
