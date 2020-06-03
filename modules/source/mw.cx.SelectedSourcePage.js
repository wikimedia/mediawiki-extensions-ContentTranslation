'use strict';

/*!
 * SelectedSourcePage - widget that displays selected page info:
 * - title
 * - image
 * - number of different language versions
 * - weekly page views count
 * and language selector that allows to change source and target language before starting the translation.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

/**
 * SelectedSourcePage
 *
 * @class
 * @param {mw.cx.SiteMapper} siteMapper
 * @param {Object} config
 * @cfg {Function} [onDiscard] Callback triggered after selected source page is discarded
 */
mw.cx.SelectedSourcePage = function ( siteMapper, config ) {
	this.siteMapper = siteMapper;
	this.config = $.extend( {
		campaign: new mw.Uri().query.campaign
	}, config );

	this.onDiscard = this.config.onDiscard;
	this.sourceTitle = null;
	this.targetTitle = null;
	// this.sourcePageTitles are titles of the selected source page in different languages
	this.sourcePageTitles = {};

	this.$element = null;

	this.$image = null;
	this.$link = null;
	this.languageCount = null;
	this.viewsCount = null;
	this.bookmarkButton = null;
	this.languageFilter = null;
	this.discardButton = null;
	this.startTranslationButton = null;
	this.$messageBar = null;
	this.$messageText = null;

	this.alreadyFavorite = false;

	this.init();
};

mw.cx.SelectedSourcePage.prototype.init = function () {
	this.validator = new mw.cx.ContentTranslationValidator( this.siteMapper );

	this.languageFilter = new mw.cx.ui.LanguageFilter( {
		onSourceLanguageChange: this.sourceLanguageChangeHandler.bind( this ),
		onTargetLanguageChange: this.targetLanguageChangeHandler.bind( this )
	} );
	this.bookmarkButton = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'bookmarkOutline'
	} );
	this.discardButton = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'close',
		classes: [ 'cx-selected-source-page__discard' ]
	} );

	this.render();
	this.listen();
};

mw.cx.SelectedSourcePage.prototype.render = function () {
	var $linkContainer, $container, $info, $metrics, $license, $actions,
		translateButtonLabel, languageCountIcon;

	this.$image = $( '<div>' )
		.addClass( 'cx-selected-source-page__image' );

	this.$link = $( '<a>' )
		.addClass( 'cx-selected-source-page__link' )
		.prop( {
			lang: this.languageFilter.getSourceLanguage(),
			dir: $.uls.data.getDir( this.languageFilter.getSourceLanguage() )
		} );
	$linkContainer = $( '<span>' )
		.append( this.$link );

	languageCountIcon = new OO.ui.IconWidget( {
		icon: 'language',
		classes: [ 'cx-selected-source-page__language-count' ]
	} );
	this.languageCount = new OO.ui.LabelWidget();
	this.viewsCount = new OO.ui.LabelWidget( {
		classes: [ 'cx-selected-source-page__views-count' ]
	} );
	$metrics = $( '<div>' )
		.addClass( 'cx-selected-source-page__metrics' )
		.append( languageCountIcon.$element, this.languageCount.$element, this.viewsCount.$element );

	$info = $( '<div>' )
		.addClass( 'cx-selected-source-page__info' )
		.append( $linkContainer, $metrics );

	$container = $( '<div>' )
		.addClass( 'cx-selected-source-page__container' )
		.append(
			this.$image,
			$info,
			$( '<div>' ).addClass( 'cx-selected-source-page__spacer' ),
			this.bookmarkButton.$element,
			this.languageFilter.$element,
			this.discardButton.$element
		);

	this.$messageBar = $( '<div>' )
		.addClass( 'cx-selected-source-page__messagebar' );
	this.$messageText = $( '<span>' )
		.addClass( 'cx-selected-source-page__messagebar-text' );
	this.$messageBar
		.append( this.$messageText )
		.hide();

	translateButtonLabel = mw.msg( 'cx-selected-source-page-start-translation-button' );
	this.startTranslationButton = new OO.ui.ButtonWidget( {
		flags: [ 'primary', 'progressive' ],
		label: translateButtonLabel
	} );

	$license = $( '<div>' )
		.addClass( 'cx-selected-source-page__license' )
		.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

	$license.find( 'a' ).prop( 'target', '_blank' );

	$actions = $( '<div>' )
		.addClass( 'cx-selected-source-page__actions' )
		.append( this.startTranslationButton.$element );

	this.$element = $( '<div>' )
		.addClass( 'cx-selected-source-page' )
		.append( $container, this.$messageBar, $license, $actions );
};

