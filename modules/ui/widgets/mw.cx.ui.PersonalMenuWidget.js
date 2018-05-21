/*!
* Content Translation UserInterface PersonalMenuWidget class.
*
* @copyright See AUTHORS.txt
* @license GPL-2.0-or-later
*/

'use strict';

/**
 * Creates an mw.cx.ui.PersonalMenuWidget object.
 *
 * @class
 * @extends OO.ui.DropdownWidget
 * @mixins OO.ui.mixin.FlaggedElement
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.PersonalMenuWidget = function PersonalMenuWidget( config ) {
	// Parent constructor
	mw.cx.ui.PersonalMenuWidget.super.call( this, config );
	// Mixin constructor
	OO.ui.mixin.FlaggedElement.call( this, config );

	// Initialization
	this.$element.addClass( 'mw-cx-ui-PersonalMenuWidget' );
	if ( mw.user.isAnon() ) {
		this.$element.addClass( 'mw-cx-ui-PersonalMenuWidget--anon' );
	}
};

/* Inheritance */
OO.inheritClass( mw.cx.ui.PersonalMenuWidget, OO.ui.DropdownWidget );
OO.mixinClass( mw.cx.ui.PersonalMenuWidget, OO.ui.mixin.FlaggedElement );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.PersonalMenuWidget.prototype.onMenuSelect = function ( item ) {
	// Navigate browser to a new page
	location.href = item.getData();
	// Don't call parent to avoid changing handle
};

/**
 * @inheritdoc
 */
mw.cx.ui.PersonalMenuWidget.prototype.onMenuToggle = function () {
	this.menu.$element.css( 'min-width', this.$element.outerWidth() );
	// Parent method
	mw.cx.ui.PersonalMenuWidget.super.prototype.onMenuToggle.apply( this, arguments );
};
