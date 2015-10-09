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
		var deferred = $.Deferred();

		if ( cachedNamespaces[ targetLanguage ] ) {
			return deferred.resolve( cachedNamespaces[ targetLanguage ] ).promise();
		}

		// TODO: Refactor to avoid global reference
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

	/**
	 * Check if an image is coming from Commons or not.
	 * Uses the URL pattern of the common file repository to determine
	 * whether the image is stored there.
	 *
	 * @param {jQuery} $image
	 * @return {boolean}
	 */
	function isCommonsImage( $image ) {
		// TODO: Make non-Wikimedia specific
		if ( $image.attr( 'src' ).indexOf( '//upload.wikimedia.org/wikipedia/commons/' ) === 0 ) {
			return true;
		}

		return false;
	}

	/**
	 * Remove all non-Commons images since we cannot use them in target wiki.
	 */
	function removeNonCommonsImages() {
		$( '[typeof*="mw:Image/Thumb"] img' ).each( function () {
			var $image = $( this );

			if ( !isCommonsImage( $image ) ) {
				$image.parents( 'figure' ).remove();
			}
		} );
	}

	/**
	 * Adapt the image's alignment settings for the target language.
	 * @param {jQuery} $image
	 */
	function adaptImageAlignment( $image ) {
		var $figure;

		if ( $.uls.data.getDir( mw.cx.sourceLanguage ) ===
			$.uls.data.getDir( mw.cx.targetLanguage )
		) {
			// If the target language's direction is the same,
			// there's nothing to do
			return;
		}

		$figure = $image.parents( 'figure' );

		// If the image has an explicit alignment class in HTML,
		// this means that it has explicit alignment defined in
		// wiki syntax.
		// It must be explicitly flipped if the target language's direction
		// is different.
		if ( $figure.hasClass( 'mw-halign-right' ) ) {
			$figure.removeClass( 'mw-halign-right' );
			$figure.addClass( 'mw-halign-left' );
		} else if ( $figure.hasClass( 'mw-halign-left' ) ) {
			$figure.removeClass( 'mw-halign-left' );
			$figure.addClass( 'mw-halign-right' );
		}
	}

	function adaptImage( $section ) {
		$section.find( 'img' ).each( function () {
			var imageId, $sourceSection, $sourceImage,
				$image = $( this );

			imageId = $image.prop( 'id' );
			if ( !imageId ) {
				return;
			}

			$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
			$sourceImage = $sourceSection.find( '#' + imageId );
			$image.on( 'click', function ( event ) {
				// Avoid opening images by clicking.
				event.preventDefault();
			} );

			// Copy data-mw if any from source image.
			// Math extension's images, for example, carry the equation to render in its data-mw.
			$image.attr( 'data-mw', $sourceImage.attr( 'data-mw' ) );

			adaptImageAlignment( $image );

			getImageNamespaceTranslation( mw.cx.targetLanguage )
				.done( function ( translatedNamespace ) {
					var resource;

					resource = $image.attr( 'resource' );
					// Example replacement:
					// ./Archivo:ImageName (es) to ./Fitxer:ImageName (ca)
					if ( resource ) {
						resource = resource.replace( /(\.\/)*(.+)(:)/g,
							'$1' + translatedNamespace + '$3' );

						$image.attr( {
							resource: resource,
							id: 'cx' + $sourceImage.prop( 'id' )
						} );

						// If the image has a parent link, correct its link target
						$image.parents( 'a' ).attr( 'href', resource );
					}
				} );
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptImage );
		mw.hook( 'mw.cx.source.loaded' ).add( removeNonCommonsImages );
	} );
}( jQuery, mediaWiki ) );
