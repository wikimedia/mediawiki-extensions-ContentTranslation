const sitematrix = require( './sitematrix.json' );

( function () {
	let entrypointRendered = false;
	const siteMapper = new mw.cx.SiteMapper();

	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @return {string|null}
	 */
	const getSXMissingLanguagesText = ( missingRelevantLanguages ) => {
		const missingRelevantLanguagesCount = Object.keys( missingRelevantLanguages ).length;
		if ( missingRelevantLanguagesCount === 1 ) {
			return mw.message(
				'cx-uls-relevant-languages-banner-text-single-missing',
				$.uls.data.getAutonym( missingRelevantLanguages[ 0 ] )
			).parse();
		} else {
			return mw.message(
				'cx-uls-relevant-languages-banner-text-multiple-missing',
				$.uls.data.getAutonym( missingRelevantLanguages[ 0 ] ),
				$.uls.data.getAutonym( missingRelevantLanguages[ 1 ] )
			).parse();
		}
	};

	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @return {HTMLDivElement}
	 */
	const createPanelTextElement = ( missingRelevantLanguages ) => {
		const missingLanguagesPanelTextElement = document.createElement( 'div' );
		missingLanguagesPanelTextElement.className = 'cx-uls-relevant-languages-banner__text';
		missingLanguagesPanelTextElement.innerHTML = getSXMissingLanguagesText( missingRelevantLanguages );

		return missingLanguagesPanelTextElement;
	};

	/**
	 * @return {HTMLSpanElement}
	 */
	const createArrowIcon = () => {
		const span = document.createElement( 'span' );
		span.className = 'cx-uls-relevant-languages-banner__icon mw-ui-icon';
		return span;
	};

	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @param {Object} uls The ULS object
	 * @return {HTMLDivElement}
	 */
	const createMissingLanguagesPanel = ( missingRelevantLanguages, uls ) => {
		const missingLanguagesPanel = document.createElement( 'div' );
		const missingLanguagesPanelText = createPanelTextElement( missingRelevantLanguages );
		const missingLanguagesPanelIcon = createArrowIcon();

		missingLanguagesPanel.className = 'cx-uls-relevant-languages-banner';
		missingLanguagesPanel.appendChild( missingLanguagesPanelText );
		missingLanguagesPanel.appendChild( missingLanguagesPanelIcon );

		missingLanguagesPanel.addEventListener( 'click', () => {
			const Vue = require( 'vue' );
			const CxUlsEntrypoint = require( './ext.cx.entrypoints.uls.relevantlanguages/CxUlsEntrypoint.vue' );
			const position = uls.position(), width = uls.$menu.width();
			uls.hide();

			const panel = document.createElement( 'div' );
			panel.className = 'cx-uls-entrypoint__panel-container notheme skin-invert';
			// Copy the positioning from parent ULS Menu
			Object.keys( position ).forEach( ( property ) => {
				panel.style[ property ] = position[ property ] + 'px';
			} );
			panel.style.width = width + 'px';
			panel.style.zIndex = uls.$menu.css( 'z-index' );
			panel.style.position = uls.$menu.css( 'position' );
			document.body.appendChild( panel );

			Vue.createMwApp( CxUlsEntrypoint, {
				languages: missingRelevantLanguages,
				onClose: uls.show.bind( uls )
			} ).mount( panel );
		} );

		return missingLanguagesPanel;
	};

	mw.hook( 'mw.uls.compact_language_links.open' ).add(
		( $trigger ) => {
			if ( entrypointRendered ) {
				return;
			}
			const uls = $trigger.data( 'uls' );
			// Remove duplicates.
			let frequentLanguages = [ ...new Set( mw.uls.getFrequentLanguageList() ) ];
			// Remove current language.
			frequentLanguages = frequentLanguages.filter(
				( language ) => language !== mw.config.get( 'wgContentLanguage' )
			);
			const existingLanguages = Object.keys( uls.languages );

			if ( !existingLanguages.length ) {
				return;
			}

			/**
			 * This variable stores an array of language codes. These language codes are
			 * the content languages of the "relevant" wikis, from which the current article is missing.
			 *
			 * @type {string[]}
			 */
			const missingRelevantLanguages = [];

			for ( const frequentLanguage of frequentLanguages ) {
				const wikiDomainCode = siteMapper.getWikiDomainCode( frequentLanguage );

				if ( sitematrix.indexOf( wikiDomainCode ) < 0 ) {
					continue;
				}

				/**
				 * The content language of the corresponding wiki for the current "relevant" language
				 * This can be different from the "relevant" language.
				 * E.g.
				 * - for "no" language code, "wikiDomainCode" will also be "no", but the content
				 * language for this wiki is "nb".
				 * - for "nb" language code, "wikiDomainCode" will be "no", and the content
				 * language for this wiki is also "nb".
				 *
				 * @type {string}
				 */
				const wikiContentLanguage = siteMapper.getLanguageCodeForWikiDomain( wikiDomainCode );

				// skip if the current article already exists for the corresponding content language
				if ( existingLanguages.indexOf( wikiContentLanguage ) > -1 ) {
					continue;
				}

				// skip if the content language already exists inside "missingRelevantLanguages" array
				if ( missingRelevantLanguages.indexOf( wikiContentLanguage ) > -1 ) {
					continue;
				}

				missingRelevantLanguages.push( wikiContentLanguage );
			}

			if ( !missingRelevantLanguages.length ) {
				return;
			}
			// CX ULS relevant missing languages entrypoint:
			const missingLanguagesPanel = createMissingLanguagesPanel( missingRelevantLanguages, uls );
			uls.$resultsView.before( missingLanguagesPanel );
			uls.$languageFilter.on( 'input', ( event ) => {
				// when user types inside the search input, add ".cx-uls-entrypoint--hidden" class to the
				// entrypoint banner element the CSS rule that hides the entrypoint when this class is applied,
				// lives inside CxUlsEntrypoint.vue file
				if ( event.currentTarget.value ) {
					missingLanguagesPanel.classList.add( 'cx-uls-entrypoint--hidden' );
				} else {
					// when user empties the search input, remove the ".cx-uls-entrypoint--hidden" class (if exists),
					// so that the entrypoint is visible again.
					missingLanguagesPanel.classList.remove( 'cx-uls-entrypoint--hidden' );
				}
			} );
			entrypointRendered = true;
		}
	);

}() );
