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
	 * Fetch the source content filter configuration for the given
	 * language pairs
	 */
	function fetchFilterConfiguration( sourceLanguage, targetLanguage ) {
		return $.getJSON( mw.config.get( 'wgExtensionAssetsPath' ) +
			'/ContentTranslation/modules/source/conf/' + sourceLanguage + '-' + targetLanguage + '.json' );
	}

	/**
	 * CXSourceFilter
	 *
	 * @class
	 */
	function CXSourceFilter( element ) {
		this.$container = $( element );
		this.listen();
	}

	CXSourceFilter.prototype.filter = function ( configuration ) {
		$( '[typeof="mw:Transclusion"]' ).each( function () {
			var mwData, $template = $( this ),
				templateName, templateFragments, templateConf;

			mwData = $template.data( 'mw' );
			templateName = mwData.parts[ 0 ].template.target.wt;
			templateName = templateName.trim();
			if ( configuration ) {
				templateConf = configuration.templates && configuration.templates[ templateName ];

				// See www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Transclusion_content
				// Template information is stored in parsoid-data attribute with an element with
				// mw:Transcusion type, while the template rendering can be a different html element.
				// They are connected using 'about' attribute.
				templateFragments = $template.attr( 'about' );
				if ( !templateConf ) {
					// No configuration for the given template name found. So delete.
					mw.log( '[CX] Removing template:' + templateName );
					$template.remove();
					// Remove the associated template renderings too.
					if ( templateFragments ) {
						$( '[about="' + templateFragments + '"]' ).remove();
					}
					return;
				}
				mwData.parts[ 0 ].template.target.wt = templateConf.targetname;
				$template.attr( 'data-mw', JSON.stringify( mwData ) );
				if ( !templateConf.editable ) {
					$template.attr( 'data-editable', false );
				}
				mw.log( '[CX] Keeping template:' + templateName );
			} else {
				mw.log( '[CX] Removing template:' + templateName );
				$template.remove();
			}
		} );
		mw.hook( 'mw.cx.source.ready' ).fire();
	};

	CXSourceFilter.prototype.listen = function () {
		var filter = this;
		mw.hook( 'mw.cx.source.loaded' ).add( function () {
			fetchFilterConfiguration( mw.cx.sourceLanguage, mw.cx.targetLanguage ).done( function ( configuration ) {
				filter.filter( configuration );
			} ).fail( function ( jqXHR ) {
				if ( jqXHR.status === 404 ) {
					// If the configuration file is not present, filter all.
					filter.filter();
				} else {
					// TODO: Show in UI when we have a general error display mechanism.
					mw.log( '[CX] Failed to fetch template configuration.' + jqXHR.responseText );
				}
			} );
		} );
	};

	$.fn.cxFilterSource = function () {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSourceFilter' );

			if ( !data ) {
				$this.data(
					'cxSourceFilter', ( data = new CXSourceFilter( this ) )
				);
			}

		} );
	};

	$.fn.cxSource.defaults = {};
}( jQuery, mediaWiki ) );
