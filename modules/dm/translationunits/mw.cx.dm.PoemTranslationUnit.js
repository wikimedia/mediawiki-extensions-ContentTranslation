'use strict';
/**
 * CX Poem TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.PoemTranslationUnit = function PoemTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.PoemTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.PoemTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.PoemTranslationUnit.static.name = 'poem';
mw.cx.dm.PoemTranslationUnit.static.matchRdfaTypes = [ 'mw:Extension/poem' ];

mw.cx.dm.PoemTranslationUnit.prototype.adapt = function () {
	// XXX: What exactly should we do here? It seems to work as-is
};

mw.cx.dm.PoemTranslationUnit.prototype.isEditable = function () {
	return false;
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.PoemTranslationUnit );
