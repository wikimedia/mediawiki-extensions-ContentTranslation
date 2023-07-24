/**
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

/**
 * Get the mw section number for the section. It refers to different article
 * section (e.g. lead section, "Early life", "Biography", "References" sections etc)
 *
 * @return {number} mw section number
 */
ve.dm.CXTranslationUnitModel.prototype.getMwSectionNumber = function () {
	return this.element && this.element.attributes && this.element.attributes.mwsectionnumber;
};
