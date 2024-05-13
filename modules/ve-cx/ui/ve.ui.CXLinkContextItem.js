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

	this.inTargetSurface = this.context.surface === ve.init.target.targetSurface;
	this.thisLinkCache = this.inTargetSurface ? ve.init.platform.linkCache : ve.init.platform.sourceLinkCache;
	this.otherLinkCache = this.inTargetSurface ? ve.init.platform.sourceLinkCache : ve.init.platform.linkCache;
	this.requestManager = ve.init.target.requestManager;
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkContextItem, ve.ui.MWInternalLinkContextItem );
OO.mixinClass( ve.ui.CXLinkContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXLinkContextItem.static.name = 'cxLink';

ve.ui.CXLinkContextItem.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

/* Static Methods */

ve.ui.CXLinkContextItem.static.generateSourceBody = function ( linkInfo, language ) {
	const $wrapper = $( '<div>' );

	const $linkTitle = $( '<a>' )
		.addClass( 've-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.description || linkInfo.title,
			href: ve.init.target.config.siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title )
		} );
	const $languageLabel = $( '<span>' )
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
	const $wrapper = $( '<div>' ),
		$linkTitle = $( '<a>' ),
		siteMapper = ve.init.target.siteMapper;

	let linkHref;
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
		.addClass( 've-ui-linkContextItem-link ve-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.title,
			href: linkHref
		} );

	const icon = new OO.ui.IconWidget( { icon: 'article' } );
	$wrapper
		.addClass( 've-ui-mwInternalLinkContextItem-withImage' )
		.addClass( 've-ui-mwInternalLinkContextItem-withDescription' )
		.append( icon.$element );

	$wrapper.append( $linkTitle );

	const description = linkInfo.description;
	if ( description ) {
		const $description = $( '<span>' )
			.addClass( 've-ui-mwInternalLinkContextItem-description' )
			.text( description );
		$wrapper.append( $description );
		// Multiline descriptions may make the context bigger (T183650)
		context.updateDimensions();
	}

	const imageUrl = OO.getProp( linkInfo, 'thumbnail', 'source' );
	if ( imageUrl ) {
		icon.$element
			.addClass( 've-ui-mwInternalLinkContextItem-hasImage mw-no-invert' )
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
	const adaptationInfo = this.model.getAttribute( 'cx' );
	// Parent method
	return ve.ui.CXLinkContextItem.super.prototype.isEditable.apply( this, arguments ) &&
		( !adaptationInfo || adaptationInfo.adapted || adaptationInfo.targetTitle );
};

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.renderBody = function () {
	let adaptationInfo = this.model.getAttribute( 'cx' );

	// Case 1: Server-side adapted blue or red link in the target column. Information
	// is present on the link attributes, so additional requests or caching are not needed.
	if ( adaptationInfo && !adaptationInfo.userAdded ) {
		this.$body.empty().append( this.generateBody( adaptationInfo ) );
		return;
	}

	// Case 2: Cached hit on a manually added link or a link in the source column.
	const store = this.model.getStore();
	const normalizedTitle = this.model.getAttribute( 'normalizedTitle' );
	adaptationInfo = store.value( store.hashOfValue( null, OO.getHash( normalizedTitle ) ) );
	if ( adaptationInfo ) {
		this.$body.empty().append( this.generateBody( adaptationInfo ) );
		return;
	}

	// ve.ui.LinearContextItem#setup assumes renderBody is synchronous, so add
	// some content so it isn't thought to be empty.
	// TODO: This could be a loading message.
	this.$body.append( $( '<span>' ) );

	// Case 3: First click on a link in the source column, or a first click on
	// a link in the target column added manually by the translator. This will
	// cache the results so that case 2 is hit on subsequent hits.
	this.getLinkInfo().then( function ( linkAdaptationInfo ) {
		this.$body.empty().append( this.generateBody( linkAdaptationInfo ) );
	}.bind( this ) );
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
	const thisTitle = this.model.getAttribute( 'normalizedTitle' ),
		thisLanguage = this.inTargetSurface ? this.translation.getTargetLanguage() : this.translation.getSourceLanguage(),
		otherLanguage = this.inTargetSurface ? this.translation.getSourceLanguage() : this.translation.getTargetLanguage(),
		thisTitleKey = this.inTargetSurface ? 'targetTitle' : 'sourceTitle',
		otherTitleKey = this.inTargetSurface ? 'sourceTitle' : 'targetTitle',
		adaptationInfo = {};

	const thisTitlePromise = this.thisLinkCache.get( thisTitle ).then( function ( thisLinkData ) {
		adaptationInfo[ thisTitleKey ] = {
			title: thisTitle,
			pagelanguage: thisLanguage,
			description: thisLinkData.description,
			thumbnail: { source: thisLinkData.imageUrl }
		};
	} );

	const otherTitlePromise = this.requestManager.getTitlePair( thisLanguage, thisTitle ).then( function ( titlePairInfo ) {
		const otherTitle = titlePairInfo.targetTitle;

		adaptationInfo.adapted = true;

		if ( titlePairInfo.missing ) {
			return;
		}

		return this.otherLinkCache.get( otherTitle ).then( function ( otherLinkData ) {
			adaptationInfo[ otherTitleKey ] = {
				title: otherTitle,
				pagelanguage: otherLanguage,
				description: otherLinkData.description,
				thumbnail: { source: otherLinkData.imageUrl }
			};
		} );
	}.bind( this ) );

	return $.when( thisTitlePromise, otherTitlePromise ).then( function () {
		this.model.getStore().hash( adaptationInfo, OO.getHash( thisTitle ) );

		return adaptationInfo;
	}.bind( this ) );
};

