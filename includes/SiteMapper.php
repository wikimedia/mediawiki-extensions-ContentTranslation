<?php
namespace ContentTranslation;

class SiteMapper {
	// Some wikis have domain names that do not match the content language.
	// NOTE: See modules/base/ext.cx.sitemapper.js
	public static $languageToWikiDomainMapping = array(
		'bho' => 'bh',
		'crh-latn' => 'crh',
		'gsw' => 'als',
		'sgs' => 'bat-smg',
		'be-tarask' => 'be-x-old',
		'vro' => 'fiu-vro',
		'rup' => 'roa-rup',
		'lzh' => 'zh-classical',
		'nan' => 'zh-min-nan',
		'yue' => 'zh-yue',
	);

	/**
	 * Get the page URL constructed from the domain template of sites
	 */
	public static function getPageURL( $language, $title ) {
		global $wgContentTranslationSiteTemplates;

		if ( isset( SiteMapper::$languageToWikiDomainMapping[$language] ) ) {
			$domain = SiteMapper::$languageToWikiDomainMapping[$language];
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
