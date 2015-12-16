/*!
 * ContentTranslation extension - Translation listing in dashboard.
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXTranslationList
	 *
	 * @class
	 */
	function CXTranslationList( $container, type, siteMapper ) {
		this.$container = $container;
		this.siteMapper = siteMapper;
		this.translations = [];
		this.type = type;
		this.$translationsList = null;
		this.filters = {
			status: null,
			sourceLanguage: null,
			targetLanguage: null
		};

		this.$sourceLanguageFilter = null;
		this.$targetLanguageFilter = null;
		this.$header = null;
		this.$confirmationDialog = null;
		this.active = false;
		this.promise = null;
		this.queryContinue = null;
		this.hasMore = true;
		this.init();
		this.listen();
	}

	/**
	 * Get all the translations of given user.
	 *
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getTranslations = function () {
		var self = this,
			params,
			api = new mw.Api();

		if ( this.promise ) {
			// Avoid duplicate API requests.
			return this.promise;
		}

		if ( this.hasMore === false ) {
			return $.Deferred().resolve( [] );
		}

		params = $.extend( {
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
			return $.map( response.query.contenttranslation.translations, function ( e ) {
				return e.translation;
			} );
		} );

		return this.promise;
	};

	CXTranslationList.prototype.init = function () {
		this.$translationsList = $( '<div>' )
			.addClass( 'cx-translationlist' );
		this.$container.append( this.$translationsList, this.$emptyTranslationsList );
	};

	CXTranslationList.prototype.loadItems = function () {
		var promise, self = this;

		if ( this.promise ) {
			return this.promise;
		}

		promise = this.getTranslations();
		promise.done( function ( translations ) {
			self.translations = self.translations.concat( translations );

			if ( !self.translations.length ) {
				self.$emptyTranslationsList = self.buildEmptyTranslationList();
				self.$translationsList.append( self.$emptyTranslationsList );
				return;
			}
			self.translations = self.translations.concat( translations );
			self.renderTranslations( translations );
		} ).fail( function () {
			this.promise = null;
		} );

		return promise;
	};

	/**
	 * Get the thumbnail image of the given link.
	 *
	 * @param {string} language
	 * @param {string} titles Title
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getLinkImages = function ( language, titles ) {
		return this.siteMapper.getApi( language ).get( {
			action: 'query',
			titles: titles.join( '|' ),
			prop: 'pageimages',
			piprop: 'thumbnail',
			pilimit: 50, // maximum
			pithumbsize: 100,
			redirects: true
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );

		// TODO: Handle continue
	};

	/**
	 * Show a title image of the translations based on source title.
	 *
	 * @param {Object[]} translations
	 */
	CXTranslationList.prototype.showTitleImages = function ( translations ) {
		var apply,
			self = this,
			queries = {},
			map = {};

		$.each( translations, function ( index, translation ) {
			var language = self.siteMapper.getWikiDomainCode( translation.sourceLanguage );

			queries[ language ] = queries[ language ] || [];
			queries[ language ].push( translation.sourceTitle );

			// So that we can easily find the element in the callback
			if ( !map[ translation.sourceTitle ] ) {
				// Same source title might be translated to multiple languages.
				map[ translation.sourceTitle ] = [];
			}
			map[ translation.sourceTitle ].push( translation.$image );
		} );

		apply = function ( page ) {
			if ( page.thumbnail ) {
				$.each( map[ page.title ], function ( i, item ) {

					item.css( {
						'background-image': 'url(' + page.thumbnail.source + ')'
					} );

				} );
			}
		};

		$.each( queries, function ( language, titles ) {
			self.getLinkImages( language, titles ).done( function ( response ) {
				$.map( response.query.pages, apply );
			} );
		} );
	};

	CXTranslationList.prototype.show = function () {
		this.active = true;
		this.$translationsList.show();

		if ( !this.translations.length ) {
			this.loadItems();
		}
	};

	CXTranslationList.prototype.hide = function () {
		this.active = false;
		this.$translationsList.hide();
	};

	/**
	 * List all translations.
	 */
	CXTranslationList.prototype.renderTranslations = function ( translations ) {
		var i, translation, progress, $translation,
			$lastUpdated, $image, $progressbar,
			sourceDir, targetDir, $targetTitle,
			translationLinkUrl, $translationLink,
			$sourceLanguage, $targetLanguage, $languageContainer, $status,
			$actionsTrigger, $deleteTranslation, $menu, $menuContainer,
			$titleLanguageBlock,
			$translations = [];

		for ( i = 0; i < translations.length; i++ ) {
			translation = translations[ i ];

			try {
				progress = JSON.parse( translation.progress );
			} catch ( e ) {
				progress = {};
			}

			$translation = $( '<div>' )
				.addClass( 'cx-tlitem' );
			$lastUpdated = $( '<div>' )
				.addClass( 'last-updated' )
				.text( moment( translation.lastUpdateTimeStamp, 'YYYYMMDDHHmmss Z' ).fromNow() );
			$image = $( '<div>' )
				.addClass( 'cx-tlitem__image' );
			$progressbar = $( '<div>' )
				.addClass( 'progressbar' )
				.cxProgressBar( {
					weights: progress
				} );

			sourceDir = $.uls.data.getDir( translation.sourceLanguage );
			targetDir = $.uls.data.getDir( translation.targetLanguage );

			if ( translation.status === 'draft' ) {
				translationLinkUrl = new mw.Uri( mw.cx.siteMapper.getCXUrl(
					translation.sourceTitle,
					translation.targetTitle,
					translation.sourceLanguage,
					translation.targetLanguage
				) ).extend( {
					draft: translation.status === 'draft' ? translation.id : undefined
				} ).toString();
			}

			if ( translation.status === 'published' ) {
				translationLinkUrl = translation.targetURL;
			}

			$translationLink = $( '<a>' )
				.addClass( 'translation-link' )
				.prop( 'href', translationLinkUrl )
				// It must be a separate element to ensure
				// separation from the target title
				.append( $( '<span>' )
					.text( translation.sourceTitle )
					.addClass( 'source-title' )
					.prop( {
						lang: translation.sourceLanguage,
						dir: sourceDir
					} )
				);

			// If the translated title is different from the source title,
			// show it near the source title
			if ( translation.sourceTitle !== translation.targetTitle ) {
				$targetTitle = $( '<span>' )
					.prop( {
						lang: translation.targetLanguage,
						dir: targetDir
					} )
					.addClass( 'target-title' )
					.text( translation.targetTitle );
				$translationLink.append(
					$( '<span>' ).html( '&#160;' ), // nbsp to ensure separation between words
					$targetTitle
				);
			}

			$sourceLanguage = $( '<div>' )
				.prop( {
					lang: translation.sourceLanguage,
					dir: sourceDir
				} )
				.addClass( 'cx-tlitem__languages__language cx-tlitem__languages__language--source' )
				.text( $.uls.data.getAutonym( translation.sourceLanguage ) );

			$targetLanguage = $( '<div>' )
				.prop( {
					lang: translation.targetLanguage,
					dir: targetDir
				} )
				.addClass( 'cx-tlitem__languages__language cx-tlitem__languages__language--target' )
				.text( $.uls.data.getAutonym( translation.targetLanguage ) );

			$languageContainer = $( '<div>' )
				.addClass( 'cx-tlitem__languages' )
				.append( $sourceLanguage, $targetLanguage );

			$status = $( '<div>' )
				.addClass( 'status status-' + translation.status )
				.text( mw.msg( 'cx-translation-status-' + translation.status ) );

			// If the translation is draft, allow deleting it
			if ( translation.status === 'draft' ) {
				$actionsTrigger = $( '<div>' )
					.addClass( 'cx-tlitem__actions__trigger' )
					.text( '…' );
				$deleteTranslation = $( '<li>' )
					.addClass( 'cx-discard-translation' )
					.text( mw.msg( 'cx-discard-translation' ) )
					.data( 'translation', translation );
				$menu = $( '<ul>' )
					.append( $deleteTranslation );
				$menuContainer = $( '<div>' )
					.addClass( 'cx-tlitem__actions' )
					.append( $actionsTrigger, $menu );
			} else {
				$menuContainer = $();
			}

			$titleLanguageBlock = $( '<div>' )
				.addClass( 'cx-tlitem__details' )
				.append( $translationLink, $progressbar, $lastUpdated, $languageContainer );

			$translation.append(
				$menuContainer,
				$image,
				$titleLanguageBlock
			);

			$translations.push( $translation );

			// Store reference to the DOM nodes
			translation.$element = $translation;
			translation.$image = $image;
		}

		this.$translationsList.append( $translations );
		this.showTitleImages( translations );
	};

	CXTranslationList.prototype.buildEmptyTranslationList = function () {
		var $img, $title, $desc;

		if ( this.$emptyTranslationsList ) {
			return this.$emptyTranslationsList;
		}
		$img = $( '<div>' )
			.addClass( 'cx-translationlist-empty__img' );
		$title = $( '<div>' )
			.addClass( 'cx-translationlist-empty__title' )
			.text( mw.msg( 'cx-translationlist-empty-title' ) );
		$desc = $( '<div>' )
			.addClass( 'cx-translationlist-empty__desc' )
			.text( mw.msg( 'cx-translationlist-empty-desc' ) );
		return $( '<div>' )
			.addClass( 'cx-translationlist cx-translationlist-empty' )
			.append(
				$img, $title, $desc
			);
	};

	CXTranslationList.prototype.listen = function () {
		var translationList = this,
			scrollHandler;

		this.$translationsList.on( 'click', '.cx-discard-translation', function ( e ) {
			var translation;

			e.stopPropagation();
			translation = $( e.target ).data( 'translation' );

			translationList.showDiscardConfirmation( translation ).done( function () {
				translationList.discardTranslation( translation ).done( function ( response ) {
					if ( response.cxdelete.result !== 'success' ) {
						return;
					}

					translationList.markTranslationAsDeleted( translation );
					mw.hook( 'mw.cx.translation.deleted' ).fire(
						translation.sourceLanguage,
						translation.targetLanguage,
						translation.sourceTitle,
						translation.targetTitle
					);
				} );
			} );
		} );

		this.$translationsList.on( 'click', '.cx-tlitem', function () {
			if ( $( this ).hasClass( 'cx-translation-deleted' ) ) {
				return;
			}

			location.href = $( this ).find( '.translation-link' ).attr( 'href' );
		} );

		// Attach a scroll handler
		scrollHandler = $.throttle( 250, $.proxy( this.scroll, this ) );
		$( window ).scroll( scrollHandler );
	};

	CXTranslationList.prototype.scroll = function () {
		var $window, scrollTop, windowHeight, offsetTop;
		if ( !this.active ) {
			return;
		}
		$window = $( window );
		scrollTop = $window.scrollTop();
		windowHeight = $window.height();
		offsetTop = this.$container.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}
		// Load next batch of items on scroll.
		if ( scrollTop + windowHeight + 100 > $( document ).height() ) {
			this.loadItems();
		}
	};

	/**
	 * Show the confirmation dialog for discarding a translation.
	 *
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.showDiscardConfirmation = function () {
		var deferred, $cancelButton, $discardButton, $actions, $message,
			overlay, translationList = this;

		deferred = $.Deferred();

		overlay = new mw.cx.widgets.overlay();

		if ( this.$confirmationDialog ) {
			$cancelButton = this.$confirmationDialog.find( '.cx-draft-discard-dialog__cancel' );
			$discardButton = this.$confirmationDialog.find( '.cx-draft-discard-dialog__discard' );
		} else {
			this.$confirmationDialog = $( '<div>' )
				.addClass( 'cx-draft-discard-dialog' );
			$cancelButton = $( '<button>' )
				.addClass( 'mw-ui-button mw-ui-quiet cx-draft-discard-dialog__cancel' )
				.text( mw.msg( 'cx-draft-cancel-button-label' ) );
			$discardButton = $( '<button>' )
				.addClass( 'mw-ui-button mw-ui-destructive cx-draft-discard-dialog__discard' )
				.text( mw.msg( 'cx-draft-discard-button-label' ) );
			$actions = $( '<div>' )
				.addClass( 'cx-draft-discard-dialog__actions' )
				.append( $discardButton, $cancelButton );
			$message = $( '<div>' )
				.addClass( 'cx-draft-discard-dialog__message' )
				.text( mw.msg( 'cx-draft-discard-confirmation-message' ) );

			$( 'body' ).append( this.$confirmationDialog.append( $message, $actions ) );
		}

		$cancelButton.one( 'click', function () {
			deferred.reject();
			translationList.$confirmationDialog.hide();
			overlay.hide();
			$discardButton.off( 'click' );
		} );

		$discardButton.one( 'click', function () {
			deferred.resolve();
			translationList.$confirmationDialog.hide();
			overlay.hide();
			$cancelButton.off( 'click' );
		} );

		overlay.show();
		this.$confirmationDialog.show();

		return deferred.promise();
	};

	/**
	 * Mark the translation item in the translation list as deleted.
	 *
	 * @param {Object} translation
	 */
	CXTranslationList.prototype.markTranslationAsDeleted = function ( translation ) {
		translation.$element
			.addClass( 'cx-translation-deleted' )
			.find( '.status' )
			.removeClass( 'status-draft status-published' )
			.addClass( 'status-deleted' )
			.text( mw.msg( 'cx-translation-status-deleted' ) )
			.end()
			.find( '.cx-tlitem__actions' )
			.remove()
			.end()
			.find( '.translation-link' )
			.addClass( 'disabled' );
	};

	/**
	 * Discard a translation.
	 *
	 * @param {Object} translation
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.discardTranslation = function ( translation ) {
		var apiParams = {
			action: 'cxdelete',
			from: translation.sourceLanguage,
			to: translation.targetLanguage,
			sourcetitle: translation.sourceTitle
		};

		return new mw.Api().postWithToken( 'edit', apiParams );
	};

	CXTranslationList.prototype.applyFilters = function ( filters ) {
		var i, translation, visible, j, filterProp, filterValue,
			keys = Object.keys( filters );

		for ( i = 0; i < this.translations.length; i++ ) {
			translation = this.translations[ i ];

			visible = true;
			for ( j = 0; j < keys.length; j++ ) {
				filterProp = keys[ j ];
				filterValue = filters[ filterProp ];

				if ( filterValue === null || filterValue === '' ) {
					continue;
				}

				visible = visible && translation[ filterProp ] === filterValue;
			}

			if ( visible ) {
				translation.$element.show();
			} else {
				translation.$element.hide();
			}
		}
	};

	mw.cx.CXTranslationList = CXTranslationList;
}( jQuery, mediaWiki ) );
