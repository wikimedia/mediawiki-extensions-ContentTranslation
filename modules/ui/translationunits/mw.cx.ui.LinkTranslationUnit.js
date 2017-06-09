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
			removelink: 'removeLink',
			makeRedLink: 'makeRedLink'
		}
	},
	newlink: {
		triggers: [ 'click', 'focus' ],
		events: {
			changeLinkTarget: 'changeLinkTarget'
		}
	}
};

mw.cx.ui.LinkTranslationUnit.prototype.adapt = function () {
	// Adapt in general will be asynchronous operation
	this.model.adapt().then( function () {
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
	// Restore the cursor. This was saved with this label when selection was made.
	// See mw.cx.tools.TargetLinkTool.prototype.onSelect method
	mw.cx.selection.restore( 'translation' );
	this.emit( 'change' );
};

mw.cx.ui.LinkTranslationUnit.prototype.makeRedLink = function () {
	this.model.makeRedLink();
	this.$translationSection.removeClass( 'cx-target-link-unadapted' ).addClass( 'new' );
	this.parentTranslationUnit.focus();
	// Restore the cursor
	mw.cx.selection.restore( 'translation' );
	this.emit( 'change' );
};

mw.cx.ui.LinkTranslationUnit.prototype.changeLinkTarget = function ( newTarget ) {
	if ( !newTarget || !newTarget.trim() ) {
		mw.log.error( '[CX] Attempting to change the link target to blank ' + this );
		return;
	}
	this.model.changeLinkTarget( newTarget );
	if ( this.model.getTargetTitle() === newTarget ) {
		mw.log( '[CX] Target link target changed successfully. ' + this );
	} else {
		mw.log.error( '[CX] Target link target change failed. ' + this );
	}
	this.parentTranslationUnit.focus();
	// Restore the cursor
	mw.cx.selection.restore( 'translation' );
	this.emit( 'change' );
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.LinkTranslationUnit );