mw.cx.SelectedSourcePage.prototype.hide = function () {
	this.$element.remove();
};

mw.cx.SelectedSourcePage.prototype.focusStartTranslationButton = function () {
	this.startTranslationButton.$button.trigger( 'focus' );
};

mw.cx.SelectedSourcePage.prototype.listen = function () {
	this.startTranslationButton.connect( this, { click: 'startPageInCX' } );
	this.discardButton.connect( this, { click: 'discardDialog' } );

	this.bookmarkButton.connect( this, { click: 'onBookmarkButtonClick' } );
};

/**
 * Change "favorite" button icon to filled bookmark
 */
mw.cx.SelectedSourcePage.prototype.setFilledIcon = function () {
	this.bookmarkButton.setFlags( 'progressive' );
	this.bookmarkButton.setIcon( 'bookmark' );
};

/**
 * Change "favorite" button icon to bookmark outline
 */
mw.cx.SelectedSourcePage.prototype.setOutlineIcon = function () {
	this.bookmarkButton.clearFlags();
	this.bookmarkButton.setIcon( 'bookmarkOutline' );
};

/**
 * Change "favorite" button icon to filled bookmark and register mouse events
 */
mw.cx.SelectedSourcePage.prototype.toggleFilledIcon = function () {
	this.setFilledIcon();
	this.bookmarkButton.$element.on( {
		mouseenter: this.setOutlineIcon.bind( this ),
		mouseleave: this.setFilledIcon.bind( this )
	} );
};

/**
 * Change "favorite" button icon to bookmark outline and register mouse events
 */
mw.cx.SelectedSourcePage.prototype.toggleOutlineIcon = function () {
	this.setOutlineIcon();
	this.bookmarkButton.$element.on( {
		mouseenter: this.setFilledIcon.bind( this ),
		mouseleave: this.setOutlineIcon.bind( this )
	} );
};

mw.cx.SelectedSourcePage.prototype.onBookmarkButtonClick = function () {
	var params, api = new mw.Api();

	params = {
		assert: 'user',
		action: 'cxsuggestionlist',
		listname: 'cx-suggestionlist-favorite',
		listaction: this.alreadyFavorite ? 'remove' : 'add',
		titles: this.sourceTitle,
		from: this.languageFilter.sourceLanguage,
		to: this.languageFilter.targetLanguage
	};

	api.postWithToken( 'csrf', params ).done( function ( response ) {
		if ( response.cxsuggestionlist.result !== 'success' ) {
			return;
		}

		if ( this.alreadyFavorite ) {
			mw.notify( mw.msg( 'cx-favorite-removed' ) );
			this.toggleOutlineIcon();
		} else {
			mw.notify( this.getNotifyMessage() );
			this.toggleFilledIcon();
		}
		this.alreadyFavorite = !this.alreadyFavorite;
	}.bind( this ) );
};

/**
 * Get message to show to user as notification after adding an article to "For later",
 * depending on currently selected list. See T188634#5384861
 * There's no reference to dashboard and its suggestion/translation lists,
 * therefore we query DOM in order to get selected list.
 *
 * @return {string} Messsage to notify user after keeping an article for later.
 */
mw.cx.SelectedSourcePage.prototype.getNotifyMessage = function () {
	var selectedOptionWidget = $( '.translation-filter .oo-ui-optionWidget-selected' ).data(),
		selectedView = selectedOptionWidget && selectedOptionWidget.ooUiOptionWidget;

	return selectedView && selectedView.getData() === 'suggestions' ?
		mw.msg( 'cx-favorite-added-for-later' ) :
		mw.msg( 'cx-favorite-added-for-later-detail' );
};

mw.cx.SelectedSourcePage.prototype.discardDialog = function () {
	this.$messageBar.hide(); // Hide any previous messages

	// Discard selected source image
	this.$image
		.removeAttr( 'style' )
		.removeClass( 'oo-ui-iconElement-icon' )
		.attr( 'class', function ( i, className ) {
			return className.replace( /oo-ui-icon-\S+/, '' );
		} );

	this.alreadyFavorite = false;
	this.bookmarkButton.toggle( true );
	this.setOutlineIcon();
	// Reset source titles, as there is no selected source
	this.sourcePageTitles = {};
	// Reset source and target ULS to show all source and target languages
	this.languageFilter.fillSourceLanguages( null, true );
	this.languageFilter.fillTargetLanguages( null, true );

	$( 'html' ).trigger( 'click' ); // Not sure why click doesn't pass through OOUI button to HTML element
	// where listener is closing the ULS on outside clicks. Maybe some OOUI change?

	if ( this.onDiscard ) {
		this.onDiscard();
	}
};

