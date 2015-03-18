/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';
	mw.cx.widgets = mw.cx.widgets || {};
	/**
	 * Generate an overlay element.
	 * Usage:
	 *  var $overlay = mw.cx.widgets.overlay()
	 *  $(body).append( $overlay ); // Applies overlay
	 *  $overlay.hide(); // Hide the overlay
	 * @return {jQuery} the overlay element
	 */
	mw.cx.widgets.overlay = function () {
		return $( '<div>' )
			.addClass( 'cx-overlay' );
	};
}( jQuery, mediaWiki ) );
