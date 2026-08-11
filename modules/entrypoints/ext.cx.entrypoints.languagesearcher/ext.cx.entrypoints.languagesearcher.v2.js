/*!
 * Content Translation and Automatic Translation (MinT) invitations for editors
 * while searching in the Universal Language Selector V2 (rewrite) language selector.
 *
 * Registers "empty search" entrypoints with the ULS entrypoint registry.
 * The cards themselves are rendered by ULS, so this module must stay lightweight
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
		const enabledTargets = mw.config.get( 'wgSectionTranslationTargetLanguages' ) || [];

		return resultLanguages.filter(
			( code ) => enabledTargets.includes( code ) && code !== mw.config.get( 'wgContentLanguage' )
		);
	};

	/**
	 * @param {string[]} resultLanguages
	 * @return {string[]}
	 */
	const getMintLanguageMatches = ( resultLanguages ) => {
		const { AutomaticTranslationLanguageSearcherEntrypointEnabledLanguages: enabledTargets } =
			require( './config.json' );

		return resultLanguages.filter(
			( code ) => ( enabledTargets || [] ).includes( code ) &&
				code !== mw.config.get( 'wgContentLanguage' )
		);
	};

	/**
	 * @param {Object} context
	 * @return {string[]}
	 */
	const getSearchHitCodes = ( context ) => Object.keys( context.searchQueryHits || {} );

	const EntrypointRegistry = require( 'ext.uls.rewrite.entrypoints' );
	const { ENTRYPOINT_TYPE, ULS_MODE } = EntrypointRegistry;

	EntrypointRegistry.register( ENTRYPOINT_TYPE.EMPTY_SEARCH, {
		id: 'cx-language-searcher-translation-cta',
		shouldShow: ( context ) => getCxLanguageMatches( getSearchHitCodes( context ) ).length > 0,
		getConfig: ( context ) => {
			const { cdxIconAdd, cdxIconEllipsis } = require( './icons.json' );
			const cxMatches = getCxLanguageMatches( getSearchHitCodes( context ) );
			if ( !cxMatches.length ) {
				return [];
			}

			const getCxUrl = ( langCode ) => siteMapper.getCXUrl(
				mw.config.get( 'wgTitle' ),
				null,
				mw.config.get( 'wgContentLanguage' ),
				langCode,
				{ campaign: 'mflanguagesearcher', sx: true }
			);

			const results = cxMatches.slice( 0, 2 ).map( ( langCode ) => ( {
				label: $.uls.data.getAutonym( langCode ),
				icon: cdxIconAdd,
				url: getCxUrl( langCode )
			} ) );

			if ( cxMatches.length > 2 ) {
				results.push( {
					label: null,
					icon: cdxIconEllipsis,
					url: getCxUrl( cxMatches[ 0 ] )
				} );
			}

			return results;
		}
	}, ULS_MODE.CONTENT );

	EntrypointRegistry.register( ENTRYPOINT_TYPE.EMPTY_SEARCH, {
		id: 'mint-language-searcher-translation-cta',
		shouldShow: ( context ) => getMintLanguageMatches( getSearchHitCodes( context ) ).length > 0,
		getConfig: ( context ) => {
			const { cdxIconRobot } = require( './icons.json' );
			const mintMatches = getMintLanguageMatches( getSearchHitCodes( context ) );
			if ( !mintMatches.length ) {
				return [];
			}

			return {
				label: mw.msg( 'mint-mflanguagesearcher-entrypoint-card-title' ),
				icon: cdxIconRobot,
				url: siteMapper.getMintUrl(
					mw.config.get( 'wgPageName' ),
					mw.config.get( 'wgContentLanguage' ),
					mintMatches[ 0 ],
					'confirm',
					{ source: 'languageselector' }
				)
			};
		}
	}, ULS_MODE.CONTENT );
}() );
