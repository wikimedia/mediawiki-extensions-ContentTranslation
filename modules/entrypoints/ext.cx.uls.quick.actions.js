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
	 * If preferred languages are provided, they are used. Otherwise, these are used:
	 * - The MediaWiki user interface language.
	 * - Accept-Language.
	 * - Browser interface language.
	 * It filters out page language and languages in which the article DOES exist, and returns
	 * the first language in the array if the array is not empty or null elsewise.
	 *
	 * @param {string[]} preferredLanguages Preferred language codes
	 * @return {string|null} Target language
	 */
	function getSuggestedTargetLanguage( preferredLanguages = [] ) {
		const pageLanguage = mw.config.get( 'wgPageContentLanguage' ).split( '-' )[ 0 ];
		let possibleTargetLanguages = [];

		if ( preferredLanguages.length > 0 ) {
			possibleTargetLanguages = [ ...preferredLanguages ];
		} else {
			possibleTargetLanguages.push( mw.config.get( 'wgUserLanguage' ) );
			possibleTargetLanguages.push( mw.uls.getBrowserLanguage() );

			Array.prototype.push.apply( possibleTargetLanguages, mw.uls.getAcceptLanguageList() );
			Array.prototype.push.apply( possibleTargetLanguages, mw.uls.getPreviousLanguages() );
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
			// Code should not be a language in which page exists.
			// Also, it should be a known language for ULS
			( language ) => language !== pageLanguage &&
				!pageInLanguageExists( language ) &&
				language !== $.uls.data.getAutonym( language )
		);

		return possibleTargetLanguages.length ? possibleTargetLanguages[ 0 ] : null;
	}

	if ( mw.config.get( 'wgULSLanguageSelectorV2Enabled' ) ) {
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
					getSuggestedTargetLanguage( context ? context.preferredLanguages : [] ),
					{ campaign: 'ulsaddlanguages' }
				)
			} )
		};

		EntrypointRegistry.register(
			ENTRYPOINT_TYPE.QUICK_ACTIONS,
			translateActionEntrypoint,
			ULS_MODE.CONTENT
		);

		const emptyListTranslateAction = Object.assign( {}, translateActionEntrypoint );
		emptyListTranslateAction.id = 'cx-uls-translate-page-empty-list-action';
		EntrypointRegistry.register(
			ENTRYPOINT_TYPE.EMPTY_LIST,
			emptyListTranslateAction,
			ULS_MODE.CONTENT
		);

		return;
	}

	const cxEntrypointUrl = siteMapper.getCXUrl(
		mw.config.get( 'wgTitle' ),
		null,
		sourceLanguage,
		getSuggestedTargetLanguage(),
		{ campaign: 'ulsaddlanguages' }
	);

	const translateActionItem = {
		name: 'cxTranslate',
		icon: 'add',
		text: mw.msg( 'cx-uls-translate-page-quick-action-label' ),
		href: cxEntrypointUrl
	};

	mw.uls.ActionsMenuItemsRegistry.register( translateActionItem );
}() );
