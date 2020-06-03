/**
 *
 * It is assumed that `this` is a ve.dm.Model that belongs to a translation unit
 *
 * @class
 * @abstract
 * @constructor
 */
ve.dm.CXTranslationUnitModel = function VeDmCXTranslationUnitModel() {
	//
};

/* Inheritance */

OO.initClass( ve.dm.CXTranslationUnitModel );

/* Methods */

/**
 * Get the section id for this section.
 * Example: cxTargetSection34
 *
 * @return {string}
 */
ve.dm.CXTranslationUnitModel.prototype.getSectionId = function () {
	return this.getAttribute( 'cxid' );
};

/**
 * Get the section number for the section. It is common for both
 * source and target section. Examples: 45, 12 etc.
 *
 * @return {number} section number
 */
ve.dm.CXTranslationUnitModel.prototype.getSectionNumber = function () {
	return mw.cx.getSectionNumberFromSectionId( this.getSectionId() );
};
