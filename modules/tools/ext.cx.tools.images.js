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
	 * Canonical namespace for images.
	 */
	var imageNameSpace = 'File',
		cachedNamespaces = {};

	/**
	 * Get the namespace translation in a wiki.
	 * Use the canonical name for lookup.
	 * @param {string} targetLanguage
	 * @return {jQuery.Promise}
	 */
	function getImageNamespaceTranslation( targetLanguage ) {
		var deferred = new $.Deferred();

		if ( cachedNamespaces[ targetLanguage ] ) {
			return deferred.resolve( cachedNamespaces[ targetLanguage ] ).promise();
		}

		// @todo refactor to avoid global reference
		mw.cx.siteMapper.getApi( targetLanguage ).get( {
			action: 'query',
			meta: 'siteinfo',
			siprop: 'namespaces',
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).done( function ( response ) {
			var namespaceId, namespaceObj;

			for ( namespaceId in response.query.namespaces ) {
				namespaceObj = response.query.namespaces[ namespaceId ];
				if ( namespaceObj.canonical === imageNameSpace ) {
					cachedNamespaces[ targetLanguage ] = namespaceObj[ '*' ];
					deferred.resolve( cachedNamespaces[ targetLanguage ] );
					return;
				}
			}
			deferred.resolve( imageNameSpace );
		} ).fail( function () {
			// Fallback to canonical name
			deferred.resolve( imageNameSpace );
		} );

		return deferred.promise();
	}

	function adaptImage( $section ) {
		var targetLanguage = mw.cx.targetLanguage;

		$section.find( 'img' ).each( function () {
			var $image = $( this );

			getImageNamespaceTranslation( targetLanguage )
				.done( function ( translatedNamespace ) {
					var resource;

					resource = $image.attr( 'resource' );
					// Example replacement:
					// ./Archivo:ImageName to ./Fitxer:ImageName
					if ( resource ) {
						resource = resource.replace( /(\.\/)*(.+)(:)/g,
							'$1' + translatedNamespace + '$3' );
						$image.attr( 'resource', resource );
						// If the image has a parent link, correct its link target
						$image.parents( 'a' ).attr( 'href', resource );
					}
				} );
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptImage );
	} );
}( jQuery, mediaWiki ) );