/**
 * Change the title of selected source page to title in other language
 *
 * @param {string} language Language code
 */
mw.cx.SelectedSourcePage.prototype.changeSelectedSourceTitle = function ( language ) {
	var href, title = this.sourcePageTitles[ language ];

	if ( title ) {
		href = this.siteMapper.getPageUrl( language, title );
		this.$link.prop( {
			href: href,
			title: title,
			text: title
		} ).toggleClass( 'cx-selected-source-page__link--long', title.length >= 60 );
		this.sourceTitle = title;
	}
};

/**
 * Handles source language change.
 *
 * @param {string} language Language code.
 */
mw.cx.SelectedSourcePage.prototype.sourceLanguageChangeHandler = function ( language ) {
	this.changeSelectedSourceTitle( language );
	this.getPageInfo( this.sourcePageTitles[ language ] ).done( function ( data ) {
		this.renderPageViews( data.pageviews );
	}.bind( this ) ).fail( function ( error ) {
		mw.log( 'Error getting page info for ' + this.sourcePageTitles[ language ] + '. ' + error );
	}.bind( this ) );

	this.initBookmark();
	this.check();
};

mw.cx.SelectedSourcePage.prototype.setSourceTitle = function ( sourceTitle ) {
	this.sourceTitle = sourceTitle;
};

/**
 * Handles target language change.
 *
 * @param {string} language Language code.
 */
mw.cx.SelectedSourcePage.prototype.targetLanguageChangeHandler = function () {
	this.initBookmark();
	this.check();
};

mw.cx.SelectedSourcePage.prototype.setTargetTitle = function ( targetTitle ) {
	this.targetTitle = targetTitle;
};

/**
 * Sets all the info for selected page
 *
 * @param {string} pageTitle
 * @param {string} href
 * @param {Object} config
 * @cfg {string} sourceLanguage Source language code
 * @cfg {string} targetLanguage Target language code
 * @cfg {Object} [params] Parameters used for API call to get page info
 * @cfg {string} [imageUrl] URL for selected source page image
 * @cfg {string} [imageIcon] OOUI class of selected page placeholder icon
 * @cfg {number} [numOfLanguages] Number of different language versions for selected source page
 */
mw.cx.SelectedSourcePage.prototype.setData = function ( pageTitle, href, config ) {
	var params;
	this.languageFilter.setSourceLanguageNoChecks( config.sourceLanguage );
	this.languageFilter.setTargetLanguageNoChecks( config.targetLanguage );

	params = $.extend( {
		prop: [ 'langlinks', 'pageviews' ],
		redirects: true,
		lllimit: 'max'
	}, config.params );

	if ( config.imageUrl ) {
		this.$image.css( 'background-image', 'url( ' + config.imageUrl + ')' );
	} else {
		// eslint-disable-next-line mediawiki/class-doc
		this.$image.addClass( 'oo-ui-iconElement-icon oo-ui-icon-' + config.imageIcon );
	}

	this.$link.prop( {
		href: href,
		title: pageTitle,
		target: '_blank',
		text: pageTitle
	} );
	this.$link.toggleClass( 'cx-selected-source-page__link--long', pageTitle.length >= 60 );

	this.getPageInfo( pageTitle, params ).done( function ( data ) {
		var langCode, title, languagesPageExistsIn, languageDecorator, numOfLanguages;

		this.renderPageViews( data.pageviews );

		numOfLanguages =
			config.numOfLanguages ||
			( OO.getProp( data, 'langlinkscount' ) || 0 ) + 1;
		this.languageCount.setLabel( mw.language.convertNumber( numOfLanguages ) );

		// Reset source page titles
		this.sourcePageTitles = {};
		// Extract results data and create sourcePageTitles mapping
		if ( data.langlinks ) {
			data.langlinks.forEach( function ( element ) {
				langCode = element.lang;
				title = element[ '*' ];

				this.sourcePageTitles[ langCode ] = title;
			}, this );
		}
		// Include chosen source page title (not returned by langlinks API)
		this.sourcePageTitles[ this.languageFilter.getSourceLanguage() ] = pageTitle;

		languagesPageExistsIn = Object.keys( this.sourcePageTitles );
		languageDecorator = function ( $language, languageCode ) {
			if ( languagesPageExistsIn.indexOf( languageCode ) < 0 ) {
				$language.css( 'font-weight', 'bold' );
			}
		};

		this.languageFilter.fillSourceLanguages( languagesPageExistsIn, true, {
			ulsPurpose: 'cx-selectedpage-source'
		} );
		this.languageFilter.fillTargetLanguages( null, true, {
			ulsPurpose: 'cx-selectedpage-target',
			languageDecorator: languageDecorator
		} );
		this.languageFilter.setValidSourceLanguages( languagesPageExistsIn );
	}.bind( this ) ).fail( function ( error ) {
		mw.log( 'Error getting page info for ' + pageTitle + '. ' + error );
	} );

	this.sourceTitle = pageTitle;
	this.initBookmark();
	this.check();
};

