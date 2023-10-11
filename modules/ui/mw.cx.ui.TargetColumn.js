/**
 * Target column
 *
 * @class
 * @extends mw.cx.ui.ArticleColumn
 * @param {Object} [config] Configuration object
 * @param {mw.cx.SiteMapper} [config.siteMapper]
 * @param {string} [config.language]
 * @param {string} [config.title]
 * @param {string|null} [config.sectionTitle]
 */
mw.cx.ui.TargetColumn = function ( config ) {
	// Parent constructor
	mw.cx.ui.TargetColumn.super.apply( this, arguments );

	// Propagate title change events
	if ( !this.isSectionTranslation() ) {
		// if this is an article translation, the title widget is an instance
		// of PageTitleWidget and "titleChange" event should be fired on change
		this.titleWidget.connect( this, { change: [ 'emit', 'titleChange' ] } );
	} else {
		// if this is a section translation, the title widget is an instance
		// of SectionTitleWidget and "sectionTitleChange" event should be fired on change
		this.titleWidget.connect( this, { change: [ 'emit', 'sectionTitleChange' ] } );

		const linkHref = this.siteMapper.getPageUrl( this.language, config.title );

		const articleLink = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-target-view-page' ),
			href: linkHref,
			target: '_blank',
			classes: [ 'cx-column-sub-heading-view-page' ],
			framed: false,
			flags: [ 'progressive' ]
		} );

		this.subHeading.addItems( [ articleLink ] );
	}

	this.$element.addClass( 'cx-column--translation' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TargetColumn, mw.cx.ui.ArticleColumn );

/**
 * @inheritdoc
 */
mw.cx.ui.TargetColumn.prototype.setTranslation = function () {
	// Parent method
	mw.cx.ui.TargetColumn.super.prototype.setTranslation.apply( this, arguments );

	let title;
	if ( this.isSectionTranslation() ) {
		title = this.translation.getTargetSectionTitle();
	} else {
		title = this.translation.getTargetTitle();
	}
	this.setTitle( title );
};
