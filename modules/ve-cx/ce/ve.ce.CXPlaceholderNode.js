/**
 * Empty placeholder Section in the target document, corresponding to a source Section
 *
 * @class
 * @extends ve.ce.LeafNode
 * @mixins ve.ce.FocusableNode
 * @constructor
 * @param {ve.dm.CXPlaceholderNode} model
 */
ve.ce.CXPlaceholderNode = function VeCeCXPlaceholderNode( model ) {
	// Parent constructor
	ve.ce.CXPlaceholderNode.super.apply( this, arguments );
	ve.ce.FocusableNode.call( this );
	this.$element.addClass( 've-ce-cxPlaceholderNode' );
	this.$element.append(
		$( '<p>' ).text( 'Placeholder ' + model.element.attributes.cxid )
	);
	this.active = false;
};

/* Inheritance */

OO.inheritClass( ve.ce.CXPlaceholderNode, ve.ce.LeafNode );
OO.mixinClass( ve.ce.CXPlaceholderNode, ve.ce.FocusableNode );

/* Static Properties */

ve.ce.CXPlaceholderNode.static.tagName = 'section';

ve.ce.CXPlaceholderNode.static.name = 'cxPlaceholder';

/* Methods */

ve.ce.CXPlaceholderNode.prototype.onFocusableMouseDown = function () {
	if ( this.active ) {
		return;
	}
	this.active = true;
	this.getDocument().emit( 'activatePlaceholder', this );
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXPlaceholderNode );
