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

	const attachMenu = function () {
		const myContributionsNode = document.getElementById( 'pt-mycontris' );
		const nextNode = myContributionsNode ? myContributionsNode.nextSibling : null;
		// Make sure we attach this menu only once
		if ( isMenuAttached ) {
			return;
		}
		isMenuAttached = true;

		const cxUrlParams = {
			campaign: CAMPAIGN,
			to: mw.config.get( 'wgContentLanguage' )
		};

		mw.util.addPortletLink(
			'p-personal',
			mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ),
			mw.msg( 'cx-campaign-contributionsmenu-mytranslations' ),
			'cx-language',
			mw.msg( 'cx-campaign-contributionsmenu-mytranslations-tooltip' ),
			null,
			nextNode
		);
		mw.util.addPortletLink(
			'p-personal',
			'https://commons.wikimedia.org/wiki/Special:MyUploads',
			mw.msg( 'cx-campaign-contributionsmenu-myuploads' ),
			'cx-imageGallery',
			mw.msg( 'cx-campaign-contributionsmenu-myuploads-tooltip' ),
			null,
			nextNode
		);
		// Also add them to the sticky header
		mw.util.addPortletLink(
			'p-personal-sticky-header',
			mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ),
			mw.msg( 'cx-campaign-contributionsmenu-mytranslations' ),
			'cx-language-sticky',
			mw.msg( 'cx-campaign-contributionsmenu-mytranslations-tooltip' ),
			null,
			nextNode
		);
		mw.util.addPortletLink(
			'p-personal-sticky-header',
			'https://commons.wikimedia.org/wiki/Special:MyUploads',
			mw.msg( 'cx-campaign-contributionsmenu-myuploads' ),
			'cx-imageGallery-sticky',
			mw.msg( 'cx-campaign-contributionsmenu-myuploads-tooltip' ),
			null,
			nextNode
		);
	};
	$( attachMenu );

}() );
