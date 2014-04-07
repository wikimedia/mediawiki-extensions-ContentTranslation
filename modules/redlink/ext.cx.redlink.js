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

	var addRedInterlanguageLink, linkInLanguageExists;

	addRedInterlanguageLink = function ( code ) {
		var $item, $link,
			autonym = mw.config.get( 'wgULSCurrentAutonym' );

		$link = $( '<a>' )
			.prop( {
				href: mw.util.getUrl(
					'Special:ContentTranslation',
					{
						page: mw.config.get( 'wgTitle' ),
						lang: code
					}
				),
				title: mw.msg( 'cx-redlink-title', autonym ),
				lang: code,
				dir: 'auto'
			} )
			.addClass( 'new' )
			.text( autonym );

		$item = $( '<li>' )
			.addClass( 'cx-new-interlanguage-link' )
			.append( $link );

		$( '#p-lang ul' )
			.prepend( $item );
	};

	linkInLanguageExists = function ( code ) {
		return ( $( 'li.interlanguage-link.interwiki-' + code ).length === 1 );
	};

	$( document ).ready( function () {
		var userLanguage = mw.config.get( 'wgUserLanguage' );

		if ( !linkInLanguageExists( userLanguage ) ) {
			addRedInterlanguageLink( userLanguage );
		}
	} );
}( jQuery, mediaWiki ) );
