/*
 * CX / SX browser test suite for the suggestion features of the unified dashboard
 *
 * Test go through the following steps
 * [1] See suggestions
 * [a] Open the unified dashboard
 * [b] See suggestions to translate pages
 * [c] See suggestions to translate sections
 *
 * [2] Save for later and unsave
 * [a] Open the unified dashboard
 * [b] Save a suggestion for later
 * [c] Un-save the suggestion
 * [d] Ensure that it is now longer in the "For later" section
 *
 * [3] Should allow dismissing a suggestion
 * [a] Open the unified dashboard
 * [b] Dismiss a suggestion
 * [c] Ensure that it no longer appears
 *
 * [4] Refresh suggestions
 * [a] Open the unified dashboard
 * [b] Click on refresh suggestions
 * [c] Ensure the previous and new suggestions aren't exactly the same
 */
'use strict';

const LoginPage = require( 'wdio-mediawiki/LoginPage' );
const UnifiedDashboardPage = require( '../pageobjects/UnifiedDashboard.page' );
describe( 'Unified Dashboard - Suggestions', function () {
	it( 'should show suggestions tab', async function () {
		await LoginPage.loginAdmin();
		await UnifiedDashboardPage.open();

		const defaultOption = { wait: 6000 };
		await expect( await UnifiedDashboardPage.suggestionButton ).toBeDisplayed( defaultOption );
		await expect( await UnifiedDashboardPage.firstArticleSuggestion )
			.toBeDisplayed( defaultOption );
		await expect( await UnifiedDashboardPage.firstSectionSuggestion )
			.toBeDisplayed( defaultOption );
	} );

	it( 'should allow user to save/unsave a suggestion for later', async function () {
		await UnifiedDashboardPage.open();
		// Save the article for later
		const favoriteArticleHeading = await UnifiedDashboardPage.favoriteArticle( 0 );
		let favoriteArticle = await UnifiedDashboardPage
			.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeDefined();

		// Un-favorite article
		await UnifiedDashboardPage.unFavoriteArticle( favoriteArticle );
		favoriteArticle = await UnifiedDashboardPage
			.getFavoriteSuggestionByTitle( favoriteArticleHeading );
		await expect( favoriteArticle ).toBeUndefined();
	} );

	it( 'should allow dismissing a suggestion', async function () {
		await UnifiedDashboardPage.open();
		const dismissedArticleTitle = await UnifiedDashboardPage.dismissPageSuggestion( 0 );
		const dismissedArticle = await UnifiedDashboardPage
			.getArticleSuggestionByTitle( dismissedArticleTitle );
		await expect( dismissedArticle ).toBeUndefined();
	} );

	it( 'should allow refreshing suggestions', async function () {
		await UnifiedDashboardPage.open();
		const sectionSuggestions = await UnifiedDashboardPage.sectionSuggestions;
		// initial section suggestion source titles
		const sectionSuggestionTitles = await UnifiedDashboardPage.getSourceTitlesBySuggestions(
			sectionSuggestions
		);

		const pageSuggestions = await UnifiedDashboardPage.articleSuggestions;
		// initial page suggestion source titles
		const pageSuggestionTitles = await UnifiedDashboardPage.getSourceTitlesBySuggestions(
			pageSuggestions
		);

		await UnifiedDashboardPage.refreshSuggestions();

		const updatedSectionSuggestions = await UnifiedDashboardPage.sectionSuggestions;
		// updated section suggestion source titles
		const newSectionSuggestionTitles = await UnifiedDashboardPage.getSourceTitlesBySuggestions(
			updatedSectionSuggestions
		);

		const updatedArticleSuggestions = await UnifiedDashboardPage.articleSuggestions;
		// updated page suggestion source titles
		const newArticleSuggestionTitles = await UnifiedDashboardPage.getSourceTitlesBySuggestions(
			updatedArticleSuggestions
		);

		// check that previous suggestions do not appear in the lists
		for ( const suggestionTitle of pageSuggestionTitles ) {
			const isMissing = newSectionSuggestionTitles.every(
				( updatedTitle ) => updatedTitle !== suggestionTitle
			);
			await expect( isMissing ).toBe( true );
		}

		for ( const suggestionTitle of sectionSuggestionTitles ) {
			const isMissing = newArticleSuggestionTitles.every(
				( updatedTitle ) => updatedTitle !== suggestionTitle
			);
			await expect( isMissing ).toBe( true );
		}
	} );
} );
