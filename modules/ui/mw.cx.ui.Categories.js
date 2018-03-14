'use strict';

/**
 * CX Categories UI component.
 *
 * @class
 * @constructor
 *
 * @param {Object} adaptedCategories Categories adapted on server side.
 */
mw.cx.ui.Categories = function ( adaptedCategories ) {
	this.adaptedCategories = adaptedCategories;
	this.sourceCategories = Object.keys( adaptedCategories );
	this.targetCategories = this.extractTargetCategories( adaptedCategories );

	// @var {OO.ui.ButtonWidget}
	this.sourceCategoryCount = null;
	// @var {OO.ui.ButtonWidget}
	this.targetCategoryCount = null;
	// @var {mw.cx.ui.CategoryMultiselectWidget}
	this.sourceCategoryListing = null;
	// @var {mw.cx.ui.CategoryMultiselectWidget}
	this.targetCategoryListing = null;

	this.render();
	this.listen();
};

/**
 * @param {Object} adaptedCategories
 * @return {Array} Target categories
 */
mw.cx.ui.Categories.prototype.extractTargetCategories = function ( adaptedCategories ) {
	var source, target, categories = [];

	for ( source in adaptedCategories ) {
		target = adaptedCategories[ source ];
		if ( target ) {
			categories.push( target );
		}
	}

	return categories;
};

/**
 * For a given target (adapted) category, find corresponding source category.
 *
 * @param {string} targetCategory Target category name
 * @return {string|null} Corresponding source category name, or null
 */
mw.cx.ui.Categories.prototype.getCorrespondingSourceCategory = function ( targetCategory ) {
	var i, length, source;

	for ( i = 0, length = this.sourceCategories.length; i < length; i++ ) {
		source = this.sourceCategories[ i ];

		if ( this.adaptedCategories[ source ] === targetCategory ) {
			return source;
		}
	}

	return null;
};

/**
 * Example: "Category:Cakes" -> "Cakes"
 *
 * @param {string} fullCategoryName Category name with namespace prefix
 * @return {string} Category name, without namespace prefix
 */
mw.cx.ui.Categories.prototype.removeCategoryNamespace = function ( fullCategoryName ) {
	// mw.Title cannot be used because of T106644
	return fullCategoryName.match( /^.+?:(.*)$/ )[ 1 ];
};

/**
 * Create UI elements for category count buttons and category listings.
 */
mw.cx.ui.Categories.prototype.render = function () {
	this.sourceCategoryCount = this.createCategoryCount( this.sourceCategories.length );
	this.targetCategoryCount = this.createCategoryCount( this.targetCategories.length );

	this.sourceCategoryListing = this.createCategoryListing(
		this.sourceCategories,
		{
			allowReordering: false,
			inputPosition: 'none'
		}
	);
	this.targetCategoryListing = this.createCategoryListing(
		this.targetCategories,
		{
			allowArbitrary: true,
			inputPosition: 'outline'
		}
	);

	this.addMissingCategoriesToMenu();
};

/**
 * Create the category count button. To be displayed above source and translation contents.
 *
 * @param {Number} count
 * @return {OO.ui.ButtonWidget}
 */
mw.cx.ui.Categories.prototype.createCategoryCount = function ( count ) {
	return new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-categories-count-message', mw.language.convertNumber( count ) ),
		icon: 'tag',
		framed: false
	} );
};

/**
 * @return {jQuery}
 */
mw.cx.ui.Categories.prototype.getSourceCategoryCount = function () {
	return this.sourceCategoryCount.$element;
};

/**
 * @return {jQuery}
 */
mw.cx.ui.Categories.prototype.getTargetCategoryCount = function () {
	return this.targetCategoryCount.$element;
};

/**
 * @param {Array} categories
 * @return {Array} Array of objects with data (full category name) and label (category name) properties
 */
mw.cx.ui.Categories.prototype.mapCategories = function ( categories ) {
	return categories.map( function ( category ) {
		return {
			data: category,
			label: this.removeCategoryNamespace( category )
		};
	}.bind( this ) );
};

/**
 * Get the category listing
 *
 * @param {Array} categories
 * @param {Object} [config]
 * @return {mw.cx.ui.CategoryMultiselectWidget}
 */
