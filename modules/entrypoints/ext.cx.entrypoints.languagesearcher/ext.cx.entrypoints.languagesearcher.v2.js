/*!
 * Content Translation invitation for editors while searching in the
 * Universal Language Selector V2 (rewrite) language selector.
 *
 * Registers an "empty search" entrypoint with the ULS entrypoint registry.
 * The card itself is rendered by ULS, so this module must stay lightweight
 * (in particular, it must not depend on Vue), as it is loaded on page load.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	const siteMapper = new mw.cx.SiteMapper();

	/**
	 * @param {string[]} resultLanguages
	 * @return {string[]}
	 */
	const getCxLanguageMatches = ( resultLanguages ) => {
		const enabledTargets = mw.config.get( 'wgSectionTranslationTargetLanguages' );

		return resultLanguages.filter(
			( code ) => enabledTargets.includes( code ) && code !== mw.config.get( 'wgContentLanguage' )
		);
	};

	const EntrypointRegistry = require( 'ext.uls.rewrite.entrypoints' );
	const { ENTRYPOINT_TYPE, ULS_MODE } = EntrypointRegistry;

	EntrypointRegistry.register( ENTRYPOINT_TYPE.EMPTY_SEARCH, {
		id: 'cx-language-searcher-translation-cta',
		shouldShow: ( context ) => {
			const hitCodes = Object.keys( context.searchQueryHits || {} );
			return getCxLanguageMatches( hitCodes ).length > 0;
		},
		getConfig: ( context ) => {
			const { cdxIconAdd } = require( './icons.json' );
			const hitCodes = Object.keys( context.searchQueryHits || {} );
			const cxMatches = getCxLanguageMatches( hitCodes );
			if ( !cxMatches.length ) {
				return [];
			}

			return cxMatches.map( ( langCode ) => ( {
				label: $.uls.data.getAutonym( langCode ),
				icon: cdxIconAdd,
				url: siteMapper.getCXUrl(
					mw.config.get( 'wgTitle' ),
					null,
					mw.config.get( 'wgContentLanguage' ),
					langCode,
					{ campaign: 'mflanguagesearcher', sx: true }
				)
			} ) );
		}
	}, ULS_MODE.CONTENT );
}() );
