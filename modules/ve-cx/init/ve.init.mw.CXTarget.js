'use strict';

/**
 * CX Target
 *
 * @class
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {Object} [config] Configuration object
 * @cfg {string} sourceTitle
 * @cfg {string} sourceLanguage
 * @cfg {string} sourceRevision
 * @cfg {string} targetTitle
 * @cfg {string} targetLanguage
 */
ve.init.mw.CXTarget = function VeInitMwCXTarget( translationView, config ) {
	// Configuration initialization
	this.config = config = $.extend( {}, config, {
		continuous: true,
		expanded: false,
		scrollable: false,
		padded: false
	} );
	config.toolbarConfig = $.extend(
		{ shadow: true, actions: false, floatable: false },
		config.toolbarConfig
	);
	// Parent constructor
	ve.init.mw.CXTarget.super.call( this, config );
	this.translation = null;
	this.publishButton = null;
	this.translationView = translationView;
	this.pageName = this.translationView.targetColumn.getTitle();
	this.sourceSurface = null;
	this.targetSurface = null;

	this.$element
		.addClass( 've-init-mw-cxTarget' )
		.append( this.translationView.$element );

	this.throttleAlignSectionPairs = OO.ui.throttle(
		this.alignSectionPairs.bind( this ),
		500
	);

	this.translationView.targetColumn.connect( this, {
		titleChange: 'onTargetTitleChange'
	} );

	this.connect( this, {
		contentChange: 'onChange',
		surfaceReady: 'onSurfaceReady'
	} );
	this.translationView.translationHeader.publishSettings.connect( this, {
		choose: 'onPublishNamespaceChange'
	} );
	mw.hook( 'mw.cx.draft.restored' ).add( this.onTranslationRestore.bind( this ) );
};

/* Inheritance */

OO.inheritClass( ve.init.mw.CXTarget, ve.init.mw.Target );

/* Static properties */

/* Methods */

ve.init.mw.CXTarget.prototype.setupToolbar = function () {
	this.publishButton = this.translationView.translationHeader.publishButton;

	// Parent method
	ve.init.mw.CXTarget.super.prototype.setupToolbar.apply( this, arguments );

	this.publishButton.connect( this, {
		click: 'onPublishButtonClick'
	} );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		this.publishButton.setDisabled( weights.any === 0 );
	}.bind( this ) );
};

ve.init.mw.CXTarget.prototype.unbindHandlers = function () {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.unbindHandlers.call( this );

	$( this.getElementWindow() ).off( 'resize', this.throttleAlignSectionPairs );
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
	this.translationView.sourceColumn.setTranslation( translation );
	this.translationView.targetColumn.setTranslation( translation );
	this.translationView.toolsColumn.setTranslation( translation );
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
	this.translationView.sourceColumn.attachSurface( sourceSurface );
	this.translationView.targetColumn.attachSurface( targetSurface );
	sourceSurface.initialize();
	targetSurface.initialize();

	this.setupHighlighting( sourceSurface.getView().$element, targetSurface.getView().$element );

	this.translation.connect( this, {
		sectionChange: 'saveSection'
	} );

	$( this.getElementWindow() ).on( 'resize', this.throttleAlignSectionPairs );
	// Wait for document to render fully.
	// In mw.Target this happens after documentReady and a setTimeout,
	// but we don't use documentReady in this target.
	setTimeout( this.surfaceReady.bind( this ) );
};

ve.init.mw.CXTarget.prototype.setupHighlighting = function ( $sourceView, $targetView ) {
	var $views = $( [ $sourceView[ 0 ], $targetView[ 0 ] ] ),
		targetSurface = this.targetSurface;

	$views.on(
		{
			mouseenter: function () {
				var segmentSelector;

				// If target surface is disabled (usually during publishing)
				// don't proceed with sentence highlighting
				if ( targetSurface.isDisabled() ||
					this.classList.contains( 'cx-sentence-highlight' )
				) {
					return;
				}

				segmentSelector = '[data-segmentid="_"]'.replace( '_', this.dataset.segmentid );
				$views.find( segmentSelector ).addClass( 'cx-sentence-highlight' );
			},
			mouseleave: function () {
				$views.find( '.cx-sentence-highlight' ).removeClass( 'cx-sentence-highlight' );
			}
		},
		'.cx-segment'
	);

	$targetView.on(
		{
			mouseenter: function () {
				var sectionNumber;

				// If target surface is disabled (usually during publishing)
				// don't proceed with section highlighting
				if ( targetSurface.isDisabled() ||
					this.classList.contains( 'cx-section-highlight' )
				) {
					return;
				}

				sectionNumber = mw.cx.getSectionNumberFromSectionId( this.id );
				document.getElementById( 'cxSourceSection' + sectionNumber )
					.classList.add( 'cx-section-highlight' );
			},
			mouseleave: function () {
				$views.find( '.cx-section-highlight' ).removeClass( 'cx-section-highlight' );
			}
		},
		'[rel="cx:Placeholder"]'
	);
};

