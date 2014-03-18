'use strict';

var SAXParser = require( 'sax' ).SAXParser,
	util = require( 'util' );

/**
 * @class CXParser
 */
function CXParser() {
	SAXParser.call( this, false, {
		lowercase: true
	} );
}

util.inherits( CXParser, SAXParser );

/**
 * Initialize the parser
 */
CXParser.prototype.init = function () {
	this.segmentCount = 0;
	this.segmentedContent = '';
	this.inSentence = false;
	this.links = {};
};

/**
 * Error handler
 */
CXParser.prototype.onerror = function ( error ) {
	console.error( error );
	throw error;
};

/**
 * Parse the content
 * @param {string} content
 */
CXParser.prototype.parse = function ( content ) {
	this.init();
	this.write( content );
};

/**
 * Collects the content to segmentedContent
 * @param {string} content
 */
CXParser.prototype.print = function ( content ) {
	this.segmentedContent += content;
};

/**
 * Entity handler
 */
function entity( str ) {
	return str.replace( '"', '&quot;' );
}

/**
 * Start a sentence - add sentence segment marker
 */
CXParser.prototype.startSentence = function () {
	this.inSentence = true;
	return '\n\t<span class="cx-segment" data-segmentid="' + ( this.segmentCount++ ) + '">';
};

/**
 * End a sentence - add sentence segment marker
 */
CXParser.prototype.endSentence = function () {
	this.inSentence = false;
	return '</span>';
};

/**
 * Text handler
 * @param {string} text
 */
CXParser.prototype.ontext = function ( text ) {
	var parser = this;
	if ( !text.trim() ) {
		return;
	}
	if ( !this.inSentence ) {
		// Avoid dangling sentence.
		this.print( this.startSentence() );
	}

	function textSplit( match, prevWord, sentenceSeperator, offset, sentence ) {
		var replacement, nextLetter;

		replacement = prevWord + sentenceSeperator;
		//console.log([match, prevWord, sentenceSeperator, offset]);
		nextLetter = sentence[offset + match.length];
		if ( prevWord && prevWord.length < 3 && prevWord[0].toUpperCase() === prevWord[0] ||
			nextLetter && nextLetter.toLowerCase() === nextLetter ) {
			// abbreviation?
			return replacement;
		}
		replacement += parser.endSentence();
		replacement += parser.startSentence();
		return replacement;
	}

	text = text.replace( /(\w*)([.!?][\s])/g, textSplit );
	// content terminating with [.|!|?]
	text = text.replace( /([.!?])$/, function ( match, p1 ) {
		return p1 + parser.endSentence();
	} );
	this.print( text );
};

/**
 * Link Handler
 * @param {string} href
 */
CXParser.prototype.linkHandler = function ( href ) {
	if ( !this.inSentence ) {
		this.print( this.startSentence() );
	}
	this.links[this.segmentCount] = {
		href: href
	};
	this.print( ' class="cx-link" data-linkid="' + ( this.segmentCount++ ) + '"' );
};

/**
 * Open tag event handler
 * @param {Object} tag
 */
CXParser.prototype.onopentag = function ( tag ) {
	var attrName,
		section = /[ph1-6]|figure|ul|div/;

	if ( tag.name === 'a' && !this.inSentence ) {
		// sentences starting with a link
		this.print( this.startSentence() );
	}

	// Start of tag
	this.print( '<' + tag.name );

	if ( tag.name === 'a' ) {
		this.linkHandler( tag.attributes.href );
	}

	for ( attrName in tag.attributes ) {
		if ( attrName === 'data-parsoid' || attrName === 'data-mw' ) {
			// Parsoid gives the html with these attributes and has
			// values as big escaped htmls. The parser has trouble in
			// not leaking it to the text. So ignore these attributes.
			continue;
		}
		this.print( ' ' + attrName + '="' + entity( tag.attributes[attrName] ) + '"' );
	}

	// Sections
	if ( tag.name.match( section ) ) {
		if ( !tag.attributes.id ) {
			this.print( ' id="' + ( this.segmentCount++ ) + '"' );
		}
	}

	// Close the tag
	this.print( '>' );

	// Start the first segment of the section
	if ( tag.name.match( section ) ) {
		this.print( this.startSentence() );
	}
};

/**
 * Close tag handler
 * @param {string} tag
 */
CXParser.prototype.onclosetag = function ( tag ) {
	var section = /[ph1-6]|figure|ul|div/;
	if ( tag.match( section ) ) {
		if ( this.inSentence ) {
			// Avoid dangling sentence.
			this.print( this.endSentence() );
		}
		this.print( '</' + tag + '>\n' );
	} else {
		this.print( '</' + tag + '>' );
	}
};

module.exports = CXParser;
