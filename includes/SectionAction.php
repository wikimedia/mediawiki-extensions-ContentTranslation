<?php
declare( strict_types = 1 );

namespace ContentTranslation;

/**
 * Represents the possible actions that can be taken when publishing a section.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2025.06
 */
enum SectionAction: int {
	case CREATE_LEAD_SECTION = 0;
	case CREATE_NUMBERED_SECTION = 1;
	case CREATE_SECTION_AT_END = 2;
	case EXPAND_LEAD_SECTION = 3;
	case EXPAND_NUMBERED_SECTION = 4;
	case REPLACE_NUMBERED_SECTION = 5;
	case CREATE_SANDBOX_SECTION = 6;

	/**
	 * Determines the appropriate SectionAction based on the given section number and existing title.
	 *
	 * @param int|string $sectionNumber Section index (0 for lead, positive int for numbered, or "new" for appending).
	 * @param string $publishTarget The publishing target ('EXPAND', 'REPLACE', 'SANDBOX', 'NEW_SECTION')
	 *
	 * @return self The corresponding SectionAction case.
	 */
	public static function fromData( $sectionNumber, string $publishTarget ): self {
		if ( $publishTarget === 'SANDBOX' ) {
			return self::CREATE_SANDBOX_SECTION;
		}

		if ( $sectionNumber === 0 ) {
			return $publishTarget === 'EXPAND' ? self::EXPAND_LEAD_SECTION : self::CREATE_LEAD_SECTION;
		} elseif ( (int)$sectionNumber > 0 ) {
			if ( $publishTarget === 'EXPAND' ) {
				return self::EXPAND_NUMBERED_SECTION;
			} elseif ( $publishTarget === 'REPLACE' ) {
				return self::REPLACE_NUMBERED_SECTION;
			} else {
				return self::CREATE_NUMBERED_SECTION;
			}
		}

		return self::CREATE_SECTION_AT_END;
	}

	public function isExpandAction(): bool {
		return match ( $this ) {
			self::EXPAND_LEAD_SECTION,
			self::EXPAND_NUMBERED_SECTION => true,
			default => false,
		};
	}

	public function isNewLeadSection(): bool {
		return match ( $this ) {
			self::CREATE_LEAD_SECTION => true,
			default => false,
		};
	}

	public function isNewNumberedSection(): bool {
		return match ( $this ) {
			self::CREATE_NUMBERED_SECTION => true,
			default => false,
		};
	}

	public function isSandboxAction(): bool {
		return match ( $this ) {
			self::CREATE_SANDBOX_SECTION => true,
			default => false,
		};
	}

	public function needsSectionTitlePrepending(): bool {
		return match ( $this ) {
			self::EXPAND_LEAD_SECTION,
			self::CREATE_NUMBERED_SECTION,
			self::REPLACE_NUMBERED_SECTION,
			self::EXPAND_NUMBERED_SECTION => true,
			default => false,
		};
	}
}
