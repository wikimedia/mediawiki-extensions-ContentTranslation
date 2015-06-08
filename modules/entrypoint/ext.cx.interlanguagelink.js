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
	 * @param {String[]} availableTargetLanguages A list of target languages
	 *     that are supported by this instance.
	 * @return {string[]} target languages
	 */
	function getSuggestedTargetLanguages( availableTargetLanguages ) {
		var specialCode, specialCodes, specialCodeIndex,
			uniquePossibleTargetLanguages,
			possibleTargetLanguages = [],
			pageLanguage = mw.config.get( 'wgPageContentLanguage' );

		possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );
		possibleTargetLanguages.push( mw.uls.getBrowserLanguage() );

		$.merge( possibleTargetLanguages, mw.uls.getAcceptLanguageList() );
		$.merge( possibleTargetLanguages, mw.uls.getPreviousLanguages() );

		// Replace possibly non-standard, macro and duplicate language codes
		// with normalized counterparts
		specialCodes = {
			// Suggest both varieties of Norwegian when requesting macro Norwegian
			no: [ 'nb', 'nn' ]
		};

		for ( specialCode in specialCodes ) {
			specialCodeIndex = possibleTargetLanguages.indexOf( specialCode );
			if ( specialCodeIndex > -1 ) {
				possibleTargetLanguages.splice( specialCodeIndex, 1 );
				$.merge( possibleTargetLanguages, specialCodes[ specialCode ] );
			}
		}

		uniquePossibleTargetLanguages = mw.cx.unique( possibleTargetLanguages );

		return $.grep( uniquePossibleTargetLanguages, function ( language ) {
			return (
				$.inArray( language, availableTargetLanguages ) > -1 &&
				language !== pageLanguage
			);
		} );
	}

	/**
	 * Get the list of target languages that this instance of CX supports.
	 * @return {jQuery.Promise}
	 */
	function getAvailableTargetLanguages() {
		var languagePairsAPIUrl, deferred;

		// Optimization: creating the cxserver URL without sitemapper
		// to avoid loading the sitemapper module just for this.
		languagePairsAPIUrl =
			mw.config.get( 'wgContentTranslationSiteTemplates' ).cx + '/languagepairs';

		deferred = $.Deferred();

		$.get( languagePairsAPIUrl )
			.done( function ( response ) {
				deferred.resolve( response.target || [] );
			} )
			.fail( function ( response ) {
				mw.log(
					'Error getting language pairs from ' + languagePairsAPIUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);

				deferred.reject();
			} );

		return deferred.promise();
	}

	/**
	 * Is there a page in the target language?
	 * @param {string} code
	 * @return {boolean}
	 */
	function pageInLanguageExists( code ) {
		return $( 'li.interlanguage-link.interwiki-' + code ).length === 1;
	}

	function createCXInterlanguageItem( code ) {
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
				if ( !pageInLanguageExists( code ) ) {
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
		getAvailableTargetLanguages().then( function ( availableTargetLanguages ) {
			prepareCXInterLanguageLinks( availableTargetLanguages );
		} );
	} );
}( jQuery, mediaWiki ) );
