/*!
 * ContentTranslation event logging on dashboard.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	function ContentTranslationEventLogging() {
		mw.hook( 'mw.cx.suggestion.action' ).add( this.suggestionAction );
		mw.hook( 'mw.cx.translation.deleted' ).add( this.deleted );
	}

	ContentTranslationEventLogging.prototype.suggestionAction = function (
		action, rank, type, typeExtra, sourceLanguage, targetLanguage, sourceTitle
	) {
		mw.track( 'event.ContentTranslationSuggestion', {
			version: 1,
			session: mw.user.sessionId(),
			token: mw.user.id(),
			suggestionId: mw.user.id() + '-' + sourceTitle,
			rank: rank,
			type: type,
			typeExtra: typeExtra,
			action: action,
			interfaceLanguage: mw.config.get( 'wgUserLanguage' ),
			contentLanguage: mw.config.get( 'wgContentLanguage' ),
			sourceLanguage: sourceLanguage,
			targetLanguage: targetLanguage,
			sourceTitle: sourceTitle
		} );
	};

	/**
	 * Log deletion of translated page.
	 *
	 * @param {string} sourceLanguage Source language code
	 * @param {string} targetLanguage Target language code
	 * @param {string} sourceTitle Source title
	 * @param {string} targetTitle Target title
	 */
	ContentTranslationEventLogging.prototype.deleted = function (
		sourceLanguage, targetLanguage, sourceTitle, targetTitle
	) {
		mw.track( 'event.ContentTranslation', {
			version: 1,
			token: mw.user.id(),
			session: mw.user.sessionId(),
			action: 'delete',
			sourceLanguage: sourceLanguage,
			targetLanguage: targetLanguage,
			sourceTitle: sourceTitle,
			targetTitle: targetTitle
		} );
	};

	$( function () {
		// eslint-disable-next-line no-new
		new ContentTranslationEventLogging();
	} );
}() );
