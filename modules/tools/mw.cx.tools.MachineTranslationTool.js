/**
 * Reference tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.MachineTranslationTool = function CXMachineTranslationTool( model, config ) {
	config.title = mw.msg( 'cx-tools-mt-title' );
	config.name = 'machinetranslation';
	config.language = config.targetLanguage;
	config.order = 40;
	// Parent constructor
	mw.cx.tools.MachineTranslationTool.super.call( this, model, config );

	this.MTManager = config.MTManager;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.MachineTranslationTool, mw.cx.tools.TranslationTool );

mw.cx.tools.MachineTranslationTool.static.name = 'machinetranslation';
mw.cx.tools.MachineTranslationTool.static.defaultProvider = null;

/**
 * @inheritDoc
 */
mw.cx.tools.MachineTranslationTool.prototype.getActions = function () {
	this.keepDefault = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-mt-set-default' ),
		icon: 'check',
		framed: false,
		classes: [ 'cx-mt-set-default' ]
	} );
	this.actions = [
		this.keepDefault
	];
	this.keepDefault.connect( this, {
		click: 'setDefaultProvider'
	} );
	return this.actions;
};

mw.cx.tools.MachineTranslationTool.prototype.getContent = function () {
	var menu, model = this.model;

	this.mtProviderSelector = new OO.ui.DropdownWidget( {
		classes: [ 'card-mt-providers-menu' ]
	} );

	menu = this.mtProviderSelector.getMenu();

	this.MTManager.getAvailableProviders().then( function ( providers ) {
		var reset = new OO.ui.MenuOptionWidget( {
			data: 'reset',
			label: this.getProviderLabel( 'reset' ),
			classes: [ 'card-mt-providers-menu-reset' ]
		} );
		menu.addItems( reset );

		providers.forEach( function ( id ) {
			var item = new OO.ui.MenuOptionWidget( {
				data: id,
				label: this.getProviderLabel( id )
			} );
			menu.addItems( item );
		}.bind( this ) );

		// This also sets the listener for 'select' event
		model.getMTProvider().done( this.selectProvider.bind( this ) );
		model.on( 'adapt', this.onModelAdapted, [], this );
	}.bind( this ) );

	return this.mtProviderSelector.$element;
};

mw.cx.tools.MachineTranslationTool.prototype.setDefaultProvider = function () {
	var provider = this.mtProviderSelector.getMenu().getSelectedItem().getData();
	this.MTManager.setPreferredProvider( provider );
};

/* Private methods */

/**
 * Maps provider id to human readable label.
 * @private
 * @param {string} provider Id of the provider.
 * @return {string} Translated label
 */
mw.cx.tools.MachineTranslationTool.prototype.getProviderLabel = function ( provider ) {
	var labels = {
		Yandex: mw.msg( 'cx-tools-mt-provider-title', 'Yandex.Translate' ),
		scratch: mw.msg( 'cx-tools-mt-dont-use' ),
		source: mw.msg( 'cx-tools-mt-use-source' ),
		reset: mw.msg( 'cx-tools-mt-reset' )
	};

	return labels[ provider ] || mw.msg( 'cx-tools-mt-provider-title', provider );
};

/**
 * Callback when the user selects the 'set as default' action. This does not affect
 * current section in any way, because it already has the selected provider in user.
 * @private
 */
mw.cx.tools.MachineTranslationTool.prototype.setDefaultProvider = function () {
	var provider = this.mtProviderSelector.getMenu().getSelectedItem().getData();
	this.MTManager.setPreferredProvider( provider );
};

/**
 * Callback when the user selects a provider from the menu. To avoid recursion and
 * unnecessary updates, this function will return early until the model has signaled
 * it has finished adapting AND we have updated the selected item in the menu to match
 * what was actually the used provider (which may not be what the user requested, if
 * an MT provider fails and we fallback to something else).
 *
 * @private
 * @param {OO.ui.MenuOptionWidget} item
 */
mw.cx.tools.MachineTranslationTool.prototype.changeProvider = function ( item ) {
	this.model.adapt( item.getData() );
};

/**
 * Callback when the model has updated itself. Wraps this.selectProvider.
 *
 * @private
 * @param {Element} document Ignored
 * @param {string} provider The actually used provider
 */
mw.cx.tools.MachineTranslationTool.prototype.onModelAdapted = function ( document, provider ) {
	this.selectProvider( provider );
};

/**
 * Mark given provider as selected.
 *
 * @private
 * @param {string} provider
 */
mw.cx.tools.MachineTranslationTool.prototype.selectProvider = function ( provider ) {
	var item, selectedProvider, menu;

	menu = this.mtProviderSelector.getMenu();
	selectedProvider = menu.getSelectedItem() && menu.getSelectedItem().getData();

	// Yay, nothing to do
	if ( provider === selectedProvider ) {
		return;
	}

	// Validate and fix the given provider if required
	item = menu.getItemFromData( provider );
	if ( provider === undefined || !item ) {
		// Fallback to something that always exists
		provider = 'source';
	}

	// Hack to avoid calling changeProvider which this method is called from onModelAdapted
	menu.off( 'select', this.changeProvider, this );
	menu.once( 'select', function () {
		menu.on( 'select', this.changeProvider, [], this );
	}.bind( this ) );

	menu.selectItemByData( provider );
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.MachineTranslationTool );
