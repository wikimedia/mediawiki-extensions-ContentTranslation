/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	var campaign = 'interlanguagelink';

	/**
	 * Get the list of target languages that should be suggested
	 * to the current user:
	 * - The MediaWiki user interface language.
	 * - Accept-Language.
	 * - Browser interface language.
	 *
	 * @return {string[]} target languages
	 */
	function getSuggestedTargetLanguages() {
		var i, splitCode, splitCodes, specialCodeIndex,
			uniquePossibleTargetLanguages,
			possibleTargetLanguages = [],
			pageLanguage = mw.config.get( 'wgPageContentLanguage' ).split( '-' )[ 0 ];

		possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );
		possibleTargetLanguages.push( mw.uls.getBrowserLanguage() );

		$.merge( possibleTargetLanguages, mw.uls.getAcceptLanguageList() );
		$.merge( possibleTargetLanguages, mw.uls.getPreviousLanguages() );

		// Language codes can have country extensions like en-US.
		// Remove them so that it is like domain code format.
		for ( i = 0; i < possibleTargetLanguages.length; i++ ) {
			possibleTargetLanguages[ i ] = possibleTargetLanguages[ i ].split( '-' )[ 0 ];
		}

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

		return uniquePossibleTargetLanguages.filter( function ( language ) {
			return language !== pageLanguage;
		} );
	}

	/**
	 * Is there a page in the target language?
	 *
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
		// We can't use something like wgContentLanguage because this
		// will fail for a wiki like simple.wikipedia.org, where
		// the content language is the same as on en.wikipedia.org,
		// as well as some other edge cases. But we use the known
		// mappings to do backwards conversion for known problematic
		// domains.
		from = mw.config.get( 'wgServerName' ).split( '.' )[ 0 ];
		from = mw.cx.siteMapper.getLanguageCodeForWikiDomain( from );

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
				lang: code
			} )
			// T130390: must be attr
			.attr( 'dir', 'auto' )
			.addClass( 'new' )
			.text( autonym );

		$item = $( '<li>' )
			.addClass( 'cx-new-interlanguage-link' )
			.append( $link );

		return $item;
	}

	function prepareCXInterLanguageLinks() {
		var $newItem, $pLangList, dependencies, suggestedTargetLanguages;

		suggestedTargetLanguages = getSuggestedTargetLanguages();

		if ( !suggestedTargetLanguages.length ) {
			return;
		}

		// We load the below modules only when required to show gray interlanguage links.
		// This is important since gray interlanguage links appear in along with articles.
		dependencies = [ 'ext.cx.entrypoint', 'jquery.uls.data' ];

		mw.loader.using( dependencies, function () {
			var cxEntryPointDialogLeft,
				cxEntryPointDialogOffset = 5,
				count = 0,
				maxListSize = 3,
				$contentText = $( '#mw-content-text' ),
				contentTextLeft = $contentText.offset().left;

			cxEntryPointDialogLeft = ( $( 'html' ).prop( 'dir' ) === 'rtl' ) ?
				contentTextLeft + $contentText.width() + cxEntryPointDialogOffset :
				contentTextLeft - cxEntryPointDialogOffset;

			$pLangList = $( '#p-lang ul' );
			suggestedTargetLanguages.some( function ( code ) {
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
					// Array.prototype.some breaks the iteration first time `true` is returned
					return ++count === maxListSize;
				}
			} );
		} );
	}

	function init() {
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

		prepareCXInterLanguageLinks();
	}

	// Early execute of init
	if ( document.readyState === 'interactive' ) {
		init();
	} else {
		$( init );
	}
}() );
