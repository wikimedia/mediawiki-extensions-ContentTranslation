'use strict';

const Page = require( 'wdio-mediawiki/Page' );
const SelectionHelper = require( '../utils/SelectionHelper' );
const InterceptorService = require( '../utils/InterceptorService' );
const ElementAction = require( '../utils/ElementAction' );
const { Element: WebdriverIOElementType } = require( 'webdriverio' );
const DesktopEditor = require( '../componentobjects/DesktopEditor' );
const TranslationConfirmerStep = require( '../navigation-steps/TranslationConfirmer.step' );
const DashboardSuggestionList = require( '../navigation-steps/DashboardSuggestion.list' );
const SXArticleSearchStep = require( '../navigation-steps/SXArticleSearch.step' );

const ARTICLE_SUGGESTION_SELECTOR = '.cx-translation-list--page-suggestions .cx-suggestion';
const SECTION_SUGGESTION_SELECTOR = '.cx-translation-list--sx-suggestions .cx-suggestion';
const FAVORITE_SELECTOR = '.cx-translation-list--favorites .cx-suggestion';
const REFRESH_BUTTON_SELECTOR = '.cx-suggestion-list__refresh-button-container button';
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
		return $$( ARTICLE_SUGGESTION_SELECTOR );
	}

	get sectionSuggestions() {
		return $$( SECTION_SUGGESTION_SELECTOR );
	}

	get firstArticleSuggestion() {
		return $( ARTICLE_SUGGESTION_SELECTOR );
	}

	get firstSectionSuggestion() {
		return $( SECTION_SUGGESTION_SELECTOR );
	}

	get favoriteSuggestions() {
		return $( FAVORITE_SELECTOR );
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
		return this.getSuggestionFromListByTitle( await this.articleSuggestions, title );
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
		const dashboardQueryString =
				'title=Special:ContentTranslation&unified-dashboard=true&campaign=specialcx&active-list=suggestions';
		const dashboardURL = browser.config.baseUrl + '/index.php?' + dashboardQueryString;

		const currentURL = await browser.getUrl();
		if ( currentURL.includes( dashboardURL ) ) {
			return;
		}

		await super.openTitle(
			'Special:ContentTranslation',
			{ 'unified-dashboard': true, campaign: 'specialcx', 'active-list': 'suggestions' }
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
	async dismissPageSuggestion( suggestionIndex ) {
		const suggestionToDismiss = await this.getArticleSuggestionByIndex( suggestionIndex );
		const suggestionTitle = await this.getSuggestionSourceTitle( suggestionToDismiss );

		await ElementAction.doClick( this.getDismissIconInSuggestion( suggestionToDismiss ) );

		const checkIfArticleSuggestionsComplete =
				async () => ( await this.articleSuggestions ).length === 3;

		await browser.waitUntil( checkIfArticleSuggestionsComplete, { timeout: 10000 } );

		return suggestionTitle;
	}

	getSourceTitlesBySuggestions( suggestions ) {
		return Promise.all(
			suggestions.map( ( suggestion ) => this.getSuggestionSourceTitle( suggestion ) )
		);
	}

	async refreshSuggestions() {
		const refreshButton = $( REFRESH_BUTTON_SELECTOR );

		const waitForSuggestionsListToBeCompleted = () =>
			browser.waitUntil( async () => {
				const sectionSuggestionLength = ( await this.sectionSuggestions ).length;
				const pageSuggestionLength = ( await this.articleSuggestions ).length;

				return sectionSuggestionLength === 3 && pageSuggestionLength === 3;
			}, { timeout: 10000 } );

		await waitForSuggestionsListToBeCompleted();

		// refresh pages
		await ElementAction.doClick( refreshButton );

		// check if suggestion lists are full after refresh
		await waitForSuggestionsListToBeCompleted();
	}

	async publishNewArticleBySearch( articleName ) {
		await DashboardSuggestionList.goToSearch();
		await SXArticleSearchStep.searchAndSelectArticleToTranslate( articleName );

		await TranslationConfirmerStep.startTranslation();

		await DesktopEditor.waitForArticleToLoad();
		await DesktopEditor.fillRandomTranslationData( 3 );

		return await DesktopEditor.publishTranslation();
	}
}

module.exports = new UnifiedDashboardPage();
