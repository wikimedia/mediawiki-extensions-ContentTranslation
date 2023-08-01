<?php

namespace ContentTranslation\DTO;

use ContentTranslation\CorporaLookup;
use Sanitizer;

class TranslationUnitDTO {
	public const VALID_BLOB_TYPES = [
		CorporaLookup::TYPE_MT,
		CorporaLookup::TYPE_SOURCE,
		CorporaLookup::TYPE_USER
	];

	/** @var ?int */
	private $sequenceId;
	/**
	 * Fields: [ 'engine' => null, 'content' => string, timestamp: ISO string ]
	 * @var array|null
	 */
	private $source;
	/**
	 * Fields: [ 'engine' => string (e.g. "Google"), 'content' => string, timestamp: ISO string ]
	 * @var array|null
	 */
	private $mt;
	/**
	 * Fields: [ 'engine' => null, 'content' => string, timestamp: ISO string ]
	 * @var array|null
	 */
	private $user;

	public function __construct(
		?int $sequenceId,
		?array $source = null,
		?array $mt = null,
		?array $user = null
	) {
		$this->sequenceId = $sequenceId;
		$this->source = $source;
		$this->mt = $mt;
		$this->user = $user;
	}

	/**
	 * @param string $type
	 * @param array|null $blob
	 * @throws \Exception
	 */
	public function setBlobForType( string $type, ?array $blob ): void {
		if ( !in_array( $type, self::VALID_BLOB_TYPES ) ) {
			throw new \Exception( '[CX] Invalid blob type during translation unit restoration' );
		}

		$existingBlob = $this->$type;
		// It's possible we have a "conflict", since we don't enforce uniqueness
		// in the database. In this case, the one with the latest timestamp is used.
		// Note: TS_ISO_8601 is suitable for string comparison if timezone is Z.
		/** @phan-suppress-next-line PhanTypeArraySuspiciousNullable */
		if ( !isset( $existingBlob ) || $blob['timestamp'] > $existingBlob['timestamp'] ) {
			$this->$type = $blob;
		}
	}

	/**
	 * Returned fields: {sequenceid: int, mt: array, user: array, source: array}
	 * @return array
	 */
	public function toArray() {
		return [
			'sequenceid' => $this->sequenceId,
			'mt' => $this->mt,
			'user' => $this->user,
			'source' => $this->source,
		];
	}

	public function getUserBlob(): ?array {
		return $this->user;
	}

	/**
	 * Used inside dump-corpora.php to filter out units which don't have user provided input
	 * @return bool
	 */
	public function hasUserBlob(): bool {
		return isset( $this->user );
	}

	/**
	 * Used inside dump-corpora.php to filter out units which don't have source
	 * @return bool
	 */
	public function hasSourceBlob(): bool {
		return isset( $this->source );
	}

	/**
	 * Used inside "ApiQueryContentTranslationCorpora" to return the proper array payload
	 * for each (sub)section.
	 *
	 * @param string[] $types The types that are used for this translation unit. e.g. ['source', 'user']
	 * @param bool $sanitize
	 * @return array
	 */
	public function toCustomArray( array $types, bool $sanitize ): array {
		$unit = [ 'sequenceid' => $this->sequenceId ];

		$usedTypes = array_intersect( self::VALID_BLOB_TYPES, $types );

		// filter out unused blob type fields
		foreach ( $usedTypes as $usedType ) {
			$unit[$usedType] = $this->$usedType;
			if ( !isset( $unit[$usedType] ) ) {
				continue;
			}

			if ( $sanitize ) {
				// @phan-suppress-next-line PhanTypeArraySuspiciousNullable
				$unit[$usedType]['content'] = Sanitizer::stripAllTags( $unit[$usedType]['content'] );
			}
		}
		return $unit;
	}

	/**
	 * Used inside dump-corpora.php to return the corpora sections in the proper form
	 * Returned fields: {sequenceid: int, mt: array, user: array, source: array}
	 *
	 * @param bool $sanitize
	 * @return array
	 */
	public function toCorporaDumpArray( bool $sanitize ): array {
		$unit = [ 'sequenceid' => $this->sequenceId ];

		$unit['mt'] = $this->mt;
		$unit['user'] = [
			// @phan-suppress-next-line PhanTypeArraySuspiciousNullable
			'content' => $this->user['content'],
			// @phan-suppress-next-line PhanTypeArraySuspiciousNullable
			'timestamp' => $this->user['timestamp']
		];
		$unit['source'] = [
			// @phan-suppress-next-line PhanTypeArraySuspiciousNullable
			'content' => $this->source['content'],
			// @phan-suppress-next-line PhanTypeArraySuspiciousNullable
			'timestamp' => $this->source['timestamp']
		];

		if ( $sanitize ) {
			// filter out unused blob type fields
			foreach ( self::VALID_BLOB_TYPES as $type ) {
				if ( isset( $unit[$type]['content'] ) ) {
					$unit[$type]['content'] = Sanitizer::stripAllTags( $unit[$type]['content'] );
				}
			}
		}

		return $unit;
	}
}
