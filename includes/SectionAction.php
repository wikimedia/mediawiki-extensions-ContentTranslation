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

	/**
	 * Determines the appropriate SectionAction based on the given section number and existing title.
	 *
	 * @param int|string $sectionNumber Section index (0 for lead, positive int for numbered, or "new" for appending).
	 * @param string|null $existingSectionTitle The title of the existing section, if any.
	 *
	 * @return self The corresponding SectionAction case.
	 */
	public static function fromData( $sectionNumber, ?string $existingSectionTitle = null ): self {
		if ( $sectionNumber === 0 ) {
			return $existingSectionTitle === null ? self::CREATE_LEAD_SECTION : self::EXPAND_LEAD_SECTION;
		} elseif ( (int)$sectionNumber > 0 ) {
			return $existingSectionTitle === null ? self::CREATE_NUMBERED_SECTION : self::EXPAND_NUMBERED_SECTION;
		} elseif ( $sectionNumber === "new" ) {
			return self::CREATE_SECTION_AT_END;
		}

		return self::CREATE_SECTION_AT_END;
	}
}
