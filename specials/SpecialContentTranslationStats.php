<?php
/**
 * Contains the special page Special:ContentTranslationStats.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

/**
 * Shows some metrics about ContentTranslation usage.
 */
class SpecialContentTranslationStats extends SpecialPage {
	function __construct() {
		parent::__construct( 'ContentTranslationStats' );
	}

	public function getDescription() {
		return $this->msg( 'cx-stats-title' )->text();
	}

	public function execute( $parameters ) {
		global $wgULSPosition;

		$out = $this->getOutput();
		$skin = $this->getSkin();

		// Since we are essentially a custom skin, trick ULS to appear in the personal bar
		$wgULSPosition = 'personal';
		$out->addJsConfigVars( [ 'wgULSPosition' => 'personal' ] );

		$this->setHeaders();
		$out->setArticleBodyOnly( true );
		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( [
			'site',
			'mediawiki.user',
			'mediawiki.page.startup',
		] );

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'mw.cx.ui.Header.skin' );

		$out->addModules( 'ext.cx.stats' );

		// Do not add skin specific modules, as there shouldn't be any skin left
		// that could use these. It's more likely to cause issues, such as with
		// with the minerva skin.
		// $modules = $skin->getDefaultModules();

		Hooks::run( 'BeforePageDisplay', [ &$out, &$skin ] );
		$skin->setupSkinUserCss( $out );

		$toolbarList = Html::rawElement( 'ul',
			null,
			$skin->getPersonalToolsList() );
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
