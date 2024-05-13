'use strict';

/**
 * CX Target
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {Object} [config] Configuration object
 * TODO: Only pass optional parameters in config
 * @cfg {mw.cx.SiteMapper} siteMapper
 * @cfg {mw.cx.MachineTranslationManager} MTManager
 * @cfg {mw.cx.MachineTranslationService} MTService
 * TODO: toolbarConfig
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
		{ shadow: true, actions: true, floatable: false, $overlay: true },
		config.toolbarConfig
	);
	// Parent constructor
	ve.init.mw.CXTarget.super.call( this, config );

	this.MTManager = config.MTManager;
	this.MTService = config.MTService;
	this.siteMapper = config.siteMapper;
	this.requestManager = config.requestManager;

	this.errorsInTranslation = false;

	// @var {mw.cx.dm.Translation}
	this.translation = null;
	// @var {mw.cx.ui.TranslationView}
	this.translationView = translationView;
	this.publishButton = null;
	// @var {string}
	this.pageName = this.translationView.targetColumn.getTitle();
	/**
	 * An integer holding the value of the namespace,
	 * into which the translation will be published
	 *
	 * @type {number}
	 */
	this.publishNamespace = mw.cx.getDefaultTargetNamespace();
	// @var {ve.ui.CXSurface}
	this.sourceSurface = null;
	// @var {ve.ui.CXSurface}
	this.targetSurface = null;
	// @var {Object}
	this.contentSourceCache = {};
	// @var {Object}
	this.translationRequestCache = {};
	// Complex dialog is the dialog with VE surface.
	// In order to reset the overlay classes, which move overlay, we want only the first
	// complex dialog to reset these classes, since complex dialogs can be nested. See T193587
	this.complexDialogOpened = false;
	this.contextStack = [];
	this.mtToolbar = null;

	this.$element
		.addClass( 've-init-mw-cxTarget' )
		.append( this.translationView.$element );

	this.debounceAlignSectionPairs = OO.ui.debounce(
		this.alignSectionPairs.bind( this ),
		500
	);

	this.translationView.connect( this, {
		hasTranslationIssues: 'onTranslationIssues'
	} );

	this.translationView.targetColumn.connect( this, {
		titleChange: 'onTargetTitleChange', // only emitted for article translations
		sectionTitleChange: 'onTargetSectionTitleChange' // only emitted for section translations
	} );

	this.connect( this, {
		contentChange: 'onChange',
		surfaceReady: 'onSurfaceReady'
	} );
	mw.hook( 'mw.cx.draft.restored' ).add( this.onTranslationRestore.bind( this ) );
};

/* Inheritance */

OO.inheritClass( ve.init.mw.CXTarget, ve.init.mw.Target );

/* Events */

/**
 * @event targetTitleChange
 *
 * Target title of the translation has changed.
 */

/**
 * @event targetSectionTitleChange
 *
 * Target section title of the translation has changed. Only used for section translations.
 */

/**
 * @event publish
 *
 * User clicked on "Publish" button to start the publication process.
 */

/**
 * @event contentChange
 *
 * Content in the document has changed.
 */

/**
 * @event changeContentSource
 *
 * Some target section's content source has changed.
 * @param {number} sectionNumber
 */

/**
 * @event namespaceChange
 *
 * Namespace of the target title has changed.
 * @param {number} namespaceId ID of the new namespace
 */

/* Static Properties */

ve.init.mw.CXTarget.static.name = 'cx';

ve.init.mw.CXTarget.static.integrationType = 'contenttranslation';

ve.init.mw.CXTarget.static.publishToolbarGroups = [
	// Publish settings
	{
		name: 'publish',
		include: [ 'publishSettings', 'publish' ]
	}
];

ve.init.mw.CXTarget.static.translationToolbarGroups = [
	{
		name: 'cx-mt',
		type: 'menu',
		include: [ { group: 'mt' } ]
	},
	{
		name: 'cx-mt-set-default',
		type: 'bar',
		invisibleLabel: false,
		include: [ 'save-mt-preference' ]
	}
];

ve.init.mw.CXTarget.static.toolbarGroups = [
	// History
	{
		name: 'history',
		include: [ 'undo', 'redo' ]
	},
	// Style
	{
		name: 'style',
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
		name: 'link',
		classes: [ 've-cx-toolbar-link' ],
		include: [ 'link' ]
	},
	// Structure
	{
		name: 'structure',
		classes: [ 've-cx-toolbar-structure' ],
		type: 'list',
		icon: 'listBullet',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-structure' ),
		include: [ { group: 'structure' } ],
		demote: [ 'outdent', 'indent' ]
	},
	// Placeholder for reference tools (e.g. Cite)
	{
		name: 'reference'
	},
	// Insert
	{
		name: 'extra',
		align: 'after',
		icon: 'ellipsis',
		label: '',
		indicator: null,
		type: 'list',
		title: OO.ui.deferMsg( 'visualeditor-toolbar-insert' ),
		include: '*',
		exclude: [ { group: 'format' } ],
		forceExpand: [ 'media', 'transclusion', 'insertTable', 'specialCharacter' ],
		promote: [ 'media', 'transclusion', 'insertTable', 'specialCharacter' ]
	}
];

/* Methods */

ve.init.mw.CXTarget.prototype.setupToolbar = function ( surface ) {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.setupToolbar.apply( this, arguments );

	this.publishToolbar = new ve.ui.TargetToolbar( this );
	this.publishToolbar.setup( this.constructor.static.publishToolbarGroups, surface );

	this.publishButton = this.publishToolbar.getToolGroupByName( 'publish' ).findItemFromData( 'publish' );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		this.publishButton.setDisabled( weights.any === 0 );
	}.bind( this ) );

	this.translationView.translationHeader.$toolbar.append( this.publishToolbar.$element );
};

ve.init.mw.CXTarget.prototype.unbindHandlers = function () {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.unbindHandlers.call( this );

	$( this.getElementWindow() ).off( 'resize', this.debounceAlignSectionPairs );
};

/**
 * Present the source article and section placeholders
 *
 * @param {mw.cx.dm.Translation} translation
 */
ve.init.mw.CXTarget.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
	const sourceSurface = this.sourceSurface = this.createSurface(
		this.translation.sourceDoc,
		this.getSurfaceConfig( {
			classes: [ 've-ui-cxSurface', 've-ui-cxSourceSurface', 'mw-body-content' ]
		} )
	);
	const targetSurface = this.targetSurface = this.createSurface(
		this.translation.targetDoc,
		this.getSurfaceConfig( {
			classes: [ 've-ui-cxSurface', 've-ui-cxTargetSurface', 'mw-body-content' ]
		} )
	);
	sourceSurface.setReadOnly( true );
	this.translationView.sourceColumn.setTranslation( translation );
	this.translationView.targetColumn.setTranslation( translation );
	this.translationView.toolsColumn.setTranslation( translation );
	this.clearSurfaces();
	this.surfaces.push( targetSurface );
	targetSurface.getDialogs().connect( this, {
		opening: this.onDialogOpening.bind( this, targetSurface.getContext() ),
		closing: 'onDialogClosing'
	} );
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

	$( this.getElementWindow() ).on( 'resize', this.debounceAlignSectionPairs );
	// Wait for document to render fully.
	// In mw.Target this happens after documentReady and a setTimeout,
	// but we don't use documentReady in this target.
	setTimeout( this.surfaceReady.bind( this ) );

	this.translation.connect( this, {
		sectionChange: this.debounceAlignSectionPairs,
		afterRender: this.debounceAlignSectionPairs
	} );
};

