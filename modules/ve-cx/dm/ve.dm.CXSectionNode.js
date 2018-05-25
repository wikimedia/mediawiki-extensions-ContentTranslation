'use strict';

/**
 * Node representing an adapted section
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.dm.SectionNode
 * @constructor
 */
ve.dm.CXSectionNode = function VeDmCXSectionNode() {
	// Parent constructor
	ve.dm.CXSectionNode.super.apply( this, arguments );

	// Mixin constructors
	ve.dm.CXTranslationUnitModel.call( this );
	ve.dm.CXLintableNode.call( this );

	this.translation = ve.init.target.getTranslation();

	this.connect( this, { update: this.onUpdate.bind( this ) } );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXSectionNode, ve.dm.SectionNode );
OO.mixinClass( ve.dm.CXSectionNode, ve.dm.CXTranslationUnitModel );
OO.mixinClass( ve.dm.CXSectionNode, ve.dm.CXLintableNode );

/* Static Properties */

ve.dm.CXSectionNode.static.name = 'cxSection';

ve.dm.CXSectionNode.static.defaultAttributes = {
	cxsource: 'source'
};

ve.dm.CXSectionNode.static.matchTagNames = [ 'section' ];

ve.dm.CXSectionNode.static.matchRdfaTypes = [ 'cx:Section' ];

ve.dm.CXSectionNode.static.toDataElement = function ( domElements ) {
	// Parent method
	var dataElement = ve.dm.CXSectionNode.super.static.toDataElement.apply( this, arguments );

	dataElement.attributes.cxid = domElements[ 0 ].id;
	dataElement.attributes.cxsource = domElements[ 0 ].dataset.mwCxSource;
	return dataElement;
};

ve.dm.CXSectionNode.static.toDomElements = function ( dataElement ) {
	var elements = ve.dm.CXSectionNode.super.static.toDomElements.apply( this, arguments );
	elements[ 0 ].setAttribute( 'rel', 'cx:Section' );
	elements[ 0 ].setAttribute( 'id', dataElement.attributes.cxid );
	elements[ 0 ].dataset.mwCxSource = dataElement.attributes.cxsource;
	return elements;
};

ve.dm.CXSectionNode.prototype.onUpdate = function () {
	if ( this.isTargetSection() ) {
		// Update is triggered by a tree modification. Wait for the whole tree modification
		// to finish, e.g. if there are relevant internal list changes to wait for.
		setTimeout( this.emitSectionChange.bind( this ) );
	}
};

ve.dm.CXSectionNode.prototype.emitSectionChange = function () {
	this.translation.emit( 'sectionChange', this.getSectionId() );
};

/**
 * Get the section id for this section.
 * Example: cxTargetSection34
 * @return {string}
 */
ve.dm.CXSectionNode.prototype.getSectionId = function () {
	return this.getAttribute( 'cxid' );
};

/**
 * Get the section number for the section. It is common for both
 * source and target section. Examples: 45, 12 etc.
 * @return {number} section number
 */
ve.dm.CXSectionNode.prototype.getSectionNumber = function () {
	return mw.cx.getSectionNumberFromSectionId( this.getSectionId() );
};

/**
 * Whether the section is target section or not.
 * @return {boolean}
 */
ve.dm.CXSectionNode.prototype.isTargetSection = function () {
	return this.translation && this.translation.targetDoc === this.getDocument();
};

/**
 * Get the original content source.
 * Example: Apertium
 * @return {string}
 */
ve.dm.CXSectionNode.prototype.getOriginalContentSource = function () {
	return this.getAttribute( 'cxsource' );
};

/**
 * ...
 * @param {string} source One of 'source', 'scratch' or name of MT engine.
 */
ve.dm.CXSectionNode.prototype.setOriginalContentSource = function ( source ) {
	this.element.attributes.cxsource = source;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXSectionNode );

/**
 * HACK: We need to improve how suggestedParentNodes works
 */

ve.dm.MWHeadingNode.static.suggestedParentNodeTypes.push( 'cxSection' );
ve.dm.MWPreformattedNode.static.suggestedParentNodeTypes.push( 'cxSection' );
ve.dm.MWTableNode.static.suggestedParentNodeTypes.push( 'cxSection' );
