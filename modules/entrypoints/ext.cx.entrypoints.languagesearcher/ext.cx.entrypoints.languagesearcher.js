/*!
 * Content Translation invitation for editors while searching in mobile frontend language selector
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const siteMapper = new mw.cx.SiteMapper();
	/**
	 * Search the query string for a valid language
	 *
	 * @param {string} query
	 * @return {Promise<string[]>}
	 */
	function searchWithAPI( query ) {
		return new mw.Api().get( {
			action: 'languagesearch',
			format: 'json',
			origin: '*',
			search: query,
			formatversion: 2
		} ).then( function ( result ) {
			return Object.keys( result.languagesearch || {} );
		} );
	}

	/**
	 * Copied from "minT/useApi.js" file
	 * @return {Promise<{}>} target language to source languages map: { "en": ["de", "el"] }
	 */
	const fetchMintLanguages = () => {
		const targetToSourceLanguages = {};

		return fetch( 'https://cxserver.wikimedia.org/v2/list/mt' )
			.then( ( response ) => response.json() )
			.then( ( languageData ) => {
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

				return targetToSourceLanguages;
			} )
			.catch( ( error ) => {
				mw.log.error( 'Error while fetching MinT supported languages', error );

				return [];
			} );
	};

	let mintLanguages = [];
	let mintLanguagesFetched = false;
	/**
	 * @return {Promise<string[]>}
	 */
	const setMinTLanguages = () => {
		if ( mintLanguagesFetched ) {
			return Promise.resolve();
		}

		return fetchMintLanguages().then( ( languageMap ) => {
			mintLanguagesFetched = true;
			mintLanguages = Object.keys( languageMap );
		} );
	};

	const getMintLanguageMatches = ( resultLanguages ) => {
		if ( !mw.config.get( 'mintEntrypointLanguages' ) ) {
			return [];
		}
		return resultLanguages.filter(
			( code ) =>
				mintLanguages.indexOf( code ) >= 0 &&
						mw.config.get( 'mintEntrypointLanguages' ).indexOf( code ) >= 0 &&
						code !== mw.config.get( 'wgContentLanguage' )
		);
	};

	const getMintURL = ( resultLanguages ) => {
		const matches = getMintLanguageMatches( resultLanguages );

		if ( !matches.length ) {
			return null;
		}

		return siteMapper.getMintUrl(
			mw.config.get( 'wgPageName' ),
			mw.config.get( 'wgContentLanguage' ),
			matches[ 0 ],
			'confirm'
		);
	};

	const getCxLanguageMatches = ( resultLanguages ) => {
		if ( !mw.config.get( 'isLanguageSearcherCXEntrypointEnabled' ) ) {
			return null;
		}
		const enabledTargets = mw.config.get( 'wgSectionTranslationTargetLanguages' );

		return resultLanguages.filter(
			( code ) => enabledTargets.indexOf( code ) >= 0 && code !== mw.config.get( 'wgContentLanguage' )
		);
	};

	/**
	 * @param {'entrypoint-banner'|'ui'} searchOrigin
	 * @return {'mffrequentlanguages'|'mflanguagesearcher'}
	 */
	const getCxCampaign = ( searchOrigin ) => {
		const campaignMap = {
			ui: 'mflanguagesearcher',
			'entrypoint-banner': 'mffrequentlanguages'
		};

		return campaignMap[ searchOrigin ];
	};

	/**
	 * @param {string[]} resultLanguages
	 * @param {'entrypoint-banner'|'ui'} searchOrigin
	 * @return {string|null}
	 */
	const getCxURL = ( resultLanguages, searchOrigin ) => {
		const matches = getCxLanguageMatches( resultLanguages );

		if ( !matches.length ) {
			return null;
		}

		return siteMapper.getCXUrl(
			mw.config.get( 'wgPageName' ),
			null,
			mw.config.get( 'wgContentLanguage' ),
			matches[ 0 ],
			{ campaign: getCxCampaign( searchOrigin ), sx: true }
		);
	};

	/**
	 * @param {HTMLElement} entrypointContainer
	 */
	const createCardContainer = ( entrypointContainer ) => {
		const Vue = require( 'vue' );
		const LanguageSearcherCardContainerComponent = require( './LanguageSearcherCardContainer.vue' );

		const defaultEntrypoints = [
			{
				className: 'cx-entrypoint-card',
				cardTitle: mw.message( 'cx-mflanguagesearcher-entrypoint-card-title' ).text(),
				cardDescription: mw.message( 'cx-mflanguagesearcher-entrypoint-card-description' ).text(),
				iconClass: 'entrypoint-card-icon--add'
			},
			{
				className: 'mint-entrypoint-card',
				cardTitle: mw.message( 'mint-mflanguagesearcher-entrypoint-card-title' ).text(),
				cardDescription: mw.message( 'mint-mflanguagesearcher-entrypoint-card-description' ).text(),
				iconClass: 'entrypoint-card-icon--robot'
			}
		];

		Vue.createMwApp( LanguageSearcherCardContainerComponent, {
			entrypoints: defaultEntrypoints
		} ).mount( entrypointContainer );
	};

	function createLanguageAutonymListContainer() {
		const container = document.createElement( 'div' );
		container.classList.add( 'cx-language-autonym-list-container' );

		return container;
	}

	function listMatchedLanguageAutonyms( noResultsContainer, resultLanguages ) {
		const cxLanguageMatches = getCxLanguageMatches( resultLanguages );
		const mintLanguageMatches = getMintLanguageMatches( resultLanguages );

		let autonymListContainer = noResultsContainer.querySelector( '.cx-language-autonym-list-container' );

		if ( !cxLanguageMatches.length && !mintLanguageMatches.length ) {
			if ( autonymListContainer ) {
				autonymListContainer.classList.add( 'hidden' );
			}

			return;
		}

		if ( !autonymListContainer ) {
			const header = noResultsContainer.querySelector( 'h1, h2, h3, h4, h5, h6' );
			autonymListContainer = createLanguageAutonymListContainer();
			header.insertAdjacentElement( 'afterend', autonymListContainer );
		}
		autonymListContainer.classList.remove( 'hidden' );

		const entrypointLanguages = [ ...new Set( [ ...cxLanguageMatches, ...mintLanguageMatches ] ) ];

		const autonyms = entrypointLanguages.slice( 0, 2 ).map( $.uls.data.getAutonym );
		const autonymElementHTMLs = autonyms.map( ( autonym ) => {
			const el = document.createElement( 'bdi' );
			el.innerText = autonym;

			return el.outerHTML;
		} );

		let content = autonymElementHTMLs.join( ', ' );
		if ( autonymElementHTMLs.length > 1 ) {
			content += '<span>...<span>';
		}

		autonymListContainer.innerHTML = content;
	}

	/**
	 * Handle the matches found for the search query.
	 * Replace the default empty state of language searcher with custom one.
	 *
	 * @param {HTMLElement} noResultsContainer
	 * @param {string[]} resultLanguages
	 * @param {'entrypoint-banner'|'ui'} searchOrigin
	 */
	function onLanguageMatch( noResultsContainer, resultLanguages, searchOrigin ) {
		listMatchedLanguageAutonyms( noResultsContainer, resultLanguages );
		let entrypointContainer = noResultsContainer.querySelector( '.entrypoint-container' );
		if ( !entrypointContainer ) {
			entrypointContainer = document.createElement( 'div' );
			entrypointContainer.classList.add( 'entrypoint-container' );
			noResultsContainer.appendChild( entrypointContainer );
		}
		let cardContainer = noResultsContainer.querySelector( '.language-searcher-card-container' );
		const activeEntrypointURLs = [
			{ className: 'cx-entrypoint-card', href: getCxURL( resultLanguages, searchOrigin ) },
			{ className: 'mint-entrypoint-card', href: getMintURL( resultLanguages ) }
		].filter( ( entrypoint ) => !!entrypoint.href );

		if ( !cardContainer ) {
			createCardContainer( entrypointContainer );
		}

		let entrypointCards = noResultsContainer.querySelectorAll( '.entrypoint-card' );
		entrypointCards = Array.from( entrypointCards );
		entrypointCards.forEach( ( entrypointCardEl ) => entrypointCardEl.classList.add( 'hidden' ) );

		activeEntrypointURLs.forEach( ( activeEntrypoint ) => {
			const activeEntrypointCard = entrypointContainer.querySelector( `.${ activeEntrypoint.className }` );
			activeEntrypointCard.classList.remove( 'hidden' );
			activeEntrypointCard.href = activeEntrypoint.href;
		} );

		cardContainer = noResultsContainer.querySelector( '.language-searcher-card-container' );
		cardContainer.classList.remove( 'hidden' );
	}

	/**
	 * If no matches found for the search query, restore
	 * the rendering to original state
	 *
	 * @param {HTMLElement} noResultsContainer
	 */
	function onNoLanguageMatch( noResultsContainer ) {
		const cardContainer = noResultsContainer.querySelector( '.language-searcher-card-container' );
		if ( cardContainer ) {
			cardContainer.classList.add( 'hidden' );
		}

		const autonymListContainer = noResultsContainer.querySelector( '.cx-language-autonym-list-container' );

		if ( autonymListContainer ) {
			autonymListContainer.classList.add( 'hidden' );
		}

	}

	/**
	 * @param {string} searchQuery
	 * @param {HTMLElement} noResultsContainer
	 * @param {'entrypoint-banner'|'ui'} searchOrigin
	 */
	function showTranslationCTA( searchQuery, noResultsContainer, searchOrigin ) {
		const promises = [ searchWithAPI( searchQuery ) ];
		if ( mw.config.get( 'mintEntrypointLanguages' ) ) {
			promises.push( setMinTLanguages() );
		}
		Promise.all( promises ).then( function ( [ results ] ) {
			if ( !results.length ) {
				onNoLanguageMatch( noResultsContainer );
			} else {
				onLanguageMatch( noResultsContainer, results, searchOrigin );
			}
		} );
	}

	mw.hook( 'mobileFrontend.languageSearcher.noresults' ).add( showTranslationCTA );

}() );
