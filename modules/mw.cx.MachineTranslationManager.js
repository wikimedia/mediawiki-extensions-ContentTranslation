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

/**
 * @class
 * @param {string} sourceLanguage Language code
 * @param {string} targetLanguage Language code
 * @param {mw.cx.MachineTranslationService} MTService
 */
mw.cx.MachineTranslationManager = function MwCxMachineTranslationManager(
	sourceLanguage, targetLanguage, MTService
) {
	this.sourceLanguage = sourceLanguage;
	this.targetLanguage = targetLanguage;
	this.MT = MTService;
};

/**
 * Map provider id to human readable label.
 *
 * @param {string} provider Id of the provider
 * @return {string} Translated label
 */
mw.cx.MachineTranslationManager.prototype.getProviderLabel = function ( provider ) {
	var labels = {
		Elia: mw.msg( 'cx-tools-mt-provider-title', 'Elia.eus' ),
		Google: mw.msg( 'cx-tools-mt-provider-title', 'Google Translate' ),
		Yandex: mw.msg( 'cx-tools-mt-provider-title', 'Yandex.Translate' ),
		scratch: mw.msg( 'cx-tools-mt-dont-use' ),
		source: mw.msg( 'cx-tools-mt-use-source' ),
		reset: mw.msg( 'cx-tools-mt-reset' )
	};

	return labels[ provider ] || mw.msg( 'cx-tools-mt-provider-title', provider );
};

/* Public methods */

/**
 * Get the preferred provider, also taking into account user preference.
 *
 * @return {jQuery.Promise}
 */
mw.cx.MachineTranslationManager.prototype.getPreferredProvider = function () {
	var
		key = this.getStorageKey(),
		value = mw.storage.get( key );

	return this.getAvailableProviders().then( function ( providers ) {
		if ( value && providers.indexOf( value ) >= 0 ) {
			return value;
		}

		// Stored provider is invalid or not available right now
		return this.getDefaultProvider();
	}.bind( this ) );

};

mw.cx.MachineTranslationManager.prototype.setPreferredProvider = function ( value ) {
	var key = this.getStorageKey();

	mw.storage.set( key, value );
};

mw.cx.MachineTranslationManager.prototype.getAvailableProviders = function () {
	return this.MT.getProviders().then(
		function ( providers ) {
			return providers.concat( [ 'source', 'scratch' ] );
		},
		function () {
			// Allow to continue translation even if this fails
			return $.Deferred().resolve( [ 'source', 'scratch' ] );
		}
	);
};

/* Private methods */

/**
 * Determines whether `source` or `scratch` should be used. Since mixing
 * left-to-right and right-to-left is complex and confusing, default to
 * `scratch` translation if directions are different.
 *
 * @return {jQuery.Promise} Resolves to provider id.
 */
mw.cx.MachineTranslationManager.prototype.getDefaultNonMTProvider = function () {
	return mw.loader.using( 'jquery.uls.data' ).then(
		function () {
			var
				sourceDir = $.uls.data.getDir( this.sourceLanguage ),
				targetDir = $.uls.data.getDir( this.targetLanguage );

			return sourceDir === targetDir ? 'source' : 'scratch';
		}.bind( this ),
		function () {
			// Convert failure to success
			return $.Deferred().resolve( 'source' ).promise();
		}
	);
};

/**
 * Get the default MT provider.
 *
 * @return {jQuery.Promise} Resolves to a provider id.
 */
mw.cx.MachineTranslationManager.prototype.getDefaultProvider = function () {
	return this.MT.getSuggestedDefaultProvider().then(
		function ( provider ) {
			return provider || this.getDefaultNonMTProvider();
		}.bind( this ),
		function () {
			return this.getDefaultNonMTProvider();
		}.bind( this )
	);
};

mw.cx.MachineTranslationManager.prototype.getStorageKey = function () {
	// This format was used by CX1, so keeping it for compatibility.
	return [ 'cxMTProvider', this.sourceLanguage, this.targetLanguage ].join( '-' );
};
