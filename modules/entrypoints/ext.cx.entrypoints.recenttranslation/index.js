( function () {
	const entrypointContainer = document.createElement( 'div' ),
		bannerContainer = document.createElement( 'div' ),
		iconContainer = document.createElement( 'span' ),
		dialogContainer = document.createElement( 'div' );
	let contentContainer = document.createElement( 'div' ),
		dialogInitialized = false,
		dialogInstance;

	/**
	 * @return {HTMLDivElement}
	 */
	function createContent() {
		const headerText = document.createElement( 'h3' ),
			secondaryText = document.createElement( 'p' );

		contentContainer.className = 'sx-recent-translation-banner__content';
		headerText.className = 'sx-recent-translation-banner__content-header';
		headerText.innerText = mw.msg( 'sx-recent-translation-entrypoint-banner-header' );

		secondaryText.className = 'sx-recent-translation-banner__content-details';
		secondaryText.innerText = mw.msg( 'sx-recent-translation-entrypoint-banner-details' );

		contentContainer.appendChild( headerText );
		contentContainer.appendChild( secondaryText );
		return contentContainer;
	}

	function createDialogInstance() {
		const Vue = require( 'vue' ),
			RecentTranslationEntrypointDialogComponent =
				require( './RecentTranslationEntrypointDialog.vue' );

		return Vue.createMwApp( RecentTranslationEntrypointDialogComponent ).mount( dialogContainer );
	}

	// If there are any other existing notices, we should not add the entrypoint banner.
	// For this reason we check for all elements with .hatnote and .ambox class that exist
	// inside the lead section of the article. We can expand this list to add more class names
	// that are considered to belong to "notice" elements.
	// If not such elements exist, continue with adding the entrypoint banner
	if ( !document.querySelector( '#mf-section-0 > .hatnote, #mf-section-0 > .ambox' ) ) {
		const mainContent = document.querySelector( '.mw-parser-output' );
		entrypointContainer.className = 'sx-recent-translation-entrypoint';

		bannerContainer.className = 'sx-recent-translation-banner';
		iconContainer.className = 'sx-recent-translation-banner__icon';
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

		document.body.appendChild( dialogContainer );
		mainContent.prepend( entrypointContainer );
	}
}() );
