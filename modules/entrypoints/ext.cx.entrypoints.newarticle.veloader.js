/*!
 * Content Translation: Loader for the new article campaign for VisualEditor.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	mw.hook( 've.newTarget' ).add( ( target ) => {
		// Check the target is an article
		if ( target.constructor.static.name !== 'article' ) {
			// Other valid targets exist, e.g. 'discussionTools'
			return;
		}

		const isDesktop = ve.init.mw.DesktopArticleTarget && target instanceof ve.init.mw.DesktopArticleTarget;
		if ( !isDesktop ) {
			// Show only in desktop
			return;
		}
		target.on( 'surfaceReady', () => {
			mw.loader.load( 'ext.cx.entrypoints.newarticle' );
		} );

	} );

}() );
