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
	 * Extra setup in addition to extension.json.
	 */
	public static function onSetup() {
		// Composer support
		if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
			require_once __DIR__ . '/vendor/autoload.php';
		}
	}

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

		// CX is currently restricted to only logged in users
		if ( $user->isAnon() ) {
			return false;
		}

		if ( $user->isBlocked() ) {
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
		global $wgContentTranslationEventLogging, $wgContentTranslationCampaigns;

		$title = $out->getTitle();
		$user = $out->getUser();

		// Check if CX is available for current user.
		if ( !self::isEnabledForUser( $user ) ) {
			if (
				!$title->exists() &&
				$wgContentTranslationCampaigns['newarticle'] &&
				!$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) &&
				!$user->isAnon()
			) {
				$out->addModules( 'ext.cx.campaigns.newarticle.veloader' );

				if ( $wgContentTranslationEventLogging ) {
					$out->addModules( 'ext.cx.eventlogging' );
				}
			}

			return;
		}

		// If EventLogging integration is enabled, load the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( 'ext.cx.eventlogging' );
		}

		if ( $title->inNamespace( NS_MAIN ) &&
			Action::getActionName( $out->getContext() ) === 'view' &&
			$title->exists()
		) {
			$out->addModules( 'ext.cx.interlanguagelink' );
		}

		// Add a hover menu for the contributions link in personal toolbar
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
		$schemas['ContentTranslationError'] = 11767097;
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
			$wgContentTranslationDomainCodeMapping,
			$wgContentTranslationEnableSuggestions,
			$wgContentTranslationExperimentalFeatures,
			$wgContentTranslationDatabase,
			$wgContentTranslationSiteTemplates,
			$wgContentTranslationCampaigns,
			$wgContentTranslationBrowserBlacklist,
			$wgContentTranslationDefaultSourceLanguage,
			$wgContentTranslationTargetNamespace,
			$wgContentTranslationCorpora;

		$vars['wgContentTranslationTranslateInTarget'] = $wgContentTranslationTranslateInTarget;
		$vars['wgContentTranslationDomainCodeMapping'] = $wgContentTranslationDomainCodeMapping;
		$vars['wgContentTranslationEnableSuggestions'] = $wgContentTranslationEnableSuggestions;
		$vars['wgContentTranslationExperimentalFeatures'] = $wgContentTranslationExperimentalFeatures;
		$vars['wgContentTranslationDatabase'] = $wgContentTranslationDatabase;
		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationCampaigns'] = $wgContentTranslationCampaigns;
		$vars['wgContentTranslationBrowserBlacklist'] = $wgContentTranslationBrowserBlacklist;
		$vars['wgContentTranslationDefaultSourceLanguage'] = $wgContentTranslationDefaultSourceLanguage;
		$vars['wgContentTranslationTargetNamespace'] = $wgContentTranslationTargetNamespace;
		$vars['wgContentTranslationCorpora'] = $wgContentTranslationCorpora;
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
	public static function newArticleCampaign( EditPage $newPage, OutputPage $out ) {
		global $wgContentTranslationCampaigns, $wgContentTranslationEventLogging;

		$user = $out->getUser();

		if (
			!$wgContentTranslationCampaigns['newarticle'] ||
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

		if ( !isset( $saveOptions['cx'] ) || $saveOptions['cx'] !== 1 ) {
			// Not using ContentTranslation; bail.
			return true;
		}

		if ( isset( $saveOptions['cx-know'] ) ) {
			// The auto-open contribution menu has already been shown; bail.
			return true;
		}

		$title = $out->getTitle();
		if ( $title && $title->isSpecial( 'ContentTranslation' ) ) {
			// Don't show the menu on Special:ContentTranslation.
			return true;
		}

		// Show the auto-open contribution menu and set the cx-know preference
		// as true to prevent it from being automatically shown in the future.
		$out->addModules( array(
			'ext.cx.betafeature.init',
			'ext.cx.campaigns.contributionsmenu',
		) );
		$saveOptions['cx-know'] = true;

		return true;
	}

	/**
	* Add notification events to Echo
	*
	* @param array $notifications array of Echo notifications
	* @param array $notificationCategories array of Echo notification categories
	* @param array $icons array of icon details
	*/
	public static function onBeforeCreateEchoEvent(
		&$notifications, &$notificationCategories, &$icons
	) {
		$notificationCategories['cx'] = array(
			'priority' => 3,
			'tooltip' => 'echo-pref-tooltip-cx',
		);

		$notifications['cx-first-translation'] = array(
			'category' => 'cx',
			'group' => 'positive',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
			'title-message' => 'cx-notification-first-translation',
			'email-subject-message' => 'cx-notification-first-translation-email-subject',
		);

		$notifications['cx-tenth-translation'] = array(
			'category' => 'cx',
			'group' => 'positive',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
			'title-message' => 'cx-notification-tenth-translation',
			'email-subject-message' => 'cx-notification-tenth-translation-email-subject',
		);

		$notifications['cx-hundredth-translation'] = array(
			'category' => 'cx',
			'group' => 'positive',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
			'title-message' => 'cx-notification-hundredth-translation',
			'email-subject-message' => 'cx-notification-hundredth-translation-email-subject',
		);

		$icons['cx'] = array(
			'path' => 'ContentTranslation/images/cx-notification-green.svg',
		);

	}

	/**
	* Add user to be notified on echo event
	* @param EchoEvent $event
	* @param array $users
	* @return bool
	*/
	public static function onEchoGetDefaultNotifiedUsers( $event, &$users ) {
		switch ( $event->getType() ) {
			case 'cx-first-translation':
			case 'cx-tenth-translation':
			case 'cx-hundredth-translation':
				$extra = $event->getExtra();
				if ( !isset( $extra['recipient'] ) ) {
					break;
				}
				$recipientId = $extra['recipient'];
				$recipient = User::newFromId( $recipientId );
				$users[$recipientId] = $recipient;
				break;
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

		$modules['qunit']['ext.cx.translation.draft.test'] = array(
			'scripts' => array(
				'tests/qunit/translation/ext.cx.translation.draft.test.js',
			),
			'dependencies' => array(
				'ext.cx.translation.draft',
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
