'use strict';

/**
 * Article column container
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @abstract
 *
 * @param {Object} [config] Configuration
 * @param {string} config.title The title of the article for the column
 * @param {string} config.language The language of the article for the column
 * @param {mw.cx.SiteMapper} config.siteMapper SiteMapper instance
 * @param {string} [config.sectionTitle] The section title of the article for the column
 */
mw.cx.ui.ArticleColumn = function ( config ) {
	// Configuration initialization
	config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column' ],
		expanded: false,
		scrollable: false
	} );
	// Parent constructor
	mw.cx.ui.ArticleColumn.super.call( this, config );

	this.translation = null;
	this.siteMapper = config.siteMapper;
	this.language = config.language;
	// if this is a section translation
	if ( config.sectionTitle ) {
		this.addItems( [
			new OO.ui.LabelWidget( {
				label: config.title,
				dir: this.direction,
				classes: [ 'cx-column-page-title' ]
			} )
		] );
		this.titleWidget = new mw.cx.ui.SectionTitleWidget(
			new mw.cx.dm.SectionTitleModel(),
			{ value: config.sectionTitle }
		);
	} else {
		this.titleWidget = new mw.cx.ui.PageTitleWidget(
			new mw.cx.dm.PageTitleModel(),
			{ value: config.title }
		);
	}
	this.direction = $.uls.data.getDir( config.language );

	const languageLabel = new OO.ui.LabelWidget( {
		label: $.uls.data.getAutonym( config.language ),
		dir: this.direction,
		classes: [ 'cx-column-language-label' ]
	} );

	this.subHeading = new OO.ui.HorizontalLayout( {
		classes: [ 'cx-column-sub-heading' ],
		items: [ languageLabel ]
	} );

	this.$element.prop( {
		lang: this.language,
		dir: this.direction
	} );

	this.addItems( [ this.titleWidget, this.subHeading ] );

	this.$content = $( '<div>' ).addClass( 'cx-column__content' );
	this.$element.append( this.$content );
};

/* Setup */

OO.inheritClass( mw.cx.ui.ArticleColumn, OO.ui.StackLayout );

/**
 * Attach the source surface's element to the DOM
 *
 * @param {ve.ui.CXSourceSurface} surface The source surface
 */
mw.cx.ui.ArticleColumn.prototype.attachSurface = function ( surface ) {
	this.$content.empty().append( surface.$element );
};

/**
 * Set the category count UI element
 *
 * @param {jQuery} $categoryCount
 */
mw.cx.ui.ArticleColumn.prototype.setCategoryCount = function ( $categoryCount ) {
	this.$content.before( $categoryCount );
};

/**
 * Set the category list UI element
 *
 * @param {jQuery} $categoryListing
 */
mw.cx.ui.ArticleColumn.prototype.setCategoryListing = function ( $categoryListing ) {
	this.$content.after( $categoryListing );
};

/**
 * Set the translation data model
 *
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.ArticleColumn.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
};

/**
 * Set the main title for the column.
 *
 * @param {string} title
 */
mw.cx.ui.ArticleColumn.prototype.setTitle = function ( title ) {
	this.titleWidget.setValue( title );
	this.titleWidget.validateTitle( title );
};

/**
 * Get the current main title for the column.
 *
 * @return {string}
 */
mw.cx.ui.ArticleColumn.prototype.getTitle = function () {
	return this.titleWidget.getValue();
};

/**
 * @return {mw.cx.ui.PageTitleWidget}
 */
mw.cx.ui.ArticleColumn.prototype.getTitleWidget = function () {
	return this.titleWidget;
};

mw.cx.ui.ArticleColumn.prototype.isSectionTranslation = function () {
	return this.titleWidget instanceof mw.cx.ui.SectionTitleWidget;
};
