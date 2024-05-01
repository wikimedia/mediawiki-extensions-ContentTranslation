'use strict';

class PageSearchResult {
	/**
	 * @param {Object} payload
	 * @param {{ source: string, height: number, width: number }} payload.thumbnail
	 * @param {string} payload.pagelanguage
	 * @param {string} payload.title
	 * @param {string} payload.description
	 * @param {number} payload.order
	 * @param {string} payload.sourceLanguage
	 * @param {number} payload.langlinkscount
	 * @param {{ language: string, title: string }[]} payload.langlinks
	 */
	constructor( {
		thumbnail,
		pagelanguage,
		title,
		description,
		order,
		sourceLanguage,
		langlinkscount,
		langlinks
	} ) {
		this.thumbnail = thumbnail;
		this.title = title;
		this.language = pagelanguage;
		this.description = description;
		this.order = order;
		this.sourceLanguage = sourceLanguage;
		this.langLinksCount = langlinkscount;
		this.langLinks = langlinks;
	}

	get sourceTitle() {
		const siteLink = this.langLinks.find( ( link ) => link.language === this.sourceLanguage );

		return siteLink.title;
	}

	get languages() {
		return this.langLinks.map( ( langLink ) => langLink.language );
	}

	/**
	 * @param {string} language
	 * @return {string|undefined}
	 */
	getTitleByLanguage( language ) {
		const langLink = this.langLinks.find( ( ll ) => ll.language === language );

		return langLink && langLink.title;
	}
}

module.exports = PageSearchResult;
