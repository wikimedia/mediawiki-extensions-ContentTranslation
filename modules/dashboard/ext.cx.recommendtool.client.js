/*!
 * Module to interface with article recommendation tool AND to get seeds for the tool.
 *
 * The recommendation tool is also known as trex in this code.
 *
 * See https://recommend.wmflabs.org/ and research/recommendation-api at Gerrit.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * RecommendTool
	 *
	 * @class
	 * @param {string} from Source language
	 * @param {string} to target language
	 */
	function RecommendTool( from, to ) {
		this.sourceLanguage = from;
		this.targetLanguage = to;
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
			assert: 'user',
			list: 'contenttranslation',
			from: this.sourceLanguage,
			to: this.targetLanguage,
			limit: 50
		};

		return api.get( params ).then( function ( response ) {
			self.seeds = response.query.contenttranslation.translations.map( function ( value ) {
				return value.translation.sourceTitle;
			} );

			return self.seeds.splice( 0, 3 );
		} );
	};

	/**
	 * @return {jQuery.Promise}
	 */
	RecommendTool.prototype.getSuggestionList = function () {
		var self = this;

		return this.getSeedPages().then( function ( seedPages ) {
			var algorithms, algorithm;

			algorithms = [ 'morelike', 'related_articles' ];
			algorithm = algorithms[ Math.floor( Math.random() * algorithms.length ) ];
			return $.get( mw.config.get( 'wgRecommendToolAPIURL' ), {
				source: self.sourceLanguage,
				target: self.targetLanguage,
				seed: seedPages.join( '|' ),
				search: algorithm,
				application: 'CX'
			} ).then( function ( articles ) {
				return self.adapt( articles, algorithm );
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
				wikidataId: articles[ i ].wikidata_id,
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

	mw.cx.Recommendtool = RecommendTool;
}() );
