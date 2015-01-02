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
	 * Get the list of target languages that should be suggested
	 * to the current user.
	 * For now, just the user interface language.
	 * This will probably include more languages in the future.
	 * @param {String[]} availableTargetLanguages A list of target languages
	 *     that are supported by this instance.
	 * @return {string[]} target languages
	 */
	function getSuggestedTargetLanguages( availableTargetLanguages ) {
		var possibleTargetLanguages = [];

		possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );

		return $.grep( possibleTargetLanguages, function ( language ) {
			return ( $.inArray( language, availableTargetLanguages ) > -1 );
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
				var sourceLanguage;

				// For now, only consider the current content language as the source language.
				// In the future we may allow translating from other languages.
				sourceLanguage = mw.config.get( 'wgContentLanguage' );

				deferred.resolve( response[ sourceLanguage ] || [] );
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

	function prepareRedInterLanguageLinks( availableTargetLanguages ) {
		var $newItem, $pLangList, dependencies, suggestedTargetLanguages;

		suggestedTargetLanguages = getSuggestedTargetLanguages( availableTargetLanguages );

		if ( !suggestedTargetLanguages.length ) {
			return;
		}

		dependencies = [ 'ext.cx.entrypoint' ];
		if ( !( suggestedTargetLanguages.length === 1 &&
			suggestedTargetLanguages[ 0 ] === mw.config.get( 'wgUserLanguage' )
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

			$pLangList = $( '#p-lang ul' );
			$.each( suggestedTargetLanguages, function ( i, code ) {
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
		getAvailableTargetLanguages().then( function ( availableTargetLanguages ) {
			prepareRedInterLanguageLinks( availableTargetLanguages );
		} );
	} );
}( jQuery, mediaWiki ) );
