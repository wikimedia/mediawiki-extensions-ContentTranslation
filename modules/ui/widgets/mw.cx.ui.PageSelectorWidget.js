/*!
* Content Translation UserInterface PageSelectorWidget class.
*
* @ingroup Extensions
* @copyright See AUTHORS.txt
* @license GPL-2.0+
*/

'use strict';

/**
 * Creates an mw.cx.ui.PageSelectorWidget object.
 *
 * @class
 * @extends mw.cx.ui.PageSelectorWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {number} [namespace] Namespace to prepend to queries. Defaults to main namespace.
 */
mw.cx.ui.PageSelectorWidget = function PageSelectorWidget( config ) {
	config = $.extend( {}, {
		namespace: mw.config.get( 'wgNamespaceIds' ).main,
		showDescriptions: true,
		showImages: true,
		icon: 'search'
	}, config );

	this.siteMapper = config.siteMapper;
	this.language = config.language || 'en';
	// Parent constructor
	mw.cx.ui.PageSelectorWidget.super.call( this, config );
	// Initialization
	this.$element.addClass( 'mw-cx-ui-PageSelectorWidget' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.PageSelectorWidget, mw.widgets.TitleInputWidget );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getApi = function () {
	return this.siteMapper.getApi( this.language );
};

mw.cx.ui.PageSelectorWidget.prototype.setLanguage = function ( language ) {
	this.language = language;
	this.setDir( $.uls.data.getDir( language ) );

	// Reset the requestCache of OO.ui.mixin.LookupElement
	this.requestCache = {};
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionWidgetData = function ( title, data ) {
	var optionWidgetData;

	// Mixin method
	optionWidgetData = mw.widgets.TitleWidget.prototype.getOptionWidgetData.call( this, title, data );
	// Correct the URL so that it can point to the source language wiki.
	optionWidgetData.url = this.siteMapper.getPageUrl( this.language, title );

	return optionWidgetData;
};
