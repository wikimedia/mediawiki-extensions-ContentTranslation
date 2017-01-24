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
 * Initialize the translation
 * @return {jQuery.Promise}
 */
mw.cx.dm.Translation.prototype.init = function () {
	this.sourcePage = new mw.cx.dm.SourcePage( this.config );
	return this.sourcePage.init().then( function () {
		return this.onSourcePageReady().then( function() {
			this.emit( 'sourcePageReady' );
		}.bind( this ) );
	}.bind( this ) );
};

/**
 * Handler for onSourcePageReady event.
 * @return {jQuery.Promise}
 */
mw.cx.dm.Translation.prototype.onSourcePageReady = function () {
	mw.log( '[CX] Translation loaded', this );
	this.setRevisionId( this.sourcePage.revisionId );
	this.prepareTranslationUnits();
	this.targetPage = new mw.cx.dm.TargetPage( this.config );
	return this.sourcePage.getCategories().then( function( sourceCategories ) {
		return this.targetPage.adaptCategoriesFrom( this.sourceLanguage, sourceCategories );
	}.bind( this ) );
};

/**
 * Prepare translation unit data models from the source page.
 * It corresponds to each sections to translate.
 */
mw.cx.dm.Translation.prototype.prepareTranslationUnits = function () {
	var translatableSections, i;
	translatableSections = this.sourcePage.getTranslatableSections();
	// Use this for creating translation units. Once done, trigger translation view to
	// render them in the appropriate columns.
	// Use <section> tags to hold the sections in both columns;
	for ( i = 0; i < translatableSections.length; i++ ) {
		this.translationUnits[ i ] = mw.cx.dm.translationUnitFactory.create(
			'section',
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

/**
 * Get revision id
 *
 * @return {string} revision Id
 */
mw.cx.dm.Translation.prototype.getRevisionId = function () {
	return this.revisionId;
};

/**
 * Set revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setRevisionId = function ( revisionId ) {
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
