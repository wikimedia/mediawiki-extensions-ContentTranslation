<?php
/**
 * Contains the special page Special:ContentTranslation.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Special;

use ContentTranslation\PreferenceHelper;
use ContentTranslation\SiteMapper;
use MediaWiki\Context\DerivativeContext;
use MediaWiki\Context\MutableContext;
use MediaWiki\Deferred\DeferredUpdates;
use MediaWiki\Html\Html;
use MediaWiki\MediaWikiServices;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\Skin\SkinFactory;
use MediaWiki\SpecialPage\SpecialPage;
use MobileContext;

/**
 * Implements the core of the Content Translation extension:
 * a special page that shows Content Translation user interface.
 */
class SpecialContentTranslation extends SpecialPage {
	/**
	 * @var SkinFactory
	 */
	private $skinFactory;

	/**
	 * @var PreferenceHelper
	 */
	private $preferenceHelper;

	/**
	 * @param SkinFactory $skinFactory
	 * @param PreferenceHelper $preferenceHelper
	 */
	public function __construct( SkinFactory $skinFactory, PreferenceHelper $preferenceHelper ) {
		parent::__construct( 'ContentTranslation' );
		$this->skinFactory = $skinFactory;
		$this->preferenceHelper = $preferenceHelper;
	}

	/** @inheritDoc */
	public function getDescription() {
		return $this->msg( 'cx' );
	}

	/** @inheritDoc */
	public function execute( $parameters ) {
		parent::execute( $parameters );

		// Use custom 'contenttranslation' skin
		/** @var MutableContext $context */
		$context = $this->getContext();
		if ( !$context instanceof MutableContext ) {
			// Need to be able to change the skin
			$context = new DerivativeContext( $context );
			$this->setContext( $context );
		}

		'@phan-var MutableContext $context';
		$context->setSkin(
			$this->skinFactory->makeSkin( 'contenttranslation' )
		);

		if ( $this->hasValidToken() && !$this->isTargetEqualToCurrentDomain() ) {
			$this->redirectToTargetCX();

			return;
		}

		if ( !$this->canUserProceed() ) {
			return;
		}

		if ( !$this->onDesktopTranslationView() ) {
			$out = $this->getOutput();
			$out->addHTML( Html::element(
				'div',
				[ 'id' => 'contenttranslation' ]
			) );
		}
		// Run the extendable chunks from the subclass.
		$this->initModules();
		$this->addJsConfigVars();
	}

	/** @inheritDoc */
	public function isListed() {
		return $this->preferenceHelper->isEnabledForUser( $this->getUser() );
	}

	public function enableCXBetaFeature() {
		$out = $this->getOutput();
		$out->addJsConfigVars( 'wgContentTranslationBetaFeatureEnabled', true );

		$user = $this->getUser();
		// Promise to persist the setting post-send
		DeferredUpdates::addCallableUpdate( static function () use ( $user ) {
			$optionsManager = MediaWikiServices::getInstance()->getUserOptionsManager();
			$user = $user->getInstanceForUpdate();
			$optionsManager->setOption( $user, 'cx', '1' );
			$optionsManager->saveOptions( $user );
		} );
	}

	private function isValidCampaign( ?string $campaign ): bool {
		$contentTranslationCampaigns = $this->getConfig()->get( 'ContentTranslationCampaigns' );

		if ( !$this->getUser()->isNamed() ) {
			// Campaigns are only for named logged-in users.
			return false;
		}
		return $campaign !== null
			&& isset( $contentTranslationCampaigns[$campaign] )
			&& $contentTranslationCampaigns[$campaign];
	}

	/**
	 * JS-compatible encodeURIComponent function
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
	 */
	private static function encodeURIComponent( string $string ): string {
		$revert = [ '%21' => '!', '%2A' => '*', '%27' => "'", '%28' => '(', '%29' => ')' ];
		return strtr( rawurlencode( $string ), $revert );
	}

	private function isTargetEqualToCurrentDomain(): bool {
		$request = $this->getRequest();
		$to = $request->getVal( 'to' );

		// Since we can only publish to the current wiki, enforce that the target language matches
		// the wiki we are currently on. If not, redirect the user back to dashboard, where he can
		// start again with parameters filled (and redirected to the correct wiki).
		$contentTranslationTranslateInTarget = $this->getConfig()->get( 'ContentTranslationTranslateInTarget' );
		if ( $contentTranslationTranslateInTarget ) {
			$currentLangCode = SiteMapper::getCurrentLanguageCode();
			$currentDomainCode = SiteMapper::getDomainCode( $currentLangCode );
			return $to === $currentLangCode || $to === $currentDomainCode;
		}

		// For development (single instance) use, there is no need to check the target domain,
		// because we don't redirect.
		return true;
	}

	private function redirectToTargetCX() {
		$request = $this->getRequest();
		$sourceLanguage = $request->getVal( 'from' );
		$targetLanguage = $request->getVal( 'to' );
		$sourceTitle = $request->getVal( 'page' );
		$targetTitle = $request->getVal( 'targettitle' );
		$extra = $request->getQueryValuesOnly();
		unset( $extra['title'] );

		$cxUrl = SiteMapper::getCXUrl(
			$sourceLanguage,
			$targetLanguage,
			$sourceTitle,
			$targetTitle,
			$extra
		);

		$out = $this->getOutput();
		$out->redirect( $cxUrl );
	}

