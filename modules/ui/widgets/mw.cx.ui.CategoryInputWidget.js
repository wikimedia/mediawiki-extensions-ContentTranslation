/*!
* Content Translation UserInterface CategoryInputWidget class.
*
* @copyright See AUTHORS.txt
* @license GPL-2.0-or-later
*/

'use strict';

/**
 * Creates a mw.cx.ui.CategoryInputWidget object.
 *
 * @class
 * @extends OO.ui.TextInputWidget
 * @mixins OO.ui.mixin.LookupElement
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.CategoryInputWidget = function CategoryInputWidget( config ) {
	// Parent constructor
	mw.cx.ui.CategoryInputWidget.super.call( this, config );

	// Mixin constructors
	// OO.ui.mixin.LookupElement.call( this, config );

	this.$element.addClass( 'mw-cx-ui-CategoryInputWidget' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CategoryInputWidget, OO.ui.TextInputWidget );
// OO.mixinClass( mw.cx.ui.CategoryInputWidget, OO.ui.mixin.LookupElement );

/* Methods */
