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
mw.cx.dm.Translation = function mwcxTranslation( config ) {
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
	this.progress = null;
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
			translatableSections[ i ] );
	}
};

mw.cx.dm.Translation.prototype.getTranslationUnits = function () {
	return this.translationUnits;
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

mw.cx.dm.Translation.prototype.getSourcePage = function() {
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

mw.cx.dm.Translation.prototype.getTargetPage = function() {
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

/**
 * Get revision id
 *
 * @return {string} revision Id
 */
mw.cx.dm.Translation.prototype.getSourceRevision = function () {
	return this.revisionId;
};

/**
 * Set revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setSourceRevision = function ( revisionId ) {
	this.revisionId = revisionId;
};

/**
 * Set Translation title
 *
 * @param {string} title Translation Id
 */
mw.cx.dm.Translation.prototype.setTargetTitle = function ( title ) {
	this.targetTitle = title;
};

mw.cx.dm.Translation.prototype.setStatus = function ( status ) {
	this.status = status;
};

mw.cx.dm.Translation.prototype.setProgress = function ( progress ) {
	this.progress = progress;
};
