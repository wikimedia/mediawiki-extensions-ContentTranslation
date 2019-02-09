/**
 * Context item for CXLinkAnnotation
 *
 * @class
 * @extends ve.ui.MWInternalLinkContextItem
 * @constructor
 */
ve.ui.CXLinkContextItem = function VeUiCXLinkContextItem() {
	// Parent constructor
	ve.ui.CXLinkContextItem.super.apply( this, arguments );
	// Mixin constructor
	ve.ui.CXTranslationUnitContextItem.apply( this, arguments );
	this.$sourceBody = $( '<div>' )
		.addClass( 've-ui-linearContextItem-body ve-ui-cxLinkContextItem-sourceBody' )
		.insertAfter( this.$body );
	this.$body.addClass( 've-ui-cxLinkContextItem-targetBody' );
	this.$element.addClass( 've-ui-cxLinkContextItem' );
	// Do not show the delete button in red color
	this.clearButton.clearFlags();

	this.targetLinkCache = ve.init.platform.linkCache;
	this.requestManager = ve.init.target.requestManager;
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkContextItem, ve.ui.MWInternalLinkContextItem );
OO.mixinClass( ve.ui.CXLinkContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXLinkContextItem.static.name = 'cxLink';

ve.ui.CXLinkContextItem.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

ve.ui.CXLinkContextItem.static.clearIcon = 'trash';

/* Static Methods */

ve.ui.CXLinkContextItem.static.generateSourceBody = function ( linkInfo, language ) {
	var $wrapper, $linkTitle, $languageLabel;

	$wrapper = $( '<div>' );

	$linkTitle = $( '<a>' )
		.addClass( 've-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.description || linkInfo.title,
			href: ve.init.target.config.siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title )
		} );
	$languageLabel = $( '<span>' )
		.addClass( 've-ui-cxLinkContextItem-language' )
		.text( ve.init.platform.getLanguageAutonym( language ) );
	$wrapper.append( $linkTitle, $languageLabel );
	return $wrapper;
};

/**
 * Generate the body of the link context item
 *
 * @param {Object} linkInfo The object with title meta data originally served by
 *   cxserver, but later extra properties added to help the rendering.
 * @param {ve.ui.Context} context Context (for resizing)
 * @return {jQuery} The jQuery object of the link context item
 */
ve.ui.CXLinkContextItem.static.generateBody = function ( linkInfo, context ) {
	var icon, description, $description, imageUrl, linkHref,
		$wrapper = $( '<div>' ),
		$linkTitle = $( '<a>' ),
		siteMapper = ve.init.target.siteMapper;

	if ( linkInfo.missing ) {
		// Link to start a new translation
		linkHref = siteMapper.getCXUrl(
			linkInfo.title, // Source title
			linkInfo.title, // Target title
			linkInfo.sourceLanguage,
			linkInfo.pagelanguage
		);
		$linkTitle.addClass( 'new' );
	} else {
		linkHref = siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title );
	}

	$linkTitle
		.addClass( 've-ui-mwInternalLinkContextItem-link ve-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.title,
			href: linkHref
		} );

	icon = new OO.ui.IconWidget( {
		icon: 'page-existing',
		classes: [ 'cx-tools-link-image' ]
	} );

	icon = new OO.ui.IconWidget( { icon: 'page-existing' } );
	$wrapper
		.addClass( 've-ui-mwInternalLinkContextItem-withImage' )
		.addClass( 've-ui-mwInternalLinkContextItem-withDescription' )
		.append( icon.$element );

	$wrapper.append( $linkTitle );

	description = linkInfo.description;
	if ( description ) {
		$description = $( '<span>' )
			.addClass( 've-ui-mwInternalLinkContextItem-description' )
			.text( description );
		$wrapper.append( $description );
		// Multiline descriptions may make the context bigger (T183650)
		context.updateDimensions();
	}

	imageUrl = OO.getProp( linkInfo, 'thumbnail', 'source' );
	if ( imageUrl ) {
		icon.$element
			.addClass( 've-ui-mwInternalLinkContextItem-hasImage' )
			.css( 'background-image', 'url(' + imageUrl + ')' );
	}

	return $wrapper;
};

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.isEditable = function () {
	// adaptationInfo will be empty in source surface
	var adaptationInfo = this.model.getAttribute( 'cx' );
	// Parent method
	return ve.ui.CXLinkContextItem.super.prototype.isEditable.apply( this, arguments ) &&
		( !adaptationInfo || adaptationInfo.adapted || adaptationInfo.targetTitle );
};

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.renderBody = function () {
	var normalizedTitle, store,
		adaptationInfo = this.model.getAttribute( 'cx' );

	// adaptationInfo will be empty in source surface
	if ( adaptationInfo && !adaptationInfo.userAdded ) {
		return this.generateBody( adaptationInfo );
	}

	store = this.model.getStore();
	normalizedTitle = this.model.getAttribute( 'normalizedTitle' );
	adaptationInfo = store.value( store.hashOfValue( null, OO.getHash( normalizedTitle ) ) );

	if ( adaptationInfo ) {
		return this.generateBody( adaptationInfo );
	}

	this.getLinkInfo().then( this.generateBody.bind( this ) );
};

