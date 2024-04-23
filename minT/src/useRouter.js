'use strict';

const { getCurrentInstance } = require( 'vue' );
const { languageSelectorPlaceholderId } = require( './constants.js' );

const useRouter = () => {
	const { app } = getCurrentInstance().appContext;

	const closeLanguageSelector = () => {

		const languageSelectorPlaceholder = document.getElementById(
			languageSelectorPlaceholderId
		);
		languageSelectorPlaceholder.style.display = 'none';

		app.unmount();
	};

	return { closeLanguageSelector };
};

module.exports = useRouter;
