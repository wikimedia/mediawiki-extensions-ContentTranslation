<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

declare( strict_types = 1 );

namespace ContentTranslation\Validator;

use ContentTranslation\AbuseFilterChecker;
use ContentTranslation\Entity\TranslationUnit;
use ContentTranslation\ParsoidClient;
use ContentTranslation\ParsoidClientFactory;
use Exception;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

class TranslationUnitValidator {
	/** @var AbuseFilterChecker */
	private $abuseFilterChecker;

	/** @var ParsoidClientFactory */
	protected $parsoidClientFactory;

	public function __construct( AbuseFilterChecker $abuseFilterChecker, ParsoidClientFactory $parsoidClientFactory ) {
		$this->abuseFilterChecker = $abuseFilterChecker;
		$this->parsoidClientFactory = $parsoidClientFactory;
	}

	protected function getParsoidClient(): ParsoidClient {
		return $this->parsoidClientFactory->createParsoidClient();
	}

	/**
	 * @param TranslationUnit[] $translationUnits
	 * @param string $targetTitle
	 * @param User $user
	 * @return array
	 */
	public function validateTranslationUnitsForTitleUser(
		array $translationUnits,
		string $targetTitle,
		User $user
	): array {
		$validationResults = [];

		$title = Title::newFromText( $targetTitle );
		if ( !$title ) {
			return $validationResults;
		}

		$titleResults = $this->abuseFilterChecker->checkTitleForUser( $title, $user );
		foreach ( $translationUnits as $translationUnit ) {
			if ( !$translationUnit->getValidate() ) {
				continue;
			}
			$sectionId = $translationUnit->getSectionId();
			if ( $sectionId === 'mwcx-source-title' ) {
				$validationResults[ $sectionId ] = $titleResults;
			} else {
				$sectionHTML = $translationUnit->getContent();
				$validationResults[ $sectionId ] = $this->validateContent( $sectionHTML, $title, $user );
			}
		}

		return $validationResults;
	}

	/**
	 * Validate the section content using AbuseFilterChecker
	 * @param string $sectionHTML
	 * @param Title $title Target title
	 * @param User $user
	 * @return array List of any rule violations
	 */
	protected function validateContent( string $sectionHTML, Title $title, User $user ): array {
		$results = [];
		// We need to catch any exceptions here - For example, if restbase is down
		// it should not affect the saving of translations.
		try {
			// The section content is HTML. AbuseFilter need wikitext.
			$text = $this->getParsoidClient()->convertHtmlToWikitext( $title, $sectionHTML )['body'];
			$results = $this->abuseFilterChecker->checkSectionForTitleAndUser( $user, $title, $text );
		} catch ( Exception $e ) {
			// Validation failed. But proceed.
		}
		return $results;
	}

}
