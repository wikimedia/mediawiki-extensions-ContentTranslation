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

	public function isListed() {
		return ContentTranslationHooks::isEnabledForUser( $this->getUser() );
	}

	public function execute( $parameters ) {
		$out = $this->getOutput();

		// Direct access, isListed only affects Special:SpecialPages
		if ( !ContentTranslationHooks::isEnabledForUser( $this->getUser() ) ) {
			$out->showErrorPage( 'nosuchspecialpage', 'nospecialpagetext' );
			return;
		}

		$this->setHeaders();
		$this->outputHeader();

		// @TODO better to return title => stats iterator
		$stats = ContentTranslation\Stats::getStats();
		$out->addHtml( $this->getPagesSummary( $stats ) );
		$out->addModules( 'ext.cx.stats' );
	}

	private function getPagesSummary( $pages ) {
		$total = $main = 0;

		foreach ( $pages as $row ) {
			$title = Title::newFromRow( $row );

			$total++;
			if ( $title->inNamespace( NS_MAIN ) ) {
				$main++;
			}
		}

		if ( $total > 0 ) {
			$percentage = round( $main / $total * 100 );
		} else {
			$percentage = 0;
		}

		$summary = wfMessage( 'cx-stats-summary' )
			->numParams( $main, $total, $percentage )
			->parse();

		return $summary;
	}
}
