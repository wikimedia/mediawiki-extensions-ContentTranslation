/**
 * Node representing an adapted section
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
};

/* Inheritance */

OO.inheritClass( ve.dm.CXSectionNode, ve.dm.SectionNode );
OO.mixinClass( ve.dm.CXSectionNode, ve.dm.CXTranslationUnitModel );

/* Static Properties */

ve.dm.CXSectionNode.static.name = 'cxSection';

ve.dm.CXSectionNode.static.matchTagNames = [ 'section' ];

ve.dm.CXSectionNode.static.matchRdfaTypes = [ 'cx:Section' ];

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXSectionNode );
