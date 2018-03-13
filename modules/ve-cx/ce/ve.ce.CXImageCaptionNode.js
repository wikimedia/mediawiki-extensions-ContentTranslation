/**
 * CX Block image caption node
 *
 * @class
 * @extends ve.ce.MWImageCaptionNode
 * @constructor
 * @param {ve.dm.CXImageCaptionNode} model Model to observe
 */
ve.ce.CXImageCaptionNode = function VeCeCXImageCaptionNode( model ) {
	this.model = model;
	// Parent constructor
	ve.ce.CXImageCaptionNode.super.apply( this, arguments );

	this.$element.addClass( 've-ce-cxImageCaptionNode' );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXImageCaptionNode, ve.ce.MWImageCaptionNode );

/* Static Properties */

ve.ce.CXImageCaptionNode.static.name = 'cxImageCaption';

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXImageCaptionNode );
