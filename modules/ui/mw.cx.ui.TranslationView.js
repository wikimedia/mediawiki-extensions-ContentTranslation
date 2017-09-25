'use strict';

/**
 * TranslationView
 *
 * @class
 * @param {Object} [config] Configuration object
 * @cfg {string} sourceTitle
 * @cfg {string} sourceLanguage
 * @cfg {string} sourceRevision
 * @cfg {string} targetTitle
 * @cfg {string} targetLanguage
 */
mw.cx.ui.TranslationView = function MwCxUiTranslationView( config ) {
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
	mw.cx.ui.TranslationView.super.call( this, config );
	this.translation = null;
	this.targetArticle = null;
	this.publishButton = null;
	this.publishSettings = null;
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
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TranslationView, ve.init.mw.Target );

/* Static methods */

/**
 * Align a source+target section pair by adjusting their paddingTop
 *
 * @param {number} sourceOffsetTop Pixel offset of the source section
 * @param {number} targetOffsetTop Pixel offset of the target section
 * @param {number} sectionNumber The number in the source/target section id attribute
 */
mw.cx.ui.TranslationView.static.alignSectionPair = function ( sourceOffsetTop, targetOffsetTop, sectionNumber ) {
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

mw.cx.ui.TranslationView.prototype.setupToolbar = function () {
	var publishButton, publishSettings;

	// Parent method
	mw.cx.ui.TranslationView.super.prototype.setupToolbar.apply( this, arguments );

	publishButton = new OO.ui.ButtonWidget( {
		disabled: true,
		flags: [ 'progressive', 'primary' ],
		classes: [ 'cx-header__publish-button' ],
		label: mw.msg( 'cx-publish-button' )
	} );
	publishSettings = new mw.cx.ui.PublishSettingsWidget( {
		destination: mw.cx.getDefaultTargetNamespace()
	} );
	publishButton.connect( this, {
		click: 'onPublishButtonClick'
	} );
	publishSettings.connect( this, {
		choose: 'onPublishNamespaceChange'
	} );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		publishButton.setDisabled( weights.any === 0 );
	} );
	this.publishButton = publishButton;
	this.publishSettings = publishSettings;
	this.getToolbar().$actions.append( this.publishSettings.$element, this.publishButton.$element );
};

mw.cx.ui.TranslationView.prototype.unbindHandlers = function () {
	// Parent method
	mw.cx.ui.TranslationView.super.prototype.unbindHandlers.call( this );

	$( this.getElementWindow() ).off( 'resize', this.throttleAlignSectionPairs );
};

mw.cx.ui.TranslationView.prototype.onSurfaceMouseOver = function ( ev ) {
	var fromSegmentId = $( ev.relatedTarget ).closest( '.cx-segment' ).data( 'segmentid' ),
		toSegmentId = $( ev.toElement ).closest( '.cx-segment' ).data( 'segmentid' );
	if ( fromSegmentId !== toSegmentId ) {
		this.setSentenceHighlight( fromSegmentId, false );
	}
	this.setSentenceHighlight( toSegmentId, true );
};

mw.cx.ui.TranslationView.prototype.onSurfaceMouseOut = function ( ev ) {
	var fromSegmentId = $( ev.relatedTarget ).closest( '.cx-segment' ).data( 'segmentid' );
	this.setSentenceHighlight( fromSegmentId, false );
};

/**
 * Present the source article and section placeholders
 *
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.TranslationView.prototype.setTranslation = function ( translation ) {
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
	this.throttleAlignSectionPairs();
	sourceSurface.getView().$element.on( {
		mouseover: this.onSurfaceMouseOver.bind( this ),
		mouseout: this.onSurfaceMouseOut.bind( this )
	} );
	targetSurface.getView().$element.on( {
		mouseover: this.onSurfaceMouseOver.bind( this ),
		mouseout: this.onSurfaceMouseOut.bind( this )
	} );

	$( this.getElementWindow() ).on( 'resize', this.throttleAlignSectionPairs );
};

mw.cx.ui.TranslationView.prototype.getTranslation = function () {
	return this.translation;
};

mw.cx.ui.TranslationView.prototype.onTargetTitleChange = function () {
	this.emit( 'targetTitleChange' );
	this.throttleAlignSectionPairs();
};

/**
 * Translation restore event handler
 * @param {mw.cx.dm.Translation} translationModel
 */
mw.cx.ui.TranslationView.prototype.onTranslationRestore = function () {
	this.setStatusMessage( mw.msg( 'cx-draft-restored' ) );
};

/**
 * Call this whenever something changes in the translation that requires saving.
 */
mw.cx.ui.TranslationView.prototype.onChange = function () {
	this.publishButton.setDisabled( false );
};

/**
 * Target namespace change handler
 * @param {number} namespaceId
 */
mw.cx.ui.TranslationView.prototype.onPublishNamespaceChange = function ( namespaceId ) {
	var newTitle;

	newTitle = mw.cx.getTitleForNamespace( this.translation.getTargetTitle(), namespaceId );
	// Setting title in translationColumn will take care of necessary event firing for title change.
	this.columns.translationColumn.setTargetTitle( newTitle );
	mw.log( '[CX] Target title changed to ' + newTitle );
};

mw.cx.ui.TranslationView.prototype.onPublishButtonClick = function () {
	// Disable the trigger button
	this.publishButton.setDisabled( true )
		.setLabel( mw.msg( 'cx-publish-button-publishing' ) );
	this.emit( 'publish' );
};

mw.cx.ui.TranslationView.prototype.attachToolbar = function () {
	var toolbar = this.getToolbar();
	this.header.$toolbar.append( toolbar.$element );
	toolbar.initialize();
	this.getActions().initialize();
};

mw.cx.ui.TranslationView.prototype.onDocumentTransact = function () {
	this.publishButton.setDisabled( false );
	this.throttleAlignSectionPairs();
};

mw.cx.ui.TranslationView.prototype.alignSectionPairs = function () {
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
			sectionNumber = parseInt( match[ 1 ], 10 );
			alignSectionPair( sourceOffsetTop, targetOffsetTop, sectionNumber );
		}
	} );
};

mw.cx.ui.TranslationView.prototype.changeNamespace = function ( namespaceId ) {
	this.publishSettings.setDestinationNamespace( namespaceId );
};

mw.cx.ui.TranslationView.prototype.onDocumentActivatePlaceholder = function ( placeholder ) {
	var sourceModel, sourceNode,
		cxid = placeholder.getModel().getAttribute( 'cxid' ),
		sectionNumber = parseInt( cxid.match( /^cxTargetSection([0-9]+)$/ )[ 1 ], 10 ),
		sourceId = 'cxSourceSection' + sectionNumber,
		targetId = 'cxTargetSection' + sectionNumber;

	function restructure( section ) {
		section = section.cloneNode( true );
		section.removeAttribute( 'rel' );
		section.id = targetId;
		// TODO: it's horrible that id attributes get duplicated
		// $( section ).find( '[id]' ).each( function ( i, node ) {
		// 	node.setAttribute( 'id', 'cx' + node.getAttribute( 'id' ) );
		// } );
		return section;
	}

	sourceModel = this.sourceSurface.$element.find( '#' + sourceId ).data( 'view' ).getModel();
	// Convert DOM to node, preserving full internal list
	// Use clipboard mode to ensure reference body is outputted
	sourceNode = ve.dm.converter.getDomFromNode( sourceModel, true ).body.children[ 0 ];
	this.translate( restructure( sourceNode ).outerHTML ).done(
		this.gotPlaceholderTranslation.bind( this, placeholder )
	).fail( function () {
		ve.error( 'Failed loading translation for #' + cxid );
	} );
};

mw.cx.ui.TranslationView.prototype.onPublishSuccess = function () {
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

mw.cx.ui.TranslationView.prototype.onPublishFailure = function ( error ) {
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
mw.cx.ui.TranslationView.prototype.showMessage = function ( type, message, details ) {
	this.header.infobar.showMessage( type, message, details );
};

mw.cx.ui.TranslationView.prototype.setStatusMessage = function ( message ) {
	this.header.setStatusMessage( message );
};

mw.cx.ui.TranslationView.prototype.showConflictWarning = function ( translation ) {
	mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
		mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
	} );
};

mw.cx.ui.TranslationView.prototype.gotPlaceholderTranslation = function ( placeholder, data ) {
	var pasteDoc, newCursorRange, docLen, fragmentRange,
		modelSurface = this.getSurface().getModel(),
		cxid = placeholder.getModel().getAttribute( 'cxid' ),
		fragment = modelSurface.getLinearFragment( placeholder.getModel().getOuterRange() );

	pasteDoc = ve.dm.converter.getModelFromDom( ve.createDocumentFromHtml( data ) );
	docLen = pasteDoc.getInternalList().getListNode().getOuterRange().start;

	fragment.insertContent( [
		{ type: 'cxSection', attributes: { style: 'section', cxid: cxid } },
		{ type: '/cxSection' }
	] );
	fragment
		.collapseToStart().adjustLinearSelection( 1, 1 )
		.insertDocument( pasteDoc, new ve.Range( 1, docLen - 1 ) );

	fragmentRange = fragment.getSelection().getCoveringRange();

	// Select first content offset within new content
	newCursorRange = new ve.Range( modelSurface.getDocument().data.getNearestContentOffset( fragmentRange.start, 1 ) );
	if ( fragmentRange.containsRange( newCursorRange ) ) {
		modelSurface.setLinearSelection( newCursorRange );
	}
};

/**
 * Translate and adapt the given source section
 * @param {string} source Source html content
 * @return {jQuery.Promise}
 */
mw.cx.ui.TranslationView.prototype.translate = function ( source ) {
	return this.config.MTService.getSuggestedDefaultProvider().then( function ( provider ) {
		return this.config.MTService.translate( source, provider );
	}.bind( this ) );
};

mw.cx.ui.TranslationView.prototype.showCategories = function () {
	this.sourceColumn.showCategories();
	this.targetColumn.showCategories();
};

mw.cx.ui.TranslationView.prototype.setSentenceHighlight = function ( segmentId, highlighted ) {
	if ( !segmentId ) {
		return;
	}
	// Search for any target span with the right segmentId (it could have been split)
	this.sourceSurface.getView().$element.find( '[data-segmentid=' + segmentId + ']' )
		.toggleClass( 'cx-highlight', highlighted );
	this.targetSurface.getView().$element.find( '[data-segmentid=' + segmentId + ']' )
		.toggleClass( 'cx-highlight', highlighted );
};
