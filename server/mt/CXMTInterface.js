/*
 * Content Translation Machine Translation Interface.
 *
 */

'use strict';

var Rot13Service = require( __dirname + '/providers/Rot13.js' ).ROT13Service;
/**
 * @class CxTranslator
 */
function CXMTInterface( context ) {
	this.context = context;
}

CXMTInterface.prototype.translate = function ( segments ) {
	return ( new Rot13Service( this.context ) ).translate( segments );
};

module.exports.CXMTInterface = CXMTInterface;
