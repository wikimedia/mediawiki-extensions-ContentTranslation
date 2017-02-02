'use strict';

/**
 * CX Section TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.SectionTranslationUnit = function SectionTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.SectionTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
	this.init();
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.SectionTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.SectionTranslationUnit.prototype.init = function () {
	this.buildSubTranslationUnits( this.sourceDocument );
};

/**
 * Section is the top most translation unit. Build and initialize its sub translation units.
 *
 * @param {Element} sourceDocument Source section DOM Element
 */
mw.cx.dm.TranslationUnit.prototype.buildSubTranslationUnits = function ( sourceDocument ) {
	var i, model, children, subTranslationUnit;

	children = sourceDocument.children;

	if ( !children ) {
		return;
	}

	for ( i = 0; i < children.length; i++ ) {
		model = mw.cx.dm.modelRegistry.matchElement( children[ i ] );
		// Check if there is a translation unit defined for this child
		if ( model ) {
			subTranslationUnit = mw.cx.dm.translationUnitFactory.create(
				model, this.config, this.translation, children[ i ]
			);

			// Keep a map of DOM ids and translation units
			this.subTranslationUnitModels[ children[ i ].id ] = subTranslationUnit;
			this.translationUnits.push( subTranslationUnit );
			subTranslationUnit.setParentTranslationUnit( this );
		}
		// Recursively search for sub translation units.
		this.buildSubTranslationUnits( children[ i ] );
	}
};

mw.cx.dm.SectionTranslationUnit.static.name = 'section';

mw.cx.dm.SectionTranslationUnit.static.matchTagNames = mw.cx.dm.SourcePage.static.sectionTypes;

/**
 * Translate the section using machine translation if available
 *
 * @param {Element} sourceDocument Source section DOM Element
 * @return {Element} Translated document
 */
mw.cx.dm.SectionTranslationUnit.prototype.translate = function ( sourceDocument ) {
	// TODO: Use Machine translation
	return sourceDocument.cloneNode( true );
};

/**
 * Adapt the section for target language
 */
mw.cx.dm.SectionTranslationUnit.prototype.adapt = function () {
	this.targetDocument = this.translate( this.sourceDocument );
	// Udapte target id attributes
	this.setTargetId();
};

mw.cx.dm.TranslationUnit.prototype.onChange = function () {
	this.save();
};

mw.cx.dm.SectionTranslationUnit.prototype.save = function () {
	// TODO: use the storage manager instance to save the sections.
};

/* Register */
mw.cx.dm.modelRegistry.register( mw.cx.dm.SectionTranslationUnit );
