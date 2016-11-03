<?php
/**
 * API to get the Content Translation configuration for the given language pair.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

class ApiContentTranslationConfiguration extends ApiBase {

	public function execute() {
		$commonContent = "{}";
		$configuration =  null;
		$this->getMain()->setCacheMode( 'public' );
		$this->getMain()->setCacheMaxAge( 2419200 );

		$params = $this->extractRequestParams();
		$source = $params['from'];
		$target = $params['to'];
		if ( !Language::isValidBuiltInCode( $source ) || !Language::isValidBuiltInCode( $target ) ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
			} else {
				$this->dieUsage( 'Invalid language', 'invalidlanguage' );
			}
		}
		// Read common configuraiton
		$commonFileName =  __DIR__ . "/../modules/source/conf/common.json";
		if ( is_readable( $commonFileName ) ) {
			$commonContent = file_get_contents( $commonFileName );
		}
		$commonConfiguration = json_decode( $commonContent, false );

		// Read configuraiton for language pair
		$filename = __DIR__ . "/../modules/source/conf/$source-$target.json";
		if ( is_readable( $filename ) ) {
			$contents = file_get_contents( $filename );
			$configuration = json_decode( $contents, false );
		}

		if ( !$configuration ) {
			// No language specific configuration.
			$configuration = $commonConfiguration;
		} else {
			// For now, we use only templates in configuration.
			// If we have more keys in configuration, this must be
			// a separate method to merge configurations
			$configuration->templates = (object) array_merge(
				(array) $commonConfiguration->templates,
				(array) $configuration->templates
			);
		}

		$this->getResult()->addValue( null, 'configuration', $configuration );
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
	*/
	protected function getExamplesMessages() {
		return [
			'action=cxconfiguration&from=es&to=ca'
			=> 'apihelp-cxconfiguration-example-1',
		];
	}
}
