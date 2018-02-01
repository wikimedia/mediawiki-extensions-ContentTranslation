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
	this.isIdealMenuSizeSet = false;
	this.idealSize = 'auto';

	// Parent constructor
	mw.cx.ui.PersonalMenuWidget.super.call( this, config );
	// Mixin constructor
	OO.ui.mixin.FlaggedElement.call( this, config );

	// Listen for events
	this.listen();

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
};

/**
 * Attach event listeners
 */
mw.cx.ui.PersonalMenuWidget.prototype.listen = function () {
	this.menu.connect( this, { toggle: 'onMenuVisible' } );
	// Resize handler
	$( window ).on( 'resize', OO.ui.throttle( this.resize.bind( this ), 250 ) );
};

/**
 * Callback for menu toggle event. Sets ideal size for menu.
 */
mw.cx.ui.PersonalMenuWidget.prototype.onMenuVisible = function () {
	// Ideal menu size is calculated only on first menu opening.
	if ( !this.isIdealMenuSizeSet ) {
		this.setIdealMenuSize();
		this.isIdealMenuSizeSet = true;
	}

	this.menu.setIdealSize( this.idealSize );
};

/**
 * If screen size gets changed, we need to recalculate ideal menu size.
 */
mw.cx.ui.PersonalMenuWidget.prototype.resize = function () {
	this.getMenu().toggle( false );
	this.blur();

	this.isIdealMenuSizeSet = false;
	this.idealSize = 'auto';
};

/**
 * Calculates ideal size for personal menu. Called only once to initialize menu size,
 * and after screen size changes.
 */
mw.cx.ui.PersonalMenuWidget.prototype.setIdealMenuSize = function () {
	var handleWidth = this.$element.width(),
		menuWidth = this.menu.$element.width();

	if ( handleWidth > menuWidth ) {
		this.idealSize = '100%';
	}
};
