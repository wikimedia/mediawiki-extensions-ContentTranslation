<?php
/**
 * Api module for querying Content translations for stats.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiQueryBase;
use ContentTranslation\Translation;
use ContentTranslation\Translator;

/**
 * Api module for querying ContentTranslation stats.
 */
class ApiQueryContentTranslationStats extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$result = $this->getResult();
		$result->addValue(
			[ 'query', 'contenttranslationstats' ],
			'pages',
			Translation::getStats()
		);
		$result->addValue(
			[ 'query', 'contenttranslationstats' ],
			'translators',
			Translator::getStats()
		);
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationstats' =>
				'apihelp-query+contenttranslationstats-example-1',
		];
	}
}
