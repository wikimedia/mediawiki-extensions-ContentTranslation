'use strict';

const START_TRANSLATION_BUTTON_SELECTOR = '.sx-translation-confirmer__action button';
const ElementAction = require( '../utils/ElementAction' );

class TranslationConfirmerStep {
	async startTranslation() {
		const startTranslationButton = $( START_TRANSLATION_BUTTON_SELECTOR );
		await ElementAction.doClick( startTranslationButton );
	}
}

module.exports = new TranslationConfirmerStep();
