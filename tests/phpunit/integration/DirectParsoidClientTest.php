<?php

namespace ContentTranslation\Tests;

use ContentTranslation\DirectParsoidClient;
use MediaWiki\Page\PageIdentityValue;
use MediaWikiIntegrationTestCase;

/**
 * @coversDefaultClass ContentTranslation\DirectParsoidClient
 * @group ContentTranslation
 * @group Database
 */
class DirectParsoidClientTest extends MediaWikiIntegrationTestCase {

	/**
	 * @return DirectParsoidClient
	 */
	private function createDirectClient(): DirectParsoidClient {
		$services = $this->getServiceContainer();
		$directClient = new DirectParsoidClient(
			$services->getPageRestHelperFactory(),
			$services->getUserFactory()->newAnonymous()
		);

		return $directClient;
	}

	/**
	 * @covers ::convertHtmlToWikitext
	 */
	public function testConvertHtmlToWikitext() {
		$directClient = $this->createDirectClient();

		$pageIdentity = PageIdentityValue::localIdentity(
			1,
			NS_MAIN,
			'DirectParsoidClient'
		);

		$html = '<h2>Hello World</h2>';
		$oldid = $pageIdentity->getId();

		$response = $directClient->convertHtmlToWikitext(
			$pageIdentity,
			$html,
		);

		$this->assertIsArray( $response );
		$this->assertArrayHasKey( 'headers', $response );
		$this->assertArrayHasKey( 'Content-Type', $response['headers'] );

		$this->assertArrayHasKey( 'body', $response );
		// Trim to remove trailing newline
		$wikitext = trim( $response['body'] );
		$this->assertStringContainsString( '== Hello World ==', $wikitext );
	}

	/**
	 * @covers ::convertWikitextToHtml
	 */
	public function testConvertWikitextToHtml() {
		$directClient = $this->createDirectClient();

		$page = $this->getExistingTestPage( 'DirectParsoidClient' );
		$pageRecord = $page->toPageRecord();
		$wikitext = '== Hello World ==';

		$response = $directClient->convertWikitextToHtml(
			$pageRecord,
			$wikitext,
		);

		$this->assertIsArray( $response );
		$this->assertArrayHasKey( 'body', $response );
		$this->assertArrayHasKey( 'headers', $response );

		$headers = $response['headers'];

		$html = $response['body'];
		$this->assertStringContainsString( $page->getTitle()->getText(), $html );
		$this->assertStringContainsString( '>Hello World</h2>', $html );
	}

}
