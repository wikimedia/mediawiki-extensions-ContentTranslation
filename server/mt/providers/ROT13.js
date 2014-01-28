/*
 * Content Translation Machine Translation Interface.
 *
 */

'use strict';

/**
 * @class ROT13Service
 */
function ROT13Service(config) {
	this.config = config;
}

ROT13Service.prototype.translate = function ( sourceLang, targetLang, sourceText /*, onSuccess, onError */ ) {
	return sourceText.replace(/[a-zA-Z]/g, function (c) {
		return String.fromCharCode( (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13)
				? c
				: c - 26);
	} );
};

module.exports = {
	'ROT13Service': ROT13Service
};