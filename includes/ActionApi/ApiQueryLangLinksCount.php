<?php
/**
 * A query module to get total number of langlinks (links to corresponding foreign language pages).
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiQueryBase;

class ApiQueryLangLinksCount extends ApiQueryBase {
	public function execute() {
		if ( $this->getPageSet()->getGoodTitleCount() < 1 ) {
			return;
		}

		$this->addTables( 'langlinks' );
		$this->addFields( [
			'll_from',
			'COUNT(*) AS ll_count'
		] );
		$this->addWhereFld( 'll_from', array_keys( $this->getPageSet()->getGoodTitles() ) );
		$this->addOption( 'GROUP BY', [ 'll_from' ] );

		// Generated SQL query example
		// SELECT /* ApiQueryLangLinksCount::execute  */  ll_from,COUNT(*) AS ll_count
		// FROM `langlinks` WHERE ll_from IN ('16','22')  GROUP BY ll_from
		$res = $this->select( __METHOD__ );

		foreach ( $res as $row ) {
			$this->getResult()->addValue(
				[ 'query', 'pages', $row->ll_from ],
				$this->getModuleName(),
				(int)$row->ll_count
			);
		}
	}

	protected function getExamplesMessages() {
		return [
			'action=query&prop=langlinkscount&titles=Dog&redirects=1'
				=> 'apihelp-query+langlinkscount-example-1',
		];
	}
}
