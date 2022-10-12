<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use Config;
use DatabaseUpdater;
use EchoAttributeManager;
use EchoEvent;
use EchoUserLocator;
use EditPage;
use ExtensionRegistry;
use MediaWiki\Extension\CentralAuth\User\CentralAuthUser;
use MediaWiki\MediaWikiServices;
use MediaWiki\Permissions\PermissionManager;
use MediaWiki\Specials\Contribute\Card\ContributeCard;
use MediaWiki\Specials\Contribute\Card\ContributeCardActionLink;
use MediaWiki\User\UserIdentity;
use OutputPage;
use RequestContext;
use ResourceLoader;
use ResourceLoaderContext;
use ResourceLoaderFilePath;
use Skin;
use SpecialPage;
use User;
use WikiMap;

class Hooks {

	/**
	 * Add 'sx.publishing.followup' module when output page is an article page
	 * or a page in user namespace(sandbox), and "sx-published-section" query
	 * params exists. This is the case for redirections to target article page
	 * after Section Translation successful publishing
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public static function addSXPublishingFollowupModule( OutputPage $out, Skin $skin ): void {
		$sxPublishedQueryParam = $out->getRequest()->getVal( "sx-published-section" );
		$isContentPage = $out->getTitle()->isContentPage();
		$isSandboxPage = $out->getTitle()->inNamespace( NS_USER );
		if ( ( $isContentPage || $isSandboxPage ) && $sxPublishedQueryParam !== null ) {
			$out->addModules( 'sx.publishing.followup' );
		}
	}

	public static function addMobileNewByTranslationInvitation( OutputPage $out, Skin $skin ): void {
		// This entrypoint should only be enabled for mobile web version
		if ( !self::isMobileView() ) {
			return;
		}

		if ( !self::isSXEnabled() ) {
			return;
		}

		// This entrypoint should only be enabled for logged-in users or wikis that
		// have section translation enabled for anonymous users
		$user = $out->getUser();
		$isSxEnabledForAnon = $out->getConfig()->get( 'ContentTranslationEnableAnonSectionTranslation' );
		if ( $user->isAnon() && !$isSxEnabledForAnon ) {
			return;
		}

		$isValidContext = !$out->getTitle()->exists() && $out->getTitle()->inNamespace( NS_MAIN );

		if ( !$isValidContext ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.newbytranslation.mobile' );
	}

	/**
	 * This hook adds "ext.cx.entrypoints.recenttranslation" module, to support
	 * entrypoint inside articles, that encourages users to review recently
	 * translated articles, if the appropriate conditions are met.
	 * These conditions are:
	 * 1. SectionTranslation is enabled for current wiki
	 * 2. User is accessing the mobile web version of the article
	 * 3. User is logged-in
	 * 4. The article was published as a new page by Content or Section Translation
	 * 5. The article was published in the last 10 days
	 * 6. The article has less than 5 edits since it was published
	 *
	 * @param OutputPage $out
	 * @param Skin $skin
	 * @throws \Exception
	 */
	public static function addRecentTranslationEntrypoint( OutputPage $out, Skin $skin ): void {
		// This entrypoint should only be enabled for mobile web version
		if ( !self::isMobileView() ) {
			return;
		}

		// This entrypoint should only be enabled for logged-in users
		$user = $out->getUser();
		if ( $user->isAnon() ) {
			return;
		}

		// This entrypoint should only be enabled for article pages
		$isContentPage = $out->getTitle()->isContentPage();
		if ( !$isContentPage ) {
			return;
		}

		if ( !self::isSXEnabled() ) {
			return;
		}

		// This entrypoint should only be enabled:
		// a. for pages that are created using Content or Section Translation
		// b. for pages that were published in the last 10 days
		// "cx_translations" table is expected to be smaller than "revision"
		// table, so we query this table first.
		$currentLanguageCode = SiteMapper::getCurrentLanguageCode();
		$translation = Translation::findByPublishedTitle( $out->getPageTitle(), $currentLanguageCode );

		// If translation not found inside the table, meaning this article has
		// not been created using Content or Section Translation, return
		if ( $translation === null ) {
			return;
		}
		$translationData = $translation->getData();
		$creationDate = new \DateTime( $translationData['lastUpdateTimestamp'] );
		// Check if translation was published within the last 10 days
		$createdWithin10Days = (bool)$creationDate->diff( new \DateTime( '-10 days' ) )->invert;
		if ( !$createdWithin10Days ) {
			return;
		}

		// This entrypoint should only be enabled for pages that have less than 5 edits.
		$pageId = $out->getWikiPage()->getId();
		// Find all revisions for this page
		$lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
		$dbr = $lb->getConnectionRef( DB_REPLICA );
		$revisionsCount = MediaWikiServices::getInstance()
			->getRevisionStore()
			->countRevisionsByPageId( $dbr, $pageId );

		// If article has at least 5 edits, return
		if ( $revisionsCount >= 5 ) {
			return;
		}

		// If all the above conditions are met, add 'ext.cx.entrypoints.recenttranslation' entrypoint
		$out->addModules( 'ext.cx.entrypoints.recenttranslation' );
		// Add Javascript variables for translation source title and source language,
		// so that they can be used inside UI
		$out->addJsConfigVars( 'wgSectionTranslationSourceTitle',
			$translationData['sourceTitle'] );
		$out->addJsConfigVars( 'wgSectionTranslationSourceLanguage',
			$translationData['sourceLanguage'] );
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
	 * Check whether SectionTranslation is enabled in current wiki
	 *
	 * @return bool
	 */
	private static function isSXEnabled() {
		$out = RequestContext::getMain()->getOutput();
		$currentLanguageCode = SiteMapper::getCurrentLanguageCode();
		$enabledLanguages = $out->getConfig()->get( 'SectionTranslationTargetLanguages' );
		return is_array( $enabledLanguages ) && in_array( $currentLanguageCode, $enabledLanguages );
	}

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
			$centralUser = CentralAuthUser::getInstance( $user );
			if ( !$centralUser ) {
				return false;
			}

			// Check if the user has edited in more than one wiki.
			$editedWikiCount = 0;
			$attachedAccounts = $centralUser->queryAttached();
			foreach ( $attachedAccounts as $wikiId => $account ) {
				$wikiRef = WikiMap::getWiki( $wikiId ); // Get WikiReference instance
				$url = '';
				if ( $wikiRef ) {
					$url = $wikiRef->getCanonicalServer();
				}
				if (
					// Ignore non-wikipedia wikis such as commons, mediawiki, meta etc
					// url property example "https://commons.wikimedia.org",
					strpos( $url, 'wikipedia' ) !== false &&
					intval( $account['editCount'] ?? 0 ) > 0
				) {
					$editedWikiCount++;
				}
			}

			return $editedWikiCount > 1;
		}

