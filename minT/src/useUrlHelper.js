'use strict';

const useUrlHelper = () => {
	/**
	 * @return {{targetLanguage: string, step: string, page: string, displayLanguage: string, sourceLanguage: string}}
	 */
	const getURLParams = () => {
		const currentUrl = new URL( location.href );
		const searchParams = currentUrl.searchParams;

		return {
			page: searchParams.get( 'page' ),
			sourceLanguage: searchParams.get( 'from' ),
			targetLanguage: searchParams.get( 'to' ),
			displayLanguage: searchParams.get( 'display' ),
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
		searchParams.set( 'page', pageResult.title );
		searchParams.set( 'from', pageResult.sourceLanguage );
		searchParams.set( 'to', targetLanguage );
		searchParams.set( 'display', pageResult.language );
		searchParams.set( 'step', step );

		currentUrl.search = searchParams.toString();

		history.replaceState( null, '', currentUrl.toString() );
	};

	return { setURLParams, getURLParams };
};

module.exports = useUrlHelper;
