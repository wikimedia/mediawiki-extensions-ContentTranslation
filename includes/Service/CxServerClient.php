<?php

namespace ContentTranslation\Service;

use ContentTranslation\Exception\CxServerConfigurationException;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Http\HttpRequestFactory;
use Psr\Log\LoggerInterface;

class CxServerClient {

	private string $cxServerHost;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'ContentTranslationCxServerHost'
	];

	/**
	 * @throws CxServerConfigurationException
	 */
	public function __construct(
		private readonly HttpRequestFactory $httpRequestFactory,
		private readonly LoggerInterface $logger,
		ServiceOptions $options
	) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->cxServerHost = $options->get( 'ContentTranslationCxServerHost' );

		if ( !$this->cxServerHost ) {
			throw new CxServerConfigurationException( 'Cxserver host not set' );
		}
	}

	/**
	 * @param string $path relative path to the requested cxserver endpoint e.g. /suggest/sections/Football/en/el
	 * @return mixed
	 */
	public function get( string $path ) {
		$url = rtrim( $this->cxServerHost, '/' ) . '/' . ltrim( $path, '/' );
		try {
			$response = $this->httpRequestFactory->get( $url, [], __METHOD__ );
		} catch ( \Exception $exception ) {
			$this->logger->error(
				'CX server request to {url} failed because of exception: {exception}',
				[ 'url' => $url, 'exception' => $exception->getMessage() ]
			);
			return null;
		}

		if ( !$response ) {
			$this->logger->error( 'CX server request to {url} returned an empty response', [ 'url' => $url ] );
			return null;
		}

		return $response;
	}
}
