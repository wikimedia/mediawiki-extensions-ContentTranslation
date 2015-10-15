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

	var campaign = 'interlanguagelink';

	/**
	 * Get the list of target languages that should be suggested
	 * to the current user:
	 * - The MediaWiki user interface language.
	 * - Accept-Language.
	 * - Browser interface language.
	 * This will probably include more languages in the future.
	 * @return {string[]} target languages
	 */
	function getSuggestedTargetLanguages() {
		var i, splitCode, splitCodes, specialCodeIndex,
			uniquePossibleTargetLanguages,
			acceptLanguages,
			possibleTargetLanguages = [],
			pageLanguage = mw.config.get( 'wgPageContentLanguage' );

		possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );
		possibleTargetLanguages.push( mw.uls.getBrowserLanguage() );

		acceptLanguages = mw.uls.getAcceptLanguageList();
		// Accept language codes can have country extensions like en-US.
		// So remove them so that it is like domain code format.
		for ( i = 0; i < acceptLanguages.length; i++ ) {
			// be-tarask has hyphen in the code
			if ( acceptLanguages[ i ] === 'be-tarask' ) {
				continue;
			}
			acceptLanguages[ i ] = acceptLanguages[ i ].split( '-' )[ 0 ];
		}

		$.merge( possibleTargetLanguages, acceptLanguages );
		$.merge( possibleTargetLanguages, mw.uls.getPreviousLanguages() );

		// Replace possibly non-standard, macro and duplicate language codes
		// with normalized counterparts
		splitCodes = {
			// Suggest both varieties of Belarusian when requesting 'be'
			be: [ 'be', 'be-tarask' ],
			// Suggest both varieties of Norwegian when requesting 'no'
			no: [ 'nb', 'nn' ]
		};

		for ( splitCode in splitCodes ) {
			specialCodeIndex = possibleTargetLanguages.indexOf( splitCode );
			if ( specialCodeIndex > -1 ) {
				possibleTargetLanguages.splice( specialCodeIndex, 1 );
				$.merge( possibleTargetLanguages, splitCodes[ splitCode ] );
			}
		}

		uniquePossibleTargetLanguages = mw.cx.unique( possibleTargetLanguages );

		return $.grep( uniquePossibleTargetLanguages, function ( language ) {
			return language !== pageLanguage;
		} );
	}

	/**
	 * Is there a page in the target language?
	 * @param {string} code
	 * @return {boolean}
	 */
	function pageInLanguageExists( code ) {
		var domainCode;

		domainCode = mw.cx.siteMapper.getWikiDomainCode( code );

		return $( 'li.interlanguage-link.interwiki-' + domainCode ).length === 1;
	}

	function createCXInterlanguageItem( code ) {
		var from, $link, $item, autonym;

		autonym = $.uls.data.getAutonym( code );
		// TODO: This should be done more robustly.
		// We can't use something like wgContentLanguage because this
		// will fail for a wiki like simple.wikipedia.org, where
		// the content language is the same as on en.wikipedia.org,
		// as well as some other edge cases.
		from = mw.config.get( 'wgServerName' ).split( '.' )[ 0 ];

		$link = $( '<a>' )
			.prop( {
				href: mw.util.getUrl(
					'Special:ContentTranslation', {
						page: mw.config.get( 'wgTitle' ),
						from: from,
						to: code
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

	function prepareCXInterLanguageLinks( availableTargetLanguages ) {
		var $newItem, $pLangList, dependencies, suggestedTargetLanguages;

		suggestedTargetLanguages = getSuggestedTargetLanguages( availableTargetLanguages );

		if ( !suggestedTargetLanguages.length ) {
			return;
		}

		mw.hook( 'mw.cx.cta.shown' ).fire( campaign );

		// We load the below modules only when required to show gray interlanguage links.
		// This is important since gray interlanguage links appear in along with articles.
		dependencies = [ 'ext.cx.entrypoint', 'jquery.uls.data' ];

		mw.loader.using( dependencies, function () {
			var cxEntryPointDialogLeft,
				cxEntryPointDialogOffset = 5,
				$contentText = $( '#mw-content-text' ),
				contentTextLeft = $contentText.offset().left;

			cxEntryPointDialogLeft = ( $( 'html' ).prop( 'dir' ) === 'rtl' ) ?
				contentTextLeft + $contentText.width() + cxEntryPointDialogOffset :
				contentTextLeft - cxEntryPointDialogOffset;

			$pLangList = $( '#p-lang ul' );
			$.each( suggestedTargetLanguages, function ( i, code ) {
				// Code should not be a language in which page exists.
				// Also it should be known language for ULS.
				if ( !pageInLanguageExists( code ) && code !== $.uls.data.getAutonym( code ) ) {
					$newItem = createCXInterlanguageItem( code );
					$pLangList.prepend( $newItem );
					$newItem.cxEntryPoint( {
						targetLanguage: code,
						left: cxEntryPointDialogLeft,
						entryPointName: campaign
					} );
				}
			} );
		} );
	}

	$( function () {
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

		prepareCXInterLanguageLinks();
	} );
}( jQuery, mediaWiki ) );