	/**
	 * Check if the request has a token to use CX.
	 * With a valid cx token override beta feature settings.
	 */
	private function hasValidToken(): bool {
		$request = $this->getRequest();

		if ( !$this->getUser()->isRegistered() ) {
			// Tokens are valid only for logged in users.
			return false;
		}

		$title = $request->getVal( 'page' );

		if ( $title === null ) {
			return false;
		}
		$from = $request->getVal( 'from' );
		$to = $request->getVal( 'to' );
		if ( $from === null || $to === null ) {
			return false;
		}
		// Cookie name is base64 encoding of parameters that uniquely define a translation.
		$cookieName = 'cx_' . base64_encode( self::encodeURIComponent( implode( '_', [ $title, $from, $to ] ) ) );
		// Remove all characters that are not allowed in cookie name: ( ) < > @ , ; : \ " / [ ] ? = { }.
		$cookieName = preg_replace( '/[()<>@,;:\\"\/\[\]?={}]/', '', $cookieName );

		return $request->getCookie( $cookieName, '' ) !== null;
	}

	protected function canUserProceed(): bool {
		$allowAnonSX = $this->getConfig()->get( 'ContentTranslationEnableAnonSectionTranslation' );
		$hasValidToken = $this->hasValidToken();
		$campaign = $this->getRequest()->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );

		// Allow access to SX for everyone, when unified dashboard should be displayed
		// and "ContentTranslationEnableAnonSectionTranslation" is set to true.
		if ( !$this->onDesktopTranslationView() && $allowAnonSX ) {
			return true;
		}

		// For all logged-in user, if CX beta feature is not enabled, and has
		// valid token or campaign, enable CX beta feature and proceed.
		// This is applicable for both CX and SX.
		if ( !$this->preferenceHelper->isEnabledForUser( $this->getUser() ) ) {
			if ( $hasValidToken || $isCampaign ) {
				// User has a token or a valid campaign param.
				// Enable cx for the user in this wiki.
				$this->enableCXBetaFeature();
			} else {
				if ( $campaign ) {
					// Show login page if the URL has campaign parameter
					$this->requireNamedUser();
				}
				// Invalid or missing campaign param
				$this->getOutput()->showErrorPage(
					'cx',
					'cx-specialpage-enable-betafeature',
					[
						SpecialPage::getTitleFor( 'ContentTranslation' )
							->getCanonicalURL( [ 'campaign' => 'specialcx' ] )
					]
				);
				return false;
			}
		}

		return true;
	}

	/**
	 * Returns true if user requested to open the desktop translation view,
	 * false if CX dashboard or mobile editor is requested.
	 */
	protected function onDesktopTranslationView(): bool {
		return $this->hasValidToken() && !self::isMobileSite();
	}

	private static function isMobileSite(): bool {
		$isMobileView = false;
		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}
		return $isMobileView;
	}

	protected function initModules() {
		$config = $this->getConfig();
		$out = $this->getOutput();

		$contentTranslationTranslateInTarget = $config->get( 'ContentTranslationTranslateInTarget' );
		if ( $this->onDesktopTranslationView() ) {
			$out->addModules( 'mw.cx.init' );
			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $contentTranslationTranslateInTarget
				&& ExtensionRegistry::getInstance()->isLoaded( 'WikibaseClient' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			$out->addModules( 'mw.cx3' );
			$out->addJsConfigVars( [
				'wgContentTranslationTranslateInTarget' => $contentTranslationTranslateInTarget
			] );
		}
	}

	protected function addJsConfigVars() {
		$config = $this->getConfig();
		$out = $this->getOutput();

		$out->addJsConfigVars( [
			'wgContentTranslationUnmodifiedMTThresholdForPublish' =>
				$config->get( 'ContentTranslationUnmodifiedMTThresholdForPublish' ),
			'wgContentTranslationEnableMT' => $config->get( 'ContentTranslationEnableMT' )
		] );

		if ( $this->onDesktopTranslationView() ) {
			$version = 2;
			$out->addJsConfigVars( [
				'wgContentTranslationCampaigns' => $config->get( 'ContentTranslationCampaigns' ),
				'wgContentTranslationPublishRequirements' => $config->get( 'ContentTranslationPublishRequirements' ),
				'wgContentTranslationVersion' => $version
			] );

		} else {
			$out->addJsConfigVars( [
				'wgRecommendToolAPIURL' => $config->get( 'RecommendToolAPIURL' ),
				'wgContentTranslationExcludedNamespaces' => $config->get( 'ContentTranslationExcludedNamespaces' ),
				'wgContentTranslationEnableUnifiedDashboard' =>
					$config->get( 'ContentTranslationEnableUnifiedDashboard' )
			] );
		}
	}

	/**
	 * @inheritDoc
	 */
	protected function afterExecute( $subPage ) {
		$campaign = $this->getRequest()->getVal( 'campaign' );
		$user = $this->getUser();

		// Anonymous users cannot have global preferences
		if ( $campaign === null || !$user->isRegistered() ) {
			return;
		}

		$persistentEntrypointCampaigns = [ 'contributions-page', 'contributionsmenu' ];
		if ( $this->preferenceHelper->getGlobalPreference( $user, 'cx-entrypoint-fd-status' ) !== 'shown' ) {
			if ( in_array( $campaign, $persistentEntrypointCampaigns ) ) {
				// The user accessed CX using a persistent invitation.
				// It means, user is aware of the entrypoint. No need to show the feature discovery again
				$this->preferenceHelper->setGlobalPreference( $user, 'cx-entrypoint-fd-status', 'shown' );
			} else {
				// The user accessed CX using a non-persistent invitation.
				// Show a one-time indicator to tell user that they can access CX using persistent entrypoints
				// Set a global preference that the feature discovery is set for the user
				// This preference has three possible values: `pending`, `shown`, 'notshown'
				$this->preferenceHelper->setGlobalPreference( $user, 'cx-entrypoint-fd-status', 'pending' );
			}
		}
	}

	/**
	 * @codeCoverageIgnore Merely declarative
	 * @inheritDoc
	 */
	public function doesWrites() {
		return true;
	}
}
