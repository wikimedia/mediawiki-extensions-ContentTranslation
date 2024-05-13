/*!
 * Content Translation invitation for editors while trying to create a new article.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const campaign = 'newarticle';

	function showInvitation() {
		// Trigger for, in respective order: Vector 2022, Timeless and Vector legacy
		const $trigger = $( '#vector-user-links-dropdown, #user-tools #personal, #pt-betafeatures' ).first();
		const cxLink = mw.util.getUrl( 'Special:ContentTranslation', {
			campaign: campaign,
			targettitle: mw.config.get( 'wgTitle' ),
			to: mw.config.get( 'wgContentLanguage' )
		} );

		const $cancel = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-quiet cancel' ).text( mw.msg( 'cx-campaign-no-thanks' ) );
		const $tryCX = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-progressive try' ).text( mw.msg( 'cx-campaign-try' ) );
		const $banner = $( '<div>' )
			.addClass( 'cx-campaign-newarticle' )
			.append(
				$( '<div>' ).addClass( 'cx-campaign-newarticle__logo' ),
				$( '<div>' ).addClass( 'cx-campaign-newarticle__message' ).append(
					mw.message( 'cx-campaign-newarticle-notice' ).parseDom()
				),
				$( '<div>' ).addClass( 'cx-campaign-newarticle__actions' ).append( $cancel, $tryCX )
			);

		$trigger.callout( {
			trigger: 'auto',
			direction: $.fn.callout.autoDirection( '1' ),
			content: $banner
		} );

		$cancel.on( 'click', function () {
			$trigger.callout( 'hide' );
			$.cookie(
				'cx_campaign_' + campaign + '_hide', 1, {
					expires: 300,
					path: '/'
				}
			);
			// Campaign or call to action was rejected by the user.
			mw.hook( 'mw.cx.cta.reject' ).fire( campaign );
		} );
		$tryCX.on( 'click', function () {
			location.href = cxLink;
			// We need to log this using eventlogging, but since we are navigating away
			// we cannot do it reliably here(See https://phabricator.wikimedia.org/T44815).
			// We will do it at the resulting page
		} );
		mw.hook( 'mw.cx.cta.shown' ).fire( campaign );
	}

	if ( !( new URL( location.href ).searchParams.get( 'cxhidebetapopup' ) ) ) {
		$( showInvitation );
	}

}() );
