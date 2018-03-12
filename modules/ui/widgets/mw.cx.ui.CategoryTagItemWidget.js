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

	this.$element.addClass( 'mw-cx-ui-CategoryTagItemWidget' );
	if ( !this.isDisabled() && config.hideRemoveButton ) {
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
 * @fires 'mouseenter'
 */
mw.cx.ui.CategoryTagItemWidget.prototype.onMouseEnter = function () {
	if ( !this.isDisabled() ) {
		this.emit( 'mouseenter' );
	}
};

/**
 * @fires 'mouseleave'
 */
mw.cx.ui.CategoryTagItemWidget.prototype.onMouseLeave = function () {
	if ( !this.isDisabled() ) {
		this.emit( 'mouseleave' );
	}
};
