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
	if ( config.inputPosition === 'outline' ) {
		config = config || {};
		config.inputWidget = new mw.cx.ui.CategoryInputWidget( this, config );
	}

	// Parent constructor
	mw.cx.ui.CategoryMultiselectWidget.super.call( this, config );

	// Mixin constructors
	OO.ui.mixin.LabelElement.call( this, config );

	// Initialize
	this.$element.addClass( 'mw-cx-ui-CategoryMultiselectWidget' );
	this.setHeaderLabel( mw.msg( 'categories' ) );
	this.$content.prepend( this.$label );

	// Aggregate mouse hover events from mw.cx.ui.CategoryTagItemWidget
	this.aggregate( { mouseenter: 'mouseEnter' } );
	this.aggregate( { mouseleave: 'mouseLeave' } );
	if ( this.hasInput ) {
		this.input.connect( this, { choose: 'onInputChoose' } );
	}
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CategoryMultiselectWidget, OO.ui.MenuTagMultiselectWidget );
OO.mixinClass( mw.cx.ui.CategoryMultiselectWidget, OO.ui.mixin.LabelElement );

/* Methods */

mw.cx.ui.CategoryMultiselectWidget.prototype.setHeaderLabel = function ( label ) {
	this.$icon.text( label );
};

/**
 * @inheritdoc
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.setDisabled = function ( isDisabled ) {
	// Parent method
	mw.cx.ui.CategoryMultiselectWidget.parent.prototype.setDisabled.call( this, isDisabled );

	// When widget is (re)enabled, restore tag item's original disabled state
	if ( !isDisabled && this.items ) {
		this.getItems().forEach( function ( item ) {
			item.restoreOriginalDisabledState();
		} );
	}
};

/**
 * Check whether all tag items in the widget are disabled. If there are no tag items, return false.
 *
 * @return {boolean}
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.allDisabled = function () {
	if ( this.getItemCount() === 0 ) {
		return false;
	}

	return this.getItems().every( function ( item ) {
		return item.isDisabled();
	} );
};

/**
 * Construct a mw.cx.ui.CategoryTagItemWidget from given data, label and config.
 *
 * @param {string} data Item data
 * @param {string} label The label text
 * @param {Object} [config] Configuration options
 * @cfg {boolean} [draggable]
 * @cfg {boolean} [hideRemoveButton]
 * @cfg {boolean} [disabled]
 * @return {mw.cx.ui.CategoryTagItemWidget}
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.createTagItemWidget = function ( data, label, config ) {
	label = label || data;

	return new mw.cx.ui.CategoryTagItemWidget( $.extend( {
		data: data,
		label: label
	}, config ) );
};

/**
 * Set selected items.
 *
 * @param {Object[]} values Array of objects representing the data, label and config of the value.
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.setValue = function ( values ) {
	this.clearItems();

	values.forEach( function ( val ) {
		this.addTag( val.data, val.label, val.config );
	}, this );
};

/**
 * Add tag to the display area.
 *
 * @param {string|Object} data Tag data
 * @param {string} [label] Tag label. If no label is provided, the
 *  stringified version of the data will be used instead.
 * @param {Object} [config] Configuration options
 * @return {boolean} Item was added successfully
 */
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

/**
 * Method required by mw.cx.ui.CategoryInputWidget that returns existing categories,
 * which are added to "Move this category here" section in search menu, which is a
 * functionality we opt out from.
 *
 * @return {Array} Array of existing categories
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.getCategories = function () {
	return [];
};

/**
 * @param {mw.cx.ui.CategoryInputWidget} item
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.onInputChoose = function ( item ) {
	var title = item.getLabel(),
		titleWithPrefix = item.getData();

	if ( !title ) {
		return;
	}

	// By utilizing allowedValues, we prevent user from adding
	// arbitrary category, which isn't coming from lookup menu.
	// That prevents situations when you press one character,
	// followed quickly by Enter key, before first pending lookup
	// request is resolved.
	this.allowedValues.push( titleWithPrefix );
	this.addTag( titleWithPrefix, title );
};

/**
 * Menu with missing adapted categories is displayed only when there is no user input.
 *
 * @param {string} inputValue
 */
mw.cx.ui.CategoryMultiselectWidget.prototype.onInputChange = function ( inputValue ) {
	if ( !inputValue ) {
		this.menu.toggle( true );
		this.initializeMenuSelection();
	} else {
		this.menu.toggle( false );
	}
};
