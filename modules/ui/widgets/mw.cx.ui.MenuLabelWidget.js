/*!
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';

( function ( $, mw ) {

	/**
	 * Creates an mw.cx.ui.MenuLabelWidget object.
	 *
	 * @class
	 * @extends mw.widgets.LabelWidget
	 *
	 * @constructor
	 * @param {Object} [config] Configuration options
	 */
	mw.cx.ui.MenuLabelWidget = function MwCxMenuLabelWidget( config ) {
		// Parent constructor
		mw.cx.ui.MenuLabelWidget.parent.call( this, config );

		this.$element
			.addClass( 'mw-cx-MenuLabelWidget' )
			.attr( 'role', 'label' );
	};

	/* Inheritance */
	OO.inheritClass( mw.cx.ui.MenuLabelWidget, OO.ui.OptionWidget );

	/* Static Properties */
	mw.cx.ui.MenuLabelWidget.static.selectable = false;

	mw.cx.ui.MenuLabelWidget.static.pressable = false;

	mw.cx.ui.MenuLabelWidget.static.highlightable = false;
}( jQuery, mediaWiki ) );
