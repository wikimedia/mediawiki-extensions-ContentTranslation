<?php
/**
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\AbuseFilterCheck;
use ContentTranslation\Database;
use ContentTranslation\Draft;
use ContentTranslation\RestbaseClient;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\TranslationUnit;
use ContentTranslation\Translator;

class ApiContentTranslationSave extends ApiBase {

	/**
	 * @var Translation
	 */
	protected $translation;

	/**
	 * @var Translator
	 */
	protected $translator;

	public function execute() {
		$params = $this->extractRequestParams();

		$user = $this->getUser();
		if ( $this->getUser()->isBlocked() ) {
			$this->dieUsageMsg( 'blockedtext' );
		}

		if ( !Language::isKnownLanguageTag( $params['from'] ) ) {
			$this->dieUsage( 'Invalid source language', 'invalidsourcelanguage' );
		}

		if ( !Language::isKnownLanguageTag( $params['to'] ) ) {
			$this->dieUsage( 'Invalid target language', 'invalidtargetlanguage' );
		}

		$progress = FormatJson::decode( $params['progress'], true );
		if ( !is_array( $progress ) ) {
			$this->dieUsage( 'Invalid progress', 'invalidprogress' );
		}

		$this->translator = new Translator( $user );
		$this->translation = $this->saveTranslation( $params );

		$translationUnits = $this->getTranslationUnits( $params['content'] );
		$this->saveTranslationUnits( $translationUnits );
		$validationResults = $this->validateTranslationUnits( $translationUnits );
		$translationId = $this->translation->getTranslationId();

		// Delete the record from cx_drafts table if exists.
		// Now we have the translation stored in cx_corpora table.
		DeferredUpdates::addCallableUpdate( function() use ( $translationId ) {
			Draft::delete( $translationId );
		} );

		$result = array(
			'result' => 'success',
			'validations' => $validationResults,
			'translationid' => $translationId
		);
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	protected function validateTranslationUnits( $translationUnits ) {
		$validationResults = array();

		$title = \Title::newFromText( $this->translation->translation['targetTitle'] );
		$checker = new AbuseFilterCheck( $this->getUser(), $title );

		foreach ( $translationUnits as $translationUnit ) {
			$sectionId = $translationUnit->getSectionId();
			if ( $sectionId === 'mwcx-source-title' ) {
				$validationResults[$sectionId] =
					$checker->checkTitle();
			} else {
				$validationResults[$sectionId] =
					$this->validateTranslationUnit( $checker, $title, $translationUnit );
			}
		}

		return $validationResults;
	}

	/**
	 * Validate the section content using AbuseFilterCheck
	 * @param AbuseFilterCheck $checker
	 * @param \Title $title Target title
	 * @param TranslationUnit $translationUnit
	 * @return array List of any rule violations
	 */
	protected function validateTranslationUnit(
		AbuseFilterCheck $checker, \Title $title, TranslationUnit $translationUnit
	) {
		$restbaseClient = new RestbaseClient( $this->getConfig() );
		$sectionHTML = $translationUnit->getContent();
		$results = array();
		// We need to catch any exceptions here - For example, if restbase is down
		// it should not affect the saving of transations.
		try {
			// The section content is HTML. AbuseFilter need wikitext.
			$text = $restbaseClient->convertHtmlToWikitext( $title, $sectionHTML );
			$results = $checker->checkSection( $text );
		} catch ( Exception $e ) {
			// Validation failed. But proceed.
		}
		return $results;
	}

	protected function saveTranslation( array $params ) {
		$translation = Translation::find(
			$params['from'],
			$params['to'],
			$params['sourcetitle']
		);

		// First time save, add relevant fields
		if ( !$translation ) {
			$translation = array(
				'sourceTitle' => $params['sourcetitle'],
				'sourceLanguage' => $params['from'],
				'targetLanguage' => $params['to'],
				'sourceURL' => ContentTranslation\SiteMapper::getPageURL(
					$params['from'], $params['sourcetitle']
				),
				// If the translation exists, this field wont get updated.
				'startedTranslator' => $this->translator->getGlobalUserId(),
				'lastUpdatedTranslator' => $this->translator->getGlobalUserId(),
			);
		} else {
			// Get the array out of the object. Bit confusing.
			$translation = $translation->translation;
		}

		$owner = (int)$translation['lastUpdatedTranslator'];
		$user = (int)$this->translator->getGlobalUserId();
		if ( $owner !== $user ) {
			$this->dieUsage( 'Another user is already translating this article', 'noaccess' );
		}

		// Update updateable fields
		$translation['targetTitle'] = $params['title'];
		$translation['sourceRevisionId'] = $params['sourcerevision'];
		$translation['status'] = 'draft';
		$translation['progress'] = $params['progress'];

		$cxtranslation = new ContentTranslation\Translation( $translation );
		$cxtranslation->save();

		// Assosiate the translation with the translator
		$translationId = $cxtranslation->getTranslationId();
		$this->translator->addTranslation( $translationId );

		return $cxtranslation;
	}

	protected function getTranslationUnits( $content ) {
		$translationUnits = array();
		if ( trim( $content ) === '' ) {
			$this->dieUsage( 'content cannot be empty', 'invalidcontent' );
		}

		if ( substr( $content, 0, 11 ) === 'rawdeflate,' ) {
			$content = gzinflate( base64_decode( substr( $content, 11 ) ) );
			// gzinflate returns false on error.
			if ( $content === false ) {
				$this->dieUsage( 'Invalid section content', 'invalidcontent' );
			}
		}

		$units = json_decode( $content, true );
		foreach ( $units as $tuData ) {
			if ( !isset( $tuData['sectionId'] ) || !isset( $tuData['origin'] ) ) {
				$this->dieUsage( 'Invalid section data', 'invalidcontent' );
			}

			// Make sure all translation unit fields are defined.
			if ( !isset( $tuData['sequenceId'] ) ) {
				$tuData['sequenceId'] = null;
			}
			if ( !isset( $tuData['content'] ) ) {
				// Content can be null in case translator clear the section.
				$tuData['content'] = null;
			}

			$tuData['translationId'] = $this->translation->getTranslationId();
			$translationUnits[] = new TranslationUnit( $tuData );
		}

		return $translationUnits;
	}

	protected function saveTranslationUnits( $translationUnits ) {
		foreach ( $translationUnits as $translationUnit ) {
			TranslationStorageManager::save( $translationUnit );
		}
	}

	public function getAllowedParams() {
		return array(
			'from' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'to' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcetitle' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'title' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'content' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcerevision' => array(
				ApiBase::PARAM_TYPE => 'integer',
				ApiBase::PARAM_REQUIRED => true,
			),
			'progress' => array(
				ApiBase::PARAM_REQUIRED => true,
			)
		);
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}
}
