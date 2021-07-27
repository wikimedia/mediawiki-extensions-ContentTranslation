'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ui.Toolbar
 * @constructor
 * @param {ve.init.mw.CXTarget} target
 */
ve.ui.CXTranslationToolbar = function VeUiCXTranslationToolbar() {
	var $title;

	// TODO: inject
	this.MTManager = ve.init.target.config.MTManager;

	// Parent constructor
	ve.ui.CXTranslationToolbar.super.apply( this, arguments );

	$title = $( '<div>' )
		.addClass( 've-cx-toolbar-mt-title' )
		.text( mw.msg( 'cx-tools-mt-title' ) );

	this.noMTServices = new OO.ui.LabelWidget( {
		classes: [ 've-cx-toolbar-mt-noservices' ],
		label: mw.message( 'cx-tools-mt-noservices' ).parseDom()
	} ).toggle( false );
	this.noMTServices.$element.find( 'a' ).prop( 'target', '_blank' );

	this.$element
		.addClass( 've-cx-toolbar-mt' )
		.prepend( $title, this.noMTServices.$element );

	// Hide initially, because there is no selection initially
	this.$element.toggle( false );

};

/* Inheritance */

OO.inheritClass( ve.ui.CXTranslationToolbar, ve.ui.Toolbar );

/* Static Methods */

/**
 * @param {mw.cx.MachineTranslationManager} MTManager
 * @return {jQuery.Promise}
 */
ve.ui.CXTranslationToolbar.static.registerTools = function ( MTManager ) {
	var createProviderItem = function ( provider, defaultProvider, MTManager ) {
		var toolClassName = provider + 'MTTool';
		ve.ui[ toolClassName ] = function VeCXMTTool() {
			ve.ui.Tool.apply( this, arguments );
			this.MTManager = MTManager;
			this.setActive( defaultProvider === this.getName() );
			this.MTManager.getPreferredProvider().then( function ( preferredProvider ) {
				this.setIsPreferred( preferredProvider === this.getName() );
			}.bind( this ) );
		};

		OO.inheritClass( ve.ui[ toolClassName ], ve.ui.Tool );
		ve.ui[ toolClassName ].static.name = provider;
		ve.ui[ toolClassName ].static.group = 'mt';
		ve.ui[ toolClassName ].static.autoAddToCatchall = false;
		ve.ui[ toolClassName ].static.title = MTManager.getProviderLabel( provider );
		ve.ui[ toolClassName ].static.commandName = provider.toLowerCase();

		ve.ui[ toolClassName ].prototype.onSelect = function () {
			// Parent method
			ve.ui.Tool.prototype.onSelect.apply( this, arguments );
			// Set all other tools inactive
			this.toolGroup.items.forEach( function ( tool ) {
				tool.setActive( tool === this );
			}, this );
		};

		ve.ui[ toolClassName ].prototype.onUpdateState = function () {
			var section, source,
				surface = this.toolbar.getSurface(),
				selection = surface.getModel().getSelection();

			// Parent method
			ve.ui.Tool.prototype.onUpdateState.apply( this, arguments );

			// Check that we are not getting ve.dm.NullSelection
			if ( !( selection instanceof ve.dm.LinearSelection ) ) {
				return;
			}

			// When changing provides, there is temporarily no parent section
			section = mw.cx.getParentSectionForSelection( surface, selection );
			if ( !section ) {
				return;
			}

			// Fall back to defaultProvider (should only happen for drafts stored with
			// older version of CX.
			// TODO: How to handle case that stored provider is no longer valid?
			source = section.getOriginalContentSource() || defaultProvider;
			this.setActive( this.getName() === source );
		};

		ve.ui[ toolClassName ].prototype.setIsPreferred = function ( toggle ) {
			this.isPreferred = toggle;
			this.updateTitle();
		};

		ve.ui[ toolClassName ].prototype.updateTitle = function () {
			ve.ui.Tool.prototype.updateTitle.apply( this, arguments );

			if ( this.isPreferred ) {
				this.$title.wrapInner( '<span class="ve-cx-toolbar-mt-preferred-tool-title"></span>' );
				$( '<span>' )
					.addClass( 've-cx-toolbar-mt-preferred-tool-indicator' )
					.text( mw.msg( 'cx-tools-mt-preferred' ) )
					.appendTo( this.$title );
			}
		};

		ve.ui.toolFactory.register( ve.ui[ toolClassName ] );

		ve.ui.commandRegistry.register(
			new ve.ui.Command(
				provider.toLowerCase(), 'translation', 'translate',
				{ args: [ provider ], supportedSelections: [ 'linear' ] }
			)
		);
	};

	return MTManager.getDefaultProvider().then( function ( defaultProvider ) {
		return MTManager.getAvailableProviders().then( function ( providers ) {
			providers.forEach( function ( provider ) {
				createProviderItem( provider, defaultProvider, MTManager );
			} );
		} );
	} );
};

/* Methods */

/**
 * @inheritDoc
 */
ve.ui.CXTranslationToolbar.prototype.setup = function () {
	// Parent method
	ve.ui.CXTranslationToolbar.super.prototype.setup.apply( this, arguments );

	this.toolGroup = this.items[ 0 ];
	this.toolGroup.connect( this, {
		disable: 'onGroupDisable'
	} );

	// Toggle the message about non-availability of MT services
	this.noMTServices.toggle( !this.isMTAvailable() );
};

/**
 * @return {boolean} True if there is MT provider available.
 */
ve.ui.CXTranslationToolbar.prototype.isMTAvailable = function () {
	return this.getToolGroupByName( 'cx-mt' ).getItems().map( function ( item ) {
		return item.getName();
	} ).some( function ( name ) {
		return [ 'ResetSection', 'source', 'scratch' ].indexOf( name ) < 0;
	} );
};

/**
 * Disable event handler for the tool group
 *
 * @param {boolean} disabled
 */
ve.ui.CXTranslationToolbar.prototype.onGroupDisable = function ( disabled ) {
	// If the toolgroup is disabled, hide the toolbar
	this.$element.toggle( !disabled );
};

/**
 * @inheritDoc
 */
ve.ui.CXTranslationToolbar.prototype.getCommands = function () {
	// The commands added in ve.ui.CXTranslationToolbar.static.registerTools is not updated in the
	// commands member property of ve.ui.Surface (which is populated in the constructor)
	// ve.ui.Toolbar.prototype.isToolAvailable validates each tool with the known commands and
	// if not found, does not add to toolbar. Hence we are overriding this method to give the current
	// list of commands for the surface
	// TODO: Fix it in ve.ui.Surface#getCommands
	return this.getSurface().commandRegistry.getNames();
};
