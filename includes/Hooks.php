<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use Action;
use CentralAuthUser;
use DatabaseUpdater;
use EchoEvent;
use EditPage;
use ExtensionRegistry;
use MediaWiki\MediaWikiServices;
use MediaWiki\Permissions\PermissionManager;
use OutputPage;
use RequestContext;
use ResourceLoader;
use Skin;
use SpecialPage;
use User;

class Hooks {

	/**
	 * Check whether the current user is a potential translator
	 *
	 * @param User $user
	 * @return bool
	 */
	private static function isPotentialTranslator( User $user ) {
		if ( Translator::isTranslator( $user ) ) {
			// Already a translator
			return true;
		}

		if ( ExtensionRegistry::getInstance()->isLoaded( 'CentralAuth' ) ) {
			$centralUser = CentralAuthUser::newFromId( $user->getId() );
			if ( !$centralUser ) {
				// No user exists with that id
				return false;
			}

			// Check if the user has edited in more than one wiki.
			$editedWikiCount = 0;
			$attachedAccounts = $centralUser->queryAttached();
			foreach ( $attachedAccounts as $account ) {
				if (
					// Ignore non-wikipedia wikis such as commons, mediawiki, meta etc
					// url property example "https://commons.wikimedia.org",
					strpos( $account['url'] ?? '', 'wikipedia' ) !== false &&
					intval( $account['editCount'] ?? 0 ) > 0
				) {
					$editedWikiCount++;
					break;
				}
			}
			if ( $editedWikiCount === 0 ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Hook: LoadExtensionSchemaUpdates
	 * @param DatabaseUpdater $updater
	 */
	public static function onLoadExtensionSchemaUpdates( DatabaseUpdater $updater ) {
		global $wgContentTranslationCluster, $wgContentTranslationDatabase;

		// Following tables should only be created if both cluster and database are false.
		// Otherwise they are not created in the place they are accesses, because
		// DatabaseUpdater does not support other databases other than main wiki schema.
		if ( $wgContentTranslationCluster !== false || $wgContentTranslationDatabase !== false ) {
			return;
		}

		$dir = dirname( __DIR__ );

		$updater->addExtensionTable( 'cx_translations', "$dir/sql/translations.sql" );
		$updater->addExtensionTable( 'cx_translators', "$dir/sql/translators.sql" );
		$updater->addExtensionTable( 'cx_lists', "$dir/sql/lists.sql" );
		$updater->addExtensionTable( 'cx_suggestions', "$dir/sql/suggestions.sql" );
		$updater->addExtensionTable( 'cx_corpora', "$dir/sql/parallel-corpora.sql" );
		$updater->addExtensionTable( 'cx_notification_log', "$dir/sql/notification-log.sql" );

		$updater->addExtensionField(
			'cx_translations',
			'translation_cx_version',
			"$dir/sql/patch-2018-03-contenttranslation-add-version.sql"
		);
		$updater->dropExtensionIndex(
			'cx_translations',
			'cx_translation_pair',
			"$dir/sql/patch-update-cx-unique-index.sql"
		);
		$updater->addExtensionIndex(
			'cx_translations',
			'cx_translation_ref',
			"$dir/sql/patch-update-cx-unique-index.sql"
		);
	}

	/**
	 * Hook: BeforePageDisplay
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationAsBetaFeature, $wgContentTranslationCampaigns;

		$title = $out->getTitle();
		$user = $out->getUser();

		if ( PreferenceHelper::isCXEntrypointDisabled( $user ) ) {
			return;
		}

		$out->addModules( 'ext.cx.eventlogging.campaigns' );

		if ( $title &&
			( $title->isSpecial( 'ContentTranslation' ) || $title->isSpecial( 'ContentTranslationStats' ) )
		) {
			// Entry point modules need not be shown in CX special pages
			return;
		}

		$permissionManager = MediaWikiServices::getInstance()->getPermissionManager();

		// Load the new article campaign for VisualEditor if it's relevant.
		// Done separately from loading the newarticle campaign for the
		// wiki syntax editor because of the different actions with which
		// the editing page is loaded.
		if ( !PreferenceHelper::isEnabledForUser( $user ) ) {
			if (
				!$title->exists() &&
				$wgContentTranslationCampaigns['newarticle'] &&
				!$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) &&
				$title->inNamespace( NS_MAIN ) &&
				!$user->isAnon() &&
				$permissionManager->userCan( 'edit', $user, $title, PermissionManager::RIGOR_QUICK )
			) {
				$out->addModules( 'ext.cx.entrypoints.newarticle.veloader' );
			}

			return;
		}

		if ( $title->inNamespace( NS_MAIN ) &&
			Action::getActionName( $out->getContext() ) === 'view' &&
			$title->exists() &&
			$skin->getSkinName() === 'vector'
		) {
			$out->addJsConfigVars( [
				'wgContentTranslationAsBetaFeature' =>
					$wgContentTranslationAsBetaFeature,
			] );
			$out->addModules( 'ext.cx.interlanguagelink.init' );
		}

		// Add a hover menu for the contributions link in personal toolbar
		$out->addModules( 'ext.cx.entrypoints.contributionsmenu' );

		if ( PreferenceHelper::getGlobalPreference( $user, 'cx-entrypoint-fd-status' ) === 'pending' ) {
			// A translation was initialized based on a campaign. Show the feature discovery
			$out->addJsConfigVars( 'wgContentTranslationEntryPointFD', true );
		}
	}

	/**
	 * Hook: GetBetaFeaturePreferences
	 * @param User $user
	 * @param array[] &$prefs
	 */
	public static function onGetBetaFeaturePreferences( User $user, array &$prefs ) {
		global $wgExtensionAssetsPath, $wgContentTranslationAsBetaFeature;

		if ( !$wgContentTranslationAsBetaFeature ) {
			return;
		}

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
		if ( PreferenceHelper::isCXEntrypointDisabled( $user ) ) {
			return;
		}

		if ( $user->getId() === $page->getUser()->getId() &&
			PreferenceHelper::isEnabledForUser( $user )
		) {
			$page->getOutput()->addModules( [
				'ext.cx.eventlogging.campaigns',
				'ext.cx.contributions'
			] );
		}
	}

	/**
	 * Hook: ResourceLoaderGetConfigVars
	 * @param array &$vars
	 */
	public static function addConfig( array &$vars ) {
		global $wgContentTranslationSiteTemplates,
			$wgContentTranslationVersion,
			$wgContentTranslationTargetNamespace;

		$vars['wgContentTranslationSiteTemplates'] = $wgContentTranslationSiteTemplates;
		$vars['wgContentTranslationTargetNamespace'] = $wgContentTranslationTargetNamespace;
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
		$extReg = ExtensionRegistry::getInstance();
		if ( $extReg->isLoaded( 'ConfirmEdit' ) ) {
			$externalMessages[] = 'captcha-create';
			$externalMessages[] = 'captcha-label';

			if ( $extReg->isLoaded( 'QuestyCaptcha' ) ) {
				$externalMessages[] = 'questycaptcha-create';
			}

			if ( $extReg->isLoaded( 'FancyCaptcha' ) ) {
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
		global $wgContentTranslationCampaigns;
		$tags[] = 'contenttranslation';
		$tags[] = 'contenttranslation-v2'; // CX2 distinct tag. Used since 2018-09
		foreach ( $wgContentTranslationCampaigns as $tagName => $tag ) {
			if ( isset( $tag['edittag'] ) ) {
				$tags[] = $tag['edittag'];
			}
		}

		return true;
	}

	/**
	 * Hook: EditPage::showEditForm:initial
	 * @param EditPage $newPage
	 * @param OutputPage $out
	 */
	public static function newArticleCampaign( EditPage $newPage, OutputPage $out ) {
		global $wgContentTranslationAsBetaFeature, $wgContentTranslationCampaigns;

		$user = $out->getUser();
		if ( PreferenceHelper::isCXEntrypointDisabled( $user ) ) {
			return;
		}

		$isValidEditContext = $user->isLoggedIn() &&
			!$newPage->getTitle()->exists() &&
			$newPage->getTitle()->inNamespace( NS_MAIN );

		if ( !$isValidEditContext ) {
			return;
		}

		$veConfig = MediaWikiServices::getInstance()->getConfigFactory()
			->makeConfig( 'visualeditor' );
		if ( $veConfig->get( 'VisualEditorShowBetaWelcome' ) &&
			!$user->getOption( 'visualeditor-hidebetawelcome' )
		) {
			// VisualEditorShowBetaWelcome is enabled and user has not
			// seen the visualeditor yet. So when edit page is loaded
			// VE user guiding dialogs will appear. We don't want to mix
			// that with our invitations.
			return;
		}

		if ( $wgContentTranslationAsBetaFeature === false &&
			// CX is enabled for everybody. Not a beta feature.
			self::isPotentialTranslator( $user )
		) {
			$out->addModules( [
				'ext.cx.entrypoints.newbytranslation',
				'ext.cx.eventlogging.campaigns'
			] );
			$invitationShown = PreferenceHelper::getGlobalPreference(
				$user, 'cx_campaign_newarticle_shown'
			);
			$existingTranslator = Translator::isTranslator( $user );
			$out->addJsConfigVars( [
				'wgContentTranslationNewByTranslationShown' => $invitationShown,
				'wgContentTranslationExistingTranslator' => $existingTranslator,
			] );
			return;
		}

		if ( $wgContentTranslationAsBetaFeature &&
			// CX is a beta feature
			!PreferenceHelper::isBetaFeatureEnabled( $user ) &&
			$wgContentTranslationCampaigns['newarticle'] &&
			// The below cookie reading does not use default cookie prefix for historical reasons
			!$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' )
		) {
			// CX is a beta feature in this wiki and user has not enabled it.
			$out->addModules( [
				'ext.cx.entrypoints.newarticle',
				'ext.cx.eventlogging.campaigns'
			] );
		}
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
			'ext.cx.entrypoints.contributionsmenu',
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
			'presentation-model' => 'ContentTranslation\\DraftNotificationPresentationModel',
			'bundle' => [ 'web' => true, 'expandable' => true ]
		];

		$notifications['cx-continue-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => 'ContentTranslation\\DraftNotificationPresentationModel',
			'bundle' => [ 'web' => true, 'expandable' => true ]
		];

		$icons['cx'] = [
			'path' => 'ContentTranslation/images/cx-notification-green.svg',
		];
		$icons['cx-blue'] = [
			'path' => 'ContentTranslation/images/cx-notification-blue.svg'
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
			case 'cx-continue-translation':
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

		if ( $event->getType() === 'cx-continue-translation' ) {
			$bundleString = 'cx-continue-translation-' . $recipient;
		}
	}

	/**
	 * Hook: Preferences::GetPreferences
	 * @param User $user
	 * @param array &$preferences
	 */
	public static function onGetPreferences( User $user, array &$preferences ) {
		global $wgContentTranslationAsBetaFeature;

		if ( $wgContentTranslationAsBetaFeature === false ) {
			$preferences['cx-enable-entrypoints'] = [
				'type' => 'check',
				'section' => 'rendering/languages',
				'label-message' => [
					'cx-preference-enable-entrypoints',
					'mediawikiwiki:Special:MyLanguage/Help:Content_translation/Starting'
				]
			];
		}

		$preferences['cx-entrypoint-fd-status'] = [
			'type' => 'api',
		];
		$preferences['cx_campaign_newarticle_shown'] = [
			'type' => 'api',
		];
	}

}
