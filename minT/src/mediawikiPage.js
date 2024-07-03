class MediawikiPage {
	/**
	 * @param {Object} payload
	 * @param {string} payload.pagelanguage
	 * @param {string} payload.title
	 * @param {string} payload.description
	 * @param {{ source: string, height: number, width: number }|undefined} payload.thumbnail
	 * @param {number} payload.langlinkscount
	 * @param {string} payload.qid
	 * @param {string|null} payload.alias
	 * @param {{ lang: string, title: string }[]} payload.langlinks
	 */
	constructor( {
		pagelanguage,
		title,
		description,
		thumbnail,
		langlinkscount,
		qid,
		alias = null,
		langlinks = []
	} ) {
		this.pagelanguage = pagelanguage;
		this.title = title;
		this.description = description;
		this.thumbnail = thumbnail;
		this.langlinkscount = langlinkscount;
		this.qid = qid;
		this.alias = alias;
		this.langlinks = langlinks;
	}

	/**
	 * @param {string|null} title
	 * @return {boolean}
	 */
	isTitleEqual( title ) {
		if ( !title ) {
			return false;
		}
		return this.title === title || this.alias === title;
	}

	/**
	 * @return {{width: number, url: string, height: number}|null}
	 */
	get thumbnailData() {
		if ( !this.thumbnail ) {
			return null;
		}

		return {
			height: this.thumbnail.height,
			width: this.thumbnail.width,
			url: this.thumbnail.source
		};
	}
}

module.exports = MediawikiPage;
