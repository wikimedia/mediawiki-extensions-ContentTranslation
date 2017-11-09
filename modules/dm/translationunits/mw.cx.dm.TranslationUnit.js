/**
 * ContentTranslation TranslationUnit class
 *
 * A translation unit in ContentTranslation is a translatable element. A paragraph
 * is translatable element. It has a source content in source language and to be
 * translated to target language. The same paragraph can have a reference, a link,
 * a template and all of these sub elements are also translatable. That means,
 * A translation unit can be a child of another translation unit. A MediaWiki template
 * is a translation unit. At the same time, template parameters are also translatable units.
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
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {string} id The unique id for this translation unit
 * @param {ve.dm.Node|ve.dm.Annotation} sourceModel The source model
 * @param {mw.cx.dm.TranslationUnit|null} parentTranslationUnit The parent translation unit
 */
mw.cx.dm.TranslationUnit = function TranslationUnit( translation, id, sourceModel, parentTranslationUnit ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.translation = translation;
	this.id = id;
	this.sourceModel = sourceModel;
	this.parentTranslationUnit = parentTranslationUnit;
	this.start = null;
	this.end = null;
	this.translationUnits = [];
	this.subTranslationUnitModels = {};
	this.connect( this, {
		change: 'onChange'
	} );
};

/* Inheritance */

OO.initClass( mw.cx.dm.TranslationUnit );
OO.mixinClass( mw.cx.dm.TranslationUnit, OO.EventEmitter );

/* Static properties */

mw.cx.dm.TranslationUnit.static.matchClasses = [];

/* Methods */

/**
 * Set the start offset of the first range covered by the annotation
 *
 * @param {number} start The start index
 */
mw.cx.dm.TranslationUnit.prototype.setStart = function ( start ) {
	this.start = start;
};

/**
 * Set the end offset of the last range covered by the annotation
 *
 * @param {number} end The end index
 */
mw.cx.dm.TranslationUnit.prototype.setEnd = function ( end ) {
	this.end = end;
};

/**
 * Save this translation unit in backend database.
 * Section level translation units will be saved. Sub translation units
 * trigger saving of its parent units.
 * @inheritable
 */
mw.cx.dm.TranslationUnit.prototype.save = function () {
	var parentTranslationUnit;

	parentTranslationUnit = this.getParentTranslationUnit();

	if ( parentTranslationUnit ) {
		parentTranslationUnit.save();
	}
};

mw.cx.dm.TranslationUnit.prototype.onChange = null;

/**
 * Get the sub translation units in this translation unit.
 *
 * @return {mw.cx.dm.TranslationUnit[]} Array of sub translation units
 */
mw.cx.dm.TranslationUnit.prototype.getTranslationUnits = function () {
	return this.translationUnits;
};

mw.cx.dm.TranslationUnit.prototype.getParentTranslationUnit = function () {
	return this.parentTranslationUnit;
};

/**
 * Get the unique id for this translation unit
 * @return {string}
 */
mw.cx.dm.TranslationUnit.prototype.getId = function () {
	return this.id;
};

/**
 * String representation of the translation unit instance. Useful for debugging.
 *
 * @return {string} String identified for the instance
 */
mw.cx.dm.TranslationUnit.prototype.toString = function () {
	return this.constructor.name + '::' + this.getId();
};
