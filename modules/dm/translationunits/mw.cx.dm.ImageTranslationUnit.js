'use strict';
/**
 * CX Image TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.ImageTranslationUnit = function CXImageTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.ImageTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
	this.sourceResource = null;
	this.sourceImage = null;
	this.targetImage = null;
	this.targetResource = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.ImageTranslationUnit, mw.cx.dm.SectionTranslationUnit );

mw.cx.dm.ImageTranslationUnit.static.name = 'Image';
mw.cx.dm.ImageTranslationUnit.static.tags = [ 'figure' ];
mw.cx.dm.ImageTranslationUnit.static.matchRdfaTypes = [ 'mw:Image/Thumb' ];

/**
 * @inheritdoc
 */
mw.cx.dm.ImageTranslationUnit.prototype.adapt = function () {
	this.sourceImage = this.sourceDocument.getElementsByTagName( 'img' )[ 0 ];
	this.sourceResource = this.sourceImage.getAttribute( 'resource' );

	if ( !this.isCommonsImage( this.sourceImage.getAttribute( 'src' ) ) ) {
		// Create an empty paragraph
		this.targetDocument = document.createElement( 'p' );
		this.setTargetId();
		return;
	}

	this.targetDocument = this.sourceDocument.cloneNode( true );
	this.setTargetId();
	this.adaptImageAlignment( this.targetDocument );
	this.targetImage = this.targetDocument.getElementsByTagName( 'img' )[ 0 ];
	this.targetResource = this.targetImage.getAttribute( 'resource' );

	return this.requestManager.getNamespaceAlias( this.targetLanguage, 'File' )
		.then( function( namespaceAlias ) {
			this.targetResource = this.sourceResource.replace(
				/(\.\/)*(.+)(:)/g,
				'$1' + namespaceAlias + '$3'
			);
			this.targetImage.setAttribute( 'resource', this.targetResource );
		}.bind( this ) );
};

/**
 * Check if an image is coming from Commons or not. Uses the URL pattern of the common file
 * repository to determine whether the image is stored there.
 * @param {string} imageSrc
 * @return {boolean}
 */
mw.cx.dm.ImageTranslationUnit.prototype.isCommonsImage = function( imageSrc ) {
	return imageSrc.indexOf( '//upload.wikimedia.org/wikipedia/commons/' ) === 0;
};

/**
 * Adapt the image's alignment settings for the target language.
 *
 * @param {Element} targetFigure
 */
mw.cx.dm.ImageTranslationUnit.prototype.adaptImageAlignment = function ( targetFigure ) {
	if ( $.uls.data.getDir( this.sourceLanguage ) === $.uls.data.getDir( this.targetLanguage ) ) {
		// If the target language's direction is the same, there's nothing to do
		return;
	}

	// If the image has an explicit alignment class in HTML,
	// this means that it has explicit alignment defined in wiki syntax.
	// It must be explicitly flipped if the target language's direction is different.
	targetFigure.classList.toggle( 'mw-halign-left' );
	targetFigure.classList.toggle( 'mw-halign-right' );
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.ImageTranslationUnit );
