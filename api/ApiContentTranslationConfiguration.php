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
		$contents = "{}";
		$this->getMain()->setCacheMode( 'public' );
		$this->getMain()->setCacheMaxAge( 2419200 );

		$params = $this->extractRequestParams();
		$source = $params['from'];
		$target = $params['to'];
		if ( !Language::isValidBuiltInCode( $source ) || !Language::isValidBuiltInCode( $target )  ) {
			$this->dieUsage( 'Invalid language', 'invalidlanguage' );
		}
		$filename = __DIR__ . "/../modules/source/conf/$source-$target.json";
		if ( is_readable( $filename ) ) {
			$contents = file_get_contents( $filename );
		}
		// Output the file's contents raw
		$this->getResult()->addValue( null, 'configuration', json_decode( $contents, false ) );
	}

	public function getAllowedParams() {
		return array(
			'from' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			),
			'to' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			),
		);
	}

	/**
	* @see ApiBase::getExamplesMessages()
	*/
	protected function getExamplesMessages() {
		return array(
			'action=cxconfiguration&from=es&to=ca'
			=> 'apihelp-cxconfiguration-example-1',
		);
	}
}
