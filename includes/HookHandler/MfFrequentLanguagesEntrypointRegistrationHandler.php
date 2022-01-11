<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ExtensionRegistry;
use MediaWiki\Hook\BeforePageDisplayHook;
use MediaWiki\Languages\LanguageFactory;
use MediaWiki\MediaWikiServices;

class MfFrequentLanguagesEntrypointRegistrationHandler implements BeforePageDisplayHook {
	/** @var LanguageFactory */
	private $languageFactory;

	public function __construct( LanguageFactory $languageFactory ) {
		$this->languageFactory = $languageFactory;
	}

	public function onBeforePageDisplay( $out, $skin ): void {
		$isMobileView = false;
		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
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

		$enabledLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' ) ?? [];
		$missingLanguageCodes = array_diff( $enabledLanguages, $availableLanguages );

		$languageFactory = $this->languageFactory;
		$missingLanguages = array_map( static function ( $code ) use ( $languageFactory ) {
			$language = $languageFactory->getLanguage( $code );
			return [
				'lang' => $code,
				'autonym' => $language->getVariantname( $code ),
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
