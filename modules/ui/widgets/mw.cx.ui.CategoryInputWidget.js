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
 * @extends ve.ui.MWCategoryInputWidget
 *
 * @constructor
 * @param {mw.cx.ui.CategoryMultiselectWidget} categoryWidget
 * @param {Object} [config] Configuration options
 * @cfg {mw.cx.MwApiRequestManager} [requestManager]
 * @cfg {mw.cx.SiteMapper} [siteMapper]
 */
mw.cx.ui.CategoryInputWidget = function CategoryInputWidget( categoryWidget, config ) {
	var siteMapper = config.siteMapper || mw.cx.siteMapper,
		targetLanguage = mw.cx.targetLanguage,
		requestManager = config.requestManager || new mw.cx.MwApiRequestManager(
			mw.cx.sourceLanguage, targetLanguage, siteMapper
		);

	// Parent constructor
	mw.cx.ui.CategoryInputWidget.super.call( this, categoryWidget, $.extend( {
		api: siteMapper.getApi( targetLanguage, { parameters: { formatversion: 2 } } )
	}, config.input ) );

	requestManager.getNamespaceAlias( targetLanguage, 'Category' ).done( function ( prefix ) {
		// This is likely to be resolved before first usage of variable,
		// but we may want some error handling
		this.namespacePrefix = prefix + ':';
	}.bind( this ) );

	// Initialization
	this.$element.addClass( 'mw-cx-ui-CategoryInputWidget' );
	this.$element.removeClass( 've-ui-mwCategoryInputWidget' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.CategoryInputWidget, ve.ui.MWCategoryInputWidget );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.CategoryInputWidget.prototype.getLookupCacheDataFromResponse = function () {
	var result = mw.cx.ui.CategoryInputWidget.super.prototype.getLookupCacheDataFromResponse.apply( this, arguments );

	return result.map( function ( category ) {
		var hasNamespacePrefix = category.indexOf( this.namespacePrefix ) === 0;

		return hasNamespacePrefix ? category.substring( this.namespacePrefix.length ) : category;
	}, this );
};

/**
 * @inheritdoc
 */
mw.cx.ui.CategoryInputWidget.prototype.onLookupMenuChoose = function () {
	mw.cx.ui.CategoryInputWidget.super.prototype.onLookupMenuChoose.apply( this, arguments );
};
