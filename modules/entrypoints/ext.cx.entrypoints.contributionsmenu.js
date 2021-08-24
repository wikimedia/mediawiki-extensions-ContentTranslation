/*!
 * Content Translation invitation from the 'contributions' link in pages.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	var CAMPAIGN = 'contributionsmenu';

	/**
	 * @return {boolean}
	 */
	function isUserMenuDropdown() {
		return mw.config.get( 'skin' ) === 'vector' &&
			// eslint-disable-next-line no-jquery/no-class-state
			$( '.mw-portlet-personal.vector-menu-dropdown' ).length;
	}

	/**
	 * @return {jQuery.Object}
	 */
	function getTranslationsItem() {
		var $link, cxUrlParams = {
			campaign: CAMPAIGN,
			to: mw.config.get( 'wgContentLanguage' )
		};

		$link = $( '<a>' )
			.addClass( 'mw-ui-icon mw-ui-icon-before mw-ui-icon-cx-language' )
			.prop( 'href', mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ) )
			.append(
				$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-mytranslations' ) )
			);

		return $( '<li>' )
			.addClass( 'cx-campaign-translations' )
			.append( $link );
	}

	function attachMenu( $trigger ) {
		var $myContributions, $myTranslations, $myUploads,
			useCallout = !isUserMenuDropdown();

		// Make sure we attach this menu only once
		if ( document.querySelector( 'li.cx-campaign-uploads' ) ) {
			return;
		}

		$myContributions = $( '<li>' )
			.addClass( 'cx-campaign-contributions' )
			.append(
				$( '<a>' )
					.addClass( 'mw-ui-icon mw-ui-icon-before mw-ui-icon mw-ui-icon-cx-userContributions' )
					.attr( 'href', $trigger.find( 'a' ).attr( 'href' ) )
					.append(
						$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-mycontributions' ) )
					)
			);

		$myTranslations = getTranslationsItem( !useCallout );

		if ( $( '.mw-special-Preferences' ).length ) {
			$myTranslations.addClass( 'cx-campaign-new-beta-feature' );
		}

		$myUploads = $( '<li>' )
			.addClass( 'cx-campaign-uploads' )
			.append( $( '<a>' )
				.addClass( 'mw-ui-icon mw-ui-icon-before mw-ui-icon mw-ui-icon-cx-imageGallery' )
				.attr( 'href', '//commons.wikimedia.org/wiki/Special:MyUploads' )
				.append(
					$( '<span>' ).text( mw.msg( 'cx-campaign-contributionsmenu-myuploads' ) )
				)
			);

		if ( useCallout ) {
			// eslint-disable-next-line no-use-before-define
			attachCallout( $trigger, $myContributions, $myTranslations, $myUploads );
		} else {
			// In future consider using mw.util.addPortletLink
			$myTranslations.insertAfter( '#pt-mycontris' );
			$myUploads.insertAfter( $myTranslations );
		}
	}

	/**
	 * @param {jQuery.Object} $trigger with 'callout' data value.
	 * @param {jQuery.Object} $myContributions list item element.
	 * @param {jQuery.Object} $myTranslations list item element.
	 * @param {jQuery.Object} $myUploads list item element.
	 */
	function attachCallout( $trigger, $myContributions, $myTranslations, $myUploads ) {
		var callout,
			$menu = $( '<ul>' )
				.append( $myContributions, $myTranslations, $myUploads );

		$trigger.callout( {
			trigger: 'hover',
			classes: 'cx-campaign-contributionsmenu',
			direction: $.fn.callout.autoDirection( '1' ),
			content: $menu
		} );

		callout = $trigger.data( 'callout' );

		mw.hook( 'mw.cx.betafeature.enabled' ).add( function () {
			// Show after a few milliseconds to get all position calculation correct
			setTimeout( function () {
				callout.show();
			}, 500 );
			mw.hook( 'mw.cx.cta.shown' ).fire( CAMPAIGN );
		} );

	}

	function showFeatureDiscovery( $trigger ) {
		var fd, $container = $( '<div>' ).addClass( 'cx-feature-discovery-container' );

		$trigger.append( $container );
		fd = new mw.cx.ui.FeatureDiscoveryWidget( {
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
			var api = new mw.Api();
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
		var $trigger = $( '#pt-mycontris' );

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