/**
 * @inheritdoc
 */
ve.init.mw.CXTarget.prototype.createSurface = function ( dmDoc, config ) {
	var surface, documentView;

	surface = new ve.ui.CXSurface( dmDoc, this.translationView.toolsColumn, config );

	surface.$element.addClass( this.protectedClasses );

	// T164790
	documentView = surface.getView().getDocument();
	documentView.getDocumentNode().$element.addClass( 'mw-parser-output' );

	return surface;
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
	this.pageName = this.translationView.targetColumn.getTitle();
	this.emit( 'targetTitleChange' );
	this.throttleAlignSectionPairs();
};

/**
 * Translation restore event handler
 * @param {mw.cx.dm.Translation} translationModel
 */
ve.init.mw.CXTarget.prototype.onTranslationRestore = function () {
	this.publishButton.setDisabled( false );

	// Update publish settings namespace choice
	this.updateNamespace();
};

/**
 * Call this when translation editor is ready.
 */
ve.init.mw.CXTarget.prototype.onSurfaceReady = function () {
	// Enable publish settings, once translation editor is ready
	this.translationView.translationHeader.publishSettings.setDisabled( false );
};

/**
 * Call this whenever something changes in the translation that requires saving.
 */
ve.init.mw.CXTarget.prototype.onChange = function () {
	this.publishButton.setDisabled( false );
	this.translationView.clearMessages();
};

/**
 * Target namespace change handler
 * @param {number} namespaceId
 */
ve.init.mw.CXTarget.prototype.onPublishNamespaceChange = function ( namespaceId ) {
	var newTitle = mw.cx.getTitleForNamespace( this.pageName, namespaceId );
	// Setting title in targetColumn will take care of necessary event firing for title change.
	this.translationView.targetColumn.setTitle( newTitle );
	mw.log( '[CX] Target title changed to ' + newTitle );
	this.updateNamespace();
};

ve.init.mw.CXTarget.prototype.updateNamespace = function () {
	this.translationView.translationHeader.publishSettings.setDestinationNamespace( this.getPublishNamespace() );
};

ve.init.mw.CXTarget.prototype.getPublishNamespace = function () {
	return mw.Title.newFromText( this.pageName ).getNamespaceId();
};

ve.init.mw.CXTarget.prototype.onPublishButtonClick = function () {
	// Disable the trigger button
	this.publishButton.setDisabled( true )
		.setLabel( mw.msg( 'cx-publish-button-publishing' ) );
	this.emit( 'publish' );
	this.translationView.translationHeader.publishSettings.setDisabled( true );
	this.targetSurface.setDisabled( true );
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', true );
};

ve.init.mw.CXTarget.prototype.attachToolbar = function () {
	this.translationView.toolsColumn.editingToolbar.$element.append(
		this.getToolbar().$element
			.addClass( 'oo-ui-toolbar-narrow' ) // Quick fix to avoid overflowing toolbar.
	);
};

ve.init.mw.CXTarget.static.toolbarGroups = [
	// History
	{ include: [ 'undo', 'redo' ] },
	// Style
	{
		classes: [ 've-cx-toolbar-style' ],
		type: 'list',
		icon: 'textStyle',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-style-tooltip' ),
		include: [ { group: 'textStyle' }, 'language', 'clear' ],
		forceExpand: [ 'bold', 'italic', 'clear' ],
		promote: [ 'bold', 'italic' ],
		demote: [ 'strikethrough', 'code', 'underline', 'language', 'clear' ]
	},
	// Link
	{
		classes: [ 've-cx-toolbar-link' ],
		include: [ 'link' ]
	},
	// Structure
	{
		classes: [ 've-cx-toolbar-structure' ],
		type: 'list',
		icon: 'listBullet',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-structure' ),
		include: [ { group: 'structure' } ],
		demote: [ 'outdent', 'indent' ]
	},
	// Insert
	{
		classes: [ 've-cx-toolbar-insert' ],
		icon: 'ellipsis',
		label: '',
		indicator: null,
		type: 'list',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-insert' ),
		include: [ 'media', 'transclusion', 'insertTable', 'specialCharacter', 'reference', 'reference/existing' ],
		promote: [ 'media', 'transclusion', 'insertTable' ]
	}
];

