( function () {
	// Here we override "TranslateInTarget" configuration parameter for the SiteMapper class,
	// to always be false. This is required since we don't know beforehand the target language
	// for this CX entrypoint, and thus we want to avoid redirection to target wiki, where the
	// publishing happens in production wikis. Ultimately, we want to redirect the user to CX
	// within the current wiki with source page, source language and target language prefilled.
	// The target language is the first among the suggested target languages for the current
	// user. In case no such suggested target languages exist, the target language is null
	// but the redirection to CX still happens with the target language missing.
	const siteMapper = new mw.cx.SiteMapper( { TranslateInTarget: false } );
	const sourceLanguage = siteMapper.getCurrentWikiLanguageCode();

	/**
	 * Checks if there is a page in the target language.
	 *
	 * @param {string} code
	 * @return {boolean}
	 */
	function pageInLanguageExists( code ) {
		const domainCode = siteMapper.getWikiDomainCode( code );

		return $( 'li.interlanguage-link.interwiki-' + domainCode ).length === 1;
	}

	/**
	 * Copied from ext.cx.interlanguagelink.init.js
	 *
	 * This method creates a list of target languages that could be suggested to the current user.
	 * If preferred languages are provided, they are used. Otherwise, the user's frequent
	 * languages (mw.uls.getFrequentLanguageList) are used.
	 * It filters out page language and languages in which the article DOES exist, and returns
	 * the first language in the array if the array is not empty or null elsewise.
	 *
	 * @param {string[]} preferredLanguages Preferred language codes
	 * @return {string|null} Target language
	 */
	function getSuggestedTargetLanguage( preferredLanguages = [] ) {
		// "ext.uls.common" is intentionally not a dependency of this module, to
		// avoid loading language data on every page view. ULS loads it before
		// the V2 selector mounts, and this function only runs from getConfig()
		// after that. If it is ever missing, degrade to no suggestion.
		if ( !mw.uls || !$.uls ) {
			return null;
		}

		const pageContentLanguage = mw.config.get( 'wgPageContentLanguage' );
		const pageLanguage = pageContentLanguage.split( '-' )[ 0 ];
		let possibleTargetLanguages = [];

		if ( preferredLanguages.length > 0 ) {
			possibleTargetLanguages = [ ...preferredLanguages ];
		} else {
			possibleTargetLanguages = mw.uls.getFrequentLanguageList();
		}

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

		possibleTargetLanguages = possibleTargetLanguages.filter(
			// Keep a language only if the page does not already exist in it,
			// ULS knows it, and it is not the page's own language. That last
			// rule needs both checks: pageLanguage catches the truncated base
			// code, while pageContentLanguage catches a variant on its own
			// wiki — e.g. on a be-tarask wiki the splitCodes expansion above
			// re-adds "be-tarask", which is a valid suggestion on any other
			// wiki but must be dropped here, where the page is already
			// written in it.
			( language ) => language !== pageLanguage &&
				language !== pageContentLanguage &&
				!pageInLanguageExists( language ) &&
				language !== $.uls.data.getAutonym( language )
		);

		return possibleTargetLanguages.length ? possibleTargetLanguages[ 0 ] : null;
	}

	// The module is only added when the ULS rewrite (ULSv2) is enabled, so the
	// entrypoint is always registered with the ULS entrypoint registry.
	const EntrypointRegistry = require( 'ext.uls.rewrite.entrypoints' );
	const { cdxIconAdd } = require( './icons.json' );
	const { ENTRYPOINT_TYPE, ULS_MODE } = EntrypointRegistry;
	const translateActionEntrypoint = {
		id: 'cx-uls-translate-page-quick-action',
		shouldShow: () => true,
		getConfig: ( context ) => ( {
			label: mw.msg( 'cx-uls-translate-page-quick-action-label' ),
			icon: cdxIconAdd,
			url: siteMapper.getCXUrl(
				mw.config.get( 'wgTitle' ),
				null,
				sourceLanguage,
				// The registry contract guarantees getConfig() is called with the
				// ULS state/props object, so "context" is never null. A context
				// without preferredLanguages is covered by the parameter default.
				getSuggestedTargetLanguage( context.preferredLanguages ),
				{ campaign: 'ulsaddlanguages' }
			)
		} )
	};

	EntrypointRegistry.register(
		ENTRYPOINT_TYPE.QUICK_ACTIONS,
		translateActionEntrypoint,
		ULS_MODE.CONTENT
	);

	const emptyListTranslateAction = Object.assign( {}, translateActionEntrypoint, {
		id: 'cx-uls-translate-page-empty-list-action'
	} );
	EntrypointRegistry.register(
		ENTRYPOINT_TYPE.EMPTY_LIST,
		emptyListTranslateAction,
		ULS_MODE.CONTENT
	);
}() );
