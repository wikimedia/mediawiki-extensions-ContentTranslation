'use strict';

/**
 * CX Categories UI
 * @class
 * @param {Object[]} liveCategories Live (mutable) category array
 * @param {Object} [config] Configuration object
 * @cfg {boolean} [editable] Whether the category is editable
 */
mw.cx.ui.Categories = function ( liveCategories, config ) {
	this.categoryCount = null;
	this.categoryListing = null;
	this.liveCategories = liveCategories;
	this.editable = config && config.editable;
};

/**
 * Get the category count labels. To be displayed above source and translation contents.
 * @return {OO.ui.ButtonWidget}
 */
mw.cx.ui.Categories.prototype.getCategoryCount = function () {
	this.categoryCount = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-categories-count-message', this.liveCategories.length ),
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
	var i, label, categoryItems = [];

	if ( this.editable ) {
		return this.getEditableCategoryListing();
	}
	for ( i = 0; i < this.liveCategories.length; i++ ) {
		// mw.Title cannot be used because of
		// https://phabricator.wikimedia.org/T106644
		label = this.liveCategories[ i ].match( /^.+?:(.*)$/ )[ 1 ];
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
 *
 * @return {OO.ui.MenuTagMultiselectWidget}
 */
mw.cx.ui.Categories.prototype.getEditableCategoryListing = function () {
	var i, label, categoryItems = [];

	for ( i = 0; i < this.liveCategories.length; i++ ) {
		label = this.liveCategories[ i ].match( /^.+?:(.*)$/ )[ 1 ];
		categoryItems.push( new OO.ui.MenuOptionWidget( {
			data: this.liveCategories[ i ],
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
			ve.batchSplice(
				this.liveCategories,
				0,
				this.liveCategories.length,
				items.map( function ( item ) { return item.data; } )
			);
			// TODO: Remove the selected items from the options menu
		}.bind( this ) );
	}
};
