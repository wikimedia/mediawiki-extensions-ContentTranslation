'use strict';

const { getCurrentInstance, createMwApp } = require( 'vue' );
const { homeContainerId, languageSelectorPlaceholderId, componentPlaceholderId } = require( './constants.js' );
const useUrlHelper = require( './useUrlHelper.js' );

const routes = {
	search: './SearchTopicPage.vue',
	confirm: './ConfirmTopicPage.vue',
	exploreLanguages: './ExploreLanguagesPage.vue',
	translation: './ViewTranslationPage.vue'
};

const setElementDisplay = ( id, value ) => {
	const homeContainer = document.getElementById( id );
	homeContainer.style.display = value;
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

		setElementDisplay( homeContainerId, 'none' );
		setElementDisplay( componentPlaceholderId, displayValue );
	};

	const goToHomePage = () => {
		setElementDisplay( homeContainerId, 'block' );
		setElementDisplay( componentPlaceholderId, 'none' );

		clearURLParams();
		app.unmount();
	};

	const openLanguageSelector = ( allOptionEnabled, onSelectCallback, languages, step ) => {
		const MWLanguageSelector = require( './MWLanguageSelector.vue' );

		const props = {
			placeholder: mw.msg( 'mint-language-selector-input-placeholder' ),
			languages,
			allOptionEnabled: allOptionEnabled,
			onSelect: onSelectCallback,
			previousStep: step
		};
		createMwApp( MWLanguageSelector, props ).mount( `#${ languageSelectorPlaceholderId }` );

		setElementDisplay( homeContainerId, 'none' );
		setElementDisplay( componentPlaceholderId, 'none' );
		setElementDisplay( languageSelectorPlaceholderId, 'block' );
	};

	const closeLanguageSelector = ( previousStep ) => {
		if ( previousStep === 'home' ) {
			setElementDisplay( homeContainerId, 'block' );
		} else {
			setElementDisplay( componentPlaceholderId, 'block' );
		}
		setElementDisplay( languageSelectorPlaceholderId, 'none' );

		app.unmount();
	};

	return { closeLanguageSelector, navigateToPage, goToHomePage, openLanguageSelector };
};

module.exports = useRouter;
