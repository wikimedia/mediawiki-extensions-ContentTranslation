<?php
/**
 * Contains special page Special:ContentTranslation.
 *
 * @file
 * @copyright 2014 ContentTranslation Team and others; see AUTHORS.txt
 * @license GPL-2.0+; see LICENSE.txt
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
		return $this->msg( 'cot' )->text();
	}

	public function execute( $parameters ) {
		$out = $this->getOutput();
		$skin = $this->getSkin();
		$this->setHeaders();
		$out->setArticleBodyOnly( true );
		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( array(
			'mediawiki.user',
			'mediawiki.page.startup',
			'mediawiki.page.ready',
		) );

		$out->addHTML( $out->headElement( $skin ) );

		// Enable this if you need useful debugging information
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		wfRunHooks( 'BeforePageDisplay', array( &$out, &$skin ) );
		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}

}
