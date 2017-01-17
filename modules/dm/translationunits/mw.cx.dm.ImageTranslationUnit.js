'use strict';
/**
 * CX Image TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.ImageTranslationUnit = function CXImageTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.ImageTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.ImageTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.ImageTranslationUnit.static.name = 'Image';
mw.cx.dm.ImageTranslationUnit.static.tags = [ 'figure' ];
mw.cx.dm.ImageTranslationUnit.static.matchRdfaTypes = [ 'mw:Image/Thumb' ];

mw.cx.dm.modelRegistry.register( mw.cx.dm.ImageTranslationUnit );
