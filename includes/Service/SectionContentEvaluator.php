<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\Exception\HtmlToWikitextConversionException;
use ContentTranslation\Exception\SectionWikitextRetrievalException;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\SectionAction;
use Exception;
use MediaWiki\Content\TextContent;
use MediaWiki\Page\WikiPageFactory;
use MediaWiki\Revision\SlotRecord;
use MediaWiki\Title\Title;
use Wikimedia\Rdbms\IDBAccessObject;

/**
 * Service that calculates the content that should be added to a page by the 'edit' action.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2025.06
 */
class SectionContentEvaluator {

	public function __construct(
		private readonly WikiPageFactory $wikiPageFactory,
		private readonly ParsoidClientFactory $parsoidClientFactory
	) {
	}

	/**
	 * @throws HtmlToWikitextConversionException
	 * @throws SectionWikitextRetrievalException
	 */
	public function calculateSectionContent(
		string $html,
		Title $targetTitle,
		SectionAction $sectionAction,
		string $targetSectionTitle,
		?string $existingSectionTitle = null
	): string {
		try {
			$parsoidClient = $this->parsoidClientFactory->createParsoidClient();
			$newSectionWikiText = $parsoidClient->convertHtmlToWikitext(
				$targetTitle,
				$html
			)['body'];
		} catch ( Exception $exception ) {
			throw new HtmlToWikitextConversionException( $exception->getMessage() );
		}

		if ( $sectionAction->isExpandAction() ) {
			if ( !$existingSectionTitle ) {
				throw new SectionWikitextRetrievalException( "Existing section title empty" );
			}
			// If the section action is an expand action, the $existingSectionTitle is NOT null
			$existingSectionBodyWikitext = $this->getSectionBodyWikitext( $targetTitle, $existingSectionTitle );

			// Add the wikitext published by the user at the bottom of the existing contents, as a new paragraph
			$newSectionWikiText = "$existingSectionBodyWikitext\n\n$newSectionWikiText";
		}

		if ( $sectionAction->needsSectionTitlePrepending() ) {
			// Add the updated target section title the section body wikitext.
			// add empty line to the end of the wikitext string, so that the next section title goes into the next line
			$newSectionWikiText = "== $targetSectionTitle ==\n$newSectionWikiText\n";
		}

		return $newSectionWikiText;
	}

	/**
	 * Extracts a section's content from wikitext using a simple heading-based regex
	 * @throws SectionWikitextRetrievalException
	 */
	private function getSectionBodyWikitext( Title $targetTitle, string $sectionTitle ): string {
		// set "flags" argument to READ_LATEST, so that we always read the latest information from the primary database
		// bypassing caches. This is important in testing environments, when target articles are created on
		// the fly by "SectionTranslationBeforePublishHandler"
		if ( !$targetTitle->exists( IDBAccessObject::READ_LATEST ) ) {
			throw new SectionWikitextRetrievalException( "Target title doesn't exist" );
		}

		$wikiPage = $this->wikiPageFactory->newFromTitle( $targetTitle );
		$lastRevision = $wikiPage->getRevisionRecord();

		if ( !$lastRevision ) {
			throw new SectionWikitextRetrievalException( 'Target revision not found' );
		}

		$content = $lastRevision->getContent( SlotRecord::MAIN );

		if ( !$content instanceof TextContent ) {
			throw new SectionWikitextRetrievalException( 'Cannot retrieve text content' );
		}

		$pageWikitext = $content->getText();

		$sectionBodyWikitext = null;

		$pattern = '/^==\s*' . preg_quote( $sectionTitle, '/' ) . '\s*==\s*$(.*?)^(==[^=].*?$|\z)/msi';
		if ( preg_match( $pattern, $pageWikitext, $matches ) ) {
			$sectionBodyWikitext = trim( $matches[1] );
		}

		if ( !$sectionBodyWikitext ) {
			throw new SectionWikitextRetrievalException( 'Section body text not found' );
		}

		return $sectionBodyWikitext;
	}
}
