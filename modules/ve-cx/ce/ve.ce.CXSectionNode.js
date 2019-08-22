/**
 * Node representing an adapted section
 *
 * @class
 * @constructor
 * @extends ve.ce.SectionNode
 * @mixins ve.ce.CXPendingNode
 * @mixins ve.ce.CXLintableNode
 *
 * @param {ve.dm.CXSectionNode} model
 */
ve.ce.CXSectionNode = function VeCeCXSectionNode() {
	// Parent constructor
	ve.ce.CXSectionNode.super.apply( this, arguments );
	// Mixin constructors
	ve.ce.CXPendingNode.call( this );
	ve.ce.CXLintableNode.call( this );

	this.$element
		.attr( {
			id: this.model.getAttribute( 'cxid' ),
			rel: 'cx:Section'
		} )
		.addClass( 've-ce-cxSectionNode' );

	this.getFocusableElement().on( {
		focus: this.emit.bind( this, 'focus' ),
		blur: this.emit.bind( this, 'blur' )
	} );

	this.model.connect( this, {
		beforeTranslation: 'onBeforeTranslation',
		afterTranslation: 'onAfterTranslation'
	} );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXSectionNode, ve.ce.SectionNode );
OO.mixinClass( ve.ce.CXSectionNode, ve.ce.CXPendingNode );
OO.mixinClass( ve.ce.CXSectionNode, ve.ce.CXLintableNode );

/* Static Properties */

ve.ce.CXSectionNode.static.tagName = 'section';

ve.ce.CXSectionNode.static.name = 'cxSection';

/* Methods */

ve.ce.CXSectionNode.prototype.onBeforeTranslation = function () {
	this.setPending( true );
};

ve.ce.CXSectionNode.prototype.onAfterTranslation = function () {
	this.setPending( false );
};

/**
 * @inheritdoc
 */
ve.ce.CXSectionNode.prototype.getFocusableElement = function () {
	var firstChild = OO.getProp( this, 'children', 0 );

	// Returning this.$element causes problems for block transclusion nodes. See T226247
	if ( firstChild instanceof ve.ce.CXTransclusionBlockNode ) {
		return firstChild.$focusable;
	}

	// Parent (mixin) method
	return ve.ce.CXLintableNode.prototype.getFocusableElement.call( this );
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXSectionNode );
