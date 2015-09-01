<?php
namespace ContentTranslation;

class SiteMapper {
	/**
	 * Get the the domain code matching language
	 *
	 * @param string $language Language code (MediaWiki internal format)
	 * @return string
	 */
	public static function getDomainCode( $language ) {
		global $wgContentTranslationDomainCodeMapping;

		if ( isset( $wgContentTranslationDomainCodeMapping[$language] ) ) {
			return $wgContentTranslationDomainCodeMapping[$language];
		}

		return $language;
	}


	/**
	 * Get the page URL constructed from the domain template of sites
	 */
	public static function getPageURL( $language, $title ) {
		global $wgContentTranslationSiteTemplates;

		$domain = self::getDomainCode( $language );

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
