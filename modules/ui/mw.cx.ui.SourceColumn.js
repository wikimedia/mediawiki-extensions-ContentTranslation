'use strict';

/**
 * Source article container
 *
 * @class
  * @param {Object} [config] Configuration object
 */
mw.cx.ui.SourceColumn = function ( config ) {
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column--source' ],
		expanded: false,
		scrollable: false
	} );
	// Parent constructor
	mw.cx.ui.SourceColumn.parent.call( this, this.config );
	this.siteMapper = config.siteMapper;
	this.translation = null;
	this.loading = true;
	this.$loadingIndicator = null;
	this.titleWidget = null;
	this.init();
};

/* Setup */

OO.inheritClass( mw.cx.ui.SourceColumn, OO.ui.StackLayout );

mw.cx.ui.SourceColumn.prototype.init = function () {
	this.render();
	// Try to load Cite styles. Silently ignored if not installed.
	mw.loader.load( 'ext.cite.style' );
};

mw.cx.ui.SourceColumn.prototype.render = function () {
	var sourceLanguageDir, languageLabel, articleLink,
		subHeading;

	sourceLanguageDir = $.uls.data.getDir( this.config.sourceLanguage );
	this.$element.prop( {
		lang: this.config.sourceLanguage,
		dir: sourceLanguageDir
	} );

	this.titleWidget = new mw.cx.widgets.PageTitleWidget( {
		value: this.config.sourceTitle,
		editable: false
	} );

	languageLabel = new OO.ui.LabelWidget( {
		label: $.uls.data.getAutonym( this.config.sourceLanguage ),
		dir: sourceLanguageDir,
		classes: [ 'cx-column-language-label' ]
	} );

	articleLink = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-source-view-page' ),
		href: this.siteMapper.getPageUrl( this.config.sourceLanguage, this.config.sourceTitle ),
		target: '_blank',
		classes: [ 'cx-column-sub-heading-view-page' ],
		framed: false,
		flags: [ 'constructive' ]
	} );

	subHeading = new OO.ui.HorizontalLayout( {
		classes: [ 'cx-column-sub-heading' ],
		items: [ languageLabel, articleLink ]
	} );
	this.addItems( [ this.titleWidget, subHeading ] );
	this.$content = $( '<div>' )
		.addClass( 'cx-column__content' );

	this.$element.append(
		this.$content
	);
	this.showLoadingIndicator();
};

mw.cx.ui.SourceColumn.prototype.showCategories = function() {
	var categoryUI = new mw.cx.ui.Categories( {
		page: this.translation.getSourcePage()
	} );
	this.$content.before( categoryUI.getCategoryCount().$element );
	this.$content.after( categoryUI.getCategoryListing().$element );
	categoryUI.listen();
};

/**
 * @param {jQuery} $translationUnit
 * @param {integer} position
 */
mw.cx.ui.SourceColumn.prototype.add = function ( $translationUnit, position ) {
	this.insertAt( position, $translationUnit );
};

mw.cx.ui.SourceColumn.prototype.insertAt = function ( index, $element ) {
	var lastIndex = this.$content.children().size();
	if ( index < 0 ) {
		index = Math.max( 0, lastIndex + 1 + index );
	}
	this.$content.append( $element );
	if ( index < lastIndex ) {
		this.$content.children().eq( index ).before( this.$content.children().last() );
	}
};

/**
 * Set the translation data model
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.SourceColumn.prototype.setTranslation = function( translation ) {
	this.translation = translation;
};

mw.cx.ui.SourceColumn.prototype.showLoadingIndicator = function () {
	var $sourceTitle, userLanguage, $loadingIndicatorContent,
		$loadingIndicatorSpinner;

	this.$loadingIndicator = $( '<div>' )
		.addClass( 'cx-column__loading-indicator' );

	$sourceTitle = $( '<span>' )
		.prop( {
			lang: this.config.sourceLanguage,
			dir: $.uls.data.getDir( this.config.sourceLanguage )
		} )
		.text( this.config.sourceTitle );

	userLanguage = mw.config.get( 'wgUserLanguage' );
	$loadingIndicatorContent = $( '<div>' )
		.prop( {
			lang: userLanguage,
			dir: $.uls.data.getDir( userLanguage )
		} )
		.addClass( 'cx-column__loading-indicator--text' )
		.append( mw.message( 'cx-source-loading', $sourceTitle ).parseDom() );

	$loadingIndicatorSpinner = mw.cx.widgets.spinner();
	this.$loadingIndicator.append( $loadingIndicatorSpinner, $loadingIndicatorContent );
	this.$element.append( this.$loadingIndicator );
};

mw.cx.ui.SourceColumn.prototype.removeLoadingIndicator = function () {
	this.loading = false;
	this.$loadingIndicator.remove();
};
