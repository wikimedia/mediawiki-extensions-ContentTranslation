/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Get list of target languages.
	 * For now, just the user interface language.
	 * May include more languages in the future.
	 * @return {Array}
	 */
	function getTargetLanguages() {
		var targetLanguages = [];

		targetLanguages.push( mw.config.get( 'wgUserLanguage' ) );

		return targetLanguages;
	}

	/**
	 * Is there a page in the target language?
	 * @param {string} code
	 * @return {Boolean}
	 */
	function pageInLanguageExists( code ) {
		return ( $( 'li.interlanguage-link.interwiki-' + code ).length === 1 );
	}

	function createRedInterlanguageItem( code ) {
		var $link, $item, autonym;

		// Optimization: if it's just the user language,
		// get the autonym from an available variable.
		// Otherwise, get it from uls.data, which should be loaded by now.
		if ( code === mw.config.get( 'wgUserLanguage' ) ) {
			autonym = mw.config.get( 'wgULSCurrentAutonym' );
		} else {
			autonym = $.uls.data.getAutonym( code );
		}

		$link = $( '<a>' )
			.prop( {
				href: mw.util.getUrl(
					'Special:ContentTranslation', {
						page: mw.config.get( 'wgTitle' ),
						lang: code
					}
				),
				title: mw.msg( 'cx-entrypoint-title', autonym ),
				lang: code,
				dir: 'auto'
			} )
			.addClass( 'new' )
			.text( autonym );

		$item = $( '<li>' )
			.addClass( 'cx-new-interlanguage-link' )
			.append( $link );

		return $item;
	}

	function prepareRedInterLanguageLinks() {
		var $newItem,
			dependencies = [],
			$pLangList = $( '#p-lang ul' ),
			targetLanguages = getTargetLanguages();

		if ( !( targetLanguages.length === 1 &&
			targetLanguages[ 0 ] === mw.config.get( 'wgUserLanguage' )
		) ) {
			// Optimization: load jquery.uls.data
			// only if we need more than the autonym of the user language
			dependencies.push( 'jquery.uls.data' );
		}

		mw.loader.using( dependencies, function () {
			var cxEntryPointDialogLeft,
				cxEntryPointDialogOffset = 5,
				$contentText = $( '#mw-content-text' ),
				contentTextLeft = $contentText.offset().left;

			cxEntryPointDialogLeft = ( $( 'html' ).prop( 'dir' ) === 'rtl' ) ?
				contentTextLeft + $contentText.width() + cxEntryPointDialogOffset :
				contentTextLeft - cxEntryPointDialogOffset;

			$.each( targetLanguages, function ( i, code ) {
				if ( !pageInLanguageExists( code ) ) {
					$newItem = createRedInterlanguageItem( code );
					$pLangList.prepend( $newItem );
					$newItem.cxEntryPoint( {
						targetLanguage: code,
						left: cxEntryPointDialogLeft
					} );
				}
			} );
		} );
	}

	$( function () {
		prepareRedInterLanguageLinks();
	} );
}( jQuery, mediaWiki ) );
