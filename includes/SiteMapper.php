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

		return $wgContentTranslationDomainCodeMapping[$language] ?? $language;
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
		global $wgConf, $wgDBname;
		$mwInstance = MediaWikiServices::getInstance();

		[ , $domain ] = $wgConf->siteFromDB( $wgDBname );

		// Fallback for non-wmf-style farms. $domain can be null or empty string in that case.
		if ( ( $domain ?? '' ) === '' ) {
			return $mwInstance->getContentLanguageCode()->toString();
		}

		$languageCode = self::getLanguageCodeFromDomain( $domain );
		// If an invalid language code is fetched, return the wiki's content language code
		if ( !$mwInstance->getLanguageNameUtils()->isKnownLanguageTag( $languageCode ) ) {
			$languageCode = $mwInstance->getContentLanguageCode()->toString();
		}

		return $languageCode;
	}

	/**
	 * Get the language code for the given wiki domain.
	 *
	 * This can be different from $wgLanguageCode (aka content language). simple.wikipedia.org
	 * has it as `en`. It can also be different from the subdomain name. For no.wikipedia.org
	 * it is `nb`.
	 *
	 * @return string Language code in a format used internally by CX.
	 */
	public static function getLanguageCodeFromDomain( string $domain ): string {
		global $wgContentTranslationDomainCodeMapping;

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
	 * @param string $module
	 * @param array $params
	 * @return string
	 */
	public static function getCXServerURL( string $module, array $params = [] ): string {
		global $wgContentTranslationSiteTemplates;
		global $wgContentTranslationVersion;

		$cxserverURL = $wgContentTranslationSiteTemplates['cx'] . $module;
		if ( (int)$wgContentTranslationVersion === 2 ) {
			$cxserverURL = str_replace( 'v1', 'v2', $cxserverURL );
		}
		$parsedUrl = parse_url( $cxserverURL );
		if ( !isset( $parsedUrl['scheme'] ) ) {
			$cxserverURL = 'https:' . $cxserverURL;
		}

		return wfAppendQuery( $cxserverURL, $params );
	}

	/**
	 * Get the URL for Special:CX on the needed wiki
	 * according to given source and target title and the target language.
	 *
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @param string|null $sourceTitle
	 * @param string|null $targetTitle
	 * @param array $extra Additional query parameters
	 * @return string URL
	 */
	public static function getCXUrl(
		string $sourceLanguage,
		string $targetLanguage,
		?string $sourceTitle,
		?string $targetTitle,
		array $extra = []
	): string {
		// Initialize query parameters
		$queryParams = array_merge( [ 'from' => $sourceLanguage, 'to' => $targetLanguage ], $extra );

		// Add source title if provided
		if ( $sourceTitle ) {
			$queryParams['page'] = $sourceTitle;
		}

		// Add target title if provided
		if ( $targetTitle ) {
			$queryParams['targettitle'] = $targetTitle;
		}

		$cxPage = 'Special:ContentTranslation';

		$targetCXUrl = self::getPageURL( $targetLanguage, $cxPage );
		return wfAppendQuery( $targetCXUrl, $queryParams );
	}

	/**
	 * Get the API URL constructed from the domain template of sites
	 */
	public static function getApiURL( string $language, array $params = [] ): string {
		global $wgContentTranslationSiteTemplates;

		$domain = self::getDomainCode( $language );
		$url = str_replace( '$1', $domain, $wgContentTranslationSiteTemplates['api'] );
		$parsedUrl = parse_url( $url );
		if ( !isset( $parsedUrl['scheme'] ) ) {
			$url = 'https:' . $url;
		}
		return wfAppendQuery( $url, $params );
	}

	/**
	 * Get the page URL constructed from the domain template of sites
	 */
	public static function getPageURL( string $language, string $title ): string {
		global $wgContentTranslationSiteTemplates;

		$domain = self::getDomainCode( $language );

		return str_replace(
			[ '$1', '$2' ],
			[ $domain, $title ],
			$wgContentTranslationSiteTemplates['view']
		);
	}
}
