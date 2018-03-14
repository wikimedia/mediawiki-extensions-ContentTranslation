/*!
* Content Translation UserInterface CategoryMultiselectWidget class.
*
* @copyright See AUTHORS.txt
* @license GPL-2.0-or-later
*/

'use strict';

/**
 * Creates a mw.cx.ui.CategoryMultiselectWidget object.
 *
 * @class
 * @extends OO.ui.MenuTagMultiselectWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.CategoryMultiselectWidget = function CategoryMultiselectWidget( config ) {
	config = config || {};
	config.inputWidget = new mw.cx.ui.CategoryInputWidget( $.extend( {
		placeholder: mw.msg( 'cx-tools-category-add' ),
		classes: [ 'oo-ui-tagMultiselectWidget-input' ]
	}, config.input ) );

	// Parent constructor
	mw.cx.ui.CategoryMultiselectWidget.super.call( this, config );

	this.$element.addClass( 'mw-cx-ui-CategoryMultiselectWidget' );
	this.setHeaderLabel( mw.msg( 'categories' ) );

	// Aggregate mouse hover events from mw.cx.ui.CategoryTagItemWidget
	this.aggregate( { mouseenter: 'mouseEnter' } );
	this.aggregate( { mouseleave: 'mouseLeave' } );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CategoryMultiselectWidget, OO.ui.MenuTagMultiselectWidget );

/* Methods */

mw.cx.ui.CategoryMultiselectWidget.prototype.setHeaderLabel = function ( label ) {
	this.$icon.text( label );
};

mw.cx.ui.CategoryMultiselectWidget.prototype.createTagItemWidget = function ( data, label, config ) {
	label = label || data;

	return new mw.cx.ui.CategoryTagItemWidget( $.extend( {
		data: data,
		label: label
	}, config ) );
};

mw.cx.ui.CategoryMultiselectWidget.prototype.setValue = function ( values ) {
	this.clearItems();

	values.forEach( function ( val ) {
		this.addTag( val.data, val.label, val.config );
	}.bind( this ) );
};

mw.cx.ui.CategoryMultiselectWidget.prototype.addTag = function ( data, label, config ) {
	var newItemWidget, isValid = this.isAllowedData( data );

	if ( isValid || this.allowDisplayInvalidTags ) {
		newItemWidget = this.createTagItemWidget( data, label, config );
		newItemWidget.toggleValid( isValid );
		this.addItems( [ newItemWidget ] );

		return true;
	}

	return false;
};