		return false;
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
		$dbType = $updater->getDB()->getType();

		// All tables for the extension
		$updater->addExtensionTable( 'cx_translations', "$dir/sql/$dbType/tables-generated.sql" );

		// 1.35
		$updater->addExtensionTable( 'cx_notification_log', "$dir/sql/notification-log.sql" );

		// 1.37
		$updater->addExtensionField(
			'cx_notification_log',
			'cxn_wiki_id',
			"$dir/sql/patch-2020-09-21-notification-log-add-wikiid.sql"
		);

		// 1.38
		$updater->addExtensionTable( 'cx_significant_edits', "$dir/sql/significant-edits.sql" );
		$updater->addExtensionTable( 'cx_section_translations', "$dir/sql/section-translations.sql" );

		// 1.39
		if ( $dbType === 'mysql' ) {
			$updater->modifyExtensionField(
				'cx_lists',
				'cxl_end_time',
				"$dir/sql/patch-cx_lists-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_notification_log',
				'cxn_newest',
				"$dir/sql/patch-cx_notification_log-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_corpora',
				'cxc_timestamp',
				"$dir/sql/patch-cx_corpora-timestamp.sql"
			);
			$updater->modifyExtensionField(
				'cx_translations',
				'translation_last_updated_timestamp',
				"$dir/sql/patch-cx_translations-timestamps.sql"
			);
			$updater->modifyExtensionField(
				'cx_notification_log',
				'cxn_wiki_id',
				"$dir/sql/patch-tables-binary.sql"
			);
		}
		$updater->dropExtensionIndex(
			'cx_translators',
			'cx_translation_translators',
			"$dir/sql/$dbType/patch-cx_translators-unique-to-pk.sql"
		);
	}

	/**
	 * Hook: BeforePageDisplay
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationAsBetaFeature, $wgContentTranslationCampaigns,
			$wgSectionTranslationTargetLanguages;

		$title = $out->getTitle();
		$user = $out->getUser();

		$preferenceHelper = MediaWikiServices::getInstance()->getService( 'ContentTranslation.PreferenceHelper' );
		if ( $preferenceHelper->isCXEntrypointDisabled( $user ) ) {
			return;
		}

		$out->addModules( 'ext.cx.eventlogging.campaigns' );

		if ( !$title ||
			$title->isSpecial( 'ContentTranslation' ) || $title->isSpecial( 'ContentTranslationStats' )
		) {
			// Entry point modules need not be shown in CX special pages
			return;
		}

		if ( self::isMobileView() && $wgSectionTranslationTargetLanguages ) {
				$out->addModules( 'ext.cx.entrypoints.languagesearcher.init' );
				$out->addJsConfigVars( 'wgSectionTranslationTargetLanguages',
					$wgSectionTranslationTargetLanguages );
		}

		$permissionManager = MediaWikiServices::getInstance()->getPermissionManager();

		// Load the new article campaign for VisualEditor if it's relevant.
		// Done separately from loading the newarticle campaign for the
		// wiki syntax editor because of the different actions with which
		// the editing page is loaded.
		if ( !$preferenceHelper->isEnabledForUser( $user ) ) {
			if (
				!$title->exists() &&
				$wgContentTranslationCampaigns['newarticle'] &&
				!$out->getRequest()->getCookie( 'cx_campaign_newarticle_hide', '' ) &&
				$title->inNamespace( NS_MAIN ) &&
				$user->isRegistered() &&
				$permissionManager->userCan( 'edit', $user, $title, PermissionManager::RIGOR_QUICK )
			) {
				$out->addModules( 'ext.cx.entrypoints.newarticle.veloader' );
			}

			return;
		}

		if ( $title->inNamespace( NS_MAIN ) &&
			$out->getActionName() === 'view' &&
			$title->exists() &&
			in_array( $skin->getSkinName(), [ 'vector', 'vector-2022' ] )
		) {
			$out->addJsConfigVars( [
				'wgContentTranslationAsBetaFeature' =>
					$wgContentTranslationAsBetaFeature,
			] );
			$out->addModules( 'ext.cx.interlanguagelink.init' );
		}

		// Add a hover menu for the contributions link in personal toolbar
		$out->addModules( 'ext.cx.entrypoints.contributionsmenu' );

		if ( $preferenceHelper->getGlobalPreference( $user, 'cx-entrypoint-fd-status' ) === 'pending' ) {
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
	 * @param UserIdentity $user
	 * @param SpecialPage $page
	 */
	public static function addNewContributionButton( $id, UserIdentity $user, SpecialPage $page ) {
		$preferenceHelper = MediaWikiServices::getInstance()->getService( 'ContentTranslation.PreferenceHelper' );
		if ( $preferenceHelper->isCXEntrypointDisabled( $user ) ) {
			return;
		}

		if ( !self::isMobileView() ) {
			// Contribution buttons should be shown only in desktop
			return;
		}

		if ( $user->getId() === $page->getUser()->getId() && $preferenceHelper->isEnabledForUser( $user ) ) {
			$page->getOutput()->addModules( [
				'ext.cx.eventlogging.campaigns',
				'ext.cx.contributions'
			] );
		}
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
		$tags[] = 'sectiontranslation';
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
		$preferenceHelper = MediaWikiServices::getInstance()->getService( 'ContentTranslation.PreferenceHelper' );
		if ( $preferenceHelper->isCXEntrypointDisabled( $user ) ) {
			return;
		}

		$isValidEditContext = $user->isRegistered() &&
			!$newPage->getTitle()->exists() &&
			$newPage->getTitle()->inNamespace( NS_MAIN );

		if ( !$isValidEditContext ) {
			return;
		}

		$veConfig = MediaWikiServices::getInstance()->getConfigFactory()
			->makeConfig( 'visualeditor' );
		$userOptionsLookup = MediaWikiServices::getInstance()->getUserOptionsLookup();
		if ( $veConfig->get( 'VisualEditorShowBetaWelcome' ) &&
			!$userOptionsLookup->getOption( $user, 'visualeditor-hidebetawelcome' )
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
			$invitationShown = $preferenceHelper->getGlobalPreference(
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
			!$preferenceHelper->isBetaFeatureEnabled( $user ) &&
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
	 * Hook: User::SaveUserOptions
	 * @see https://www.mediawiki.org/wiki/Manual:Hooks/SaveUserOptions
	 *
	 * @param UserIdentity $user
	 * @param array &$modifiedOptions
	 * @param array $originalOptions
	 * @return true
	 */
	public static function onSaveOptions( UserIdentity $user, array &$modifiedOptions, array $originalOptions ) {
		$out = RequestContext::getMain()->getOutput();

		$mergedOptions = array_merge( $originalOptions, $modifiedOptions );

		if ( !isset( $mergedOptions['cx'] ) || $mergedOptions['cx'] !== 1 ) {
			// Not using ContentTranslation; bail.
			return true;
		}

		if ( isset( $mergedOptions['cx-know'] ) ) {
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
		$modifiedOptions['cx-know'] = true;

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

		$userLocator = [
			EchoAttributeManager::ATTR_LOCATORS => [
				[
					EchoUserLocator::class . '::locateFromEventExtra',
					[ 'recipient' ]
				],
			],
		];

		$notifications['cx-first-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => EchoNotificationPresentationModel::class,
		] + $userLocator;

		$notifications['cx-tenth-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => EchoNotificationPresentationModel::class,
		] + $userLocator;

		$notifications['cx-hundredth-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => EchoNotificationPresentationModel::class,
		] + $userLocator;

		$notifications['cx-suggestions-available'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => EchoNotificationPresentationModel::class,
		] + $userLocator;

		$notifications['cx-deleted-draft'] = [
			'category' => 'cx',
			'group' => 'negative',
			'section' => 'message',
			'presentation-model' => DraftNotificationPresentationModel::class,
			'bundle' => [ 'web' => true, 'expandable' => true ]
		] + $userLocator;

		$notifications['cx-continue-translation'] = [
			'category' => 'cx',
			'group' => 'positive',
			'section' => 'message',
			'presentation-model' => DraftNotificationPresentationModel::class,
			'bundle' => [ 'web' => true, 'expandable' => true ]
		] + $userLocator;

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

	/**
	 * Integrate Vite's HMR based development workflow if enabled by configuration.
	 *
	 * @param ResourceLoaderContext $context
	 * @param Config $config
	 * @param array $paths
	 * @return ResourceLoaderFilePath
	 */
	public static function devModeCallback( ResourceLoaderContext $context, Config $config, array $paths ) {
		list( $buildPath, $devPath ) = $paths;
		$file = $buildPath;
		if ( $config->get( 'ContentTranslationDevMode' ) ) {
			$file = $devPath;
		}
		return new ResourceLoaderFilePath( $file );
	}

	/**
	 * Add a persistent contribution entry point for creating translations
	 * Hook: ContributeCards
	 * @param array &$cards List of contribute cards data
	 */
	public static function addContributeCardEntryPoint( array &$cards ) {
		$context = new RequestContext();

		if ( self::isMobileView() && !self::isSXEnabled() ) {
			// This entrypoint should only be enabled for wikis that have SectionTranslation enabled
			return;
		}

		$cards[] = ( new ContributeCard(
			$context->msg( 'cx-contributecard-entrypoint-title' )->text(),
			$context->msg( 'cx-contributecard-entrypoint-desc' )->text(),
			'language', // icon
			new ContributeCardActionLink(
				// The CX beta feature is automatically enabled, when a valid campaign param exists.
				// This enablement is done by a call to "SpecialContentTranslation::enableCXBetaFeature" method
				SpecialPage::getTitleFor( 'ContentTranslation' )
					->getLocalUrl( [ 'campaign' => 'specialcontribute' ] ),
				$context->msg( 'cx-contributecard-entrypoint-cta' )->text(),
			)
		) )->toArray();
		// 'language' icon is in oojs-ui.styles.icons-editing-advanced RL module. Load that.
		$out = RequestContext::getMain()->getOutput();
		$out->addModuleStyles( [ 'oojs-ui.styles.icons-editing-advanced' ] );
	}

}
