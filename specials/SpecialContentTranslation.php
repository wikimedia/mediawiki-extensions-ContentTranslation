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
		$user->saveSettings();
		$out->addModules( 'ext.cx.beta.notification' );
	}

	public function isValidCampaign( $campaign ) {
		global $wgContentTranslationCampaigns;

		if ( $this->getUser()->isAnon() ) {
			// Campigns are only for logged in users.
			return false;
		}
		return $campaign !== null && in_array( $campaign, $wgContentTranslationCampaigns );
	}

	/**
	 * Check if the request has a token to use CX.
	 * With a valid cx token or draft id, override beta feature settings.
	 * @return bool
	 */
	public function hasToken() {
		$request = $this->getRequest();
		$title = $request->getVal( 'page' );

		if ( $title === null ) {
			return false;
		}

		if ( $request->getVal( 'draft' ) !== null ) {
			return true;
		}
		$token = implode( '_', array(
			'cx',
			Title::newFromText( $title )->getDBkey(),
			$request->getVal( 'from' ),
			$request->getVal( 'to' ),
		) );

		return $request->getCookie( $token, '' ) !== null;
	}

	public function execute( $parameters ) {
		global $wgContentTranslationUseMagnusTool,
			$wgContentTranslationTranslateInTarget;

		$out = $this->getOutput();
		$skin = $this->getSkin();
		$request = $this->getRequest();
		$user = $this->getUser();
		$hasToken = $this->hasToken();
		$campaign = $request->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );

		// Direct access, isListed only affects Special:SpecialPages
		if ( !ContentTranslationHooks::isEnabledForUser( $user ) ) {
			if ( $hasToken || $isCampaign ) {
				// User has a token. Enabled cx for the user in this wiki.
				$this->enableCXBetaFeature();
			} else {
				if ( $campaign ) {
					// Show login page if the URL has campaign parameter
					$out->showPermissionsErrorPage(
						array( array( 'badaccess-groups' ) ),
						'edit'
					);
					return;
				}
				$out->showErrorPage( 'nosuchspecialpage', 'nospecialpagetext' );
				return;
			}
		}

		if ( $hasToken ) {
			$out->addModules( 'ext.cx.translationview' );

			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $wgContentTranslationTranslateInTarget && defined( 'WBC_VERSION' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			$out->addModules( 'ext.cx.dashboard' );
			if ( $wgContentTranslationUseMagnusTool ) {
				$out->addModules( 'ext.cx.magnuslink' );
			}
		}

		$this->setHeaders();
		$out->setArticleBodyOnly( true );

		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( array(
			'mediawiki.user',
			'mediawiki.page.startup',
			'mediawiki.page.ready',
		) );

		// Load legacy modules if any, for the skin.
		// Some wikis have Common.js scripts that depend on this module.
		$defaultSkinModules = $skin->getDefaultModules();
		$out->addModules( $defaultSkinModules['legacy'] );

		wfRunHooks( 'BeforePageDisplay', array( &$out, &$skin ) );

		$out->addHTML( $out->headElement( $skin ) );
		$out->addHTML( Html::element(
			'noscript',
			array(),
			$this->msg( 'cx-javascript' )->text()
		) );
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		$toolbarList = Html::rawElement( 'ul',
			null,
			$skin->getPersonalToolsList() );
		$out->addHTML( Html::rawElement( 'div',
			array( 'id' => 'p-personal' ),
			$toolbarList ) );

		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}
}
