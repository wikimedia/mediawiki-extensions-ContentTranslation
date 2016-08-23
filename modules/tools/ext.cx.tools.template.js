/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var targetTemplateNamespaceRequestCache = {},
		cachedTemplateRequests = {},
		cachedTemplateDataAPIRequests = {};

	/**
	 * TemplateTool encapsulates the handling of templates in translation.
	 *
	 * It determines the best course of action and implements it. Some possible
	 * actions are to make the template non-editable, remove it or expand it as
	 * inline content (destruction).
	 *
	 * @class
	 */
	function TemplateTool( element, options ) {
		this.$template = $( element );
		this.templateData = null;
		this.templateTitle = null;
		this.templateMapping = null;
		this.options = $.extend( {}, mw.cx.TemplateTool.defaults, options );
		this.siteMapper = this.options.siteMapper;
		this.sourceLanguage = this.options.sourceLanguage;
		this.targetLanguage = this.options.targetLanguage;
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
	TemplateTool.prototype.getSourceTemplateData = function () {
		var templateData,
			aboutAttr = this.$template.attr( 'about' );

		$( '[about="' + aboutAttr + '"]' ).each( function ( index, fragment ) {
			var $fragment = $( fragment );

			if (
				// Not all fragments are mw:Transclusion
				// See https://phabricator.wikimedia.org/T97220
				$fragment.is( '[typeof*="mw:Transclusion"]' ) &&
				$fragment.attr( 'data-mw' )
			) {
				templateData = $fragment.data( 'mw' );
				// Exit.
				return false;
			}
		} );

		return templateData;
	};

	/**
	 * Get the template data from target language wiki using TemplateData extension.
	 * If template data does not exist for the template, we extract the parameters
	 * using the source code of the template as fallback.
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.getTargetTemplateData = function () {
		var self = this;

		if ( cachedTemplateDataAPIRequests[ this.templateTitle ] ) {
			return cachedTemplateDataAPIRequests[ this.templateTitle ];
		}

		cachedTemplateDataAPIRequests[ this.templateTitle ] =
			this.getTemplateNamespaceTranslation( self.targetLanguage ).then( function ( namespace ) {
				var targetName = namespace + ':' + self.templateTitle;

				return self.siteMapper.getApi( self.targetLanguage ).get( {
					action: 'templatedata',
					titles: targetName,
					redirects: true,
					format: 'json'
				}, {
					dataType: 'jsonp',
					// This prevents warnings about the unrecognized parameter "_"
					cache: true
				} ).then( function ( response ) {
					var pageId, templateData;

					pageId = Object.keys( response.pages )[ 0 ];
					templateData = response.pages[ pageId ];

					if ( !templateData ) {
						return self.getTemplateParamsUsingSource( targetName );
					}

					return templateData;
				} );
			} );

		return cachedTemplateDataAPIRequests[ this.templateTitle ];
	};

	/**
	 * Fetch the template source code and extract the template parameters
	 * from it.
	 *
	 * @param {string} targetName Target Template name
	 * @return {Object}
	 */
	TemplateTool.prototype.getTemplateParamsUsingSource = function ( targetName ) {
		var self = this;

		return self.siteMapper.getApi( self.targetLanguage ).get( {
			action: 'query',
			titles: targetName,
			redirects: true,
			prop: 'revisions',
			rvprop: 'content',
			indexpageids: '1'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).then( function ( resp ) {
			var title, pageContent = '';

			if (
				resp.query.pages[ resp.query.pageids[ 0 ] ].revisions &&
				resp.query.pages[ resp.query.pageids[ 0 ] ].revisions[ 0 ]
			) {
				pageContent = resp.query.pages[ resp.query.pageids[ 0 ] ].revisions[ 0 ][ '*' ];
				title = resp.query.pages[ resp.query.pageids[ 0 ] ].title;
			}

			return {
				title: title,
				params: self.extractParametersFromTemplateCode( pageContent )
			};
		} );
	};

	/**
	 * Retrieve template parameters from the template code.
	 *
	 * Adapted from https://he.wikipedia.org/wiki/MediaWiki:Gadget-TemplateParamWizard.js
	 *
	 * @param {string} templateCode Source of the template.
	 * @return {Object} An associative array of parameters that appear in the template code
	 */
	TemplateTool.prototype.extractParametersFromTemplateCode = function ( templateCode ) {
		var matches,
			paramNames = {},
			paramExtractor = /{{3,}(.*?)[<|}]/mg;

		while ( ( matches = paramExtractor.exec( templateCode ) ) !== null ) {
			if ( $.inArray( matches[ 1 ], paramNames ) === -1 ) {
				paramNames[ $.trim( matches[ 1 ] ) ] = true;
			}
		}

		return paramNames;
	};

	/**
	 * Get the namespace translation in a wiki.
	 * Uses the canonical name for lookup.
	 *
	 * @param {string} language
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.getTemplateNamespaceTranslation = function ( language ) {
		var request;

		if ( targetTemplateNamespaceRequestCache[ language ] ) {
			return targetTemplateNamespaceRequestCache[ language ];
		}

		request = this.siteMapper.getApi( language ).get( {
			action: 'query',
			meta: 'siteinfo',
			siprop: 'namespaces',
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).then( function ( response ) {
			var namespaceId, namespaceObj;

			for ( namespaceId in response.query.namespaces ) {
				namespaceObj = response.query.namespaces[ namespaceId ];
				if ( namespaceObj.canonical === 'Template' ) {
					return namespaceObj[ '*' ];
				}
			}
		} );
		targetTemplateNamespaceRequestCache[ language ] = request;

		return request;
	};

	/**
	 * Get the template mapping if any set by source.filter module
	 */
	TemplateTool.prototype.getTemplateMapping = function () {
		var self = this;

		return this.getTargetTemplateData().then( function ( templateData ) {
			templateData.cxMapping = self.$template.data( 'template-mapping' ) || {};
			return templateData;
		} );
	};

	/**
	 * Adapt a template using template mapping
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.adapt = function () {
		var self = this;
		mw.log( '[CX] Adapting template ' + this.templateTitle + ' based on mapping.' );

		// Make templates uneditable unless whitelisted
		if ( !this.templateMapping.editable ) {
			this.$template.data( 'editable', false );
		}

		// Update the name of the template
		return this.getTemplateNamespaceTranslation( this.targetLanguage )
			.then( function ( translatedNamespace ) {
				var templateName, sourceParams, targetParams, targetName;

				targetName = self.templateMapping.cxMapping.targetname || self.templateMapping.title;
				if ( !targetName ) {
					return false;
				}
				sourceParams = self.getSourceParams();
				targetParams = self.getAdaptedTargetParams( sourceParams );

				if ( !$.isEmptyObject( sourceParams ) && $.isEmptyObject( targetParams ) ) {
					if ( self.templateMapping.params && Object( self.templateMapping.params ).length > 0 ) {
						// Checking whether there is any params defined for target template.
						// It is possible that source template definition has params and target
						// does not have any. Mapping failed only when target has some params.
						return false;
					}
				}

				// So we were able to map at least one parameter to the target template.
				// TODO: Should we check for all params mapping based on count match of
				// source and target template params?

				templateName = targetName.replace(
					new RegExp( '^' + mw.RegExp.escape( translatedNamespace + ':' ) ),
					''
				);

				self.templateData.parts[ 0 ].template.target.wt = templateName;
				self.templateData.parts[ 0 ].template.params = targetParams;

				self.$template.attr( {
					typeof: 'mw:Transclusion',
					'data-mw': JSON.stringify( self.templateData )
				} );

				return true;
			} );
	};

	/**
	 * Get the source parameters for the template
	 *
	 * @return {Object} Source parameters - key-value pairs.
	 */
	TemplateTool.prototype.getSourceParams = function () {
		return this.templateData.parts[ 0 ].template.params;
	};

	/**
	 * Get the target parameters for the template after mapping
	 *
	 * @return {Object} Target parameters - key-value pairs.
	 */
	TemplateTool.prototype.getAdaptedTargetParams = function ( sourceParams ) {
		var targetParams = {},
			self = this;

		// Update the template parameters
		$.each( sourceParams, function ( key, value ) {
			var normalizedKey;

			if ( !isNaN( key ) ) {
				// Key is like "1" or "2" etc. Unnamed params.
				targetParams[ key ] = value;
				return;
			}

			// Check if a CX defined mapping exist for this param.
			if ( self.templateMapping.cxMapping.parameters &&
				self.templateMapping.cxMapping.parameters[ key ] ) {
				targetParams[ self.templateMapping.cxMapping.parameters[ key ] ] = value;
				return;
			}

			if ( !self.templateMapping.params ) {
				return;
			}

			normalizedKey = key.toLowerCase().replace( /[\s+_-]+/g, '' );
			// Search in the aliases for a match - case insensitive.
			$.each( self.templateMapping.params, function ( paramName, param ) {
				var i, normalizedCandidates = [],
					candidates;

				candidates = param.aliases || [];
				candidates.push( paramName );

				for ( i = 0; i < candidates.length; i++ ) {
					normalizedCandidates.push(
						candidates[ i ].toLowerCase().replace( /[\s+_-]+/g, '' )
					);
				}

				if ( normalizedCandidates.indexOf( normalizedKey ) >= 0 ) {
					targetParams[ paramName ] = value;
				}
			} );
		} );

		return targetParams;
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
		var self = this;

		this.templateData = this.getSourceTemplateData();

		if ( !this.templateData || ( this.templateData.parts && this.templateData.parts.length > 1 ) ) {
			// Either the template is missing mw data or having multiple parts.
			// At present, we cannot handle them.
			// An example: {{Version |o |1.1}}{{efn-ua |Due to an incident ...<ref name="releases" />}}
			// in enwiki:Debian, Timeline table.
			mw.log( '[CX] Skipping template. Missing template data.' );
			return $.Deferred().resolve().promise();
		}

		// Remove the typeof attribute for now. We will set it once we successfully adapt the template
		// Otherwise, parsoid will fail fatally while parsing.
		this.$template.removeAttr( 'typeof' );
		this.templateTitle = this.templateData.parts[ 0 ].template.target.wt;

		return this.getTemplateMapping()
			.then( function ( targetTemplateData ) {
				self.templateMapping = targetTemplateData;
				self.markReadOnly();

				if ( targetTemplateData ) {
					self.adapt().then( function ( adaptResult ) {
						if ( !adaptResult ) {
							self.deconstruct();
						}
					} );
				}
			} )
			.fail( function () {
				self.deconstruct();
			} );
	};

	/**
	 * Fetch the template from target wiki.
	 *
	 * @return {jQuery.Promise}
	 * @return {funtion} return.done
	 * @return {number} return.done.data The page id
	 */
	TemplateTool.prototype.getTargetTemplate = function () {
		var api, request,
			cacheKey = mw.cx.targetLanguage + ':' + this.templateTitle;

		if ( cachedTemplateRequests[ cacheKey ] ) {
			return cachedTemplateRequests[ cacheKey ];
		}

		// TODO: Avoid direct access to globals
		api = this.siteMapper.getApi( this.sourceLanguage );

		// Note that we use canonical namespace 'Template' for title.
		request = api.get( {
			action: 'query',
			titles: 'Template:' + this.templateTitle,
			prop: 'langlinks',
			lllang: this.siteMapper.getWikiDomainCode( this.targetLanguage ),
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} ).then( function ( response ) {
			var page,
				pageId = Object.keys( response.query.pages )[ 0 ];
			page = response.query.pages[ pageId ];
			if ( page && page.langlinks ) {
				return page.langlinks[ 0 ][ '*' ];
			}
		} );

		cachedTemplateRequests[ cacheKey ] = request;

		return request;
	};

	mw.cx.TemplateTool = TemplateTool;
	mw.cx.TemplateTool.defaults = {
		siteMapper: mw.cx.siteMapper,
		sourceLanguage: mw.cx.sourceLanguage,
		targetLanguage: mw.cx.targetLanguage
	};

	/**
	 * Processes each template in given section.
	 *
	 * @param {jQuery} $section Content translation section
	 */
	function processTemplates( $section ) {
		var i, template, templates = [];

		if ( $section.is( '[typeof~="mw:Transclusion"]' ) ) {
			templates.push( $section );
		}
		templates = templates.concat(
			// Convert the internal templates to a js array
			$.makeArray( $section.find( '[typeof~="mw:Transclusion"]' ) )
		);
		for ( i = 0; i < templates.length; i++ ) {
			template = new mw.cx.TemplateTool( templates[ i ] );
			template.process();
		}
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( processTemplates );
	} );
}( jQuery, mediaWiki ) );
