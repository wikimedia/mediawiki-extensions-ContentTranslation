'use strict';

/**
 * Link translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.LinkTranslationUnit = function MwCxUiLinkTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.LinkTranslationUnit.super.call( this, model, toolFactory, config );

	// Properties
	this.adaptReq = null;
};

/* Setup */
OO.inheritClass( mw.cx.ui.LinkTranslationUnit, mw.cx.ui.TranslationUnit );

mw.cx.ui.LinkTranslationUnit.static.name = 'link';
mw.cx.ui.LinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.ui.LinkTranslationUnit.static.matchRdfaTypes = [ 'mw:WikiLink' ];
mw.cx.ui.LinkTranslationUnit.static.highlightClass = 'cx-highlight--lightblue';
mw.cx.ui.LinkTranslationUnit.static.tools = {
	sourcelink: [ 'click', 'focus' ],
	targetlink: {
		triggers: [ 'click', 'focus' ],
		events: {
			removelink: 'removeLink'
		}
	},
	newlink: [ 'click', 'focus' ]
};

mw.cx.ui.LinkTranslationUnit.prototype.adapt = function () {
	if ( this.adaptReq ) {
		return this.adaptReq;
	}
	// Adapt in general will be asynchronous operation
	this.adaptReq = this.model.adapt().then( function () {
		this.setContent( this.model.targetDocument );
		if ( this.model.targetTitleMissing ) {
			mw.log( '[CX] Target title missing for ' + this );
			this.markUnAdapted();
		} else {
			this.adapted = true;
		}
	}.bind( this ) ).always( function () {
		// Re attach event handlers
		this.listen();
		this.emit( 'change' );
	}.bind( this ) );

	if ( !this.model.sourceDocument ) {
		// Remove the tool for source link. Index 0 is used, which corresponds
		// to sourcelink. But this looks fragile.
		this.tools[ 0 ].destroy();
		this.tools.splice( 0, 1 );
	}
};

mw.cx.ui.LinkTranslationUnit.prototype.markUnAdapted = function () {
	// All these unadapted links will be converted to plain text while publishing
	this.$translationSection.addClass( 'cx-target-link-unadapted' );
};

mw.cx.ui.LinkTranslationUnit.prototype.setContent = function ( content ) {
	var attributes, self = this;

	this.$translationSection.html( content.text );
	attributes = $( content ).prop( 'attributes' );
	// loop through attributes and apply them.
	$.each( attributes, function () {
		self.$translationSection.attr( this.name, this.value );
	} );
	this.$translationSection.prop( 'id', $( content ).prop( 'id' ) );
	// Refresh reference
	this.$translationSection = this.getTranslationSection();
	this.translated = true;
};

/**
 * Content change handler
 */
mw.cx.ui.LinkTranslationUnit.prototype.onChange = function () {
	// There is nothing to do on change, but inform the parent about change.
	if ( this.parentTranslationUnit ) {
		this.parentTranslationUnit.emit( 'change' );
	}
};

mw.cx.ui.LinkTranslationUnit.prototype.removeLink = function () {
	// Save the selection
	mw.cx.selection.save( 'translation' );
	this.model.removeLink();

	if ( this.model.getTargetDocument() === null ) {
		mw.log( '[CX] Target link removed successfully. ' + this );
	} else {
		mw.log.error( '[CX] Error while removing target link. ' + this );
		return;
	}
	// Destroy all tools
	this.tools.forEach( function ( tool ) { tool.destroy(); } );
	this.parentTranslationUnit.focus();
	// Restore the cursor
	mw.cx.selection.restore( 'translation' );
	this.emit( 'change' );
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.LinkTranslationUnit );
