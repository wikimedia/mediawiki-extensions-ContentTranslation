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

	function LinkCard() {
		this.$card = null;
		this.$removeLink = null;
		this.$link = null;
	}

	LinkCard.prototype.getCard = function () {

		this.$card = $( '<div>' )
			.addClass( 'card link' );

		this.$removeLink = $( '<div>' )
			.addClass( 'card__remove-link' )
			.text( mw.msg( 'cx-tools-link-remove' ) );

		this.$card.append( this.$removeLink );
		this.listen();
		return this.$card;
	};

	LinkCard.prototype.removeLink = function () {
		if ( this.$link ) {
			this.$link.after( this.$link.text() ).remove();
			this.$removeLink.hide();
		}
	};

	LinkCard.prototype.listen = function () {
		this.$removeLink.on( 'click', $.proxy( this.removeLink, this ) );
	};

	LinkCard.prototype.start = function ( link ) {
		var word;
		if ( typeof link === 'string' ) {
			word = link;
		} else {
			this.$link = link;
		}
		if ( word === '' || !this.$link ) {
			this.stop();
			return;
		}
	};

	LinkCard.prototype.stop = function () {
		this.$card.remove();
	};

	LinkCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.select.link',
			'mw.cx.search.link'
		];
	};

	mw.cx.tools.link = LinkCard;
}( jQuery, mediaWiki ) );
