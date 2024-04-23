'use strict';

class WikiSite {
	constructor( { languageCode, dbname, url } ) {
		this.languageCode = languageCode;
		this.dbname = dbname;
		this.url = url;
	}
}

module.exports = WikiSite;
