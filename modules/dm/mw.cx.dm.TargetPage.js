'use strict';

/**
 * CX Target page
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} config
 */
mw.cx.dm.TargetPage = function TargetPage( config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.config = config;
	this.language = config.targetLanguage;
	this.direction = null;
	this.title = config.sourceTitle;
	this.revisionId = config.revision;
	this.requestManager = config.requestManager;
	this.section = [];
	this.categories = [];
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.TargetPage, OO.EventEmitter );

/**
 * Build the target document for publishing
 * @param {mw.cx.dm.TranslationUnit[]} translationUnits
 */
mw.cx.dm.TargetPage.prototype.build = function ( translationUnits ) {
	var i, targetDoc,
		wrapper = document.createElement( 'div' );

	for ( i = 0; i < translationUnits.length; i++ ) {
		targetDoc = translationUnits[ i ].getTargetDocument();
		if ( !targetDoc ) {
			continue;
		}
		wrapper.appendChild( targetDoc.cloneNode( true ) );
	}

	this.targetPageDocument = wrapper;
};

/**
 * Get the HTML content for publishing
 * @param {mw.cx.dm.Translation} translation
 * @return {string}
 */
mw.cx.dm.TargetPage.prototype.getContent = function ( translation ) {
	this.build( translation.getTranslationUnits() );
	return this.targetPageDocument.innerHTML;
};

/**
 * Get categories for the target article.
 * @return {string[]} Array of category titles with namespace prefix
 */
mw.cx.dm.TargetPage.prototype.getCategories = function () {
	return this.categories;
};

/**
 * Add a category to target article
 * @param {string} categoryTitle Category title with namespace prefix
 */
mw.cx.dm.TargetPage.prototype.addCategory = function ( categoryTitle ) {
	this.categories.push( categoryTitle );
};

/**
 * Remove a category to target article
 * @param {string} categoryTitle Category title with namespace prefix
 */
mw.cx.dm.TargetPage.prototype.removeCategory = function ( categoryTitle ) {
	var index = this.categories.indexOf( categoryTitle );
	if ( index > -1 ) {
		this.categories.splice( index, 1 );
	}
};

/**
 * Adapt and add categories from an array of categories
 * @param {string} sourceLanguage Source language
 * @param {string[]} sourceCategories Array of source category titles, with namespace prefix
 * @return {jQuery.Promise}
 */
mw.cx.dm.TargetPage.prototype.adaptCategoriesFrom = function ( sourceLanguage, sourceCategories ) {
	var i, category,
		deferreds = [];

	for ( i = 0; i < sourceCategories.length; i++ ) {
		category = sourceCategories[ i ];
		deferreds.push( this.requestManager.getTitlePair( sourceLanguage, category )
			.then( function ( pairInfo ) {
				if ( pairInfo.targetTitle ) {
					this.addCategory( pairInfo.targetTitle );
				}
			}.bind( this ) )
		);
	}
	// Note that requestManager will take care of combining all these categories
	// to a single network request.
	return $.when.apply( $, deferreds );
};
