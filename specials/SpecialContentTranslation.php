<?php
/**
 * Contains the special page Special:ContentTranslation.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

/**
 * Implements the core of the Content Translation extension:
 * a special page that shows Content Translation user interface.
 */
class SpecialContentTranslation extends ContentTranslationSpecialPage {
	public function __construct() {
		parent::__construct( 'ContentTranslation' );
	}

	public function getDescription() {
		return $this->msg( 'cx' )->text();
	}

	public function isListed() {
		return ContentTranslationHooks::isEnabledForUser( $this->getUser() );
	}

	public function enableCXBetaFeature() {
		$user = $this->getUser();
		$out = $this->getOutput();
		$user->setOption( 'cx', '1' );
		// Promise to persist the setting post-send
		DeferredUpdates::addCallableUpdate( function () use ( $user ) {
			$user->saveSettings();
		} );
		$out->addJsConfigVars( 'wgContentTranslationBetaFeatureEnabled', true );
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
	 * Check if the request has a token to use CX.
	 * With a valid cx token override beta feature settings.
	 * @return bool
	 */
	public function hasToken() {
		$request = $this->getRequest();

		if ( $this->getUser()->isAnon() ) {
			// Tokens are valid only for logged in users.
			return false;
		}

		$title = $request->getVal( 'page' );

		if ( $title === null ) {
			return false;
		}

		// PHP mangles spaces so that foo%20bar is converted to foo_bar and that $_COOKIE['foo bar']
		// *does not* work. Go figure. It also mangles periods, so that foo.bar is converted to
		// foo_bar, but that *does* work because MediaWiki's getCookie transparently maps periods to
		// underscores. If there is any further bugs reported about this, please use base64.
		$title = strtr( $title, ' ', '_' );

		$token = implode( '_', [
			'cx',
			$title,
			$request->getVal( 'from' ),
			$request->getVal( 'to' ),
		] );

		return $request->getCookie( $token, '' ) !== null;
	}

	/**
	 * Check if the translation exist for the given language pairs
	 * and source title in the request.
	 * @return bool
	 */
	public function isExistingTranslation() {
		$request = $this->getRequest();
		$translation = ContentTranslation\Translation::find(
			$request->getVal( 'from' ),
			$request->getVal( 'to' ),
			$request->getVal( 'page' )
		);
		if ( $translation !== null ) {
			if ( $translation->translation['status'] === 'deleted' ) {
				return false;
			}

			// Check if the translation belongs to the current user.
			$user = $this->getUser();
			$translator = new ContentTranslation\Translator( $user );
			return $translator->getGlobalUserId() ===
				intval( $translation->translation['lastUpdatedTranslator'] );
		}

		return false;
	}

	/**
	 * @inheritDoc
	 */
	protected function canUserProceed() {
		$hasToken = $this->hasToken();
		$campaign = $this->getRequest()->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );

		// Direct access, isListed only affects Special:SpecialPages
		if ( !ContentTranslationHooks::isEnabledForUser( $this->getUser() ) ) {
			if ( $hasToken || $isCampaign ) {
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
					SpecialPage::getTitleFor( 'ContentTranslation' )
						->getCanonicalURL( [ 'campaign' => 'specialcx' ] )
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
		if ( $this->hasToken() ) {
			return true;
		}

		if ( $this->getUser()->isAnon() ) {
			return false;
		} else {
			return $this->isExistingTranslation();
		}
	}

	/**
	 * @inheritDoc
	 */
	protected function initModules() {
		global
			$wgContentTranslationEnableSuggestions,
			$wgContentTranslationTranslateInTarget,
			$wgContentTranslationUnmodifiedMTThresholdForPublish,
			$wgRecommendToolAPIURL;

		$out = $this->getOutput();

		$initModule = 'mw.cx.init.legacy';
		if ( $this->shouldUseNewVersion() ) {
			// Change init module to use CX2
			$initModule = 'mw.cx.init';
		}

		if ( $this->onTranslationView() ) {
			$out->addModules( $initModule );
			$out->addJsConfigVars( [
				'wgContentTranslationUnmodifiedMTThresholdForPublish' =>
					$wgContentTranslationUnmodifiedMTThresholdForPublish
			] );
			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $wgContentTranslationTranslateInTarget && defined( 'WBC_VERSION' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			$out->addModules( 'ext.cx.dashboard' );
			$out->addJsConfigVars( [
				'wgContentTranslationEnableSuggestions' => $wgContentTranslationEnableSuggestions,
				'wgContentTranslationShowNewVersionMessage' => $this->shouldShowNewVersionMessage(),
				'wgRecommendToolAPIURL' => $wgRecommendToolAPIURL,
			] );
			$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
		}
	}

	/**
	 * @inheritDoc
	 */
	protected function getRedirectURL() {
		global $wgContentTranslationVersion;

		if ( !$this->onTranslationView() ) {
			// We're on CX dashboard, don't redirect
			return null;
		}

		$request = $this->getRequest();
		$requestVersion = $request->getIntOrNull( 'version' );

		if ( $requestVersion === 1 || $requestVersion === 2 ) {
			// If we already have a 'version' in URL, don't redirect
			return null;
		}

		$userPreference = $this->getUser()->getOption( 'cx-new-version' );
		$version = $wgContentTranslationVersion;
		if ( $userPreference ) {
			$version = '2';
		} elseif ( $userPreference === 0 ) {
			// If user opted-out from using CX2
			$version = '1';
		}

		$requestURL = $request->getRequestURL();
		return wfAppendQuery( $requestURL, [ 'version' => $version ] );
	}

	/**
	 * Determine whether CX2 should be used.
	 *
	 * URL 'version' param has the highest priority. If set to 2, CX2 will be loaded,
	 * while other numerical values load CX1.
	 *
	 * If nothing is specified in the URL, we check user's preference and fall back to config.
	 *
	 * @return boolean True if we should ship version 2 of Content Translation
	 */
	private function shouldUseNewVersion() {
		global $wgContentTranslationVersion;

		$requestVersion = $this->getRequest()->getIntOrNull( 'version' );
		if ( $requestVersion !== null ) {
			return $requestVersion === 2;
		}

		return $this->getUser()->getOption( 'cx-new-version' ) ||
			(int)$wgContentTranslationVersion === 2;
	}

	/**
	 * Determines whether message dialog to inform user that
	 * new version is active should be displayed.
	 *
	 * Should NOT be shown to:
	 * - New users of Content Translation.
	 * - Users who already have manually enabled version 2 of the tool.
	 *
	 * User is considered as new if they haven't started any translations.
	 * To avoid the case where new user starts translation and is no longer
	 * considered new, and then get the message, a condition is added to
	 * take into account only translations started before 2019-01-15.
	 *
	 * Bug T211325
	 *
	 * @return boolean True if message dialog that informs user
	 * that new version is active should be displayed.
	 */
	private function shouldShowNewVersionMessage() {
		global $wgContentTranslationVersion;

		$translator = new ContentTranslation\Translator( $this->getUser() );

		return $wgContentTranslationVersion === '2' &&
			// Take into account only translations started before 2019-01-15
			$translator->getNumberOfTranslations( '20190115000000' ) > 0 &&
			!$this->getUser()->getBoolOption( 'cx-seen-new-version-message' ) &&
			!$this->getUser()->getBoolOption( 'cx-new-version' );
	}
}
