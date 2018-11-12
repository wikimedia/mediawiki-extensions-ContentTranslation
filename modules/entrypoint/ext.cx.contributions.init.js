/*!
 * Provides entry point in Special:MyContributions
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	$( function () {
		var $element = $( '<span>' );

		$element.cxContributions();
		$( '#firstHeading' ).before( $element );
	} );

}() );
