/*!
 * Source article container
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
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
		mw.cx.ui.SourceColumn.super.call( this, this.config );
		this.siteMapper = config.siteMapper;
		this.init();
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.SourceColumn, OO.ui.StackLayout );

	mw.cx.ui.SourceColumn.prototype.init = function () {
		var self = this;
		mw.loader.using( 'ext.cx.source', function () {
			self.$element.cxSource( self.siteMapper );
		} );
	};

}( jQuery, mediaWiki, OO ) );
