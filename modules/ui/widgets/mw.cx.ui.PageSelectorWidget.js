/*!
* Content Translation UserInterface PageSelectorWidget class.
*
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
 * @cfg {mw.cx.SiteMapper} [siteMapper] Site mapper
 * @cfg {string} [language] Source language
 */
mw.cx.ui.PageSelectorWidget = function PageSelectorWidget( config ) {
	config = $.extend( {}, {
		namespace: mw.config.get( 'wgNamespaceIds' )[ '' ], // Main namespace
		limit: 5,
		allowSuggestionsWhenEmpty: true,
		showDescriptions: true,
		showImages: true,
		showMissing: false,
		icon: 'search'
	}, config );

	// Parent constructor
	mw.cx.ui.PageSelectorWidget.super.call( this, config );

	this.siteMapper = config.siteMapper;
	this.language = config.language || 'en';
	if ( config.targetLanguage ) {
		this.setTargetLanguage( config.targetLanguage );
	}
	this.listen();

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

mw.cx.ui.PageSelectorWidget.prototype.setTargetLanguage = function ( language ) {
	this.targetLanguage = language;
};

/**
 * Sets value for PageSelectorWidget and input element value,
 * without emitting 'change' event, therefore not triggering network call
 *
 * @param {string} value String input for PageSelectorWidget
 */
mw.cx.ui.PageSelectorWidget.prototype.setValueNoEmit = function ( value ) {
	value = this.cleanUpValue( value );

	if ( this.$input.val() !== value ) {
		this.$input.val( value );
	}

	if ( this.value !== value ) {
		this.value = value;
	}
};

mw.cx.ui.PageSelectorWidget.prototype.listen = function () {
	var proxied;

	// Unbind event handlers so search results don't disappear when focus is lost
	this.$input.off( 'blur' );
	this.lookupMenu.onDocumentMouseDownHandler = function () {};
	// Disable width and height calculation for search results container
	this.lookupMenu.setIdealSize = function () {};

	proxied = this.lookupMenu.onKeyDownHandler;
	this.lookupMenu.onKeyDownHandler = function ( e ) {
		if ( e.keyCode === OO.ui.Keys.TAB ) {
			return;
		}
		if ( e.keyCode === OO.ui.Keys.ESCAPE ) {
			self.discardDialog();
			return;
		}
		return proxied.apply( this, arguments );
	};
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionWidgetData = function ( title, data ) {
	// Parent method
	var optionWidgetData = mw.cx.ui.PageSelectorWidget.super.prototype.getOptionWidgetData.apply( this, arguments );

	// Correct the URL so that it can point to the source language wiki.
	optionWidgetData.url = this.siteMapper.getPageUrl( this.language, title );
	// If item is not missing, one language is added to get actual total number of languages
	optionWidgetData.numOfLanguages = !data.missing && ( OO.getProp( data.originalData, 'langlinkscount' ) || 0 ) + 1;
	optionWidgetData.missingInTargetLanguage = !OO.getProp( data.originalData, 'langlinks' );
	optionWidgetData.targetLanguage = this.targetLanguage;

	return optionWidgetData;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getApiParams = function () {
	// Parent method
	var params = mw.cx.ui.PageSelectorWidget.super.prototype.getApiParams.apply( this, arguments );

	params.prop.push( 'langlinks', 'langlinkscount' );
	params.lllang = this.targetLanguage;
	return params;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.createOptionWidget = function ( data ) {
	return new mw.cx.ui.TitleOptionWidget( data );
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionsFromData = function ( data ) {
	// Parent method
	var optionsData = mw.cx.ui.PageSelectorWidget.super.prototype.getOptionsFromData.call( this, data );

	this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--no-results', !optionsData.length );
	this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--input', !!this.getQueryValue() );

	return optionsData;
};
