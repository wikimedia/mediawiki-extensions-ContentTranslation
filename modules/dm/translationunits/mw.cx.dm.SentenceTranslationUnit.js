'use strict';

/**
 * CX Sentence TranslationUnit
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {string} id The translation unit ID
 * @param {ve.dm.Node} sourceModel The source model
 * @param {mw.cx.dm.TranslationUnit|null} parentTranslationUnit The parent translation unit
 */
mw.cx.dm.SentenceTranslationUnit = function SentenceTranslationUnit( translation, id, sourceModel, parentTranslationUnit ) {
	mw.cx.dm.SentenceTranslationUnit.super.call( this, translation, id, sourceModel, parentTranslationUnit );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.SentenceTranslationUnit, mw.cx.dm.TranslationUnit );

/* Static properties */

mw.cx.dm.SentenceTranslationUnit.static.name = 'sentence';

mw.cx.dm.SentenceTranslationUnit.static.matchClasses = [ ve.dm.CXSentenceSegmentAnnotation ];

/* Registration */

mw.cx.dm.translationUnitFactory.register( mw.cx.dm.SentenceTranslationUnit );
