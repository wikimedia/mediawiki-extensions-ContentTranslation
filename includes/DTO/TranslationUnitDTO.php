<?php
declare( strict_types = 1 );

namespace ContentTranslation\DTO;

use InvalidArgumentException;
use MediaWiki\Parser\Sanitizer;
use UnexpectedValueException;

class TranslationUnitDTO {
	public const TYPE_SOURCE = 'source';
	public const TYPE_MT = 'mt';
	public const TYPE_USER = 'user';

	public const VALID_BLOB_TYPES = [
		self::TYPE_MT,
		self::TYPE_SOURCE,
		self::TYPE_USER
	];

	private ?int $sequenceId;
	/**
	 * Fields: [ 'engine' => null, 'content' => string, timestamp: ISO string ]
	 */
	private ?array $source;
	/**
	 * Fields: [ 'engine' => string (e.g. "Google"), 'content' => string, timestamp: ISO string ]
	 */
	private ?array $mt;
	/**
	 * Fields: [ 'engine' => null, 'content' => string, timestamp: ISO string ]
	 */
	private ?array $user;
	private string $sectionId;

	public function __construct(
		string $sectionId,
		?int $sequenceId,
		?array $source = null,
		?array $mt = null,
		?array $user = null
	) {
		$this->sectionId = $sectionId;
		$this->sequenceId = $sequenceId;
		$this->source = $source;
		$this->mt = $mt;
		$this->user = $user;
	}

	/**
	 * @param string $type
	 * @param array|null $blob
	 */
	public function setBlobForType( string $type, ?array $blob ): void {
		if ( !in_array( $type, self::VALID_BLOB_TYPES ) ) {
			throw new InvalidArgumentException( '[CX] Invalid blob type during translation unit restoration' );
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

	public function getMtBlob(): ?array {
		return $this->mt;
	}

	/**
	 * This method returns a boolean indicating whether the translation unit has user provided input.
	 * @return bool
	 */
	public function hasUserBlob(): bool {
		return isset( $this->user );
	}

	/**
	 * This method returns a boolean indicating whether the translation unit has source content
	 * @return bool
	 */
	public function hasSourceBlob(): bool {
		return isset( $this->source );
	}

	/**
	 * This method returns an array representation of the translation unit, suitable to be used
	 * as payload for each (sub)section for the "contenttranslationcorpora" endpoint response.
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

	public function getRevision(): ?int {
		$sectionIdPieces = explode( '_', $this->sectionId );

		return isset( $sectionIdPieces[0] ) ? (int)$sectionIdPieces[0] : null;
	}

	public function getMwSectionNumber(): ?int {
		$sectionIdPieces = explode( '_', $this->sectionId );

		return isset( $sectionIdPieces[1] ) ? (int)$sectionIdPieces[1] : null;
	}

	public function getBaseSectionId(): string {
		$sectionIdPieces = explode( '_', $this->sectionId );

		// sectionId should be in the following format: ${revision}_${sectionNumber}_${subSectionId}
		if ( count( $sectionIdPieces ) < 3 ) {
			throw new UnexpectedValueException( '[CX] Invalid format for section id of the translation unit DTO' );
		}

		return "$sectionIdPieces[0]_$sectionIdPieces[1]";
	}

}
