/**
 * DataModel CX image caption node.
 *
 * @class
 * @extends ve.dm.MWImageCaptionNode
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 * @param {ve.dm.Node[]} [children]
 */
ve.dm.CXImageCaptionNode = function VeDmCXImageCaptionNode() {
	// Parent constructor
	ve.dm.MWImageCaptionNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXImageCaptionNode, ve.dm.MWImageCaptionNode );

/* Static Properties */

ve.dm.CXImageCaptionNode.static.name = 'cxImageCaption';

/* Static Methods */

// Set cxBlockImage as the parent type for this node
ve.dm.CXImageCaptionNode.static.parentNodeTypes = [ 'cxBlockImage' ];

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXImageCaptionNode );
