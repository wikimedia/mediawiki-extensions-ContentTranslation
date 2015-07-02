/**
 * ContentTranslation extension - Translation listing in dashboard.
 *
 * @file
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
	function CXTranslationList( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;
		this.translations = [];
		this.filters = {
			status: null,
			sourceLanguage: null,
			targetLanguage: null
		};

		this.$statusFilter = null;
		this.$sourceLanguageFilter = null;
		this.$targetLanguageFilter = null;
		this.$header = null;
		this.$confirmationDialog = null;
		this.$overlay = null;

		this.init();
		this.render();
		this.listen();
	}

	CXTranslationList.prototype.init = function () {
		var translationList = this;

		this.getTranslations().done( function ( response ) {
			translationList.getTranslationsCallback(
				response.query.contenttranslation.translations
			);
		} );
	};

	/**
	 * Populates various UI components with data in the given translations.
	 */
	CXTranslationList.prototype.getTranslationsCallback = function ( translations ) {
		var sourceLanguages, targetLanguages;

		// Remove unnecessary object wrapping to get plain list of objects
		translations = $.map( translations, function ( e ) {
			return e.translation;
		} );

		this.translations = translations;
		this.$header.show();
		this.listTranslations( this.translations );
		this.filters.status = 'draft';
		this.applyFilters( this.filters, translations );

		sourceLanguages = $.map( translations, function ( e ) {
			return e.sourceLanguage;
		} );
		this.populateLanguageFilter( this.$sourceLanguageFilter, mw.cx.unique( sourceLanguages ) );

		targetLanguages = $.map( translations, function ( e ) {
			return e.targetLanguage;
		} );
		this.populateLanguageFilter( this.$targetLanguageFilter, mw.cx.unique( targetLanguages ) );
	};

	/**
	 * Get the thumbnail image of the given link.
	 * @param {string} id translation id
	 * @param {string} language
	 * @param {string} title Title
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getLinkImage = function ( language, title ) {
		return this.siteMapper.getApi( language ).get( {
			action: 'query',
			titles: title,
			prop: 'pageimages',
			piprop: 'thumbnail',
			pithumbsize: 150,
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	};

	/**
	 * Get all the translations of given user.
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.getTranslations = function () {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			format: 'json'
		} );
	};

	/**
	 * Show a title image of the translation based on source title.
	 * @param {Object} translation
	 */
	CXTranslationList.prototype.showTitleImage = function ( translation, type ) {
		this.getLinkImage( translation.sourceLanguage, translation.sourceTitle )
			.done( function ( response ) {
				var pageId, page, imgSrc;

				pageId = Object.keys( response.query.pages )[ 0 ];
				page = response.query.pages[ pageId ];
				if ( page.thumbnail ) {
					imgSrc = page.thumbnail.source;
					$( '#' + type + translation.id ).find( '.image' ).attr( 'src', imgSrc );
				}
			} );
	};

	/**
	 * List all translations.
	 * @param {Object[]} translations
	 */
	CXTranslationList.prototype.listTranslations = function ( translations ) {
		var i, translation, progress, $translation,
			$lastUpdated, $imageBlock, $image, $progressbar,
			sourceDir, targetDir,
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
				.addClass( 'cx-tlitem' )
				.attr( 'id', 'translation' + translation.id );
			$lastUpdated = $( '<div>' )
				.addClass( 'last-updated' )
				.text( moment( translation.lastUpdateTimeStamp, 'YYYYMMDDHHmmss Z' ).fromNow() );
			$imageBlock = $( '<div>' )
				.addClass( 'cx-tlitem__image' );
			$image = $( '<img>' )
				.addClass( 'image' );
			$progressbar = $( '<div>' )
				.addClass( 'progressbar' )
				.cxProgressBar( {
					weights: progress
				} );
			$imageBlock.append( $image );
			this.showTitleImage( translation, 'translation' );

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
				.addClass( 'source-title' )
				.text( translation.sourceTitle )
				.attr( {
					lang: translation.sourceLanguage,
					dir: sourceDir,
					href: translationLinkUrl
				} );

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
				$imageBlock,
				$titleLanguageBlock
			);

			$translations.push( $translation );

			// Store reference to the DOM node
			translation.$element = $translation;
		}

		if ( $translations.length ) {
			this.$container.append( $( '<div>' )
				.addClass( 'cx-translationlist' )
				.append( $translations )
			);
		} else {
			this.$container.append( $( '<div>' )
				.addClass( 'cx-translationlist-empty' )
				.append(
					$( '<div>' )
						.addClass( 'cx-translationlist-empty__img' ),
					$( '<div>' )
						.addClass( 'cx-translationlist-empty__title' )
						.text( mw.msg( 'cx-translationlist-empty-title' ) ),
					$( '<div>' )
						.addClass( 'cx-translationlist-empty__desc' )
						.text( mw.msg( 'cx-translationlist-empty-desc' ) )
				) );
		}
	};

	CXTranslationList.prototype.populateLanguageFilter = function ( $filter, languages ) {
		var i;

		for ( i = 0; i < languages.length; i++ ) {
			$filter.append( $( '<option>' )
				// Todo: use translated language name
				.text( $.uls.data.getAutonym( languages[ i ] ) )
				.attr( 'value', languages[ i ] )
			);
		}
	};

	CXTranslationList.prototype.render = function () {
		var $sourceLanguageContainer, $targetLanguageContainer;

		this.$header = $( '<div>' )
			.addClass( 'translation-filter' );

		this.$newTranslationButton = $( '<button>' )
			.addClass( 'cx-cta__new-translation mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		this.$cta = $( '<div>' )
			.addClass( 'cx-cta' )
			.append( this.$newTranslationButton );

		this.$statusFilter = $( '<span>' )
			.addClass( 'cx-statusfilter' )
			.append(
				$( '<span>' )
					.addClass( 'cx-status cx-status--draft cx-status--selected mw-ui-input' )
					.text( mw.msg( 'cx-translation-filter-draft-translations' ) ),
				$( '<span>' )
					.addClass( 'cx-status cx-status--published mw-ui-input' )
					.text( mw.msg( 'cx-translation-filter-published-translations' ) )
			);

		this.$sourceLanguageFilter = createSelect(
			'translation-source-language-filter', {
				'': mw.msg( 'cx-translation-filter-from-any-language' )
			}
		);

		this.$targetLanguageFilter = createSelect(
			'translation-target-language-filter', {
				'': mw.msg( 'cx-translation-filter-to-any-language' )
			}
		);

		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-source-container' )
			.append(
				this.$sourceLanguageFilter,
				$( '<div>' )
					.addClass( 'translation-language-select-content' )
					.text( mw.msg( 'cx-translation-filter-from-any-language' ) ),
				$( '<div>' )
					.addClass( 'translation-language-select-arrow' )
			);

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-target-container' )
			.append(
				this.$targetLanguageFilter,
				$( '<div>' )
					.addClass( 'translation-language-select-content' )
					.text( mw.msg( 'cx-translation-filter-to-any-language' ) ),
				$( '<div>' ).addClass( 'translation-language-select-arrow' )
			);

		this.$header.append(
			this.$statusFilter,
			$( '<div>' ).addClass( 'translation-language-filter' ).append(
				$sourceLanguageContainer,
				$( '<div>' ).addClass( 'translation-language-arrow' ),
				$targetLanguageContainer
			),
			this.$cta
		);

		// Hide the filters till we see there are translations to list.
		this.$header.hide();
		this.$container.append( this.$header );
	};

	CXTranslationList.prototype.listen = function () {
		var setFilter,
			translationList = this;

		setFilter = $.proxy( this.setFilter, this );

		this.$statusFilter.click( '.cx-status', function ( e ) {
			var $filter = $( e.target );

			translationList.$statusFilter
				.find( '.cx-status--selected' )
				.removeClass( 'cx-status--selected' );

			$filter.addClass( 'cx-status--selected' );

			if ( $filter.is( '.cx-status--draft' ) ) {
				setFilter( 'status', 'draft' );
			} else if ( $filter.is( '.cx-status--published' ) ) {
				setFilter( 'status', 'published' );
			}
		} );

		this.$sourceLanguageFilter.on( 'change', function () {
			var code = $( this ).val();

			setFilter( 'sourceLanguage', code );

			translationList.$sourceLanguageFilter
				.siblings( '.translation-language-select-content' )
				.text( $.uls.data.getAutonym( code ) );
		} );

		this.$targetLanguageFilter.on( 'change', function () {
			var code = $( this ).val();

			setFilter( 'targetLanguage', code );
			translationList.$targetLanguageFilter
				.siblings( '.translation-language-select-content' )
				.text( $.uls.data.getAutonym( code ) );
		} );

		this.$container.on( 'click', '.cx-discard-translation', function ( e ) {
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

		this.$container.on( 'click', '.cx-tlitem', function () {
			location.href = $( this ).find( '.source-title' ).attr( 'href' );
		} );
		this.initSourceSelector();

		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	CXTranslationList.prototype.initSourceSelector = function () {
		var query,
			sourceSelectorOptions = {};

		query = new mw.Uri().query;
		sourceSelectorOptions.sourceLanguage = query.from;
		sourceSelectorOptions.targetLanguage = query.to;
		sourceSelectorOptions.sourceTitle = query.page;
		sourceSelectorOptions.targetTitle = query.targettitle;
		this.$newTranslationButton.cxSourceSelector( sourceSelectorOptions );

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.to );
		}
	};

	CXTranslationList.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop(),
			offsetTop = this.$container.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}
	};

	/**
	 * Show the confirmation dialog for discarding a translation.
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.showDiscardConfirmation = function () {
		var deferred, $cancelButton, $discardButton, $actions, $message,
			translationList = this;

		deferred = $.Deferred();

		if ( !this.$overlay ) {
			this.$overlay = mw.cx.widgets.overlay();
			$( 'body' ).append( this.$overlay );
		}

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
			translationList.$overlay.hide();
			$discardButton.off( 'click' );
		} );

		$discardButton.one( 'click', function () {
			deferred.resolve();
			translationList.$confirmationDialog.hide();
			translationList.$overlay.hide();
			$cancelButton.off( 'click' );
		} );

		this.$overlay.show();
		this.$confirmationDialog.show();

		return deferred.promise();
	};

	/**
	 * Mark the translation item in the translation list as deleted.
	 * @param {Object} translation
	 */
	CXTranslationList.prototype.markTranslationAsDeleted = function ( translation ) {
		$( '#translation' + translation.id )
			.addClass( 'cx-translation-deleted' )
			.find( '.status' )
			.removeClass( 'status-draft status-published' )
			.addClass( 'status-deleted' )
			.text( mw.msg( 'cx-translation-status-deleted' ) )
			.end()
			.find( '.cx-tlitem__actions' )
			.remove()
			.end()
			.find( '.source-title' )
			.addClass( 'disabled' );
	};

	/**
	 * Discard a translation.
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

	CXTranslationList.prototype.setFilter = function ( type, value ) {
		this.filters[ type ] = value;
		this.applyFilters( this.filters, this.translations );
	};

	CXTranslationList.prototype.applyFilters = function ( filters, translations ) {
		var i, translation, visible, j, filterProp, filterValue,
			keys = Object.keys( filters );

		for ( i = 0; i < translations.length; i++ ) {
			translation = translations[ i ];

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

	/**
	 * Creates a jQuery select element from given options.
	 * @param {string} classes
	 * @param {Object} options
	 * @return {jQuery}
	 */
	function createSelect( classes, options ) {
		var i, value, key,
			keys = Object.keys( options ),
			$select = $( '<select>' ).addClass( classes );

		for ( i = 0; i < keys.length; i++ ) {
			value = keys[ i ];
			key = options[ value ];

			$select.append( $( '<option>' ).text( key ).attr( 'value', value ) );
		}

		return $select;
	}

	$.fn.cxTranslationList = function ( siteMapper ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxtranslationlist' );

			if ( !data ) {
				$this.data( 'cx', ( data = new CXTranslationList( this, siteMapper ) ) );
			}
		} );
	};
}( jQuery, mediaWiki ) );
