/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * TranslationView Header
	 *
	 * @class
	 * @param {Object} [config] Configuration object
	 */
	mw.cx.ui.TranslationColumn = function ( config ) {
		// Configuration initialization
		this.config = $.extend( {}, config, {
			continuous: true,
			classes: [ 'cx-column', 'cx-column--translation' ],
			expanded: false,
			scrollable: false
		} );
		// Parent constructor
		mw.cx.ui.TranslationColumn.super.call( this, this.config );
		this.siteMapper = config.siteMapper;
		this.init();
	};
	/* Setup */

	OO.inheritClass( mw.cx.ui.TranslationColumn, OO.ui.StackLayout );

	mw.cx.ui.TranslationColumn.prototype.init = function () {
		var self = this;
		mw.loader.using(
			[ 'ext.cx.translation', 'ext.cx.translation.progress', 'ext.cx.publish' ],
			function () {
				self.$element.cxTranslation( self.siteMapper );
			}
		);
	};

	mw.cx.ui.TranslationColumn.prototype.setTargetTitle = function ( title ) {
		$( '.cx-column--translation > h2' ).text( title ).trigger( 'input' );
	};
}() );
