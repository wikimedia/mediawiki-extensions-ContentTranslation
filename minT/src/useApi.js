'use strict';

const siteMapper = new mw.cx.SiteMapper();

/**
 * Example request: https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=sitelinks&ids=Q2537
 *
 * @param {string} ids
 * @return {Promise<{ id: string, sitelinks: { site: string, title: string }[] }[]>}
 */
const getWikidataSitelinks = async ( ids ) => {
	const params = {
		action: 'wbgetentities',
		props: 'sitelinks',
		format: 'json',
		ids,
		type: 'item'
	};

	const api = new mw.ForeignApi( 'https://www.wikidata.org/w/api.php', { anonymous: true } );

	const response = await api.get( params );

	/**
	 * @type {{ id: string, sitelinks: object }[]}
	 */
	const entities = Object.values( response.entities || {} );

	return entities.map( ( entity ) => ( {
		id: entity.id,
		sitelinks: Object.values( entity.sitelinks )
	} ) );
};

/**
 * Example request: https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Moon&format=json&language=el&type=item
 *
 * @param {string} query
 * @param {string} targetLanguage target language code
 * @return {Promise<{ id: string, order: number, matchLanguage: string }[]>}
 */
const searchEntities = async ( query, targetLanguage ) => {
	const api = new mw.ForeignApi( 'https://www.wikidata.org/w/api.php', { anonymous: true } );
	const params = {
		action: 'wbsearchentities',
		search: query,
		format: 'json',
		language: targetLanguage,
		type: 'item'
	};
	const response = await api.get( params );

	return response.search.map( ( result, index ) => ( {
		id: result.id,
		order: index + 1,
		matchLanguage: result.match.language
	} ) );
};

/**
 * Example request: https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&formatversion=2&piprop=thumbnail%7Cname&pithumbsize=120&redirects=true&titles=Moon&prop=info%7Cpageimages%7Cdescription%7Clanglinkscount%7Cpageprops
 *
 * @param {string} language
 * @param {string} titles
 * @param {boolean} includeLangLinks
 * @return {jQuery.Promise}
 */
const fetchPageMetadata = ( language, titles, includeLangLinks = false ) => {
	const api = siteMapper.getApi( language );
	let props = 'info|pageimages|description|langlinkscount|pageprops';
	const params = {
		action: 'query',
		format: 'json',
		formatversion: 2,
		piprop: 'thumbnail|name',
		pithumbsize: 120,
		origin: '*',
		redirects: true,
		titles
	};

	if ( includeLangLinks ) {
		props += '|langlinks';
		params.lllimit = 'max';
	}

	params.prop = props;

	return api.get( params );
};

const fetchSiteMatrix = async () => {
	const myApi = new mw.ForeignApi( 'https://en.wikipedia.org/w/api.php', { anonymous: true } );
	const myParams = {
		action: 'sitematrix',
		format: 'json',
		formatversion: 2,
		origin: '*'
	};
	const response = await myApi.get( myParams );
	const responseSites = [];

	for ( const key in response.sitematrix ) {
		// Check if the key is numeric. Numeric keys contain wiki sites, but the response
		// also contains other keys like "count" and "specials", that we don't need
		if ( !isNaN( key ) ) {
			responseSites.push( response.sitematrix[ key ] );
		}
	}

	return responseSites;
};

/**
 * @return {Promise<{}>} target language to source languages map: { "en": ["de", "el"] }
 */
const fetchMintLanguages = async () => {
	const targetToSourceLanguages = {};

	try {
		const response = await fetch( 'https://cxserver.wikimedia.org/v2/list/mt' );
		const languageData = await response.json();
		/**
		 * { "de": ["en"], "en": ["de", "el"], ... }
		 */
		const sourceToTargetLanguages = languageData.MinT;

		for ( const sourceLanguage in sourceToTargetLanguages ) {
			const targetLanguages = sourceToTargetLanguages[ sourceLanguage ];

			// Iterate through each target language in the array
			for ( let i = 0; i < targetLanguages.length; i++ ) {
				const targetLanguage = targetLanguages[ i ];

				// If the target language key doesn't exist in the inverted object, create it
				if ( !targetToSourceLanguages[ targetLanguage ] ) {
					targetToSourceLanguages[ targetLanguage ] = [];
				}

				// Add the source language to the array of source languages for this target language
				targetToSourceLanguages[ targetLanguage ].push( sourceLanguage );
			}
		}
	} catch ( error ) {
		mw.log.error( 'Error while fetching MinT supported languages', error );
	}

	return targetToSourceLanguages;
};

/**
 * E.g. https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Moon&prop=text&section=0&disabletoc=1&formatversion=2
 *
 * @param {string} language
 * @param {string} title
 * @return {Promise<string>}
 */
const fetchLeadSectionContent = ( language, title ) => {
	const api = new mw.ForeignApi( `https://${ language }.wikipedia.org/w/api.php`, { anonymous: true } );
	const params = {
		action: 'parse',
		format: 'json',
		page: title,
		formatversion: 2,
		origin: '*',
		prop: 'text',
		section: 0
	};

	return api.get( params ).then( ( response ) => response.parse.text );
};

const translate = ( content, sourceLanguage, targetLanguage, token ) => {
	const relativeUrl = `https://cxserver.wikimedia.org/v2/translate/${ sourceLanguage }/${ targetLanguage }/MinT`;

	return fetch( relativeUrl, {
		headers: { 'Content-Type': 'application/json', Authorization: token },
		method: 'POST',
		body: JSON.stringify( { html: content } )
	} )
		.then( ( response ) => response.json() )
		.then( ( data ) => data.contents )
		.catch( ( error ) => Promise.reject( error ) );
};

/**
 * E.g. https://en.wikipedia.org/w/rest.php/v1/page/Moon/html
 * @param {string} language
 * @param {string} title
 * @return {Promise<string>}
 */
const fetchPageContent = ( language, title ) => {
	const mwApi = new mw.ForeignApi( `https://${ language }.wikipedia.org/w/api.php`, { anonymous: true } );
	const api = new mw.ForeignRest( `https://${ language }.wikipedia.org/w/rest.php/v1`, mwApi, { anonymous: true } );

	return api.get( `/page/${ encodeURIComponent( title ) }/html` );
};

/**
 * Used inside "ExploreLanguages" SFC to fetch the sitelinks for the selected articles, for all
 * available languages, along with the section titles for each language.
 *
 * @param {string} qid
 * @return {Promise<*>}
 */
const fetchDenseArticles = async ( qid ) => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: 2,
		list: 'automatictranslationdenselanguages',
		'section-titles': true,
		qid
	};

	const api = new mw.Api();

	return api.get( params ).then(
		( response ) => response.query.automatictranslationdenselanguages.sizeInfo
	);
};

const useApi = () => ( {
	fetchPageMetadata,
	fetchDenseArticles,
	searchEntities,
	getWikidataSitelinks,
	fetchSiteMatrix,
	fetchMintLanguages,
	fetchLeadSectionContent,
	translate,
	fetchPageContent
} );

module.exports = useApi;
