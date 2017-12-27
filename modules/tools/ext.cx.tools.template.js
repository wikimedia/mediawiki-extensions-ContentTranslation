/*!
 * Content Translation template adaptation tool
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var cachedTemplateNamespaceRequests = {},
		cachedTemplateRequests = {},
		cachedTemplateDataAPIRequests = {};

	/**
	 * A Template in the translation context.
	 * Can be source or target template.
	 *
	 * It determines the best course of action and implements it. Some possible
	 * actions are to make the template non-editable, remove it or expand it as
	 * inline content (destruction).
	 *
	 * @class
	 * @param {jQuery} $template The template element
	 * @param {Object} [options] options
	 * @cfg {string} [language] The corresponding language
	 * @cfg {Object} [siteMapper] siteMapper
	 */
	function Template( $template, options ) {
		this.$template = $template;
		this.options = options || {};
		this.title = null;
		this.language = options.language;
		this.siteMapper = options.siteMapper;
		this.params = [];
		this.namespace = null;
		this.initPromise = this.init();
	}

	Template.static = {};

	/**
	 * Get ready with all required information about the template.
	 *
	 * @return {jQuery.Promise}
	 */
	Template.prototype.init = function () {
		var title, sourceDef, mwData, sourceTitle,
			self = this;

		// Templates are not editable as a contenteditable. We provide an editor.
		this.$template.attr( 'contenteditable', false );

		if ( this.initPromise ) {
			return this.initPromise;
		}

		// Get the data-mw from the template itself.
		mwData = this.$template.data( 'mw' );
		// And get it from the source template.
		sourceDef = Template.static.getTemplateDef( this.$template ).data( 'mw' );

		if ( !mwData ) {
			mwData = sourceDef;
			if ( !mwData ) {
				mw.log( '[CX] Could not find data-mw for Template#' + this.$template.attr( 'id' ) );
				return $.Deferred().reject().promise();
			}
		}

		if ( !mwData.parts ) {
			mw.log( '[CX] data-mw for Template#' + this.$template.attr( 'id' ) + ' has no parts.' );
			return $.Deferred().reject().promise();
		}

		if ( mwData.parts.length > 1 ) {
			mw.log( '[CX] Skipping multipart template for now for Template#' + this.$template.attr( 'id' ) );
			return $.Deferred().reject().promise();
		}

		if ( this.isSourceTemplate() ) {
			title = mwData.parts[ 0 ].template.target.wt;
			// Sanitize and normalize the name. It can contain new lines, spaces etc.
			title = mw.Title.newFromUserInput( title, 0 );
			if ( title ) {
				title = title.getPrefixedText();
			} else {
				mw.log( '[CX] Failed to parse the template title as valid title for ' +
					mwData.parts[ 0 ].template.target.wt
				);
				return $.Deferred().reject().promise();
			}
			this.initPromise = $.Deferred().resolve( title ).promise();
		} else {
			sourceTitle = sourceDef.parts[ 0 ].template.target.wt;
			sourceTitle = mw.Title.newFromUserInput( sourceTitle, 0 );
			if ( sourceTitle ) {
				title = sourceTitle.getPrefixedText();
			} else {
				mw.log( '[CX] Failed to parse the template title as valid title for ' +
					sourceDef.parts[ 0 ].template.target.wt
				);
				return $.Deferred().reject().promise();
			}
			this.initPromise = this.getTargetTitle( sourceTitle );
		}

		this.initPromise = this.initPromise.then( function ( title ) {
			// This is with namespace prefix.
			self.title = title;
			mw.log( '[CX] Initializing for template title ' + self.title );
			return self.getNamespaceTranslation( self.language ).then( function ( namespace ) {
				self.namespace = namespace;
				// Remove namespace
				self.title = self.title.replace(
					new RegExp( '^' + mw.RegExp.escape( self.namespace + ':' ) ),
					''
				);
			} );
		}, function () {
			mw.log( '[CX] Target template does not exist for ' + sourceTitle );
			return $.Deferred().reject().promise();
		} );

		this.initPromise = this.initPromise.then( function () {
			return self.getTemplateData().then( function ( templateData ) {
				var params = mwData.parts[ 0 ].template.params;

				// Create a deep copy of this since we are going to
				// add additional properties and dont want them in the cached copy.
				self.templateData = $.extend( true, {}, templateData );
				self.params = self.templateData.params;

				$.each( self.params, function ( key ) {
					var aliases, normalizedTemplatedateKey = key.trim().toLowerCase();
					aliases = self.params[ key ].aliases || [];
					// It is important to trim here since the params in data-mw
					// has trailing whitespaces.
					$.each( params, function ( paramkey ) {
						var i, normalizedDataMWKey, normalizedAlias;
						normalizedDataMWKey = paramkey.trim().toLowerCase();
						if ( normalizedDataMWKey === normalizedTemplatedateKey ) {
							self.params[ key ].wt = params[ paramkey ].wt;
							return;
						}
						for ( i = 0; i < aliases.length; i++ ) {
							normalizedAlias = aliases[ i ].trim().toLowerCase();
							if ( normalizedDataMWKey === normalizedAlias ) {
								self.params[ key ].wt = params[ paramkey ].wt;
								break;
							}
						}
					} );
				} );
			} );
			// TODO: Yeah. to refactor.
		} );

		this.listen();

		return this.initPromise;
	};

	/**
	 * Get the template fragment having the template Definition.
	 *
	 * @param {jQuery} $template
	 * @return {jQuery}
	 */
	Template.static.getTemplateDef = function ( $template ) {
		var aboutAttr,
			$sourceTemplate = $( [] );

		if ( !$template ) {
			return $sourceTemplate;
		}

		aboutAttr = $template.attr( 'about' ) ||
			mw.cx.getSourceSection( $template.data( 'source' ) ).attr( 'about' );

		//  Template definition is usually at source template at source column
		$( '[about="' + aboutAttr + '"]' ).each( function ( index, fragment ) {
			var $fragment = $( fragment );

			if (
				// Not all fragments are mw:Transclusion
				// See https://phabricator.wikimedia.org/T97220
				$fragment.is( '[typeof*="mw:Transclusion"]' ) &&
				$fragment.attr( 'data-mw' )
			) {
				$sourceTemplate = $fragment;
				// Exit.
				return false;
			}
		} );

		return $sourceTemplate;
	};

	/**
	 * Event handlers
	 */
	Template.prototype.listen = function () {
		this.$template.click( $.proxy( this.onClick, this ) );
	};

	/**
	 * Get the data-mw in JSON format
	 *
	 * @return {string} data-mw in JSON format
	 */
	Template.prototype.toJSON = function () {
		return JSON.stringify( this.getData() );
	};

	/**
	 * Get all associated DOM fragments for the given template
	 *
	 * @return {jQuery} Template fragments
	 */
	Template.prototype.getFragments = function () {
		var aboutAttr;

		aboutAttr = this.$template.attr( 'about' ) ||
			mw.cx.getSourceSection( this.$template.data( 'source' ) ).attr( 'about' );

		return this.$template
			.parents( '.cx-column__content' )
			.find( '[about="' + aboutAttr + '"]' );
	};

	/**
	 * Show this template. If it has fragments, show them too.
	 */
	Template.prototype.show = function () {
		if ( this.options.inline ) {
			this.$parentSection = this.$parentSection ||
				this.$template.parents( mw.cx.getSectionSelector() );
			this.$parentSection.show();
		} else {
			this.$template.show();
			this.getFragments( this.$template ).show();
		}
	};

	/**
	 * Hide this template. If it has fragments, hide them too.
	 */
	Template.prototype.hide = function () {
		if ( this.options.inline ) {
			this.$parentSection = this.$parentSection ||
				this.$template.parents( mw.cx.getSectionSelector() );
			this.$parentSection.hide();
		} else {
			this.$template.hide();
			this.getFragments( this.$template ).hide();
		}
	};

	/**
	 * Templates will have fragments and sometimes some of them will be
	 * invisible elements holding mw-data. We cannot align target sections
	 * against these 0-height fragments. Restoring is also problematic.
	 * So we find a 0-height fragments to use for alignment and section
	 * restore.
	 *
	 * @return {jQuery|undefined}
	 */
	Template.prototype.getFirstVisibleFragment = function () {
		var $fragments, $fragment;

		$fragments = this.getFragments();
		$fragments.each( function ( index, fragment ) {
			$fragment = $( fragment );

			// Find a fragment with visible height
			if ( $fragment.height() > 0 ) {
				// break the loop
				return false;
			}
		} );

		return $fragment;
	};

	/**
	 * Get the container to which the editor to append
	 *
	 * @return {jQuery}
	 */
	Template.prototype.getEditorContainer = function () {
		var $container, $visibleFragment;

		$visibleFragment = this.getFirstVisibleFragment() || this.$template;
		if ( this.options.inline ) {
			this.$parentSection = this.$parentSection || $visibleFragment.parent( mw.cx.getSectionSelector() );
			$container = this.$parentSection;
		} else {
			$container = $visibleFragment;
		}

		return $container;
	};

	/**
	 * Get the data-mw
	 *
	 * @return {Object}
	 */
	Template.prototype.getData = function () {
		var mwData;
		// Get the original data-mw from source template.
		mwData = Template.static.getTemplateDef( this.$template ).data( 'mw' );
		// Now update it with fresh values.
		mwData.parts[ 0 ].template.target.wt = this.title;
		mwData.parts[ 0 ].template.params = this.params;
		return mwData;
	};

	/**
	 * Template click handler.
	 *
	 * @param {Event} event
	 * @return {boolean}
	 */
	Template.prototype.onClick = function ( event ) {
		event.stopPropagation();

		if ( this.options.onEdit ) {
			// Template is editable
			if ( this.$template.is( '.cx-highlight' ) ) {
				this.options.onEdit.call( this );
			}

			this.$template.toggleClass( 'cx-highlight' );
		}

		if ( this.isTargetTemplate() ) {
			mw.hook( 'mw.cx.translation.template.focus' ).fire( this.$template );
		}

		// Dont bubble this. Will cause section focus events and all.
		return false;
	};

	/**
	 * Check if the given element is a template or a fragment of template
	 * connected using about attribute.
	 *
	 * @param {jQuery} $element The element to check.
	 * @return {boolean} Whether the element is template or not.
	 */
	Template.static.isTemplate = function ( $element ) {
		return !!this.getTemplateDef( $element ).length;
	};

	/**
	 * Whether the template is source template or not.
	 * TODO: We should just pass this as option to the constructor of this class
	 * instead of referring a global mw.cx
	 *
	 * @return {boolean}
	 */
	Template.prototype.isSourceTemplate = function () {
		return this.language === mw.cx.sourceLanguage;
	};

	/**
	 * Whether the template is target template or not.
	 * TODO: We should just pass this as option to the constructor of this class
	 * instead of referring a global mw.cx.
	 *
	 * @return {boolean}
	 */
	Template.prototype.isTargetTemplate = function () {
		return this.language === mw.cx.targetLanguage;
	};

	/**
	 * Get the template data from wiki using TemplateData extension.
	 * If template data does not exist for the template, we extract the parameters
	 * using the source code of the template as fallback.
	 *
	 * @return {jQuery.Promise}
	 */
	Template.prototype.getTemplateData = function () {
		var self = this,
			cacheKey;

		cacheKey = this.language + '|' + this.title;
		if ( cachedTemplateDataAPIRequests[ cacheKey ] ) {
			return cachedTemplateDataAPIRequests[ cacheKey ];
		}

		cachedTemplateDataAPIRequests[ cacheKey ] =
			this.getNamespaceTranslation( this.language ).then( function ( namespace ) {
				var targetName;

				if ( self.title.indexOf( namespace + ':' ) !== 0 ) {
					targetName = namespace + ':' + self.title;
				} else {
					targetName = self.title;
				}

				return self.siteMapper.getApi( self.language ).get( {
					action: 'templatedata',
					titles: targetName,
					redirects: true
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

		return cachedTemplateDataAPIRequests[ cacheKey ];
	};

	/**
	 * Retrieve template parameters from the template code.
	 * Adapted from https://he.wikipedia.org/wiki/MediaWiki:Gadget-TemplateParamWizard.js
	 *
	 * @param {string} templateCode Source of the template.
	 * @return {Object} An associative array of parameters that appear in the template code
	 */
	Template.prototype.extractParametersFromTemplateCode = function ( templateCode ) {
		var matches,
			paramNames = {},
			paramExtractor = /{{3,}(.*?)[<|}]/mg;

		while ( ( matches = paramExtractor.exec( templateCode ) ) !== null ) {
			if ( $.inArray( matches[ 1 ], paramNames ) === -1 ) {
				paramNames[ $.trim( matches[ 1 ] ) ] = {};
			}
		}

		return paramNames;
	};

	/**
	 * Fetch the template source code and extract the template parameters from it.
	 *
	 * @param {string} templateName Template name with namespace prefix.
	 * @return {Object}
	 */
	Template.prototype.getTemplateParamsUsingSource = function ( templateName ) {
		var self = this;

		return self.siteMapper.getApi( this.language ).get( {
			formatversion: 2,
			action: 'query',
			titles: templateName,
			redirects: true,
			prop: 'revisions',
			rvprop: 'content'
		} ).then( function ( resp ) {
			var page = resp.query.pages[ 0 ], title, pageContent = '';

			if ( page.revisions && page.revisions[ 0 ] ) {
				pageContent = page.revisions[ 0 ].content;
				title = page.title;
			}

			return {
				title: title,
				params: self.extractParametersFromTemplateCode( pageContent )
			};
		} );
	};

	/**
	 * Get the namespace translation in a wiki.
	 * Uses the canonical name for lookup.
	 *
	 * @return {jQuery.Promise}
	 */
	Template.prototype.getNamespaceTranslation = function () {
		var request;

		if ( cachedTemplateNamespaceRequests[ this.language ] ) {
			return cachedTemplateNamespaceRequests[ this.language ];
		}

		request = this.siteMapper.getApi( this.language ).get( {
			action: 'query',
			meta: 'siteinfo',
			siprop: 'namespaces'
		} ).then( function ( response ) {
			var namespaceId, namespaceObj;

			for ( namespaceId in response.query.namespaces ) {
				namespaceObj = response.query.namespaces[ namespaceId ];
				if ( namespaceObj.canonical === 'Template' ) {
					return namespaceObj[ '*' ];
				}
			}
		} );

		cachedTemplateNamespaceRequests[ this.language ] = request;

		return request;
	};

	/**
	 * Escape a template parameter. Helper function for #getWikitext.
	 * See ve.dm.MWTransclusionNode.static.escapeParameter
	 *
	 * @static
	 * @param {string} param Parameter value
	 * @return {string} Escaped parameter value
	 */
	Template.static.escapeParameter = function ( param ) {
		var match, needsNowiki,
			input = param,
			output = '',
			inNowiki = false,
			bracketStack = 0,
			linkStack = 0;

		while ( input.length > 0 ) {
			match = input.match( /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/ );

			if ( !match ) {
				output += input;
				break;
			}
			output += input.slice( 0, match.index );
			input = input.slice( match.index + match[ 0 ].length );

			if ( inNowiki ) {
				if ( match[ 0 ] === '</nowiki>' ) {
					inNowiki = false;
					output += match[ 0 ];
				} else {
					output += match[ 0 ];
				}
			} else {
				needsNowiki = true;
				if ( match[ 0 ] === '<nowiki>' ) {
					inNowiki = true;
					needsNowiki = false;
				} else if ( match[ 0 ] === '</nowiki>' || match[ 0 ].match( /<nowiki\s*\/>/ ) ) {
					needsNowiki = false;
				} else if ( match[ 0 ].match( /(?:\[\[)/ ) ) {
					linkStack++;
					needsNowiki = false;
				} else if ( match[ 0 ].match( /(?:\]\])/ ) ) {
					if ( linkStack > 0 ) {
						linkStack--;
						needsNowiki = false;
					}
				} else if ( match[ 0 ].match( /(?:\{\{)/ ) ) {
					bracketStack++;
					needsNowiki = false;
				} else if ( match[ 0 ].match( /(?:\}\})/ ) ) {
					if ( bracketStack > 0 ) {
						bracketStack--;
						needsNowiki = false;
					}
				} else if ( match[ 0 ].match( /\|+/ ) ) {
					if ( bracketStack > 0 || linkStack > 0 ) {
						needsNowiki = false;
					}
				}

				if ( needsNowiki ) {
					output += '<nowiki>' + match[ 0 ] + '</nowiki>';
				} else {
					output += match[ 0 ];
				}
			}
		}
		return output;
	};

	/**
	 * Get the wikitext for this transclusion.
	 * See ve.dm.MWTransclusionNode.static.getWikitext
	 *
	 * @static
	 * @return {string} Wikitext like `{{foo|1=bar|baz=quux}}`
	 */
	Template.prototype.getWikitext = function () {
		var i, len, part, template, param,
			content,
			wikitext = '';

		// Normalize to multi template format
		if ( this.params ) {
			content = {
				parts: [ {
					template: {
						target: {
							wt: this.title
						},
						params: this.params
					}
				} ]
			};
		}

		// Build wikitext from content
		for ( i = 0, len = content.parts.length; i < len; i++ ) {
			part = content.parts[ i ];
			if ( part.template ) {
				// Template
				template = part.template;
				wikitext += '{{' + template.target.wt;
				for ( param in template.params ) {
					if ( template.params[ param ] && template.params[ param ].wt ) {
						wikitext += '|' + param + '=' +
							mw.cx.Template.static.escapeParameter( template.params[ param ].wt );
					}
				}
				wikitext += '}}';
			} else {
				// Plain wikitext
				wikitext += part;
			}
		}
		return wikitext;
	};

	/**
	 * Fetch the template from target wiki.
	 *
	 * @param {string} sourceTitle Source title without namespace prefix.
	 * @return {jQuery.Promise}
	 * @return {Function} return.done
	 * @return {number} return.done.data The page id
	 */
	Template.prototype.getTargetTitle = function ( sourceTitle ) {
		var api, request, cacheKey;

		cacheKey = mw.cx.sourceLanguage + '|' + mw.cx.targetLanguage + '|' + sourceTitle;
		if ( cachedTemplateRequests[ cacheKey ] ) {
			return cachedTemplateRequests[ cacheKey ];
		}

		// TODO: Avoid direct access to globals
		api = this.siteMapper.getApi( mw.cx.sourceLanguage );

		// Note that we use canonical namespace 'Template' for title.
		request = api.get( {
			action: 'query',
			titles: 'Template:' + sourceTitle,
			prop: 'langlinks',
			lllang: this.siteMapper.getWikiDomainCode( mw.cx.targetLanguage ),
			redirects: true
		} ).then( function ( response ) {
			var page,
				pageId = Object.keys( response.query.pages )[ 0 ];
			page = response.query.pages[ pageId ];
			if ( page && page.langlinks ) {
				return page.langlinks[ 0 ][ '*' ];
			} else {
				return $.Deferred().reject().promise();
			}
		} );

		cachedTemplateRequests[ cacheKey ] = request;

		return request;
	};

	Template.prototype.getUpdatedTemplate = function () {
		var wikitext, self = this;

		wikitext = this.getWikitext();
		mw.log( '[CX] Updated template: ' + wikitext );

		return mw.cx.wikitextToHTML( this.siteMapper, this.language, wikitext, mw.cx.targetTitle )
			.then( function ( response ) {
				// TODO: Refactor this to a new method.
				var $newTemplate, i, $new;

				$newTemplate = $( response );

				// Filter out auto-generated items, e.g. reference lists
				$newTemplate = $newTemplate.filter( function ( index, node ) {
					var dataMw = node.nodeType === Node.ELEMENT_NODE &&
						node.hasAttribute( 'data-mw' ) &&
						JSON.parse( node.getAttribute( 'data-mw' ) );
					if ( dataMw && dataMw.autoGenerated ) {
						return false;
					}

					// Filter out line breaks.
					if ( node.nodeType === Node.TEXT_NODE && node.nodeValue === '\n' ) {
						return false;
					}

					// We dont need category links. We cannot handle them.
					if ( $( node ).is( 'link[rel~="mw:PageProp/Category"]' ) ) {
						return false;
					}

					return true;
				} );

				if ( $newTemplate.length >= 2 &&
					( $newTemplate.first().is( 'link' ) || $newTemplate.first().is( 'span' ) ) &&
					!$newTemplate.eq( 1 ).data( 'mw' )
				) {
					// Some times parsoid gives the data-mw and typeof attribute in a
					// different <link> tag. It is difficult to work with that 0 height,
					// invisible element at translation. So we copy them to the real section.
					$newTemplate.eq( 1 ).attr( {
						'typeof': $newTemplate.first().attr( 'typeof' ),
						'data-mw': $newTemplate.first().attr( 'data-mw' )
					} );
					$newTemplate = $newTemplate.slice( 1 );
				}

				// HACK: if $content consists of a single paragraph for the inline template, make it inline.
				// We have to do this because the parser wraps everything in <p>s, and inline templates
				// will render strangely when wrapped in <p>s.
				if ( $newTemplate.length === 1 && $newTemplate.is( 'p' ) && self.options.inline ) {
					// If the paragraph has no template definition and just a wrapper, unwrap it
					if ( !$newTemplate.data( 'mw' ) ) {
						$newTemplate = $( $newTemplate.html() );
					} else {
						// If the paragraph has template definition, For example: {{Convert|1meter}}
						// gives this HTML:  <p about="#mwt1" typeof="mw:Transclusion"
						// data-mw='{"parts":[{"template":{"target":{"wt":"Convert","href":"./Template:Convert"},
						// "params":{"1":{"wt":"1"},"2":{"wt":"meter"}},"i":0}}]}' id="mwAQ">1 meter
						// (3<span typeof="mw:Entity"> </span>ft 3<span typeof="mw:Entity"> </span>in)</p>
						// Here, we cannot unwrap. We need to make the HTML inline by changing the tag <p> to <span>
						$new = $( '<span>', {
							html: $newTemplate.html()
						} );
						for ( i in $newTemplate[ 0 ].attributes ) {
							$new.attr( $newTemplate[ 0 ].attributes[ i ].name, $newTemplate[ 0 ].attributes[ i ].value );
						}
						// TODO: Copy classes too?
						$newTemplate = $new;
					}
				}
				if ( !$newTemplate.data( 'mw' ) ) {
					mw.log.error( '[CX] Error in adapting template. missing data-mw' );
				}
				return $newTemplate;
			} );
	};

	mw.cx.Template = Template;

	/**
	 * TemplateTool encapsulates the handling of templates in translation.
	 *
	 * @class
	 * @param {mw.cx.Template} sourceTemplate
	 * @param {mw.cx.Template} targetTemplate
	 * @param {Object} options
	 */
	function TemplateTool( sourceTemplate, targetTemplate, options ) {
		this.sourceTemplate = sourceTemplate;
		this.targetTemplate = targetTemplate;
		this.templateMapping = null;
		this.options = $.extend( {}, mw.cx.TemplateTool.defaults, options );
		this.siteMapper = this.options.siteMapper;
		this.status = null;
	}

	TemplateTool.static = {};

	/**
	 * Get the template mapping if any set by source.filter module
	 *
	 * @return {jQuery.Promise} The template mapping
	 */
	TemplateTool.prototype.getTemplateMapping = function () {
		var self = this;

		return this.sourceTemplate.init().then( function () {
			return self.targetTemplate.init().then( function () {
				// Both source and target params are adapted now.
				return mw.cx.getCXConfiguration(
					self.sourceTemplate.language, self.targetTemplate.language
				).then( function ( response ) {
					var configuration, templateParamMapping;

					configuration = response.configuration.templates || {};
					templateParamMapping = configuration[ self.sourceTemplate.title ] &&
						configuration[ self.sourceTemplate.title ].parameters;
					return $.extend(
						{},
						templateParamMapping,
						self.targetTemplate.$template.data( 'template-mapping' )
					);
				} );
			} );
		} );
	};

	/**
	 * Adapt a template using template mapping
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.adapt = function () {
		var self = this;

		return this.getTemplateMapping().then( function ( cxMapping ) {
			// Since templateData is initialized to {} if a corresponding template exists, this
			// condition is true only if there is no equivalent template in the target language.
			if ( !self.targetTemplate.templateData ) {
				return $.Deferred().reject().promise();
			}

			self.templateParamMapping = cxMapping;
			mw.log( '[CX] Adapting template ' + self.sourceTemplate.title + ' using a mapping.' );

			self.doFuzzyAdaptation();
			// Here we can try loading a saved mapping
			if ( !$.isEmptyObject( self.sourceTemplate.params ) && $.isEmptyObject( self.templateParamMapping ) ) {
				if ( self.targetTemplate.templateData.params &&
					Object.keys( self.targetTemplate.templateData.params ).length > 0
				) {
					// Checking whether there are any params defined for target template.
					// It is possible that source template definition has params and target
					// does not have any. Mapping failed only when target has some params.
					mw.log( '[CX] None of template params were able to map for ' + self.sourceTemplate.title );
					// Manually adaptable, but not automatically adaptable.
					self.status = 'adaptable';
					return $.Deferred().resolve().promise();
				}
			}

			// So we were able to map at least one parameter to the target template.
			// TODO: Should we check for all params mapping based on count match of
			// source and target template params?
			if ( Object.keys( self.templateParamMapping ).length > 0 ) {
				self.status = 'adaptable';
			}

			if ( Object.keys( self.templateParamMapping ).length === Object.keys( self.sourceTemplate.params ).length ) {
				// Fully adapted
				self.status = 'adapted';
			}

			$.each( self.sourceTemplate.templateData.params, function ( key ) {
				var savedParamValue, mappedTargetKey;

				mappedTargetKey = self.templateParamMapping[ key ];
				if ( mappedTargetKey ) {
					// In case of restored templates, there will be a wt value. Keep that.
					savedParamValue = self.targetTemplate.templateData.params[ mappedTargetKey ] &&
						self.targetTemplate.templateData.params[ mappedTargetKey ].wt;
					// Copy the value from source template to target template
					self.targetTemplate.templateData.params[ mappedTargetKey ] =
						self.sourceTemplate.params[ key ];
					// restore the old value
					if ( savedParamValue ) {
						self.targetTemplate.templateData.params[ mappedTargetKey ].wt = savedParamValue;
					}
				}
			} );

			mw.log( '[CX] Template ' + self.sourceTemplate.title + ' adapted to ' + self.targetTemplate.title );
			self.targetTemplate.mapping = self.templateParamMapping;
			return self.targetTemplate;
		} );
	};

	/**
	 * Get the target parameters for the template after mapping
	 */
	TemplateTool.prototype.doFuzzyAdaptation = function () {
		var	self = this;

		// Update the template parameters
		$.each( this.sourceTemplate.params, function ( key ) {
			var normalizedKey;

			if ( !isNaN( key ) ) {
				// Key is like "1" or "2" etc. Unnamed params.
				self.templateParamMapping[ key ] = key;
				return;
			}

			if ( !self.targetTemplate.templateData.params ) {
				return;
			}

			normalizedKey = key.trim().toLowerCase().replace( /[\s+_-]+/g, '' );
			// Search in the aliases for a match - case insensitive.
			$.each( self.targetTemplate.templateData.params, function ( paramName, param ) {
				var i, normalizedCandidate, candidates;

				candidates = param.aliases || [];
				candidates = candidates.concat( paramName );

				for ( i = 0; i < candidates.length; i++ ) {
					normalizedCandidate = candidates[ i ].trim().toLowerCase().replace( /[\s+_-]+/g, '' );
					if ( normalizedCandidate === normalizedKey ) {
						self.templateParamMapping[ key ] = paramName;
						// Break
						return false;
					}
				}
			} );
		} );
	};

	/**
	 * Prepare the editor instance.
	 *
	 * @return {boolean}
	 */
	TemplateTool.prototype.prepareEditor = function () {
		var self = this;
		if ( !mw.cx.TemplateEditor ) {
			// Qunit tests might note load this module.
			return false;
		}

		if ( !this.isEditable() ) {
			return false;
		}

		if ( this.editor ) {
			return true;
		}

		this.editor = new mw.cx.TemplateEditor(
			this.sourceTemplate,
			this.targetTemplate, {
				siteMapper: self.siteMapper,
				onUpdate: function ( $updatedTemplate, templateParamMapping ) {
					self.replaceTargetTemplate( $updatedTemplate, 'adapt' );
					self.targetTemplate.$template.attr( {
						'data-template-mapping': JSON.stringify( templateParamMapping )
					} );
					self.onUpdate();
				}
			}
		);
		this.targetTemplate.options.onEdit = $.proxy( this.onEdit, this );
	};

	/**
	 * Editor request handler
	 */
	TemplateTool.prototype.onEdit = function () {
		this.editor.show();
	};

	TemplateTool.prototype.isEditable = function () {
		// Editor is given only when 'adapt' is the option
		return this.status === 'adaptable' || this.status === 'adapted';
	};

	/**
	 * Update and rerender the target template
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateTool.prototype.updateTargetTemplate = function () {
		var self = this;

		this.targetTemplate.$template.first().cxoverlay( {
			fullscreen: false,
			showLoading: true
		} );
		return this.targetTemplate.getUpdatedTemplate().then( function ( $newTemplate ) {
			self.targetTemplate.$template.first().cxoverlay( 'hide' );
			self.replaceTargetTemplate( $newTemplate, 'adapt' );
		} );
	};

	/**
	 * Replace the target template with a new one.
	 *
	 * @param {jQuery} $newTemplate Replace with this template
	 * @param {string} state The new state of the template.
	 */
	TemplateTool.prototype.replaceTargetTemplate = function ( $newTemplate, state ) {
		var sourceId, $new, $visibleFragment;

		$visibleFragment = this.sourceTemplate.getFirstVisibleFragment();
		if ( !$visibleFragment ) {
			// This should not happen. But prevent the js error if it happens. See T176237
			mw.error( '[CX] Error: No visible fragment for template for ' + this.sourceTemplate.title );
			// Stopping here means no template editor for this particular template.
			return;
		}
		sourceId = $visibleFragment.prop( 'id' );
		$new = $newTemplate
			.clone()
			.attr( {
				'data-source': sourceId,
				id: 'cx' + sourceId,
				about: this.sourceTemplate.$template.attr( 'about' ),
				contenteditable: false,
				tabindex: 0 // Making it focusable
			} );
		// data-mw and typeof attributes need to set only to the first item in the set of
		// template fragments. We set about attribute to all items above.
		$new.first().attr( {
			'data-template-state': state,
			'typeof': $newTemplate.attr( 'typeof' ),
			'data-mw': $newTemplate.attr( 'data-mw' )
		} );
		// Trick to reduce the multiple template fragments with just one.
		this.targetTemplate.$template.not( ':first' ).remove();
		this.targetTemplate.$template = this.targetTemplate.$template.replaceWith( $new );
		this.targetTemplate.$template = $( document.getElementById( 'cx' + sourceId ) );
		this.targetTemplate = new mw.cx.Template(
			this.targetTemplate.$template,
			this.targetTemplate.options
		);
		// Update the reference in editor object
		if ( this.editor ) {
			this.editor.targetTemplate.$template = this.targetTemplate.$template;
		}
	};

	/**
	 * Get inline templates in a section
	 *
	 * @param {jQuery} $section Target section
	 * @return {Object[]} Array of source-target pairs of the found inline templates
	 */
	TemplateTool.static.getInlineTemplates = function ( $section ) {
		var $targetTemplates, inlineTemplates = [];

		$targetTemplates = $section.find( '[typeof~="mw:Transclusion"]' );
		$targetTemplates.each( function () {
			var inlineTemplate, $targetTemplate = $( this );

			inlineTemplate = {
				source: mw.cx.Template.static.getTemplateDef( $targetTemplate ),
				target: $section.find( '[about="' + $targetTemplate.attr( 'about' ) + '"]' )
			};

			if ( inlineTemplate.source.length ) {
				inlineTemplates.push( inlineTemplate );
			}
		} );

		return inlineTemplates;
	};

	/**
	 * Mark the template unadaptable. This is like a placeholder, ignored from
	 * content to publish.
	 */
	TemplateTool.prototype.markUndaptable = function () {
		var $new;

		if ( this.targetTemplate.options.inline ) {
			// just leave the template unchanged. Add a class.
			this.targetTemplate.$template.addClass( 'cx-unadaptable-template' );
			// Copy the attributes explicitly since we cannot assume they are present
			// after MT of parent section.
			this.targetTemplate.$template.attr( {
				'data-template-state': 'keep-original',
				'data-mw': this.sourceTemplate.$template.attr( 'data-mw' ),
				'typeof': this.sourceTemplate.$template.attr( 'typeof' )
			} );
		} else {
			$new = $( '<div>' )
				.addClass( 'placeholder cx-unadaptable-template' )
				.attr( {
					'data-mw': this.sourceTemplate.$template.attr( 'data-mw' ),
					'typeof': this.sourceTemplate.$template.attr( 'typeof' )
				} );
			this.replaceTargetTemplate( $new, 'unadaptable' );
		}

		this.onUpdate();
	};

	/**
	 * Mark the template skipped. This is like a placeholder, ignored from
	 * content to publish.
	 */
	TemplateTool.prototype.skip = function () {
		var $new;

		if ( this.targetTemplate.options.inline ) {
			// just remove the inline template
			this.targetTemplate.$template.remove();
		} else {
			$new = $( '<div>' )
				.addClass( 'placeholder' )
				.attr( {
					'data-mw': this.sourceTemplate.$template.attr( 'data-mw' ),
					'typeof': this.sourceTemplate.$template.attr( 'typeof' )
				} );
			this.replaceTargetTemplate( $new, 'skip' );
			this.onUpdate();
		}
	};

	TemplateTool.prototype.onUpdate = function () {
		// Fire appropriate change events.
		if ( this.targetTemplate.options.inline ) {
			// Fire change event for the parent section.
			mw.hook( 'mw.cx.translation.change' ).fire(
				this.targetTemplate.$template.parents( '[data-source]' )
			);
		} else {
			mw.hook( 'mw.cx.translation.change' ).fire( this.targetTemplate.$template );
		}
	};

	/**
	 * Process a template pair.
	 *
	 * @param {jQuery} $sourceTemplate Source template
	 * @param {jQuery} $targetTemplate Target template
	 * @param {Object} options Options for processing
	 * @return {jQuery.Promise}
	 */
	TemplateTool.static.processTemplate = function ( $sourceTemplate, $targetTemplate, options ) {
		var sourceTemplate, targetTemplate, templateTool;

		if ( !$sourceTemplate.length ) {
			return $.Deferred().resolve().promise();
		}

		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper,
			inline: options.inline
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			inline: options.inline,
			editable: !options.references
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );

		// Save the instance.
		$sourceTemplate.data( 'cxtemplate', templateTool );

		if ( options.references ) {
			// References need special handling because the fragments required for them
			// are scattered in different sections, but our processing is confined
			// to a single section. When we request a template's html rendering, the parser
			// won't get this information and end up with returning just the container,
			// loosing all reference data. To avoid this, we process each internal reference
			// template and keep the container unchanged.
			templateTool.replaceTargetTemplate( sourceTemplate.$template, 'keep-original' );
			// The internal references are processed on demand when they get added to translation.
			// See mw.cx.adapted.reference hook handler
			return;
		}

		// Not a processed template. Proceed with attempt to adapt.
		$targetTemplate.first().cxoverlay( {
			fullscreen: false,
			showLoading: true
		} );

		return templateTool.adapt().then( function () {
			// Successful adaptation.
			templateTool.prepareEditor();
			return templateTool.updateTargetTemplate();
		}, function () {
			// Adaptation failed.
			$targetTemplate.first().cxoverlay( 'hide' );
			templateTool.markUndaptable();

			// Allow proceeding inline templates even after failure.
			if ( options.inline ) {
				return $.Deferred().resolve().promise();
			} else {
				return $.Deferred().reject().promise();
			}
		} ).always( function () {
			templateTool.onUpdate();
		} );
	};

	/**
	 * Process all inline templates in a section.
	 *
	 * @param {jQuery} $section The translation source section.
	 * @return {jQuery.Promise}
	 */
	TemplateTool.static.processInlineTemplates = function ( $section ) {
		var inlineTemplates, queue = $.Deferred().resolve();

		inlineTemplates = mw.cx.TemplateTool.static.getInlineTemplates( $section ) || [];
		// forEach used to get easy and simple closure inside.
		inlineTemplates.forEach( function ( inlineTemplate ) {
			queue = queue.then( function () {
				return mw.cx.TemplateTool.static.processTemplate( inlineTemplate.source, inlineTemplate.target, {
					inline: true
				} );
			} );
		} );
		return queue.promise();
	};

	/**
	 * Check if the template is a references or a container for it.
	 *
	 * @param {jQuery} $sourceTemplate The template
	 * @return {boolean}
	 */
	TemplateTool.static.isReferencesBlock = function ( $sourceTemplate ) {
		return $sourceTemplate.is( '[typeof~="mw:Extension/references"]' ) ||
			$sourceTemplate.find( '[typeof~="mw:Extension/references"]' ).length > 0;
	};

	/**
	 * Process a section template.
	 *
	 * @param {jQuery|string} section The translation source section or its id.
	 */
	TemplateTool.static.processBlockTemplate = function ( section ) {
		var $targetTemplate, $sourceTemplate, isReferencesBlock;

		if ( section instanceof jQuery ) {
			$targetTemplate = section;
		} else {
			$targetTemplate = mw.cx.getTranslationSection( section );
		}

		// Source section and source template wont be same since the template
		// with template definition may be another element with same about attribute.
		$sourceTemplate = mw.cx.Template.static.getTemplateDef( $targetTemplate );
		isReferencesBlock = mw.cx.TemplateTool.static.isReferencesBlock( $sourceTemplate );
		if ( mw.cx.Template.static.isTemplate( $sourceTemplate ) || isReferencesBlock ) {
			mw.cx.TemplateTool.static.processTemplate( $sourceTemplate, $targetTemplate, {
				inline: false,
				references: isReferencesBlock
			} );
		} else {
			mw.cx.TemplateTool.static.processInlineTemplates( $targetTemplate );
		}
	};

	mw.cx.TemplateTool = TemplateTool;

	mw.cx.TemplateTool.defaults = {
		siteMapper: mw.cx.siteMapper,
		sourceLanguage: mw.cx.sourceLanguage,
		targetLanguage: mw.cx.targetLanguage
	};

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( mw.cx.TemplateTool.static.processBlockTemplate );
		mw.hook( 'mw.cx.translation.add' ).add( mw.cx.TemplateTool.static.processBlockTemplate );
		mw.hook( 'mw.cx.adapted.reference' ).add( function ( referenceId ) {
			var $targetTemplate;
			$targetTemplate = $( '.cx-column--translation #' + referenceId );
			mw.cx.TemplateTool.static.processInlineTemplates( $targetTemplate );
		} );
	} );

}( jQuery, mediaWiki ) );
