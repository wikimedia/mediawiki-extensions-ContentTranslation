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

		// If EventLogging integration is enabled, load the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( 'ext.cx.eventlogging' );
		}

		if ( $title->inNamespace( NS_MAIN ) &&
			Action::getActionName( $out->getContext() ) === 'view'
		) {
			$out->addModules( 'ext.cx.redlink' );
		}

		// Add a hover menu for contributions link in personal tool bar
		$out->addModules( 'ext.cx.campaigns.contributionsmenu' );

		// The current guided tours are only for the user namespace,
		// so load the module only there.
		// In the future there may be guided tours in other namespaces,
		// and then this condition should be changed.
		if (
			class_exists( 'GuidedTourHooks' ) &&
			$title->inNamespace( NS_USER )
		) {
			$out->addModules( 'ext.guidedTour' );
		}
	}

	/**
	 * Hook: GetBetaFeaturePreferences
	 * @param User $user
	 * @param array $prefs
	 */
	public static function getPreferences( User $user, array &$prefs ) {
		global $wgExtensionAssetsPath, $wgContentTranslationBrowserBlacklist;

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
			'requirements' => array(
				'javascript' => true,
				'blacklist' => $wgContentTranslationBrowserBlacklist,
			)
		);
	}

	/**
	 * Hook: EventLoggingRegisterSchemas
	 */
	public static function addEventLogging( array &$schemas ) {
		$schemas['ContentTranslation'] = 11628043;
		$schemas['ContentTranslationCTA'] = 11616099;
	}

	/**
	 * Hook: SpecialContributionsBeforeMainOutput
	 * @param int $id
	 * @param User $user
	 * @param SpecialPage $page
	 */
	public static function addNewContributionButton( $id, User $user, SpecialPage $page ) {
		global $wgContentTranslationEventLogging;

		if ( $user->getId() === $page->getUser()->getId() &&
			ContentTranslationHooks::isEnabledForUser( $user )
		) {
			// If EventLogging integration is enabled, load the event logging functions module
			if ( $wgContentTranslationEventLogging ) {
				$page->getOutput()->addModules( 'ext.cx.eventlogging' );
			}
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
			$wgContentTranslationCampaigns,
			$wgContentTranslationBrowserBlacklist,
			$wgContentTranslationTargetNamespace;

		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationTranslateInTarget'] = $wgContentTranslationTranslateInTarget;
		$vars['wgContentTranslationExperimentalFeatures'] = $wgContentTranslationExperimentalFeatures;
		$vars['wgContentTranslationDatabase'] = $wgContentTranslationDatabase;
		$vars['wgContentTranslationTargetNamespace'] = $wgContentTranslationTargetNamespace;
		$vars['wgContentTranslationCampaigns'] = $wgContentTranslationCampaigns;
		$vars['wgContentTranslationBrowserBlacklist'] = $wgContentTranslationBrowserBlacklist;
	}

	/**
	 * Hooks: ListDefinedTags and ChangeTagsListActive
	 * Define the content translation change tag, and mark it as active.
	 * @param array $tags
	 * @return bool
	 */
	public static function registerTags( array &$tags ) {
		$tags[] = 'contenttranslation';
		return true;
	}

	/**
	 * Hook: EditPage::showEditForm:initial
	 */
	public static function newArticleCampign( EditPage $newPage, OutputPage $out ) {
		global $wgContentTranslationCampaigns, $wgContentTranslationEventLogging;
		$user = $out->getUser();

		if (
			!in_array( 'newarticle', $wgContentTranslationCampaigns ) ||
			$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) ||
			$newPage->mTitle->exists() ||
			!$newPage->mTitle->inNamespace( NS_MAIN ) ||
			$user->isAnon() ||
			BetaFeatures::isFeatureEnabled( $user, 'cx' )
		) {
			return true;
		}

		// If EventLogging integration is enabled, load the event logging functions module
		// to measure and analyse the usage of this entry point.
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( 'ext.cx.eventlogging' );
		}

		$out->addModules( 'ext.cx.campaigns.newarticle' );
	}

	/**
	 * Hook: User::UserSaveOptions
	 */
	public static function onSaveOptions( $user, &$saveOptions ) {
		$out = RequestContext::getMain()->getOutput();

		if (
			isset( $saveOptions['cx'] ) &&
			$saveOptions['cx'] === '1' &&
			!isset( $saveOptions['cx-know'] ) &&
			!$out->getTitle()->isSpecial( 'ContentTranslation' )
		) {
			$out->addModules(
				array( 'ext.cx.betafeature.init', 'ext.cx.campaigns.contributionsmenu' )
			);
			// This make sure the auto-open contribution menu shown exactly once.
			// and it is not in Special:CX
			$saveOptions['cx-know'] = true;

		}

		return true;
	}

	/**
	 * Hook: ResourceLoaderTestModules
	 */
	public static function onResourceLoaderTestModules( array &$modules ) {
		$resourcePaths = array(
			'localBasePath' => __DIR__,
			'remoteExtPath' => 'ContentTranslation',
		);

		$modules['qunit']['ext.cx.editor.tests'] = array(
			'scripts' => array(
				'tests/qunit/editor/ext.cx.editor.test.js',
			),
			'dependencies' => array(
				'ext.cx.editor',
			),
		) + $resourcePaths;

		$modules['qunit']['ext.cx.header.test'] = array(
			'scripts' => array(
				'tests/qunit/header/ext.cx.header.test.js',
			),
			'dependencies' => array(
				'ext.cx.header',
			),
		) + $resourcePaths;

		$modules['qunit']['ext.cx.publish.test'] = array(
			'scripts' => array(
				'tests/qunit/publish/ext.cx.publish.test.js',
			),
			'dependencies' => array(
				'ext.cx.publish',
			),
		) + $resourcePaths;

		$modules['qunit']['ext.cx.tools.tests'] = array(
			'scripts' => array(
				'tests/qunit/tools/ext.cx.tools.template.test.js',
				'tests/qunit/tools/ext.cx.tools.mtabuse.test.js',
				'tests/qunit/tools/ext.cx.tools.categories.test.js',
			),
			'dependencies' => array(
				'ext.cx.model',
				'ext.cx.tools.template',
				'ext.cx.tools.mtabuse',
				'ext.cx.tools.categories',
			),
		) + $resourcePaths;

		$modules['qunit']['ext.cx.translation.tests'] = array(
			'scripts' => array(
				'tests/qunit/translation/ext.cx.translation.test.js',
			),
			'dependencies' => array(
				'ext.cx.translation',
			),
		) + $resourcePaths;

		$modules['qunit']['ext.cx.sitemapper.test'] = array(
			'scripts' => array(
				'tests/qunit/base/ext.cx.sitemapper.test.js',
			),
			'dependencies' => array(
				'ext.cx.sitemapper',
			),
		) + $resourcePaths;
	}

}
