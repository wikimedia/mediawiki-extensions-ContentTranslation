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
	 * Reference Card
	 * @class
	 */
	function ReferenceCard() {
		this.$card = null;
		this.$removeReference = null;
		this.$reference = null;
	}

	/**
	 * Get the reference card
	 * @return {jQuery}
	 */
	ReferenceCard.prototype.getCard = function () {
		var $referenceInfo, $cardHeader;

		this.$card = $( '<div>' )
			.addClass( 'card reference' );
		this.$removeReference = $( '<div>' )
			.addClass( 'card__remove-reference' )
			.text( mw.msg( 'cx-tools-reference-remove' ) );

		$referenceInfo = $( '<div>' )
			.addClass( 'card__reference-info' );
		$cardHeader = $( '<div>' )
			.addClass( 'card__reference-header' );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-reference-title' ) ) );
		$cardHeader.append( $( '<div>' )
			.addClass( 'card__title--language' ) );
		$referenceInfo.append( $cardHeader );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__reference-number' ) );
		$referenceInfo.append( $( '<div>' )
			.addClass( 'card__reference-content' ) );

		$referenceInfo.append( this.$removeReference );
		this.$card.append( $referenceInfo );
		this.listen();
		return this.$card;
	};

	ReferenceCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	/**
	 * Remove the reference
	 */
	ReferenceCard.prototype.removeReference = function () {
		if ( this.$reference ) {
			this.$reference.remove();
			this.stop();
		}
	};

	/**
	 * Event handlers
	 */
	ReferenceCard.prototype.listen = function () {
		this.$removeReference.on( 'click', $.proxy( this.removeReference, this ) );
	};

	ReferenceCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};
	/**
	 * Start presenting the reference card
	 * @param {string} refNumber The reference number. Example: [4]
	 * @param {string} reference The reference content. Can be html.
	 * @param {jQuery} [$reference] The jquery object related to reference. If passed,
	 *   the reference card give and option to delete it.
	 * @param {string} [language] Language code of language where this reference exist.
	 */
	ReferenceCard.prototype.start = function ( refNumber, reference, $reference, language ) {
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
		this.$card.find( '.card__title--language' )
			.text( $.uls.data.getAutonym( language || mw.cx.sourceLanguage ) );
		this.$card.find( 'a' ).attr( 'target', '_blank' );
		this.onShow();
	};

	ReferenceCard.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( false );
	};

	ReferenceCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.reference',
			'mw.cx.search.reference'
		];
	};

	/**
	 * jQuery plugin to adapt all the references with rel="mw:WikiLink"
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
