<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\Entity\SectionTranslation;
use ContentTranslation\Exception\InvalidSectionDataException;
use ContentTranslation\LoadBalancer;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use Language;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationSave extends ApiBase {
	/** @var TranslationCorporaStore */
	private $corporaStore;

	/** @var LoadBalancer */
	private $lb;

	/** @var SectionTranslationStore */
	private $sectionTranslationStore;

	public function __construct(
		ApiMain $mainModule,
		$action,
		TranslationCorporaStore $corporaStore,
		LoadBalancer $loadBalancer,
		SectionTranslationStore $sectionTranslationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaStore = $corporaStore;
		$this->lb = $loadBalancer;
		$this->sectionTranslationStore = $sectionTranslationStore;
	}

	private function validateRequest() {
		if ( $this->lb->getConnection( DB_PRIMARY )->isReadOnly() ) {
			$this->dieReadOnly();
		}

		$user = $this->getUser();

		if ( $user->isAnon() ) {
			$this->dieWithError( 'apierror-sxsave-anon-user' );
		}

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( $user->pingLimiter( 'sxsave' ) ) {
			$this->dieWithError( 'apierror-ratelimited' );
		}

		$params = $this->extractRequestParams();
		if ( !Language::isKnownLanguageTag( $params['sourcelanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !Language::isKnownLanguageTag( $params['targetlanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		if ( trim( $params['content'] ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'content' ], 'invalidcontent' );
		}
	}

	/**
	 * @throws \ApiUsageException
	 */
	public function execute() {
		$this->validateRequest();
		$translation = $this->saveTranslation();
		$translationId = $translation->getTranslationId();

		$this->saveParallelCorporaTranslationUnits( $translation );
		$this->saveSectionTranslation( $translationId );
		$result = [
			'result' => 'success',
			'translationid' => $translationId
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * This method finds a translation inside "cx_translations" table, that corresponds
	 * targetlanguage the source/target languages, the source title and the user of the published
	 * translation, and returns it. If no such translation exists, the method returns null.
	 *
	 * @return Translation|null
	 * @throws \ApiUsageException
	 */
	private function getExistingTranslation(): ?Translation {
		$params = $this->extractRequestParams();
		[ 'sourcelanguage' => $sourcelanguage, 'targetlanguage' => $to,'sourcetitle' => $sourceTitle ] = $params;

		$translator = new Translator( $this->getUser() );
		$work = new TranslationWork( $sourceTitle, $sourcelanguage, $to );
		return Translation::findForTranslator( $work, $translator );
	}

	/**
	 * This method creates a new Translation model for the saved translation and returns it
	 *
	 * @return Translation
	 * @throws \ApiUsageException
	 */
	private function createNewTranslationFromPayload(): Translation {
		$params = $this->extractRequestParams();

		$translationData = [
			'sourceTitle' => $params['sourcetitle'],
			'targetTitle' => $params['targettitle'],
			'sourceLanguage' => $params['sourcelanguage'],
			'targetLanguage' => $params['targetlanguage'],
			'sourceRevisionId' => $params['sourcerevision'],
			'sourceURL' => SiteMapper::getPageURL( $params['sourcelanguage'], $params['sourcetitle'] ),
			'status' => 'draft',
			'progress' => json_encode( [ "any" => null, "mt" => null, "human" => null ] ),
			'cxVersion' => 3,
		];

		return new Translation( $translationData );
	}

	/**
	 * @return Translation
	 * @throws \ApiUsageException
	 */
	protected function saveTranslation(): Translation {
		$translation = $this->getExistingTranslation();

		if ( !$translation ) {
			$translation = $this->createNewTranslationFromPayload();
		} else {
			$params = $this->extractRequestParams();
			$translation->translation['sourceRevisionId'] = $params['sourcerevision'];
		}
		$translator = new Translator( $this->getUser() );
		$translation->save( $translator );

		// Associate the translation with the translator
		$translationId = $translation->getTranslationId();
		$translator->addTranslation( $translationId );

		return $translation;
	}

	/**
	 * Given a translation id (corresponding targetlanguage a row inside "cx_translations" table), this
	 * method creates a new SectionTranslation model and stores it inside "cx_section_translations"
	 * table.
	 *
	 * @param int $translationId
	 * @return void
	 * @throws \ApiUsageException
	 */
	private function saveSectionTranslation( int $translationId ): void {
		$params = $this->extractRequestParams();
		// if the translated section is NOT a lead section, add a new row inside "cx_section_translations" table
		if ( $params['sectionnumber'] === "0" ) {
			return;
		}

		[ 'sectionid' => $sectionId, 'targetsectiontitle' => $targetSectionTitle ] = $params;

		$sectionTranslation = $this->sectionTranslationStore->findTranslation( $translationId, $sectionId );

		if ( !$sectionTranslation ) {
			$sectionTranslation = new SectionTranslation(
				null,
				$translationId,
				$sectionId,
				$params['sourcesectiontitle'],
				$targetSectionTitle
			);
			$this->sectionTranslationStore->insertTranslation( $sectionTranslation );
		} else {
			// update updatable fields
			$sectionTranslation->setTargetSectionTitle( $targetSectionTitle );
			$this->sectionTranslationStore->updateTranslation( $sectionTranslation );
		}
	}

	/**
	 * @param Translation $translation Recently saved parent translation object
	 * @throws \ApiUsageException
	 */
	protected function saveParallelCorporaTranslationUnits( Translation $translation ) {
		$params = $this->extractRequestParams();

		try {
			$translationUnits = $this->corporaStore->createTranslationUnitsFromContent(
				$params['content'],
				$translation->getTranslationId()
			);
		} catch ( InvalidSectionDataException $exception ) {
			$this->dieWithError( 'apierror-cx-invalidsectiondata', 'invalidcontent' );
		}

		$isNewTranslation = $translation->lastSaveWasCreate();
		foreach ( $translationUnits as $translationUnit ) {
			$this->corporaStore->save( $translationUnit, $isNewTranslation );
		}
	}

	public function getAllowedParams() {
		return [
			'sourcelanguage' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'targetlanguage' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'targettitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'content' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcerevision' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcesectiontitle' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'targetsectiontitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sectionid' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true
			],
			'sectionnumber' => [
				ParamValidator::PARAM_REQUIRED => false,
				ParamValidator::PARAM_DEFAULT => 'new',
			]
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	public function isInternal() {
		return true;
	}
}
