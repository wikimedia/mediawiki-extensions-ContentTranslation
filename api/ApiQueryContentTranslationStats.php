<?php
/**
 * Api module for querying Content translations for stats.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

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
			ContentTranslation\Translation::getStats()
		);
		$result->addValue(
			[ 'query', 'contenttranslationstats' ],
			'translators',
			ContentTranslation\Translator::getStats()
		);
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationstats' =>
				'apihelp-query+contenttranslationstats-example-1',
		];
	}
}
