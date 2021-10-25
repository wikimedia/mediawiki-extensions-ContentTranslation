( function () {
	var mainContent,
		entrypointContainer = document.createElement( 'div' ),
		bannerContainer = document.createElement( 'div' ),
		iconContainer = document.createElement( 'span' ),
		contentContainer = document.createElement( 'div' ),
		dialogContainer = document.createElement( 'div' ),
		dialogInstance,
		dialogInitialized = false;

	/**
	 * @return {HTMLDivElement}
	 */
	function createContent() {
		var headerText = document.createElement( 'h3' ),
			secondaryText = document.createElement( 'p' );

		contentContainer.className = 'sx-recent-translation-banner__content';
		headerText.className = 'sx-recent-translation-banner__content-header';
		headerText.innerText = mw.message( 'sx-recent-translation-entrypoint-banner-header' );

		secondaryText.className = 'sx-recent-translation-banner__content-details';
		secondaryText.innerText = mw.message( 'sx-recent-translation-entrypoint-banner-details' );

		contentContainer.appendChild( headerText );
		contentContainer.appendChild( secondaryText );
		return contentContainer;
	}

	function createDialogInstance() {
		var Vue,
			RecentTranslationEntrypointDialogComponent,
			RecentTranslationEntrypointDialogClass;
		Vue = require( 'vue' );

		RecentTranslationEntrypointDialogComponent = require( './RecentTranslationEntrypointDialog.vue' );
		RecentTranslationEntrypointDialogClass = Vue.extend( RecentTranslationEntrypointDialogComponent );

		return new RecentTranslationEntrypointDialogClass( { el: dialogContainer } );
	}

	// If there are any other existing notices, we should not add the entrypoint banner.
	// For this reason we check for all elements with .hatnote and .ambox class that exist
	// inside the lead section of the article. We can expand this list to add more class names
	// that are considered to belong to "notice" elements.
	// If not such elements exist, continue with adding the entrypoint banner
	if ( !document.querySelector( '#mf-section-0 > .hatnote, #mf-section-0 > .ambox' ) ) {
		mainContent = document.querySelector( '.mw-parser-output' );
		entrypointContainer.className = 'sx-recent-translation-entrypoint';

		bannerContainer.className = 'sx-recent-translation-banner';
		iconContainer.className = 'sx-recent-translation-banner__icon mw-ui-icon';
		contentContainer = createContent();
		bannerContainer.appendChild( iconContainer );
		bannerContainer.appendChild( contentContainer );

		entrypointContainer.appendChild( bannerContainer );

		dialogContainer.className = 'sx-recent-translation-dialog-container';

		bannerContainer.addEventListener( 'click', function () {
			if ( !dialogInitialized ) {
				dialogInstance = createDialogInstance();
				dialogInitialized = true;
			} else {
				dialogInstance.showDialog = true;
			}
		} );

		entrypointContainer.appendChild( dialogContainer );
		mainContent.prepend( entrypointContainer );
	}
}() );
