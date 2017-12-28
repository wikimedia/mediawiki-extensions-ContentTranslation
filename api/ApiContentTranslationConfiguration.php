<?php
/**
 * API to get the Content Translation configuration for the given language pair.
 *
 * Configuration currently contains information about sections that should be ignored
 * and template name and parameter mappings for the most common templates.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

class ApiContentTranslationConfiguration extends ApiBase {
	public function execute() {
		$this->getMain()->setCacheMode( 'public' );
		$this->getMain()->setCacheMaxAge( 2419200 );

		$params = $this->extractRequestParams();
		$source = $params['from'];
		$target = $params['to'];
		if ( !Language::isValidBuiltInCode( $source ) || !Language::isValidBuiltInCode( $target ) ) {
			$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
		}

		$configFilename = __DIR__ . '/../modules/source/conf/common.json';
		$configuration = self::readConfigurationFile( $configFilename );

		// Some language pairs have specific configuration
		$filename = __DIR__ . "/../modules/source/conf/$source-$target.json";
		if ( is_readable( $filename ) ) {
			$extra = self::readConfigurationFile( $filename );
			// For now array_merge_recursive is okay, since none of the current
			// language pair specific configuration overrides anything, it just
			// adds new stuff.
			$configuration = array_merge_recursive( $configuration, $extra );
		}

		$this->getResult()->addValue( null, 'configuration', $configuration );
	}

	private static function readConfigurationFile( $filename ) {
		$json = file_get_contents( $filename );
		$data = json_decode( $json, true );
		return $data;
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			],
		];
	}

	/**
	 * @see ApiBase::getExamplesMessages()
	 * @return array
	 */
	protected function getExamplesMessages() {
		return [
			'action=cxconfiguration&from=es&to=ca'
			=> 'apihelp-cxconfiguration-example-1',
		];
	}
}
