/**
 * Source article container
 *
 * @class
 * @extends mw.cx.ui.ArticleColumn
 * @param {Object} [config] Configuration object
 * @param {mw.cx.SiteMapper} config.siteMapper
 * @param {string} config.language
 * @param {string} config.title
 * @param {string|null} config.sectionTitle
 */
mw.cx.ui.SourceColumn = function ( config ) {
	// Parent constructor
	mw.cx.ui.SourceColumn.super.apply( this, arguments );

	this.$element.addClass( 'cx-column--source' );

	this.loading = true;
	this.$loadingIndicator = null;

	// Try to load Parsoid Cite styles. Silently ignored if not installed.
	if ( mw.loader.getState( 'ext.cite.parsoid.styles' ) !== null ) {
		mw.loader.load( 'ext.cite.parsoid.styles' );
	}
	mw.hook( 'mw.cx.error' ).add( this.removeLoadingIndicator.bind( this ) );

	this.titleWidget
		.setReadOnly( true )
		.setValidation( null );

	const linkHref = this.siteMapper.getPageUrl(
		this.language,
		config.title,
		null,
		config.sectionTitle && mw.util.escapeIdForLink( config.sectionTitle )
	);
	const articleLink = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-source-view-page' ),
		href: linkHref,
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
	const lastIndex = this.$content.children().length;

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
	this.$loadingIndicator = $( '<div>' )
		.addClass( 'cx-column__loading-indicator' );

	const $title = $( '<span>' )
		.prop( {
			lang: this.language,
			dir: this.direction
		} )
		.text( this.getTitle() );

	const userLanguage = mw.config.get( 'wgUserLanguage' );
	const $loadingIndicatorContent = $( '<div>' )
		.prop( {
			lang: userLanguage,
			dir: $.uls.data.getDir( userLanguage )
		} )
		.addClass( 'cx-column__loading-indicator--text' )
		.append( mw.message( 'cx-source-loading', $title ).parseDom() );

	const $loadingIndicatorSpinner = mw.cx.widgets.spinner();
	this.$loadingIndicator.append( $loadingIndicatorSpinner, $loadingIndicatorContent );
	this.$element.append( this.$loadingIndicator );
};

mw.cx.ui.SourceColumn.prototype.removeLoadingIndicator = function () {
	this.loading = false;
	this.$loadingIndicator.remove();
};
