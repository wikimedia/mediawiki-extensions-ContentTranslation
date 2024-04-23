'use strict';

const { ref, watch, computed } = require( 'vue' );

/**
 * Copied from ContentTranslation/app/src/components/MWLanguageSelector/keyboardnav.js file
 */
function useKeyboardNavigation( searchQuery, searchResults, suggestions ) {
	const selectedLanguage = ref( '' );
	const selectedIndex = ref( -1 );
	const langSelectorContainer = ref( null );

	const shownLanguages = computed( () =>
		searchQuery.value ?
			searchResults.value :
			[ ...suggestions, ...searchResults.value ]
	);

	const next = () => {
		selectedIndex.value++;

		if ( selectedIndex.value >= shownLanguages.value.length ) {
			selectedIndex.value = 0;
		}
	};

	const prev = () => {
		selectedIndex.value--;

		if ( selectedIndex.value < 0 ) {
			selectedIndex.value = 0;
		}
	};

	watch( searchQuery, () => {
		selectedIndex.value = -1;
	} );

	watch( selectedIndex, async () => {
		if ( selectedIndex.value < 0 ) {
			// Reset
			selectedLanguage.value = '';

			return;
		}
		selectedLanguage.value = shownLanguages.value[ selectedIndex.value ];
		const selectedLanguageItem = langSelectorContainer.value.querySelectorAll(
			`.language[lang="${ selectedLanguage.value }"]`
		)[ 0 ];

		if ( selectedLanguageItem ) {
			selectedLanguageItem.scrollIntoView( false );
		}

	} );

	return { next, prev, langSelectorContainer, selectedLanguage };
}

module.exports = useKeyboardNavigation;
