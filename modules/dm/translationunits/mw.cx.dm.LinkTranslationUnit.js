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
	this.redlink = false;
	this.init();
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.LinkTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.LinkTranslationUnit.static.name = 'link';
mw.cx.dm.LinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.dm.LinkTranslationUnit.static.matchRdfaTypes = [ 'mw:WikiLink' ];

mw.cx.dm.LinkTranslationUnit.prototype.init = function () {
	if ( this.sourceDocument ) {
		this.sourceTitle = this.sourceDocument.title;
	} else {
		mw.log( '[CX] Link translation unit without a source link: ' + this.getTargetTitle() );
	}
	// We are not fetching any data before the parent translation unit's translation started.
};

mw.cx.dm.LinkTranslationUnit.prototype.getTargetTitle = function () {
	if ( this.targetDocument ) {
		return this.targetDocument.title;
	}
	return null;
};

mw.cx.dm.LinkTranslationUnit.prototype.getSourceTitle = function () {
	if ( this.sourceDocument ) {
		return this.sourceDocument.title;
	}
	return null;
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

	this.requestManager.getTitlePair( sourceLanguage, sourceTitle )
		.done( function ( pairInfo ) {
			var targetTitle = pairInfo.targetTitle;

			if ( !targetTitle ) {
				result.reject();
			} else {
				result.resolve( targetTitle );
			}
		} );

	return result.promise();
};

/**
 * Adapt a source link to target language.
 * @return {jQuery.Promise}
 */
mw.cx.dm.LinkTranslationUnit.prototype.adapt = function () {

	if ( this.targetDocument ) {
		this.redlink = this.targetDocument.classList.contains( 'new' );
		mw.log.warn( '[CX] Adapting a link which looks already adapted: ' + this );
	}

	// Find the element in parent section for this link.
	if ( this.sourceDocument ) {
		this.targetDocument = this.parentTranslationUnit.getTargetDocument()
		.querySelector( '[id="' + this.getSectionId() + '"]' );
	}

	if ( !this.targetDocument ) {
		// If this is a restored translation, the link will exist with cx id prefix
		this.targetDocument = this.parentTranslationUnit.getTargetDocument()
			.querySelector( '[id="cx' + this.getSectionId() + '"]' );
	} else {
		// Set the id with 'cx' prefix
		this.setTargetId();
	}

	if ( !this.targetDocument ) {
		mw.log.error( '[CX] Could not find the target element in parent document. ' + this );
		// Nothing to adapt
		return $.Deferred().reject().promise();
	}

	if ( !this.sourceDocument && this.targetDocument ) {
		// This is a target section only link.
		this.adaptSuccessHandler( this.targetDocument.title );
		return $.Deferred().resolve().promise();
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
	this.targetTitleMissing = false;

	// As a nice gesture, when using 'source' MT, update the link texts when adapting.
	this.getParentSectionTranslationUnit().getMTProvider().done( function ( provider ) {
		if ( provider === 'source' ) {
			this.targetDocument.text = this.targetTitle;
		}
	}.bind( this ) );
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
mw.cx.dm.LinkTranslationUnit.prototype.getSectionId = function () {
	var id;
	// Make sure that there is an id for the unit even if id attribute is not present.
	if ( this.sourceDocument ) {
		id = this.sourceDocument.id || this.sourceDocument.dataset.linkid ||
			( this.sourceDocument.attributes[ 'href' ] && this.sourceDocument.attributes[ 'href' ].value );
	}
	// Source document does not exist. See if there is target document
	if ( !id && this.targetDocument ) {
		id = this.targetDocument.id || this.targetDocument.dataset.linkid ||
		( this.targetDocument.attributes[ 'href' ] && this.targetDocument.attributes[ 'href' ].value );
	}

	return id || OO.ui.generateElementId();
};

/**
 * @return {boolean} Whether a corresponding title exist in target language
 */
mw.cx.dm.LinkTranslationUnit.prototype.isTargetExist = function () {
	return !this.targetTitleMissing;
};

/**
 * Remove the link. Removes only from the target document.
 */
mw.cx.dm.LinkTranslationUnit.prototype.removeLink = function () {
	this.targetDocument.replaceWith( this.getTargetTitle() );
	this.targetDocument = null;
};

mw.cx.dm.LinkTranslationUnit.prototype.makeRedLink = function () {
	this.redlink = true;
};

mw.cx.dm.LinkTranslationUnit.prototype.changeLinkTarget = function ( newTarget ) {
	var href, title;
	title = mw.cx.dm.LinkTranslationUnit.static.getValidTitle( newTarget );
	if ( !title ) {
		mw.log.error( '[CX] Invalid title given' );
		return;
	}
	// Convert title to a relative URL to avoid insecure values like
	// javascript:.. appearing in it.
	if ( title.indexOf( './' ) < 0 ) {
		href = './' + title;
	}
	this.targetTitle = title;
	this.targetDocument.setAttribute( 'href', href );
	this.targetDocument.setAttribute( 'title', this.targetTitle );
};

/**
 * Get a valid normalized title from the given text
 * If the text is not suitable for the title, return null;
 * Validation is done by mw.Title
 *
 * @param {string} text Text for the title.
 * @return {string|null}
 */
mw.cx.dm.LinkTranslationUnit.static.getValidTitle = function ( text ) {
	var title = text.trim();

	title = mw.Title.newFromText( title );
	title = title && title.toText();

	return title;
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.LinkTranslationUnit );
