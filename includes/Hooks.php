<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

// phpcs:disable MediaWiki.NamingConventions.LowerCamelFunctionsName.FunctionName

use ContentTranslation\Service\TranslatorService;
use ExtensionRegistry;
use MediaWiki\ChangeTags\Hook\ChangeTagsListActiveHook;
use MediaWiki\ChangeTags\Hook\ListDefinedTagsHook;
use MediaWiki\Config\Config;
use MediaWiki\Context\RequestContext;
use MediaWiki\EditPage\EditPage;
use MediaWiki\Extension\CentralAuth\User\CentralAuthUser;
use MediaWiki\Extension\Notifications\AttributeManager;
use MediaWiki\Extension\Notifications\Model\Event;
use MediaWiki\Extension\Notifications\UserLocator;
use MediaWiki\Hook\EditPage__showEditForm_initialHook;
use MediaWiki\Hook\SpecialContributionsBeforeMainOutputHook;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Output\OutputPage;
use MediaWiki\Permissions\PermissionManager;
use MediaWiki\Preferences\Hook\GetPreferencesHook;
use MediaWiki\ResourceLoader\Context as ResourceLoaderContext;
use MediaWiki\ResourceLoader\FilePath as ResourceLoaderFilePath;
use MediaWiki\ResourceLoader\Hook\ResourceLoaderRegisterModulesHook;
use MediaWiki\ResourceLoader\ResourceLoader;
use MediaWiki\SpecialPage\SpecialPage;
use MediaWiki\Specials\Contribute\Card\ContributeCard;
use MediaWiki\Specials\Contribute\Card\ContributeCardActionLink;
use MediaWiki\Specials\Contribute\ContributeFactory;
use MediaWiki\Specials\Contribute\Hook\ContributeCardsHook;
use MediaWiki\User\Options\Hook\SaveUserOptionsHook;
use MediaWiki\User\User;
use MediaWiki\User\UserIdentity;
use MediaWiki\WikiMap\WikiMap;
use MobileContext;
use Skin;