/**
 * Gets data for the selected page.
 * Gets pageviews by default, and langlinks if specified through optional params.
 *
 * @param {string} title Title of the page for which data is fetched.
 * @param {Object} [params] Optional parameter used for fetching additional source data.
 * @return {jQuery.Promise} Returns thenable promise, so langlinks can be processed if necessary.
 */
mw.cx.SelectedSourcePage.prototype.getPageInfo = function ( title, params ) {
	var api;

	if ( !title ) {
		throw new Error( 'Title is mandatory parameter' );
	}

	api = this.siteMapper.getApi( this.languageFilter.getSourceLanguage() );
	params = $.extend( {
		action: 'query',
		// If new prop array is provided in params, this one is overridden
		prop: [ 'pageviews' ],
		titles: title,
		pvipdays: 7
	}, params );

	return api.get( params ).then( function ( data ) {
		var pageId,
			page = OO.getProp( data, 'query', 'pages' );

		if ( !page ) {
			return $.Deferred().reject( 'No page data' ).promise();
		}

		// Only one title was passed in titles params, so we expect one result
		pageId = Object.keys( page )[ 0 ];
		if ( pageId === '-1' ) {
			// Page does not exist
			return $.Deferred().reject( 'Requested page does not exist' ).promise();
		}

		return page[ pageId ];
	}, function ( response ) {
		// In case of failure, fallback to all source and target languages
		this.sourcePageTitles = {};
		this.languageFilter.fillSourceLanguages( null, true );
		this.languageFilter.fillTargetLanguages( null, true );

		return $.Deferred().reject( 'Reason: ' + response ).promise();
	}.bind( this ) );
};

mw.cx.SelectedSourcePage.prototype.renderPageViews = function ( pageViewData ) {
	var date, pageViews = 0;

	if ( !pageViewData ) {
		return;
	}

	for ( date in pageViewData ) {
		pageViews += pageViewData[ date ];
	}

	this.viewsCount.setLabel(
		mw.msg( 'cx-selected-source-page-view-count', mw.language.convertNumber( pageViews ) )
	);
};

mw.cx.SelectedSourcePage.prototype.initBookmark = function () {
	this.alreadyFavorite = false;
	this.bookmarkButton.toggle( true );
	this.setOutlineIcon();

	this.isAlreadyFavorite(
		this.languageFilter.getSourceLanguage(),
		this.languageFilter.getTargetLanguage(),
		this.sourceTitle
	).then( function ( alreadyFavorite ) {
		this.alreadyFavorite = alreadyFavorite;

		if ( alreadyFavorite ) {
			this.toggleFilledIcon();
		} else {
			this.toggleOutlineIcon();
		}
	}.bind( this ) );
};

mw.cx.SelectedSourcePage.prototype.isAlreadyFavorite = function ( sourceLanguage, targetLanguage, title ) {
	var params,
		api = new mw.Api();

	params = {
		assert: 'user',
		formatversion: 2,
		action: 'cxsuggestionlist',
		listname: 'cx-suggestionlist-favorite',
		listaction: 'view',
		titles: title,
		from: sourceLanguage,
		to: targetLanguage
	};

	return api.postWithToken( 'csrf', params ).then( function ( response ) {
		return response.cxsuggestionlist.listaction;
	} );
};

/**
 * Start a new page translation in Special:CX.
 */
mw.cx.SelectedSourcePage.prototype.startPageInCX = function () {
	var targetTitle, originalSourceTitle, sourceLanguage, targetLanguage, siteMapper;

	siteMapper = this.siteMapper;
	sourceLanguage = this.languageFilter.getSourceLanguage();
	targetLanguage = this.languageFilter.getTargetLanguage();
	originalSourceTitle = this.sourceTitle;
	targetTitle = this.targetTitle || '';

	this.validator.isTitleExistInLanguage(
		sourceLanguage,
		originalSourceTitle
	).done( function ( sourceTitle ) {
		if ( targetTitle === '' ) {
			targetTitle = mw.cx.getTitleForNamespace(
				originalSourceTitle, mw.cx.getDefaultTargetNamespace()
			);
		}

		// Set CX token as cookie.
		siteMapper.setCXToken( sourceLanguage, targetLanguage, sourceTitle );

		location.href = siteMapper.getCXUrl(
			sourceTitle,
			targetTitle,
			sourceLanguage,
			targetLanguage,
			{ campaign: this.config.campaign }
		);
	}.bind( this ) );
};

