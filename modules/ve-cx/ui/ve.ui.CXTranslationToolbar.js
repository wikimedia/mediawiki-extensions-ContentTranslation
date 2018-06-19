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
	this.surface = target.surface;
	ve.ui.CXTranslationToolbar.parent.apply( this, arguments );

	// TODO: inject
	this.MTManager = ve.init.target.config.MTManager;

	this.$title = $( '<div>' )
		.addClass( 've-cx-toolbar-mt-title' )
		.text( mw.msg( 'cx-tools-mt-title' ) );

	this.setAsDefault = new OO.ui.ButtonWidget( {
		framed: false,
		classes: [ 've-cx-toolbar-mt-setdefault' ],
		label: mw.msg( 'cx-tools-mt-set-default' ),
		icon: 'pushPin'
	} ).connect( this, { click: 'onSetAsDefault' } );

	this.$element
		.addClass( 've-cx-toolbar-mt' )
		.prepend( this.$title )
		.append( this.setAsDefault.$element );

	// Hide initially, because there is no selection initially
	this.$element.toggle( false );
	// Only show this when user has changed selection
	this.setAsDefault.toggle( false );
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
		ve.ui[ toolClassName ].static.autoAddToCatchall = false;
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

			// Fall back to defaultProvider (should only happen for drafts stored with
			// older version of CX.
			// TODO: How to handle case that stored provider is no longer valid?
			source = section.getOriginalContentSource() || defaultProvider;
			this.setActive( this.getName() === source );
			// Hits localstorage, so caching might be needed if this gets too expensive.
			ve.init.target.config.MTManager.getPreferredProvider().then( function ( preferredProvider ) {
				this.toolbar.setAsDefault.toggle( source !== preferredProvider );
			}.bind( this ) );
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
	this.setAsDefault.toggle( !disabled );
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

/**
 * Save the currently selected provider as the preferred provider for new sections.
 */
ve.ui.CXTranslationToolbar.prototype.onSetAsDefault = function () {
	// Take the name of the first active tool. In most cases there is one, in exceptional
	// cases 0 (see onUpdateState above) and there should never be multiple.
	var provider = this.toolGroup.getItems().reduce( function ( acc, tool ) {
		return acc || ( tool.isActive() ? tool.getName() : false );
	}, false );

	if ( provider ) {
		this.MTManager.setPreferredProvider( provider );
	}
	this.setAsDefault.toggle( false );
};
