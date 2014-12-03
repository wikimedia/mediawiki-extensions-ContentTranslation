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
	 * TemplateTool encapsulates the handling of templates in translation.
	 *
	 * It determines the best course of action and implements it. Some possible
	 * actions are to make the template non-editable, remove it or expand it as
	 * inline content (destruction).
	 * @class
	 */
	function TemplateTool( element ) {
		this.$template = $( element );
		this.templateData = null;
		this.templateTitle = null;
		this.templateMapping = null;
	}

	/**
	 * Make it a non-template - treat it as native html.
	 */
	TemplateTool.prototype.deconstruct = function () {
		mw.log( '[CX] Deconstructing template ' + this.templateTitle );
		this.$template.removeAttr( 'typeof about data-mw data-parsoid' );
	};

	/**
	 * Get the template data from source section. Target section
	 * might not have it always.
	 */
	TemplateTool.prototype.getTemplateData = function () {
		var templateData,
			aboutAttr = this.$template.attr( 'about' );

		$( '[about="' + aboutAttr + '"]' ).each( function ( index, fragment ) {
			var $fragment = $( fragment );

			if ( $fragment.attr( 'data-mw' ) ) {
				templateData = $fragment.data( 'mw' );
			}
		} );

		return templateData;
	};

	/**
	 * Get the template mapping if any set by source.filter module
	 */
	TemplateTool.prototype.getTemplateMapping = function () {
		return this.$template.data( 'template-mapping' );
	};

	/**
	 * Adapt a template using template mapping
	 */
	TemplateTool.prototype.adapt = function () {
		var targetParams = {},
			templateTool = this,
			sourceParams = this.templateData.parts[ 0 ].template.params;

		mw.log( '[CX] Adapting template ' + this.templateTitle + ' based on mapping.' );
		// Update the name of the template
		this.templateData.parts[ 0 ].template.target.wt = this.templateMapping.targetname;

		// Update the template parameters
		$.each( sourceParams, function ( key, value ) {
			// Drop empty parameters
			// TODO: Shouldn't we only do this if the parameter is named?
			// I can imagine {{Foo||baz}} breaks badly if we remove the one from middle.
			if ( $.trim( value ) === '' ) {
				return;
			}

			// Copy over other parameters, but map known keys
			if ( templateTool.templateMapping.parameters &&
				templateTool.templateMapping.parameters[ key ] !== undefined
			) {
				key = templateTool.templateMapping.parameters[ key ];
			}

			targetParams[ key ] = value;
		} );

		this.templateData.parts[ 0 ].template.params = targetParams;
		this.$template.attr( 'data-mw', JSON.stringify( this.templateData ) );

		// Make templates uneditable unless whitelisted
		if ( !this.templateMapping.editable ) {
			this.$template.data( 'editable', false );
		}
	};

	/**
	 * Adapt the template name to the equivalent in the target wiki
	 */
	TemplateTool.prototype.adaptTitle = function ( targetTitle ) {
		// Update the name of the template
		this.templateData.parts[ 0 ].template.target.wt = targetTitle;
		this.$template.attr( 'data-mw', JSON.stringify( this.templateData ) );
	};

	/**
	 * Marks template non-editable.
	 */
	TemplateTool.prototype.markReadOnly = function () {
		var templateFragments;

		mw.log( '[CX] Marking template ' + this.templateTitle + ' read only.' );
		templateFragments = this.$template.attr( 'about' );
		if ( templateFragments ) {
			$( '[about="' + templateFragments + '"]' ).prop( 'contenteditable', false );
		}
		// TODO: This will be machine translated content. Do we need to replace it
		// exact copy of source?
	};

	/**
	 * Process the template. Figure out what we can do.
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.process = function () {
		var templateTool = this,
			deferred = $.Deferred();

		this.templateData = this.getTemplateData();
		this.templateMapping = this.getTemplateMapping();

		if ( !this.templateData || this.templateData.parts.length > 1 ) {
			// Either the template is missing mw data or having multiple
			// parts. At present, we cannot handle them.
			// An example: {{Version |o |1.1}}{{efn-ua |Due to an incident ...<ref name="releases" />}}
			// in enwiki:Debian, Timeline table.
			mw.log( '[CX] Skipping template. Missing template data.' );

			return;
		}

		this.templateTitle = this.templateData.parts[ 0 ].template.target.wt;
		this.getTargetTemplate()
			.done( function ( targetTitleData ) {
				var pageId = Object.keys( targetTitleData.pages )[ 0 ];

				templateTool.markReadOnly();
				if ( templateTool.templateMapping ) {
					templateTool.adapt();
				} else {
					templateTool.adaptTitle( targetTitleData.pages[ pageId ].title );
				}
				deferred.resolve();
			} )
			.fail( function () {
				templateTool.deconstruct();
				deferred.resolve();
			} );

		return deferred.promise();
	};

	/**
	 * Fetch the template from target wiki.
	 *
	 * @return {jQuery.Promise}
	 * @return {funtion} return.done
	 * @return {number} return.done.data The page id
	 */
	TemplateTool.prototype.getTargetTemplate = function () {
		// todo: avoid direct access to globals
		var api = mw.cx.siteMapper.getApi( mw.cx.targetLanguage );

		// Note that we use canonical namespace 'Template' for title.
		return api.get( {
			action: 'query',
			titles: 'Template:' + this.templateTitle,
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).then( function ( response ) {
			var pageId = Object.keys( response.query.pages )[ 0 ];

			if ( pageId === '-1' ) {
				return $.Deferred().reject().promise();
			}

			return response.query;
		} ).promise();
	};

	/**
	 * Processes each template in given section.
	 * @param {jQuery} $section Content translation section
	 */
	function processTemplates( $section ) {
		var templates = [];

		if ( $section.is( '[typeof*="mw:Transclusion"]' ) ) {
			templates.push( $section );
		} else {
			templates = $section.find( '[typeof*="mw:Transclusion"]' );
		}
		$.each( templates, function () {
			var template = new TemplateTool( this );

			template.process();
		} );
	}

	if ( typeof QUnit !== undefined ) {
		// Expose this module for unit testing
		mw.cx.TemplateTool = TemplateTool;
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( processTemplates );
	} );
}( jQuery, mediaWiki ) );
