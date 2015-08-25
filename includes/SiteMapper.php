<?php
namespace ContentTranslation;

class SiteMapper {
	/**
	 * Get the page URL constructed from the domain template of sites
	 */
	public static function getPageURL( $language, $title ) {
		global $wgContentTranslationSiteTemplates,
			$wgContentTranslationDomainCodeMapping;

		if ( isset( $wgContentTranslationDomainCodeMapping[$language] ) ) {
			$domain = $wgContentTranslationDomainCodeMapping[$language];
		} else {
			$domain = $language;
		}

		return str_replace(
			array( '$1', '$2' ),
			array( $domain, $title ),
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
				$titleObj = \Title::newFromText( $title );
				if ( $titleObj && $titleObj->inNamespace( NS_USER ) ) {
					// Already in User namespace. Avoid generating titles like User:A/User:A/Title
					$targetTitle = $title;
					break;
				}
				$targetTitle = 'User:' . $userName . '/' . $title;
				break;
			default:
				$targetTitle = $wgContentTranslationTargetNamespace . ':' . $title;
				break;
		}

		return $targetTitle;
	}
}