mw.cx.ui.Categories.prototype.createCategoryListing = function ( categories, config ) {
	var categoryItems,
		isSource = categories === this.sourceCategories;

	categoryItems = this.mapCategories( categories );

	return new mw.cx.ui.CategoryMultiselectWidget( $.extend( {
		icon: 'tag',
		options: isSource ? categoryItems : [],
		selected: categoryItems.map( function ( item ) {
			return {
				label: item.label,
				data: item.data,
				config: {
					draggable: !isSource,
					hideRemoveButton: isSource,
					disabled: isSource && !this.adaptedCategories[ item.data ]
				}
			};
		}.bind( this ) ),
		classes: [ 'cx-category-listing' ]
	}, config ) );
};

/**
 * @return {jQuery}
 */
mw.cx.ui.Categories.prototype.getSourceCategoryListing = function () {
	return this.sourceCategoryListing.$element;
};

/**
 * @return {jQuery}
 */
mw.cx.ui.Categories.prototype.getTargetCategoryListing = function () {
	return this.targetCategoryListing.$element;
};

/**
 * Event handling
 */
mw.cx.ui.Categories.prototype.listen = function () {
	this.sourceCategoryCount.connect( this, {
		click: function () {
			this.sourceCategoryListing.scrollElementIntoView();
		}
	} );
	this.targetCategoryCount.connect( this, {
		click: function () {
			this.targetCategoryListing.scrollElementIntoView();
		}
	} );

	this.sourceCategoryListing.connect( this, {
		itemSelect: 'onSourceCategoryClick',
		mouseEnter: [ 'toggleCategoryHighlight', this.targetCategoryListing, true ],
		mouseLeave: [ 'toggleCategoryHighlight', this.targetCategoryListing, false ]
	} );

	this.targetCategoryListing.connect( this, {
		change: 'onTargetCategoriesChange',
		mouseEnter: [ 'toggleCategoryHighlight', this.sourceCategoryListing, true ],
		mouseLeave: [ 'toggleCategoryHighlight', this.sourceCategoryListing, false ],
		itemRemove: [ 'toggleCategoryHighlight', this.sourceCategoryListing, false ]
	} );
};

/**
 * @param {mw.cx.ui.CategoryTagItemWidget} sourceTagItem
 */
mw.cx.ui.Categories.prototype.onSourceCategoryClick = function ( sourceTagItem ) {
	var sourceCategoryName = sourceTagItem.getData(),
		targetCategoryName = this.adaptedCategories[ sourceCategoryName ];

	this.targetCategoryListing.addTag(
		targetCategoryName,
		this.removeCategoryNamespace( targetCategoryName )
	);
};

/**
 * @param {mw.cx.ui.CategoryMultiselectWidget} categoryListing
 * @param {boolean} toggle Toggle highlight on/off (true/false)
 * @param {mw.cx.ui.CategoryTagItemWidget} tagItem
 */
mw.cx.ui.Categories.prototype.toggleCategoryHighlight = function ( categoryListing, toggle, tagItem ) {
	var correspondingTagItem,
		categoryName = tagItem.getData(),
		correspondingCategoryName =
			this.adaptedCategories[ categoryName ] ||
			this.getCorrespondingSourceCategory( categoryName );

	correspondingTagItem = categoryListing.findItemFromData( correspondingCategoryName );

	if ( !correspondingTagItem ) {
		return;
	}

	if ( toggle ) {
		tagItem.setFlags( 'highlight' );
		correspondingTagItem.setFlags( 'highlight' );
	} else {
		tagItem.clearFlags();
		correspondingTagItem.clearFlags();
	}
};

/**
 * @param {Array} selectedTargetCategories
 */
mw.cx.ui.Categories.prototype.onTargetCategoriesChange = function ( selectedTargetCategories ) {
	// The new set of categories. Update the page.
	ve.batchSplice(
		this.targetCategories,
		0,
		this.targetCategories.length,
		selectedTargetCategories.map( function ( item ) { return item.data; } )
	);

	this.targetCategoryCount.setLabel(
		mw.msg(
			'cx-tools-categories-count-message',
			mw.language.convertNumber( this.targetCategories.length )
		)
	);

	this.addMissingCategoriesToMenu();
};

/**
 * Find difference between all adapted target categories and selected adapted target categories.
 * Used to populate "Add category" menu in target category listing when input query is empty.
 */
mw.cx.ui.Categories.prototype.addMissingCategoriesToMenu = function () {
	var allTargetCategories = this.extractTargetCategories( this.adaptedCategories ),
		notSelectedTargetCategories = OO.simpleArrayDifference( allTargetCategories, this.targetCategories );

	this.targetCategoryListing.menu.clearItems();
	this.targetCategoryListing.addOptions( this.mapCategories( notSelectedTargetCategories ) );
};
