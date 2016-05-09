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
			'mediawiki.user',
			'mediawiki.page.startup',
			'mediawiki.page.ready',
		] );

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'ext.cx.header.skin' );

		$out->addModules( [ 'ext.cx.header', 'ext.cx.stats' ] );
		// Load legacy modules if any, for the skin.
		// Some wikis have Common.js scripts that depend on this module.
		$defaultSkinModules = $skin->getDefaultModules();
		$out->addModules( $defaultSkinModules['legacy'] );

		Hooks::run( 'BeforePageDisplay', [ &$out, &$skin ] );
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
