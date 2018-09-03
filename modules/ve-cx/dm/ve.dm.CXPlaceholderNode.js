/**
 * Empty placeholder Section in the target document, corresponding to a source Section
 *
 * @class
 * @extends ve.dm.LeafNode
 * @mixins ve.dm.FocusableNode
 * @mixins ve.dm.CXTranslationUnitModel
 * @constructor
 */
ve.dm.CXPlaceholderNode = function VeDmCXPlaceholderNode() {
	// Parent constructor
	ve.dm.CXPlaceholderNode.super.apply( this, arguments );
	// Mixin constructors
	ve.dm.FocusableNode.call( this );
	ve.dm.CXTranslationUnitModel.call( this );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXPlaceholderNode, ve.dm.LeafNode );
OO.mixinClass( ve.dm.CXPlaceholderNode, ve.dm.FocusableNode );
OO.mixinClass( ve.dm.CXPlaceholderNode, ve.dm.CXTranslationUnitModel );

/* Static Properties */

ve.dm.CXPlaceholderNode.static.name = 'cxPlaceholder';

ve.dm.CXPlaceholderNode.static.matchTagNames = [ 'section' ];

ve.dm.CXPlaceholderNode.static.matchRdfaTypes = [ 'cx:Placeholder' ];

/* Static Methods */

ve.dm.CXPlaceholderNode.static.toDataElement = function ( domElements ) {
	return { type: this.name, attributes: { cxid: domElements[ 0 ].id } };
};

ve.dm.CXPlaceholderNode.static.toDomElements = function ( dataElement, doc ) {
	var sectionNode = doc.createElement( 'section' );
	sectionNode.setAttribute( 'rel', 'cx:Placeholder' );
	sectionNode.setAttribute( 'id', dataElement.attributes.cxid );
	return [ sectionNode ];
};

/* Methods */

ve.dm.CXPlaceholderNode.prototype.canHaveSlugBefore = function () {
	return false;
};

ve.dm.CXPlaceholderNode.prototype.canHaveSlugAfter = function () {
	return false;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXPlaceholderNode );
