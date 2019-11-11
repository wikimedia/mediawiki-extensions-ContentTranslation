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
	this.titleWidget.connect( this, { change: [ 'emit', 'titleChange' ] } );

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
