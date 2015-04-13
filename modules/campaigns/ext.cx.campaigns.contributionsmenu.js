/**
 * Content Translation invitation from the 'contributions' link in pages.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var campaign = 'contributionsmenu';

	function showInvitation() {
		var $trigger, cxLink, $menu, callout,
			$myContributions, $myTranslations, $myUploads;

		$trigger = $( '#pt-mycontris a' );

		cxLink = mw.util.getUrl( 'Special:ContentTranslation', {
			campaign: campaign,
			to: mw.config.get( 'wgContentLanguage' )
		} );

		$myContributions = $( '<li>' )
			.addClass( 'cx-campaign-contributions' )
			.append(
				$( '<a>' )
				.text( mw.msg( 'cx-campaign-contributionsmenu-mycontributions' ) )
				.attr( 'href', $trigger.attr( 'href' ) )
			);

		$myTranslations = $( '<li>' )
			.addClass( 'cx-campaign-translations' )
			.append(
				$( '<a>' )
				.text( mw.msg( 'cx-campaign-contributionsmenu-mytranslations' ) )
				.attr( 'href', cxLink )
			);
		if ( $( '.mw-special-Preferences' ).length ) {
			$myTranslations.addClass( 'cx-campaign-new-beta-feature' );
		}

		$myUploads = $( '<li>' )
			.addClass( 'cx-campaign-uploads' )
			.append(
				$( '<a>' )
					.text( mw.msg( 'cx-campaign-contributionsmenu-myuploads' ) )
					.attr( 'href', '//commons.wikimedia.org/wiki/Special:MyUploads' )
			);

		$menu = $( '<ul>' )
			.append( $myContributions, $myTranslations, $myUploads );

		$trigger.callout( {
			trigger: 'manual',
			classes: 'cx-campaign-contributionsmenu',
			gravity: $.fn.callout.autoNEW,
			content: $menu
		} );

		callout = $trigger.data( 'callout' );

		function hide() {
			callout.hide();
		}

		function show() {
			callout.show();
			callout.$dialog.one( 'mouseleave', hide );
			$( document ).one( 'click', hide );
			// Not measuring the shown menu events because the trigger is 'hover'
			// and there will be a lot of them.
			// But it can be easily tracked if somebody uses it to reach CX.
		}

		$trigger.on( 'mouseover', show );

		mw.hook( 'mw.cx.betafeature.enabled' ).add( function () {
			// Show after a few milliseconds to get all position calculation correct
			setTimeout( show, 500 );
			mw.hook( 'mw.cx.cta.shown' ).fire( campaign );
		} );
	}

	$( function () {
		var blacklist = mw.config.get( 'wgContentTranslationBrowserBlacklist' );

		if ( !$.client.test( blacklist, null, true ) ) {
			showInvitation();
		}
	} );
}( jQuery, mediaWiki ) );
