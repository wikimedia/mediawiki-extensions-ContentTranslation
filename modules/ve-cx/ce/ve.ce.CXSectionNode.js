/**
 * Node representing an adapted section
 *
 * @class
 * @extends ve.ce.SectionNode
 * @constructor
 * @param {ve.dm.CXSectionNode} model
 */
ve.ce.CXSectionNode = function VeCeCXSectionNode() {
	// Parent constructor
	ve.ce.CXSectionNode.super.apply( this, arguments );

	this.$element
		.attr( 'id', this.model.getAttribute( 'cxid' ) )
		.addClass( 've-ce-cxSectionNode' );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXSectionNode, ve.ce.SectionNode );

/* Static Properties */

ve.ce.CXSectionNode.static.tagName = 'section';

ve.ce.CXSectionNode.static.name = 'cxSection';

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXSectionNode );
