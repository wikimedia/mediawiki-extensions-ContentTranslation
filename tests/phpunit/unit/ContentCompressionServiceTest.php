<?php
declare( strict_types = 1 );

namespace ContentTranslation\Tests\Unit\Service;

use ContentTranslation\Service\ContentCompressionService;
use MediaWikiUnitTestCase;
use RuntimeException;

/**
 * @covers \ContentTranslation\Service\ContentCompressionService
 * @group ContentTranslation
 */
class ContentCompressionServiceTest extends MediaWikiUnitTestCase {

	private ContentCompressionService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->service = new ContentCompressionService();
	}

	public function testCompressionAndDecompression() {
		$originalContent = '<p>This is a test HTML content with some <strong>formatting</strong> tags.</p>';

		$compressed = $this->service->compress( $originalContent );
		$this->assertNotEquals( $originalContent, $compressed );
		$this->assertStringStartsWith( ContentCompressionService::COMPRESSION_PREFIX, $compressed );

		$decompressed = $this->service->decompress( $compressed );
		$this->assertEquals( $originalContent, $decompressed );
	}

	public function testDecompressionOfUncompressedContent() {
		$originalContent = '<p>This is uncompressed content.</p>';

		$result = $this->service->decompress( $originalContent );
		$this->assertEquals( $originalContent, $result );
	}

	public function testLargeContentCompression() {
		$originalContent = str_repeat( '<p>This is a repeating paragraph with some text. </p>', 1000 );

		$compressed = $this->service->compress( $originalContent );
		$this->assertLessThan( strlen( $originalContent ), strlen( $compressed ) );

		$decompressed = $this->service->decompress( $compressed );
		$this->assertEquals( $originalContent, $decompressed );
	}

	public function testEmptyContent() {
		$originalContent = '';

		$compressed = $this->service->compress( $originalContent );
		$decompressed = $this->service->decompress( $compressed );

		$this->assertEquals( $originalContent, $decompressed );
	}

	public function testDecompressionFailureThrowsRuntimeException() {
		$invalidContent = ContentCompressionService::COMPRESSION_PREFIX . 'invalid_base64_data';

		$this->expectException( RuntimeException::class );
		$this->service->decompress( $invalidContent );
	}
}
