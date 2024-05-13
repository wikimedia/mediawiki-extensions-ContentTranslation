/*!
 * ContentTranslation extension - Translation listing in dashboard.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * CXTranslationList
 *
 * @class
 * @constructor
 * @extends mw.cx.DashboardList
 * @mixes OO.EventEmitter
 *
 * @param {jQuery} $container
 * @param {mw.cx.SiteMapper} siteMapper
 * @param {string} type
 */
mw.cx.CXTranslationList = function CXTranslationList( $container, siteMapper, type ) {
	this.type = type;

	this.translations = [];
	// sourceLanguages and targetLanguages are arrays of languages,
	// for which there are translation list items
	this.sourceLanguages = [];
	this.targetLanguages = [];

	this.promise = null;
	this.queryContinue = null;
	this.hasMore = true;

	// Parent constructor
	mw.cx.CXTranslationList.super.call( this, $container, siteMapper );

	// Mixin constructors
	OO.EventEmitter.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.CXTranslationList, mw.cx.DashboardList );
OO.mixinClass( mw.cx.CXTranslationList, OO.EventEmitter );

/* Methods */

/**
 * Get all the translations of given user.
 *
 * @return {jQuery.Promise}
 */
mw.cx.CXTranslationList.prototype.getTranslations = function () {
	const self = this,
		api = new mw.Api();

	if ( this.promise ) {
		// Avoid duplicate API requests.
		return this.promise;
	}

	if ( this.hasMore === false ) {
		return $.Deferred().resolve( [] );
	}

	const params = $.extend( {
		assert: 'user',
		list: 'contenttranslation',
		type: this.type,
		limit: 15
	}, this.queryContinue );

	this.promise = api.get( params ).then( function ( response ) {
		self.promise = null;
		self.queryContinue = response.continue;
		self.hasMore = !!response.continue;

		if ( response.query.contenttranslation.languages ) {
			self.languages = response.query.contenttranslation.languages;
		}

		// Remove unnecessary object wrapping to get plain list of objects
		return response.query.contenttranslation.translations.map( function ( e ) {
			return e.translation;
		} );
	} );

	return this.promise;
};

mw.cx.CXTranslationList.prototype.init = function () {
	// Parent method
	mw.cx.CXTranslationList.super.prototype.init.call( this, {
		canBeSame: true,
		canBeUndefined: true
	} );

	this.$headerContainer = $( '<div>' )
		.addClass( 'cx-translationlist__header' )
		.append(
			// The following messages are used here
			// * cx-translation-label-draft
			// * cx-translation-label-published
			$( '<span>' ).text( mw.msg( 'cx-translation-label-' + this.type ) ),
			this.languageFilter.$element.hide()
		);
	this.$listContainer
		.addClass( 'cx-translationlist' )
		.append( this.$headerContainer, this.$loadingIndicatorSpinner );

	this.$container.append( this.$emptyTranslationsList );
};

mw.cx.CXTranslationList.prototype.loadItems = function () {
	const self = this;

	if ( this.promise ) {
		return this.promise;
	}

	function insertUnique( array, value ) {
		if ( array.indexOf( value ) < 0 ) {
			array.push( value );
		}
	}

	this.$loadingIndicatorSpinner.show();
	this.pendingRequests++;

	const promise = this.getTranslations();
	promise.done( function ( translations ) {
		self.translations = self.translations.concat( translations );

		if ( !self.translations.length ) {
			self.$emptyTranslationsList = self.buildEmptyTranslationList();
			self.$listContainer.append( self.$emptyTranslationsList );
			self.emit( 'noDrafts' );
			return;
		}

		translations.forEach( function ( translation ) {
			insertUnique( self.sourceLanguages, translation.sourceLanguage );
			insertUnique( self.targetLanguages, translation.targetLanguage );
		} );

		self.fillULS();

		self.renderTranslations( translations );
	} ).fail( function ( error ) {
		self.promise = null;

		if ( error === 'assertuserfailed' ) {
			$( window ).off( 'scroll' );
			self.constructor.static.showLoginDialog();
		}
	} ).always( function () {
		self.pendingRequests--;

		if ( self.pendingRequests === 0 ) {
			self.$loadingIndicatorSpinner.hide();
		}
	} );

	return promise;
};

