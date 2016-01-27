/*!
 * Module to interface with article recommendation tool AND to get seeds for the tool.
 *
 * The recommendation tool is also known as trex in this code.
 *
 * See http://recommend.wmflabs.org/ and https://github.com/ewulczyn/translation-recs-app
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * RecommendTool
	 *
	 * @class
	 */
	function RecommendTool( from, to ) {
		this.sourceLanguage = from;
		this.targetLanguage = to;
		this.algorithms = [ 'wiki', 'morelike' ];
		this.seeds = null;
	}

	/**
	 * Get a seed page for the current language pair.
	 * The seed page is one of the previous translations (of any status) by the user.
	 *
	 * @return {jQuery.Promise}
	 */
	RecommendTool.prototype.getSeedPages = function () {
		var params,
			self = this,
			api = new mw.Api();

		if ( this.seeds ) {
			// We have seeds. So provide first 3.
			// If we ran out of seeds, we will return empty seeds and that is ok.
			return $.Deferred().resolve( this.seeds.splice( 0, 3 ) );
		}

		// Collect a bunch of seed pages from previous translations.
		// This API is also used for fetching the translations of user from translationlist module.
		// Effectively, the following request is duplicate. But it does not look like a good idea
		// to have dependency on translation list for this module. There are some complications as
		// well with sharing data - we are not sure which module gets initated first.
		params = {
			list: 'contenttranslation',
			from: this.sourceLanguage,
			to: this.targetLanguage,
			limit: 50
		};

		return api.get( params ).then( function ( response ) {
			self.seeds = $.map( response.query.contenttranslation.translations, function ( value ) {
				return value.translation.sourceTitle;
			} );

			return self.seeds.splice( 0, 3 );
		} );
	};

	/**
	 * @return {jQuery.Promise}
	 */
	RecommendTool.prototype.getSuggestionList = function () {
		var self = this,
			algorithm;

		// Choose a random algorithm
		algorithm = this.algorithms[ Math.floor( Math.random() * this.algorithms.length ) ];
		return this.getSeedPages().then( function ( seedPages ) {
			return $.get( 'https://recommend.wmflabs.org/api', {
				s: self.sourceLanguage,
				t: self.targetLanguage,
				article: seedPages.join( '|' ),
				search: algorithm,
				application: 'CX'
			} ).then( function ( response ) {
				return self.adapt( response.articles, algorithm );
			} );
		} );
	};

	/**
	 * Adapt the API response of Recommendation tool to the CX suggestion list format.
	 *
	 * @param {Object} articles
	 * @param {string} algorithm The algorithm used.
	 * @return {Object}
	 */
	RecommendTool.prototype.adapt = function ( articles, algorithm ) {
		var i, title, suggestions = [];

		for ( i = 0; i < articles.length; i++ ) {
			title = mw.Title.newFromText( articles[ i ].title );
			if ( !title ) {
				continue;
			}

			suggestions.push( {
				title: title.getPrefixedText(),
				sourceLanguage: this.sourceLanguage,
				targetLanguage: this.targetLanguage,
				pageviews: articles[ i ].pageviews,
				listId: 'trex'
			} );
		}

		return {
			lists: {
				trex: {
					name: 'cx-suggestionlist-trex',
					type: 5,
					algorithm: algorithm,
					suggestions: suggestions
				}
			}
		};
	};

	mw.cx.recommendtool = RecommendTool;
}( jQuery, mediaWiki ) );
