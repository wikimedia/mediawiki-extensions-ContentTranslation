/**
 * Context item for Media.
 *
 * @class
 * @extends ve.ui.MWMediaContextItem
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXMediaContextItem = function VeUiCXMediaContextItem() {
	// Parent constructor
	ve.ui.CXMediaContextItem.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXMediaContextItem, ve.ui.MWMediaContextItem );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXMediaContextItem.prototype.renderBody = function () {
	const title = mw.Title.newFromText( mw.libs.ve.normalizeParsoidResourceName( this.model.getAttribute( 'resource' ) ) );
	const surfaceLanguage = this.model.getDocument().getLang();
	const url = ve.init.target.config.siteMapper.getPageUrl( surfaceLanguage, title );
	const $link = $( '<a>' )
		.text( this.getDescription() )
		.attr( {
			target: '_blank',
			rel: 'noopener'
		} );
	// T322704
	ve.setAttributeSafe( $link[ 0 ], 'href', url, '#' );

	this.$body.append( $link );
};

/**
 * @inheritdoc
 */
ve.ui.CXMediaContextItem.prototype.setup = function () {
	ve.ui.CXMediaContextItem.super.prototype.setup.apply( this, arguments );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXMediaContextItem );
