( function () {
	/**
	 * This variable contains an array of objects that contain all
	 * edited sections by the user in languages other than the current one.
	 *
	 * @type {{ language: string, page: string, sections: string[]}[]}
	 */
	const recentEdits = mw.config.get( 'wgSectionTranslationRecentlyEditedSections' );
	const isRecentEditInvitationSuppressed =
		mw.config.get( 'wgCXSectionTranslationRecentEditInvitationSuppressed', false );
	const hiddenInvitationStorageKey = 'sx_recent_edit_invitation_hidden';
	/**
	 * Given a title and a source language, this method fetches section
	 * suggestions from cxserver with current wiki language code as target
	 * language and returns an object containing the section suggestions response
	 * or null in case of failed request.
	 *
	 * @param {string} title
	 * @param {string} sourceLanguage
	 * @return {Promise<Object|null>}
	 */
	function fetchSectionSuggestions( title, sourceLanguage ) {
		const siteMapper = new mw.cx.SiteMapper(),
			targetLanguage = siteMapper.getCurrentWikiLanguageCode(),
			cxServerParams = [
				title,
				sourceLanguage,
				targetLanguage
			].map( function ( param ) {
				return encodeURIComponent( param );
			} ),
			cxServerSectionSuggestionApiUrl = siteMapper.getCXServerUrl(
				'/suggest/sections/' + cxServerParams.join( '/' )
			);

		return fetch( cxServerSectionSuggestionApiUrl )
			.then( function ( response ) {
				return response.ok ?
					response.json() :
					null;
			} )
			.then( function ( suggestionResult ) {
				if ( suggestionResult && suggestionResult.sections ) {
					return suggestionResult.sections;
				}
				return null;
			} );
	}

	/**
	 * Given an object containing the recent edit and an object containing
	 * the missing sections, this method mounts an instance of
	 * RecentEditEntrypointInvitation component to render the entrypoint
	 * invitation
	 *
	 * @param {{ language: string, page: string, sections: string[] }} recentEdit
	 * @param {Object} missingSections
	 */
	function renderInvitation( recentEdit, missingSections ) {
		const Vue = require( 'vue' ),
			InvitationComponent = require( './RecentEditEntrypointInvitation.vue' ),
			panel = document.createElement( 'section' );
		let container = document.getElementById( 'mw-mf-page-center' );
		panel.className = 'sx-recentedit-entrypoint-banners';
		container = container || document.body;
		container.appendChild( panel );
		Vue.createMwApp( InvitationComponent, {
			recentEdit: recentEdit,
			missingSections: missingSections,
			hiddenInvitationStorageKey: hiddenInvitationStorageKey
		} ).mount( panel );
	}

	/**
	 * Given an object representing a recent significant edit,
	 * this method fetches section suggestions for the related page
	 * and language pair. If missing sections contain at least one
	 * of the edited sections in this recent edit, then the entrypoint
	 * invitation is being displayed to the user.
	 *
	 * Finally, this method returns a promise that resolves to a boolean
	 * indicating whether the invitation has been displayed or not
	 *
	 * @param {{ language: string, page: string, sections: string[] }} recentEdit
	 * @return {Promise<boolean>}
	 */
	function handleSectionSuggestionsByEdit( recentEdit ) {
		const sourceLanguage = recentEdit.language,
			pageTitle = recentEdit.page,
			sectionTitles = recentEdit.sections;

		return fetchSectionSuggestions( pageTitle, sourceLanguage )
			.then( function ( sections ) {
				if ( !sections || !sections.missing ) {
					return false;
				}
				let i;
				let firstMissingEditedSection;
				const sourceMissingSections = Object.keys( sections.missing );
				for ( i = 0; i < sourceMissingSections.length; i++ ) {
					const missingSection = sourceMissingSections[ i ];
					if ( sectionTitles.indexOf( missingSection ) > -1 ) {
						firstMissingEditedSection = missingSection;
					}
				}

				if ( !firstMissingEditedSection ) {
					return false;
				}

				const hiddenInvitations = mw.storage.getObject( hiddenInvitationStorageKey ) || [];
				const isInvitationHidden = function ( hiddenInvitation ) {
					return hiddenInvitation.language === sourceLanguage && hiddenInvitation.page === pageTitle && hiddenInvitation.section === firstMissingEditedSection;
				};
				for ( i = 0; i < hiddenInvitations.length; i++ ) {
					if ( isInvitationHidden( hiddenInvitations[ i ] ) ) {
						return false;
					}
				}

				renderInvitation( recentEdit, sections.missing );
				return true;
			} );
	}

	/**
	 * Given an index indicating the position of the current
	 * recent significant edit inside the "recentEdits" array
	 * this method recursively tries to fetch section suggestions
	 * for all recent edits, until the requirements for the invitation
	 * has been met (and thus the invitation is rendered) or it
	 * reaches the end of the array.
	 *
	 * @param {number} editIndex
	 */
	function handleRecentEditsRecursively( editIndex ) {
		if ( editIndex >= recentEdits.length ) {
			return;
		}

		handleSectionSuggestionsByEdit( recentEdits[ editIndex ] ).then( function ( success ) {
			if ( success ) {
				return;
			}
			handleRecentEditsRecursively( editIndex + 1 );
		} );
	}

	if ( !isRecentEditInvitationSuppressed ) {
		// Start the recursion from the first index
		handleRecentEditsRecursively( 0 );
	}

}() );
