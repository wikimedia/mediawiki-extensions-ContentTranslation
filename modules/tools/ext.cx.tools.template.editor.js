/*!
 * Content Translation template editor
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw, OO ) {
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
		this.$closeButton = null;
		this.$sourceTemplateForm = null;
		this.$targetTemplateForm = null;
		this.$sourceTemplateContainer = null;
		this.$targetTemplateContainer = null;
		this.templateValues = {};
		this.formFieldMap = {};
		this.changed = false;
		this.initialized = false;
		this.paramSelectors = [];
		this.init();
	}

	/**
	 * Initialize the template editor
	 */
	TemplateEditor.prototype.init = function () {
		var self = this;

		this.$sourceTemplateContainer = this.buildSourceFormContainer();
		this.$targetTemplateContainer = this.buildTargetFormContainer();

		this.sourceTemplate.getEditorContainer().after( this.$sourceTemplateContainer );
		this.targetTemplate.getEditorContainer().after( this.$targetTemplateContainer );

		this.sourceTemplate.init().then( function () {
			self.buildSourceTemplateForm();
		} );
		this.targetTemplate.init();

		this.listen();
	};

	TemplateEditor.prototype.buildSourceFormContainer = function () {
		this.$sourceTemplateForm = $( '<div>' )
			.addClass( 'cx-template-editor-source' );
		return $( '<div>' )
			.addClass( 'cx-template-editor-source-container' )
			.attr( {
				lang: this.sourceTemplate.language,
				dir: $.uls.data.getDir( this.sourceTemplate.language )
			} )
			.append( this.$sourceTemplateForm )
			.hide();
	};

	TemplateEditor.prototype.buildTargetFormContainer = function () {
		this.$closeButton = $( '<div>' )
			.addClass( 'cx-template-editor-close' )
			.click( $.proxy( this.close, this ) );

		this.$targetTemplateForm = $( '<div>' )
			.addClass( 'cx-template-editor-target' );

		return	$( '<div>' )
			.addClass( 'cx-template-editor-target-container' )
			.attr( {
				lang: this.targetTemplate.language,
				dir: $.uls.data.getDir( this.targetTemplate.language )
			} )
			.append( this.$closeButton, this.$targetTemplateForm )
			.hide();
	};

	/**
	 * Prepare the source template form with parameter and their values.
	 */
	TemplateEditor.prototype.buildSourceTemplateForm = function () {
		var $form, $editorTitle, $param, language, desc, sortedKeys,
			self = this;

		$form = this.$sourceTemplateForm;
		language = this.sourceTemplate.language;

		desc = this.sourceTemplate.templateData && this.sourceTemplate.templateData.description &&
			this.sourceTemplate.templateData.description[ language ];
		$editorTitle = $( '<div>' )
			.addClass( 'cx-template-editor-title' )
			.attr( 'title', desc )
			.text( this.sourceTemplate.title );

		$form.append( $editorTitle );
		sortedKeys = ( this.sourceTemplate.templateData && this.sourceTemplate.templateData.paramOrder ) ||
			Object.keys( this.sourceTemplate.params );

		$.each( sortedKeys, function ( index, key ) {
			var value, $key, $value, $field, $desc = $( [] );

			self.formFieldMap[ key ] = {};
			value = self.sourceTemplate.params[ key ];

			if ( !value.wt ) {
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
						'data-key': key,
						title: value.description[ language ]
					} )
					.addClass( 'cx-template-editor-param-desc' );
			}

			$value = $( '<div>' )
				.addClass( 'cx-template-editor-param-value' )
				.attr( 'data-key', key )
				.text( value.wt );

			$param = $( '<div>' )
				.addClass( 'cx-template-editor-param-title' )
				.append( $key, $desc );
			$field = $( '<div>' )
				.addClass( 'cx-template-editor-param' )
				.append( $param, $value );
			$form.append( $field );

			self.formFieldMap[ key ].source = $field;
			if ( self.sourceTemplate.params[ key ].html ) {
				$value.html( self.sourceTemplate.params[ key ].html );
				return;
			}

			$value.cxoverlay( {
				fullscreen: false,
				showLoading: true
			} );
			mw.cx.wikitextToHTML( self.siteMapper, language, value.wt ).then( function ( response ) {
				var html;
				try {
					// Parsoid sometimes wraps the html in <p> tags. we dont need that.
					html = $( response ).html();
				} catch ( error ) {
					// It is not guaranteed that the response html is valid for sizzle.
					html = response;
				}
				self.sourceTemplate.params[ key ].html = html;
				$value.html( html );
				mw.cx.fixIds( $value, self.sourceTemplate.$template.prop( 'id' ) + '-' + key );
			} ).fail( function () {
				$value.text( value.wt );
			} ).always( function () {
				$value.cxoverlay( 'hide' );
			} );
		} );
	};

	/**
	 * Prepare the form with parameter and their values.
	 */
	TemplateEditor.prototype.buildTargetTemplateForm = function () {
		var $form, $editorTitle, language, desc, sortedSourceKeys,
			self = this;

		$form = this.$targetTemplateForm;
		language = this.targetTemplate.language;

		desc = self.targetTemplate.templateData && self.targetTemplate.templateData.description &&
			self.targetTemplate.templateData.description[ language ];
		$editorTitle = $( '<div>' )
			.addClass( 'cx-template-editor-title' )
			.attr( 'title', desc )
			.text( self.targetTemplate.title );
		$form.append( $editorTitle );
		sortedSourceKeys = ( self.sourceTemplate.templateData && self.sourceTemplate.templateData.paramOrder ) ||
				Object.keys( self.sourceTemplate.params );

		$.each( sortedSourceKeys, function ( index, key ) {
			var value = self.sourceTemplate.params[ key ];
			if ( !value.wt ) {
				return true;
			}
			self.addTemplateField( $form, key );
		} );
		self.addTemplateFieldAdder( $form );
		$.fn.keepAlignment( this.$sourceTemplateContainer, this.$targetTemplateContainer );
	};

	/**
	 * Add template param field to the given form
	 *
	 * @param {jQuery} $form The form to which the field to be added
	 * @param {string} sourceKey Source key
	 */
	TemplateEditor.prototype.addTemplateField = function ( $form, sourceKey ) {
		var selector, value, $value, $field, targetKey,
			self = this;

		this.targetTemplate.mapping = this.targetTemplate.mapping || {};
		targetKey = this.targetTemplate.mapping[ sourceKey ];
		value = this.targetTemplate.params[ targetKey ] || this.sourceTemplate.params[ sourceKey ];

		$value = $( '<div>' )
			.addClass( 'cx-template-editor-param-value' )
			.attr( {
				'data-key': sourceKey
			} )
			.html( value && ( value.html || value.wt ) );

		// TODO: We can try MT for this template But that is for future.
		$field = $( '<div>' )
			.addClass( 'cx-template-editor-param cx-template-editor-placeholder' )
			.attr( 'data-source', sourceKey )
			.text( mw.msg( 'cx-translation-template-add-param' ) );

		$form.append( $field );

		if ( !this.formFieldMap[ sourceKey ] ) {
			this.formFieldMap[ sourceKey ] = {
				source: $( [] )
			};
		}
		this.formFieldMap[ sourceKey ].target = $field;

		function selectKey( option ) {
			var key = option.data;

			if ( !key ) {
				return;
			}
			self.targetTemplate.mapping[ sourceKey ] = key;
			$value.attr( {
				contenteditable: true,
				'data-key': key
			} );
			$value.trigger( 'input' );
			self.syncParamSelectors();
		}

		function showField() {
			selector = self.buildTemplateFieldSelector();
			selector.getMenu().on( 'select', selectKey );
			if ( targetKey ) {
				// Preselect the value.
				selector.getMenu().selectItemByData( targetKey );
			}
			$field
				.empty()
				.removeClass( 'cx-template-editor-placeholder' )
				.append( selector.$element, $value );
			self.syncParamSelectors();
			$.fn.keepAlignment( self.formFieldMap[ sourceKey ].source, self.formFieldMap[ sourceKey ].target );
			$.fn.keepAlignment( self.$sourceTemplateContainer, self.$targetTemplateContainer );
		}

		if ( targetKey || !this.formFieldMap[ sourceKey ].source.length ) {
			showField();
		} else {
			$field.one( 'click', showField );
		}

		// Keep the placeholder aligned
		if ( sourceKey ) {
			$.fn.keepAlignment( this.formFieldMap[ sourceKey ].source, this.formFieldMap[ sourceKey ].target );
		}

		if ( !value || value && value.html ) {
			return;
		}

		// The html value is not available. We need to parse wikitext here.
		$value.cxoverlay( {
			fullscreen: false,
			showLoading: true
		} );

		mw.cx.wikitextToHTML( self.siteMapper, this.targetTemplate.language, value.wt ).then( function ( response ) {
			var html;
			try {
				// Parsoid sometimes wraps the html in <p> tags. we dont need that.
				html = $( response ).html();
			} catch ( error ) {
				// It is not guaranteed that the response html is valid for sizzle.
				html = response;
			}
			$value.html( html );
			mw.cx.fixIds( $value, self.targetTemplate.$template.prop( 'id' ) + '-' + targetKey );
		} ).fail( function () {
			$value.text( value.wt );
		} ).always( function () {
			$value.cxoverlay( 'hide' );
			$.fn.keepAlignment( self.$sourceTemplateContainer, self.$targetTemplateContainer );
		} );

	};

	/**
	 * Add a trigger to end of template form to add more template parameters
	 */
	TemplateEditor.prototype.addTemplateFieldAdder = function () {
		var $adder,
			self = this;

		$adder = $( '<div>' )
			.addClass( 'cx-template-editor-add-properties' )
			.text( mw.msg( 'cx-translation-template-add-more' ) )
			.on( 'click', function () {
				self.addTemplateField( self.$targetTemplateForm, 'cx' + Math.floor( Math.random() * 10000 ) );
				$.fn.keepAlignment( self.$sourceTemplateContainer, self.$targetTemplateContainer );
			} );
		this.$targetTemplateContainer.append( $adder );
	};

	/**
	 * Build the selector (dropdown) for the template parameters
	 *
	 * @return {OO.ui.DropdownWidget} dropdown widget
	 */
	TemplateEditor.prototype.buildTemplateFieldSelector = function () {
		var dropDown, sortedTargetKeys, language,
			items = [],
			self = this;

		sortedTargetKeys = ( this.targetTemplate.templateData && this.targetTemplate.templateData.paramOrder ) ||
			Object.keys( this.targetTemplate.params );
		language = this.targetTemplate.language;

		$.each( sortedTargetKeys, function ( index, key ) {
			var value, option, $desc;

			value = self.targetTemplate.params[ key ];
			option = new mw.cx.widgets.TemplateParamOptionWidget( {
				data: key,
				classes: [ 'cx-template-editor-param-selector-item' ],
				label: value && value.label && value.label[ language ] || key,
				description: value && value.description && value.description[ language ] || ''
			} );
			option.$element.append( $desc );
			items.push( option );
		} );

		dropDown = new OO.ui.DropdownWidget( {
			label: mw.msg( 'cx-translation-template-select-param' ),
			classes: [ 'cx-template-editor-param-selector' ],
			menu: {
				items: items
			}
		} );

		this.paramSelectors.push( dropDown );

		return dropDown;
	};

	/**
	 * Event handler registration
	 */
	TemplateEditor.prototype.listen = function () {
		this.$targetTemplateForm.on( 'input paste change', '.cx-template-editor-param-value',
			$.debounce( 200, false, $.proxy( this.onParamEdit, this ) )
		);

		mw.hook( 'mw.cx.translation.focus' ).add( $.proxy( this.close, this ) );
	};

	/**
	 * Edit handler for the parameter values
	 *
	 * @param  {Event} event Edit event
	 */
	TemplateEditor.prototype.onParamEdit = function ( event ) {
		var $value, sourcekey, key;

		$value = $( event.target );
		key = $value.attr( 'data-key' );
		this.targetTemplate.params[ key ].html = $value.html();
		this.targetTemplate.params[ key ].changed = true;
		this.changed = true;

		// Align the fields
		sourcekey = $value.parent().data( 'source' );
		if ( sourcekey ) {
			$.fn.keepAlignment( this.formFieldMap[ sourcekey ].source, this.formFieldMap[ sourcekey ].target );
		}
		$.fn.keepAlignment( this.$sourceTemplateContainer, this.$targetTemplateContainer );
	};

	/**
	 * Synchronize all parameter selectors by disabling items that are already chosen
	 */
	TemplateEditor.prototype.syncParamSelectors = function () {
		var selectedKeys = [];

		// Get all selected keys, and enable all options.
		this.paramSelectors.forEach( function ( selector ) {
			var selectedOption;

			selectedOption = selector.getMenu().getSelectedItem();
			if ( selectedOption ) {
				selectedKeys.push( selectedOption.getData() );
			}
			selector.getMenu().getItems().forEach( function ( option ) {
				option.setDisabled( false );
			} );
		} );

		// Selectively disable the options that are already chosen
		this.paramSelectors.forEach( function ( selector ) {
			var selectedOption;

			selectedOption = selector.getMenu().getSelectedItem();
			selectedKeys.forEach( function ( key ) {
				if ( !selectedOption || key !== selectedOption.getData() ) {
					selector.getMenu().getItemFromData( key ).setDisabled( true );
				}
			} );
		} );
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
			fullscreen: false,
			showLoading: true
		} );

		$.each( this.targetTemplate.params, function ( key, value ) {
			if ( value && value.changed ) {
				if ( !value.html || !isNaN( value.html ) ) {
					// Value cleared/deleted/a number. Save an API call.
					value.wt = value.html;
					value.changed = false;
					return;
				}
				queue = queue.then( function () {
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
					self.options.onUpdate( $newTemplate, self.targetTemplate.mapping );
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
	 * Show the editor.
	 */
	TemplateEditor.prototype.show = function () {
		this.targetTemplate.hide();
		this.sourceTemplate.hide();

		this.$sourceTemplateContainer.show();
		this.$targetTemplateContainer.show();

		if ( !this.initialized ) {
			this.buildTargetTemplateForm( this.targetTemplate || this.sourceTemplate );
			this.initialized = true;
		}
		$.fn.keepAlignment( this.$sourceTemplateContainer, this.$targetTemplateContainer );
	};

	/**
	 * Close the editor. If any thing changed, trigger #save
	 */
	TemplateEditor.prototype.close = function () {
		if ( this.changed ) {
			this.save();
		}

		this.$sourceTemplateContainer.hide();
		this.$targetTemplateContainer.hide();

		this.targetTemplate.show();
		this.sourceTemplate.show();

	};

	mw.cx.TemplateEditor = TemplateEditor;
}( jQuery, mediaWiki, OO ) );
