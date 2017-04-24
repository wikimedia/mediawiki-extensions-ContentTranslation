'use strict';

/**
 * CX Link TranslationUnit Data model class
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.LinkTranslationUnit = function LinkTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.LinkTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
	this.sourceTitle = null;
	this.targetTitle = null;
	this.sourceLinkInfo = null;
	this.targetTitleMissing = true;
	this.init();
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.LinkTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.LinkTranslationUnit.static.name = 'link';
mw.cx.dm.LinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.dm.LinkTranslationUnit.static.matchRdfaTypes = [ 'mw:WikiLink' ];

/**
 * @inheritDoc
 */
mw.cx.dm.LinkTranslationUnit.static.matchFunction = function ( node ) {
	// Links should have id
	return !!node.id;
};

mw.cx.dm.LinkTranslationUnit.prototype.init = function () {
	this.sourceTitle = this.sourceDocument.title;
	// We are not fetching any data before the parent translation unit's translation started.
};

mw.cx.dm.LinkTranslationUnit.prototype.getTargetTitle = function () {
	return this.targetDocument.title;
};

/**
 * Find link target for the given source title
 * @param {string} sourceLanguage
 * @param {string} sourceTitle
 * @return {jQuery.Promise}
 */
mw.cx.dm.LinkTranslationUnit.prototype.findLinkTarget = function ( sourceLanguage, sourceTitle ) {
	var result = $.Deferred();
	if ( !sourceLanguage ) {
		mw.log.error( '[CX] Invalid source language given to link adapt' + this );
		result.reject();
	}
	if ( !sourceTitle ) {
		mw.log.error( '[CX] Invalid source title given to link adapt' + this );
		result.reject();
	}

	this.requestManager.getTitlePair( this.sourceLanguage, this.sourceTitle )
		.done( function( pairInfo ) {
			var targetTitle = pairInfo.targetTitle;
			if ( !targetTitle ) {
				result.reject();
			} else {
				result.resolve( targetTitle );
			}
		}.bind( this ) );

	return result.promise();
};

/**
 * Adapt a source link to target language.
 * @return {jQuery.Promise}
 */
mw.cx.dm.LinkTranslationUnit.prototype.adapt = function () {

	if ( this.targetDocument ) {
		mw.log.warn( '[CX] Adapting a link which looks already adapted: ' + this );
	}

	// Find the element in parent section for this link.
	this.targetDocument = this.parentTranslationUnit.getTargetDocument()
		.querySelector( '[id="' + this.sourceDocument.id + '"]' );

	if ( !this.targetDocument ) {
		// If this is a restored translation, the link will exist with cx id prefix
		this.targetDocument = this.parentTranslationUnit.getTargetDocument()
			.querySelector( '[id="cx' + this.sourceDocument.id + '"]' );
	} else {
		// Set the id with 'cx' prefix
		this.setTargetId();
	}

	if ( !this.targetDocument ) {
		mw.log.error( '[CX] Could not find the target element in parent document. ' + this );
		// Nothing to adapt
		return $.Deferred().reject().promise();
	}

	return this.findLinkTarget( this.sourceLanguage, this.sourceTitle ).then(
		this.adaptSuccessHandler.bind( this ),
		this.adaptFailureHandler.bind( this )
	);
};

/**
 * Link adaptation success handler
 * @param {string} targetTitle Target title corresponding to source title
 */
mw.cx.dm.LinkTranslationUnit.prototype.adaptSuccessHandler = function ( targetTitle ) {
	this.targetTitle = targetTitle;
	this.targetDocument.title = this.targetTitle;
	this.targetDocument.href = this.targetTitle;
	// TODO: This is just for testing. We should not do this if there is MT for
	// the source-target language pair.
	this.targetDocument.text = this.targetTitle;
	this.targetTitleMissing = false;
};

/**
 * Link adaptation failure handler
 */
mw.cx.dm.LinkTranslationUnit.prototype.adaptFailureHandler = function () {
	this.targetTitleMissing = true;
};

/**
 * Get the id of the section
 * @return {string}
 */
mw.cx.dm.TranslationUnit.prototype.getSectionId = function () {
	// Make sure that there is an id for the unit even if id attribute is not present.
	return this.sourceDocument.id || this.sourceDocument.dataset.linkid || OO.ui.generateElementId();
};

/**
 * @return {boolean} Whether a corresponding title exist in target language
 */
mw.cx.dm.TranslationUnit.prototype.isTargetExist = function () {
	return !this.targetTitleMissing;
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.LinkTranslationUnit );
