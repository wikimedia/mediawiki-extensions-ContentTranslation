/*!
 * Content Translation invitation inside the Universal Language Selector V2
 * (rewrite) language selector, for articles missing in relevant languages.
 *
 * Registers a "missing content languages" entrypoint with the ULS entrypoint
 * registry. The card itself is rendered by ULS, so this module must stay
 * lightweight (in particular, it must not depend on Vue), as it is loaded on
 * page load.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
const sitematrix = require( './sitematrix.json' );
const { cdxIconAdd } = require( './icons.json' );

( function () {
	'use strict';

	const siteMapper = new mw.cx.SiteMapper();

	/**
	 * @param {string[]} existingLanguages Language codes already present for this article
	 * @param {string[]} preferredLanguages Preferred language codes
	 * @return {string[]} Missing relevant content language codes
	 */
	function getMissingRelevantLanguages( existingLanguages, preferredLanguages = [] ) {
		let frequentLanguages = preferredLanguages.length > 0 ?
			preferredLanguages :
			[ ...new Set( mw.uls.getFrequentLanguageList() ) ];
		// Remove current language.
		frequentLanguages = frequentLanguages.filter(
			( language ) => language !== mw.config.get( 'wgContentLanguage' )
		);

		/**
		 * This variable stores an array of language codes. These language codes are
		 * the content languages of the "relevant" wikis, from which the current article is missing.
		 *
		 * @type {string[]}
		 */
		const missingRelevantLanguages = [];

		for ( const frequentLanguage of frequentLanguages ) {
			const wikiDomainCode = siteMapper.getWikiDomainCode( frequentLanguage );

			if ( !sitematrix.includes( wikiDomainCode ) ) {
				continue;
			}

			/**
			 * The content language of the corresponding wiki for the current "relevant" language
			 * This can be different from the "relevant" language.
			 * E.g.
			 * - for "no" language code, "wikiDomainCode" will also be "no", but the content
			 * language for this wiki is "nb".
			 * - for "nb" language code, "wikiDomainCode" will be "no", and the content
			 * language for this wiki is also "nb".
			 *
			 * @type {string}
			 */
			const wikiContentLanguage = siteMapper.getLanguageCodeForWikiDomain( wikiDomainCode );

			// skip if the current article already exists for the corresponding content language
			if ( existingLanguages.includes( wikiContentLanguage ) ) {
				continue;
			}

			// skip if the content language already exists inside "missingRelevantLanguages" array
			if ( missingRelevantLanguages.includes( wikiContentLanguage ) ) {
				continue;
			}

			missingRelevantLanguages.push( wikiContentLanguage );
		}

		return missingRelevantLanguages;
	}

	const getCXUrlByTargetLanguage = ( targetLanguage ) => {
		const sourceTitle = mw.config.get( 'wgTitle' );
		const sourceLanguage = siteMapper.getCurrentWikiLanguageCode();

		return siteMapper.getCXUrl(
			sourceTitle,
			'',
			sourceLanguage,
			targetLanguage || null,
			{ campaign: 'ulsmissinglanguages' }
		);
	};

	let cachedMissingRelevantLanguages = null;
	const getMissingRelevantLanguagesWithCache = ( context ) => {
		if ( cachedMissingRelevantLanguages ) {
			return cachedMissingRelevantLanguages;
		}

		// mw.uls and $.uls are not declared as dependencies to keep this module
		// light; ULS loads them before the selector opens. Hide the entrypoint
		// rather than crash if that ever changes.
		if ( !mw.uls || !$.uls ) {
			return [];
		}

		const existingLanguages = Object.keys( context.languages || {} );
		const preferredLanguages = context.preferredLanguages || [];
		cachedMissingRelevantLanguages = getMissingRelevantLanguages( existingLanguages, preferredLanguages );

		return cachedMissingRelevantLanguages;
	};

	const EntrypointRegistry = require( 'ext.uls.rewrite.entrypoints' );
	const { ENTRYPOINT_TYPE, ULS_MODE } = EntrypointRegistry;

	EntrypointRegistry.register( ENTRYPOINT_TYPE.MISSING_CONTENT_LANGUAGES, {
		id: 'cx-missing-languages-recommendation',
		shouldShow: ( context ) => getMissingRelevantLanguagesWithCache( context ).length,
		getConfig: ( context ) => {
			const codes = getMissingRelevantLanguagesWithCache( context );

			return codes.map( ( code ) => ( {
				// TODO: Replace with direct call to language-data
				label: $.uls.data.getAutonym( code ),
				icon: cdxIconAdd,
				url: getCXUrlByTargetLanguage( code )
			} ) );
		}
	}, ULS_MODE.CONTENT );
}() );
