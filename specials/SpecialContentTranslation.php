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
use DeferredUpdates;
use DerivativeContext;
use ExtensionRegistry;
use Html;
use MediaWiki\MediaWikiServices;
use MutableContext;
use SkinFactory;
use SpecialPage;
use Wikimedia\Services\NoSuchServiceException;

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
	 * @param SkinFactory $skinFactory
	 */
	public function __construct( \SkinFactory $skinFactory ) {
		parent::__construct( 'ContentTranslation' );
		$this->skinFactory = $skinFactory;
	}

	public function getDescription() {
		return $this->msg( 'cx' )->text();
	}

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

		if ( !$this->canUserProceed() ) {
			return;
		}

		if ( $this->isVueDashboard() ) {
			// Enforce mobile target for all devices to support
			// mobile-first design.
			$out = $this->getOutput();
			$out->setTarget( 'mobile' );
			$out->addHTML( Html::element(
				'div',
				[ 'id' => 'contenttranslation' ]
			) );
		}
		// Run the extendable chunks from the sub class.
		$this->initModules();
		$this->addJsConfigVars();
	}

	public function isListed() {
		return PreferenceHelper::isEnabledForUser( $this->getUser() );
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

	public function isValidCampaign( $campaign ) {
		global $wgContentTranslationCampaigns;

		if ( $this->getUser()->isAnon() ) {
			// Campaigns are only for logged in users.
			return false;
		}
		return $campaign !== null
			&& isset( $wgContentTranslationCampaigns[$campaign] )
			&& $wgContentTranslationCampaigns[$campaign];
	}

	/**
	 * JS-compatible encodeURIComponent function
	 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
	 * @param string $string
	 * @return string
	 */
	public static function encodeURIComponent( $string ) {
		$revert = [ '%21' => '!', '%2A' => '*', '%27' => "'", '%28' => '(', '%29' => ')' ];
		return strtr( rawurlencode( $string ), $revert );
	}

	/**
	 * Check if the request has a token to use CX.
	 * With a valid cx token override beta feature settings.
	 * @return bool
	 */
	private function hasValidToken() {
		global $wgContentTranslationTranslateInTarget;

		$request = $this->getRequest();

		if ( $this->getUser()->isAnon() ) {
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

		$hasToken = $request->getCookie( $cookieName, '' ) !== null;

		// Since we can only publish to the current wiki, enforce that the target language matches
		// the wiki we are currently on. If not, redirect the user back to dashboard, where he can
		// start again with parameters filled (and redirected to the correct wiki).
		if ( $wgContentTranslationTranslateInTarget ) {
			$tokenIsValid = $to === SiteMapper::getCurrentLanguageCode();
			return $hasToken && $tokenIsValid;
		}

		// For development (single instance) use, there is no need to validate the token, because
		// we don't redirect.
		return $hasToken;
	}

	protected function canUserProceed() {
		$allowAnonSX = $this->getConfig()->get( 'ContentTranslationEnableAnonSectionTranslation' );
		$hasValidToken = $this->hasValidToken();
		$campaign = $this->getRequest()->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );

		if ( $this->isVueDashboard() && $allowAnonSX ) {
			return true;
		}

		// Direct access, isListed only affects Special:SpecialPages
		if ( !PreferenceHelper::isEnabledForUser( $this->getUser() ) ) {
			if ( $hasValidToken || $isCampaign ) {
				// User has a token or a valid campaign param.
				// Enable cx for the user in this wiki.
				$this->enableCXBetaFeature();
			} else {
				if ( $campaign ) {
					// Show login page if the URL has campaign parameter
					$this->requireLogin();
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
	 * Returns true if user requested to open the translation view,
	 * false if CX dashboard is requested.
	 *
	 * @return bool
	 */
	protected function onTranslationView() {
		return $this->hasValidToken();
	}

	protected function isVueDashboard() {
		$isSXEnabled = $this->getConfig()->get( 'ContentTranslationEnableSectionTranslation' );
		$services = MediaWikiServices::getInstance();
		try {
			$context = $services->getService( 'MobileFrontend.Context' );
			return $isSXEnabled && $context->shouldDisplayMobileView() && !$this->onTranslationView();
		} catch ( NoSuchServiceException $e ) {
			return false;
		}
	}

	protected function initModules() {
		global $wgContentTranslationTranslateInTarget;

		$out = $this->getOutput();

		if ( $this->onTranslationView() ) {
			$out->addModules( 'mw.cx.init' );
			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $wgContentTranslationTranslateInTarget
				&& ExtensionRegistry::getInstance()->isLoaded( 'WikibaseClient' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			if ( $this->isVueDashboard() ) {
				$out->addModules( 'mw.cx3' );
				$out->addJsConfigVars( [
					'wgSectionTranslationTargetLanguage' => $this->getConfig()->get( 'SectionTranslationTargetLanguage' )
				] );
			} else {
				$out->addModules( 'ext.cx.dashboard' );
				$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
			}
		}
	}

	protected function addJsConfigVars() {
		global $wgContentTranslationUnmodifiedMTThresholdForPublish,
			$wgContentTranslationCampaigns,
			$wgContentTranslationExcludedNamespaces,
			$wgContentTranslationPublishRequirements,
			$wgContentTranslationEnableSuggestions,
			$wgRecommendToolAPIURL,
			$wgContentTranslationEnableMT;

		$out = $this->getOutput();

		if ( $this->onTranslationView() ) {
			$version = 2;

			$out->addJsConfigVars( [
				'wgContentTranslationUnmodifiedMTThresholdForPublish' =>
					$wgContentTranslationUnmodifiedMTThresholdForPublish,
				'wgContentTranslationCampaigns' => $wgContentTranslationCampaigns,
				'wgContentTranslationPublishRequirements' => $wgContentTranslationPublishRequirements,
				'wgContentTranslationVersion' => $version,
				'wgContentTranslationEnableMT' => $wgContentTranslationEnableMT
			] );

		} else {
			$out->addJsConfigVars( [
				'wgContentTranslationEnableSuggestions' => $wgContentTranslationEnableSuggestions,
				'wgRecommendToolAPIURL' => $wgRecommendToolAPIURL,
				'wgContentTranslationExcludedNamespaces' => $wgContentTranslationExcludedNamespaces
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
		if ( $campaign === null || $user->isAnon() ) {
			return;
		}

		$persistentEntrypointCampaigns = [ 'contributions-page', 'contributionsmenu' ];
		if ( PreferenceHelper::getGlobalPreference( $user, 'cx-entrypoint-fd-status' ) !== 'shown' ) {
			if ( in_array( $campaign, $persistentEntrypointCampaigns ) ) {
				// The user accessed CX using a persistent invitation.
				// It means, user is aware of the entrypoint. No need to show the feature discovery again
				PreferenceHelper::setGlobalPreference( $user, 'cx-entrypoint-fd-status', 'shown' );
			} else {
				// The user accessed CX using a non-persistent invitation.
				// Show a one-time indicator to tell user that they can access CX using persistent entrypoints
				// Set a global preference that the feature discovery is set for the user
				// This preference has three possible values: `pending`, `shown`, 'notshown'
				PreferenceHelper::setGlobalPreference( $user, 'cx-entrypoint-fd-status', 'pending' );
			}
		}
	}
}
