'use strict';

const Page = require( 'wdio-mediawiki/Page' );
const SelectionHelper = require( '../utils/SelectionHelper' );
const ElementAction = require( '../utils/ElementAction' );
const { Element: WebdriverIOElementType } = require( 'webdriverio' );

const ARTICLE_SUGGESTION_SELECTOR = '.cx-translation-list--page-suggestions .cx-suggestion';
const SECTION_SUGGESTION_SELECTOR = '.cx-translation-list--sx-suggestions .cx-suggestion';
const FAVORITE_SELECTOR = '.cx-translation-list--favorites .cx-suggestion';

class UnifiedDashboardPage extends Page {
	get suggestionButton() { return $( 'button[value="suggestions"]' ); }
	get articleSuggestions() { return $( ARTICLE_SUGGESTION_SELECTOR ); }
	get sectionSuggestions() { return $( SECTION_SUGGESTION_SELECTOR ); }
	get favoriteSuggestions() { return $( FAVORITE_SELECTOR ); }

	/**
	 * @param {number} index
	 * @return {Promise<WebdriverIOElementType>}
	 */
	getArticleSuggestionByIndex( index ) {
		return SelectionHelper.getElementByIndex( ARTICLE_SUGGESTION_SELECTOR, index, 10000 );
	}

	/**
	 * @param {WebdriverIOElementType} suggestion
	 * @return {Promise<string>}
	 */
	async getSuggestionSourceTitle( suggestion ) {
		const suggestionHeader = await suggestion.$( '.cx-suggestion__source-title' );
		return ElementAction.getText( suggestionHeader );
	}

	async getFavoriteSuggestionByTitle( articleHeading ) {
		const favoriteSuggestions = await $$( FAVORITE_SELECTOR );
		return this.getSuggestionFromListByTitle( favoriteSuggestions, articleHeading );
	}

	/**
	 * @param {WebdriverIOElementType} suggestion Suggestion to fetch favorite icon from
	 * @return {Promise<WebdriverIOElementType>}
	 */
	getFavoriteIconInSuggestion( suggestion ) {
		return suggestion.$( '.cx-suggestion__favorite-button' );
	}

	async getSuggestionFromListByTitle( suggestionList, title ) {
		for ( const suggestion of suggestionList ) {
			const text = await this.getSuggestionSourceTitle( suggestion );
			if ( text === title ) {
				return suggestion;
			}
		}
	}

	async open() {
		await super.openTitle(
			'Special:ContentTranslation',
			{ 'unified-dashboard': true, campaign: 'specialcx' }
		);
	}

	/**
	 * Saves an article for later, and returns the article heading
	 *
	 * @param {number} suggestionIndex
	 * @return {Promise<string>}
	 */
	async favoriteArticle( suggestionIndex ) {
		const suggestionToSave = await this.getArticleSuggestionByIndex( suggestionIndex );
		const suggestionTitle = await this.getSuggestionSourceTitle( suggestionToSave );
		await ElementAction.doClick( this.getFavoriteIconInSuggestion( suggestionToSave ) );

		await this.favoriteSuggestions.waitForDisplayed( { timeout: 2000 } );
		return suggestionTitle;
	}

	async unFavoriteArticle( suggestion ) {
		await ElementAction.doClick( this.getFavoriteIconInSuggestion( suggestion ) );
		await this.favoriteSuggestions.waitForExist( { timeout: 4000, reverse: true } );
	}

}

module.exports = new UnifiedDashboardPage();
