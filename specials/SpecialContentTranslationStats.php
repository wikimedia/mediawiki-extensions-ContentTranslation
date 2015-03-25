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

		$this->setHeaders();
		$this->outputHeader();

		// @TODO better to return title => stats iterator
		$stats = ContentTranslation\Stats::getStats();
		$out->addModules( 'ext.cx.stats' );
	}
}
