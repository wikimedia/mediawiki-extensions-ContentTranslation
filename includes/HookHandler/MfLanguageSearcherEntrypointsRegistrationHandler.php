<?php
declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\PreferenceHelper;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

/**
 * This class implements a handler for the "BeforePageDisplay" hook, that
 * registers the "ext.cx.entrypoints.languagesearcher.v2" RL module when the
 * appropriate conditions are met. The "wgSectionTranslationTargetLanguages"
 * JS variable is also set when the Content Translation entrypoint is enabled.
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

		if ( !$isCXEntrypointEnabled && !$mintEntrypointLanguages ) {
			return;
		}

		// Must load eagerly, as the ULS entrypoint registry locks once the selector mounts.
		$out->addModules( 'ext.cx.entrypoints.languagesearcher.v2' );

		// Only set when the CX entrypoint is enabled; its absence is what tells the
		// module not to offer the Content Translation card.
		if ( $isCXEntrypointEnabled ) {
			$out->addJsConfigVars( 'wgSectionTranslationTargetLanguages', $sectionTranslationTargetLanguages );
		}
	}
}