/**
 * Get info about user-added links. Once fetched, link info is stored
 * inside the model, so this method should execute once per user-added link.
 *
 * See renderBody method on this object, to see how future creation of
 * link context item body uses the info stored as attribute of the model.
 *
 * @return {jQuery.Promise}
 */
ve.ui.CXLinkContextItem.prototype.getLinkInfo = function () {
	var normalizedTitle = this.model.getAttribute( 'normalizedTitle' ),
		sourceLanguage = this.translation.getSourceLanguage(),
		targetLanguage = this.translation.getTargetLanguage(),
		adaptationInfo = {
			targetTitle: {
				title: normalizedTitle,
				pagelanguage: targetLanguage
			}
		};

	return this.targetLinkCache.get( normalizedTitle ).then( function ( linkData ) {
		adaptationInfo.targetTitle.description = linkData.description;
		adaptationInfo.targetTitle.thumbnail = { source: linkData.imageUrl };

		return this.requestManager.getTitlePair( targetLanguage, normalizedTitle )
			.then( function ( titlePairInfo ) {
				var sourceTitle = titlePairInfo.targetTitle;

				adaptationInfo.adapted = true;

				if ( titlePairInfo.missing ) {
					return;
				}

				adaptationInfo.sourceTitle = {
					title: sourceTitle,
					pagelanguage: sourceLanguage
				};
			} ).then( function () {
				var store = this.model.getStore(),
					normalizedTitle = this.model.getAttribute( 'normalizedTitle' );
				store.hash( adaptationInfo, OO.getHash( normalizedTitle ) );

				return adaptationInfo;
			}.bind( this ) );
	}.bind( this ) );
};

ve.ui.CXLinkContextItem.prototype.generateBody = function ( adaptationInfo ) {
	var $sourceLink, $targetLinkCard, markAsMissingButton, markAsMissingInfo;

	if ( adaptationInfo.sourceTitle ) {
		// Source link
		$sourceLink = ve.ui.CXLinkContextItem.static.generateSourceBody(
			adaptationInfo.sourceTitle,
			this.translation.getSourceLanguage()
		);
		this.$sourceBody.empty().append( $sourceLink );
	}

	if ( !adaptationInfo.adapted && adaptationInfo.targetTitle ) {
		this.setLabel( mw.msg( 'cx-linkcontextitem-missing-link-title' ) );
	}

	// Target link
	if ( adaptationInfo.adapted || adaptationInfo.targetTitle ) {
		$targetLinkCard = ve.ui.CXLinkContextItem.static.generateBody(
			adaptationInfo.targetTitle, this.context
		);
	} else {
		this.setLabel( mw.msg( 'cx-linkcontextitem-missing-link-title' ) );
		markAsMissingButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-missing-link-mark-link' ),
			classes: [ 've-ui-cxLinkContextItem-mark-missing-button' ],
			flags: [ 'progressive' ]
		} );
		markAsMissingInfo = $( '<div>' )
			.addClass( 've-ui-cxLinkContextItem-mark-missing-text' )
			.text( mw.msg( 'cx-tools-missing-link-text' ) );
		$targetLinkCard = $( '<div>' )
			.addClass( 've-ui-cxLinkContextItem-mark-missing' )
			.append( markAsMissingInfo, markAsMissingButton.$element );

		markAsMissingButton.on( 'click', this.createRedLink.bind( this ) );
	}

	this.$body.empty().append( $targetLinkCard );
};

/**
 * Change the grey link to red link.
 */
ve.ui.CXLinkContextItem.prototype.createRedLink = function () {
	var targetLanguage = this.translation.getTargetLanguage(),
		sourceLanguage = this.translation.getSourceLanguage();

	// See ve.ui.AnnotationContextItem#applyToAnnotations
	this.applyToAnnotations( function ( fragment, annotation ) {
		var newElement;
		// Clear the annotation from fragment
		fragment.annotateContent( 'clear', annotation );

		// Clone the old element data to avoid modifying the old state (T202440)
		newElement = ve.copy( annotation.element );
		// Update the adaptation info.
		newElement.attributes.cx.targetTitle = {
			title: newElement.attributes.cx.sourceTitle.title,
			pagelanguage: targetLanguage,
			sourceLanguage: sourceLanguage, // Required to provide CX link
			missing: true,
			description: mw.msg( 'cx-linkcontextitem-missing-title-description' )
		};

		// Set the updated annotation to the fragment
		fragment.annotateContent( 'set', ve.dm.annotationFactory.createFromElement( newElement ) );
	} );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXLinkContextItem );
