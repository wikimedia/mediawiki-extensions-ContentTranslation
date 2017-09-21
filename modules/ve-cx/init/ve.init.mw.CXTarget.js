'use strict';

/**
 * CX Target
 *
 * @class
 * @param {Object} [config] Configuration object
 * @cfg {string} sourceTitle
 * @cfg {string} sourceLanguage
 * @cfg {string} sourceRevision
 * @cfg {string} targetTitle
 * @cfg {string} targetLanguage
 */
ve.init.mw.CXTarget = function VeInitMwCXTarget( config ) {
	// Configuration initialization
	this.config = config = $.extend( {}, config, {
		continuous: true,
		expanded: false,
		scrollable: false,
		padded: false
	} );
	config.toolbarConfig = $.extend(
		{ shadow: true, actions: true, floatable: true },
		config.toolbarConfig
	);
	// Parent constructor
	ve.init.mw.CXTarget.super.call( this, config );
	this.translation = null;
	this.targetArticle = null;
	this.publishButton = null;
	this.header = new mw.cx.ui.Header( config );
	this.sourceColumn = new mw.cx.ui.SourceColumn( config );
	this.targetColumn = new mw.cx.ui.TargetColumn( config );
	this.toolsColumn = new mw.cx.ui.ToolsColumn( config );
	this.sourceSurface = null;
	this.targetSurface = null;
	this.columns = new OO.ui.HorizontalLayout( $.extend( {}, config, {
		continuous: true,
		expanded: true,
		classes: [ 'cx-widget__columns' ],
		items: [ this.sourceColumn, this.targetColumn, this.toolsColumn ]
	} ) );
	this.stackLayout = new OO.ui.StackLayout( $.extend( {}, config, {
		continuous: true,
		expanded: false,
		classes: [ 've-init-mw-cxTarget-columns' ],
		scrollable: false,
		padded: false
	} ) );
	this.stackLayout.addItems( [ this.header, this.columns ] );
	this.$element
		.addClass( 've-init-mw-cxTarget' )
		.append( this.stackLayout.$element );

	this.throttleAlignSectionPairs = OO.ui.throttle(
		this.alignSectionPairs.bind( this ),
		500
	);
	this.targetColumn.connect( this, {
		titleChange: 'onTargetTitleChange'
	} );
	this.connect( this, {
		contentChange: 'onChange'
	} );
};

/* Inheritance */

OO.inheritClass( ve.init.mw.CXTarget, ve.init.mw.Target );

/* Static properties */

ve.init.mw.CXTarget.static.actionGroups = [
	// Publish destination
	{
		header: OO.ui.deferMsg( 'cx-publish-destination-header' ),
		title: OO.ui.deferMsg( 'cx-publish-destination-tooltip' ),
		icon: 'advanced',
		indicator: null,
		classes: [ 've-init-mw-cxTarget-publishGroup' ],
		type: 'menu',
		include: [ { group: 'cxDestination' } ]
	}
];

/* Static methods */

/**
 * Align a source+target section pair by adjusting their paddingTop
 *
 * @param {number} sourceOffsetTop Pixel offset of the source section
 * @param {number} targetOffsetTop Pixel offset of the target section
 * @param {number} sectionNumber The number in the source/target section id attribute
 */
ve.init.mw.CXTarget.static.alignSectionPair = function ( sourceOffsetTop, targetOffsetTop, sectionNumber ) {
	var offsetTop, viewNode,
		sourceNode = document.getElementById( 'cxSourceSection' + sectionNumber ),
		targetNode = document.getElementById( 'cxTargetSection' + sectionNumber );

	function isSubclass( x, y ) {
		return x && ( x.constructor === y || x.constructor instanceof y );
	}
	if ( !sourceNode || !targetNode ) {
		return;
	}
	viewNode = $.data( targetNode, 'view' );
	sourceNode.style.marginTop = '';
	targetNode.style.marginTop = '';
	targetNode.style.height = '';
	offsetTop = Math.max(
		sourceOffsetTop + sourceNode.offsetTop,
		targetOffsetTop + targetNode.offsetTop
	);
	sourceNode.style.marginTop = ( offsetTop - sourceOffsetTop - sourceNode.offsetTop ) + 'px';
	targetNode.style.marginTop = ( offsetTop - targetOffsetTop - targetNode.offsetTop ) + 'px';
	if ( isSubclass( viewNode, ve.ce.CXPlaceholderNode ) || isSubclass( viewNode, ve.ce.CXSectionNode ) ) {
		if ( sourceNode.offsetHeight > targetNode.offsetHeight ) {
			targetNode.style.height = sourceNode.offsetHeight + 'px';
		}
	}
};

/* Methods */

ve.init.mw.CXTarget.prototype.setupToolbar = function () {
	var publishButton;

	// Parent method
	ve.init.mw.CXTarget.super.prototype.setupToolbar.apply( this, arguments );

	publishButton = new OO.ui.ButtonWidget( {
		disabled: true,
		flags: [ 'progressive', 'primary' ],
		classes: [ 'cx-header__publish-button' ],
		label: mw.msg( 'cx-publish-button' )
	} );
	publishButton.connect( this, {
		click: 'onPublishButtonClick'
	} );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		publishButton.setDisabled( weights.any === 0 );
	} );
	this.publishButton = publishButton;
	this.getToolbar().$actions.append( this.publishButton.$element );
	this.getToolbar().initialize();
};

ve.init.mw.CXTarget.prototype.unbindHandlers = function () {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.unbindHandlers.call( this );

	$( this.getElementWindow() ).off( 'resize', this.throttleAlignSectionPairs );
};

ve.init.mw.CXTarget.prototype.onSurfaceMouseOver = function ( ev ) {
	var fromSegmentId = $( ev.relatedTarget ).closest( '.cx-segment' ).data( 'segmentid' ),
		toSegmentId = $( ev.toElement ).closest( '.cx-segment' ).data( 'segmentid' );
	if ( fromSegmentId !== toSegmentId ) {
		this.setSentenceHighlight( fromSegmentId, false );
	}
	this.setSentenceHighlight( toSegmentId, true );
};

ve.init.mw.CXTarget.prototype.onSurfaceMouseOut = function ( ev ) {
	var fromSegmentId = $( ev.relatedTarget ).closest( '.cx-segment' ).data( 'segmentid' );
	this.setSentenceHighlight( fromSegmentId, false );
};

/**
 * Present the source article and section placeholders
 *
 * @param {mw.cx.dm.Translation} translation
 */
ve.init.mw.CXTarget.prototype.setTranslation = function ( translation ) {
	var sourceSurface, targetSurface;

	this.translation = translation;
	this.sourceSurface = sourceSurface = this.createSurface(
		this.translation.sourceDoc,
		this.getSurfaceConfig( {
			classes: [ 've-ui-cxSurface', 've-ui-cxSourceSurface', 'mw-body-content' ]
		} )
	);
	this.targetSurface = targetSurface = this.createSurface(
		this.translation.targetDoc,
		this.getSurfaceConfig( {
			classes: [ 've-ui-cxSurface', 've-ui-cxTargetSurface', 'mw-body-content' ]
		} )
	);
	sourceSurface.setDisabled( true );
	this.sourceColumn.setTranslation( translation );
	this.targetColumn.setTranslation( translation );
	this.toolsColumn.setTranslation( translation );
	this.clearSurfaces();
	this.surfaces.push( targetSurface );
	targetSurface.getView().connect( this, {
		focus: [ 'onSurfaceViewFocus', targetSurface ]
	} );
	this.setSurface( targetSurface );
	targetSurface.getModel().getDocument().connect( this, {
		transact: 'onDocumentTransact'
	} );
	targetSurface.getView().getDocument().connect( this, {
		activatePlaceholder: 'onDocumentActivatePlaceholder'
	} );
	this.sourceColumn.attachSurface( sourceSurface );
	this.targetColumn.attachSurface( targetSurface );
	sourceSurface.initialize();
	targetSurface.initialize();
	sourceSurface.getView().$element.on( {
		mouseover: this.onSurfaceMouseOver.bind( this ),
		mouseout: this.onSurfaceMouseOut.bind( this )
	} );
	targetSurface.getView().$element.on( {
		mouseover: this.onSurfaceMouseOver.bind( this ),
		mouseout: this.onSurfaceMouseOut.bind( this )
	} );

	this.translation.connect( this, {
		sectionChange: 'saveSection'
	} );

	$( this.getElementWindow() ).on( 'resize', this.throttleAlignSectionPairs );
	// Wait for document to render fully.
	// In mw.Target this happens after documentReady and a setTimeout,
	// but we don't use documentReady in this target.
	setTimeout( this.surfaceReady.bind( this ) );
};

ve.init.mw.CXTarget.prototype.surfaceReady = function () {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.surfaceReady.apply( this, arguments );

	this.throttleAlignSectionPairs();
};

ve.init.mw.CXTarget.prototype.getTranslation = function () {
	return this.translation;
};

ve.init.mw.CXTarget.prototype.onTargetTitleChange = function () {
	this.emit( 'targetTitleChange' );
	this.throttleAlignSectionPairs();
};

/**
 * Translation restore event handler
 * @param {mw.cx.dm.Translation} translationModel
 */
ve.init.mw.CXTarget.prototype.onTranslationRestore = function () {
	this.setStatusMessage( mw.msg( 'cx-draft-restored' ) );
};

/**
 * Call this whenever something changes in the translation that requires saving.
 */
ve.init.mw.CXTarget.prototype.onChange = function () {
	this.publishButton.setDisabled( false );
};

/**
 * Target namespace change handler
 * @param {number} namespaceId
 */
ve.init.mw.CXTarget.prototype.onPublishNamespaceChange = function ( namespaceId ) {
	var newTitle = mw.cx.getTitleForNamespace( this.translation.getTargetTitle(), namespaceId );
	// Setting title in targetColumn will take care of necessary event firing for title change.
	this.targetColumn.setTargetTitle( newTitle );
	mw.log( '[CX] Target title changed to ' + newTitle );
	this.updateNamespace();
};

ve.init.mw.CXTarget.prototype.getPublishNamespace = function () {
	return mw.Title.newFromText( this.translation.getTargetTitle() ).getNamespaceId();
};

ve.init.mw.CXTarget.prototype.onPublishButtonClick = function () {
	// Disable the trigger button
	this.publishButton.setDisabled( true )
		.setLabel( mw.msg( 'cx-publish-button-publishing' ) );
	this.emit( 'publish' );
};

ve.init.mw.CXTarget.prototype.attachToolbar = function () {
	this.header.$toolbar.append( this.getToolbar().$element );
};

ve.init.mw.CXTarget.prototype.onDocumentTransact = function () {
	this.emit( 'contentChange' );
	this.throttleAlignSectionPairs();
};

ve.init.mw.CXTarget.prototype.alignSectionPairs = function () {
	var sourceOffsetTop, targetOffsetTop, alignSectionPair, articleNode;

	sourceOffsetTop = this.sourceSurface.getView().getDocument().documentNode.$element.offset().top;
	targetOffsetTop = this.targetSurface.getView().getDocument().documentNode.$element.offset().top;
	alignSectionPair = this.constructor.static.alignSectionPair;
	articleNode = this.sourceSurface.getView().getDocument().getDocumentNode().getChildren()[ 0 ];
	articleNode.getChildren().forEach( function ( node ) {
		var sectionNumber,
			element = node.$element[ 0 ],
			match = element && element.id && element.id.match( /^cxSourceSection([0-9]+)$/ );
		if ( match ) {
			sectionNumber = +match[ 1 ];
			alignSectionPair( sourceOffsetTop, targetOffsetTop, sectionNumber );
		}
	} );
};

/**
 * Save the source and target sections for the given section Id.
 * @param {string} sectionId Section id. Example cxSourceSection15 or cxTargetSection15
 * @fires saveSection
 */
ve.init.mw.CXTarget.prototype.saveSection = function ( sectionId ) {
	var sourceNode, targetNode;

	sourceNode = this.getSourceSectionNode( sectionId );
	targetNode = this.getTargetSectionNode( sectionId );
	if ( !sourceNode || !targetNode ) {
		return;
	}
	this.emit( 'saveSection', {
		sectionNumber: mw.cx.getSectionNumberFromSectionId( sectionId ),
		source: {
			content: ve.dm.converter.getDomFromNode( sourceNode ).body.innerHTML
		},
		translation: {
			// TODO: What happens when mt provider changes, where to store per provider translation
			content: ve.dm.converter.getDomFromNode( targetNode ).body.innerHTML,
			MTProvider: 'user' // FIXME
		}
	} );
};

/**
 * Get the source node for the given section id. Accepts section id or source or target.
 * @param {string} sectionId Section id. Example cxSourceSection15 or cxTargetSection15
 * @return {ve.dm.CXSectionNode}
 */
ve.init.mw.CXTarget.prototype.getSourceSectionNode = function ( sectionId ) {
	var sectionNumber, sourceId;

	sectionNumber = mw.cx.getSectionNumberFromSectionId( sectionId );
	sourceId = 'cxSourceSection' + sectionNumber;
	return this.sourceSurface.$element.find( '#' + sourceId ).data( 'view' ).getModel();
};

/**
 * Get the translation node for the given section id. Accepts section id or source or target.
 * @param  {string} sectionId Section id. Example cxSourceSection15 or cxTargetSection15
 * @return {ve.dm.CXSectionNode}
 */
ve.init.mw.CXTarget.prototype.getTargetSectionNode = function ( sectionId ) {
	var sectionNumber, targetId;

	sectionNumber = mw.cx.getSectionNumberFromSectionId( sectionId );
	targetId = 'cxTargetSection' + sectionNumber;
	return this.targetSurface.$element.find( '#' + targetId ).data( 'view' ).getModel();
};

ve.init.mw.CXTarget.prototype.updateNamespace = function () {
	this.getActions().updateToolState();
};

ve.init.mw.CXTarget.prototype.onDocumentActivatePlaceholder = function ( placeholder ) {
	var sourceNode, cxid = placeholder.getModel().getAttribute( 'cxid' ),
		sourceNodeModel = this.getSourceSectionNode( cxid );

	// Convert DOM to node, preserving full internal list
	// Use clipboard mode to ensure reference body is outputted
	sourceNode = ve.dm.converter.getDomFromNode( sourceNodeModel, true ).body.children[ 0 ];

	function restructure( section ) {
		section = section.cloneNode( true );
		section.removeAttribute( 'rel' );
		section.id = 'cxTargetSection' + mw.cx.getSectionNumberFromSectionId( cxid );
		// TODO: it's horrible that id attributes get duplicated
		// $( section ).find( '[id]' ).each( function ( i, node ) {
		// 	node.setAttribute( 'id', 'cx' + node.getAttribute( 'id' ) );
		// } );
		return section;
	}

	this.translate( restructure( sourceNode ).outerHTML ).done(
		this.gotPlaceholderTranslation.bind( this, placeholder )
	).fail( function () {
		ve.error( 'Failed loading translation for #' + cxid );
	} );
};

ve.init.mw.CXTarget.prototype.onPublishSuccess = function () {
	this.showMessage(
		'success',
		mw.message( 'cx-publish-page-success',
			$( '<a>' ).attr( {
				href: mw.util.getUrl( this.translation.targetTitle ),
				target: '_blank'
			} ).text( this.translation.targetTitle )[ 0 ].outerHTML
		)
	);
	this.publishButton.setDisabled( false ).setLabel( mw.msg( 'cx-publish-button' ) );
};

ve.init.mw.CXTarget.prototype.onPublishFailure = function ( error ) {
	this.showMessage(
		'error',
		mw.msg( 'cx-publish-page-error', error )
	);
	this.publishButton.setDisabled( false ).setLabel( mw.msg( 'cx-publish-button' ) );
};

/**
 * Show a success/error message in the view
 * @param {string} type Message class.
 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
 * @param {string} details The details of error in HTML.
 */
ve.init.mw.CXTarget.prototype.showMessage = function ( type, message, details ) {
	this.header.infobar.showMessage( type, message, details );
};

ve.init.mw.CXTarget.prototype.setStatusMessage = function ( message ) {
	this.header.setStatusMessage( message );
};

ve.init.mw.CXTarget.prototype.showConflictWarning = function ( translation ) {
	mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
		mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
	} );
};

ve.init.mw.CXTarget.prototype.gotPlaceholderTranslation = function ( placeholder, data ) {
	var pasteDoc, newCursorRange, docLen, fragmentRange,
		surfaceModel = this.getSurface().getModel(),
		cxid = placeholder.getModel().getAttribute( 'cxid' ),
		fragment = surfaceModel.getLinearFragment( placeholder.getModel().getOuterRange(), true /* noAutoSelect */ );

	pasteDoc = ve.dm.converter.getModelFromDom( ve.createDocumentFromHtml( data ) );
	docLen = pasteDoc.getInternalList().getListNode().getOuterRange().start;

	fragment.insertContent( [
		{ type: 'cxSection', attributes: { style: 'section', cxid: cxid } },
		// Put a temporary paragraph inside the section so the cursor has somewhere
		// sensible to go, preventing scrollCursorIntoView from triggering a jump
		{ type: 'paragraph' },
		{ type: '/paragraph' },
		{ type: '/cxSection' }
	] );
	fragment
		.collapseToStart().adjustLinearSelection( 1, 3 )
		.insertDocument( pasteDoc, new ve.Range( 1, docLen - 1 ) );

	fragmentRange = fragment.getSelection().getCoveringRange();

	// Select first content offset within new content
	newCursorRange = new ve.Range( surfaceModel.getDocument().data.getNearestContentOffset( fragmentRange.start, 1 ) );
	if ( fragmentRange.containsRange( newCursorRange ) ) {
		surfaceModel.setLinearSelection( newCursorRange );
	}
};

/**
 * Translate and adapt the given source section
 * @param {string} source Source html content
 * @return {jQuery.Promise}
 */
ve.init.mw.CXTarget.prototype.translate = function ( source ) {
	return this.config.MTService.getSuggestedDefaultProvider().then( function ( provider ) {
		return this.config.MTService.translate( source, provider );
	}.bind( this ) );
};

ve.init.mw.CXTarget.prototype.showCategories = function () {
	this.sourceColumn.showCategories();
	this.targetColumn.showCategories();
};

ve.init.mw.CXTarget.prototype.setSentenceHighlight = function ( segmentId, highlighted ) {
	if ( !segmentId ) {
		return;
	}
	// Search for any target span with the right segmentId (it could have been split)
	this.sourceSurface.getView().$element.find( '[data-segmentid=' + segmentId + ']' )
		.toggleClass( 'cx-highlight', highlighted );
	this.targetSurface.getView().$element.find( '[data-segmentid=' + segmentId + ']' )
		.toggleClass( 'cx-highlight', highlighted );
};
