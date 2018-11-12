( function () {
	'use strict';

	// This module get loaded when CX beta feature is enabled.
	$( function () {
		mw.hook( 'mw.cx.betafeature.enabled' ).fire();
	} );
}() );
