'use strict';

/**
 * Section translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.SectionTranslationUnit = function MwCxUiSectionTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.SectionTranslationUnit.super.call( this, model, toolFactory, config );
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
	// Click handler to translate need to execute only once.
	this.once( 'click', this.translate.bind( this ) );

	model.on( 'adapt', this.onModelAdapted.bind( this ) );
};

/* Setup */
OO.inheritClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.TranslationUnit );
OO.mixinClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.SectionTranslationUnit.static.name = 'section';

mw.cx.ui.SectionTranslationUnit.static.matchTagNames = [ 'section' ];
mw.cx.ui.SectionTranslationUnit.static.highlightClass = 'cx-highlight';
mw.cx.ui.SectionTranslationUnit.static.tools = {
	search: [ 'click' ],
	formatter: [ 'select', 'click', 'focus' ],
	machinetranslation: [ 'click' ],
	dictionary: [ 'select' ],
	targetlink: {
		triggers: [ 'select' ],
		events: {
			addlink: 'addLink'
		}
	},
	newlink: {
		triggers: [ 'select' ],
		events: {
			addlink: 'addLink'
		}
	}
};

/**
 *  @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.init = function () {
	this.$sourceSection = this.createSourceSection( this.model );
	this.$translationSection = this.createTranslationSection( this.model );

	this.listen();
};

/**
 * @private
 * @param {mw.cx.dm.TranslationUnit} model
 * @return {jQuery}
 */
mw.cx.ui.SectionTranslationUnit.prototype.createSourceSection = function ( model ) {
	if ( model.sourceDocument.tagName === 'SECTION' || model.getParentTranslationUnit() !== null ) {
		// If the sourceDocument is <section> or a sub translation unit, dont wrap it with <section> tag.
		return $( model.sourceDocument );
	} else {
		// Wrap with <section> tag
		return $( '<section>' ).html( model.sourceDocument );
	}
};

/**
 * @private
 * @param {mw.cx.dm.TranslationUnit} model
 * @return {jQuery}
 */
mw.cx.ui.SectionTranslationUnit.prototype.createTranslationSection = function ( model ) {
	if ( model.targetDocument ) {
		return $( '<section>' ).html( model.targetDocument );
	} else {
		return this.getPlaceholderSection();
	}
};

mw.cx.ui.SectionTranslationUnit.prototype.getSourceSection = function () {
	return this.$sourceSection;
};

mw.cx.ui.SectionTranslationUnit.prototype.getTranslationSection = function () {
	return this.$translationSection;
};

/**
 * Get the placeholder
 * @return {jQuery} Placeholder section
 */
mw.cx.ui.SectionTranslationUnit.prototype.getPlaceholderSection = function () {
	return $( '<section>' )
		.addClass( 'cx-placeholder' )
		.text( mw.msg( 'cx-translation-add-translation' ) );
};

/**
 * Fill in the contents of the target section if it does not exist at all.
 */
mw.cx.ui.SectionTranslationUnit.prototype.translate = function () {
	this.removeHighlight();
	this.removePlaceholder();

	if ( !this.isTranslated() ) {
		mw.log( '[CX] Adapting to replace placeholder: ' + this, this.$sourceSection[ 0 ] );
		this.markMTLoading();
		// Adapt is usually an async operation. The model emits 'adapt' event when it is
		// ready, which is then handled in this.onModelAdapted.
		this.model.adapt();
	} else {
		// Restored section from stored translation
		this.buildSubTranslationUnits( this.model );
	}

	if ( this.isEditable() ) {
		this.makeEditable( true );
	}
};

mw.cx.ui.SectionTranslationUnit.prototype.onModelAdapted = function ( document, provider ) {
	mw.log( '[CX] Adapted section: ' + this, document, provider );
	this.setContent( document );
	this.buildSubTranslationUnits( this.model );
	this.emit( 'change' );
};

mw.cx.ui.SectionTranslationUnit.prototype.markMTLoading = function () {
	this.$translationSection.empty().append( mw.cx.widgets.spinner() );
};

/**
 * Sets the translation section html content.
 *
 * @private
 * @param {mixed} content Accepts similar values as $.fn.append().
 */
mw.cx.ui.SectionTranslationUnit.prototype.setContent = function ( content ) {
	this.$translationSection.empty().append( content );
};

mw.cx.ui.SectionTranslationUnit.prototype.removePlaceholder = function () {
	if ( this.$translationSection.hasClass( 'cx-placeholder' ) ) {
		this.$translationSection.removeClass( 'cx-placeholder' ).empty();
	}
};

mw.cx.ui.SectionTranslationUnit.prototype.isTranslated = function () {
	return !!this.model.targetDocument;
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseOver = function () {
	if ( !this.isTranslated() ) {
		this.highlight();
	}
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseLeave = function () {
	this.removeHighlight();
};

mw.cx.ui.SectionTranslationUnit.prototype.addLink = function ( selection, title ) {
	var $link;

	mw.log( '[CX] Adding Link ' + title );
	// Restore the selection
	mw.cx.selection.restore( 'translation' );
	$link = $( '<a>' )
		.addClass( 'cx-target-link' )
		.text( title )
		.attr( {
			title: title,
			href: title,
			rel: 'mw:WikiLink',
			id: 'cx' + title
		} );
	mw.cx.selection.pasteHTML( $link[ 0 ].outerHTML );
	// Set the cursor at the end of inserted link.
	mw.cx.selection.setCursorAfter( 'translation' );
	this.emit( 'change' );
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.SectionTranslationUnit );
