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

	mw.cx.ContentTranslationTools.prototype.helpMessage = function () {
		var $helpTemplate;

		$helpTemplate = '<div class="card search">' +
			'<input class="tools-words-search box"></input></div>' +
			'<div class="card instructions">' +
			'<div class="card__section">' +
			'<div class="tools serial number">' +
			'<div class="tools count one"></div></div>' +
			'<div class="instruction text">' +
			'<div class="text heading one"></div>' +
			'<div class="text description one"></div></div></div>' +
			'<div class="card__section">' +
			'<div class="tools serial number">' +
			'<div class="tools count two"></div></div>' +
			'<div class="instruction text">' +
			'<div class="text heading two"></div>' +
			'<div class="text description two"></div></div></div>' +
			'<div class="card__section">' +
			'<div class="tools serial number">' +
			'<div class="tools count three"></div></div>' +
			'<div class="instruction text">' +
			'<div class="text heading three"></div>' +
			'<div class="text description three"></div></div></div>' +
			'<div class="card__section guidelines"></div></div>';

		this.$container.append( $helpTemplate );
		this.$container.find( '.tools-words-search.box' ).attr( 'placeholder', mw.msg( 'cx-tools-searchbox-text' ) );
		this.$container.find( '.tools.count.one' ).text( mw.language.convertNumber( 1 ) );
		this.$container.find( '.text.heading.one' ).text( mw.msg( 'cx-tools-instructions-text1' ) );
		this.$container.find( '.text.description.one' ).text( mw.msg( 'cx-tools-instructions-text2' ) );
		this.$container.find( '.tools.count.two' ).text( mw.language.convertNumber( 2 ) );
		this.$container.find( '.text.heading.two' ).text( mw.msg( 'cx-tools-instructions-text3' ) );
		this.$container.find( '.text.description.two' ).text( mw.msg( 'cx-tools-instructions-text4' ) );
		this.$container.find( '.tools.count.three' ).text( mw.language.convertNumber( 3 ) );
		this.$container.find( '.text.heading.three' ).text( mw.msg( 'cx-tools-instructions-text5' ) );
		this.$container.find( '.text.description.three' ).text( mw.msg( 'cx-tools-instructions-text6' ) );
		this.$container.find( '.card__section.guidelines' )
			.html(
				mw.message(
					'cx-tools-view-guidelines',
					mw.util.getUrl( 'Wikipedia:Translation#How_to_translate' )
				).parse()
			);
	};

}( jQuery, mediaWiki ) );