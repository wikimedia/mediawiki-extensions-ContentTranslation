'use strict';

/**
 * CX Model factory.
 *
 * @class
 * @abstract
 * @extends OO.Factory
 * @constructor
 */
mw.cx.dm.ModelFactory = function CXModelFactory() {
// Parent constructor
	mw.cx.dm.ModelFactory.super.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.ModelFactory, OO.Factory );
