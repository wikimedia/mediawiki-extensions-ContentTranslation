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

	function ReferenceCard() {
		this.$card = null;
		this.$removeReference = null;
		this.$reference = null;
	}

	ReferenceCard.prototype.getCard = function () {
		var $referenceInfo;

		this.$card = $( '<div>' )
			.addClass( 'card reference' );
		this.$removeReference = $( '<div>' )
			.addClass( 'card__remove-reference' )
			.text( mw.msg( 'cx-tools-reference-remove' ) );

		$referenceInfo = $( '<div>' )
			.addClass( 'card__reference-info' );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-reference-title' ) ) );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__reference-number' ) );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__reference-content' ) );

		$referenceInfo.append( this.$removeReference );
		this.$card.append( $referenceInfo );
		this.listen();
		return this.$card;
	};

	ReferenceCard.prototype.removeReference = function () {
		if ( this.$reference ) {
			this.$reference.remove();
			this.stop();
		}
	};

	ReferenceCard.prototype.listen = function () {
		this.$removeReference.on( 'click', $.proxy( this.removeReference, this ) );
	};

	ReferenceCard.prototype.start = function ( refNumber, reference, $reference ) {
		this.$card.find( '.card__reference-number' )
			.text( refNumber );
		this.$card.find( '.card__reference-content' )
			.html( reference.body.html );
		if ( $reference ) {
			this.$reference = $reference;
			this.$removeReference.on( 'click', $.proxy( this.removeReference, this ) );
		} else {
			this.$removeReference.remove();
		}
	};

	ReferenceCard.prototype.stop = function () {
		this.$card.remove();
	};

	ReferenceCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.reference',
			'mw.cx.search.reference'
		];
	};
	/**
	 * jQuery plugin to adapt all the references with rel="mw:WikiLink"
	 * @param {string} targetLanguage
	 */
	$.fn.adaptReferences = function () {
		return this.each( function () {
			var $this = $( this );

			$this.on( 'click', '[typeof="mw:Extension/ref"]', function () {
				var $reference = $( this );
				mw.hook( 'mw.cx.select.reference' ).fire( $reference.text(), $reference.data( 'mw' ), $reference );
			} );
		} );
	};

	mw.cx.tools.reference = ReferenceCard;
}( jQuery, mediaWiki ) );
