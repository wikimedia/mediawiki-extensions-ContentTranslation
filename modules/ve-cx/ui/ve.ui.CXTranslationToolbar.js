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
};

OO.inheritClass( ve.ui.CXTranslationToolbar, ve.ui.PositionedTargetToolbar );

ve.ui.CXTranslationToolbar.static.registerTools = function () {
	return ve.init.target.config.MTManager.getDefaultProvider().then( function ( defaultProvider ) {
		return ve.init.target.config.MTManager.getAvailableProviders().then( function ( providers ) {
			var i, toolClassName;

			for ( i = 0; i < providers.length; i++ ) {
				toolClassName = providers[ i ] + 'MTTool';
				ve.ui[ toolClassName ] = function VeCXMTTool() {
					ve.ui.Tool.apply( this, arguments );
					this.setActive( defaultProvider === this.constructor.static.name );
				};

				OO.inheritClass( ve.ui[ toolClassName ], ve.ui.Tool );
				ve.ui[ toolClassName ].static.name = providers[ i ];
				ve.ui[ toolClassName ].static.group = 'mt';
				ve.ui[ toolClassName ].static.title =
					ve.init.target.config.MTManager.getProviderLabel( providers[ i ] );
				ve.ui[ toolClassName ].static.commandName = providers[ i ].toLowerCase();

				ve.ui[ toolClassName ].prototype.onSelect = function () {
					var name;
					// Parent method
					ve.ui.Tool.prototype.onSelect.apply( this, arguments );
					// Set all tools inactive
					for ( name in this.toolbar.tools ) {
						this.toolbar.tools[ name ].setActive( false );
					}
					// ... and then set this tool active.
					this.toolbar.tools[ this.constructor.static.name ].setActive( true );
				};

				ve.ui[ toolClassName ].prototype.onUpdateState = function () {
					var section,
						selection = this.toolbar.getSurface().getModel().getSelection();

					// Parent method
					ve.ui.Tool.prototype.onUpdateState.apply( this, arguments );
					if ( selection instanceof ve.dm.LinearSelection ) {
						section = ve.init.target.getParentSectionForSelection( this.toolbar.getSurface(), selection );
						if ( section ) {
							mw.log( '[CX] In section ' + section.getAttribute( 'cxid' ) );
							// TODO: Show the current mt engine for this section as selected item in
							// the toolbar
						}
					}
				};

				ve.ui.toolFactory.register( ve.ui[ toolClassName ] );

				ve.ui.commandRegistry.register(
					new ve.ui.Command(
						providers[ i ].toLowerCase(), 'translation', 'translate',
						{ args: [ providers[ i ] ], supportedSelections: [ 'linear' ] }
					)
				);
			}
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
