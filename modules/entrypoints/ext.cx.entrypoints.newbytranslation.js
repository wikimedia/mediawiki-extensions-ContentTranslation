/*!
 * Content Translation invitation for editors while trying to create a new article.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';
	var CAMPAIGN = 'newarticle';

	/**
	 * @class
	 * @param {Object} config
	 */
	function CXNewByTranslationInvitation( config ) {
		this.siteMapper = config.siteMapper;
		this.targetTitle = config.targetTitle;
		this.targetLanguage = this.siteMapper.getCurrentWikiLanguageCode();
		this.suggestion = config.suggestion;
		this.invitation = this.render();
	}

	CXNewByTranslationInvitation.prototype.render = function () {
		var content = this.getContent();
		return new OO.ui.PopupWidget( {
			$content: content.$element,
			classes: [ 'cx-entrypoint-newbytranslation' ],
			padded: true,
			anchor: false,
			head: true,
			width: 600,
			height: 'auto',
			autoClose: false,
			hideWhenOutOfView: false
		} );
	};

	CXNewByTranslationInvitation.prototype.getCXLink = function ( options ) {
		return mw.util.getUrl( 'Special:ContentTranslation', options );
	};

	CXNewByTranslationInvitation.prototype.getContent = function () {
		var $sourceSuggestionButton, $suggestionImage, $suggestionDetails, container,
			searchButton, settingsButton,
			startCXButton, actions;

		container = new OO.ui.StackLayout( {
			continuous: true,
			expanded: false
		} );

		settingsButton = new OO.ui.ButtonWidget( {
			classes: [ 'cx-campaign-newbytranslation-settings' ],
			icon: 'settings',
			framed: false,
			href: mw.util.getUrl( 'Special:Preferences#mw-prefsection-rendering-languages' ),
			target: '_blank'
		} );

		if ( this.suggestion ) {
			$suggestionImage = $( '<div>' ).addClass( 'suggestion-image oo-ui-icon-article' );
			$suggestionDetails = $( '<div>' ).addClass( 'suggestion-details' );

			$suggestionDetails.append(
				$( '<div>' ).addClass( 'suggestion-title' ).text( this.suggestion.title ),
				$( '<div>' ).addClass( 'suggestion-desc' ).text( this.suggestion.description ),
				$( '<div>' ).addClass( 'suggestion-langs' ).text(
					mw.msg( 'cx-campaign-newbytranslation-languages',
						$.uls.data.getAutonym( this.suggestion.language ),
						$.uls.data.getAutonym( this.targetLanguage )
					)
				)
			);

			$sourceSuggestionButton = $( '<a>' )
				.addClass( 'cx-campaign-newbytranslation-source' )
				.attr( 'href', this.getCXLink( {
					campaign: CAMPAIGN,
					targettitle: this.targetTitle,
					page: this.suggestion.title,
					from: this.suggestion.language,
					to: this.targetLanguage
				} ) )
				.append( $suggestionImage, $suggestionDetails );
			if ( this.suggestion.thumbnail ) {
				$suggestionImage
					.addClass( 'suggestion-image--with-thumbnail' )
					.removeClass( 'oo-ui-icon-article' )
					.css( 'background-image', 'url("' + this.suggestion.thumbnail.source + '")' );
			}

			searchButton = new OO.ui.ButtonWidget( {
				classes: [ 'cx-campaign-newbytranslation-search-source' ],
				icon: 'search',
				flags: [ 'progressive' ],
				label: mw.msg( 'cx-campaign-newbytranslation-search' ),
				framed: false,
				href: this.getCXLink( {
					campaign: CAMPAIGN,
					targettitle: this.targetTitle,
					to: this.targetLanguage
				} )
			} );
			actions = [
				$sourceSuggestionButton,
				searchButton,
				settingsButton
			];
		} else {
			// Generic dialog
			startCXButton = new OO.ui.ButtonWidget( {
				label: mw.msg( 'cx-campaign-newbytranslation-start' ),
				flags: [ 'primary', 'progressive' ],
				href: this.getCXLink( {
					campaign: CAMPAIGN,
					targettitle: this.targetTitle,
					to: this.targetLanguage
				} )
			} );
			actions = [
				startCXButton,
				settingsButton
			];
		}

		container.addItems( [
			new OO.ui.HorizontalLayout( {
				items: [
					new OO.ui.IconWidget( {
						icon: 'language',
						flags: [ 'progressive' ]
					} ),
					new OO.ui.LabelWidget( {
						label: mw.msg( 'cx-campaign-newbytranslation-title' ),
						classes: [ 'cx-campaign-newbytranslation-title' ]
					} )
				]
			} ),
			new OO.ui.LabelWidget( {
				classes: [ 'cx-campaign-newbytranslation-label' ],
				label: mw.msg( 'cx-campaign-newbytranslation-notice' ),
				align: 'left'
			} ),
			new OO.ui.HorizontalLayout( {
				classes: [ 'cx-campaign-newbytranslation-actions' ],
				content: actions
			} )
		] );

		return container;
	};

	CXNewByTranslationInvitation.prototype.listen = function () {
		this.invitation.on( 'toggle', this.onToggle.bind( this ) );
	};

	CXNewByTranslationInvitation.prototype.onToggle = function ( visible ) {
		if ( visible ) {
			mw.hook( 'mw.cx.cta.shown' ).fire( CAMPAIGN );
		} else {
			// Campaign or call to action was rejected by the user.
			mw.hook( 'mw.cx.cta.reject' ).fire( CAMPAIGN );
		}
	};

	CXNewByTranslationInvitation.prototype.show = function () {
		$( document.body ).append( this.invitation.$element );
		setTimeout( function () {
			// Wait till everything painted on screen so that we get correct dimensions
			this.invitation.toggle( true );
		}.bind( this ), 200 );
		this.listen();
	};

	function getCandidateSourceLanguages( targetLanguage ) {
		var candidates = [ navigator.language ];
		candidates = candidates.concat( navigator.languages );
		if ( mw.uls ) {
			candidates = candidates.concat( mw.uls.getPreviousLanguages() );
		}
		candidates = candidates
			.map( function ( lang ) {
				if ( lang ) {
					// Remove country codes
					return lang.split( '-' )[ 0 ];
				}
				return null;
			} )
			.filter( function ( lang, index, self ) {
				return lang && lang !== targetLanguage && // Remove target language
					self.indexOf( lang ) === index; // Remove duplicates
			} );
		return candidates.splice( 0, 5 );
	}

	function getSourceSuggestions( siteMapper, targetTitle ) {
		var targetLanguage, sourceSuggestionApi, candidateSourceLanguages;
		targetLanguage = siteMapper.getCurrentWikiLanguageCode();
		candidateSourceLanguages = getCandidateSourceLanguages( targetLanguage );
		sourceSuggestionApi = siteMapper.getCXServerUrl(
			'/suggest/source/$title/$to?sourcelanguages=$from',
			{
				$title: targetTitle,
				$to: targetLanguage,
				$from: candidateSourceLanguages.join( ',' )
			} );

		return $.get( sourceSuggestionApi ).then( function ( response ) {
			return response.suggestions || [];
		} );
	}

	$( function () {
		var siteMapper = new mw.cx.SiteMapper(),
			targetTitle = mw.config.get( 'wgTitle' );

		getSourceSuggestions( siteMapper, targetTitle ).then( function ( suggestions ) {
			var api, invitation, shownOnce;

			shownOnce = mw.config.get( 'wgContentTranslationNewByTranslationShown' ) === 'true';

			if ( !suggestions.length &&
				(
					mw.config.get( 'wgContentTranslationExistingTranslator' ) ||
					shownOnce
				)
			) {
				// No suggestion. User is existing translator.
				// or the invitation was shown once. Nothing to do.
				return;
			}

			invitation = new CXNewByTranslationInvitation( {
				siteMapper: siteMapper,
				targetTitle: targetTitle,
				suggestion: suggestions.length ? suggestions[ 0 ] : null
			} );
			invitation.show();

			if ( !shownOnce ) {
				api = new mw.Api();
				// Mark that the user saw invitation once
				api.postWithToken( 'csrf', {
					action: 'globalpreferences',
					optionname: 'cx_campaign_newarticle_shown',
					optionvalue: 'true'
				} ).then( function ( res ) {
					// Should we care?
					if ( res.error ) {
						mw.log.error( res.error );
					}
				} );
			}
		} );
	} );

}() );
