( function () {
	/**
	 * @param {{ lang: string, autonym: string, dir: string }[]} sxMissingFrequentLanguages array of missing frequent languages
	 * @return {HTMLDivElement}
	 */
	function createPanelTextElement( sxMissingFrequentLanguages ) {
		const missingLanguagesPanelTextElement = document.createElement( 'div' );
		missingLanguagesPanelTextElement.className = 'cx-entrypoint-missing-frequent-languages__text';

		const missingFrequentLanguagesCount = sxMissingFrequentLanguages.length;
		// This method is only called when frequent, missing and SX-enabled languages DO exist,
		// so the length is guaranteed to be greater than 0
		if ( missingFrequentLanguagesCount === 1 ) {
			missingLanguagesPanelTextElement.innerHTML = mw.message(
				'sx-missing-languages-entrypoint-panel-text-one-missing',
				sxMissingFrequentLanguages[ 0 ].autonym
			).parse();
		} else if ( missingFrequentLanguagesCount === 2 ) {
			missingLanguagesPanelTextElement.innerHTML = mw.message(
				'sx-missing-languages-entrypoint-panel-text-two-missing',
				sxMissingFrequentLanguages[ 0 ].autonym,
				sxMissingFrequentLanguages[ 1 ].autonym
			).parse();
		} else {
			// more than two frequent languages that are enabled for
			// Section Translation are missing
			missingLanguagesPanelTextElement.innerHTML = mw.message(
				'sx-missing-languages-entrypoint-panel-text-more-missing',
				sxMissingFrequentLanguages[ 0 ].autonym,
				sxMissingFrequentLanguages[ 1 ].autonym
			).parse();
		}

		const languageSpans = missingLanguagesPanelTextElement.getElementsByTagName( 'span' );
		for ( let i = 0; i < languageSpans.length; i++ ) {
			languageSpans[ i ].setAttribute( 'lang', sxMissingFrequentLanguages[ i ].lang );
			languageSpans[ i ].setAttribute( 'dir', sxMissingFrequentLanguages[ i ].dir );
		}

		return missingLanguagesPanelTextElement;
	}

	function createArrowIcon() {
		const span = document.createElement( 'span' );
		span.className = 'cx-entrypoint-missing-frequent-languages__icon';
		return span;
	}

	/**
	 * This method creates and returns an H3 header element that contains the entrypoint banner.
	 * The returned element should strictly be an H3 element, so that this banner element is hidden,
	 * along with the other H3 header elements inside mobile Language Searcher, when a search query
	 * exists inside the mobile Language Searcher search input. This is required so that we avoid to
	 * display multiple SX entrypoints at the same time (https://phabricator.wikimedia.org/T298032#7844926).
	 *
	 * @param {{ lang: string, autonym: string, dir: string }[]} sxMissingFrequentLanguages array of missing frequent languages
	 * @return {HTMLHeadingElement}
	 */
	function createMissingLanguagesPanel( sxMissingFrequentLanguages ) {
		// Wrap the banner inside an h3 element, so that it is hidden along with other h3 elements inside mobile
		// Language Searcher, when a search query exists inside the Language Searcher search input.
		const missingLanguagesPanelContainer = document.createElement( 'h3' );
		missingLanguagesPanelContainer.className = 'cx-entrypoint-missing-frequent-languages-container';

		const missingLanguagesPanel = document.createElement( 'button' );
		missingLanguagesPanel.className = 'cx-entrypoint-missing-frequent-languages';

		const missingLanguagesPanelText = createPanelTextElement( sxMissingFrequentLanguages );
		const missingLanguagesPanelIcon = createArrowIcon();
		missingLanguagesPanel.appendChild( missingLanguagesPanelText );
		missingLanguagesPanel.appendChild( missingLanguagesPanelIcon );

		missingLanguagesPanelContainer.appendChild( missingLanguagesPanel );
		return missingLanguagesPanelContainer;
	}

	/**
	 * @param {Object} frequentLanguages object containing the frequently used languages (codes)
	 * mapped to their respective frequency
	 * @param {string|undefined} deviceLanguage the device language (can be a variant too, e.g. en-gb)
	 * @return {{autonym: string, lang: string, dir: string}[]} array of objects representing languages, ordered by their frequency
	 */
	function getMissingFrequentLanguages( frequentLanguages, deviceLanguage ) {
		/** @type {{lang: string, frequency: number}[]} */
		let targetedLanguages = Object.keys( frequentLanguages ).map( function ( languageCode ) {
			return { lang: languageCode, frequency: frequentLanguages[ languageCode ] };
		} ).sort( function ( a, b ) {
			return b.frequency - a.frequency;
		} );

		let deviceParentLanguage;
		// add device language/variant and parent device language (if exist) on top of this list
		if ( deviceLanguage ) {
			const index = deviceLanguage.indexOf( '-' );
			if ( index !== -1 ) {
				deviceParentLanguage = deviceLanguage.slice( 0, index );
			}

			targetedLanguages = targetedLanguages.filter( function ( language ) {
				return language.lang !== deviceLanguage && language.lang !== deviceParentLanguage;
			} );
			if ( deviceParentLanguage ) {
				targetedLanguages.unshift( { lang: deviceParentLanguage } );
			}
			targetedLanguages.unshift( { lang: deviceLanguage } );
		}
		// Remove current wiki language from targetedLanguages
		targetedLanguages = targetedLanguages.filter( function ( language ) {
			return language.lang !== mw.config.get( 'wgContentLanguage' );
		} );
		/**
		 * @type {{lang: string, autonym: string, dir: string}[]} missingSXLanguages array containing the
		 * enabled language codes for SX that are missing for the specific article
		 */
		const missingSXLanguages = mw.config.get( 'wgSectionTranslationMissingLanguages', [] );
		return missingSXLanguages.filter( function ( missingSXLanguage ) {
			return targetedLanguages.some( function ( targetLanguage ) {
				return missingSXLanguage.lang === targetLanguage.lang;
			} );
		} );
	}

	/**
	 * Copied from MobileFrontend/src/mobile.languages.structured/util.js
	 *
	 * @return {Object} object containing the frequently used languages (codes)
	 * mapped to their respective frequency (e.g. { en: 3, el: 5 })
	 */
	function getFrequentlyUsedLanguages() {
		const languageMap = mw.storage.get( 'langMap' );

		return languageMap ? JSON.parse( languageMap ) : {};
	}

	mw.hook( 'mobileFrontend.languageSearcher.onOpen' ).add(
		/** @param {LanguageSearcher} languageSearcher */
		function ( languageSearcher ) {
			const frequentLanguages = getFrequentlyUsedLanguages(),
				deviceLanguage = languageSearcher.options.deviceLanguage;

			const sxMissingFrequentLanguages = getMissingFrequentLanguages( frequentLanguages, deviceLanguage );
			if ( !sxMissingFrequentLanguages.length ) {
				return;
			}

			const firstMissingLanguage = sxMissingFrequentLanguages[ 0 ];

			const missingLanguagesPanel = createMissingLanguagesPanel( sxMissingFrequentLanguages );
			languageSearcher.addBanner( missingLanguagesPanel.outerHTML, firstMissingLanguage.autonym );
		}
	);
}() );