/**
 * Fill source and target language filter with languages for which there are translationlist items
 */
mw.cx.CXTranslationList.prototype.fillULS = function () {
	// Check if there is only one language combination, e.g. English to Spanish
	// sourceLanguages - [ 'en' ]
	// targetLanguages - [ 'es' ]
	if ( this.sourceLanguages.length === 1 && this.targetLanguages.length === 1 ) {
		return;
	}

	// At this point, we know there is more than one language combination

	this.sourceLanguages.unshift( 'x-all' );
	this.targetLanguages.unshift( 'x-all' );

	const languageDecorator = function ( $language, languageCode ) {
		if ( languageCode === 'x-all' ) {
			$language.parent().addClass( 'cx-translationlist-uls-all-languages' );
		}
	};

	this.languageFilter.fillSourceLanguages( this.sourceLanguages, true, {
		ulsPurpose: 'cx-translationlist-source',
		languageDecorator: languageDecorator
	} );
	this.languageFilter.fillTargetLanguages( this.targetLanguages, true, {
		ulsPurpose: 'cx-translationlist-target',
		languageDecorator: languageDecorator
	} );

	this.languageFilter.$element.show();
};

/**
 * @inheritdoc
 */
mw.cx.CXTranslationList.prototype.getPageProps = function () {
	return [ 'pageimages' ];
};

mw.cx.CXTranslationList.prototype.show = function () {
	// Parent method
	mw.cx.CXTranslationList.super.prototype.show.apply( this, arguments );

	if ( !this.translations.length ) {
		this.loadItems();
	}
};

/**
 * Go to translation view
 *
 * @param {Object} translation
 */
mw.cx.CXTranslationList.prototype.continueTranslation = function ( translation ) {
	if ( translation.status === 'deleted' ) {
		return;
	}

	// Set CX token as cookie.
	mw.cx.siteMapper.setCXToken(
		translation.sourceLanguage,
		translation.targetLanguage,
		translation.sourceTitle
	);
	location.href = new mw.Uri( mw.cx.siteMapper.getCXUrl(
		translation.sourceTitle,
		translation.targetTitle,
		translation.sourceLanguage,
		translation.targetLanguage,
		{ campaign: new mw.Uri().query.campaign }
	) ).toString();
};

/**
 * List all translations.
 *
 * @param {Object[]} translations
 */
mw.cx.CXTranslationList.prototype.renderTranslations = function ( translations ) {
	const $translations = [];

	for ( let i = 0; i < translations.length; i++ ) {
		const translation = translations[ i ];

		let progress;
		try {
			progress = JSON.parse( translation.progress );
		} catch ( e ) {
			progress = {};
		}

		const $translation = $( '<div>' )
			.addClass( 'cx-tlitem' )
			.data( 'translation', translation );
		const $lastUpdated = $( '<div>' )
			.addClass( 'cx-last-updated' )
			.text( moment.utc( translation.lastUpdateTimestamp, 'YYYYMMDDHHmmss' ).local().fromNow() );
		const $image = $( '<div>' )
			.addClass( 'cx-tlitem__image oo-ui-icon-article' );
		const $progressbar = $( '<div>' )
			.addClass( 'progressbar' )
			.cxProgressBar( {
				weights: progress,
				version: translation.cxVersion
			} );

		const sourceDir = $.uls.data.getDir( translation.sourceLanguage );
		const targetDir = $.uls.data.getDir( translation.targetLanguage );

		const $translationLink = $( '<a>' )
			.addClass( 'cx-translation-link' )
			// It must be a separate element to ensure
			// separation from the target title
			.append( $( '<span>' )
				.text( translation.sourceTitle )
				.addClass( 'cx-source-title' )
				.prop( {
					lang: translation.sourceLanguage,
					dir: sourceDir
				} )
			);

		// If the translated title is different from the source title,
		// show it near the source title
		if ( translation.sourceTitle !== translation.targetTitle ) {
			const $targetTitle = $( '<span>' )
				.prop( {
					lang: translation.targetLanguage,
					dir: targetDir
				} )
				.addClass( 'cx-target-title' )
				.text( translation.targetTitle );
			$translationLink.append(
				$( '<span>' ).text( '\u00A0' ), // nbsp to ensure separation between words
				$targetTitle
			);
		}

		const $sourceLanguage = $( '<div>' )
			.prop( {
				lang: translation.sourceLanguage,
				dir: sourceDir
			} )
			.addClass( 'cx-tlitem__languages__language cx-tlitem__languages__language--source' )
			.text( $.uls.data.getAutonym( translation.sourceLanguage ) );

		const $targetLanguage = $( '<div>' )
			.prop( {
				lang: translation.targetLanguage,
				dir: targetDir
			} )
			.addClass( 'cx-tlitem__languages__language cx-tlitem__languages__language--target' )
			.text( $.uls.data.getAutonym( translation.targetLanguage ) );

		const $languageContainer = $( '<div>' )
			.addClass( 'cx-tlitem__languages' )
			.append( $sourceLanguage, $targetLanguage );

		const $actions = $( '<div>' )
			.addClass( 'cx-tlitem__actions' );
		// If the translation is draft, allow deleting it
		if ( translation.status === 'draft' ) {
			const deleteTranslation = new OO.ui.ButtonWidget( {
				framed: false,
				classes: [ 'cx-discard-translation' ],
				icon: 'trash',
				title: mw.msg( 'cx-discard-translation' )
			} );
			$actions.append( deleteTranslation.$element );
		} else if ( translation.status === 'published' ) {
			const continueTranslation = new OO.ui.ButtonWidget( {
				framed: false,
				classes: [ 'cx-continue-translation' ],
				icon: 'edit',
				title: mw.msg( 'cx-continue-translation' )
			} );
			$actions.append( continueTranslation.$element );
		}

		const $titleLanguageBlock = $( '<div>' )
			.addClass( 'cx-tlitem__details' )
			.append( $translationLink, $progressbar, $lastUpdated, $languageContainer );

		$translation.append(
			$image,
			$titleLanguageBlock,
			$actions
		);

		$translations.push( $translation );

		// Store reference to the DOM nodes
		translation.$element = $translation;
		translation.$image = $image;
	}

	this.$listContainer.append( $translations );
	this.showTitleDetails( translations );
};

mw.cx.CXTranslationList.prototype.buildEmptyTranslationList = function () {
	if ( this.$emptyTranslationsList ) {
		return this.$emptyTranslationsList;
	}
	const $img = $( '<div>' )
		.addClass( 'cx-translationlist-empty__img' );
	const $title = $( '<div>' )
		.addClass( 'cx-translationlist-empty__title' )
		.text( mw.msg( 'cx-translationlist-empty-title' ) );
	const $desc = $( '<div>' )
		.addClass( 'cx-translationlist-empty__desc' )
		.text( mw.msg( 'cx-translationlist-empty-desc' ) );
	return $( '<div>' )
		.addClass( 'cx-translationlist-empty' )
		.append(
			$img, $title, $desc
		);
};

