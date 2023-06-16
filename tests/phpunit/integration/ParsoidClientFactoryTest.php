<?php

namespace ContentTranslation\Tests;

use ContentTranslation\DirectParsoidClient;
use ContentTranslation\ParsoidClientFactory;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Rest\Handler\Helper\PageRestHelperFactory;
use MediaWikiIntegrationTestCase;
use MultiHttpClient;

/**
 * @covers \ContentTranslation\ParsoidClientFactory
 * @group ContentTranslation
 */
class ParsoidClientFactoryTest extends MediaWikiIntegrationTestCase {
	public function testGetParsoidClientFactory() {
		$parsoidClientFactory = $this->getServiceContainer()
			->get( ParsoidClientFactory::SERVICE_NAME );

		$this->assertInstanceOf( ParsoidClientFactory::class, $parsoidClientFactory );
	}

	private function newClientFactory() {
		$httpRequestFactory = $this->createNoOpMock( HttpRequestFactory::class, [ 'createMultiClient' ] );
		$httpRequestFactory->method( 'createMultiClient' )->willReturn(
			$this->createNoOpMock( MultiHttpClient::class )
		);

		return new ParsoidClientFactory(
			$this->createNoOpMock( PageRestHelperFactory::class )
		);
	}

	public function testGetClient() {
		$factory = $this->newClientFactory();

		$client = $factory->createParsoidClient();
		$this->assertInstanceOf( DirectParsoidClient::class, $client );
	}

}
