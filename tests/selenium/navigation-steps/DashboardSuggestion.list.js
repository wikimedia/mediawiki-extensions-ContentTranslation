'use strict';

const NEW_TRANSLATION_BUTTON_SELECTOR = '#dashboard-search-translation-button';
const ElementAction = require( '../utils/ElementAction' );

class DashboardSuggestionList {
	goToSearch() {
		const newTranslationButton = $( NEW_TRANSLATION_BUTTON_SELECTOR );
		return ElementAction.doClick( newTranslationButton );
	}
}

module.exports = new DashboardSuggestionList();
