( function () {
	var entrypointRendered = false;
	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @return {string|null}
	 */
	function getSXMissingLanguagesText( missingRelevantLanguages ) {
		var missingRelevantLanguagesCount = Object.keys( missingRelevantLanguages ).length;
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
	}

	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @return {HTMLDivElement}
	 */
	function createPanelTextElement( missingRelevantLanguages ) {
		var missingLanguagesPanelTextElement = document.createElement( 'div' );
		missingLanguagesPanelTextElement.className = 'cx-uls-relevant-languages-banner__text';
		missingLanguagesPanelTextElement.innerHTML = getSXMissingLanguagesText( missingRelevantLanguages );

		return missingLanguagesPanelTextElement;
	}

	/**
	 * @return {HTMLSpanElement}
	 */
	function createArrowIcon() {
		var span = document.createElement( 'span' );
		span.className = 'cx-uls-relevant-languages-banner__icon mw-ui-icon';
		return span;
	}

	/**
	 * @param {string[]} missingRelevantLanguages array of missing frequent language autonyms
	 * @param {Object} uls The ULS object
	 * @return {HTMLDivElement}
	 */
	function createMissingLanguagesPanel( missingRelevantLanguages, uls ) {
		var missingLanguagesPanel = document.createElement( 'div' ),
			missingLanguagesPanelText = createPanelTextElement( missingRelevantLanguages ),
			missingLanguagesPanelIcon = createArrowIcon();

		missingLanguagesPanel.className = 'cx-uls-relevant-languages-banner';
		missingLanguagesPanel.append( missingLanguagesPanelText );
		missingLanguagesPanel.append( missingLanguagesPanelIcon );

		missingLanguagesPanel.addEventListener( 'click', function () {
			var Vue = require( 'vue' );
			var CxUlsEntrypoint = require( './ext.cx.entrypoints.uls.relevantlanguages/CxUlsEntrypoint.vue' );
			var position = uls.position(), width = uls.$menu.width();
			uls.hide();

			var panel = document.createElement( 'div' );
			panel.className = 'cx-uls-entrypoint__panel-container';
			Object.keys( position ).forEach( function ( property ) {
				panel.style[ property ] = position[ property ] + 'px';
			} );
			panel.style.width = width + 'px';
			document.body.appendChild( panel );

			Vue.createMwApp( CxUlsEntrypoint, {
				languages: missingRelevantLanguages,
				onClose: uls.show.bind( uls )
			} ).mount( panel );
		} );

		return missingLanguagesPanel;
	}

	mw.hook( 'mw.uls.compact_language_links.open' ).add(
		function ( $trigger ) {
			if ( entrypointRendered ) {
				return;
			}
			var uls = $trigger.data( 'uls' );
			// Remove variants, Remove current language
			var frequentLanguages = mw.uls.getFrequentLanguageList().map( function ( language ) {
				return language.split( '-' )[ 0 ];
			} ).filter( function ( language, index, frequentLangs ) {
				return frequentLangs.indexOf( language ) === index && language !== mw.config.get( 'wgContentLanguage' );
			} );

			var existingLanguages = Object.keys( uls.languages );

			var missingRelevantLanguages = frequentLanguages.filter( function ( language ) {
				return existingLanguages.indexOf( language ) === -1;
			} );

			if ( !missingRelevantLanguages.length ) {
				return;
			}

			var missingLanguagesPanel = createMissingLanguagesPanel( missingRelevantLanguages, uls );
			uls.$resultsView.before( missingLanguagesPanel );
			entrypointRendered = true;
		}
	);
}() );
