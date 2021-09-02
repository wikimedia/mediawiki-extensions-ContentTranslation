/*!
 * Content Translation invitation for editors while searching in mobile frontend language selector
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	var CAMPAIGN = 'mflanguagesearcher';

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
	 * Handle the matches found for the search query.
	 * Replace the default empty state of language searcher with custom one.
	 *
	 * @param {string[]} results
	 * @param {HTMLElement} noResultsContainer
	 */
	function onLanguageMatch( results, noResultsContainer ) {
		var languageIndex, invitationElement, noResultsMsgElement,
			languageButtons = [],
			moreButton,
			actionsElement,
			cxUrlParams = {
				campaign: CAMPAIGN,
				from: mw.config.get( 'wgContentLanguage' ),
				page: mw.config.get( 'wgTitle' ),
				sx: true
			};

		invitationElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-invite' );
		if ( !invitationElement ) {
			invitationElement = document.createElement( 'p' );
			invitationElement.classList.add(
				'cx-entrypoint-mflanguagesearcher-invite', 'empty-results-body' );
			invitationElement.textContent = mw.msg( 'cx-campaign-mflanguagesearcher-invite' );
			noResultsContainer.appendChild( invitationElement );
		} else {
			invitationElement.classList.remove( 'hidden' );
		}

		actionsElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-actions' );
		if ( !actionsElement ) {
			actionsElement = document.createElement( 'div' );
			actionsElement.classList.add( 'cx-entrypoint-mflanguagesearcher-actions' );
			noResultsContainer.appendChild( actionsElement );
		} else {
			actionsElement.classList.remove( 'hidden' );
			// Empty it
			while ( actionsElement.firstChild ) {
				actionsElement.removeChild( actionsElement.firstChild );
			}
		}

		for ( languageIndex = 0; languageIndex < results.length; languageIndex++ ) {
			cxUrlParams.to = results[ languageIndex ];
			languageButtons.push( new OO.ui.ButtonWidget( {
				label: $.uls.data.getAutonym( results[ languageIndex ] ),
				icon: 'add',
				href: mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ),
				target: '_blank',
				framed: false,
				classes: [ 'cx-entrypoint-mflanguagesearcher-ctabtn' ]
			} )
			);
			if ( languageIndex >= 1 ) {
				// We are showing maximum two results
				break;
			}
		}

		noResultsMsgElement = noResultsContainer.querySelector( '.empty-results-body' );
		noResultsMsgElement.classList.add( 'hidden' );

		for ( languageIndex = 0; languageIndex < languageButtons.length; languageIndex++ ) {
			actionsElement.appendChild( languageButtons[ languageIndex ].$element[ 0 ] );
		}
		moreButton = new OO.ui.ButtonWidget( {
			icon: 'ellipsis',
			href: mw.util.getUrl( 'Special:ContentTranslation', cxUrlParams ),
			target: '_blank',
			framed: false,
			classes: [ 'cx-entrypoint-mflanguagesearcher-ctabtn-more' ]
		} );
		actionsElement.appendChild( moreButton.$element[ 0 ] );
	}

	/**
	 * If no matches found for the search query, restore
	 * the rendering to original state
	 *
	 * @param {HTMLElement} noResultsContainer
	 */
	function onNoLanguageMatch( noResultsContainer ) {
		var noResultsMsgElement, invitationElement, actionsElement;

		invitationElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-invite' );
		if ( invitationElement ) {
			invitationElement.classList.add( 'hidden' );
		}
		noResultsMsgElement = noResultsContainer.querySelector( '.empty-results-body' );
		noResultsMsgElement.classList.remove( 'hidden' );

		actionsElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-actions' );
		if ( actionsElement ) {
			actionsElement.classList.add( 'hidden' );
		}
	}

	/**
	 * @param {string} searchQuery
	 * @param {HTMLElement} noResultsContainer
	 */
	function showTranslationCTA( searchQuery, noResultsContainer ) {
		searchWithAPI( searchQuery ).then( function ( results ) {
			var matches, enabledTargets = mw.config.get( 'wgContentTranslationMFLanguageSearchEntrypointTargetLanguages' );

			matches = results.filter( function ( code ) {
				return enabledTargets.indexOf( code ) >= 0;
			} );
			if ( !matches.length ) {
				onNoLanguageMatch( noResultsContainer );
			} else {
				onLanguageMatch( matches, noResultsContainer );
			}
		} );
	}

	mw.hook( 'mobileFrontend.languageSearcher.noresults' ).add( showTranslationCTA );

}() );
