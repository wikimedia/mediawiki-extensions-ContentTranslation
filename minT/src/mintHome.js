'use strict';

const Vue = require( 'vue' );
const useState = require( './useState.js' );
const useWikipediaSites = require( './useWikipediaSites.js' );
const useMintLanguages = require( './useMintLanguages.js' );
const useRouter = require( './useRouter.js' );
const MWLanguageSelector = require( './MWLanguageSelector.vue' );
const { languageSelectorPlaceholderId } = require( './constants.js' );

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
	button.addEventListener( 'click', function () {
		const props = {
			placeholder: mw.msg( 'mint-language-selector-input-placeholder' ),
			languages: languages.value,
			allOptionEnabled: allOptionEnabled,
			onSelect: onSelectCallback
		};
		Vue.createMwApp( MWLanguageSelector, props ).mount( `#${ languageSelectorPlaceholderId }` );

		const componentPlaceholder = document.getElementById( languageSelectorPlaceholderId );
		componentPlaceholder.style.display = 'block';
	} );
};

const {
	setSourceLanguage,
	setTargetLanguage,
	sourceLanguage,
	targetLanguage
} = useState();

const { sites, fetchWikipediaSites } = useWikipediaSites();
const { mintLanguages, fetchMintTargetLanguages } = useMintLanguages();

const sourceLanguages = Vue.computed( () => {
	const mintSourceLanguages = mintLanguages.value[ targetLanguage.value ];

	return mintSourceLanguages.filter(
		( mintSourceLanguage ) =>
			sites.value.some( ( site ) => site.languageCode === mintSourceLanguage )
	);
} );
const targetLanguages = Vue.computed( () => Object.keys( mintLanguages.value ) );
const promises = [ fetchWikipediaSites(), fetchMintTargetLanguages() ];

Promise.all( promises ).then( () => {
	addLanguageButtonEventListener(
		sourceLanguageButton,
		sourceLanguages,
		setSourceLanguage,
		true
	);
} );

addLanguageButtonEventListener(
	targetLanguageButton,
	targetLanguages,
	setTargetLanguage,
	false
);

Vue.watch( targetLanguage, () => {
	targetLanguageButton.innerHTML = getAutonym( targetLanguage.value );
} );

Vue.watch( sourceLanguage, () => {
	sourceLanguageButton.innerHTML = getAutonym( sourceLanguage.value );
} );

const homeSearchInput = document.getElementById( 'mint-home-search-input' );
const { navigateToPage } = useRouter();
homeSearchInput.addEventListener( 'click', function () {
	navigateToPage( 'search' );
} );
