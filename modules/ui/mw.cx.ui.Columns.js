/*!
 * TranslationView Columns
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
	'use strict';

	/**
	 *
	 * @class
	 * @param {Object} config
	 */
	mw.cx.ui.Columns = function ( config ) {
		// Configuration initialization
		this.config = config || {};
		// Parent constructor
		mw.cx.ui.Columns.parent.call( this, $.extend( {}, this.config, {
			continuous: true,
			expanded: false,
			classes: [ 'cx-widget__columns' ],
			items: [
				new mw.cx.ui.SourceColumn( this.config ),
				new mw.cx.ui.TranslationColumn( this.config ),
				new mw.cx.ui.ToolsColumn( this.config )
			]
		} ) );
		this.$element.removeClass( 'oo-ui-horizontalLayout' );
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.Columns, OO.ui.HorizontalLayout );

}( jQuery, mediaWiki, OO ) );