mw.cx.CXTranslationList.prototype.listen = function () {
	const self = this;

	// Parent method
	mw.cx.CXTranslationList.super.prototype.listen.apply( this, arguments );

	this.$listContainer.on( 'click', '.cx-discard-translation', function ( e ) {
		e.stopPropagation();
		$( this ).find( 'a' ).trigger( 'blur' );
		const translation = $( this ).closest( '.cx-tlitem' ).data( 'translation' );

		OO.ui.getWindowManager().openWindow( 'message', $.extend( {
			message: mw.msg( 'cx-draft-discard-confirmation-message' ),
			actions: [
				{ action: 'discard', label: mw.msg( 'cx-draft-discard-button-label' ), flags: [ 'primary', 'destructive' ] },
				{ action: 'cancel', label: mw.msg( 'cx-draft-cancel-button-label' ), flags: 'safe' }
			]
		} ) ).closed.then( function ( data ) {
			if ( data && data.action === 'discard' ) {
				self.discardTranslation( translation ).done( function ( response ) {
					if ( response.cxdelete.result !== 'success' ) {
						return;
					}
					translation.status = 'deleted';
					self.markTranslationAsDeleted( translation );
					mw.hook( 'mw.cx.translation.deleted' ).fire(
						translation.sourceLanguage,
						translation.targetLanguage,
						translation.sourceTitle,
						translation.targetTitle
					);
				} ).fail( function ( error ) {
					if ( error === 'assertuserfailed' ) {
						self.constructor.static.showLoginDialog();
					}
				} );
			}
		} );
	} );

	this.$listContainer.on( 'click', '.cx-continue-translation', function ( e ) {
		e.stopPropagation();
		$( this ).find( 'a' ).trigger( 'blur' );
		const translation = $( this ).closest( '.cx-tlitem' ).data( 'translation' );
		self.continueTranslation( translation );
		return false;
	} );

	this.$listContainer.on( 'click', '.cx-tlitem', function () {
		const translation = $( this ).data( 'translation' );
		if ( translation.status === 'published' ) {
			location.href = translation.targetURL;
		} else {
			self.continueTranslation( translation );
		}
	} );
};

mw.cx.CXTranslationList.prototype.onScroll = function () {
	const scrollTop = window.pageYOffset,
		windowHeight = document.documentElement.clientHeight;

	// Load next batch of items on scroll.
	if ( scrollTop > 0 && scrollTop + windowHeight + 100 > $( document ).height() ) {
		this.loadItems();
	}
};

/**
 * Mark the translation item in the translation list as deleted.
 *
 * @param {Object} translation
 */
mw.cx.CXTranslationList.prototype.markTranslationAsDeleted = function ( translation ) {
	translation.$element
		.addClass( 'cx-translation-deleted' )
		.find( '.cx-translation-status' )
		.removeClass( 'cx-translation-status-draft cx-translation-status-published' )
		.addClass( 'cx-translation-status-deleted' )
		.text( mw.msg( 'cx-translation-status-deleted' ) )
		.end()
		.find( '.cx-tlitem__actions' )
		.remove()
		.end()
		.find( '.cx-translation-link' )
		.addClass( 'cx-disabled' );
};

/**
 * Discard a translation.
 *
 * @param {Object} translation
 * @return {jQuery.Promise}
 */
mw.cx.CXTranslationList.prototype.discardTranslation = function ( translation ) {
	const apiParams = {
		assert: 'user',
		action: 'cxdelete',
		from: translation.sourceLanguage,
		to: translation.targetLanguage,
		sourcetitle: translation.sourceTitle
	};

	return new mw.Api().postWithToken( 'csrf', apiParams );
};

mw.cx.CXTranslationList.prototype.applyFilters = function () {
	const sourceLanguage = this.languageFilter.getSourceLanguage(),
		targetLanguage = this.languageFilter.getTargetLanguage();

	for ( let i = 0; i < this.translations.length; i++ ) {
		const translation = this.translations[ i ];

		const visible = ( !sourceLanguage || translation.sourceLanguage === sourceLanguage ) &&
			( !targetLanguage || translation.targetLanguage === targetLanguage );

		if ( visible ) {
			translation.$element.show();
		} else {
			translation.$element.hide();
		}
	}
};
