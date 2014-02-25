<?php
/**
 * Contains special page Special:ContentTranslation.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Implements the core of Content Translation extension - a special page which
 * shows Content Translation user interface.
 * @ingroup SpecialPage
 */
class SpecialContentTranslation extends SpecialPage {
	function __construct() {
		parent::__construct( 'ContentTranslation' );
	}

	public function getDescription() {
		return $this->msg( 'cx' )->text();
	}

	public function execute( $parameters ) {
		global $wgContentTranslationServerURL;

		$out = $this->getOutput();
		$skin = $this->getSkin();
		$user = $this->getUser();

		if ( !($user->isLoggedIn() ) ) {
			$out->addHTML( $this->msg( 'cx-special-login-error' ) );
		} else {
			$out->addModuleStyles( 'mediawiki.ui.button' );
			$out->addModules( 'ext.cx.base' );
			$this->setHeaders();
			$out->setArticleBodyOnly( true );
			// Default modules copied from OutputPage::addDefaultModules
			$out->addModules( array(
				'mediawiki.user',
				'mediawiki.page.startup',
				'mediawiki.page.ready',
			) );
			$out->addScript(
				Html::linkedScript( "$wgContentTranslationServerURL/socket.io/socket.io.js" )
			);
		}

		$out->addHTML( $out->headElement( $skin ) );

		// Enable this if you need useful debugging information
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		wfRunHooks( 'BeforePageDisplay', array( &$out, &$skin ) );
		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}

}
