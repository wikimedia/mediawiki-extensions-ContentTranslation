/**
 * Source article container
 *
 * @class
 * @extends mw.cx.ui.ArticleColumn
 * @param {mw.cx.SiteMapper} siteMapper
 * @param {string} language
 * @param {string} title
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.SourceColumn = function () {
	var articleLink;

	// Parent constructor
	mw.cx.ui.SourceColumn.super.apply( this, arguments );

	this.$element.addClass( 'cx-column--source' );

	this.loading = true;
	this.$loadingIndicator = null;

	// Try to load Cite styles. Silently ignored if not installed.
	if ( mw.loader.getState( 'ext.cite.style' ) !== null ) {
		mw.loader.load( 'ext.cite.style' );
	}
	mw.hook( 'mw.cx.error' ).add( this.removeLoadingIndicator.bind( this ) );

	this.titleWidget
		.setReadOnly( true )
		.setValidation( null );

	articleLink = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-source-view-page' ),
		href: this.siteMapper.getPageUrl( this.language, this.getTitle() ),
		target: '_blank',
		classes: [ 'cx-column-sub-heading-view-page' ],
		framed: false,
		flags: [ 'progressive' ]
	} );

	this.subHeading.addItems( [ articleLink ] );

	this.showLoadingIndicator();
};

/* Setup */

OO.inheritClass( mw.cx.ui.SourceColumn, mw.cx.ui.ArticleColumn );

/**
 * @param {jQuery} $translationUnit
 * @param {number} position
 */
mw.cx.ui.SourceColumn.prototype.add = function ( $translationUnit, position ) {
	this.insertAt( position, $translationUnit );
};

mw.cx.ui.SourceColumn.prototype.insertAt = function ( index, $element ) {
	var lastIndex = this.$content.children().length;

	if ( index < 0 ) {
		index = Math.max( 0, lastIndex + 1 + index );
	}
	this.$content.append( $element );
	if ( index < lastIndex ) {
		this.$content.children().eq( index ).before( this.$content.children().last() );
	}
};

/**
 * @inheritdoc
 */
mw.cx.ui.SourceColumn.prototype.setTranslation = function () {
	// Parent method
	mw.cx.ui.TargetColumn.super.prototype.setTranslation.apply( this, arguments );

	this.removeLoadingIndicator();
};

mw.cx.ui.SourceColumn.prototype.showLoadingIndicator = function () {
	var $title, userLanguage, $loadingIndicatorContent,
		$loadingIndicatorSpinner;

	this.$loadingIndicator = $( '<div>' )
		.addClass( 'cx-column__loading-indicator' );

	$title = $( '<span>' )
		.prop( {
			lang: this.language,
			dir: this.direction
		} )
		.text( this.getTitle() );

	userLanguage = mw.config.get( 'wgUserLanguage' );
	$loadingIndicatorContent = $( '<div>' )
		.prop( {
			lang: userLanguage,
			dir: $.uls.data.getDir( userLanguage )
		} )
		.addClass( 'cx-column__loading-indicator--text' )
		.append( mw.message( 'cx-source-loading', $title ).parseDom() );

	$loadingIndicatorSpinner = mw.cx.widgets.spinner();
	this.$loadingIndicator.append( $loadingIndicatorSpinner, $loadingIndicatorContent );
	this.$element.append( this.$loadingIndicator );
};

mw.cx.ui.SourceColumn.prototype.removeLoadingIndicator = function () {
	this.loading = false;
	this.$loadingIndicator.remove();
};
