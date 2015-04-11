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

	function isPageCreation() {
		return mw.config.get( 'wgArticleId' ) === 0 &&
			mw.config.get( 'wgNamespaceNumber' ) === 0 &&
			mw.config.get( 'wgAction' ) !== 'view';
	}

	function getTranslationsItem() {
		var cxUrlParams,
			message, $pageTitle, $expansion,
			cxUrl, $link, $item;

		cxUrlParams = {
			campaign: campaign,
			to: mw.config.get( 'wgContentLanguage' )
		};

		if ( isPageCreation() ) {
			message = 'cx-campaign-contributionsmenu-translate-instead';
			$pageTitle = $( '<em>' )
				.text( mw.msg( 'quotation-marks', mw.config.get( 'wgTitle' ) ) );

			$expansion = $( '<div>' )
				.addClass( 'cx-campaign-contributionsmenu__expansion' )
				.html( mw.msg(
					'cx-campaign-contributionsmenu-might-be-available',
					$pageTitle[ 0 ].outerHTML
				) );

			cxUrlParams.targettitle = mw.config.get( 'wgTitle' );
		} else {
			message = 'cx-campaign-contributionsmenu-mytranslations';
			$expansion = $( [] );
		}

		cxUrl = mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams );

		$link = $( '<a>' )
			.text( mw.msg( message ) )
			.append( $expansion )
			.attr( 'href', cxUrl );

		$item = $( '<li>' )
			.addClass( 'cx-campaign-translations' )
			.append( $link );

		return $item;
	}

	function showInvitation() {
		var $trigger,
			$myContributions, $myTranslations, $myUploads,
			$menu, callout;

		$trigger = $( '#pt-mycontris a' );

		$myContributions = $( '<li>' )
			.addClass( 'cx-campaign-contributions' )
			.append( $( '<a>' )
				.text( mw.msg( 'cx-campaign-contributionsmenu-mycontributions' ) )
				.attr( 'href', $trigger.attr( 'href' ) )
			);

		$myTranslations = getTranslationsItem();

		if ( $( '.mw-special-Preferences' ).length ) {
			$myTranslations.addClass( 'cx-campaign-new-beta-feature' );
		}

		$myUploads = $( '<li>' )
			.addClass( 'cx-campaign-uploads' )
			.append( $( '<a>' )
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

		function ctaShow() {
			// Show after a few milliseconds to get all position calculation correct
			setTimeout( show, 500 );
			mw.hook( 'mw.cx.cta.shown' ).fire( campaign );
		}

		$trigger.on( 'mouseover', show );

		mw.hook( 'mw.cx.betafeature.enabled' ).add( ctaShow );
	}

	$( function () {
		var blacklist = mw.config.get( 'wgContentTranslationBrowserBlacklist' );

		if ( !$.client.test( blacklist, null, true ) ) {
			showInvitation();
		}
	} );
}( jQuery, mediaWiki ) );
