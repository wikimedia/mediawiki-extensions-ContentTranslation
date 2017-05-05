'use strict';

/**
 * CX Translation model
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} config
 */
mw.cx.dm.Translation = function MwCxDmTranslation( config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.config = config;
	this.id = null;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;
	this.sourceTitle = config.sourceTitle;
	this.targetTitle = config.targetTitle;
	this.sourcePage = null;
	this.targetPage = null;
	this.translator = null;
	this.revisionId = config.sourceRevision;
	this.startDate = null;
	this.status = 'draft';
	this.progress = {
		any: 0,
		human: 0,
		mt: 0,
		mtSectionsCount: 0
	};
	this.translationUnits = [];
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.Translation, OO.EventEmitter );

/**
 * Prepare translation unit data models from the source page.
 * It corresponds to each sections to translate.
 */
mw.cx.dm.Translation.prototype.prepareTranslationUnits = function () {
	var translatableSections, i, model;

	translatableSections = this.sourcePage.getTranslatableSections();
	// Use this for creating translation units. Once done, trigger translation view to
	// render them in the appropriate columns.
	// Use <section> tags to hold the sections in both columns;
	for ( i = 0; i < translatableSections.length; i++ ) {
		model = mw.cx.dm.modelRegistry.matchElement( translatableSections[ i ] );
		if ( !model ) {
			continue;
		}
		this.translationUnits[ i ] = mw.cx.dm.translationUnitFactory.create(
			model,
			this.config,
			this,
			translatableSections[ i ]
		);
	}
};

mw.cx.dm.Translation.prototype.getTranslationUnits = function () {
	return this.translationUnits;
};

mw.cx.dm.Translation.prototype.getTargetPage = function () {
	return this.targetPage;
};

/**
 * Get Translation id
 *
 * @return {string} Translation Id
 */
mw.cx.dm.Translation.prototype.getId = function () {
	return this.id;
};

/**
 * Set Translation id
 *
 * @param {string} id Translation Id
 */
mw.cx.dm.Translation.prototype.setId = function ( id ) {
	this.id = id;
};

mw.cx.dm.Translation.prototype.getSourcePage = function () {
	return this.sourcePage;
};

/**
 * Set source page
 *
 * @param {mw.cx.dm.SourcePage} sourcePage
 */
mw.cx.dm.Translation.prototype.setSourcePage = function ( sourcePage ) {
	this.sourcePage = sourcePage;
};

mw.cx.dm.Translation.prototype.getTargetPage = function () {
	return this.targetPage;
};

/**
 * Set target page
 *
 * @param {mw.cx.dm.TargetPage} targetPage
 */
mw.cx.dm.Translation.prototype.setTargetPage = function ( targetPage ) {
	this.targetPage = targetPage;
};

mw.cx.dm.Translation.prototype.setTargetURL = function ( targetURL ) {
	this.targetURL = targetURL;
};

/**
 * Get revision id
 *
 * @return {string} revision Id
 */
mw.cx.dm.Translation.prototype.getSourceRevisionId = function () {
	return this.revisionId;
};

/**
 * Set revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setSourceRevisionId = function ( revisionId ) {
	this.revisionId = revisionId;
};

/**
 * Set target revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setTargetRevisionId = function ( revisionId ) {
	this.targetRevisionId = revisionId;
};

/**
 * Set Translation title
 *
 * @param {string} title Translation Id
 */
mw.cx.dm.Translation.prototype.setTargetTitle = function ( title ) {
	if ( title === this.targetTitle ) {
		// No title change
		return;
	}
	this.targetTitle = title;
	// Translation title change is a change trigger for translation.
	this.emit( 'change' );
};

/**
 * Get Translation title
 * @return {string} Target title
 */
mw.cx.dm.Translation.prototype.getTargetTitle = function () {
	return this.targetTitle;
};

mw.cx.dm.Translation.prototype.setStatus = function ( status ) {
	this.status = status;
};

mw.cx.dm.Translation.prototype.setProgress = function ( progress ) {
	this.progress = progress;
};

mw.cx.dm.Translation.prototype.getProgress = function () {
	return this.progress;
};
