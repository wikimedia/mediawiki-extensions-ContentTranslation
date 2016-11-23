/*!
 * Content Translation template editor
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Template editor
	 *
	 * @param {mw.cx.Template} sourceTemplate
	 * @param {mw.cx.Template} targetTemplate
	 * @param {Object} [options]
	 * @cfg {mw.cx.SiteMapper} [siteMapper] siteMapper
	 * @cfg {Function} [onUpdate] Function to call once the template is updated by editor
	 * @cfg {Function} [onFail] Function to call when editor is failed to give the updated content
	 */
	function TemplateEditor( sourceTemplate, targetTemplate, options ) {
		this.sourceTemplate = sourceTemplate;
		this.targetTemplate = targetTemplate;
		this.options = options || {};
		this.siteMapper = options.siteMapper;
		this.$editor = null;
		this.$sourceTemplateForm = null;
		this.$targetTemplateForm = null;
		this.templateValues = {};
		this.changed = false;
		this.init();
	}

	TemplateEditor.static = {};

	/**
	 * Initialize the template editor
	 */
	TemplateEditor.prototype.init = function () {
		var $header, $closeButton, $sourceTemplateContainer, $targetTemplateContainer,
			self = this;

		this.$editor = $( '<div>' )
			.addClass( 'cx-template-editor' )
			.hide();
		$closeButton = $( '<div>' )
			.addClass( 'cx-template-editor-close' )
			.click( $.proxy( this.close, this ) );
		$header = $( '<div>' )
			.addClass( 'cx-template-editor-header' )
			.append( $closeButton );
		this.$sourceTemplateForm = $( '<div>' )
			.addClass( 'cx-template-editor-source' );
		this.$targetTemplateForm = $( '<div>' )
			.addClass( 'cx-template-editor-target' );
		$sourceTemplateContainer = $( '<div>' )
			.addClass( 'cx-template-editor-source-container' )
			.attr( {
				lang: this.sourceTemplate.language,
				dir: $.uls.data.getDir( this.sourceTemplate.language )
			} )
			.append( this.$sourceTemplateForm );
		$targetTemplateContainer = $( '<div>' )
			.addClass( 'cx-template-editor-target-container' )
			.attr( {
				lang: this.targetTemplate.language,
				dir: $.uls.data.getDir( this.targetTemplate.language )
			} )
			.append( this.$targetTemplateForm );
		this.$editor.append(
			$header,
			$sourceTemplateContainer,
			$targetTemplateContainer
		);
		this.sourceTemplate.$template.after( this.$editor );
		this.sourceTemplate.init().then( function () {
			self.prepareTemplateForm( self.sourceTemplate, 'source' );
		} );
		this.targetTemplate.init().then( function () {
			self.prepareTemplateForm( self.targetTemplate, 'target' );
		} );
		this.listen();
	};

	/**
	 * Prepare the form with parameter and their values.
	 *
	 * @param {mw.cx.Template} template The template object from data-mw attribute
	 * @param {string} type Whether the template is source or target
	 */
	TemplateEditor.prototype.prepareTemplateForm = function ( template, type ) {
		var $form, $editorTitle, $param, language, desc, sortedKeys,
			self = this;

		if ( type === 'source' ) {
			$form = this.$sourceTemplateForm;
			language = this.sourceTemplate.language;
		} else {
			$form = this.$targetTemplateForm;
			language = this.targetTemplate.language;
		}

		$form.empty();
		desc = template.templateData && template.templateData.description &&
			template.templateData.description[ language ];
		$editorTitle = $( '<div>' )
			.addClass( 'cx-template-editor-title' )
			.attr( 'title', desc )
			.text( template.title );
		$form.append( $editorTitle );
		sortedKeys = ( template.templateData && template.templateData.paramOrder ) ||
			Object.keys( template.params );
		$.each( sortedKeys, function ( index, key ) {
			var value, $key, $value, $desc = $( [] );

			value = template.params[ key ];
			if ( type === 'source' && !value.wt ) {
				return true;
			}
			$key = $( '<span>' )
				.attr( {
					id: key
				} )
				.addClass( 'cx-template-editor-param-key' )
				.text( ( value.label && value.label[ language ] ) || key );
			if ( value.description && value.description[ language ] ) {
				$desc = $( '<span>' )
					.attr( {
						'for': key,
						title: value.description[ language ]
					} )
					.addClass( 'cx-template-editor-param-desc' );
			}
			$value = $( '<div>' )
				.addClass( 'cx-template-editor-param-value' )
				.attr( {
					'for': key,
					contenteditable: type === 'target'
				} )
				.text( value.wt );

			$param = $( '<div>' )
				.addClass( 'cx-template-editor-param-title' )
				.append( $key, $desc );
			$form.append( $( '<div>' )
				.addClass( 'cx-template-editor-param' )
				.append( $param, $value )
			);

			if ( template.params[ key ].html ) {
				$value.html( template.params[ key ].html );
				return;
			}
			if ( !value.wt ) {
				return;
			}

			if ( /\{\{|[\[<>&'=#*]/.test( value.wt ) === false ) {
				// Plan text. Does not contain wiki markup. Save api calls.
				template.params[ key ].html = value.wt;
				$value.html( value.wt );
				return;
			}
			$value.cxoverlay( {
				showLoading: true
			} );
			mw.cx.wikitextToHTML( self.siteMapper, language, value.wt ).then( function ( response ) {
				var html;
				try {
					// Parsoid sometimes wraps the html in <p> tags. we dont need that.
					html = $( response ).html();
				} catch ( error ) {
					// It is not guaranteed that the response.contenttranslation.html is valid
					// for sizzle.
					html = response.contenttranslation.html;
				}
				template.params[ key ].html = html;
				$value.html( html );
				mw.cx.fixIds( $value, template.$template.prop( 'id' ) + '-' + key );
				// TODO: Do machine translation
			} ).fail( function () {
				$value.text( value.wt );
			} ).always( function () {
				$value.cxoverlay( 'hide' );
			} );
		} );
		// Focus the first field.
		if ( type === 'target' ) {
			this.$targetTemplateForm.find( '[contenteditable="true"]' ).first().focus();
		}
	};

	/**
	 * Even handler registration
	 */
	TemplateEditor.prototype.listen = function () {
		var self = this;

		this.$targetTemplateForm.on( 'input', '.cx-template-editor-param-value',
			$.debounce( 200, false, function () {
				var $value = $( this ),
					key = $value.attr( 'for' );
				self.targetTemplate.params[ key ].html = $value.html();
				self.targetTemplate.params[ key ].changed = true;
				self.changed = true;
			} )
		);
	};

	/**
	 * Position the editor on top of the template.
	 */
	TemplateEditor.prototype.position = function () {
		var top, sourceTemplateHeight, maxheight, viewportHeight;

		sourceTemplateHeight = this.sourceTemplate.getHeight();
		viewportHeight = $( window ).height();

		if ( sourceTemplateHeight < 250 ) {
			// Height for the inlie template editor is fixed at 250px;
			maxheight = 250;
		} else {
			// Max height of the editor should never exceed the viewport height
			// We use 90vh considering the floating header in translation view.
			maxheight = sourceTemplateHeight > viewportHeight ?
				( viewportHeight * 0.9 ) :
				sourceTemplateHeight;
		}

		top = this.sourceTemplate.$template.offset().top - $( '.cx-column__content' ).offset().top;
		if ( this.targetTemplate.options.inline ) {
			top += sourceTemplateHeight; // Show the editor below the template.
		}
		this.$editor.css( {
			top: top
		} );
		this.$sourceTemplateForm.css( {
			'max-height': maxheight
		} );
		this.$targetTemplateForm.css( {
			'max-height': maxheight
		} );
	};

	/**
	 * Show the editor.
	 */
	TemplateEditor.prototype.show = function () {
		this.$editor.show();
		this.position();
		this.targetTemplate.$template.addClass( 'cx-template-editor-open' );
		this.sourceTemplate.$template.addClass( 'cx-template-editor-open' );
		this.prepareTemplateForm( this.targetTemplate || this.sourceTemplate, 'target' );
	};

	/**
	 * Update the target template's data-mw attribute
	 *
	 * @return {jQuery.Promise}
	 */
	TemplateEditor.prototype.save = function () {
		var self = this,
			queue = $.Deferred().resolve();

		self.targetTemplate.$template.first().cxoverlay( {
			showLoading: true
		} );

		$.each( this.targetTemplate.params, function ( key, value ) {
			if ( value.changed ) {
				if ( !value.html || !isNaN( value.html ) ) {
					// Value cleared/deleted/a number. Save an API call.
					value.wt = value.html;
					value.changed = false;
					return;
				}
				queue = queue.then( function () {
					// TODO: If we can identify that this value.html is just plaintext,
					// we can save an api call here.
					return mw.cx.htmlToWikitext( self.siteMapper, self.targetTemplate.language, value.html )
						.done( function ( response ) {
							value.wt = response;
							value.changed = false;
						} );
				} );
			}
		} );

		queue = queue.then( function () {
			return self.targetTemplate.getUpdatedTemplate().then( function ( $newTemplate ) {
				self.changed = false;
				if ( self.options.onUpdate ) {
					self.options.onUpdate( $newTemplate );
				}

				return $newTemplate;
			} ).fail( function () {
				if ( self.options.onFail ) {
					self.options.onFail();
				}
			} );
		} );

		return queue;
	};

	/**
	 * Close the editor. If any thing changed, trigger #save
	 */
	TemplateEditor.prototype.close = function () {
		this.$editor.hide();
		this.targetTemplate.$template.removeClass( 'cx-template-editor-open' );
		this.sourceTemplate.$template.removeClass( 'cx-template-editor-open' );

		if ( this.changed ) {
			this.save();
		}
	};

	mw.cx.TemplateEditor = TemplateEditor;
}( jQuery, mediaWiki ) );
