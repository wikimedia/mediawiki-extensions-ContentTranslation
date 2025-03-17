'use strict';

const Vue = require( 'vue' );
const useState = require( './useState.js' );
const useWikipediaSites = require( './useWikipediaSites.js' );
const useMintLanguages = require( './useMintLanguages.js' );
const useRouter = require( './useRouter.js' );
const useUrlHelper = require( './useUrlHelper.js' );
const PageSearchResult = require( './pageSearchResult.js' );
const usePageMetadata = require( './usePageMetadata.js' );
const useSiteLinksHelper = require( './useSiteLinksHelper.js' );
const useEventLogging = require( './useEventLogging.js' );
const useLanguagesUpdate = require( './useLanguagesUpdate.js' );

const { logEvent } = useEventLogging();

// TODO: Use the proper action source for different entrypoints
const urlParams = new URLSearchParams( location.search );
let actionSource = 'mt_home';
if ( urlParams.has( 'shared' ) ) {
	actionSource = 'external_shared_automatic_translation';
}
logEvent( 'session_init', null, actionSource, null );

const { navigateToPage, openLanguageSelector } = useRouter();

const getAutonym = $.uls.data.getAutonym;

const sourceLanguageButton = document.getElementById( 'source-language-button' );
const targetLanguageButton = document.getElementById( 'target-language-button' );

/**
 * @param {HTMLElement} button
 * @param {ComputedRef<string[]>} languages
 * @param {Function} onSelectCallback
 * @param {boolean} allOptionEnabled
 */
const addLanguageButtonEventListener = (
	button,
	languages,
	onSelectCallback,
	allOptionEnabled = false
) => {
	button.addEventListener( 'click', () => {
		openLanguageSelector( allOptionEnabled, onSelectCallback, languages.value, 'home' );
	} );
};

const { sourceLanguage, targetLanguage } = useState();
const { onSourceLanguageUpdate, onTargetLanguageUpdate } = useLanguagesUpdate();

const { sites, fetchWikipediaSites } = useWikipediaSites();
const { mintLanguages, fetchMintTargetLanguages } = useMintLanguages();

const sourceLanguages = Vue.computed( () => {
	const mintSourceLanguages = mintLanguages.value[ targetLanguage.value ];

	return mintSourceLanguages.filter(
		( mintSourceLanguage ) => sites.value.some(
			( site ) => site.languageCode === mintSourceLanguage
		)
	);
} );
const targetLanguages = Vue.computed( () => Object.keys( mintLanguages.value ) );
const promises = [ fetchWikipediaSites(), fetchMintTargetLanguages() ];

Promise.all( promises ).then( () => {
	addLanguageButtonEventListener(
		sourceLanguageButton,
		sourceLanguages,
		onSourceLanguageUpdate.bind( null, 'mt_home' ),
		true
	);
} );

addLanguageButtonEventListener(
	targetLanguageButton,
	targetLanguages,
	onTargetLanguageUpdate.bind( null, 'mt_home' ),
	false
);

Vue.watch( targetLanguage, () => {
	targetLanguageButton.innerHTML = getAutonym( targetLanguage.value );
} );

Vue.watch( sourceLanguage, () => {
	sourceLanguageButton.innerHTML = getAutonym( sourceLanguage.value );
} );

const homeSearchInput = document.getElementById( 'mint-home-search-input' );
homeSearchInput.addEventListener( 'click', () => {
	navigateToPage( 'search' );
} );

const { getURLParams } = useUrlHelper();
const {
	page: title,
	sourceLanguage: urlSourceLanguage,
	step
} = getURLParams();

// once sites are loaded, redirect if loaded
Vue.watch( sites, () => {
	if ( !!title && !!step ) {
		const { findOneOrFetchPage } = usePageMetadata();
		const { prepareSiteLinks } = useSiteLinksHelper();

		findOneOrFetchPage( urlSourceLanguage, title ).then( ( mediawikiPage ) => {
			const siteLinks = prepareSiteLinks( mediawikiPage.langlinks );
			const pageResult = new PageSearchResult( {
				thumbnail: mediawikiPage.thumbnail,
				pagelanguage: urlSourceLanguage,
				title,
				description: mediawikiPage.description,
				order: 1,
				sourceLanguage: sourceLanguage.value,
				qid: mediawikiPage.qid,
				langlinkscount: mediawikiPage.langlinkscount,
				langlinks: siteLinks
			} );

			navigateToPage( step, { pageResult } );
		} );
	}
} );
