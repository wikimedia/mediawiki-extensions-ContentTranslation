<?php

namespace ContentTranslation\Tests;

use ContentTranslation\RestbaseClient;
use Generator;
use MediaWiki\Page\PageIdentityValue;
use MediaWikiIntegrationTestCase;
use Psr\Log\NullLogger;
use VirtualRESTServiceClient;

/**
 * @coversDefaultClass ContentTranslation\RestbaseClient
 * @group Database
 * @group ContentTranslation
 */
class RestbaseClientTest extends MediaWikiIntegrationTestCase {

	/** @var string */
	private const HTML = '<h2>RestbaseClient test</h2>';

	/** @var string */
	private const WIKITEXT = '== RestbaseClient test ==';

	/**
	 * @param array $expectedReq
	 * @param array $response
	 *
	 * @return RestbaseClient
	 */
	private function createRestbaseClient( array $expectedReq, array $response ): RestbaseClient {
		$vrsClient = $this->createNoOpMock(
			VirtualRESTServiceClient::class,
			[ 'run' ]
		);
		$vrsClient->method( 'run' )->willReturnCallback(
			static function ( array $request ) use ( $expectedReq, $response ) {
				foreach ( $expectedReq as $key => $value ) {
					self::assertSame( $value, $request[$key], $key );
				}

				return $response;
			}
		);

		return new RestbaseClient(
			$vrsClient,
			new NullLogger()
		);
	}

	/**
	 * @return Generator
	 */
	public static function restbaseErrorObjectProvider() {
		yield [
			[
				'code' => 200,
				'headers' => [],
				'body' => '<html><body>Response body</body></html>',
				'error'	=> 'Whats the message?',
			],
			[
				'apierror-cx-docserverexception',
				'Whats the message?'
			]
		];

		yield [
			[
				'code' => '500',
				'headers' => [],
				'body' => '{}',
				'error'	=> '',
			],

			[
				'apierror-cx-docserverexception',
				'500',
				'(no message)'
			]
		];

		yield [
			[
				'code' => '404',
				'headers' => [],
				'body' => json_encode( [
					'detail' => 'Another error message',
				] ),
				'error'	=> '',
			],

			[
				'apierror-cx-docserverexception',
				'404',
				'Another error message'
			]
		];

		yield [
			[
				'code' => '205',
				'headers' => [
					'Location' => 'http://example.com/'
				],
				'body' => json_encode( [
					'detail' => 'bla bla bla',
				] ),
				'error'	=> '',
			],

			// not an error
			null
		];
	}

	/**
	 * @covers ::convertHtmlToWikitext
	 * @dataProvider restbaseErrorObjectProvider
	 */
	public function testConvertHtmlToWikitextError( $restbaseResponse, $expectedError ) {
		$vrsClient = $this->createRestbaseClient(
			[
				'method' => 'POST',
				'url' =>
					'/restbase/local/v1/transform/html/to/wikitext/RestbaseClient',
			],
			$restbaseResponse
		);

		$revision = $this->getExistingTestPage( 'VRSParsoidClient' )
			->getRevisionRecord();

		$pageHtmlResponse = $vrsClient->convertHtmlToWikitext(
			PageIdentityValue::localIdentity( 1, NS_MAIN, 'RestbaseClient' ),
			self::HTML
		);
		$this->assertSame( $expectedError, $pageHtmlResponse["error"] );
	}

	/**
	 * @covers ::convertHtmlToWikitext
	 */
	public function testConvertHtmlToWikitext() {
		$response = [
			'code' => 200,
			'body' => '<html><body>Response body</body></html>',
			'error'	=> null,
		];

		$vrsClient = $this->createRestbaseClient(
			[
				'method' => 'POST',
				'url' =>
					'/restbase/local/v1/transform/html/to/wikitext/RestbaseClient',
			],
			$response
		);

		$resp = $vrsClient->convertHtmlToWikitext(
			PageIdentityValue::localIdentity( 1, NS_MAIN, 'RestbaseClient' ),
			self::HTML
		);

		$this->assertIsArray( $resp );
		$this->assertArrayEquals( $resp, $response, false, true );
	}

	/**
	 * @covers ::convertWikitextToHtml
	 */
	public function testConvertWikitextToHtml() {
		$response = [
			'code' => 200,
			'body' => '<html><body>Response body</body></html>',
			'error' => '',
		];

		$vrsClient = $this->createRestbaseClient(
			[
				'method' => 'POST',
				'url' =>
					'/restbase/local/v1/transform/wikitext/to/html/RestbaseClient',
			],
			$response
		);

		$resp = $vrsClient->convertWikitextToHtml(
			PageIdentityValue::localIdentity( 1, NS_MAIN, 'RestbaseClient' ),
			self::WIKITEXT,
		);

		$this->assertIsArray( $resp );
		$this->assertArrayEquals( $resp, $response, false, true );
	}
}
