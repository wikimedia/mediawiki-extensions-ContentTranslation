'use strict';

/**
 * Empty placeholder Section in the target document, corresponding to a source Section
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ce.LeafNode
 * @mixins ve.ce.FocusableNode
 * @mixins ve.ce.CXPendingNode
 * @constructor
 */
ve.ce.CXPlaceholderNode = function VeCeCXPlaceholderNode() {
	// Parent constructor
	ve.ce.CXPlaceholderNode.super.apply( this, arguments );
	// Mixin constructors
	ve.ce.FocusableNode.call( this );
	ve.ce.CXPendingNode.call( this );

	this.button = new ve.ui.NoFocusButtonWidget( {
		label: ve.msg( 'cx-translation-add-translation' ),
		icon: 'add',
		framed: false
	} );
	this.button.connect( this, { click: 'onFocusableMouseDown' } );

	this.model.connect( this, {
		beforeTranslation: 'onBeforeTranslation',
		afterTranslation: 'onAfterTranslation'
	} );

	this.$element
		.addClass( 've-ce-cxPlaceholderNode' )
		.attr( 'id', this.model.getAttribute( 'cxid' ) )
		.append( this.button.$element );
	this.active = false;
};

/* Inheritance */

OO.inheritClass( ve.ce.CXPlaceholderNode, ve.ce.LeafNode );
OO.mixinClass( ve.ce.CXPlaceholderNode, ve.ce.FocusableNode );
OO.mixinClass( ve.ce.CXPlaceholderNode, ve.ce.CXPendingNode );

/* Static Properties */

ve.ce.CXPlaceholderNode.static.tagName = 'section';

ve.ce.CXPlaceholderNode.static.name = 'cxPlaceholder';

/* Methods */

ve.ce.CXPlaceholderNode.prototype.onFocusableMouseDown = function ( e ) {
	if ( this.focusableSurface.isReadOnly() ) {
		return;
	}
	if ( this.active || ( e && e.which !== OO.ui.MouseButtons.LEFT ) ) {
		return;
	}
	this.executeCommand();
};

ve.ce.CXPlaceholderNode.prototype.executeCommand = function () {
	this.active = true;
	this.getDocument().emit( 'activatePlaceholder', this );
};

ve.ce.CXPlaceholderNode.prototype.createHighlights = function () {
};

ve.ce.CXPlaceholderNode.prototype.onBeforeTranslation = function () {
	this.button.toggle( false );
	this.setPending( true );
};

ve.ce.CXPlaceholderNode.prototype.onAfterTranslation = function () {
	this.setPending( false );
	this.button.toggle( true );
	this.active = false;
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXPlaceholderNode );
