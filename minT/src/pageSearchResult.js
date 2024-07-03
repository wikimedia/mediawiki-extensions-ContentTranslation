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
	 * @param {string} payload.qid
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
		qid,
		langlinkscount,
		langlinks
	} ) {
		this.thumbnail = thumbnail;
		this.title = title;
		this.language = pagelanguage;
		this.description = description;
		this.order = order;
		this.sourceLanguage = sourceLanguage;
		this.qid = qid;
		this.langLinksCount = langlinkscount;
		this.langLinks = langlinks;
	}

	get sourceTitle() {
		return this.getTitleByLanguage( this.sourceLanguage );
	}

	get languages() {
		return [ this.language, ...this.langLinks.map( ( langLink ) => langLink.language ) ];
	}

	setSourceLanguage( sourceLanguage ) {
		this.sourceLanguage = sourceLanguage;
	}

	/**
	 * @param {string} language
	 * @return {string|undefined}
	 */
	getTitleByLanguage( language ) {
		if ( language === this.language ) {
			return this.title;
		}
		const langLink = this.langLinks.find( ( ll ) => ll.language === language );

		return langLink && langLink.title;
	}
}

module.exports = PageSearchResult;
