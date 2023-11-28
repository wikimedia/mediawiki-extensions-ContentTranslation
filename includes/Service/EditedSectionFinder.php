<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use MediaWiki\Revision\RevisionRecord;
use MediaWiki\Revision\SlotRecord;
use TextContent;
use Wikimedia\Diff\DiffOp;

class EditedSectionFinder {
	// Top section titles follow this pattern:
	// == Section Title ==
	private const SECTION_TITLE_PATTERN = "/^==([^=].*?)==$/";
	private const WIKITEXT_COMMENT_PATTERN = "/<!--(.*?)-->/";

	/**
	 * Given two TextContent instances, one representing the new version of the
	 * text content and the second the old one, this method an array of diff
	 * operations (DiffOp objects), that represents the changes between these
	 * two text contents.
	 *
	 * @param TextContent $newContent
	 * @param TextContent $oldContent
	 * @return string[]
	 */
	public function findEditedSectionsBetweenTextContents( TextContent $newContent, TextContent $oldContent ): array {
		$diff = $oldContent->diff( $newContent );
		$diffOps = $diff->getEdits();

		return $this->findEditedSectionsByDiffOps( $diffOps );
	}

	/**
	 * Given a revision, this static method finds all sections that were edited
	 * in this revision, and returns an array filled with these section titles
	 *
	 * @param RevisionRecord $currentRevision
	 * @param RevisionRecord|null $previousRevision
	 * @return string[]
	 */
	public function findEditedSectionsBetweenRevisions(
		RevisionRecord $currentRevision,
		?RevisionRecord $previousRevision
	): array {
		$newContent = $currentRevision->getContent( SlotRecord::MAIN, RevisionRecord::RAW );
		// If no previous revision, set old content to empty TextContent object
		if ( $previousRevision instanceof RevisionRecord ) {
			$oldContent = $previousRevision->getContent( SlotRecord::MAIN, RevisionRecord::RAW );
		} else {
			// TextContentHandler::makeEmptyContent method doesn't initialize the content model
			// properly, leading to CI errors. To fix this issue, instantiate oldContent manually
			$oldContent = new TextContent( '', $newContent->getModel() );
		}

		// We can only calculate the difference for TextContent instances.
		// If any of the content variables is not an instance of TextContent
		// class, then return an empty array. In fact, both variables are
		// expected to be instances of TextContent class when the method is
		// actually called, however that may not be the case for CI tests.
		if ( !$newContent instanceof TextContent || !$oldContent instanceof TextContent ) {
			return [];
		}

		return $this->findEditedSectionsBetweenTextContents( $newContent, $oldContent );
	}

	/**
	 * Given an array of diff operations, find all sections that were changed during the
	 * latest page edit
	 *
	 * @param DiffOp[] $diffOps
	 * @return string[]
	 */
	private function findEditedSectionsByDiffOps( array $diffOps ): array {
		$diffOps = array_values( $diffOps );
		$editedSections = [];
		foreach ( $diffOps as $i => $diffOp ) {
			// If first diff operation is an "add" operation, it should refer
			// to an edit in the lead section of the page. Since we only care
			// about edits in non-lead sections, we skip first operation.
			// If current diff operation is a copy, then we just skip, as copies
			// that are followed by other copies do not contain edited sections
			if ( $i === 0 || $diffOp->getType() === "copy" ) {
				continue;
			}

			/**
			 * This variable contains all lines on the right ("new") side of the diff, or
			 * false when it's a delete operation.
			 * In case of delete operations, we do no consider sections that were deleted as
			 * edited sections.
			 *
			 * @type string[]|false
			 */
			$textAfterOp = $diffOp->getClosing();
			$currentEditedSections = [];
			// This variable indicates whether the first line of the current diff operation
			// is a section title. When true, this variable indicates that a new section
			// was added without modifying the previous one.
			// If current diff operation is a "delete" operation, this variable is always
			// false.
			$isFirstLineSectionTitle = false;
			if ( $textAfterOp ) {
				$isFirstLineSectionTitle = $this->isSectionLine( $diffOp->getClosing( 0 ) );
				$currentEditedSections = $this->getSectionTitlesFromLines( $textAfterOp );
			}

			// If first line of the current diff operation is a section title, then
			// previous section was not edited. If not, the title of the currently
			// edited section, is contained inside the previous diff operation
			// (which is a copy).
			if ( !$isFirstLineSectionTitle ) {
				// This operation is the first operation or a copy operation
				$previousOp = $diffOps[$i - 1];
				// The title of the current edited section is the last section title
				// present inside the previous diff operation
				$revertedPreviousLines = array_reverse( $previousOp->orig );
				$previousSectionTitles = $this->getSectionTitlesFromLines( $revertedPreviousLines );
				if ( $previousSectionTitles ) {
					$editedSections[] = current( $previousSectionTitles );
				}
			}
			$editedSections = array_merge( $editedSections, $currentEditedSections );
		}
		return $editedSections;
	}

	/**
	 * Given a string, this method returns a boolean indicating whether this
	 * string is a line containing a section title.
	 *
	 * @param string $line
	 * @return bool
	 */
	private static function isSectionLine( string $line ): bool {
		return (bool)preg_match( self::SECTION_TITLE_PATTERN, $line );
	}

	/**
	 * Given an array of strings, representing text lines, this static method
	 * filters only the lines that contain a section title, and finally returns
	 * an array with the actual section titles among these lines (if any).
	 *
	 * @param string[] $lines
	 * @return string[]
	 */
	private function getSectionTitlesFromLines( array $lines ): array {
		$editedSections = [];
		foreach ( $lines as $line ) {
			// Find the section title without the equal signs (==)
			preg_match( self::SECTION_TITLE_PATTERN, trim( $line ), $matches );
			if ( $matches && isset( $matches[1] ) ) {
				// Remove comments
				$sectionTitle = preg_replace( self::WIKITEXT_COMMENT_PATTERN, '', $matches[1 ] );
				$editedSections[] = trim( $sectionTitle );
			}
		}
		return $editedSections;
	}
}
