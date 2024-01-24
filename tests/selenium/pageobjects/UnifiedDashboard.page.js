'use strict';

const Page = require( 'wdio-mediawiki/Page' );
const SelectionHelper = require( '../utils/SelectionHelper' );
const InterceptorService = require( '../utils/InterceptorService' );
const ElementAction = require( '../utils/ElementAction' );
const { Element: WebdriverIOElementType } = require( 'webdriverio' );
const DesktopEditor = require( '../componentobjects/DesktopEditor' );

const ARTICLE_SUGGESTION_SELECTOR = '.cx-translation-list--page-suggestions .cx-suggestion';
const SECTION_SUGGESTION_SELECTOR = '.cx-translation-list--sx-suggestions .cx-suggestion';
const FAVORITE_SELECTOR = '.cx-translation-list--favorites .cx-suggestion';
const REFRESH_BUTTON_SELECTOR = '.cx-suggestion-list__refresh-button-container button';
const FIRST_SEARCH_SUGGESTION_SELECTOR = '.sx-article-search .cx-search-suggestion';
const SUGGESTION_LIST_LANGUAGE_BUTTONS_SELECTOR =
		'div.cx-translation-list--suggestions .sx-translation-list-language-selector button span.mw-ui-autonym';

class UnifiedDashboardPage extends Page {
	get suggestionListLanguageButtons() {
		return $$( SUGGESTION_LIST_LANGUAGE_BUTTONS_SELECTOR );
	}

	get suggestionButton() {
		return $( 'button[value="suggestions"]' );
	}

	get articleSuggestions() {
		return $( ARTICLE_SUGGESTION_SELECTOR );
	}

	get sectionSuggestions() {
		return $( SECTION_SUGGESTION_SELECTOR );
	}

	get favoriteSuggestions() {
		return $( FAVORITE_SELECTOR );
	}

	get newTranslationButton() {
		return $( '#dashboard-search-translation-button' );
	}

	get articleSearchTextbox() {
		return $( 'input[type="search"]' );
	}

	get firstSearchSuggestion() {
		return $( FIRST_SEARCH_SUGGESTION_SELECTOR );
	}

	get startTranslationButton() {
		return $( '.sx-translation-confirmer__action button' );
	}

	async getLanguagePair() {
		const languageButtons = await this.suggestionListLanguageButtons;
		const sourceLanguage = await languageButtons[ 0 ].getAttribute( 'lang' );
		const targetLanguage = await languageButtons[ 1 ].getAttribute( 'lang' );

		return {
			sourceLanguage,
			targetLanguage
		};
	}

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
	 * @param {string} title
	 * @return {Promise<WebdriverIOElementType>}
	 */
	async getArticleSuggestionByTitle( title ) {
		const articleSuggestions = await $$( ARTICLE_SUGGESTION_SELECTOR );
		return this.getSuggestionFromListByTitle( articleSuggestions, title );
	}

	/**
	 * @param {WebdriverIOElementType} suggestion Suggestion to fetch favorite icon from
	 * @return {Promise<WebdriverIOElementType>}
	 */
	getFavoriteIconInSuggestion( suggestion ) {
		return suggestion.$( '.cx-suggestion__favorite-button' );
	}

	getDismissIconInSuggestion( suggestion ) {
		return suggestion.$( '.cx-suggestion__discard-button' );
	}

	async getSuggestionFromListByTitle( suggestionList, title ) {
		for ( const suggestion of suggestionList ) {
			const text = await this.getSuggestionSourceTitle( suggestion );
			if ( text === title ) {
				return suggestion;
			}
		}
	}

	/**
	 * Get article suggestion header text by artice suggestion number
	 *
	 * @param {number} index
	 * @return {Promise<string>}
	 */
	async getArticleSuggestionTitle( index ) {
		const articleSuggestion = await this.getArticleSuggestionByIndex( index );
		return await this.getSuggestionSourceTitle( articleSuggestion );
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
		const favoriteIcon = await this.getFavoriteIconInSuggestion( suggestionToSave );
		browser.setupInterceptor();
		await ElementAction.doClick( favoriteIcon );
		await InterceptorService.findAndWaitForActionApiRequest( [
			{ key: 'action', value: 'cxsuggestionlist' },
			{ key: 'listname', value: 'cx-suggestionlist-favorite' },
			{ key: 'listaction', value: 'add' }
		], 'POST' );
		browser.disableInterceptor();
		await this.favoriteSuggestions.waitForDisplayed( { timeout: 2000 } );

		return suggestionTitle;
	}

	async unFavoriteArticle( suggestion ) {
		const favoriteIcon = await this.getFavoriteIconInSuggestion( suggestion );
		browser.setupInterceptor();
		await ElementAction.doClick( favoriteIcon );
		await InterceptorService.findAndWaitForActionApiRequest( [
			{ key: 'action', value: 'cxsuggestionlist' },
			{ key: 'listname', value: 'cx-suggestionlist-favorite' },
			{ key: 'listaction', value: 'remove' }
		], 'POST' );
		browser.disableInterceptor();
	}

	/**
	 * Dismiss a suggested article
	 *
	 * @param {number} suggestionIndex
	 * @return {Promise<string>}
	 */
	async dismissArticle( suggestionIndex ) {
		const suggestionToDismiss = await this.getArticleSuggestionByIndex( suggestionIndex );
		const suggestionHeader = await this.getSuggestionSourceTitle( suggestionToDismiss );
		const { sourceLanguage, targetLanguage } = await this.getLanguagePair();

		browser.setupInterceptor();
		await ElementAction.doClick( this.getDismissIconInSuggestion( suggestionToDismiss ) );
		const recommendationRequest =
			await InterceptorService.findAndWaitForRecommendationApiRequest( targetLanguage );
		const recommendedPage = recommendationRequest.response.body.items[ 0 ];
		await InterceptorService.findAndWaitForRemoteActionApiRequest(
			sourceLanguage,
			[
				{ key: 'action', value: 'query' },
				{ key: 'titles', value: recommendedPage.title }
			],
			'GET'
		);
		browser.disableInterceptor();

		return suggestionHeader;
	}

	async refreshSuggestions() {
		const refreshButton = $( REFRESH_BUTTON_SELECTOR );
		const { sourceLanguage, targetLanguage } = await this.getLanguagePair();

		browser.setupInterceptor();
		await ElementAction.doClick( refreshButton );
		const recommendationRequest =
			await InterceptorService.findAndWaitForRecommendationApiRequest( targetLanguage );
		const titles = recommendationRequest.response.body.items.map( ( item ) => item.title )
			.join( '|' );
		await InterceptorService.findAndWaitForRemoteActionApiRequest(
			sourceLanguage,
			[
				{ key: 'action', value: 'query' },
				{ key: 'titles', value: titles }
			],
			'GET'
		);
		browser.disableInterceptor();
	}

	async publishNewTranslation( articleName ) {
		await ElementAction.doClick( this.newTranslationButton );
		await ElementAction.setInput( this.articleSearchTextbox, articleName );

		await ElementAction.doClick( this.firstSearchSuggestion );

		await ElementAction.doClick( this.startTranslationButton );

		await DesktopEditor.waitForArticleToLoad();
		await DesktopEditor.fillRandomTranslationData( 3 );

		return await DesktopEditor.publishTranslation();
	}
}

module.exports = new UnifiedDashboardPage();
