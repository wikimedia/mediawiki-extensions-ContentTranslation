/**
 * A link from ContentTranslation dashboard to Magnus Manske's
 * tool for finding missing articles.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var toolLink = 'https://tools.wmflabs.org/not-in-the-other-language/';

	function getMagnusToolLink() {
		var uri, contentLanguage, previousLanguages,
			sourceLanguage, targetLanguage, $link;

		uri = new mw.Uri( toolLink );

		contentLanguage = mw.config.get( 'wgContentLanguage' );
		previousLanguages = mw.uls.getPreviousLanguages();
		sourceLanguage = mw.cx.sourceLanguage ||
			( window.localStorage && localStorage.getItem( 'cxSourceLanguage' ) ) ||
			previousLanguages[ previousLanguages.length - 1 ] ||
			( contentLanguage === 'en' ? 'de' : 'en' );

		targetLanguage = mw.cx.targetLanguage ||
			( window.localStorage && localStorage.getItem( 'cxTargetLanguage' ) ) ||
			contentLanguage;

		uri.extend( {
			lang1: mw.cx.siteMapper.getWikiDomainCode( sourceLanguage ),
			lang2: mw.cx.siteMapper.getWikiDomainCode( targetLanguage ),
			proj1: 'wiki',
			proj2: 'wiki',
			targets: 'source'
		} );

		// The algorithm for guessing the source and target languages is very basic
		// and can return invalid results.
		// Run the actual query ("doit"), only if the languages
		// are defined and not identical, otherwise the query will appear to be stuck.
		if ( sourceLanguage !== targetLanguage ) {
			uri.extend( {
				doit: 'Do it'
			} );
		}

		$link = $( '<a>' )
			.addClass( 'cx-sidebar__link cx-sidebar__link--magnus' )
			.text( mw.msg( 'cx-magnus-tool-link-text' ) )
			.prop( {
				target: '_blank',
				href: uri.toString()
			} );

		return $link;
	}

	mw.hook( 'mw.cx.dashboard.ready' ).add( function () {
		$( '.cx-sidebar ul' ).append( $( '<li>' ).append( getMagnusToolLink() ) );
	} );
}( jQuery, mediaWiki ) );
