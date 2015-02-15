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
		this.$translationFilterContainer = null;
		this.$confirmatonDialog = null;
		this.$overlay = null;
		this.init();
		this.render();
		this.listen();
	}

	CXTranslationList.prototype.init = function () {
		var translationList = this;

		this.getTranslations().done( function ( response ) {
			translationList.getTranslationsCallback( response.query.contenttranslation.translations );
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

		if ( translations.length > 0 ) {
			this.$translationFilterContainer.show();
		}

		this.listTranslations( translations );
		this.filters.status = 'draft';
		this.applyFilters( this.filters, translations );

		sourceLanguages = $.map( translations, function ( e ) {
			return e.sourceLanguage;
		} );
		this.populateLanguageFilter( this.$sourceLanguageFilter, unique( sourceLanguages ) );
		targetLanguages = $.map( translations, function ( e ) {
			return e.targetLanguage;
		} );
		this.populateLanguageFilter( this.$targetLanguageFilter, unique( targetLanguages ) );
	};

	/**
	 * Get the thumbnail image of the given link
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
	 * Get all the translations of given user
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
	CXTranslationList.prototype.showTitleImage = function ( translation ) {
		this.getLinkImage( translation.sourceLanguage, translation.sourceTitle )
			.done( function ( response ) {
				var pageId, page, imgSrc;

				pageId = Object.keys( response.query.pages )[ 0 ];
				page = response.query.pages[ pageId ];
				if ( page.thumbnail ) {
					imgSrc = page.thumbnail.source;
					$( '#' + translation.id ).find( '.image' ).attr( 'src', imgSrc );
				}
			} );
	};

	/**
	 * List all translations.
	 * @param {Object[]} translations
	 */
	CXTranslationList.prototype.listTranslations = function ( translations ) {
		var i, translation, progress, $translation, $titleLanguageBlock,
			$translationLink, translationLinkUrl,
			$sourceLanguage, $targetLanguage,
			$imageBlock, $lastUpdated, $image, $status, $progressbar,
			$actionsTrigger, $menu, $menuContainer, $deleteTranslation;

		for ( i = 0; i < translations.length; i++ ) {
			translation = translations[ i ];

			try {
				progress = JSON.parse( translation.progress );
			} catch ( e ) {
				progress = {};
			}

			$translation = $( '<div>' )
				.addClass( 'translation' )
				.attr( 'id', translation.id );
			$lastUpdated = $( '<div>' )
				.addClass( 'last-updated' )
				.text( moment( translation.lastUpdateTimeStamp, 'YYYYMMDDHHmmss Z' ).fromNow() );
			$imageBlock = $( '<div>' )
				.addClass( 'image-block' );
			$image = $( '<img>' )
				.addClass( 'image' );
			$progressbar = $( '<div>' )
				.addClass( 'progressbar' )
				.cxProgressBar( { weights: progress } );
			$imageBlock.append( $image, $progressbar );
			this.showTitleImage( translation );

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
					href: translationLinkUrl
				} );

			$sourceLanguage = $( '<div>' )
				.addClass( 'source-language' )
				.text( $.uls.data.getAutonym( translation.sourceLanguage ) );
			$targetLanguage = $( '<div>' )
				.addClass( 'target-language' )
				.text( $.uls.data.getAutonym( translation.targetLanguage ) );
			$status = $( '<div>' )
				.addClass( 'status status-' + translation.status )
				.text( mw.msg( 'cx-translation-status-' + translation.status ) );

			// If the translation is draft, allow deleting it.
			if ( translation.status === 'draft' ) {
				$actionsTrigger = $( '<div>' )
					.addClass( 'actions-menu-trigger' )
					.text( '…' );
				$deleteTranslation = $( '<li>' )
					.addClass( 'cx-discard-translation' )
					.text( mw.msg( 'cx-discard-translation' ) )
					.data( 'translation', translation );
				$menu = $( '<ul>' )
					.append( $deleteTranslation );
				$menuContainer = $( '<div>' )
					.addClass( 'actions-menu-container' )
					.append( $actionsTrigger, $menu );
			} else {
				$menuContainer = $();
			}

			$titleLanguageBlock = $( '<div>' )
				.addClass( 'title-language-block' )
				.append( $translationLink, $sourceLanguage, $targetLanguage, $status, $menuContainer );
			$translation.append(
				$lastUpdated,
				$imageBlock,
				$titleLanguageBlock
			);
			this.$container.append( $translation );

			// Store reference to the DOM node
			translation.$element = $translation;
		}
	};

	CXTranslationList.prototype.populateLanguageFilter = function ( $filter, languages ) {
		var i;

		for ( i = 0; i < languages.length; i++ ) {
			$filter.append(
				$( '<option>' )
				// Todo: use translated language name
				.text( $.uls.data.getAutonym( languages[ i ] ) )
				.attr( 'value', languages[ i ] )
			);
		}
	};

	CXTranslationList.prototype.render = function () {
		this.$translationFilterContainer = $( '<div>' )
			.addClass( 'translation-filter' );

		this.$statusFilter = createSelect(
			'translation-status-filter', {
				'': mw.msg( 'cx-translation-filter-all-translations' ),
				published: mw.msg( 'cx-translation-filter-published-translations' ),
				draft: mw.msg( 'cx-translation-filter-draft-translations' )
			}
		);

		// By default select the 'draft' translations
		// We expect users to look for draft translations to complete them as the regular behaviour
		this.$statusFilter.val( 'draft' );

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

		this.$translationFilterContainer.append(
			this.$statusFilter,
			this.$sourceLanguageFilter,
			this.$targetLanguageFilter
		);
		// Hide the filters till we see there are translations to list.
		this.$translationFilterContainer.hide();
		this.$container.append( this.$translationFilterContainer );
	};

	CXTranslationList.prototype.listen = function () {
		var setFilter,
			translationList = this;

		setFilter = $.proxy( this.setFilter, this );

		this.$statusFilter.on( 'change', function () {
			setFilter( 'status', $( this ).val() );
		} );

		this.$sourceLanguageFilter.on( 'change', function () {
			setFilter( 'sourceLanguage', $( this ).val() );
		} );

		this.$targetLanguageFilter.on( 'change', function () {
			setFilter( 'targetLanguage', $( this ).val() );
		} );

		this.$container.on( 'click', '.cx-discard-translation', function () {
			var translation = $( this ).data( 'translation' );

			translationList.showDiscardConfirmation( translation ).then( function ( answer ) {
				if ( !answer ) {
					return;
				}
				translationList.discardTranslation( translation )
					.then( function ( response ) {
						if ( response.cxdelete.result === 'success' ) {
							translationList.markTranslationAsDeleted( translation );
						}
					} );
			} );
		} );
	};

	/**
	 * Show the confirmaton dialog for discarding a translaton
	 * @return {jQuery.Promise}
	 */
	CXTranslationList.prototype.showDiscardConfirmation = function () {
		var deferred, $actions, $cancelButton, $discardButton, $message,
			translationList = this;

		deferred = $.Deferred();

		if ( !this.$overlay ) {
			this.$overlay = $( '<div>' )
				.addClass( 'cx-overlay' );
			$( 'body' ).append( this.$overlay );
		}

		if ( this.$confirmatonDialog ) {
			$cancelButton = this.$confirmatonDialog.find( '.cx-draft-discard-dialog__cancel' );
			$discardButton = this.$confirmatonDialog.find( '.cx-draft-discard-dialog__discard' );
		} else {
			this.$confirmatonDialog = $( '<div>' )
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
				.text( mw.msg( 'cx-draft-discard-confirmaton-message' ) );
			$( 'body' ).append( this.$confirmatonDialog.append( $message, $actions ) );
		}

		$cancelButton.one( 'click', function () {
			deferred.resolve( false );
			translationList.$confirmatonDialog.hide();
			translationList.$overlay.hide();
			$discardButton.off( 'click' );
		} );

		$discardButton.one( 'click', function () {
			deferred.resolve( true );
			translationList.$confirmatonDialog.hide();
			translationList.$overlay.hide();
			$cancelButton.off( 'click' );
		} );

		this.$overlay.show();
		this.$confirmatonDialog.show();

		return deferred.promise();
	};

	/**
	 * Mark the translation item in the translation list as deleted
	 * @param {Object} translation
	 */
	CXTranslationList.prototype.markTranslationAsDeleted = function ( translation ) {
		$( '#' + translation.id )
			.addClass( 'cx-translation-deleted' )
			.find( '.status' )
			.removeClass( 'status-draft status-published' )
			.addClass( 'status-deleted' )
			.text( mw.msg( 'cx-translation-status-deleted' ) )
			.end()
			.find( '.actions-menu-container' )
			.remove()
			.end()
			.find( '.source-title' )
			.addClass( 'disabled' );
	};

	/*
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
		if ( value === '' ) {
			value = null;
		}

		this.filters[ type ] = value;
		this.applyFilters( this.filters, this.translations );
	};

	CXTranslationList.prototype.applyFilters = function ( filters, translations ) {
		var translation, filterProp, filterValue, visible, i, j,
			keys = Object.keys( filters );

		for ( i = 0; i < translations.length; i++ ) {
			translation = translations[ i ];

			visible = true;
			for ( j = 0; j < keys.length; j++ ) {
				filterProp = keys[ j ];
				filterValue = filters[ filterProp ];

				if ( filterValue === null ) {
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
		var i, key, value,
			keys = Object.keys( options ),
			$select = $( '<select>' ).addClass( classes );

		for ( i = 0; i < keys.length; i++ ) {
			value = keys[ i ];
			key = options[ value ];

			$select.append( $( '<option>' ).text( key ).attr( 'value', value ) );
		}

		return $select;
	}

	function unique( array ) {
		return $.grep( array, function ( el, index ) {
			return index === $.inArray( el, array );
		} );
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
