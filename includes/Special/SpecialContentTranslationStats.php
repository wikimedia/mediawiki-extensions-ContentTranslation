<?php
/**
 * Contains the special page Special:ContentTranslationStats.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\Special;

use MediaWiki\Context\MutableContext;
use MediaWiki\SpecialPage\SpecialPage;

/**
 * Shows some metrics about ContentTranslation usage.
 *
 * @ingroup SpecialPage
 */
class SpecialContentTranslationStats extends SpecialPage {

	/**
	 * @var \SkinFactory
	 */
	private $skinFactory;

	/**
	 * @param \SkinFactory $skinFactory
	 */
	public function __construct( \SkinFactory $skinFactory ) {
		parent::__construct( 'ContentTranslationStats' );
		$this->skinFactory = $skinFactory;
	}

	final public function execute( $parameters ) {
		parent::execute( $parameters );
		// Use custom 'contenttranslation' skin
		/** @var MutableContext $context */
		$context = $this->getContext();
		'@phan-var MutableContext $context';
		$context->setSkin(
			$this->skinFactory->makeSkin( 'contenttranslation' )
		);
		// Run the extendable chunks from the sub class.
		$this->initModules();
		$this->addJsConfigVars();
	}

	public function getDescription() {
		return $this->msg( 'cx-stats-title' );
	}

	protected function initModules() {
		$this->getOutput()->addModules( 'ext.cx.stats' );
	}

	protected function addJsConfigVars() {
		$this->getOutput()->addJsConfigVars(
			'wgContentTranslationCampaigns',
			$this->getConfig()->get( 'ContentTranslationCampaigns' )
		);
	}
}
