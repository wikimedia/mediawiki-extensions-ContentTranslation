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
	this.parentTranslationUnit = null;
	// Source of the translation. Can be source, user, Apertium, Yandex etc
	this.translationSource = null;
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
 * Change handler
 */
mw.cx.dm.TranslationUnit.prototype.onChange = function() {
	var parentTranslationUnit;

	parentTranslationUnit = this.getParentTranslationUnit();

	if ( parentTranslationUnit ) {
		parentTranslationUnit.emit( 'change' );
	} else {
		this.translation.emit( 'change', this );
	}
};

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

mw.cx.dm.TranslationUnit.prototype.getSourceDocument = function () {
	return this.sourceDocument;
};

mw.cx.dm.TranslationUnit.prototype.setTargetDocument = function ( targetDocument ) {
	this.targetDocument = targetDocument;
};

mw.cx.dm.TranslationUnit.prototype.getTargetDocument = function () {
	return this.targetDocument;
};

mw.cx.dm.TranslationUnit.prototype.getParentTranslationUnit = function () {
	return this.parentTranslationUnit;
};

mw.cx.dm.TranslationUnit.prototype.setParentTranslationUnit = function ( translationUnit ) {
	this.parentTranslationUnit = translationUnit;
};

/**
 * Whether the translation unit is editable
 * @return {boolean}
 */
mw.cx.dm.TranslationUnit.prototype.isEditable = function () {
	return true;
};

/**
 * Remove the translation unit.
 */
mw.cx.dm.TranslationUnit.prototype.remove = function () {
	if ( this.targetDocument ) {
		this.targetDocument.remove();
		this.emit( 'change' );
		this.emit( 'remove' );
	}
};

/**
 * Get a unique id for this translation unit
 * @return {string}
 */
mw.cx.dm.TranslationUnit.prototype.getId = function () {
	return this.constructor.static.name + '::' + this.getSectionId();
};

/**
 * Get the id of the section
 * @return {string}
 */
mw.cx.dm.TranslationUnit.prototype.getSectionId = function () {
	return this.sourceDocument.id;
};

mw.cx.dm.TranslationUnit.prototype.getTranslationSource = function () {
	return this.translationSource;
};

mw.cx.dm.TranslationUnit.prototype.setTranslationSource = function ( translationSource ) {
	this.translationSource = translationSource;
};

/**
 * String representation of the translation unit instance. Useful for debugging.
 *
 * @return {string} String identified for the instance
 */
mw.cx.dm.TranslationUnit.prototype.toString = function() {
	return this.constructor.name + '::' + this.getId();
};
