/*!
 * Content Translation invitation from the 'contributions' link in pages.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const CAMPAIGN = 'contributionsmenu';
	let isMenuAttached = false;

	/**
	 * @return {jQuery.Object}
	 */
	function getTranslationsItem() {
		const cxUrlParams = {
			campaign: CAMPAIGN,
			to: mw.config.get( 'wgContentLanguage' )
		};

		const $link = $( '<a>' )
			.prop( 'href', mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ) )
			.attr( 'title', mw.msg( 'cx-campaign-contributionsmenu-mytranslations-tooltip' ) )
			.append(
				$( '<span>' ).addClass( 'cx-icon' ),
				' ',
				$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-mytranslations' ) )
			);

		return $( '<li>' )
			.addClass( 'cx-campaign-translations' )
			.append( $link );
	}

	/**
	 * @param {jQuery.Object} $trigger with 'callout' data value.
	 * @param {jQuery.Object} $myContributions list item element.
	 * @param {jQuery.Object} $myTranslations list item element.
	 * @param {jQuery.Object} $myUploads list item element.
	 */
	function attachCallout( $trigger, $myContributions, $myTranslations, $myUploads ) {
		const $menu = $( '<ul>' )
			.append( $myContributions, $myTranslations, $myUploads );

		$trigger.callout( {
			trigger: 'hover',
			classes: 'cx-campaign-contributionsmenu',
			direction: $.fn.callout.autoDirection( '1' ),
			content: $menu
		} );

		const callout = $trigger.data( 'callout' );

		mw.hook( 'mw.cx.betafeature.enabled' ).add( function () {
			// Show after a few milliseconds to get all position calculation correct
			setTimeout( function () {
				callout.show();
			}, 500 );
			mw.hook( 'mw.cx.cta.shown' ).fire( CAMPAIGN );
		} );

	}

	function attachMenu( $trigger ) {
		let nextNode = document.getElementById( 'pt-mycontris' );
		const useCallout = mw.config.get( 'skin' ) !== 'vector-2022';

		nextNode = nextNode ? nextNode.nextSibling : null;
		// Make sure we attach this menu only once
		if ( isMenuAttached ) {
			return;
		}
		isMenuAttached = true;

		const $myContributions = $( '<li>' )
			.addClass( 'cx-campaign-contributions' )
			.append(
				$( '<a>' )
					.attr( 'href', $trigger.find( 'a' ).attr( 'href' ) )
					.append(
						$( '<span>' ).addClass( 'cx-icon' ),
						' ',
						$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-mycontributions' ) )
					)
			);

		const $myTranslations = getTranslationsItem();

		if ( $( '.mw-special-Preferences' ).length ) {
			$myTranslations.addClass( 'cx-campaign-new-beta-feature' );
		}

		const $myUploads = $( '<li>' )
			.addClass( 'cx-campaign-uploads' )
			.append( $( '<a>' )
				.attr( 'href', '//commons.wikimedia.org/wiki/Special:MyUploads' )
				.attr( 'title', mw.msg( 'cx-campaign-contributionsmenu-myuploads-tooltip' ) )
				.append(
					$( '<span>' ).addClass( 'cx-icon' ),
					' ',
					$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-myuploads' ) )
				)
			);

		if ( useCallout ) {

			attachCallout( $trigger, $myContributions, $myTranslations, $myUploads );
		} else {
			mw.util.addPortletLink(
				'p-personal',
				$myTranslations.find( 'a' ).attr( 'href' ),
				$myTranslations.text(),
				'cx-language',
				$myTranslations.find( 'a' ).attr( 'title' ),
				null,
				nextNode
			);
			mw.util.addPortletLink(
				'p-personal',
				$myUploads.find( 'a' ).attr( 'href' ),
				$myUploads.text(),
				'cx-imageGallery',
				$myUploads.find( 'a' ).attr( 'title' ),
				null,
				null,
				nextNode
			);
			// Also add them to the sticky header
			mw.util.addPortletLink(
				'p-personal-sticky-header',
				$myTranslations.find( 'a' ).attr( 'href' ),
				$myTranslations.text(),
				'cx-language-sticky',
				$myTranslations.find( 'a' ).attr( 'title' ),
				null,
				nextNode
			);
			mw.util.addPortletLink(
				'p-personal-sticky-header',
				$myUploads.find( 'a' ).attr( 'href' ),
				$myUploads.text(),
				'cx-imageGallery-sticky',
				$myUploads.find( 'a' ).attr( 'title' ),
				null,
				null,
				nextNode
			);
		}
	}

	function showFeatureDiscovery( $trigger ) {
		const $container = $( '<div>' ).addClass( 'cx-feature-discovery-container' );

		$trigger.append( $container );
		const fd = new mw.cx.ui.FeatureDiscoveryWidget( {
			title: mw.msg( 'cx-feature-discovery-title' ),
			content: mw.msg( 'cx-feature-discovery-content' ),
			dismissLabel: mw.msg( 'cx-feature-discovery-dismiss' ),
			$container: $container,
			onClose: function () {
				// After dismissing the informative dialog, the action should be continued
				// and Contributions page opened
				location.href = $trigger.find( 'a' ).attr( 'href' );
			}
		} );
		$container.append( fd.$element );
		$trigger.one( 'click', function () {
			const api = new mw.Api();
			// Prevent default click action.
			fd.show();
			// Never show this again.
			api.postWithToken( 'csrf', {
				action: 'globalpreferences',
				optionname: 'cx-entrypoint-fd-status',
				optionvalue: 'shown'
			} ).then( function ( res ) {
				if ( res.error ) {
					mw.log.error( res.error );
				}
			} );
			return false;
		} );
	}

	$( function () {
		const $trigger = $( '#pt-mycontris' );

		if ( mw.config.get( 'wgContentTranslationEntryPointFD' ) ) {
			mw.loader.using( 'mw.cx.ui.FeatureDiscoveryWidget' ).then( function () {
				showFeatureDiscovery( $trigger );
			} );
		} else {
			attachMenu( $trigger );
		}

		// Change the menu when creating a new article using VE
		mw.hook( 've.activationComplete' ).add( function () {
			// Rebuild menu
			$trigger.removeData( 'callout' );
			attachMenu( $trigger );
		} );
	} );
}() );
