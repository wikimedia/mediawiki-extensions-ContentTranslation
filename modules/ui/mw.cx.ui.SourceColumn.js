'use strict';

/**
 * Source article container
 *
 * @class
 * @param {mw.cx.dm.Translation} translation
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.SourceColumn = function ( translation, config ) {
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
	this.translation = translation;
	this.loading = true;
	this.$loadingIndicator = null;
	this.titleWidget = null;
	this.init();
	this.translation.connect( this, {
		sourcePageReady: 'onSourcePageReady'
	} );
};

/* Setup */

OO.inheritClass( mw.cx.ui.SourceColumn, OO.ui.StackLayout );

mw.cx.ui.SourceColumn.prototype.init = function () {
	this.render();
	// Try to load Cite styles. Silently ignored if not installed.
	mw.loader.load( 'ext.cite.style' );
};

mw.cx.ui.SourceColumn.prototype.render = function () {
	var sourceLanguageDir, $languageLabel, $articleLink,
		userLanguage, $subHeading;

	sourceLanguageDir = $.uls.data.getDir( this.config.sourceLanguage );
	this.$element.prop( {
		lang: this.config.sourceLanguage,
		dir: sourceLanguageDir
	} );

	this.titleWidget = new mw.cx.widgets.PageTitleWidget( {
		value: this.config.sourceTitle,
		editable: false
	} );

	$languageLabel = $( '<span>' )
		.prop( {
			lang: mw.cx.sourceLanguage,
			dir: sourceLanguageDir
		} )
		.addClass( 'cx-column__language-label' )
		.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );

	$articleLink = $( '<span>' )
		.addClass( 'cx-column__sub-heading__view-page' )
		.append( $( '<a>' )
			.prop( {
				href: this.config.siteMapper.getPageUrl( this.config.sourceLanguage, this.config.sourceTitle ),
				target: '_blank'
			} )
			.text( mw.msg( 'cx-source-view-page' ) )
		);

	userLanguage = mw.config.get( 'wgUserLanguage' );
	$subHeading = $( '<div>' )
		.prop( {
			lang: userLanguage,
			dir: $.uls.data.getDir( userLanguage )
		} )
		.addClass( 'cx-column__sub-heading' )
		.append( $languageLabel, $articleLink );

	this.$content = $( '<div>' )
		.addClass( 'cx-column__content' );

	this.$element.append(
		this.titleWidget.$element,
		$subHeading,
		this.$content
	);
	this.showLoadingIndicator();
};

mw.cx.ui.SourceColumn.prototype.onSourcePageReady = function() {
	this.showCategories();
};

mw.cx.ui.SourceColumn.prototype.showCategories = function() {
	var categoryUI = new mw.cx.ui.Categories( {
		page: this.translation.sourcePage
	} );
	this.loading = false;
	this.$loadingIndicator.remove();
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
