'use strict';

var CXParser = require( __dirname + '/../CXParser' ),
	util = require( 'util' );

function CXParserHi() {
	CXParser.call( this, false, {
		lowercase: true
	} );
}

util.inherits( CXParserHi, CXParser );

CXParserHi.prototype.ontext = function ( text ) {
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
		nextLetter = sentence[offset + match.length];
		replacement += parser.endSentence();
		replacement += parser.startSentence();
		return replacement;
	}
	text = text.replace( /([a-zA-Zअ-ह]*)([।!?][\s])/g, textSplit );
	// content terminating with [.|!|?]
	text = text.replace( /([।!?])$/, function ( match, p1 ) {
		return p1 + parser.endSentence();
	} );
	this.print( text );
};

module.exports = CXParserHi;
