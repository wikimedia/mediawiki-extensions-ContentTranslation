<?php
namespace ContentTranslation;

class SiteMapper {
	/**
	 * Get the page URL constructed from the domain template of sites
	 */
	public static function getPageURL( $language, $title ) {
		global $wgContentTranslationSiteTemplates;
		return str_replace(
			array( '$1', '$2' ),
			array( $language, $title ),
			$wgContentTranslationSiteTemplates['view']
		);
	}

}
