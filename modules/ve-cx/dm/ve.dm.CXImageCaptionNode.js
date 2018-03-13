/**
 * DataModel CX image caption node.
 *
 * @class
 * @extends ve.dm.MWImageCaptionNode
  *@mixins ve.dm.CXTranslationUnitModel
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 * @param {ve.dm.Node[]} [children]
 */
ve.dm.CXImageCaptionNode = function VeDmCXImageCaptionNode() {
	// Parent constructor
	ve.dm.MWImageCaptionNode.super.apply( this, arguments );

	// Mixin constructor
	ve.dm.CXTranslationUnitModel.call( this );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXImageCaptionNode, ve.dm.MWImageCaptionNode );
OO.mixinClass( ve.dm.CXImageCaptionNode, ve.dm.CXTranslationUnitModel );

/* Static Properties */

ve.dm.CXImageCaptionNode.static.name = 'cxImageCaption';

// Set cxBlockImage as the parent type for this node

ve.dm.CXImageCaptionNode.static.parentNodeTypes = [ 'cxBlockImage' ];

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXImageCaptionNode );
