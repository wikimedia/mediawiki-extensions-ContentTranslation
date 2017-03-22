'use strict';

/**
 * Section translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.ui.TranslationView} view
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.SectionTranslationUnit = function SectionTranslationUnit( model, view, toolFactory, config ) {
	mw.cx.ui.SectionTranslationUnit.parent.call( this, model, view, toolFactory, config );
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );

	this.connect( this, {
		click: 'translate'
	} );

	// Properties
	this.translated = !!this.model.translationDocument;
};

/* Setup */
OO.inheritClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.TranslationUnit );
OO.mixinClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.SectionTranslationUnit.static.name = 'section';

mw.cx.ui.SectionTranslationUnit.static.matchTagNames = [ 'section' ];
mw.cx.ui.SectionTranslationUnit.static.highlightClass = 'cx-highlight';
mw.cx.ui.SectionTranslationUnit.static.tools = {
	search: [ 'click' ],
	formatter: [ 'select' ],
	machinetranslation: [ 'click' ],
	dictionary: [ 'select' ]
};

mw.cx.ui.SectionTranslationUnit.prototype.render = function () {
	// XXX: The model is not yet ready when the constructor is called
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
	if ( model.sourceDocument.tagName === 'SECTION' ) {
		// If the sourceDocument is <section> dont wrap it.
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
	if ( model.translationDocument ) {
		return $( '<section>' ).html( model.translationDocument );
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
 * Translate the section.
 * Either copy the source or use an MT tool to apply the initial translation
 */
mw.cx.ui.SectionTranslationUnit.prototype.translate = function () {
	this.removeHighlight();

	if ( this.translated ) {
		return;
	}
	// Adapt in general will be asynchronous operation
	this.model.adapt();
	this.setContent( this.model.targetDocument );

	if ( this.isEditable() ) {
		this.makeEditable( true );
	}
};

mw.cx.ui.SectionTranslationUnit.prototype.setContent = function ( content ) {
	if ( !content ) {
		return;
	}
	this.removePlaceholder();
	this.$translationSection.html( content );
	this.translated = true;
	this.emit( 'change' );
	this.emit( 'translationStarted' );
};

mw.cx.ui.SectionTranslationUnit.prototype.removePlaceholder = function () {
	this.$translationSection.removeClass( 'cx-placeholder' );
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseOver = function () {
	if ( !this.translated ) {
		this.highlight();
	}
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseLeave = function () {
	if ( !this.translated ) {
		this.removeHighlight();
	}
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onChange = function () {
	this.view.emit( 'change' );
	this.translationUnits = this.buildSubTranslationUnits( this.model );
};

/**
 * Build sub translation units.
 * We might require to add and remove translation units as they get added or removed.
 * For example, links can get added to section and the corresponding translation unit
 * should reflect here.
 *
 * @param {mw.cx.dm.TranslationUnit} model
 * @return {mw.cx.dm.TranslationUnit[]} Array of sub translation units
 */
mw.cx.ui.SectionTranslationUnit.prototype.buildSubTranslationUnits = function ( model ) {
	var submodels, name, translationUnits = [], translationUnit, i;

	submodels = model.getTranslationUnits();

	if ( !submodels ) {
		return translationUnits;
	}

	// XXX have a way to avoid creating translation units for unchanged units
	for ( i = 0; i < submodels.length; i++ ) {
		name = submodels[ i ].constructor.static.name;

		translationUnit = mw.cx.ui.translationUnitFactory.create(
			name,
			submodels[ i ],
			this.view,
			this.toolFactory,
			this.config
		);
		translationUnit.setParentTranslationUnit( this );
		this.emit( 'subunit', translationUnit );
		translationUnits.push( translationUnit );
	}

	return translationUnits;
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.SectionTranslationUnit );
