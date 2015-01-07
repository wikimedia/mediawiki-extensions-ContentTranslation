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

	public static function getTargetTitle( $title, $userName ) {
		global $wgContentTranslationTargetNamespace;

		switch ( $wgContentTranslationTargetNamespace ) {
			case 'Main':
				$targetTitle = $title;
				break;
			case 'User':
				$targetTitle = 'User:' . $userName . '/' . $title;
				break;
			default:
				$targetTitle = $wgContentTranslationTargetNamespace . ':' . $title;
				break;
		}

		return $targetTitle;
	}
}
