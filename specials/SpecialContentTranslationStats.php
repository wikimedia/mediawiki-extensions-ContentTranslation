<?php
/**
 * Contains the special page Special:ContentTranslationStats.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Shows some metrics about ContentTranslation usage.
 * @ingroup SpecialPage
 */
class SpecialContentTranslationStats extends SpecialPage {
	function __construct() {
		parent::__construct( 'ContentTranslationStats' );
	}

	public function getDescription() {
		return $this->msg( 'cx-stats-title' )->text();
	}

	public function execute( $parameters ) {
		$out = $this->getOutput();
		$skin = $this->getSkin();

		$this->setHeaders();
		$out->setArticleBodyOnly( true );
		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( [
			'site',
			'mediawiki.user',
			'mediawiki.page.startup',
		] );

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'ext.cx.header.skin' );

		$out->addModules( [ 'ext.cx.header', 'ext.cx.stats' ] );
		// Add skin specific modules
		$modules = $skin->getDefaultModules();
		foreach ( $modules as $group ) {
			$out->addModules( $group );
		}

		Hooks::run( 'BeforePageDisplay', [ &$out, &$skin ] );
		$skin->setupSkinUserCss( $out );

		$toolbarList = Html::rawElement( 'ul',
			null,
			$skin->getPersonalToolsList() );
		$out->addHTML( $out->headElement( $skin ) );
		$out->addHTML( Html::element(
			'noscript',
			[],
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
