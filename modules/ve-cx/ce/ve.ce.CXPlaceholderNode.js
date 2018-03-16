/**
 * Empty placeholder Section in the target document, corresponding to a source Section
 *
 * @class
 * @extends ve.ce.LeafNode
 * @mixins ve.ce.FocusableNode
 * @constructor
 */
ve.ce.CXPlaceholderNode = function VeCeCXPlaceholderNode() {
	var button;

	// Parent constructor
	ve.ce.CXPlaceholderNode.super.apply( this, arguments );
	ve.ce.FocusableNode.call( this );

	button = new ve.ui.NoFocusButtonWidget( {
		label: ve.msg( 'cx-translation-add-translation' ),
		icon: 'add',
		framed: false
	} );
	button.on( 'click', this.onFocusableMouseDown.bind( this ) );

	this.$element
		.addClass( 've-ce-cxPlaceholderNode' )
		.attr( 'id', this.model.getAttribute( 'cxid' ) )
		.append( button.$element );
	this.active = false;
};

/* Inheritance */

OO.inheritClass( ve.ce.CXPlaceholderNode, ve.ce.LeafNode );
OO.mixinClass( ve.ce.CXPlaceholderNode, ve.ce.FocusableNode );

/* Static Properties */

ve.ce.CXPlaceholderNode.static.tagName = 'section';

ve.ce.CXPlaceholderNode.static.name = 'cxPlaceholder';

/* Methods */

ve.ce.CXPlaceholderNode.prototype.onFocusableMouseDown = function ( e ) {
	if ( this.focusableSurface.disabled ) {
		return;
	}
	if ( this.active || ( e && e.which !== OO.ui.MouseButtons.LEFT ) ) {
		return;
	}
	this.executeCommand();
};

ve.ce.CXPlaceholderNode.prototype.executeCommand = function () {
	this.active = true;
	this.showProgressIndicator();
	this.getDocument().emit( 'activatePlaceholder', this );
};

ve.ce.CXPlaceholderNode.prototype.showProgressIndicator = function () {
	this.$element.empty().append( mw.cx.widgets.spinner() );
};

ve.ce.CXPlaceholderNode.prototype.createHighlights = function () {
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXPlaceholderNode );
