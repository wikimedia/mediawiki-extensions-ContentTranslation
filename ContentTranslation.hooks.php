<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

class ContentTranslationHooks {
	/**
	 * @param OutputPage $out
	 * @param Skin $skin
	 * Hook: BeforePageDisplay
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationEventLogging;

		$title = $out->getTitle();
		$user = $out->getUser();

		$redlinkFeatureEnabled = class_exists( 'BetaFeatures' ) &&
			BetaFeatures::isFeatureEnabled( $user, 'red-interlanguage-link' );

		if ( $user->isLoggedIn() ) {
			if ( $redlinkFeatureEnabled &&
				$title->inNamespace( NS_MAIN ) &&
				$out->getLanguage()->getCode() !== $title->getPageLanguage()->getCode()
			) {
				$out->addModules( 'ext.cx.redlink' );
			}

			if ( class_exists( 'GuidedTourHooks' ) ) {
				$out->addModules( 'ext.guidedTour' );
			}
		}

		// If EventLogging integration is enabled, load the schema module
		// and the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( array(
				'schema.ContentTranslation',
				'ext.cx.eventlogging',
			) );
		}
	}

	/**
	 * Hook: GetBetaFeaturePreferences
	 * @param User $user
	 * @param array $prefs
	 */
	public static function getPreferences( User $user, array &$prefs ) {
		global $wgExtensionAssetsPath;

		$imageDir = "$wgExtensionAssetsPath/ContentTranslation/modules/entrypoint/images";

		$prefs['red-interlanguage-link'] = array(
			'label-message' => 'cx-red-interlanguage-link-preference',
			'desc-message' => 'cx-red-interlanguage-link-preference-beta-desc',
			'screenshot' => array(
				'ltr' => "$imageDir/translate-redlink-ltr.svg",
				'rtl' => "$imageDir/translate-redlink-rtl.svg",
			),
			'info-link' => 'https://www.mediawiki.org/wiki/Extension:ContentTranslation',
			'discussion-link' => 'https://www.mediawiki.org/wiki/Extension_talk:ContentTranslation',
		);
	}

	/**
	 * Hook: ResourceLoaderGetConfigVars
	 * @param array $vars
	 */
	public static function addConfig( array &$vars ) {
		global $wgContentTranslationServerURL,
			$wgContentTranslationTranslateInTarget,
			$wgContentTranslationExperimentalFeatures,
			$wgContentTranslationSiteTemplates;

		// Temporary BC code for old configuration
		if ( $wgContentTranslationServerURL !== null ) {
			$wgContentTranslationSiteTemplates['cx'] = $wgContentTranslationServerURL;
		}

		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationTranslateInTarget'] = $wgContentTranslationTranslateInTarget;
		$vars['wgContentTranslationExperimentalFeatures'] = $wgContentTranslationExperimentalFeatures;
	}
}
