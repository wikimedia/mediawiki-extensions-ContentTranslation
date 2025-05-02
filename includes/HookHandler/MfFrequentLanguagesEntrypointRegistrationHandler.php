<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\SiteMapper;
use MediaWiki\Languages\LanguageFactory;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Registration\ExtensionRegistry;
use MobileContext;

class MfFrequentLanguagesEntrypointRegistrationHandler implements BeforePageDisplayHook {

	private LanguageFactory $languageFactory;

	private LanguageNameUtils $languageNameUtils;

	public function __construct(
		LanguageFactory $languageFactory,
		LanguageNameUtils $languageNameUtils
	) {
		$this->languageFactory = $languageFactory;
		$this->languageNameUtils = $languageNameUtils;
	}

	/** @inheritDoc */
	public function onBeforePageDisplay( $out, $skin ): void {
		$isMobileView = false;
		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}

		// This entrypoint should only be enabled for mobile web version
		if ( !$isMobileView ) {
			return;
		}

		if ( !$out->getTitle()->isContentPage() || !$out->getTitle()->exists() ) {
			return;
		}

		$availableDomainCodes = array_map( static function ( $languageLink ) {
			$language = explode( ":", $languageLink )[0];
			return SiteMapper::getDomainCode( $language );
		}, $out->getLanguageLinks() );

		// Add current domain code to the available ones.
		$currentLangCode = SiteMapper::getCurrentLanguageCode();
		$currentDomainCode = SiteMapper::getDomainCode( $currentLangCode );
		$availableDomainCodes[] = $currentDomainCode;

		$enabledDomainCodes = array_map(
			static fn ( $language ) => SiteMapper::getDomainCode( $language ),
			$out->getConfig()->get( 'SectionTranslationTargetLanguages' ) ?? []
		);

		$missingDomainCodes = array_diff( $enabledDomainCodes, $availableDomainCodes );

		$missingLanguages = array_map( function ( $domainCode ) {
			$languageCode = SiteMapper::getLanguageCodeFromDomain( $domainCode );
			$language = $this->languageFactory->getLanguage( $languageCode );
			return [
				'lang' => $languageCode,
				'domain' => $domainCode,
				'autonym' => $this->languageNameUtils->getLanguageName( $languageCode ),
				'dir' => $language->getDir()
			];
		}, $missingDomainCodes );

		if ( !$missingLanguages ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.mffrequentlanguages' );
		$out->addJsConfigVars( 'wgSectionTranslationMissingLanguages', array_values( $missingLanguages ) );
	}
}
