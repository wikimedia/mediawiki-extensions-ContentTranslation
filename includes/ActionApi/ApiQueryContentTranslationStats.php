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
use MediaWiki\MediaWikiServices;
use Wikimedia\LightweightObjectStore\ExpirationAwareness;

/**
 * Api module for querying ContentTranslation stats.
 */
class ApiQueryContentTranslationStats extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$cache = MediaWikiServices::getInstance()->getMainWANObjectCache();
		$translationStats = $cache->getWithSetCallback(
			$cache->makeGlobalKey( 'cx-api-stats-translation' ),
			ExpirationAwareness::TTL_DAY,
			fn () => Translation::getStats()
		);
		$translatorStats = $cache->getWithSetCallback(
			$cache->makeGlobalKey( 'cx-api-stats-translator' ),
			ExpirationAwareness::TTL_DAY,
			fn () => Translator::getStats()
		);

		$result = $this->getResult();
		$result->addValue(
			[ 'query', 'contenttranslationstats' ],
			'pages',
			$translationStats
		);
		$result->addValue(
			[ 'query', 'contenttranslationstats' ],
			'translators',
			$translatorStats
		);
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationstats' =>
				'apihelp-query+contenttranslationstats-example-1',
		];
	}
}
