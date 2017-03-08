'use strict';

/**
 * CX Sentence TranslationUnit
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.SentenceTranslationUnit = function SentenceTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.SentenceTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.SentenceTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.SentenceTranslationUnit.static.name = 'sentence';
mw.cx.dm.SentenceTranslationUnit.static.matchTagNames = [ 'span' ];

/**
 * @inheritDoc
 */
mw.cx.dm.SentenceTranslationUnit.static.matchFunction = function ( node ) {
	return node.className === 'cx-segment';
};

mw.cx.dm.SentenceTranslationUnit.prototype.isEditable = function () {
	return true;
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.SentenceTranslationUnit );
