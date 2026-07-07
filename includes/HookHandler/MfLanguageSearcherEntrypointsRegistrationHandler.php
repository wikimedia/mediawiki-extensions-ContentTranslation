<?php
declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\PreferenceHelper;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\Title\Title;
use MediaWiki\User\User;
use UniversalLanguageSelector\Hooks;

/**
 * This class implements a handler for the "BeforePageDisplay" hook, that
 * registers the "ext.cx.entrypoints.languagesearcher.init" RL module (or
 * "ext.cx.entrypoints.languagesearcher.v2" when the ULS V2 language selector
 * is enabled) when the appropriate conditions are met. The following JS
 * variables are also set when the same conditions are met:
 * - wgSectionTranslationTargetLanguages
 * - isLanguageSearcherCXEntrypointEnabled (only for the non-V2 module)
 * - mintEntrypointLanguages (only for the non-V2 module)
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2024.06
 */
class MfLanguageSearcherEntrypointsRegistrationHandler implements BeforePageDisplayHook {

	public function __construct( private readonly PreferenceHelper $preferenceHelper ) {
	}

	/**
	 * Check whether the current context is in a mobile interface
	 *
	 * @return bool
	 */
	private static function isMobileView() {
		$isMobileView = false;

		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}
		return $isMobileView;
	}

	/**
	 * @param User $user
	 * @param Title|null $title
	 * @param string[]|null $sectionTranslationTargetLanguages
	 * @return bool
	 */
	private function isCXEntrypointEnabled(
		User $user,
		?Title $title,
		?array $sectionTranslationTargetLanguages
	): bool {
		if ( $this->preferenceHelper->isCXEntrypointDisabled( $user ) ) {
			return false;
		}

		// the entrypoint should not be loaded, if the page is not an article (main namespace)
		if ( !$title || !$title->isContentPage() ) {
			return false;
		}

		return (bool)$sectionTranslationTargetLanguages;
	}

	/** @inheritDoc */
	public function onBeforePageDisplay( $out, $skin ): void {
		$title = $out->getTitle();
		$user = $out->getUser();

		if ( !self::isMobileView() ) {
			return;
		}

		$sectionTranslationTargetLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' );
		$isCXEntrypointEnabled = $this->isCXEntrypointEnabled(
			$user,
			$title,
			$sectionTranslationTargetLanguages
		);

		$mintEntrypointLanguages = $out->getConfig()->get(
			'AutomaticTranslationLanguageSearcherEntrypointEnabledLanguages'
		);

		if ( Hooks::isLanguageSelectorV2Enabled( $user, $skin, $out->getConfig() ) ) {
			// ULS V2 only supports the CX entrypoint (not MinT); must load eagerly,
			// as the ULS entrypoint registry locks once the V2 selector mounts.
			if ( $isCXEntrypointEnabled ) {
				$out->addModules( 'ext.cx.entrypoints.languagesearcher.v2' );
				$out->addJsConfigVars( 'wgSectionTranslationTargetLanguages', $sectionTranslationTargetLanguages );
			}
			return;
		}

		if ( $isCXEntrypointEnabled || $mintEntrypointLanguages ) {
			$out->addModules( 'ext.cx.entrypoints.languagesearcher.init' );
			$out->addJsConfigVars( 'wgSectionTranslationTargetLanguages', $sectionTranslationTargetLanguages );
			$out->addJsConfigVars( 'isLanguageSearcherCXEntrypointEnabled', $isCXEntrypointEnabled );
			$out->addJsConfigVars( 'mintEntrypointLanguages', $mintEntrypointLanguages );
		}
	}
}
