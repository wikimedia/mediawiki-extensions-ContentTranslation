'use strict';

/**
 * CX Section TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.SectionTranslationUnit = function SectionTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.SectionTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );

	this.MTService = config.MTService;
	this.MTManager = config.MTManager;
	// XXX: When restoring, set this properly
	this.MTProvider = null;

	this.documentsPerProvider = {};

	this.init();
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.SectionTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.SectionTranslationUnit.static.name = 'section';
mw.cx.dm.SectionTranslationUnit.static.matchTagNames = mw.cx.dm.SourcePage.static.sectionTypes;

mw.cx.dm.SectionTranslationUnit.prototype.init = function () {
	this.buildSubTranslationUnits( this.sourceDocument, this.targetDocument );
};

/**
 * Translate the section using machine translation if available, with appropriate fallback.
 *
 * @private
 * @param {Element} sourceDocument Source section DOM Element
 * @return {jQuery.Promise} Element as first param. Should never reject.
 */
mw.cx.dm.SectionTranslationUnit.prototype.translate = function ( sourceDocument ) {
	return this.getMTProvider().then( function ( provider ) {
		var deferred = $.Deferred();

		if ( provider === 'source' ) {
			deferred.resolve( sourceDocument.cloneNode( true ) );
		} else if ( provider === 'scratch' ) {
			deferred.resolve( sourceDocument.cloneNode( false ) );
		} else {
			deferred = this.MTService.translate( sourceDocument.outerHTML, provider ).then(
				this.translateSuccess.bind( this ),
				this.translateError.bind( this, sourceDocument )
			);
		}

		return deferred;
	}.bind( this ) );
};

/**
 * Convert MT string result from HTML string to Element.
 *
 * @private
 * @param {string} html
 * @return {Element} Similar as for this.translate.
 */
mw.cx.dm.SectionTranslationUnit.prototype.translateSuccess = function ( html ) {
	return $( html )[ 0 ];
};

/**
 * Handle errors for translate. Will fall back to non-MT provider.
 *
 * @private
 * @param {Element} sourceDocument Similar as for this.translate.
 * @return {jQuery.Promise} Similar as for this.translate.
 */
mw.cx.dm.SectionTranslationUnit.prototype.translateError = function ( sourceDocument ) {
	// Translation with non-MT provider must never fail or we will have infinite loop
	return this.MTManager.getDefaultNonMTProvider().then( function ( provider ) {
		var deferred = $.Deferred();

		// XXX i18n
		mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch machine translation.' );
		this.MTProvider = provider;
		// Convert failure to success
		this.translate( sourceDocument ).done( deferred.resolve );
		return deferred;
	}.bind( this ) );
};

/**
 * Adapt the section for target language. Adapt can mean one of three things:
 * - revert any modifications done with current provider (reset)
 * - use source text (source)
 * - use empty text (scratch)
 * - use machine translation (and fallback to either of above if it fails)
 *
 * The UI SectionTranslationUnit calls this without parameter, while the
 * MachineTranslationTool will call with the provider chosen by the user.
 *
 * @param {string} [requestedProvider]
 * @fires adapt
 */
mw.cx.dm.SectionTranslationUnit.prototype.adapt = function ( requestedProvider ) {
	if ( this.MTProvider && this.targetDocument ) {
		// Store the current version so that it can be restored
		this.documentsPerProvider[ this.MTProvider ] = this.targetDocument;
	}

	if ( requestedProvider !== 'reset' ) {
		if ( requestedProvider ) {
			this.MTProvider = requestedProvider;
		}

		// Use the cached version
		if ( this.documentsPerProvider[ requestedProvider ] ) {
			this.targetDocument = this.documentsPerProvider[ requestedProvider ];
			this.emit( 'adapt', this.targetDocument, requestedProvider );
			return;
		}
	}

	this.translate( this.sourceDocument ).then( function ( document ) {
		this.targetDocument = document;
		this.setTargetId();
		// Note that this.MTProvider might have changed from requestedProvider
		this.emit( 'adapt', document, this.MTProvider );
	}.bind( this ) );
};

mw.cx.dm.SectionTranslationUnit.prototype.getMTProvider = function () {
	if ( this.MTProvider ) {
		return $.Deferred().resolve( this.MTProvider );
	}

	return this.MTManager.getPreferredProvider().done( function ( provider ) {
		this.MTProvider = provider;
	}.bind( this ) );
};

/* Register */
mw.cx.dm.modelRegistry.register( mw.cx.dm.SectionTranslationUnit );
