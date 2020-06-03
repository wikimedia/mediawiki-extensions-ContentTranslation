/**
 * Context item for a CX Text Selections in translation.
 *
 * @class
 * @extends ve.ui.LinearContextItem
 * @mixins ve.ui.CXTranslationUnitContextItem
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXTextSelectionContextItem = function VeUiCXTextSelectionContextItem() {
	// Parent constructor
	ve.ui.CXTextSelectionContextItem.super.apply( this, arguments );
	// Mixin constructor
	ve.ui.CXTranslationUnitContextItem.apply( this, arguments );
	// Initialization
	this.$element.addClass( 've-ui-CXTextSelectionContextItem' );
	this.$body.addClass( 've-ui-cxLinkContextItem-targetBody' );
	this.$sourceBody = $( '<div>' )
		.addClass( 've-ui-linearContextItem-body ve-ui-cxLinkContextItem-sourceBody' )
		.insertAfter( this.$body );
	this.editButton.setLabel( OO.ui.deferMsg( 'cx-tools-link-add' ) );
	this.editButton.setIcon( 'add' );

	this.normalizedTitle = null;
	this.sourceLinkCache = ve.init.platform.sourceLinkCache;
	this.targetLinkCache = ve.init.platform.linkCache;
	this.requestManager = ve.init.target.requestManager;

	this.surfaceModel = this.context.getSurface().getModel();

	// Events
	this.surfaceModel.connect( this, { select: 'onSurfaceModelSelect' } );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXTextSelectionContextItem, ve.ui.LinearContextItem );
OO.mixinClass( ve.ui.CXTextSelectionContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXTextSelectionContextItem.static.name = 'cxtextselection';

ve.ui.CXTextSelectionContextItem.static.icon = 'link';

ve.ui.CXTextSelectionContextItem.static.commandName = 'linkToggle';

ve.ui.CXTextSelectionContextItem.static.label = OO.ui.deferMsg( 'cx-tools-link-title' );

ve.ui.CXTextSelectionContextItem.static.deletable = false;

ve.ui.CXTextSelectionContextItem.static.editable = true;

// This context will match to any model, so make sure it doesn't
// exclude a context that is designed specifically for this model (T217081)
ve.ui.CXTextSelectionContextItem.static.exclusive = false;

/* Static Methods */

ve.ui.CXTextSelectionContextItem.static.isCompatibleWith = function ( model ) {
	return model.isEditable();
};

ve.ui.CXTextSelectionContextItem.static.generateBody = ve.ui.CXLinkContextItem.static.generateBody;
ve.ui.CXTextSelectionContextItem.static.generateSourceBody = ve.ui.CXLinkContextItem.static.generateSourceBody;

ve.ui.CXTextSelectionContextItem.static.getAnnotationAttributes = function ( normalizedTitle ) {
	var title = mw.Title.newFromText( normalizedTitle ),
		annotation = ve.dm.CXLinkAnnotation.static.newFromTitle( title );

	return annotation.element;
};

/* Methods */

/**
 * Render the body.
 *
 * @param {Object} targetTitleData
 */
ve.ui.CXTextSelectionContextItem.prototype.renderBody = function ( targetTitleData ) {
	var targetLinkInfo, $targetLink,
		sourceLanguage = this.translation.sourceDoc.getLang(),
		targetLanguage = this.translation.targetDoc.getLang();

	targetLinkInfo = {
		title: this.normalizedTitle,
		pagelanguage: targetLanguage,
		description: targetTitleData.description,
		thumbnail: { source: targetTitleData.imageUrl }
	};

	$targetLink = this.constructor.static.generateBody( targetLinkInfo, this.context );
	this.$body.append( $targetLink );

	// Find source title for the selected text.
	this.requestManager.getTitlePair( targetLanguage, this.normalizedTitle )
		.then( function ( titlePairInfo ) {
			var sourceTitle = titlePairInfo.targetTitle;
			if ( sourceTitle ) {
				// Render the source title card for this title.
				this.renderSourceTitle( sourceTitle, sourceLanguage );
			}
		}.bind( this ) );
};

ve.ui.CXTextSelectionContextItem.prototype.renderSourceTitle = function ( sourceTitle, sourceLanguage ) {
	this.sourceLinkCache.get( sourceTitle ).then( function ( linkData ) {
		var sourceLinkInfo, $sourceLink;

		if ( linkData.missing ) {
			// Source title data missing.
			// This is almost impossible since we already found that the source title exist.
			return;
		}

		sourceLinkInfo = {
			title: sourceTitle,
			pagelanguage: sourceLanguage,
			description: linkData.description
		};

		// Source link
		$sourceLink = this.constructor.static.generateSourceBody(
			sourceLinkInfo, sourceLanguage
		);
		this.$sourceBody.show().empty().append( $sourceLink );
	}.bind( this ) );
};

/**
 * @inheritdoc
 */
ve.ui.CXTextSelectionContextItem.prototype.setup = function () {
	var fragment = this.getFragment(),
		text = fragment.getText().trim();

	if (
		text.length === 0 ||
		text.length > 30 ||
		this.hasLink() ||
		this.context.getSurface().isReadOnly()
	) {
		this.$element.remove();
		return;
	}

	// To avoid flashing of empty card, let us hide the card till we get the link information.
	this.toggle( false );
	this.$sourceBody.hide();
	this.normalizedTitle = ve.init.mw.ApiResponseCache.static.normalizeTitle( text );
	// Try to find the selected text as a title in target wiki
	this.targetLinkCache.get( this.normalizedTitle ).then( function ( linkData ) {
		if ( linkData.missing ) {
			// Title does not exist in target language for the selected text. Do not show the card
			this.$element.remove();
			return;
		}
		this.toggle( true );
		this.renderBody( linkData );
	}.bind( this ) );
	return this;
};

/**
 * @return {boolean} True if selected text contains a link.
 */
ve.ui.CXTextSelectionContextItem.prototype.hasLink = function () {
	return this.context.getRelatedSources().some( function ( element ) {
		return element.model instanceof ve.dm.LinkAnnotation;
	} );
};

ve.ui.CXTextSelectionContextItem.prototype.onSurfaceModelSelect = function ( selection ) {
	if ( !( selection instanceof ve.dm.LinearSelection ) || selection.isCollapsed() ) {
		return;
	}

	this.context.onContextChange();
};

/**
 * @inheritdoc
 */
ve.ui.CXTextSelectionContextItem.prototype.teardown = function () {
	ve.ui.CXTextSelectionContextItem.parent.prototype.teardown.apply( this, arguments );

	// Disconnect all event listeners
	this.surfaceModel.disconnect( this );
};

/**
 * @inheritdoc
 */
ve.ui.CXTextSelectionContextItem.prototype.onEditButtonClick = function () {
	var command = this.getCommand(),
		// We need annotation attributes while annotating links,
		// so that creation of href does not break.
		attributes = ve.ui.CXTextSelectionContextItem.static.getAnnotationAttributes( this.normalizedTitle );

	if ( command ) {
		command.execute( this.context.getSurface(), [ 'cxLink', attributes ] );
		this.emit( 'command' );
		// FIXME: This avoids "Add link" card to stick after actually adding link
		this.context.getSurface().getModel().setNullSelection();
	}
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXTextSelectionContextItem );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'linkToggle', 'annotation', 'toggle',
		{ supportedSelections: [ 'linear' ] }
	)
);
