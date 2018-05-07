'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ui.PositionedTargetToolbar
 * @constructor
 * @param {ve.init.mw.CXTarget} target
 */
ve.ui.CXTranslationToolbar = function VeUiCXTranslationToolbar( target ) {
	var $title;

	this.surface = target.surface;
	ve.ui.CXTranslationToolbar.parent.apply( this, arguments );
	$title = $( '<div>' )
		.addClass( 've-cx-toolbar-mt-title' )
		.text( mw.msg( 'cx-tools-mt-title' ) );
	this.$element.addClass( 've-cx-toolbar-mt' ).prepend( $title );
	// Hide initially, because there is no selection initially
	this.$element.toggle( false );
};

OO.inheritClass( ve.ui.CXTranslationToolbar, ve.ui.PositionedTargetToolbar );

ve.ui.CXTranslationToolbar.static.registerTools = function () {
	var createProviderItem = function ( provider, defaultProvider ) {
		var toolClassName = provider + 'MTTool';
		ve.ui[ toolClassName ] = function VeCXMTTool() {
			ve.ui.Tool.apply( this, arguments );
			this.setActive( defaultProvider === this.constructor.static.name );
		};

		OO.inheritClass( ve.ui[ toolClassName ], ve.ui.Tool );
		ve.ui[ toolClassName ].static.name = provider;
		ve.ui[ toolClassName ].static.group = 'mt';
		ve.ui[ toolClassName ].static.title =
			ve.init.target.config.MTManager.getProviderLabel( provider );
		ve.ui[ toolClassName ].static.commandName = provider.toLowerCase();

		ve.ui[ toolClassName ].prototype.onSelect = function () {
			// Parent method
			ve.ui.Tool.prototype.onSelect.apply( this, arguments );
			// Set all other tools inactive
			this.toolGroup.items.forEach( function ( tool ) {
				tool.setActive( tool === this );
			}.bind( this ) );
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

			// Use stored provider if available, otherwise assume defaultProvider
			// TODO: How to handle case that stored provider is no longer valid?
			source = section.getOriginalContentSource() || defaultProvider;
			this.setActive( this.getName() === source );
		};

		ve.ui.toolFactory.register( ve.ui[ toolClassName ] );

		ve.ui.commandRegistry.register(
			new ve.ui.Command(
				provider.toLowerCase(), 'translation', 'translate',
				{ args: [ provider ], supportedSelections: [ 'linear' ] }
			)
		);
	};

	return ve.init.target.config.MTManager.getDefaultProvider().then( function ( defaultProvider ) {
		return ve.init.target.config.MTManager.getAvailableProviders().then( function ( providers ) {
			providers.forEach( function ( provider ) {
				createProviderItem( provider, defaultProvider );
			} );
		} );
	} );
};

/**
 * @inheritDoc
 */
ve.ui.CXTranslationToolbar.prototype.setup = function () {
	ve.ui.CXTranslationToolbar.parent.prototype.setup.apply( this, arguments );
	this.toolGroup = this.items[ 0 ];
	this.toolGroup.connect( this, {
		disable: 'onGroupDisable'
	} );
};

/**
 * Disable event handler for the tool group
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
