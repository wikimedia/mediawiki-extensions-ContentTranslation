/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	// Cached dictionary providers
	var cache = {},
		cachedProviders = null;

	/**
	 * A plugin that adds text to an element,
	 * converting explicit line endings to <br /> elements
	 *
	 * @param {string} text
	 * @return {jQuery}
	 */
	$.fn.multiline = function ( text ) {
		this.text( text );
		this.html( this.html().replace( /\n/g, '<br />' ) );

		return this;
	};

	/**
	 * @param {mw.cx.SiteMapper} siteMapper
	 */
	function DictionaryCard( siteMapper ) {
		this.$card = null;
		this.$translations = null;
		this.$definition = null;

		this.siteMapper = siteMapper;
	}

	DictionaryCard.prototype.getCard = function () {
		var sourceLangProps, targetLangProps,
			$title, $languageSelector, $titleRow,
			$headword, $expand,
			targetAutonym = $.uls.data.getAutonym( mw.cx.targetLanguage );

		sourceLangProps = {
			lang: mw.cx.sourceLanguage,
			dir: $.uls.data.getDir( mw.cx.sourceLanguage )
		};
		targetLangProps = {
			lang: mw.cx.targetLanguage,
			dir: $.uls.data.getDir( mw.cx.targetLanguage )
		};

		this.$card = $( '<div>' )
			.addClass( 'card dictionary' );

		$title = $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-dictionary-title' ) );

		$languageSelector = $( '<div>' )
			.addClass( 'card__title-language-selector' )
			.prop( targetLangProps )
			.text( targetAutonym );

		$titleRow = $( '<div>' )
			.addClass( 'card__title-row' )
			.append( $title, $languageSelector );

		$headword = $( '<div>' )
			.prop( sourceLangProps )
			.addClass( 'card__headword' );

		this.$definition = $( '<div>' )
			.prop( sourceLangProps )
			.addClass( 'card__definition' ); // TODO

		this.$translationsBlock = $( '<div>' )
			.prop( targetLangProps )
			.addClass( 'card__translations' );

		$expand = $( '<div>' )
			.addClass( 'card__expand' );

		this.$card.append(
			$titleRow,
			$headword,
			this.$definition,
			this.$translationsBlock,
			$expand
		);

		this.hide();

		return this.$card;
	};

	/**
	 * Do the dictionary translation
	 *
	 * @param {string} word The word to translate using a dictionary
	 * @param {string} from Source language
	 * @param {string} to Target language
	 * @param {string} provider Provider id
	 * @return {jQuery.Promise}
	 */
	DictionaryCard.prototype.getTranslation = function ( word, from, to, provider ) {
		var dictUrl, request;

		if ( cache[ word ] &&
			cache[ word ][ from ] &&
			cache[ word ][ from ][ to ] &&
			cache[ word ][ from ][ to ][ provider ]
		) {
			return cache[ word ][ from ][ to ][ provider ];
		}

		// TODO: Refactor to avoid global access
		dictUrl = this.siteMapper.getCXServerUrl( '/dictionary/$word/$from/$to/$provider', {
			$word: word,
			$from: from,
			$to: to,
			$provider: provider
		} );

		request = $.get( dictUrl );
		// Create the cache object
		cache[ word ] = cache[ word ] || {};
		cache[ word ][ from ] = cache[ word ][ from ] || {};
		cache[ word ][ from ][ to ] = cache[ word ][ from ][ to ] || {};
		cache[ word ][ from ][ to ][ provider ] = request;

		return request;
	};

	/**
	 * Get the registry of dictionary providers for a language pair from the CX server.
	 *
	 * @param {string} from Source language
	 * @param {string} to Target language
	 * @return {jQuery.Promise}
	 */
	DictionaryCard.prototype.getProviders = function ( from, to ) {
		var fetchProvidersUrl,
			deferred = $.Deferred();

		if ( cachedProviders ) {
			return deferred.resolve( cachedProviders );
		}

		// TODO: Refactor to avoid global access
		fetchProvidersUrl = mw.cx.siteMapper.getCXServerUrl( '/list/dictionary/$from/$to', {
			$from: from,
			$to: to
		} );

		$.get( fetchProvidersUrl )
			.done( function ( response ) {
				DictionaryCard.providers = response.dictionary;

				if ( $.isEmptyObject( DictionaryCard.providers ) ) {
					deferred.reject();
				} else {
					cachedProviders = DictionaryCard.providers;
					deferred.resolve( cachedProviders );
				}
			} )
			.fail( function ( response ) {
				mw.log(
					'Error getting dictionary providers from ' + fetchProvidersUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);
				deferred.reject();
			} );

		return deferred.promise();
	};

	DictionaryCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	DictionaryCard.prototype.showResult = function ( response ) {
		var i, $translation;

		this.show();

		if ( response.translations && response.translations.length ) {
			for ( i = 0; i < response.translations.length; i++ ) {
				$translation = $( '<div>' )
					.addClass( 'card__translation' )
					.text( response.translations[ i ].phrase );
				this.$translationsBlock.append( $translation );
			}
		} else {
			if ( response.freetext && response.freetext.length ) {
				this.$definition.multiline( response.freetext[ 0 ].text );
			} else {
				this.stop();
			}
		}
	};

	/**
	 * Hide the card.
	 */
	DictionaryCard.prototype.hide = function () {
		this.$card.hide();
	};

	/**
	 * Show the card.
	 */
	DictionaryCard.prototype.show = function () {
		this.$card.show();
		this.onShow();
	};

	/**
	 * @param {string} word
	 * @param {string} [sourceLanguage]
	 * @param {string} [targetLanguage]
	 */
	DictionaryCard.prototype.start = function ( word, sourceLanguage, targetLanguage ) {
		var dictionaryCard = this;

		sourceLanguage = sourceLanguage || mw.cx.sourceLanguage;
		targetLanguage = targetLanguage || mw.cx.targetLanguage;
		// Don't appear if there's nothing to translate
		if ( word === '' ||
			// Avoid text selections with whitespace characters
			// treated as words and going to api.
			word.match( /[\s.]+/ )
		) {
			this.stop();

			return;
		}

		// Normalize the case to lowercase.
		word = word.toLowerCase();

		// Set the source word
		this.$card.find( '.card__headword' ).text( word );

		this.getProviders( sourceLanguage, targetLanguage )
			.done( function ( providers ) {
				var provider;

				// TODO: Now we use the first one. If there is a selector UI for this,
				// this will come from selected provider.
				provider = providers[ 0 ];
				// Try to get a translation.
				// Don't appear if getting the translation fails.
				dictionaryCard.getTranslation( word, sourceLanguage, targetLanguage, provider )
					.done( $.proxy( dictionaryCard.showResult, dictionaryCard ) )
					.fail( $.proxy( dictionaryCard.stop, dictionaryCard ) );
			} ).fail( $.proxy( this.stop, this ) );
	};

	DictionaryCard.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	DictionaryCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.word',
			'mw.cx.search.word'
		];
	};

	mw.cx.tools.dictionary = DictionaryCard;
}( jQuery, mediaWiki ) );
