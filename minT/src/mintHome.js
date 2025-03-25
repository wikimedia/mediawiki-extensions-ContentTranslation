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
const useApi = require( './useApi.js' );
const { fetchRandomTopic } = useApi();

const { logEvent } = useEventLogging();

const actionSourceMap = {
	shared: 'external_shared_automatic_translation',
	languageselector: 'language_selector',
	articlefooter: 'article_footer'
};
const urlParams = new URLSearchParams( location.search );
const actionSourceParam = urlParams.get( 'source' ) || 'direct';
const actionSource = actionSourceMap[ actionSourceParam ] || 'direct';
logEvent( 'session_init', null, actionSource, null );

const { navigateToPage, openLanguageSelector } = useRouter();

const getAutonym = $.uls.data.getAutonym;

const sourceLanguageButton = document.getElementById( 'source-language-button' );
const targetLanguageButton = document.getElementById( 'target-language-button' );
const randomTopicButton = document.getElementById( 'ax-random-topic-button' );
// Disable the button while we load the necessary data
randomTopicButton.disabled = true;

const openPageTitle = ( pageTitle, sourceLanguageCode, axStep ) => {
	const { findOneOrFetchPage } = usePageMetadata();
	const { prepareSiteLinks } = useSiteLinksHelper();

	findOneOrFetchPage( sourceLanguageCode, pageTitle ).then( ( mediawikiPage ) => {

		// Handle the case where the mediawikiPage object is not available
		// example: /wiki/Special:AutomaticTranslation?page=tokyooooo&from=af&to=en&step=confirm
		if ( !mediawikiPage ) {
			mw.log.error( 'Error while fetching article ' + pageTitle );
			mw.notify( mw.msg( 'ax-home-error-title', pageTitle ), { type: 'error' } );
			return;
		}

		const siteLinks = prepareSiteLinks( mediawikiPage.langlinks );
		const pageResult = new PageSearchResult( {
			thumbnail: mediawikiPage.thumbnail,
			pagelanguage: sourceLanguageCode,
			title: pageTitle,
			description: mediawikiPage.description,
			order: 1,
			sourceLanguage: sourceLanguageCode,
			qid: mediawikiPage.qid,
			langlinkscount: mediawikiPage.langlinkscount,
			langlinks: siteLinks
		} );

		navigateToPage( axStep, { pageResult } );
	} );
};

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

const { sourceLanguage, targetLanguage, setSourceLanguage } = useState();
const {
	mintTargetToSourceLanguages,
	mintTargetLanguages,
	fetchMintTargetLanguages
} = useMintLanguages();

const addRandomTopicButtonEventListener = () => {
	const randomTopicFallbackLanguageCode = 'en';
	randomTopicButton.addEventListener( 'click', async () => {
		randomTopicButton.disabled = true;
		const nonLoadingContent = randomTopicButton.innerHTML;
		randomTopicButton.textContent = mw.msg( 'ax-home-random-topic-loading-label' );

		// Determine the language to fetch random topic from.
		let randomTopicLanguageCode;
		if ( sourceLanguage.value !== 'all' ) {
			// Select topic from the selected source language
			randomTopicLanguageCode = sourceLanguage.value;
		} else {
			// Select a random language.
			const possibleLanguages = mintTargetToSourceLanguages.value[ targetLanguage.value ];
			randomTopicLanguageCode =
				possibleLanguages[ Math.floor( Math.random() * possibleLanguages.length ) ];
		}

		try {
			let randomTopic = await fetchRandomTopic( randomTopicLanguageCode );

			if ( !randomTopic.length ) {
				if (
					targetLanguage.value === randomTopicFallbackLanguageCode ||
					randomTopicLanguageCode === randomTopicFallbackLanguageCode
				) {
					throw new Error( `No random topic found in ${ randomTopicLanguageCode }` );
				} else {
					// Fallback and try to select a random topic from there.
					randomTopicLanguageCode = randomTopicFallbackLanguageCode;
					randomTopic = await fetchRandomTopic( randomTopicLanguageCode );
				}
			}

			if ( randomTopic.length ) {
				// We found a topic, set the target language and open the page.
				setSourceLanguage( randomTopicLanguageCode );
				openPageTitle(
					randomTopic[ 0 ].title,
					randomTopicLanguageCode,
					'confirm'
				);
			} else {
				throw new Error( `No random topic found in ${ randomTopicLanguageCode }` );
			}
		} catch ( e ) {
			mw.log.error( 'Error while fetching random topic', e );
			mw.notify( mw.msg( 'ax-home-random-topic-error' ), { type: 'error' } );
		} finally {
			randomTopicButton.disabled = false;
			randomTopicButton.innerHTML = nonLoadingContent;
		}
	} );
	randomTopicButton.disabled = false;
};

const { onSourceLanguageUpdate, onTargetLanguageUpdate } = useLanguagesUpdate();

const { sites, fetchWikipediaSites } = useWikipediaSites();

const sourceLanguages = Vue.computed( () => {
	const mintSourceLanguages = mintTargetToSourceLanguages.value[ targetLanguage.value ];

	return mintSourceLanguages.filter(
		( mintSourceLanguage ) => sites.value.some(
			( site ) => site.languageCode === mintSourceLanguage
		)
	);
} );
const promises = [ fetchWikipediaSites(), fetchMintTargetLanguages() ];

Promise.all( promises ).then( () => {
	addLanguageButtonEventListener(
		sourceLanguageButton,
		sourceLanguages,
		onSourceLanguageUpdate.bind( null, 'mt_home' ),
		true
	);

	addRandomTopicButtonEventListener();
} );

addLanguageButtonEventListener(
	targetLanguageButton,
	mintTargetLanguages,
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
		openPageTitle( title, urlSourceLanguage, step );
	}
} );