class Hooks implements
	BeforePageDisplayHook,
	GetPreferencesHook,
	ResourceLoaderRegisterModulesHook,
	SpecialContributionsBeforeMainOutputHook,
	ListDefinedTagsHook,
	ChangeTagsListActiveHook,
	SaveUserOptionsHook,
	EditPage__showEditForm_initialHook,
	ContributeCardsHook
{

	/**
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public function onBeforePageDisplay( $out, $skin ): void {
		self::addModules( $out, $skin );
		self::addSXPublishingFollowupModule( $out, $skin );
		self::addMobileNewByTranslationInvitation( $out, $skin );
	}

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
		if ( !$user->isNamed() && !$isSxEnabledForAnon ) {
			return;
		}

		$isValidContext = !$out->getTitle()->exists() && $out->getTitle()->inNamespace( NS_MAIN );

		if ( !$isValidContext ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.newbytranslation.mobile' );
	}

	/**
	 * Check whether the current context is in a mobile interface
	 *
	 * @return bool
	 */
	private static function isMobileView() {
		$isMobileView = false;

		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
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
		/** @var TranslatorService $translatorService */
		$translatorService = MediaWikiServices::getInstance()->get( 'ContentTranslation.TranslatorService' );

		if ( $translatorService->isTranslator( $user ) ) {
			// Already a translator
			return true;
		}

		if ( ExtensionRegistry::getInstance()->isLoaded( 'CentralAuth' ) ) {
			$centralUser = CentralAuthUser::getInstance( $user );

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
	 * Hook: BeforePageDisplay
	 * @param OutputPage $out
	 * @param Skin $skin
	 */
	public static function addModules( OutputPage $out, Skin $skin ) {
		global $wgContentTranslationAsBetaFeature, $wgContentTranslationCampaigns;

		$title = $out->getTitle();
		$user = $out->getUser();

		/** @var PreferenceHelper $preferenceHelper */
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
		if ( !self::isMobileView() ) {
			$out->addModules( 'ext.cx.entrypoints.contributionsmenu' );
		}

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
	public function onSpecialContributionsBeforeMainOutput( $id, $user, $page ) {
		$user = MediaWikiServices::getInstance()->getUserFactory()->newFromUserIdentity( $user );
		if ( !$user->isNamed() ) {
			return;
		}

		/** @var PreferenceHelper $preferenceHelper */
		$preferenceHelper = MediaWikiServices::getInstance()->getService( 'ContentTranslation.PreferenceHelper' );

		if ( $user->getId() !== $page->getUser()->getId() || !$preferenceHelper->isEnabledForUser( $user ) ) {
			return;
		}

		if ( $preferenceHelper->isCXEntrypointDisabled( $user ) ) {
			return;
		}

		if ( self::isMobileView() ) {
			// Contribution buttons should be shown only in desktop
			return;
		}

		$modules = [ 'ext.cx.eventlogging.campaigns' ];

		$isSpecialContributeEnabled = ContributeFactory::isEnabledOnCurrentSkin(
			$page->getSkin(),
			$page->getConfig()->get( 'SpecialContributeSkinsEnabled' )
		);

		if ( !$isSpecialContributeEnabled ) {
			$modules[] = 'ext.cx.contributions';
		}
		$page->getOutput()->addModules( $modules );
	}

	/**
	 * Hook: ResourceLoaderRegisterModules
	 *
	 * @param ResourceLoader $resourceLoader Client-side code and assets to be loaded.
	 */
	public function onResourceLoaderRegisterModules( ResourceLoader $resourceLoader ): void {
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
			]
		] );
	}

	/**
	 * Hooks: ListDefinedTags
	 * Define the content translation change tag
	 * @param array &$tags
	 */
	public function onListDefinedTags( &$tags ) {
		self::registerTags( $tags );
	}

	/**
	 * Hooks: ChangeTagsListActive
	 * Mart the content translation change tag as active
	 * @param array &$tags
	 */
	public function onChangeTagsListActive( &$tags ) {
		self::registerTags( $tags );
	}

	public static function registerTags( array &$tags ) {
		global $wgContentTranslationCampaigns;
		$tags[] = 'contenttranslation';
		$tags[] = 'contenttranslation-v2'; // CX2 distinct tag. Used since 2018-09
		$tags[] = 'sectiontranslation';
		$tags[] = 'contenttranslation-high-unmodified-mt-text';
		foreach ( $wgContentTranslationCampaigns as $tagName => $tag ) {
			if ( isset( $tag['edittag'] ) ) {
				$tags[] = $tag['edittag'];
			}
		}
	}

	/**
	 * Hook: EditPage::showEditForm:initial
	 * @param EditPage $newPage
	 * @param OutputPage $out
	 */
	public function onEditPage__showEditForm_initial( $newPage, $out ) {
		global $wgContentTranslationAsBetaFeature, $wgContentTranslationCampaigns;

		$user = $out->getUser();
		/** @var PreferenceHelper $preferenceHelper */
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
			$modules = [ 'ext.cx.eventlogging.campaigns' ];

			// "firsttime" property is true the first time the edit form is rendered,
			// and it's false after re-rendering with preview, diff, save prompts, etc.
			// Here we only want to display the invitation when not in "preview" or "diff" mode.
			if ( $newPage->firsttime ) {
				$modules[] = 'ext.cx.entrypoints.newbytranslation';
			}

			$out->addModules( $modules );
			$invitationShown = $preferenceHelper->getGlobalPreference(
				$user, 'cx_campaign_newarticle_shown'
			);
			/** @var TranslatorService $translatorService */
			$translatorService = MediaWikiServices::getInstance()->get( 'ContentTranslation.TranslatorService' );
			$existingTranslator = $translatorService->isTranslator( $user );
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
	 */
	public function onSaveUserOptions( UserIdentity $user, array &$modifiedOptions, array $originalOptions ) {
		$out = RequestContext::getMain()->getOutput();

		$mergedOptions = array_merge( $originalOptions, $modifiedOptions );

		if ( !isset( $mergedOptions['cx'] ) || $mergedOptions['cx'] !== 1 ) {
			// Not using ContentTranslation; bail.
			return;
		}

		if ( isset( $mergedOptions['cx-know'] ) ) {
			// The auto-open contribution menu has already been shown; bail.
			return;
		}

		$title = $out->getTitle();
		if ( $title && $title->isSpecial( 'ContentTranslation' ) ) {
			// Don't show the menu on Special:ContentTranslation.
			return;
		}

		// Show the auto-open contribution menu and set the cx-know preference
		// as true to prevent it from being automatically shown in the future.
		if ( !self::isMobileView() ) {
			$out->addModules( [
				'ext.cx.betafeature.init',
				'ext.cx.entrypoints.contributionsmenu',
			] );
		}
		$modifiedOptions['cx-know'] = true;
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
			AttributeManager::ATTR_LOCATORS => [
				[
					[ UserLocator::class, 'locateFromEventExtra' ],
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
	 * @param Event $event
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
	public function onGetPreferences( $user, &$preferences ) {
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
		[ $buildPath, $devPath ] = $paths;
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
	public function onContributeCards( array &$cards ): void {
		$context = RequestContext::getMain();

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
		$out = $context->getOutput();
		$out->addModuleStyles( [ 'oojs-ui.styles.icons-editing-advanced' ] );
	}

}