/**
 * Checks selected source page for problems with chosen source and target language pair.
 */
mw.cx.SelectedSourcePage.prototype.check = function () {
	var sourceLanguage = this.languageFilter.getSourceLanguage(),
		targetLanguage = this.languageFilter.getTargetLanguage(),
		targetTitle = this.targetTitle || '',
		titleCheck, translationCheck;

	this.$messageBar.hide();

	// Whether the target title, if given, exists in the target wiki
	titleCheck = this.validator.isTitleExistInLanguage( targetLanguage, targetTitle );
	// Whether the source already has a translation linked via language links
	translationCheck = this.validator.isTitleConnectedInLanguages(
		sourceLanguage,
		targetLanguage,
		this.sourceTitle
	);

	$.when(
		translationCheck,
		titleCheck
	).done( function ( existingTranslation, existingTargetTitle ) {
		// If there is an existing translation and
		// the specified target title is in use
		if ( existingTranslation && existingTargetTitle ) {
			this.showPageExistsAndTitleInUseError(
				existingTranslation,
				existingTargetTitle,
				targetLanguage
			);
		} else if ( existingTranslation ) {
			// If there is just an existing translation
			this.showPageExistsError( existingTranslation, targetLanguage );
		} else if ( existingTargetTitle ) {
			// If the specified target title is in use
			this.showTitleInUseError( existingTargetTitle, targetLanguage );
		}

		// Page exists in target language
		if ( existingTranslation ) {
			// Hide bookmark button if page already exists
			this.bookmarkButton.toggle( false );
			this.setTargetTitle( existingTranslation );
		}
	}.bind( this ) );
};

/**
 * Shows error for target page existing and target title in use.
 *
 * @param {string} equivalentTargetPage the title of the existing page
 * @param {string} existingTargetTitle the title already in use
 * @param {string} targetLanguage
 */
mw.cx.SelectedSourcePage.prototype.showPageExistsAndTitleInUseError = function (
	equivalentTargetPage,
	existingTargetTitle,
	targetLanguage
) {
	var equivalentTargetPageLink, targetLanguageDisplay,
		existingTargetTitleLink, message;

	equivalentTargetPageLink = this.siteMapper.getPageUrl( targetLanguage, equivalentTargetPage );
	targetLanguageDisplay = $.uls.data.getAutonym( targetLanguage );

	existingTargetTitleLink = this.siteMapper.getPageUrl( targetLanguage, existingTargetTitle );

	message = mw.message(
		'cx-selected-source-page-error-page-and-title-exist',
		equivalentTargetPageLink,
		targetLanguageDisplay,
		existingTargetTitleLink
	);

	this.showMessage( message );
};

/**
 * Shows error for page already existing in target.
 *
 * @param {string} equivalentTargetPage the title of the existing page
 * @param {string} targetLanguage
 */
mw.cx.SelectedSourcePage.prototype.showPageExistsError = function ( equivalentTargetPage, targetLanguage ) {
	var equivalentTargetPageLink, targetLanguageDisplay, message;

	equivalentTargetPageLink = this.siteMapper.getPageUrl( targetLanguage, equivalentTargetPage );
	targetLanguageDisplay = $.uls.data.getAutonym( targetLanguage );

	message = mw.message(
		'cx-selected-source-page-error-page-exists',
		equivalentTargetPageLink, targetLanguageDisplay
	);

	this.showMessage( message );
};

/**
 * Shows error for title already in use in target wiki.
 *
 * @param {string} existingTargetTitle The title already in use
 * @param {string} targetLanguage
 */
mw.cx.SelectedSourcePage.prototype.showTitleInUseError = function ( existingTargetTitle, targetLanguage ) {
	var existingTargetTitleLink, message;

	existingTargetTitleLink = this.siteMapper.getPageUrl( targetLanguage, existingTargetTitle );

	message = mw.message(
		'cx-selected-source-page-error-title-in-use',
		existingTargetTitleLink
	);

	this.showMessage( message );
};

/**
 * Shows error message for dialog.
 *
 * @param {mw.Message|string} message the message to show
 */
mw.cx.SelectedSourcePage.prototype.showMessage = function ( message ) {
	if ( message instanceof mw.Message ) {
		this.$messageText.html( message.parse() );
	} else {
		this.$messageText.text( message );
	}

	this.$messageBar.find( 'a' )
		.attr( 'target', '_blank' );

	this.$messageBar.show();
};
