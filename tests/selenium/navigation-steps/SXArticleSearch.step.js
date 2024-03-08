'use strict';

const ARTICLE_SEARCH_INPUT_SELECTOR = 'input[type="search"]';
const FIRST_SEARCH_SUGGESTION_SELECTOR = '.sx-article-search .cx-search-suggestion';
const ElementAction = require( '../utils/ElementAction' );

class SXArticleSearchStep {
	async searchAndSelectArticleToTranslate( pageTitle ) {
		const articleSearchInput = $( ARTICLE_SEARCH_INPUT_SELECTOR );
		await ElementAction.setInput( articleSearchInput, pageTitle );
		const firstSearchSuggestion = $( FIRST_SEARCH_SUGGESTION_SELECTOR );
		await ElementAction.doClick( firstSearchSuggestion );
	}

}

module.exports = new SXArticleSearchStep();
