'use strict';

/**
 * CX Categories UI
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.Categories = function ( config ) {
	this.categoryCount = null;
	this.categoryListing = null;
	this.page = config.page;
	this.editable = config.editable;
};

/**
 * Get the category count labels. To be displayed above source and translation contents.
 * @return {OO.ui.ButtonWidget}
 */
mw.cx.ui.Categories.prototype.getCategoryCount = function () {
	var count;

	count = this.page ? this.page.categories.length : 0;
	this.categoryCount = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-categories-count-message', count ),
		icon: 'tag',
		framed: false
	} );
	return this.categoryCount;
};

/**
 * Get the category listing To be displayed below source and translation contents.
 * @return {OO.ui.HorizontalLayout}
 */
mw.cx.ui.Categories.prototype.getCategoryListing = function () {
	var i, categories, label, categoryItems = [];

	if ( this.editable ) {
		return this.getEditableCategoryListing();
	}
	categories = this.page ? this.page.categories : [];
	for ( i = 0; i < categories.length; i++ ) {
		// mw.Title cannot be used because of
		// https://phabricator.wikimedia.org/T106644
		label = categories[ i ].match( /^.+?:(.*)$/ )[ 1 ];
		categoryItems.push( new OO.ui.ButtonWidget( {
			label: label,
			icon: 'tag',
			framed: true
		} ) );
	}
	if ( !categoryItems.length ) {
		categoryItems.push( new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-categories-count-message', 0 ),
			icon: 'tag',
			framed: true
		} ) );
	}
	this.categoryListing = new OO.ui.HorizontalLayout( {
		items: categoryItems,
		classes: [ 'cx-category-listing' ]
	} );
	return this.categoryListing;
};

/**
 * Get the editable category listing for translation column
 * @return {OO.ui.CapsuleMultiselectWidget}
 */
mw.cx.ui.Categories.prototype.getEditableCategoryListing = function () {
	var i, categories, label, categoryItems = [];

	categories = this.page ? this.page.categories : [];
	for ( i = 0; i < categories.length; i++ ) {
		label = categories[ i ].match( /^.+?:(.*)$/ )[ 1 ];
		categoryItems.push( new OO.ui.MenuOptionWidget( {
			data: categories[ i ],
			label: label
		} ) );
	}
	this.categoryListing = new OO.ui.MenuTagMultiselectWidget( {
		// Should we allow Arbitrary categories?
		allowArbitrary: true,
		inputPosition: 'outline',
		icon: 'tag',
		options: categoryItems,
		selected: categoryItems.map( function ( item ) { return item.label; } ),
		classes: [ 'cx-category-listing' ],
		input: {
			placeholder: mw.msg( 'cx-tools-category-add' )
		}
	} );

	return this.categoryListing;
};

/**
 * Event handling
 */
mw.cx.ui.Categories.prototype.listen = function () {
	this.categoryCount.on( 'click', function () {
		// Scroll to categoryListing
		this.categoryListing.scrollElementIntoView();
	}.bind( this ) );

	if ( this.editable ) {
		this.categoryListing.on( 'change', function ( items ) {
			// The new set of categories. Update the page.
			this.page.categories = items.map( function ( item ) { return item.data; } );
			// TODO: Remove the selected items from the options menu
		}.bind( this ) );
	}
};
