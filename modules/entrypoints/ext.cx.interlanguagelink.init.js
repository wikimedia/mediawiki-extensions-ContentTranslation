/*!
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';
/* eslint-disable no-implicit-globals */

const $pLangList = $( '#p-lang ul' );

/**
	* Checks if there is a page in the target language.
	*
	* @param {string} code
	* @return {boolean}
	*/
function pageInLanguageExists( code ) {
	const map = require( '../config.json' ).ContentTranslationDomainCodeMapping,
		domainCode = map[ code ] || code;

	return $( 'li.interlanguage-link.interwiki-' + domainCode ).length === 1;
}

/**
	* Get the list of target languages that should be suggested to the current user:
	* - The MediaWiki user interface language.
	* - Accept-Language.
	* - Browser interface language.
	*
	* Page language is ignored. Only languages in which article does not exist are suggested.
	*
	* @return {string[]} Target languages
	*/
function getSuggestedTargetLanguages() {
	let possibleTargetLanguages = [];
	const pageLanguage = mw.config.get( 'wgPageContentLanguage' ).split( '-' )[ 0 ];

	possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );
	possibleTargetLanguages.push( mw.uls.getBrowserLanguage() );

	Array.prototype.push.apply( possibleTargetLanguages, mw.uls.getAcceptLanguageList() );
	Array.prototype.push.apply( possibleTargetLanguages, mw.uls.getPreviousLanguages() );

	// Language codes can have country extensions like en-US.
	// Remove them so that it is like domain code format.
	possibleTargetLanguages = possibleTargetLanguages.map( ( language ) => language.split( '-' )[ 0 ] );

	// Replace possibly non-standard, macro and duplicate language codes
	// with normalized counterparts
	const splitCodes = {
		// Suggest both varieties of Belarusian when requesting 'be'
		be: [ 'be', 'be-tarask' ],
		// Suggest both varieties of Norwegian when requesting 'no'
		no: [ 'nb', 'nn' ]
	};

	for ( const splitCode in splitCodes ) {
		const specialCodeIndex = possibleTargetLanguages.indexOf( splitCode );
		if ( specialCodeIndex > -1 ) {
			possibleTargetLanguages.splice( specialCodeIndex, 1 );
			Array.prototype.push.apply( possibleTargetLanguages, splitCodes[ splitCode ] );
		}
	}

	return possibleTargetLanguages.filter(
		// Code should not be a language in which page exists.
		// Also, it should be a known language for ULS.
		( language ) => language !== pageLanguage &&
			!pageInLanguageExists( language ) &&
			language !== $.uls.data.getAutonym( language )
	);
}

function prepareCXInterLanguageLinks( suggestedTargetLanguages ) {
	let count = 0;
	const maxListSize = 3;

	// Remove duplicates
	suggestedTargetLanguages = suggestedTargetLanguages.filter(
		( element, index ) => suggestedTargetLanguages.indexOf( element ) === index
	);

	suggestedTargetLanguages.some( ( code ) => {
		const $newItem = mw.cx.createCXInterlanguageItem( code );
		$pLangList.prepend( $newItem );
		// Array.prototype.some breaks the iteration first time `true` is returned
		return ++count === maxListSize;
	} );
}

function init() {
	// No language links on the page
	if ( $pLangList.length === 0 ) {
		return;
	}

	const suggestedTargetLanguages = getSuggestedTargetLanguages();

	if ( !suggestedTargetLanguages.length ) {
		return;
	}

	mw.loader.using( 'ext.cx.interlanguagelink' ).then( () => {
		mw.cx.siteMapper = new mw.cx.SiteMapper();
		prepareCXInterLanguageLinks( suggestedTargetLanguages );
	} );
}

// Early execute of init
if ( document.readyState === 'interactive' ) {
	init();
} else {
	$( init );
}
