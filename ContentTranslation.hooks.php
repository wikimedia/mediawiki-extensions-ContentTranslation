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
	 * Utility function that checks whether CX is enabled for a given user.
	 * Currently it checks that if CX is a beta feature, whether the user has
	 * enabled it. Otherwise it is always enabled.
	 *
	 * @param User $user
	 * @return Boolean
	 */
	public static function isEnabledForUser( User $user ) {
		global $wgContentTranslationAsBetaFeature;

		// Not available for blocked users.
		if ( $user->isBlocked() ) {
			return false;
		}

		// CX is currently restricted to only logged in users
		if ( $user->isAnon() ) {
			return false;
		}

		if ( !$wgContentTranslationAsBetaFeature ) {
			return true;
		}

		return
			class_exists( 'BetaFeatures' ) &&
			BetaFeatures::isFeatureEnabled( $user, 'cx' );
	}


	/**
	 * Hook: BeforePageDisplay
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationEventLogging;

		$title = $out->getTitle();
		$user = $out->getUser();

		// Check if CX is available for current user.
		if ( !self::isEnabledForUser( $user ) ) {
			return;
		}

		// If EventLogging integration is enabled, load the schema module
		// and the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( array(
				'schema.ContentTranslation',
				'ext.cx.eventlogging',
			) );
		}

		if (
			$title->inNamespace( NS_MAIN ) &&
			$out->getLanguage()->getCode() !== $title->getPageLanguage()->getCode()
		) {
			$out->addModules( 'ext.cx.redlink' );
		}

		if ( class_exists( 'GuidedTourHooks' ) ) {
			$out->addModules( 'ext.guidedTour' );
		}
	}

	/**
	 * Hook: GetBetaFeaturePreferences
	 * @param User $user
	 * @param array $prefs
	 */
	public static function getPreferences( User $user, array &$prefs ) {
		global $wgExtensionAssetsPath;

		$imageDir = "$wgExtensionAssetsPath/ContentTranslation/images";

		$prefs['cx'] = array(
			'label-message' => 'cx-beta',
			'desc-message' => 'cx-beta-desc',
			'screenshot' => array(
				'ltr' => "$imageDir/cx-icon-ltr.svg",
				'rtl' => "$imageDir/cx-icon-rtl.svg",
			),
			'info-link' => 'https://www.mediawiki.org/wiki/Content_translation',
			'discussion-link' => 'https://www.mediawiki.org/wiki/Talk:Content_translation',
		);
	}

	/**
	 * Hook: EventLoggingRegisterSchemas
	 */
	public static function addEventLogging( array &$schemas ) {
		global $wgContentTranslationEventLogging;

		if ( $wgContentTranslationEventLogging ) {
			$schemas['ContentTranslation'] = 7146627;
		}
	}

	/**
	 * Hook: SpecialContributionsBeforeMainOutput
	 * @param int $id
	 * @param User $user
	 * @param SpecialPage $page
	 */
	public static function addNewContributionButton( $id, User $user, SpecialPage $page ) {
		if ( $user->getId() === $page->getUser()->getId() &&
			ContentTranslationHooks::isEnabledForUser( $user )
		) {
			$page->getOutput()->addModules( 'ext.cx.contributions.init' );
		}
	}

	/**
	 * Hook: ResourceLoaderGetConfigVars
	 * @param array $vars
	 */
	public static function addConfig( array &$vars ) {
		global $wgContentTranslationTranslateInTarget,
			$wgContentTranslationExperimentalFeatures,
			$wgContentTranslationDatabase,
			$wgContentTranslationSiteTemplates,
			$wgContentTranslationTargetNamespace;

		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationTranslateInTarget'] = $wgContentTranslationTranslateInTarget;
		$vars['wgContentTranslationExperimentalFeatures'] = $wgContentTranslationExperimentalFeatures;
		$vars['wgContentTranslationDatabase'] = $wgContentTranslationDatabase;
		$vars['wgContentTranslationTargetNamespace'] = $wgContentTranslationTargetNamespace;
	}
}
