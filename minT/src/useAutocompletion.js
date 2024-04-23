/**
 * This file is a copy of ContentTranslation/app/src/components/MWLanguageSelector/autocompletion.js file
 */
'use strict';

const { computed } = require( 'vue' );

const getAutonym = $.uls.data.getAutonym;

const useAutocompletion = ( searchQuery, searchResults ) => {
	const autocompletion = computed( () => {
		if ( !searchResults.value.length || !searchQuery.value.trim() ) {
			return '';
		}

		for ( let i = 0; i < searchResults.value.length; i++ ) {
			const autonym = getAutonym( searchResults.value[ i ] );

			if ( autonym.startsWith( searchQuery.value ) ) {
				return autonym;
			}
		}

		return '';
	} );

	const onTabSelect = () => {
		searchQuery.value = autocompletion.value;
	};

	return {
		autocompletion,
		onTabSelect
	};

};
module.exports = useAutocompletion;
