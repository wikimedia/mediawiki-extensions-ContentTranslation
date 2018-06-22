<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

class ContentTranslationHooks {

	/**
	 * @param User $user
	 *
	 * @return bool
	 */
	private static function isBetaFeatureEnabled( User $user ) {
		return ExtensionRegistry::getInstance()->isLoaded( 'BetaFeatures' )
			&& BetaFeatures::isFeatureEnabled( $user, 'cx' );
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

		return self::isBetaFeatureEnabled( $user );
	}

	/**
	 * Hook: BeforePageDisplay
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationEventLogging, $wgContentTranslationCampaigns;

		$title = $out->getTitle();
		$user = $out->getUser();

		// Load the new article campaign for VisualEditor if it's relevant.
		// Done separately from loading the newarticle campaign for the
		// wiki syntax editor because of the different actions with which
		// the editing page is loaded.
		if ( !self::isEnabledForUser( $user ) ) {
			if (
				!$title->exists() &&
				$wgContentTranslationCampaigns['newarticle'] &&
				!$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) &&
				$title->inNamespace( NS_MAIN ) &&
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
			ExtensionRegistry::getInstance()->isLoaded( 'GuidedTour' ) &&
			$title->inNamespace( NS_USER )
		) {
			$out->addModules( 'ext.guidedTour' );
		}
	}

	/**
	 * Hook: GetBetaFeaturePreferences
	 * @param User $user
	 * @param array[] &$prefs
	 */
	public static function onGetBetaFeaturePreferences( User $user, array &$prefs ) {
		global $wgExtensionAssetsPath;

		$imageDir = "$wgExtensionAssetsPath/ContentTranslation/images";

		$prefs['cx'] = [
			'label-message' => 'cx-beta',
			'desc-message' => 'cx-beta-desc',
			'screenshot' => [
				'ltr' => "$imageDir/cx-icon-ltr.svg",
				'rtl' => "$imageDir/cx-icon-rtl.svg",
			],
			'info-link' => 'https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation',
			'discussion-link' => 'https://www.mediawiki.org/wiki/Talk:Content_translation',
			'requirements' => [
				'javascript' => true,
			]
		];
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
			self::isEnabledForUser( $user )
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
	 * @param array &$vars
	 */
	public static function addConfig( array &$vars ) {
		global $wgContentTranslationTranslateInTarget,
			$wgContentTranslationDomainCodeMapping,
			$wgContentTranslationEnableSuggestions,
			$wgContentTranslationExperimentalFeatures,
			$wgContentTranslationDatabase,
			$wgContentTranslationSiteTemplates,
			$wgContentTranslationCampaigns,
			$wgContentTranslationDefaultSourceLanguage,
			$wgContentTranslationTargetNamespace,
			$wgContentTranslationUserGroupTargetNamespace,
			$wgRecommendToolAPIURL,
			$wgContentTranslationVersion;

		$vars['wgContentTranslationTranslateInTarget'] = $wgContentTranslationTranslateInTarget;
		$vars['wgContentTranslationDomainCodeMapping'] = $wgContentTranslationDomainCodeMapping;
		$vars['wgContentTranslationEnableSuggestions'] = $wgContentTranslationEnableSuggestions;
		$vars['wgContentTranslationExperimentalFeatures'] = $wgContentTranslationExperimentalFeatures;
		$vars['wgContentTranslationDatabase'] = $wgContentTranslationDatabase;
		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationCampaigns'] = $wgContentTranslationCampaigns;
		$vars['wgContentTranslationDefaultSourceLanguage'] = $wgContentTranslationDefaultSourceLanguage;
		$vars['wgContentTranslationTargetNamespace'] = $wgContentTranslationTargetNamespace;
		$vars['wgContentTranslationUserGroupTargetNamespace']
			= $wgContentTranslationUserGroupTargetNamespace;
		$vars['wgRecommendToolAPIURL'] = $wgRecommendToolAPIURL;
		$vars['wgContentTranslationVersion'] = $wgContentTranslationVersion;
	}

	/**
	 * Hook: ResourceLoaderRegisterModules
	 *
	 * @param ResourceLoader &$resourceLoader Client-side code and assets to be loaded.
	 */
	public static function addMessages( ResourceLoader &$resourceLoader ) {
		$cxResourceTemplate = [
			'localBasePath' => dirname( __DIR__ ),
			'remoteExtPath' => 'ContentTranslation',
		];

		$externalMessages = [];
		if ( class_exists( 'ConfirmEditHooks' ) ) {
			$externalMessages[] = 'captcha-create';
			$externalMessages[] = 'captcha-label';

			if ( class_exists( 'QuestyCaptcha' ) ) {
				$externalMessages[] = 'questycaptcha-create';
			}

			if ( class_exists( 'FancyCaptcha' ) ) {
				$externalMessages[] = 'fancycaptcha-create';
				$externalMessages[] = 'fancycaptcha-reload-text';
			}
		}

		$resourceLoader->register( [
			'mw.cx.externalmessages' => $cxResourceTemplate + [
				'messages' => $externalMessages,
				'targets' => [ 'desktop', 'mobile' ],
			]
		] );
	}

	/**
	 * Hooks: ListDefinedTags and ChangeTagsListActive
	 * Define the content translation change tag, and mark it as active.
	 * @param array &$tags
	 * @return bool
	 */
	public static function registerTags( array &$tags ) {
		$tags[] = 'contenttranslation';
		return true;
	}

	/**
	 * Hook: EditPage::showEditForm:initial
	 * @param EditPage $newPage
	 * @param OutputPage $out
	 */
	public static function newArticleCampaign( EditPage $newPage, OutputPage $out ) {
		global $wgContentTranslationCampaigns, $wgContentTranslationEventLogging;

		$user = $out->getUser();

		if (
			!$wgContentTranslationCampaigns['newarticle'] ||
			$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) ||
			$newPage->getTitle()->exists() ||
			!$newPage->getTitle()->inNamespace( NS_MAIN ) ||
			$user->isAnon() ||
			self::isBetaFeatureEnabled( $user )
		) {
			return;
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
	 * @param User $user
	 * @param array &$saveOptions
	 * @return true
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
		$out->addModules( [
			'ext.cx.betafeature.init',
			'ext.cx.campaigns.contributionsmenu',
		] );
		$saveOptions['cx-know'] = true;

		return true;
	}

	/**
	 * Add notification events to Echo
	 *
	 * @param array &$notifications array of Echo notifications
	 * @param array &$notificationCategories array of Echo notification categories
	 * @param array &$icons array of icon details
	 */
	public static function onBeforeCreateEchoEvent(
		&$notifications, &$notificationCategories, &$icons
	) {
		$notificationCategories['cx'] = [
			'priority' => 3,
			'tooltip' => 'echo-pref-tooltip-cx',
		];

		$notifications['cx-first-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
		];

		$notifications['cx-tenth-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
		];

		$notifications['cx-hundredth-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
		];

		$notifications['cx-suggestions-available'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\EchoNotificationPresentationModel',
		];

		$notifications['cx-deleted-draft'] = [
			'category' => 'cx',
			'group' => 'negative',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\DeletedDraftNotificationPresentationModel',
			'bundle' => [ 'web' => true, 'expandable' => true ]
		];

		$icons['cx'] = [
			'path' => 'ContentTranslation/images/cx-notification-green.svg',
		];
		$icons['outdated'] = [
			'path' => 'ContentTranslation/images/cx-notification-gray.svg'
		];
	}

	/**
	 * Add user to be notified on echo event
	 * @param EchoEvent $event
	 * @param array &$users
	 * @return bool
	 */
	public static function onEchoGetDefaultNotifiedUsers( $event, &$users ) {
		switch ( $event->getType() ) {
			case 'cx-first-translation':
			case 'cx-tenth-translation':
			case 'cx-hundredth-translation':
			case 'cx-suggestions-available':
			case 'cx-deleted-draft':
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
	 * Set bundle for message
	 *
	 * @param EchoEvent $event
	 * @param string &$bundleString
	 */
	public static function onEchoGetBundleRules( $event, &$bundleString ) {
		$recipient = $event->getExtraParam( 'recipient' );
		if ( !$recipient ) {
			return;
		}

		if ( $event->getType() === 'cx-deleted-draft' ) {
			$bundleString = 'cx-deleted-draft-' . $recipient;
		}
	}

	/**
	 * Hook: ResourceLoaderTestModules
	 * @param array &$modules
	 */
	public static function onResourceLoaderTestModules( array &$modules ) {
		$resourcePaths = [
			'localBasePath' => __DIR__,
			'remoteExtPath' => 'ContentTranslation',
		];

		$modules['qunit']['mw.cx.ui.Infobar.test'] = [
			'scripts' => [
				'tests/qunit/ui/mw.cx.ui.Infobar.test.js',
			],
			'dependencies' => [
				'mw.cx.ui.Infobar'
			],
		] + $resourcePaths;

		$modules['qunit']['ext.cx.publish.test'] = [
			'scripts' => [
				'tests/qunit/publish/ext.cx.publish.test.js',
				'tests/qunit/publish/ext.cx.publish.prepare.test.js',
			],
			'dependencies' => [
				'ext.cx.publish',
				'ext.cx.sitemapper',
			],
		] + $resourcePaths;

		$modules['qunit']['ext.cx.translation.loader.test'] = [
			'scripts' => [
				'tests/qunit/translation/ext.cx.translation.loader.test.js',
			],
			'dependencies' => [
				'ext.cx.translation.loader',
			],
		] + $resourcePaths;

		$modules['qunit']['ext.cx.tools.tests'] = [
			'scripts' => [
				'tests/qunit/tools/ext.cx.tools.template.test.js',
				'tests/qunit/tools/ext.cx.tools.mtabuse.test.js',
				'tests/qunit/tools/ext.cx.tools.categories.test.js',
			],
			'dependencies' => [
				'ext.cx.model',
				'ext.cx.sitemapper',
				'ext.cx.tools.categories',
				'ext.cx.tools.mtabuse',
				'ext.cx.tools.template',
			],
		] + $resourcePaths;

		$modules['qunit']['ext.cx.translation.tests'] = [
			'scripts' => [
				'tests/qunit/translation/ext.cx.translation.test.js',
			],
			'dependencies' => [
				'ext.cx.translation',
			],
		] + $resourcePaths;

		$modules['qunit']['ext.cx.sitemapper.test'] = [
			'scripts' => [
				'tests/qunit/base/ext.cx.sitemapper.test.js',
			],
			'dependencies' => [
				'ext.cx.sitemapper',
			],
		] + $resourcePaths;

		// New CX Tests
		$modules['qunit']['ContentTranslation v2 test suite'] = [
			'scripts' => [
				'modules/mw.cx.MachineTranslationService.test.js',
				'modules/tests/util/mw.cx.util.test.js'
			],
			'dependencies' => [
				'ext.cx.sitemapper',
				'mw.cx.MachineTranslation',
				'mw.cx.MwApiRequestManager',
				'mw.cx.util'
			],
		] + $resourcePaths;

		$modules['qunit']['mw.cx.dm.Translation.test'] = [
			'scripts' => [
				'tests/qunit/dm/mw.cx.dm.Translation.test.js'
			],
			'dependencies' => [
				'mw.cx.dm.Translation',
				've.init.mw.CXTarget'
			],
		] + $resourcePaths;
	}
}
