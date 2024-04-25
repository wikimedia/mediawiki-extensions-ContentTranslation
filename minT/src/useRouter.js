'use strict';

const { getCurrentInstance, createMwApp } = require( 'vue' );
const { languageSelectorPlaceholderId, componentPlaceholderId } = require( './constants.js' );

const routes = {
	search: './SearchTopicPage.vue'
};

const useRouter = () => {
	const currentVueInstance = getCurrentInstance();
	const { app } = ( currentVueInstance && currentVueInstance.appContext ) || {};

	const navigateToPage = ( route, props ) => {
		// eslint-disable-next-line security/detect-non-literal-require
		const routeComponent = require( routes[ route ] );
		if ( app ) {
			app.unmount();
		}
		createMwApp( routeComponent, props ).mount( `#${ componentPlaceholderId }` );
		const componentPlaceholder = document.getElementById( componentPlaceholderId );
		componentPlaceholder.style.display = 'block';
	};

	const goToHomePage = () => {
		const componentPlaceholder = document.getElementById( componentPlaceholderId );

		componentPlaceholder.style.display = 'none';
		app.unmount();
	};

	const closeLanguageSelector = () => {
		const languageSelectorPlaceholder = document.getElementById(
			languageSelectorPlaceholderId
		);
		languageSelectorPlaceholder.style.display = 'none';

		app.unmount();
	};

	return { closeLanguageSelector, navigateToPage, goToHomePage };
};

module.exports = useRouter;
