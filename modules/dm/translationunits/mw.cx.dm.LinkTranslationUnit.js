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

mw.cx.dm.LinkTranslationUnit.prototype.isInternalLink = function () {
	return true;
};

mw.cx.dm.LinkTranslationUnit.prototype.getTargetTitle = function () {
	return this.targetDocument.title;
};

/**
 * Adapt a source link to target language.
 * @return {jQuery.Promise}
 */
mw.cx.dm.LinkTranslationUnit.prototype.adapt = function () {
	var self = this;

	this.targetDocument = this.sourceDocument.cloneNode( true );
	this.setTargetId();

	return this.requestManager.getTitlePair( this.sourceLanguage, this.sourceTitle )
		.then( function( pairInfo ) {
			var targetTitle = pairInfo.targetTitle;
			if ( targetTitle ) {
				self.targetDocument.title = targetTitle;
				self.targetDocument.href = targetTitle;
				// TODO: This is just for testing. We should not do this if there is MT for
				// the source-target language pair.
				self.targetDocument.text = targetTitle;
				self.targetTitleMissing = false;
			} else {
				self.targetTitleMissing = true;
			}
		} );
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.LinkTranslationUnit );
