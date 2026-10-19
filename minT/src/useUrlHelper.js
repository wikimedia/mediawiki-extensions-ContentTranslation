'use strict';

const PageSearchResult = require( './pageSearchResult.js' );

/**
 * Language codes go into API hostnames and the DOM. Reject all codes that are not
 * safe language codes. This is the same rule as LanguageNameUtils::isValidBuiltInCode.
 *
 * @param {string|null} code
 * @return {string|null}
 */
const getValidLanguageCode = ( code ) => /^[a-z0-9-]{2,}$/i.test( code ) ? code : null;

const useUrlHelper = () => {
	/**
	 * @return {{page: string, sourceLanguage: string|null, targetLanguage: string|null, step: string}}
	 */
	const getURLParams = () => {
		const currentUrl = new URL( location.href );
		const searchParams = currentUrl.searchParams;

		return {
			page: searchParams.get( 'page' ),
			sourceLanguage: getValidLanguageCode( searchParams.get( 'from' ) ),
			targetLanguage: getValidLanguageCode( searchParams.get( 'to' ) ),
			step: searchParams.get( 'step' )
		};
	};

	const clearURLParams = () => {
		const currentUrl = new URL( location.href );
		currentUrl.search = '';
		history.replaceState( null, '', currentUrl.toString() );
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

	return { setURLParams, getURLParams, clearURLParams };
};

module.exports = useUrlHelper;
