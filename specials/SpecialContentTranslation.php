<?php
/**
 * Contains the special page Special:ContentTranslation.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Implements the core of the Content Translation extension:
 * a special page that shows Content Translation user interface.
 * @ingroup SpecialPage
 */
class SpecialContentTranslation extends SpecialPage {
	function __construct() {
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
		$out->addModules( 'ext.cx.beta.notification' );
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
			// Check if the translation belongs to the current user.
			$user = $this->getUser();
			$translator = new ContentTranslation\Translator( $user );
			return $translator->getGlobalUserId() ===
				intval( $translation->translation['lastUpdatedTranslator'] );
		}

		return false;
	}

	public function execute( $parameters ) {
		global $wgContentTranslationTranslateInTarget, $wgULSPosition, $wgContentTranslationVersion;

		$out = $this->getOutput();
		$skin = $this->getSkin();
		$request = $this->getRequest();
		$user = $this->getUser();
		$hasToken = $this->hasToken();
		$campaign = $request->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );

		// Since we are essentially a custom skin, trick ULS to appear in the personal bar
		$wgULSPosition = 'personal';
		$out->addJsConfigVars( [ 'wgULSPosition' => 'personal' ] );

		// Direct access, isListed only affects Special:SpecialPages
		if ( !ContentTranslationHooks::isEnabledForUser( $user ) ) {
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
				$out->showErrorPage(
					'cx',
					'cx-specialpage-enable-betafeature',
					SpecialPage::getTitleFor( 'ContentTranslation' )
						->getCanonicalURL( [ 'campaign' => 'specialcx' ] )
				);
				return;
			}
		}

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'mw.cx.ui.Header.skin' );

		$initModule = 'mw.cx.init.legacy';
		// If request has param to use CX oojs based version, change init module.
		if ( (int)$request->getVal( 'version' ) === 2 || (int)$wgContentTranslationVersion === 2 ) {
			$initModule = 'mw.cx.init';
		}

		$isExistingTranslation = $this->isExistingTranslation();
		if ( $hasToken || $isExistingTranslation ) {
			$out->addModules( $initModule );
			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $wgContentTranslationTranslateInTarget && defined( 'WBC_VERSION' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			$out->addModules( 'ext.cx.dashboard' );
			$out->addMeta( 'viewport', 'width=device-width, initial-scale=1' );
		}

		$this->setHeaders();
		$out->setArticleBodyOnly( true );

		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( [
			'site',
			'mediawiki.user',
			'mediawiki.page.startup',
		] );

		// Do not add skin specific modules, as there shouldn't be any skin left
		// that could use these. It's more likely to cause issues, such as with
		// with the minerva skin.
		// $modules = $skin->getDefaultModules();

		Hooks::run( 'BeforePageDisplay', [ &$out, &$skin ] );
		$skin->setupSkinUserCss( $out );

		// T111668: Make sure we generate the personal tools
		// before we output the head, as extensions may add
		// things using the PersonalUrls hook.
		$toolbarList = Html::rawElement(
			'ul',
			null,
			$skin->getPersonalToolsList()
		);

		$out->addHTML( $out->headElement( $skin ) );
		$out->addHTML( Html::element(
			'div',
			[ 'class' => 'cx-nojs errorbox' ],
			$this->msg( 'cx-javascript' )->text()
		) );
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		$out->addHTML( Html::rawElement( 'div',
			[ 'id' => 'p-personal' ],
			$toolbarList ) );

		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}
}
