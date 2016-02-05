<?php
/**
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\AbuseFilterCheck;
use ContentTranslation\Translation;
use ContentTranslation\Database;
use ContentTranslation\RestbaseClient;
use ContentTranslation\Translator;
use ContentTranslation\TranslationUnit;
use ContentTranslation\TranslationStorageManager;

class ApiContentTranslationSave extends ApiBase {

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();
		$content = null;
		if ( $this->getUser()->isBlocked() ) {
			$this->dieUsageMsg( 'blockedtext' );
		}

		if ( trim( $params['content'] ) === '' ) {
			$this->dieUsage( 'content cannot be empty', 'invalidcontent' );
		}

		if ( substr( $params['content'], 0, 11 ) === 'rawdeflate,' ) {
			$content = gzinflate( base64_decode( substr( $params[ 'content' ], 11 ) ) );
			// gzinflate returns false on error.
			if ( $content === false ) {
				$this->dieUsage( 'Invalid section content' );
			}
		}
		$translationUnits = json_decode( $content, true );
		if ( !is_array( $translationUnits ) ) {
			$this->dieUsage( 'content must be valid json array', 'invalidjson' );
		}

		$translationId = $params['translationid'];
		$translator = new Translator( $user );
		$translation = $translator->getTranslation( $translationId );
		$translation = $translation->translation;
		if ( $translationId === null ||
			$translator->getGlobalUserId() !== intval( $translation['lastUpdatedTranslator'] ) ) {
			// Translation does not exist or belong to another translator
			$this->dieUsage( 'Invalid translation ID: ' . $params['translationid'] );
		}

		$validationResults = array();

		foreach ( $translationUnits as $tuData ) {
			$tuData['translationId'] = $translationId;
			if ( !isset( $tuData['sectionId'] ) || !isset( $tuData['origin'] ) ) {
				$this->dieUsage( 'Invalid section data' );
			}
			// Make sure all translation unit fields are defined.
			if ( !isset( $tuData['sequenceId'] ) ) {
				$tuData['sequenceId'] = null;
			}
			if ( !isset( $tuData['content'] ) ) {
				// Content can be null in case translator clear the section.
				$tuData['content'] = null;
			}
			$translationUnit = new TranslationUnit( $tuData );
			TranslationStorageManager::save( $translationUnit );

			$validationResults[$translationUnit->getSectionId()] =
				$this->validateTranslationUnit(
					\Title::newFromText( $translation['targetTitle'] ),
					$translationUnit
				);
		}

		$result = array(
			'result' => 'success',
			'validations' => $validationResults
		);
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * Validate the section content using AbuseFilterCheck
	 * @param \Title $title Target title
	 * @param TranslationUnit $translationUnit
	 * @return array List of any rule violations
	 */
	protected function validateTranslationUnit( \Title $title, TranslationUnit $translationUnit ) {
		$checker = new AbuseFilterCheck();
		$restbaseClient = new RestbaseClient( $this->getConfig() );
		$sectionHTML = $translationUnit->getContent();
		$results = array();
		// We need to catch any exceptions here - For example, if restbase is down
		// it should not affect the saving of transations.
		try {
			// The section content is HTML. AbuseFilter need wikitext.
			$text = $restbaseClient->convertHtmlToWikitext( $title, $sectionHTML );
			$results = $checker->checkSection( $this->getUser(), $title, $text );
		} catch ( Exception $e ) {
			// Validation failed. But proceed.
		}
		return $results;
	}

	public function getAllowedParams() {
		return array(
			'translationid' => array(
				ApiBase::PARAM_TYPE => 'integer',
				ApiBase::PARAM_REQUIRED => true,
			),
			'content' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
		);
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}
}
