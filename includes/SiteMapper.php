<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;

class SiteMapper {
	/**
	 * Get the domain code matching language
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
	 * Get the target language code for the current wiki.
	 *
	 * This can be different from $wgLanguageCode (aka content language). simple.wikipedia.org
	 * has it as `en`. It can also be different from the subdomain name. For no.wikipedia.org
	 * it is `nb`.
	 *
	 * @return string Language code in a format used internally by CX.
	 */
	public static function getCurrentLanguageCode() {
		global $wgConf, $wgDBname, $wgContentTranslationDomainCodeMapping;

		list( , $domain ) = $wgConf->siteFromDB( $wgDBname );

		// Fallback for non-wmf-style farms
		if ( $domain === '' ) {
			return MediaWikiServices::getInstance()->getContentLanguage()->getCode();
		}

		// Do a reverse lookup in our code map, falling back to the domain as key if not
		// present in the array.
		foreach ( $wgContentTranslationDomainCodeMapping as $key => $value ) {
			if ( $domain === $value ) {
				return $key;
			}
		}

		return $domain;
	}

	/**
	 * Get the API URL constructed from the domain template of sites
	 * @param string $language
	 * @param array|null $params
	 * @return string
	 */
	public static function getApiURL( $language, $params = null ) {
		global $wgContentTranslationSiteTemplates;

		$domain = self::getDomainCode( $language );
		// $wgContentTranslationSiteTemplates['api'] is protocol relative path
		$url = 'https:' . str_replace( '$1', $domain, $wgContentTranslationSiteTemplates['api'] );
		$url = wfAppendQuery( $url, $params );

		return $url;
	}

	/**
	 * Get the page URL constructed from the domain template of sites
	 * @param string $language
	 * @param string $title
	 * @return string
	 */
	public static function getPageURL( $language, $title ) {
		global $wgContentTranslationSiteTemplates;

		$domain = self::getDomainCode( $language );

		return str_replace(
			[ '$1', '$2' ],
			[ $domain, $title ],
			$wgContentTranslationSiteTemplates['view']
		);
	}

	/**
	 * @param string $title
	 * @param string $userName
	 * @return string
	 */
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
