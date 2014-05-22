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

	$.fn.multiline = function ( text ) {
		this.text( text );
		this.html( this.html().replace( /\n/g, '<br/>' ) );
		return this;
	};

	function DictionaryCard() {
		this.$card = null;
		this.$translations = null;
		this.$definition = null;
	}

	DictionaryCard.prototype.getCard = function () {
		var $titleRow, $title, $languageSelector, $closeButton,
			$headword, $expand,
			forwardArrow = $( 'html' ).prop( 'dir' ) === 'ltr' ? '→' : '←',
			sourceAutonym = $.uls.data.getAutonym( mw.cx.sourceLanguage ),
			targetAutonym = $.uls.data.getAutonym( mw.cx.targetLanguage );

		this.$card = $( '<div>' )
			.addClass( 'card dictionary' );
		$title = $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-dictionary-title' ) );

		$languageSelector = $( '<div>' )
			.addClass( 'card__title-language-selector' )
			.text( sourceAutonym + forwardArrow + targetAutonym );

		$titleRow = $( '<div>' )
			.addClass( 'card__title-row' )
			.append(
				$title,
				$languageSelector,
				$closeButton
		);

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

	function getTranslation( word, from, to ) {
		var dictUrl;

		dictUrl = mw.config.get( 'wgContentTranslationServerURL' ) + '/dictionary/' +
			word + '/' + from + '/' + to;

		return $.get( dictUrl );
	}

	DictionaryCard.prototype.showResult = function ( response ) {
		var i, $translaton;

		if ( response.translations && response.translations.length ) {
			for ( i = 0; i < response.translations.length; i++ ) {
				$translaton = $( '<div>' )
					.addClass( 'card__translation' )
					.text( response.translations[ i ].phrase );
				this.$translationsBlock.append( $translaton );
			}
		} else {
			if ( response.freetext && response.freetext.length ) {
				this.$definition.multiline( response.freetext[ 0 ].text );
			} else {
				this.stop();
			}
		}
	};

	DictionaryCard.prototype.start = function ( word ) {
		if ( word === '' ) {
			this.stop();
			return;
		}
		this.$card.find( '.card__headword' ).text( word );
		getTranslation( word, mw.cx.sourceLanguage, mw.cx.targetLanguage )
			.done( $.proxy( this.showResult, this ) );
	};

	DictionaryCard.prototype.stop = function () {
		this.$card.remove();
	};

	DictionaryCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.word',
			'mw.cx.select.link',
			'mw.cx.search.word'
		];
	};

	mw.cx.tools.dictionary = DictionaryCard;
}( jQuery, mediaWiki ) );
