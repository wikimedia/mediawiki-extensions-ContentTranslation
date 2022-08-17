/**
 * Target column
 *
 * @class
 * @extends mw.cx.ui.ArticleColumn
 * @param {mw.cx.SiteMapper} siteMapper
 * @param {string} language
 * @param {string} title
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TargetColumn = function () {
	// Parent constructor
	mw.cx.ui.TargetColumn.super.apply( this, arguments );

	// Propagate title change events
	if ( this.titleWidget instanceof mw.cx.ui.PageTitleWidget ) {
		// if this is an article translation, the title widget is an instance
		// of PageTitleWidget and "titleChange" event should be fired on change
		this.titleWidget.connect( this, { change: [ 'emit', 'titleChange' ] } );
	} else {
		// if this is a section translation, the title widget is an instance
		// of SectionTitleWidget and "sectionTitleChange" event should be fired on change
		this.titleWidget.connect( this, { change: [ 'emit', 'sectionTitleChange' ] } );
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

	this.setTitle( this.translation.getTargetTitle() );
};
