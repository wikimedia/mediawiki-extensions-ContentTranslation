/*!
 * Translation container
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
	'use strict';

	/**
	 * Translation container
	 *
	 * @class
	 * @param {Object} [config] Configuration object
	 */
	mw.cx.ui.ToolsColumn = function ( config ) {
		// Configuration initialization
		this.config = $.extend( {}, config, {
			continuous: false,
			classes: [ 'cx-column', 'cx-column--tools' ],
			expanded: false,
			scrollable: false
		} );
		// Parent constructor
		mw.cx.ui.ToolsColumn.parent.call( this, this.config );
		this.init();
	};

	/* Setup */

	OO.inheritClass( mw.cx.ui.ToolsColumn, OO.ui.StackLayout );

	mw.cx.ui.ToolsColumn.prototype.init = function () {
		var self = this;
		mw.loader.using( 'ext.cx.tools', function () {
			self.$element.cxTools();
		} );
	};

}( jQuery, mediaWiki, OO ) );
