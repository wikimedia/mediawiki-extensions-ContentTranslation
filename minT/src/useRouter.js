'use strict';

const { getCurrentInstance, createMwApp } = require( 'vue' );
const { languageSelectorPlaceholderId, componentPlaceholderId } = require( './constants.js' );
const useUrlHelper = require( './useUrlHelper.js' );

const routes = {
	search: './SearchTopicPage.vue',
	confirm: './ConfirmTopicPage.vue',
	exploreLanguages: './ExploreLanguagesPage.vue',
	translation: './ViewTranslationPage.vue'
};

const useRouter = () => {
	const { clearURLParams } = useUrlHelper();

	const currentVueInstance = getCurrentInstance();
	const { app } = ( currentVueInstance && currentVueInstance.appContext ) || {};

	const navigateToPage = ( route, props, displayValue = 'block' ) => {
		// eslint-disable-next-line security/detect-non-literal-require
		const routeComponent = require( routes[ route ] );
		if ( app ) {
			app.unmount();
		}
		createMwApp( routeComponent, props ).mount( `#${ componentPlaceholderId }` );
		const componentPlaceholder = document.getElementById( componentPlaceholderId );
		componentPlaceholder.style.display = displayValue;
	};

	const goToHomePage = () => {
		const componentPlaceholder = document.getElementById( componentPlaceholderId );

		componentPlaceholder.style.display = 'none';
		clearURLParams();
		app.unmount();
	};

	const openLanguageSelector = ( allOptionEnabled, onSelectCallback, languages ) => {
		const MWLanguageSelector = require( './MWLanguageSelector.vue' );

		const props = {
			placeholder: mw.msg( 'mint-language-selector-input-placeholder' ),
			languages,
			allOptionEnabled: allOptionEnabled,
			onSelect: onSelectCallback
		};
		createMwApp( MWLanguageSelector, props ).mount( `#${ languageSelectorPlaceholderId }` );

		const componentPlaceholder = document.getElementById( languageSelectorPlaceholderId );
		componentPlaceholder.style.display = 'block';
	};

	const closeLanguageSelector = () => {
		const languageSelectorPlaceholder = document.getElementById(
			languageSelectorPlaceholderId
		);
		languageSelectorPlaceholder.style.display = 'none';

		app.unmount();
	};

	return { closeLanguageSelector, navigateToPage, goToHomePage, openLanguageSelector };
};

module.exports = useRouter;
