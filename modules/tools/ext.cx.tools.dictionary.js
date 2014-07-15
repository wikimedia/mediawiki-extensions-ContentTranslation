/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * A plugin that adds text to an element,
	 * converting explicit line endings to <br /> elements
	 * @param {text} text
	 */
	$.fn.multiline = function ( text ) {
		this.text( text );
		this.html( this.html().replace( /\n/g, '<br />' ) );

		return this;
	};

	function DictionaryCard() {
		this.$card = null;
		this.$translations = null;
		this.$definition = null;
	}

	DictionaryCard.prototype.getCard = function () {
		var $titleRow, $title, $languageSelector,
			$headword, $expand,
			targetAutonym = $.uls.data.getAutonym( mw.cx.targetLanguage );

		this.$card = $( '<div>' )
			.addClass( 'card dictionary' );

		$title = $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-dictionary-title' ) );

		$languageSelector = $( '<div>' )
			.addClass( 'card__title-language-selector' )
			.text( targetAutonym );

		$titleRow = $( '<div>' )
			.addClass( 'card__title-row' )
			.append( $title, $languageSelector );

		$headword = $( '<div>' )
			.addClass( 'card__headword' );

		this.$definition = $( '<div>' )
			.addClass( 'card__definition' ); // TODO

		this.$translationsBlock = $( '<div>' )
			.addClass( 'card__translations' );
		$expand = $( '<div>' )
			.addClass( 'card__expand' );

		return this.$card.append(
			$titleRow,
			$headword,
			this.$definition,
			this.$translationsBlock,
			$expand
		);
	};

	/**
	 * Do the dictionary translation
	 * @param {string} word The word to translate using a dictionary
	 * @param {string} from Source language
	 * @param {string} to Target language
	 * @return {jQuery.Promise}
	 */
	function getTranslation( word, from, to ) {
		var dictUrl = mw.config.get( 'wgContentTranslationServerURL' ) + '/dictionary/' +
			word + '/' + from + '/' + to;

		return $.get( dictUrl );
	}

	DictionaryCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	DictionaryCard.prototype.showResult = function ( response ) {
		var i, $translation;

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

		this.onShow();
	};

	DictionaryCard.prototype.start = function ( word ) {
		// Don't appear if there's nothing to translate
		if ( word === '' ) {
			this.stop();

			return;
		}

		// Show the source word and get a translation,
		// and don't appear if getting the translation fails
		this.$card.find( '.card__headword' ).text( word );
		getTranslation( word, mw.cx.sourceLanguage, mw.cx.targetLanguage )
			.done( $.proxy( this.showResult, this ) )
			.fail( $.proxy( this.stop, this ) );
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
