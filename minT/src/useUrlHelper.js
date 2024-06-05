'use strict';

const useUrlHelper = () => {
	/**
	 * @return {{page: string, sourceLanguage: string, targetLanguage: string, step: string}}
	 */
	const getURLParams = () => {
		const currentUrl = new URL( location.href );
		const searchParams = currentUrl.searchParams;

		return {
			page: searchParams.get( 'page' ),
			sourceLanguage: searchParams.get( 'from' ),
			targetLanguage: searchParams.get( 'to' ),
			step: searchParams.get( 'step' )
		};
	};

	/**
	 * @param {PageSearchResult} pageResult
	 * @param {string} targetLanguage
	 * @param {"confirm"|"translation"} step
	 */
	const setURLParams = ( pageResult, targetLanguage, step ) => {
		const currentUrl = new URL( location.href );
		const searchParams = currentUrl.searchParams;

		// Add the new parameter and its value
		searchParams.set( 'page', pageResult.sourceTitle );
		searchParams.set( 'from', pageResult.sourceLanguage );
		searchParams.set( 'to', targetLanguage );
		searchParams.set( 'step', step );

		currentUrl.search = searchParams.toString();

		history.replaceState( null, '', currentUrl.toString() );
	};

	return { setURLParams, getURLParams };
};

module.exports = useUrlHelper;