ve.init.mw.CXTarget.prototype.onDocumentTransact = function () {
	this.emit( 'contentChange' );
	this.throttleAlignSectionPairs();
};

ve.init.mw.CXTarget.prototype.alignSectionPairs = function () {
	var i, sourceDocumentNode, targetDocumentNode, sourceOffsetTop, targetOffsetTop,
		documentNodeChildren, alignSectionPair, articleNode;

	sourceDocumentNode = this.sourceSurface.getView().getDocument().getDocumentNode();
	targetDocumentNode = this.targetSurface.getView().getDocument().getDocumentNode();

	// This method can be called before restoration is complete and all nodes are attached
	// to the DOM (e.g. via mw.cx.ui.TargetColumn#setTitle). If so, skip aligment.
	if (
		!document.contains( sourceDocumentNode.$element[ 0 ] ) ||
		!document.contains( targetDocumentNode.$element[ 0 ] )
	) {
		return;
	}

	sourceOffsetTop = sourceDocumentNode.$element.offset().top;
	targetOffsetTop = targetDocumentNode.$element.offset().top;
	documentNodeChildren = sourceDocumentNode.getChildren();

	for ( i = 0; i < documentNodeChildren.length; i++ ) {
		if ( documentNodeChildren[ i ].getType() === 'article' ) {
			articleNode = documentNodeChildren[ i ];
			break;
		}
	}

	if ( !articleNode ) {
		mw.log.error( '[CX] Fatal: articleNode not found in documentNode' );
		return;
	}

	alignSectionPair = this.translationView.constructor.static.alignSectionPair;
	articleNode.getChildren().forEach( function ( node ) {
		var sectionNumber,
			element = node.$element[ 0 ],
			id = element && element.id,
			match = id && id.match( /^cxSourceSection([0-9]+)$/ );
		if ( match ) {
			sectionNumber = +match[ 1 ];
			alignSectionPair( sourceOffsetTop, targetOffsetTop, sectionNumber );
		} else {
			mw.log.warn( '[CX] Invalid source section ' + id + ' found. Alignment may go wrong' );
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

ve.init.mw.CXTarget.prototype.onPublishCancel = function () {
	this.publishButton.setDisabled( false ).setLabel( mw.msg( 'cx-publish-button' ) );
	this.targetSurface.setDisabled( false );
	this.translationView.translationHeader.publishSettings.setDisabled( false );
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', false );
};

ve.init.mw.CXTarget.prototype.onPublishSuccess = function () {
	this.translationView.showMessage(
		'success',
		mw.message( 'cx-publish-page-success',
			$( '<a>' ).attr( {
				href: mw.util.getUrl( this.translation.targetTitle ),
				target: '_blank'
			} ).text( this.translation.targetTitle )[ 0 ].outerHTML
		)
	);
	this.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button' ) );
	this.targetSurface.setDisabled( false );
	this.translationView.translationHeader.publishSettings.setDisabled( false );
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', false );
};

ve.init.mw.CXTarget.prototype.onPublishFailure = function ( errorMessage ) {
	this.translationView.showMessage( 'error', errorMessage );
	this.publishButton.setDisabled( false ).setLabel( mw.msg( 'cx-publish-button' ) );
	this.targetSurface.setDisabled( false );
	this.translationView.translationHeader.publishSettings.setDisabled( false );
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', false );
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
 * @inheritDoc
 */
ve.init.mw.CXTarget.prototype.parseWikitextFragment = function ( wikitext, pst, doc ) {
	var pageTitle, lang;

	lang = doc ? doc.lang : this.config.targetLanguage;
	pageTitle = lang === this.config.sourceLanguage ?
		this.config.sourceTitle : this.translation.getTargetTitle();

	return this.config.siteMapper.getApi( lang ).post( {
		action: 'visualeditor',
		paction: 'parsefragment',
		page: pageTitle,
		wikitext: wikitext,
		pst: pst
	} );
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
