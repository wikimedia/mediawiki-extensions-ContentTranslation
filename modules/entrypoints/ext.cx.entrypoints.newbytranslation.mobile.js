( function () {
	'use strict';
	const siteMapper = new mw.cx.SiteMapper();
	const targetTitle = mw.config.get( 'wgPageName' );
	const targetLanguage = siteMapper.getCurrentWikiLanguageCode();

	// Copied from ext.cx.entrypoints.newbytranslation.js
	function getCandidateSourceLanguages() {
		let candidates = [ navigator.language ];
		candidates = candidates.concat( navigator.languages );
		if ( mw.uls ) {
			candidates = candidates.concat( mw.uls.getPreviousLanguages() );
		}
		candidates = candidates
			// Remove country codes
			.map( ( lang ) => ( lang && lang.split( '-' )[ 0 ] ) || null )
			// Remove target language and duplicates
			.filter( ( lang, index, self ) => lang && lang !== targetLanguage && self.indexOf( lang ) === index );
		return candidates.splice( 0, 5 );
	}

	// Copied from ext.cx.entrypoints.newbytranslation.js
	function getSourceSuggestions() {
		const candidateSourceLanguages = getCandidateSourceLanguages();
		const sourceSuggestionApi = siteMapper.getCXServerUrl(
			'/suggest/source/$title/$to?sourcelanguages=$from',
			{
				$title: targetTitle,
				$to: targetLanguage,
				$from: candidateSourceLanguages.join( ',' )
			} );

		return fetch( sourceSuggestionApi )
			.then( ( response ) => response.json() )
			.then( ( response ) => response.suggestions || [] );
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
		const invitePanel = document.createElement( 'a' );
		invitePanel.classList.add( 'sx-new-by-translation-entrypoint' );

		invitePanel.href = siteMapper.getCXUrl(
			suggestion.title,
			targetTitle,
			suggestion.language,
			targetLanguage,
			{ sx: true, campaign: 'newbytranslationmobile' }
		);

		const thumbnailContainer = document.createElement( 'div' );
		thumbnailContainer.classList.add( 'sx-suggestion__thumbnail-container' );
		const thumbnail = document.createElement( 'div' );
		thumbnail.classList.add( 'sx-suggestion__thumbnail' );

		// if thumbnail exists for the current suggestion, display it
		if ( suggestion.thumbnail ) {
			thumbnail.style.backgroundImage = "url('" + suggestion.thumbnail.source + "')";
		} else {
			// if thumbnail doesn't exist, display the article icon as thumbnail placeholder
			const thumbnailPlaceholderIcon = document.createElement( 'span' );
			thumbnailPlaceholderIcon.className = 'sx-suggestion__thumbnail-placeholder mw-ui-icon mw-ui-icon-article';
			thumbnail.appendChild( thumbnailPlaceholderIcon );
		}
		thumbnailContainer.appendChild( thumbnail );
		invitePanel.appendChild( thumbnailContainer );

		const bodyContainer = document.createElement( 'div' );
		bodyContainer.classList.add( 'sx-suggestion__body-container' );

		const header = document.createElement( 'h6' );
		header.classList.add( 'sx-suggestion__body-container__header' );
		header.innerText = 'Start with a translation';
		bodyContainer.appendChild( header );

		const title = document.createElement( 'h5' );
		title.classList.add( 'sx-suggestion__body-container__title' );
		title.innerText = suggestion.title;
		bodyContainer.appendChild( title );

		if ( suggestion.description ) {
			const description = document.createElement( 'span' );
			description.classList.add( 'sx-suggestion__body-container__description' );
			description.innerText = suggestion.description;
			bodyContainer.appendChild( description );
		}

		invitePanel.appendChild( bodyContainer );

		const actionContainer = document.createElement( 'div' );
		actionContainer.classList.add( 'sx-suggestion__action-container' );

		const closeIcon = document.createElement( 'span' );
		closeIcon.className = 'sx-suggestion__action-container__close-icon';
		closeIcon.addEventListener( 'click', ( event ) => {
			removeInvite( invitePanel );
			event.stopPropagation();
			event.preventDefault();
		} );

		actionContainer.appendChild( closeIcon );
		invitePanel.appendChild( actionContainer );

		return invitePanel;
	}

	// Here we need to detect the editor open event in MobileFrontend.
	// VE provides "ve.activationComplete" hook but that is only for VisualEdit mode.
	// To cover both wikitext and VisualEdit mode, we are using "mobileFrontend.editorOpened" hook
	mw.hook( 'mobileFrontend.editorOpened' ).add( () => {
		getSourceSuggestions().then( ( suggestions ) => {
			if ( !suggestions.length ) {
				// No suggestions. Nothing to do.
				return;
			}

			const suggestion = suggestions[ 0 ];
			const sxInvite = createNewByTranslationPanel( suggestion );
			document.body.appendChild( sxInvite );

			mw.hook( 'mobileFrontend.editorClosed' ).add( () => {
				removeInvite( sxInvite );
			} );

			const wikitextEditor = document.getElementById( 'wikitext-editor' );
			wikitextEditor.addEventListener( 'input', () => {
				removeInvite( sxInvite );
			} );
		} );
	} );
}() );
