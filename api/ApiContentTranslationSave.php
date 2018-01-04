<?php
/**
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

use ContentTranslation\AbuseFilterCheck;
use ContentTranslation\RestbaseClient;
use ContentTranslation\SiteMapper;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\TranslationUnit;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;

class ApiContentTranslationSave extends ApiBase {
	public function execute() {
		$params = $this->extractRequestParams();

		$user = $this->getUser();
		if ( $this->getUser()->isBlocked() ) {
			$this->dieBlocked( $user->getBlock() );
		}

		if ( !Language::isKnownLanguageTag( $params['from'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !Language::isKnownLanguageTag( $params['to'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		$progress = FormatJson::decode( $params['progress'], true );
		if ( !is_array( $progress ) ) {
			$this->dieWithError( 'apierror-cx-invalidprogress', 'invalidprogress' );
		}

		if ( $user->pingLimiter( 'cxsave' ) ) {
			$this->dieWithError( 'apierror-ratelimited' );
		}

		$translator = new Translator( $user );
		$translation = $this->saveTranslation( $params, $translator );
		$translationId = $translation->getTranslationId();

		$translationUnits = $this->getTranslationUnits(
			ApiVisualEditorEdit::tryDeflate( $params['content'] ),
			$translationId
		);
		$this->saveTranslationUnits( $translationUnits, $translation );
		$validationResults = $this->validateTranslationUnits( $translationUnits, $translation );

		$result = [
			'result' => 'success',
			'validations' => $validationResults,
			'translationid' => $translationId
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	protected function validateTranslationUnits( $translationUnits, Translation $translation ) {
		$validationResults = [];

		$title = \Title::newFromText( $translation->getData()['targetTitle'] );
		if ( !$title ) {
			return $validationResults;
		}

		$checker = new AbuseFilterCheck( $this->getUser(), $title );

		foreach ( $translationUnits as $translationUnit ) {
			if ( !$translationUnit->getValidate() ) {
				continue;
			}
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
		$results = [];
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

	/**
	 * @param array $params
	 * @param ContentTranslation\Translator $translator
	 * @return ContentTranslation\Translation
	 */
	protected function saveTranslation( array $params, Translator $translator ) {
		$work = new TranslationWork( $params['sourcetitle'], $params['from'], $params['to'] );
		$existingTranslation = Translation::findForTranslator( $work, $translator );

		if ( $existingTranslation ) {
			$data = $existingTranslation->getData();
		} else {
			$translations = Translation::getConflictingTranslations( $work );

			if ( $translations !== [] ) {
				$this->dieWithError( 'apierror-cx-inuse', 'noaccess' );
			}

			// First time save, add relevant fields
			$data = [
				'sourceTitle' => $work->getPage(),
				'sourceLanguage' => $work->getSourceLanguage(),
				'targetLanguage' => $work->getTargetLanguage(),
				'sourceURL' => SiteMapper::getPageURL(
					$work->getSourceLanguage(),
					$work->getPage()
				),
			];
		}

		// Update updateable fields
		$data['targetTitle'] = $params['title'];
		$data['sourceRevisionId'] = $params['sourcerevision'];
		$data['status'] = 'draft';
		$data['progress'] = $params['progress'];

		// Save the translation
		$translation = new Translation( $data );
		$translation->save( $translator );

		// Assosiate the translation with the translator
		$translationId = $translation->getTranslationId();
		$translator->addTranslation( $translationId );

		return $translation;
	}

	protected function getTranslationUnits( $content, $translationId ) {
		$translationUnits = [];
		if ( trim( $content ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'content' ], 'invalidcontent' );
		}

		$units = json_decode( $content, true );
		foreach ( $units as $tuData ) {
			if ( !isset( $tuData['sectionId'] ) || !isset( $tuData['origin'] ) ) {
				$this->dieWithError( 'apierror-cx-invalidsectiondata', 'invalidcontent' );
			}

			// Make sure all translation unit fields are defined.
			if ( !isset( $tuData['sequenceId'] ) ) {
				$tuData['sequenceId'] = null;
			}
			if ( !isset( $tuData['content'] ) ) {
				// Content can be null in case translator clear the section.
				$tuData['content'] = null;
			}
			if ( !isset( $tuData['validate'] ) ) {
				$tuData['validate'] = false;
			}
			$tuData['translationId'] = $translationId;
			$translationUnits[] = new TranslationUnit( $tuData );
		}

		return $translationUnits;
	}

	/**
	 * @param array $translationUnits
	 * @param Translation $translation Recently saved parent translation object
	 */
	protected function saveTranslationUnits( $translationUnits, Translation $translation ) {
		$newTranslation = $translation->lastSaveWasCreate();
		foreach ( $translationUnits as $translationUnit ) {
			TranslationStorageManager::save( $translationUnit, $newTranslation );
		}
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'title' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'content' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'sourcerevision' => [
				ApiBase::PARAM_TYPE => 'integer',
				ApiBase::PARAM_REQUIRED => true,
			],
			'progress' => [
				ApiBase::PARAM_REQUIRED => true,
			]
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}
}
