/*!
 * Content Translation invitation for editors while searching in mobile frontend language selector
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const CAMPAIGN = 'mflanguagesearcher';

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
		} ).then( ( result ) => Object.keys( result.languagesearch || {} ) );
	}

	function createLanguageButton( { label = '', iconClass, href, className } ) {
		const classes = [
			'cdx-button',
			'cdx-button--fake-button',
			'cdx-button--fake-button--enabled',
			'cdx-button--action-default',
			'cdx-button--weight-quiet',
			className
		];
		const iconClasses = [
			'cdx-button__icon',
			iconClass
		];
		const buttonHtml = `
			<a
  				class="${ classes.join( ' ' ) }"
  				href="${ href }"
			>
				<span
					class="${ iconClasses.join( ' ' ) }"
					aria-hidden="true"
				></span>
				${ label }
			</a>`;

		const container = document.createElement( 'div' );
		container.innerHTML = buttonHtml.trim();

		return container.firstElementChild;
	}

	/**
	 * Handle the matches found for the search query.
	 * Replace the default empty state of language searcher with custom one.
	 *
	 * @param {string[]} results
	 * @param {HTMLElement} noResultsContainer
	 */
	function onLanguageMatch( results, noResultsContainer ) {
		const languageButtons = [],
			sitemapper = new mw.cx.SiteMapper();

		let invitationElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-invite' );
		if ( !invitationElement ) {
			invitationElement = document.createElement( 'p' );
			invitationElement.classList.add(
				'cx-entrypoint-mflanguagesearcher-invite',
				'empty-results-body'
			);
			invitationElement.textContent = mw.msg( 'cx-campaign-mflanguagesearcher-invite' );
			noResultsContainer.appendChild( invitationElement );
		} else {
			invitationElement.classList.remove( 'hidden' );
		}

		let actionsElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-actions' );
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

		let cxUrl, languageIndex;
		for ( languageIndex = 0; languageIndex < results.length; languageIndex++ ) {
			cxUrl = sitemapper.getCXUrl(
				mw.config.get( 'wgPageName' ),
				null,
				mw.config.get( 'wgContentLanguage' ),
				results[ languageIndex ],
				{ campaign: CAMPAIGN, sx: true }
			);
			languageButtons.push( {
				label: $.uls.data.getAutonym( results[ languageIndex ] ),
				href: cxUrl,
				className: 'cx-entrypoint-mflanguagesearcher-cta-btn',
				iconClass: 'cx-entrypoint-mflanguagesearcher-cta-btn__icon'
			} );
			if ( languageIndex >= 1 ) {
				// We are showing maximum two results
				break;
			}
		}

		const noResultsMsgElement = noResultsContainer.querySelector( '.empty-results-body' );
		noResultsMsgElement.classList.add( 'hidden' );

		for ( languageIndex = 0; languageIndex < languageButtons.length; languageIndex++ ) {
			actionsElement.appendChild( createLanguageButton( languageButtons[ languageIndex ] ) );
		}

		cxUrl = mw.util.getUrl( 'Special:ContentTranslation', {
			campaign: CAMPAIGN,
			from: mw.config.get( 'wgContentLanguage' ),
			page: mw.config.get( 'wgPageName' ),
			sx: true
		} );
		const moreButton = createLanguageButton( {
			href: cxUrl,
			className: 'cx-entrypoint-mflanguagesearcher-cta-btn-more',
			iconClass: 'cx-entrypoint-mflanguagesearcher-cta-btn-more__icon'
		} );
		actionsElement.appendChild( moreButton );
	}

	/**
	 * If no matches found for the search query, restore
	 * the rendering to original state
	 *
	 * @param {HTMLElement} noResultsContainer
	 */
	function onNoLanguageMatch( noResultsContainer ) {
		const invitationElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-invite' );
		if ( invitationElement ) {
			invitationElement.classList.add( 'hidden' );
		}
		const noResultsMsgElement = noResultsContainer.querySelector( '.empty-results-body' );
		noResultsMsgElement.classList.remove( 'hidden' );

		const actionsElement = noResultsContainer.querySelector( '.cx-entrypoint-mflanguagesearcher-actions' );
		if ( actionsElement ) {
			actionsElement.classList.add( 'hidden' );
		}
	}

	/**
	 * @param {string} searchQuery
	 * @param {HTMLElement} noResultsContainer
	 */
	function showTranslationCTA( searchQuery, noResultsContainer ) {
		searchWithAPI( searchQuery ).then( ( results ) => {
			const enabledTargets = mw.config.get( 'wgSectionTranslationTargetLanguages' );

			const matches = results.filter(
				( code ) => enabledTargets.includes( code ) &&
					code !== mw.config.get( 'wgContentLanguage' )
			);
			if ( !matches.length ) {
				onNoLanguageMatch( noResultsContainer );
			} else {
				onLanguageMatch( matches, noResultsContainer );
			}
		} );
	}

	mw.hook( 'mobileFrontend.languageSearcher.noresults' ).add( showTranslationCTA );

}() );
