<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\SiteMapper;
use ExtensionRegistry;
use MediaWiki\Languages\LanguageFactory;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
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

		$isContentPage = $out->getTitle()->isContentPage();

		if ( !$isContentPage ) {
			return;
		}

		$availableLanguages = array_map( static function ( $languageLink ) {
			return explode( ":", $languageLink )[0];
		}, $out->getLanguageLinks() );

		// The languageLinks in the current page will not include the current language.
		// Add that also to the availableLanguages array.
		$availableLanguages[] = SiteMapper::getCurrentLanguageCode();
		$enabledLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' ) ?? [];
		$missingLanguageCodes = array_diff( $enabledLanguages, $availableLanguages );

		$missingLanguages = array_map( function ( $code ) {
			$language = $this->languageFactory->getLanguage( $code );
			return [
				'lang' => $code,
				'autonym' => $this->languageNameUtils->getLanguageName( $code ),
				'dir' => $language->getDir()
			];
		}, $missingLanguageCodes );

		if ( !$missingLanguages ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.mffrequentlanguages' );
		$out->addJsConfigVars( 'wgSectionTranslationMissingLanguages', array_values( $missingLanguages ) );
	}
}