ve.ui.CXLinkContextItem.prototype.generateBody = function ( adaptationInfo ) {
	let $sourceLink;
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
	let $targetLinkCard;
	if ( adaptationInfo.targetTitle ) {
		$targetLinkCard = ve.ui.CXLinkContextItem.static.generateBody(
			adaptationInfo.targetTitle, this.context
		);
	} else {
		this.setLabel( mw.msg( 'cx-linkcontextitem-missing-link-title' ) );
		// TODO: Support mark-as-missing button on source surface.
		if ( this.inTargetSurface ) {
			const markAsMissingButton = new OO.ui.ButtonWidget( {
				label: mw.msg( 'cx-tools-missing-link-mark-link' ),
				classes: [ 've-ui-cxLinkContextItem-mark-missing-button' ],
				flags: [ 'progressive' ]
			} );
			const $markAsMissingInfo = $( '<div>' )
				.addClass( 've-ui-cxLinkContextItem-mark-missing-text' )
				.text( mw.msg( 'cx-tools-missing-link-text' ) );
			$targetLinkCard = $( '<div>' )
				.addClass( 've-ui-cxLinkContextItem-mark-missing' )
				.append( $markAsMissingInfo, markAsMissingButton.$element );

			markAsMissingButton.on( 'click', this.createRedLink.bind( this, adaptationInfo ) );
		}
	}

	return $targetLinkCard;
};

/**
 * Change the grey link to red link.
 *
 * @param {Object} adaptationInfo
 */
ve.ui.CXLinkContextItem.prototype.createRedLink = function ( adaptationInfo ) {
	const targetLanguage = this.translation.getTargetLanguage(),
		sourceLanguage = this.translation.getSourceLanguage();

	// Handle a red link for which we have no idea what is the target page, as determined by
	// cxserver. Per T224408, open the link target selection widget to let the user confirm
	// the right target.
	if ( adaptationInfo.targetFrom === 'source' ) {
		this.context.getSurface().commandRegistry.registry.link.execute(
			this.context.getSurface()
		);
		return;
	}

	// See ve.ui.AnnotationContextItem#applyToAnnotations
	this.applyToAnnotations( function ( fragment, annotation ) {
		// Clear the annotation from fragment
		fragment.annotateContent( 'clear', annotation );

		// Clone the old element data to avoid modifying the old state (T202440)
		const newElement = ve.copy( annotation.element );
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
