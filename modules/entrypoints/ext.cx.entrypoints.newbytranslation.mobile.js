( function () {
	'use strict';
	var siteMapper = new mw.cx.SiteMapper();
	var targetTitle = mw.config.get( 'wgPageName' );
	var targetLanguage = siteMapper.getCurrentWikiLanguageCode();

	// Copied from ext.cx.entrypoints.newbytranslation.js
	function getCandidateSourceLanguages() {
		var candidates = [ navigator.language ];
		candidates = candidates.concat( navigator.languages );
		if ( mw.uls ) {
			candidates = candidates.concat( mw.uls.getPreviousLanguages() );
		}
		candidates = candidates.map( function ( lang ) {
			if ( lang ) {
				// Remove country codes
				return lang.split( '-' )[ 0 ];
			}
			return null;
		} ).filter( function ( lang, index, self ) {
			// Remove target language and duplicates
			return lang && lang !== targetLanguage && self.indexOf( lang ) === index;
		} );
		return candidates.splice( 0, 5 );
	}

	// Copied from ext.cx.entrypoints.newbytranslation.js
	function getSourceSuggestions() {
		var candidateSourceLanguages = getCandidateSourceLanguages();
		var sourceSuggestionApi = siteMapper.getCXServerUrl(
			'/suggest/source/$title/$to?sourcelanguages=$from',
			{
				$title: targetTitle,
				$to: targetLanguage,
				$from: candidateSourceLanguages.join( ',' )
			} );

		return fetch( sourceSuggestionApi )
			.then( function ( response ) {
				return response.json();
			} )
			.then( function ( response ) {
				return response.suggestions || [];
			} );
	}

	function removeInvite( invitePanel ) {
		if ( document.body.contains( invitePanel ) ) {
			document.body.removeChild( invitePanel );
		}
	}

	/**
	 * @param {{description: string|undefined, language: string, thumbnail: object|undefined, title: string }} suggestion
	 * @return {HTMLAnchorElement}
	 */
	function createNewByTranslationPanel( suggestion ) {
		var invitePanel = document.createElement( 'a' );
		invitePanel.classList.add( 'sx-new-by-translation-entrypoint' );

		invitePanel.href = siteMapper.getCXUrl(
			suggestion.title,
			targetTitle,
			suggestion.language,
			targetLanguage,
			{ sx: true, campaign: 'newbytranslationmobile' }
		);

		var thumbnailContainer = document.createElement( 'div' );
		thumbnailContainer.classList.add( 'sx-suggestion__thumbnail-container' );
		var thumbnail = document.createElement( 'div' );
		thumbnail.classList.add( 'sx-suggestion__thumbnail' );

		// if thumbnail exists for the current suggestion, display it
		if ( suggestion.thumbnail ) {
			thumbnail.style.backgroundImage = "url('" + suggestion.thumbnail.source + "')";
		} else {
			// if thumbnail doesn't exist, display the article icon as thumbnail placeholder
			var thumbnailPlaceholderIcon = document.createElement( 'span' );
			thumbnailPlaceholderIcon.className = 'sx-suggestion__thumbnail-placeholder mw-ui-icon mw-ui-icon-article';
			thumbnail.appendChild( thumbnailPlaceholderIcon );
		}
		thumbnailContainer.appendChild( thumbnail );
		invitePanel.appendChild( thumbnailContainer );

		var bodyContainer = document.createElement( 'div' );
		bodyContainer.classList.add( 'sx-suggestion__body-container' );

		var header = document.createElement( 'h6' );
		header.classList.add( 'sx-suggestion__body-container__header' );
		header.innerText = 'Start with a translation';
		bodyContainer.appendChild( header );

		var title = document.createElement( 'h5' );
		title.classList.add( 'sx-suggestion__body-container__title' );
		title.innerText = suggestion.title;
		bodyContainer.appendChild( title );

		if ( suggestion.description ) {
			var description = document.createElement( 'span' );
			description.classList.add( 'sx-suggestion__body-container__description' );
			description.innerText = suggestion.description;
			bodyContainer.appendChild( description );
		}

		invitePanel.appendChild( bodyContainer );

		var actionContainer = document.createElement( 'div' );
		actionContainer.classList.add( 'sx-suggestion__action-container' );

		var closeIcon = document.createElement( 'span' );
		closeIcon.className = 'sx-suggestion__action-container__close-icon';
		closeIcon.addEventListener( 'click', function ( event ) {
			removeInvite( invitePanel );
			event.stopPropagation();
		} );

		actionContainer.appendChild( closeIcon );
		invitePanel.appendChild( actionContainer );

		return invitePanel;
	}

	// Here we need to detect the editor open event in MobileFrontend.
	// VE provides "ve.activationComplete" hook but that is only for VisualEdit mode.
	// To cover both wikitext and VisualEdit mode, we are using "mobileFrontend.editorOpened" hook
	mw.hook( 'mobileFrontend.editorOpened' ).add( function () {
		var sxInvite;
		getSourceSuggestions().then( function ( suggestions ) {
			if ( !suggestions.length ) {
				// No suggestions. Nothing to do.
				return;
			}

			var suggestion = suggestions[ 0 ];
			sxInvite = createNewByTranslationPanel( suggestion );
			document.body.appendChild( sxInvite );

			mw.hook( 'mobileFrontend.editorClosed' ).add( function () {
				removeInvite( sxInvite );
			} );

			var wikitextEditor = document.getElementById( 'wikitext-editor' );
			wikitextEditor.addEventListener( 'input', function () {
				removeInvite( sxInvite );
			} );
		} );
	} );
}() );
