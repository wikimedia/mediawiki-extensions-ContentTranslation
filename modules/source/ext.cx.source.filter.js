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

	/**
	 * Simple check for inline templates.
	 * @param {jQuery} $template
	 * @return {boolean} Whether the template is inline or not.
	 */
	function isInlineTemplate( $template ) {
		var aboutAttr;

		// we need to identify whether the template is a section or inline section.
		// In CX the html elements that are considered as a section is defined in
		// mw.cx.getSectionSelector()
		if ( $template.is( mw.cx.getSectionSelector() ) ) {
			return false;
		}
		// See https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Transclusion_content
		aboutAttr = $template.attr( 'about' );
		if ( aboutAttr ) {
			// In a page, there will n number of elements with same about attribute
			// For templates, n is 2, from observation. There can be templates without about
			// attribute, but such templates are self contained, and already handled above.
			return !$( '[about="' + aboutAttr + '"]:eq( 1 )' ).is( mw.cx.getSectionSelector() );
		}

		return true;
	}

	/**
	 * Filter the templates present in source article based on the configuration
	 * @param {Object} configuration
	 */
	CXSourceFilter.prototype.filter = function ( configuration ) {
		var sourceFilter = this;

		$( '[typeof="mw:Transclusion"]' ).each( function () {
			var title, mwData, templateName, templateConf,
				$template = $( this );

			mwData = $template.data( 'mw' );
			if ( !mwData ) {
				mw.log( '[CX] Skipping template!' );
				return;
			}

			templateName = mwData.parts[ 0 ].template.target.wt;
			templateName = templateName.trim();

			// Normalize the name
			title = mw.Title.newFromText( templateName );
			if ( title ) {
				templateName = title.getPrefixedText();
			}

			templateConf = configuration &&
				configuration.templates &&
				configuration.templates[ templateName ];

			if ( templateConf ) {
				mw.log( '[CX] Keeping template: ' + templateName );
				$template.attr( {
					'data-editable': templateConf.editable,
					'data-template-mapping': JSON.stringify( templateConf )
				} );

				return;
			}

			if ( isInlineTemplate( $template ) ) {
				mw.log( '[CX] Keeping inline template: ' + templateName );
			} else {
				mw.log( '[CX] Removing template: ' + templateName );
				sourceFilter.removeTemplate( $template );
			}
		} );
		mw.hook( 'mw.cx.source.ready' ).fire();
	};

	/**
	 * Remove a template
	 * @param {jQuery} $template
	 */
	CXSourceFilter.prototype.removeTemplate = function ( $template ) {
		var templateFragments;
		// See https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec#Transclusion_content
		// Template information is stored in data-parsoid attribute with an element with
		// mw:Transcusion type, while the template rendering can be a different html element.
		// They are connected using 'about' attribute.
		templateFragments = $template.attr( 'about' );
		// Remove the associated template renderings too.
		if ( templateFragments ) {
			$( '[about="' + templateFragments + '"]' ).remove();
		}

		$template.remove();
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
