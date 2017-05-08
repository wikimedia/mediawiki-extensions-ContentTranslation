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

/**
 * Add a new link to the section.
 * @param {Selection} selection The selection object
 * @param {string} title Title for the new link.
 * @param {boolean} targetExists Whether the title exist in target language
 */
mw.cx.dm.SectionTranslationUnit.prototype.addLink = function ( selection, title, targetExists ) {
	var newLink, href;

	title = mw.cx.dm.LinkTranslationUnit.static.getValidTitle( title );
	if ( !title ) {
		mw.log.error( '[CX] Invalid title given' );
		return;
	}
	// Convert title to a relative URL to avoid insecure values like
	// javascript:.. appearing in it.
	if ( title.indexOf( './' ) < 0 ) {
		href = './' + title;
	}

	newLink = document.createElement( 'a' );
	newLink.appendChild( document.createTextNode( title ) );
	newLink.setAttribute( 'href', href );
	newLink.setAttribute( 'title', title );
	newLink.setAttribute( 'rel', 'mw:WikiLink' );
	// Set a sufficiently good random id
	newLink.setAttribute( 'id', 'cx' + new Date().valueOf() );
	if ( targetExists === false ) {
		// Title does not exist in target language. Add new class.
		// Note that this class is just for showing the link as red link in CX
		// translation view. It has no effect on generated wiki text.
		newLink.className = 'new';
	}
	mw.cx.dm.SectionTranslationUnit.static.pasteAtSelection( selection, newLink );
	this.buildSubTranslationUnits( this.sourceDocument, this.targetDocument );
};

/**
 * Add an external link to the section.
 * @param {Selection} selection The selection object
 * @param {string} url Target URL
 */
mw.cx.dm.SectionTranslationUnit.prototype.addExternalLink = function ( selection, url ) {
	var newLink;

	// Validate the link
	if ( !mw.cx.dm.ExternalLinkTranslationUnit.static.isSafeUrl( url ) ) {
		mw.log.error( '[CX] Invalid or unsafe url given' );
		return;
	}
	newLink = document.createElement( 'a' );
	newLink.appendChild( document.createTextNode( url ) );
	newLink.setAttribute( 'href', url );
	newLink.setAttribute( 'rel', 'mw:ExtLink' );
	// Set a sufficiently good random id
	newLink.setAttribute( 'id', 'cx' + new Date().valueOf() );
	mw.cx.dm.SectionTranslationUnit.static.pasteAtSelection( selection, newLink );
	this.buildSubTranslationUnits( this.sourceDocument, this.targetDocument );
};

/**
 * Paste an element at given selection
 * @param {Selection} selection The selection object
 * @param {Element} elementToPaste [description]
 */
mw.cx.dm.SectionTranslationUnit.static.pasteAtSelection = function ( selection, elementToPaste ) {
	var range, html;
	// TODO: We can probably move the below block to a utility library
	// after we see more usecases similar to this and consolidate.
	if ( window.getSelection ) {
		if ( selection.getRangeAt && selection.rangeCount ) {
			range = selection.getRangeAt( 0 );
			range.deleteContents();
			range.insertNode( elementToPaste );
		}
	} else if ( document.selection && document.selection.createRange ) {
		range = selection.createRange();
		html = elementToPaste.outerHTML;
		range.pasteHTML( html );
	}
};

/* Register */
mw.cx.dm.modelRegistry.register( mw.cx.dm.SectionTranslationUnit );
