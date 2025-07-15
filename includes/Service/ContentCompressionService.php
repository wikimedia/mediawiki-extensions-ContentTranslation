<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use Deflate;
use RuntimeException;

/**
 * This service provides methods to compress and decompress content
 * It uses gzdeflate for compression and use Deflate::inflate for decompression
 *
 * @author Huei Tan
 * @since 2025.06
 */
class ContentCompressionService {

	/**
	 * Prefix for the compressed content
	 */
	public const COMPRESSION_PREFIX = 'rawdeflate,';

	/**
	 * Compress content using gzdeflate.
	 * Returns the compressed content, otherwise original content.
	 *
	 * @param string $content Content to compress (typically HTML)
	 * @return string Compressed content prefixed with COMPRESSION_PREFIX and base64-encoded,
	 *                or original content if compression fails
	 */
	public function compress( string $content ): string {
		$compressed = gzdeflate( $content );
		if ( $compressed === false ) {
			// If compression fails, return the original content
			return $content;
		}

		return self::COMPRESSION_PREFIX . base64_encode( $compressed );
	}

	/**
	 * Decompress content using Deflate::inflate
	 *
	 * @param string $content Potentially compressed content
	 * @return string Decompressed content
	 * @throws RuntimeException If decompression fails
	 */
	public function decompress( string $content ): string {
		if ( Deflate::isDeflated( $content ) ) {
			$status = Deflate::inflate( $content );
			if ( !$status->isGood() ) {
				throw new RuntimeException( (string)$status );
			}
			return $status->getValue();
		}

		return $content;
	}
}
