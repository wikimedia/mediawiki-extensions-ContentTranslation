'use strict';

var CXParser = require( __dirname + '/languages' ).CXParser;

function CXParserFactory() {}

CXParserFactory.prototype.getParser = function ( language ) {
	var parser;
	if ( !CXParser[language] ) {
		// fallback to English
		parser = new CXParser();
	} else {
		parser = new CXParser[language]();
	}
	return parser;
};

module.exports.CXParserFactory = CXParserFactory;
