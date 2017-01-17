/**
 * ContentTranslation TranslationUnit class
 *
 * A translation unit in ContentTranslation is a translatable element. A paragraph
 * is translatable element. It has a source content in source language and to be
 * translated to target language. The same paragraph can have a reference, a link,
 * a template and all of these sub elements are also translatable. That means,
 * A translation unit can be a child of another translation unit. A MediaWiki template
 * is a translation unit. At the same time, template paramters are also translatable units.
 * mw.cx.dm.TranslationUnit class abstracts the data manipulation over such a translation
 * unit during a translation.
 */

'use strict';

/**
 * CX TranslationUnit
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
mw.cx.dm.TranslationUnit = function TranslationUnit( config, translation, sourceDocument, targetDocument ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.config = config;
	this.translation = translation;
	this.sourceDocument = sourceDocument;
	this.targetDocument = targetDocument;
	this.translationUnits = [];
	this.subTranslationUnitModels = {};
	this.requestManager = config.requestManager;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;

	// Parent constructor
	mw.cx.dm.TranslationUnit.super.call( this );
	this.connect( this, {
		change: 'onChange'
	} );
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.TranslationUnit, mw.cx.dm.Model );
OO.mixinClass( mw.cx.dm.TranslationUnit, OO.EventEmitter );

/**
 * Adapt the translation unit for target langauge.
 */
mw.cx.dm.TranslationUnit.prototype.adapt = null;

/**
 * Save this translation unit in backend database.
 * Section level translation units will be saved. Sub translation units
 * trigger saving of its parent units.
 * @inheritable
 */
mw.cx.dm.TranslationUnit.prototype.save = function() {
	var parentTranslationUnit;

	parentTranslationUnit = this.getParentTranslationUnit();

	if ( parentTranslationUnit ) {
		parentTranslationUnit.save();
	}
};

mw.cx.dm.TranslationUnit.prototype.onChange = null;

/**
 * Change the element id of the translation copy. We follow a format where
 * 'cx' is prefixed to the source element id.
 */
mw.cx.dm.TranslationUnit.prototype.setTargetId = function () {
	if ( !this.targetDocument ) {
		throw new Error( 'Target document not set for translation unit : ' + this.toString() );
	}
	this.targetDocument.id = 'cx' + this.sourceDocument.id;
};

/**
 * Get the sub translation units in this translation unit.
 *
 * @return {mw.cx.dm.TranslationUnit[]} Array of sub translation units
 */
mw.cx.dm.TranslationUnit.prototype.getTranslationUnits = function() {
	return this.translationUnits;
};

/**
 * Whether the translation unit is editable
 * @return {boolean}
 */
mw.cx.dm.TranslationUnit.prototype.isEditable = function () {
	return true;
};

/**
 * String representation of the translation unit instance. Useful for debugging.
 *
 * @return {string} String identified for the instance
 */
mw.cx.dm.TranslationUnit.prototype.toString = function() {
	return this.constructor.name + '::' + this.constructor.static.name + '::' + this.sourceDocument.id;
};
