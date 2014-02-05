/*
 * Content Translation Machine Translation Interface.
 *
 */

'use strict';

var ROT13Service = require( __dirname+ '/providers/ROT13.js' ).ROT13Service;
/**
 * @class CxTranslator
 */
function CXMTInterface ( config ) {
	this.config = config;
}

CXMTInterface.prototype.translate = function ( sourceLang, targetLang, sourceText/*, onSuccess, onError */) {
	return ( new ROT13Service(this.config) ).translate( sourceLang, targetLang, sourceText );
};

module.exports = { 'CXMTInterface': CXMTInterface };
