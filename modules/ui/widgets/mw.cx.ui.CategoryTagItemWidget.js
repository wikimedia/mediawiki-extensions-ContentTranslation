/*!
* Content Translation UserInterface CategoryTagItemWidget class.
*
* @copyright See AUTHORS.txt
* @license GPL-2.0-or-later
*/

'use strict';

/**
 * Creates a mw.cx.ui.CategoryTagItemWidget object.
 *
 * @class
 * @extends OO.ui.TagItemWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.CategoryTagItemWidget = function CategoryTagItemWidget( config ) {
	// Parent constructor
	mw.cx.ui.CategoryTagItemWidget.super.call( this, config );

	this.originalDisabledState = config.disabled === true;

	this.$element.addClass( 'mw-cx-ui-CategoryTagItemWidget' );
	if ( config.hideRemoveButton ) {
		this.closeButton.$element.remove();
		this.$element.addClass( 'mw-cx-ui-CategoryTagItemWidget--no-remove' );
	}

	// Events
	this.$element.on( 'mouseenter', this.onMouseEnter.bind( this ) );
	this.$element.on( 'mouseleave', this.onMouseLeave.bind( this ) );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CategoryTagItemWidget, OO.ui.TagItemWidget );

/* Methods */

/**
 * Disabling individual tag items is no longer supported in OOUI since T193571.
 * This setDisabled() method is mirror of OOUI v0.26.5, before disabling of
 * individual tag items was thrown out.
 *
 * @inheritdoc
 */
mw.cx.ui.CategoryTagItemWidget.prototype.setDisabled = function ( state ) {
	// Grandparent method
	OO.ui.Widget.prototype.setDisabled.call( this, state );

	if ( this.closeButton ) {
		this.closeButton.setDisabled( state );
	}

	return this;
};

mw.cx.ui.CategoryTagItemWidget.prototype.restoreOriginalDisabledState = function () {
	this.setDisabled( this.originalDisabledState );
};

/**
 * @fires mouseenter
 */
mw.cx.ui.CategoryTagItemWidget.prototype.onMouseEnter = function () {
	if ( !this.isDisabled() ) {
		this.emit( 'mouseenter' );
	}
};

/**
 * @fires mouseleave
 */
mw.cx.ui.CategoryTagItemWidget.prototype.onMouseLeave = function () {
	if ( !this.isDisabled() ) {
		this.emit( 'mouseleave' );
	}
};
