const Vue = require( 'vue' );
const NewByTranslationPopup = require( './NewByTranslationPopup.vue' );

const entrypointContainer = document.createElement( 'div' );
entrypointContainer.className = 'cx-entrypoint-newbytranslation-container';

document.body.appendChild( entrypointContainer );
const siteMapper = new mw.cx.SiteMapper();
const targetLanguage = siteMapper.getCurrentWikiLanguageCode();

const getCandidateSourceLanguages = () => {
	let candidates = [ navigator.language ];
	candidates = candidates.concat( navigator.languages );
	if ( mw.uls ) {
		candidates = candidates.concat( mw.uls.getPreviousLanguages() );
	}
	candidates = candidates
		// Remove country codes
		.map( ( lang ) => lang && lang.split( '-' )[ 0 ] || null )
		// Remove target language and duplicates
		.filter(
			( lang, index, self ) => lang && lang !== targetLanguage && self.indexOf( lang ) === index
		);

	return candidates.splice( 0, 5 );
};

const getSourceSuggestions = () => {
	const targetTitle = mw.config.get( 'wgTitle' );
	const candidateSourceLanguages = getCandidateSourceLanguages();

	const sourceSuggestionApi = siteMapper.getCXServerUrl(
		'/suggest/source/$title/$to?sourcelanguages=$from',
		{
			$title: targetTitle,
			$to: targetLanguage,
			$from: candidateSourceLanguages.join( ',' )
		} );

	return $.get( sourceSuggestionApi ).then( ( response ) => response.suggestions || [] );
};

getSourceSuggestions().then( ( suggestions ) => {
	const shownOnce = mw.config.get( 'wgContentTranslationNewByTranslationShown' ) === 'true';

	const isExistingTranslator = mw.config.get( 'wgContentTranslationExistingTranslator' );
	const shouldShowGenericInvite = !isExistingTranslator && !shownOnce;

	if ( !suggestions.length && !shouldShowGenericInvite ) {
		// No suggestion. User is existing translator.
		// or the invitation was shown once. Nothing to do.
		return;
	}

	const suggestion = suggestions.length ? suggestions[ 0 ] : null;
	Vue.createMwApp( NewByTranslationPopup, {
		suggestion,
		targetLanguage
	} ).mount( entrypointContainer );

	if ( !shownOnce ) {
		const api = new mw.Api();
		// Mark that the user saw invitation once
		api.postWithToken( 'csrf', {
			action: 'globalpreferences',
			optionname: 'cx_campaign_newarticle_shown',
			optionvalue: 'true'
		} ).then( ( res ) => {
			// Should we care?
			if ( res.error ) {
				mw.log.error( res.error );
			}
		} );
	}
} );