ve.init.mw.CXTarget.prototype.setupHighlighting = function ( $sourceView, $targetView ) {
	const $views = $( [ $sourceView[ 0 ], $targetView[ 0 ] ] );

	$views.on(
		{
			mouseenter: function () {
				if ( this.classList.contains( 'cx-sentence-highlight' ) ) {
					return;
				}

				const segmentSelector = '[data-segmentid="_"]'.replace( '_', this.dataset.segmentid );
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
				if ( this.classList.contains( 'cx-section-highlight' ) ) {
					return;
				}

				const sectionNumber = mw.cx.getSectionNumberFromSectionId( this.id );
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
	const surface = new ve.ui.CXSurface( this, dmDoc, this.translationView.toolsColumn, config );

	// eslint-disable-next-line mediawiki/class-doc
	surface.$element.addClass( this.protectedClasses );

	// T164790
	const documentView = surface.getView().getDocument();
	// The following classes are used here
	// * mw-content-ltr
	// * mw-content-rtl
	documentView.getDocumentNode().$element.addClass( 'mw-parser-output mw-content-' + documentView.getDir() );

	// If configuration object has 'inDialog' param, that means surface is created for usage
	// inside a modal dialog. Such complex dialogs need to have access to context tools inside
	// tools column, so we move the overlay. Also, other, non-complex tools, shouldn't be
	// showing. See T193587
	if ( config.inDialog ) {
		surface.getDialogs().connect( this, {
			opening: this.onDialogOpening.bind( this, surface.getContext() ),
			closing: 'onDialogClosing'
		} );

		if ( !this.complexDialogOpened ) {
			this.toggleContextTools( true );
			surface.connect( this, { destroy: [ 'toggleContextTools', false ] } );
		}
	}

	return surface;
};

ve.init.mw.CXTarget.prototype.surfaceReady = function () {
	// Parent method
	ve.init.mw.CXTarget.super.prototype.surfaceReady.apply( this, arguments );

	this.debounceAlignSectionPairs();

	// Wait for 300ms because of debounced section alignment and then mark target surface as ready.
	// This CSS class is used in order to avoid showing initial placeholder
	// until it is sized to match corresponding source section.
	setTimeout( function () {
		this.targetSurface.$element.addClass( 've-ui-cxTargetSurface--ready' );
	}.bind( this ), 300 );
};

/**
 * Toggle the tools column CSS class which hides non-context tools.
 *
 * @param {boolean} state Toggle state of tools column class
 */
ve.init.mw.CXTarget.prototype.toggleContextTools = function ( state ) {
	this.complexDialogOpened = state;

	this.translationView.toolsColumn.toolContainer.$element.toggleClass( 'cx-column-tools-container--dialog', state );
};

ve.init.mw.CXTarget.prototype.getTranslation = function () {
	return this.translation;
};

ve.init.mw.CXTarget.prototype.onDialogOpening = function ( context, dialog ) {
	if ( !( dialog instanceof ve.ui.NodeDialog ) ) {
		return;
	}

	this.targetSurface.getGlobalOverlay().$element.addClass( 've-cx-ui-overlay-global' );
	this.contextStack.push( context );
	context.connect( this, { afterContextChange: [ 'processContextItems', true ] } );
	this.processContextItems( true );

	// We can use setSize( 'full' ) method here, and it would work for some dialogs,
	// like reference dialog, but VE hardcodes the size for media dialog in
	// ve.ui.MWMediaDialog.prototype.switchPanels.
	// See T198390
	dialog.getSize = function () {
		return 'full';
	};

	// Don't cover the top header with overlay when the user is at the top of the viewport
	// See T193587
	const headerHeight = $( 'header.cx-header' ).outerHeight();
	const scrollPosition = $( this.getElementWindow() ).scrollTop();

	if ( scrollPosition === 0 ) {
		dialog.$element.css( 'top', headerHeight );
	} else {
		dialog.$element.css( 'top', '' );
	}
};

ve.init.mw.CXTarget.prototype.onDialogClosing = function () {
	this.processContextItems( false );
	this.contextStack.pop();
	if ( !this.contextStack.length ) {
		this.targetSurface.getGlobalOverlay().$element.removeClass( 've-cx-ui-overlay-global' );
	}
};

/**
 * Process the stack of contexts, with their context items. Stack contains contexts
 * for nested modal dialogs, e.g. opening reference dialog, for a reference that
 * has a template, and then opening the template dialog.
 *
 * The logic when dialog is opening is to hide context item(s) for all but last
 * context inside a stack. Item(s) for last context are disabled.
 *
 * On the other side, when dialog is closing, context item(s) of last context are
 * enabled and visible, while context item(s) for second-to-last context are
 * disabled and visible. Item(s) for all other contexts are just toggled invisible.
 *
 * @param {boolean} disabled True if context items need to be disabled
 */
ve.init.mw.CXTarget.prototype.processContextItems = function ( disabled ) {
	const lastItem = this.contextStack.length - 1;

	// Iterate all context(s) in a stack
	this.contextStack.forEach( function ( context, index ) {
		// Whether items for second to last context in a stack should be disabled.
		// Used when dialog is closing.
		const disableSecondToLast = !disabled && index === ( lastItem - 1 );

		let process;
		// If item is last (during opening) or second-to-last (during closing)
		if ( index === lastItem || disableSecondToLast ) {
			process = function ( item ) {
				item.toggle( true );
				item.setDisabled( disabled || disableSecondToLast );
				// Set disabled state for action buttons
				item.actionButtons.getItems().forEach( function ( button ) {
					button.setDisabled( disabled || disableSecondToLast );
				} );
			};
		} else {
			process = function ( item ) {
				item.toggle( false );
			};
		}

		context.getItems().forEach( process );
	} );
};

/**
 * @fires targetTitleChange
 */
ve.init.mw.CXTarget.prototype.onTargetTitleChange = function () {
	this.pageName = this.translationView.targetColumn.getTitle();
	this.updateNamespace();
	this.emit( 'targetTitleChange' );
	this.debounceAlignSectionPairs();
};

/**
 * @fires targetSectionTitleChange
 */
ve.init.mw.CXTarget.prototype.onTargetSectionTitleChange = function () {
	this.emit( 'targetSectionTitleChange' );
};

ve.init.mw.CXTarget.prototype.enablePublishButton = function () {
	if ( this.translation.hasTranslatedSections() ) {
		this.publishButton.setDisabled( false );
	}
};

/**
 * Translation restore event handler
 */
ve.init.mw.CXTarget.prototype.onTranslationRestore = function () {
	if ( mw.Title.newFromText( this.pageName ) ) {
		this.enablePublishButton();
	}

	// Update publish settings namespace choice
	this.updateNamespace();
};

/**
 * Call this when translation editor is ready.
 */
ve.init.mw.CXTarget.prototype.onSurfaceReady = function () {
	// Update namespace tools
	this.updateNamespace();
	// Get ready with the translation of first section.
	this.prefetchTranslationForSection( 0 );

	if ( this.translation.hasTranslatedSections() ) {
		this.targetSurface.$element.addClass( 've-ui-cxTargetSurface--non-empty' );
	}
};

/**
 * Call this whenever something changes in the translation that requires saving.
 */
ve.init.mw.CXTarget.prototype.onChange = function () {
	if ( mw.Title.newFromText( this.pageName ) && !this.errorsInTranslation ) {
		this.publishButton.setDisabled( false );
	}
	this.translationView.clearMessages();
};

/**
 * Target namespace change handler
 *
 * @param {number} namespaceId
 */
ve.init.mw.CXTarget.prototype.onPublishNamespaceChange = function ( namespaceId ) {
	this.publishNamespace = namespaceId;
	const isSectionTranslation = this.translationView.targetColumn.isSectionTranslation();

	if ( !isSectionTranslation ) {
		const newTitle = mw.cx.getTitleForNamespace( this.pageName, namespaceId );
		// Setting title in targetColumn will take care of necessary event firing for title change.
		this.translationView.targetColumn.setTitle( newTitle );
		mw.log( '[CX] Target title changed to ' + newTitle );
	}

	this.emitNamespaceChange( namespaceId );
};

/**
 * @param {number} namespaceId
 *
 * @fires namespaceChange
 */
ve.init.mw.CXTarget.prototype.emitNamespaceChange = function ( namespaceId ) {
	this.emit( 'namespaceChange', namespaceId );
};

/**
 * This method is called by "updateNamespace" method to override the current value
 * of "publishNamespace" property, based on the prefix of target title of the article.
 * It is only used for article translations, not section translations.
 */
ve.init.mw.CXTarget.prototype.setPublishNameSpaceByPageTitle = function () {
	const titleObj = mw.Title.newFromText( this.pageName );
	this.publishNamespace = titleObj ? titleObj.getNamespaceId() : mw.cx.getDefaultTargetNamespace();
};

/**
 * Called in several places to update the namespace based on the page title for article translations,
 * and also update the state of the tools of the "publish" toolbar
 *
 * @return void
 */
ve.init.mw.CXTarget.prototype.updateNamespace = function () {
	const isSectionTranslation = this.translationView.targetColumn.isSectionTranslation();
	// this method ("updateNamespace") is called in several places, leading to namespace override
	// on several occasions (e.g. "onPublishButtonClick"), which can be undesired for section translations.
	// To avoid undesired behaviour we only limit this override to page translations.
	if ( !isSectionTranslation ) {
		this.setPublishNameSpaceByPageTitle();
	}
	if ( this.publishToolbar ) {
		this.publishToolbar.updateToolState();
	}
};

ve.init.mw.CXTarget.prototype.getPublishNamespace = function () {
	return this.publishNamespace;
};

/**
 * @fires publish
 */
ve.init.mw.CXTarget.prototype.onPublishButtonClick = function () {
	if ( !this.checkIfUserCanPublish() ) {
		return;
	}
	// Disable the trigger button
	this.publishButton.setDisabled( true )
		.setTitle( mw.msg( 'cx-publish-button-publishing' ) );
	this.targetSurface.setReadOnly( true );
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', true );
	this.emit( 'publish' );
	this.updateNamespace();
};

/**
 * @return {boolean}
 */
ve.init.mw.CXTarget.prototype.checkIfUserCanPublish = function () {
	const userPermissionChecker = new mw.cx.UserPermissionChecker(
		this,
		this.translationView,
		this.translation
	);

	return userPermissionChecker.checkIfUserCanPublish();
};

ve.init.mw.CXTarget.prototype.attachToolbar = function () {
	this.translationView.toolsColumn.editingToolbarContainer.$element.append(
		this.getToolbar().$element
			.addClass( 'oo-ui-toolbar-narrow' ) // Quick fix to avoid overflowing toolbar.
	);

	ve.ui.CXTranslationToolbar.static.registerTools( this.MTManager ).then( function () {
		const mtToolbar = new ve.ui.CXTranslationToolbar();
		mtToolbar.setup( this.constructor.static.translationToolbarGroups, this.targetSurface );
		this.translationView.toolsColumn.mtToolbarContainer.$element.append( mtToolbar.$element );
		mtToolbar.initialize();
		this.mtToolbar = mtToolbar;
	}.bind( this ) );
};

/**
 * @param {ve.dm.Transaction} transaction
 * @fires contentChange
 */
ve.init.mw.CXTarget.prototype.onDocumentTransact = function ( transaction ) {
	this.emit( 'contentChange' );
	this.debounceAlignSectionPairs();

	/** @type {ve.dm.Document} */
	const docModel = this.targetSurface.getModel().getDocument();
	const changedRange = transaction.getModifiedRange( docModel, { includeInternalList: true } );
	if ( !changedRange ) {
		return;
	}
	const changedNode = docModel.getBranchNodeFromOffset( changedRange.start );
	let changedSectionNode;
	if ( changedNode ) {
		changedSectionNode = changedNode.findParent( ve.dm.CXSectionNode );
	}
	if ( changedSectionNode ) {
		changedSectionNode.emitSectionChange();
	} else {
		// In case of references, the node affected is internal list item.
		// It is possible that the reference is used in multiple sections too.
		// Register change to all sections.
		docModel.getNodesByType( 'cxSection' ).forEach( function ( section ) {
			section.emitSectionChange();
		} );
	}
};

ve.init.mw.CXTarget.prototype.alignSectionPairs = function () {
	const sourceDocumentNode = this.sourceSurface.getView().getDocument().getDocumentNode();
	const targetDocumentNode = this.targetSurface.getView().getDocument().getDocumentNode();

	// This method can be called before restoration is complete and all nodes are attached
	// to the DOM (e.g. via mw.cx.ui.TargetColumn#setTitle). If so, skip alignment.
	if (
		!document.contains( sourceDocumentNode.$element[ 0 ] ) ||
		!document.contains( targetDocumentNode.$element[ 0 ] )
	) {
		return;
	}

	this.translationView.alignTitles();

	const sourceOffsetTop = sourceDocumentNode.$element.offset().top;
	const targetOffsetTop = targetDocumentNode.$element.offset().top;
	const documentNodeChildren = sourceDocumentNode.getChildren();

	let articleNode;
	for ( let i = 0; i < documentNodeChildren.length; i++ ) {
		if ( documentNodeChildren[ i ].getType() === 'article' ) {
			articleNode = documentNodeChildren[ i ];
			break;
		}
	}

	if ( !articleNode ) {
		mw.log.error( '[CX] Fatal: articleNode not found in documentNode' );
		return;
	}

	const alignSectionPair = this.translationView.constructor.static.alignSectionPair;
	// Save the scroll position. The alignment openration need to reset the heights
	// of sections. If the asynchronous content changes from templates happen
	// during that time, we will have a different scroll position at the end
	// of this alignment. So we lock the scroll position.
	const scrollPosition = $( this.getElementWindow() ).scrollTop();
	articleNode.getChildren().forEach( function ( node ) {
		let sectionNumber;
		const element = node.$element[ 0 ];
		const id = element && element.id;
		const match = id && id.match( /^cxSourceSection([0-9]+)$/ );

		if ( match ) {
			sectionNumber = +match[ 1 ];
			alignSectionPair( sourceOffsetTop, targetOffsetTop, sectionNumber );
		} else {
			mw.log.warn( '[CX] Invalid source section ' + id + ' found. Alignment may go wrong' );
		}
	} );
	// Restore scroll position
	$( this.getElementWindow() ).scrollTop( scrollPosition );
};

/**
 * Get the jQuery element for the given source section id.
 *
 * @param {string} sectionId Section id. E.g. cxSourceSection15 or cxTargetSection15
 * @return {jQuery} Source section element
 */
ve.init.mw.CXTarget.prototype.getSourceSectionElement = function ( sectionId ) {
	const sectionNumber = mw.cx.getSectionNumberFromSectionId( sectionId );
	const sourceId = 'cxSourceSection' + sectionNumber;
	return this.sourceSurface.$element.find( '#' + sourceId );
};

/**
 * Get the source node for the given section id. Accepts section id for source or target.
 *
 * @param {string} sectionId Section id. Example cxSourceSection15 or cxTargetSection15
 * @return {ve.dm.CXSectionNode}
 */
ve.init.mw.CXTarget.prototype.getSourceSectionNode = function ( sectionId ) {
	return this.getSourceSectionElement( sectionId ).data( 'view' ).getModel();
};

/**
 * Get the translation node for the given section id. Accepts section id of source or target.
 *
 * @param  {string} sectionId Section id. Example cxSourceSection15 or cxTargetSection15
 * @return {ve.dm.CXSectionNode|null}
 */
ve.init.mw.CXTarget.prototype.getTargetSectionNode = function ( sectionId ) {
	const sectionNumber = mw.cx.getSectionNumberFromSectionId( sectionId );
	const targetId = 'cxTargetSection' + sectionNumber;
	const view = this.targetSurface.$element.find( '#' + targetId ).data( 'view' );
	return view ? view.getModel() : null;
};

/**
 * Get the content editable node for the given section number. Accepts section id for target.
 *
 * @param {string} sectionNumber Section number. Example 4, 5 etc.
 * @return {ve.ce.CXSectionNode|null}
 */
ve.init.mw.CXTarget.prototype.getTargetSectionElementFromSectionNumber = function ( sectionNumber ) {
	const targetId = 'cxTargetSection' + sectionNumber;
	const view = this.targetSurface.$element.find( '#' + targetId ).data( 'view' );

	return view || null;
};

/**
 * Get the translation node for the given section number. Accepts section id of source or target.
 *
 * @param  {string} sectionNumber Section number. Example 4, 5 etc.
 * @return {ve.dm.CXSectionNode|null}
 */
ve.init.mw.CXTarget.prototype.getTargetSectionNodeFromSectionNumber = function ( sectionNumber ) {
	const view = this.getTargetSectionElementFromSectionNumber( sectionNumber );
	return view ? view.getModel() : null;
};

/**
 * Handle clicks for placeholder sections.
 *
 * @param {ve.ce.CXPlaceholderNode} placeholder
 */
ve.init.mw.CXTarget.prototype.onDocumentActivatePlaceholder = function ( placeholder ) {
	const model = placeholder.getModel();
	const cxid = model.getAttribute( 'cxid' );

	this.targetSurface.$element.addClass( 've-ui-cxTargetSurface--non-empty' );

	model.emit( 'beforeTranslation' );
	this.MTManager.getPreferredProvider().then( function ( provider ) {
		return this.changeContentSource( model, null, provider );
	}.bind( this ) ).fail( function () {
		mw.notify( mw.msg( 'cx-auto-failed' ) );
		return this.MTManager.getDefaultNonMTProvider().then( function ( provider ) {
			return this.changeContentSource( model, null, provider );
		}.bind( this ) );
	}.bind( this ) ).always( function () {
		const $sourceElement = this.getSourceSectionElement( cxid );
		$sourceElement.removeClass( 'cx-section-highlight' );
		const sectionNode = this.getTargetSectionNode( cxid );
		if ( sectionNode ) {
			sectionNode.emit( 'afterTranslation' );
			this.prefetchTranslationForSection( sectionNode.getSectionNumber() + 1 );
		} else {
			mw.log.error( '[CX] No model found after translation for ' + cxid );
		}
	}.bind( this ) );
};

ve.init.mw.CXTarget.prototype.onPublishCancel = function () {
	this.publishButton.setDisabled( false ).setTitle( mw.msg( 'cx-publish-button' ) );
	this.targetSurface.setReadOnly( false );
	this.updateNamespace();
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', false );
};

ve.init.mw.CXTarget.prototype.onPublishSuccess = function ( targetTitle, targetURL ) {
	const messageAttributes = {
		href: targetURL,
		target: '_blank'
	};
	this.translationView.showMessage(
		'success',
		mw.message( 'cx-publish-page-success',
			$( '<a>' ).attr( messageAttributes ).text( targetTitle )
		)
	);
	this.publishButton.setDisabled( true ).setTitle( mw.msg( 'cx-publish-button' ) );
	this.targetSurface.setReadOnly( false );
	this.updateNamespace();
	this.translationView.contentContainer.$element.toggleClass( 'oo-ui-widget-disabled', false );
};

ve.init.mw.CXTarget.prototype.onPublishFailure = function ( errorMessage ) {
	this.translationView.showMessage( 'error', errorMessage );
	this.onPublishCancel();
};

/**
 * @param {boolean} hasErrors True if any of the issues is error, false if all are warnings.
 */
ve.init.mw.CXTarget.prototype.onTranslationIssues = function ( hasErrors ) {
	// If there used to be errors, which are now gone, enable publish button
	if ( this.errorsInTranslation && !hasErrors ) {
		this.enablePublishButton();
	}
	this.errorsInTranslation = hasErrors;
};

/**
 * Set the section content to the given content.
 *
 * @param {ve.dm.CXSectionNode|ve.dm.CXPlaceholderNode} section Section model
 * @param {string} content
 * @param {string} source Original content source
 */
ve.init.mw.CXTarget.prototype.setSectionContent = function ( section, content, source ) {
	const surfaceModel = this.getSurface().getModel();
	const doc = surfaceModel.getDocument();

	/**
	 * Fix internal list indexes for duplicated references in a newFromDocumentInsertion transaction.
	 *
	 * This finds references inserted by the transaction that are duplicates of references already
	 * present in the document, and changes them to point to the existing internal list item.
	 *
	 * This is a super hacky way to prevent errors in VE due to name collisions for duplicated
	 * references.
	 *
	 * @param {ve.dm.Transaction} refTx Transaction generated by newFromDocumentInsertion()
	 */
	function deduplicateReferences( refTx ) {
		for ( let o = 0; o < refTx.operations.length; o++ ) {
			if ( refTx.operations[ o ].type !== 'replace' ) {
				continue;
			}
			for ( let i = 0; i < refTx.operations[ o ].insert.length; i++ ) {
				const element = refTx.operations[ o ].insert[ i ];
				if ( element.type !== 'mwReference' ) {
					continue;
				}
				// Find any existing references this reference is a duplicate of
				const nodeGroup = doc.getInternalList().getNodeGroup( element.attributes.listGroup );
				const kinNodes = nodeGroup && nodeGroup.keyedNodes[ element.attributes.listKey ];
				if ( kinNodes && kinNodes.length > 0 ) {
					// This reference is a duplicate. Point it to the existing internal list item
					element.attributes.listIndex = kinNodes[ 0 ].getAttribute( 'listIndex' );
					// Only the first reference in the group should have contentsUsed=true
					element.attributes.contentsUsed = false;
				}
			}
		}
	}

	const pasteDoc = ve.dm.converter.getModelFromDom( ve.createDocumentFromHtml( content ) );
	const docLen = pasteDoc.getInternalList().getListNode().getOuterRange().start;

	let fragment = surfaceModel.getLinearFragment( section.getOuterRange(), true /* noAutoSelect */ );
	fragment.insertContent( [
		{ type: 'cxSection', attributes: { style: 'section', cxid: section.getSectionId(), cxsource: source } },
		// Put a temporary paragraph inside the section so the cursor has somewhere
		// sensible to go, preventing scrollCursorIntoView from triggering a jump
		{ type: 'paragraph' },
		{ type: '/paragraph' },
		{ type: '/cxSection' }
	] );
	fragment = fragment
		.collapseToStart().adjustLinearSelection( 1, 3 )
		.removeContent();

	const tx = ve.dm.TransactionBuilder.static.newFromDocumentInsertion(
		doc,
		fragment.getSelection().getCoveringRange().start,
		pasteDoc,
		new ve.Range( 1, docLen - 1 )
	);
	// HACK: modify the internal list indexes of any reused references being inserted to avoid errors in VE
	// If we don't do this, a reused reference will bring along a second copy of its internal list item,
	// and VE will crash because there are two references with the same name but pointing to different
	// internal list items.
	// We have to perform these modifications after generating the transaction, because if we do it before,
	// our modified indexes will be corrupted by the remapping step in newFromDocumentInsertion().
	deduplicateReferences( tx );
	const newRange = tx.getModifiedRange( doc );
	surfaceModel.change( tx, new ve.dm.LinearSelection( newRange ) );

	// Select first content offset within new content
	const newCursorRange = new ve.Range( surfaceModel.getDocument().data.getNearestContentOffset( newRange.start, 1 ) );
	if ( newRange.containsRange( newCursorRange ) ) {
		surfaceModel.setLinearSelection( newCursorRange );
	}

	// Restore scroll top
	const scrollTop = this.getSurface().view.$window.scrollTop();
	if ( this.getSurface().view.$window.scrollTop() !== scrollTop ) {
		this.getSurface().view.$window.scrollTop( scrollTop );
		mw.log( '[CX] Scroll position restored to ' + scrollTop );
	}
};

/**
 * @inheritDoc
 */
ve.init.mw.CXTarget.prototype.getContentApi = function ( doc, options ) {
	doc = doc || this.targetSurface.getModel().getDocument();
	return this.siteMapper.getApi( doc.getLang(), options );
};

/**
 * @inheritDoc
 */
ve.init.mw.CXTarget.prototype.getPageName = function ( doc ) {
	doc = doc || this.targetSurface.getModel().getDocument();
	return doc.getLang() === this.translation.getSourceLanguage() ?
		this.translation.getSourceTitle() : this.translation.getTargetTitle();
};

/**
 * Copied from SX code: /app/src/utils/templateHelper.js
 * Given an Element node, this method returns a boolean
 * indicating whether this node is a transclusion node or not.
 *
 * @param {HTMLElement} node
 * @return {boolean}
 */
const isTransclusionNode = ( node ) =>
	!!(
		node.attributes.about ||
				( node.attributes.typeof &&
						node
							.getAttribute( 'typeof' )
							.match( /(^|\s)(mw:Transclusion|mw:Placeholder)\b/ ) )
	);

/**
 * Copied and adjusted from SX code: /app/src/wiki/cx/models/subSection.js
 *
 * @param {HTMLElement} subSectionNode
 * @return {HTMLElement}
 */
const getTransclusionNode = ( subSectionNode ) => {
	return Array.from( subSectionNode.children ).find( ( node ) =>
		isTransclusionNode( node )
	);
};

/**
 * Translate and adapt the source section for the given section id.
 *
 * @param {string} sectionId Section ID
 * @param {string} provider Machine translation privider
 * @param {boolean} noCache If true, do a fresh translation from server
 * @return {jQuery.Promise}
 */
ve.init.mw.CXTarget.prototype.translateSection = function ( sectionId, provider, noCache ) {
	let mode = ve.dm.Converter.static.CLIPBOARD_MODE;
	const sourceNodeModel = this.getSourceSectionNode( sectionId );
	const sectionNumber = sourceNodeModel.getSectionNumber();

	let mtRequest = OO.getProp( this.translationRequestCache, sectionNumber, provider );
	if ( !noCache && mtRequest ) {
		return mtRequest;
	}

	// Convert DOM to node, preserving full internal list
	// Use clipboard mode to ensure reference body is outputted
	if ( OO.getProp( sourceNodeModel, 'children', 0, 'type' ) === 'mwReferencesList' ) {
		// If the section is referencelist, we don't need to have the reference body resolved in it.
		// The reflist template wrapping of mw:Extension/refs will be lost in the
		// clipboard mode too. See T220491
		mode = ve.dm.Converter.static.PARSER_MODE;
	}

	// TODO: Extend converter and make a new TRANSLATION mode
	ve.dm.converter.isForTranslation = true;
	const sourceNode = ve.dm.converter.getDomFromNode( sourceNodeModel, mode ).body.children[ 0 ];
	ve.dm.converter.isForTranslation = false;

	const transclusionNode = getTransclusionNode( sourceNode );
	if ( transclusionNode ) {
		sourceNode.innerHTML = transclusionNode.outerHTML;
	}

	/**
	 * @param {HTMLElement} section
	 * @return {HTMLElement}
	 */
	function restructure( section ) {
		section = section.cloneNode( true );
		section.removeAttribute( 'rel' );
		section.id = 'cxTargetSection' + sectionNumber;
		// TODO: it's horrible that id attributes get duplicated
		// $( section ).find( '[id]' ).each( function ( i, node ) {
		//  node.setAttribute( 'id', 'cx' + node.getAttribute( 'id' ) );
		// } );
		return section;
	}

	mtRequest = this.MTService.translate( restructure( sourceNode ).outerHTML, provider );
	// Set the request in the cache
	OO.setProp( this.translationRequestCache, sectionNumber, provider, mtRequest );

	return mtRequest;
};

/**
 * Change content source for given target section.
 *
 * This handles caching of previous content when switching back and forth.
 * This might be redundant with undo/redo.
 *
 * @param {ve.dm.CXSectionNode|ve.dm.CXPlaceholderNode} section
 * @param {string|null} previousProvider
 * @param {string} newProvider
 * @param {Object} options
 * @cfg {boolean} noCache Do not use cached version
 * @return {jQuery.promise}
 * @fires changeContentSource
 */
ve.init.mw.CXTarget.prototype.changeContentSource = function (
	section,
	previousProvider,
	newProvider,
	options
) {
	options = options || {};
	const cxid = section.getSectionId();
	ve.dm.converter.isForTranslation = true;
	const html = ve.dm.converter.getDomFromNode( section, ve.dm.Converter.static.CLIPBOARD_MODE ).body.children[ 0 ].outerHTML;
	ve.dm.converter.isForTranslation = false;

	if ( previousProvider !== null ) {
		OO.setProp( this.contentSourceCache, cxid, previousProvider, html );
	}

	if ( !options.noCache ) {
		const cachedContent = OO.getProp( this.contentSourceCache, cxid, newProvider );

		if ( cachedContent ) {
			this.setSectionContent( section, cachedContent, newProvider );
			return $.Deferred().resolve().promise();
		}
	}

	return this.translateSection( cxid, newProvider, options.noCache ).then( function ( content ) {
		this.setSectionContent( section, content, newProvider );
		this.emit( 'changeContentSource', mw.cx.getSectionNumberFromSectionId( cxid ) );
	}.bind( this ) );
};

/**
 * Prefetch the translation for the given section. The API request is raised, and set it in the cache.
 * Nothing done with the content.
 *
 * @param {number} sectionNumber
 */
ve.init.mw.CXTarget.prototype.prefetchTranslationForSection = function ( sectionNumber ) {
	const $section = this.sourceSurface.$element.find( '#cxSourceSection' + sectionNumber );
	if ( $section.length ) {
		this.MTManager.getPreferredProvider().then( function ( provider ) {
			this.translateSection( $section.prop( 'id' ), provider );
		}.bind( this ) );
	}
};

/* Registration */

ve.init.mw.targetFactory.register( ve.init.mw.CXTarget );
