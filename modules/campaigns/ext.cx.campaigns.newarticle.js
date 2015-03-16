/**
 * Content Translation invitation for editors while trying to create a new article.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var campaign = 'newarticle';

	function showInvitation() {
		var $banner, $trigger, cxLink, $cancel, $tryCX;

		$trigger = $( '#pt-betafeatures' );
		cxLink = mw.util.getUrl( 'Special:ContentTranslation', {
			campaign: campaign,
			targettitle: mw.config.get( 'wgPageName' ),
			to: mw.config.get( 'wgContentLanguage' )
		} );

		$cancel = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-quiet cancel' ).text( mw.msg( 'cx-campaign-no-thanks' ) );
		$tryCX = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-progressive try' ).text( mw.msg( 'cx-campaign-try' ) );
		$banner = $( '<div>' )
			.addClass( 'cx-campaign-newarticle' )
			.append(
				$( '<div>' ).addClass( 'cx-campaign-newarticle__logo' ),
				$( '<div>' ).addClass( 'cx-campaign-newarticle__message' ).html(
					mw.message( 'cx-campaign-newarticle-notice' ).parse()
				),
				$( '<div>' ).addClass( 'cx-campaign-newarticle__actions' ).append( $cancel, $tryCX )
			);

		$trigger.callout( {
			trigger: 'auto',
			gravity: $.fn.callout.autoNEW,
			content: $banner
		} );

		$cancel.on( 'click', function () {
			$trigger.callout( 'hide' );
			$.cookie(
				'cx_campaign_' + campaign + '_hide', 1, {
					expires: 30,
					path: '/'
				}
			);
		} );
		$tryCX.on( 'click', function () {
			location.href = cxLink;
		} );
	}

	$( function () {
		var blacklist = mw.config.get( 'wgContentTranslationBrowserBlacklist' );
		if ( !$.client.test( blacklist, null, true ) ) {
			showInvitation();
		}
	} );

}( jQuery, mediaWiki ) );
