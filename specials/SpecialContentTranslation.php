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
		DeferredUpdates::addCallableUpdate( function() use ( $user ) {
			$user->saveSettings();
		} );
		$out->addModules( 'ext.cx.beta.notification' );
	}

	public function isValidCampaign( $campaign ) {
		global $wgContentTranslationCampaigns;

		if ( $this->getUser()->isAnon() ) {
			// Campigns are only for logged in users.
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
		$title = $request->getVal( 'page' );

		if ( $title === null ) {
			return false;
		}

		$token = implode( '_', array(
			'cx',
			Title::newFromText( $title )->getDBkey(),
			$request->getVal( 'from' ),
			$request->getVal( 'to' ),
		) );

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
		global $wgContentTranslationTranslateInTarget;

		$out = $this->getOutput();
		$skin = $this->getSkin();
		$request = $this->getRequest();
		$user = $this->getUser();
		$hasToken = $this->hasToken();
		$campaign = $request->getVal( 'campaign' );
		$isCampaign = $this->isValidCampaign( $campaign );
		$isExistingTranslation = $this->isExistingTranslation();

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

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'ext.cx.header.skin' );

		if ( $hasToken || $isExistingTranslation ) {
			$out->addModules( 'ext.cx.translationview' );

			// If Wikibase is installed, load the module for linking
			// the published article with the source article
			if ( $wgContentTranslationTranslateInTarget && defined( 'WBC_VERSION' ) ) {
				$out->addModules( 'ext.cx.wikibase.link' );
			}
		} else {
			$out->addModules( 'ext.cx.dashboard' );
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

		Hooks::run( 'BeforePageDisplay', array( &$out, &$skin ) );

		// T111668: Make sure we generate the personal tools
		// before we output the head, as extensions may add
		// things using the PersonalUrls hook.
		$toolbarList = Html::rawElement( 'ul',
				null,
				$skin->getPersonalToolsList() );

		$out->addHTML( $out->headElement( $skin ) );
		$out->addHTML( Html::element(
			'noscript',
			array(),
			$this->msg( 'cx-javascript' )->text()
		) );
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		$out->addHTML( Html::rawElement( 'div',
			array( 'id' => 'p-personal' ),
			$toolbarList ) );

		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}
}
