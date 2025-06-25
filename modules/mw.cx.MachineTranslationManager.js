/**
 * This class takes care of managing which machine translation service to use.
 * Basically what happens when user clicks a section to translate, or uses the
 * machine translation tool card to change provider.
 *
 * Here provides means either a named machine translation services that is used
 * via the cxserver backend using the mw.cx.MachineTranslationService class or
 * an always present option `scratch` or `source`. By convention named providers
 * should start with a capital letter.
 */

'use strict';

const ORIGINAL_TEXT_PROVIDER_KEY = 'source';
const EMPTY_TEXT_PROVIDER_KEY = 'scratch';

class MwCxMachineTranslationManager {
	/**
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @param {mw.cx.MachineTranslationService} MTService
	 */
	constructor( sourceLanguage, targetLanguage, MTService ) {
		this.sourceLanguage = sourceLanguage;
		this.targetLanguage = targetLanguage;
		this.MT = MTService;
	}

	/**
	 * Map provider id to human-readable label.
	 *
	 * @param {string} provider Id of the provider
	 * @return {string} Translated label
	 */
	static getProviderLabel( provider ) {
		return mw.msg.apply( null, {
			Elia: [ 'cx-tools-mt-provider-title', 'Elia.eus' ],
			Google: [ 'cx-tools-mt-provider-title', 'Google Translate' ],
			Yandex: [ 'cx-tools-mt-provider-title', 'Yandex.Translate' ],
			[ EMPTY_TEXT_PROVIDER_KEY ]: [ 'cx-tools-mt-dont-use' ],
			[ ORIGINAL_TEXT_PROVIDER_KEY ]: [ 'cx-tools-mt-use-source' ],
			reset: [ 'cx-tools-mt-reset' ]
		}[ provider ] || [ 'cx-tools-mt-provider-title', provider ] );
	}

	/**
	 * Get the preferred provider, also taking into account user preference.
	 *
	 * @return {jQuery.Promise}
	 */
	getPreferredProvider() {
		const key = this.storageKey;
		const value = mw.storage.get( key );

		return this.getAvailableProviders().then( ( providers ) => {
			if ( value && providers.includes( value ) ) {
				return value;
			}

			// Stored provider is invalid or not available right now
			return this.getDefaultProvider();
		} );

	}

	setPreferredProvider( value ) {
		mw.storage.set( this.storageKey, value );
	}

	getAvailableProviders() {
		return this.MT.getProviders().then(
			( providers ) => providers.concat( [ ORIGINAL_TEXT_PROVIDER_KEY, EMPTY_TEXT_PROVIDER_KEY ] ),
			// Allow to continue translation even if this fails
			() => $.Deferred().resolve( [ ORIGINAL_TEXT_PROVIDER_KEY, EMPTY_TEXT_PROVIDER_KEY ] )
		);
	}

	/**
	 * Determines whether `source` or `scratch` should be used. Since mixing
	 * left-to-right and right-to-left is complex and confusing, default to
	 * `scratch` translation if directions are different.
	 *
	 * @return {jQuery.Promise} Resolves to provider id.
	 */
	getDefaultNonMTProvider() {
		return mw.loader.using( 'jquery.uls.data' ).then(
			() => {
				const sourceDir = $.uls.data.getDir( this.sourceLanguage );
				const targetDir = $.uls.data.getDir( this.targetLanguage );

				return sourceDir === targetDir ? ORIGINAL_TEXT_PROVIDER_KEY : EMPTY_TEXT_PROVIDER_KEY;
			},
			// Convert failure to success
			() => $.Deferred().resolve( ORIGINAL_TEXT_PROVIDER_KEY ).promise()
		);
	}

	/**
	 * Get the default MT provider.
	 *
	 * @return {jQuery.Promise} Resolves to a provider id.
	 */
	getDefaultProvider() {
		return this.MT.getSuggestedDefaultProvider().then(
			( provider ) => provider || this.getDefaultNonMTProvider(),
			() => this.getDefaultNonMTProvider()
		);
	}

	get storageKey() {
		// This format was used by CX1, so keeping it for compatibility.
		return [ 'cxMTProvider', this.sourceLanguage, this.targetLanguage ].join( '-' );
	}

	static getProviderForInstrumentation( provider ) {
		if ( provider === EMPTY_TEXT_PROVIDER_KEY ) {
			return 'blank';
		} else if ( provider === ORIGINAL_TEXT_PROVIDER_KEY ) {
			return 'source';
		}
		// event logging schema expects lowercase MT providers (e.g. "google" for "Google" MT provider)
		return provider.toLowerCase();
	}
}

mw.cx.MachineTranslationManager = MwCxMachineTranslationManager;
