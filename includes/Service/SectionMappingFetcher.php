<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use MediaWiki\Json\FormatJson;
use Psr\Log\LoggerInterface;

/**
 * Service responsible for retrieving section mapping data from the CX server.
 *
 * It maps sections from a source article to corresponding sections in a target article
 * and returns the results in a structured format.
 *
 * @license GPL-2.0-or-later
 * @since 2025.08
 */
class SectionMappingFetcher {

	public function __construct(
		private readonly CxServerClient $cxServerClient,
		private readonly LoggerInterface $logger
	) {
	}

	/**
	 * Fetch section mappings from CX server for source and target articles.
	 * Returns structured data about section relationships between the articles.
	 *
	 * @param string $sourceLanguage
	 * @param string $sourceTitle
	 * @param string $targetLanguage
	 * @return array|null Array with keys: sourceSections, present, missing, or null on failure
	 */
	public function fetchSectionMapping(
		string $sourceLanguage,
		string $sourceTitle,
		string $targetLanguage
	): ?array {
		$path = "/v2/suggest/sections/" . rawurlencode( $sourceTitle ) . "/$sourceLanguage/$targetLanguage";
		$response = $this->cxServerClient->get( $path );

		if ( !$response ) {
			return null;
		}

		$json = FormatJson::decode( $response, true );
		if ( !$this->isValidSectionMappingResponse( $json ) ) {
			$this->logger->info(
				'Invalid section mapping response from CX server',
				[
					'sourceTitle' => $sourceTitle,
					'sourceLanguage' => $sourceLanguage,
					'targetLanguage' => $targetLanguage,
					'response' => $response
				]
			);
			return null;
		}

		$sectionData = $json['sections'];
		return [
			'sourceSections' => $sectionData['sourceSections'],
			'present' => $sectionData['present'] ?? [],
			'missing' => $sectionData['missing'] ?? []
		];
	}

	/**
	 * Validate that the CX server response has the expected structure.
	 *
	 * @param mixed $json Decoded JSON response
	 * @return bool True if response is valid
	 */
	private function isValidSectionMappingResponse( $json ): bool {
		return is_array( $json ) &&
			isset( $json['sections'] ) &&
			is_array( $json['sections'] ) &&
			isset( $json['sections']['sourceSections'] ) &&
			is_array( $json['sections']['sourceSections'] );
	}
}
