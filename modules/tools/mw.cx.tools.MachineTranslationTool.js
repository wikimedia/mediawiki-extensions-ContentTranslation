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
	// XXX: implement reset functionality

	this.mtProviderSelector = new OO.ui.DropdownWidget( {
		classes: [ 'card-mt-providers-menu' ]
	} );

	this.MTManager.getAvailableProviders().then( function ( providers ) {
		providers.forEach( function ( id ) {
			var item = new OO.ui.MenuOptionWidget( {
				data: id,
				label: this.getProviderLabel( id )
			} );
			this.mtProviderSelector.getMenu().addItems( item );

			// XXX
			// model.getActiveMTProvider()

			this.MTManager.getPreferredProvider().then( function ( provider ) {
				this.mtProviderSelector.getMenu().selectItemByData( provider );
			}.bind( this ) );
		}.bind( this ) );
	}.bind( this ) );

	return this.mtProviderSelector.$element;
};

mw.cx.tools.MachineTranslationTool.prototype.changeProvider = function() {
	// XXX
	// mode.setMTProvider( value );
	// model.update( ...new content... );
};

mw.cx.tools.MachineTranslationTool.prototype.setDefaultProvider = function () {
	var provider = this.mtProviderSelector.getMenu().getSelectedItem().getData();
	this.MTManager.setPreferredProvider( provider );
};

/* Private methods */

mw.cx.tools.MachineTranslationTool.prototype.getProviderLabel = function ( provider ) {
	var labels = {
		Yandex: mw.msg( 'cx-tools-mt-provider-title', 'Yandex.Translate' ),
		scratch: mw.msg( 'cx-tools-mt-dont-use' ),
		source: mw.msg( 'cx-tools-mt-use-source' )
	};

	return labels[ provider ] || mw.msg( 'cx-tools-mt-provider-title', provider );
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.MachineTranslationTool );
