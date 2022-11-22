<?php

namespace ContentTranslation\Tests;

use ContentTranslation\DirectParsoidClient;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\RestbaseClient;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\MainConfigNames;
use MediaWiki\Permissions\Authority;
use MediaWiki\Rest\Handler\PageRestHelperFactory;
use MediaWikiIntegrationTestCase;
use MultiHttpClient;
use Psr\Log\NullLogger;

/**
 * @coversDefaultClass \ContentTranslation\ParsoidClientFactory
 */
class ParsoidClientFactoryTest extends MediaWikiIntegrationTestCase {

	/**
	 * @covers ::__construct
	 */
	public function testGetParsoidClientFactory() {
		$parsoidClientFactory = $this->getServiceContainer()
			->get( ParsoidClientFactory::SERVICE_NAME );

		$this->assertInstanceOf( ParsoidClientFactory::class, $parsoidClientFactory );
	}

	private function newClientFactory( array $optionValues ) {
		$options = new ServiceOptions( ParsoidClientFactory::CONSTRUCTOR_OPTIONS, $optionValues );

		$httpRequestFactory = $this->createNoOpMock( HttpRequestFactory::class, [ 'createMultiClient' ] );
		$httpRequestFactory->method( 'createMultiClient' )->willReturn(
			$this->createNoOpMock( MultiHttpClient::class )
		);

		return new ParsoidClientFactory(
			$options,
			$httpRequestFactory,
			new NullLogger(),
			$this->createNoOpMock( PageRestHelperFactory::class )
		);
	}

	/**
	 * @dataProvider provideGetClient
	 * @covers ::createParsoidClient
	 */
	public function testGetClient( $optionValues, $expectedType ) {
		$authority = $this->createNoOpMock( Authority::class );

		$factory = $this->newClientFactory( $optionValues );

		$client = $factory->createParsoidClient();
		$this->assertInstanceOf( $expectedType, $client );
	}

	public function provideGetClient() {
		yield 'Empty VRS modules array, DefaultParsoidClient=vrs' => [
			[
				MainConfigNames::ParsoidSettings => [],
				'ContentTranslationRESTBase' => [],
				MainConfigNames::VirtualRestConfig => [
					'modules' => []
				],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			DirectParsoidClient::class
		];
		yield 'No VRS modules array, DefaultParsoidClient=vrs' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [],
				'ContentTranslationRESTBase' => [],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			DirectParsoidClient::class
		];
		yield 'restbase module defined, DefaultParsoidClient=vrs, no hints' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [
					'modules' => [ 'restbase' => [] ]
				],
				'ContentTranslationRESTBase' => [],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			RestbaseClient::class
		];
		yield 'parsoid module defined, DefaultParsoidClient=vrs' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [
					'modules' => [ 'parsoid' => [] ]
				],
				'ContentTranslationRESTBase' => [],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			RestbaseClient::class
		];

		yield 'Content Translation VRS module defined and valid, DefaultParsoidClient=vrs' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [],
				'ContentTranslationRESTBase' => [
					'url' => 'cx restbase url'
				],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			RestbaseClient::class
		];

		yield 'parsoid module defined, DefaultParsoidClient=direct' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [
					'modules' => [ 'parsoid' => [] ]
				],
				'ContentTranslationRESTBase' => [],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'direct',
			],
			DirectParsoidClient::class
		];

		yield 'No VRS modules array, ShouldUseVRS = true' => [
			[
				MainConfigNames::ParsoidSettings => [],
				MainConfigNames::VirtualRestConfig => [],
				'ContentTranslationRESTBase' => [],
				ParsoidClientFactory::DEFAULT_PARSOID_CLIENT_SETTING => 'vrs',
			],
			DirectParsoidClient::class
		];
	}

}
