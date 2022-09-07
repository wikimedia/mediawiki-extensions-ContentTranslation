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
use ContentTranslation\SandboxTitleMaker;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use Language;
use User;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationSave extends ApiBase {
	/** @var TranslationCorporaStore */
	private $corporaStore;

	/** @var LoadBalancer */
	private $lb;

	/** @var SectionTranslationStore */
	private $sectionTranslationStore;

	/** @var SandboxTitleMaker */
	private $sandboxTitleMaker;

	public function __construct(
		ApiMain $mainModule,
		$action,
		TranslationCorporaStore $corporaStore,
		LoadBalancer $loadBalancer,
		SectionTranslationStore $sectionTranslationStore,
		SandboxTitleMaker $sandboxTitleMaker
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaStore = $corporaStore;
		$this->lb = $loadBalancer;
		$this->sectionTranslationStore = $sectionTranslationStore;
		$this->sandboxTitleMaker = $sandboxTitleMaker;
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
		$params = $this->extractRequestParams();
		$user = $this->getUser();
		$targetTitle = $this->sandboxTitleMaker->makeSandboxTitle( $user, $params['targettitle'] );
		$translation = $this->saveTranslation(
			$user,
			$params['sourcelanguage'],
			$params['targetlanguage'],
			$params['sourcetitle'],
			$targetTitle->getPrefixedText(),
			$params['sourcerevision']
		);
		$translationId = $translation->getTranslationId();

		$this->saveParallelCorporaTranslationUnits( $params['content'], $translation );
		$this->saveSectionTranslation(
			$translationId,
			$params['sectionid'],
			$params['sourcesectiontitle'],
			$params['targetsectiontitle'],
			$params['isleadsection']
		);
		$result = [
			'result' => 'success',
			'translationid' => $translationId
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * This method finds a translation inside "cx_translations" table, that corresponds to the
	 * given source/target languages, source title and the user of the published
	 * translation, and returns it. If no such translation exists, the method returns null.
	 *
	 * @param User $user
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @param string $sourceTitle
	 * @return Translation|null
	 */
	private function getExistingTranslation(
		User $user,
		string $sourceLanguage,
		string $targetLanguage,
		string $sourceTitle
	): ?Translation {
		$translator = new Translator( $user );
		$work = new TranslationWork( $sourceTitle, $sourceLanguage, $targetLanguage );
		return Translation::findForTranslator( $work, $translator );
	}

	/**
	 * This method creates a new Translation model for the saved translation and returns it
	 *
	 * @param string $sourceLanguage
	 * @param string $sourceTitle
	 * @param string $targetLanguage
	 * @param string $targetTitle
	 * @param string $sourceRevision
	 * @return Translation
	 */
	private function createNewTranslationFromPayload(
		string $sourceLanguage,
		string $sourceTitle,
		string $targetLanguage,
		string $targetTitle,
		string $sourceRevision
	): Translation {
		$translationData = [
			'sourceTitle' => $sourceTitle,
			'targetTitle' => $targetTitle,
			'sourceLanguage' => $sourceLanguage,
			'targetLanguage' => $targetLanguage,
			'sourceRevisionId' => $sourceRevision,
			'sourceURL' => SiteMapper::getPageURL( $sourceLanguage, $sourceTitle ),
			'status' => 'draft',
			'progress' => json_encode( [ "any" => null, "mt" => null, "human" => null ] ),
			'cxVersion' => 3,
		];

		return new Translation( $translationData );
	}

	protected function saveTranslation(
		User $user,
		string $sourceLanguage,
		string $targetLanguage,
		string $sourceTitle,
		string $targetTitle,
		string $sourceRevision
	): Translation {
		$translation = $this->getExistingTranslation(
			$user,
			$sourceLanguage,
			$targetLanguage,
			$sourceTitle
		);

		if ( !$translation ) {
			$translation = $this->createNewTranslationFromPayload(
				$sourceLanguage,
				$sourceTitle,
				$targetLanguage,
				$targetTitle,
				$sourceRevision
			);
		} else {
			$translation->translation['sourceRevisionId'] = $sourceRevision;
		}
		$translator = new Translator( $user );
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
	 * @param string $sectionId
	 * @param string $sourceSectionTitle
	 * @param string $targetSectionTitle
	 * @param bool $isLeadSection
	 * @return void
	 */
	private function saveSectionTranslation(
		int $translationId,
		string $sectionId,
		string $sourceSectionTitle,
		string $targetSectionTitle,
		bool $isLeadSection
	): void {
		// if the translated section is NOT a lead section, add a new row inside "cx_section_translations" table
		if ( $isLeadSection ) {
			return;
		}

		$sectionTranslation = $this->sectionTranslationStore->findTranslation( $translationId, $sectionId );

		if ( !$sectionTranslation ) {
			$sectionTranslation = new SectionTranslation(
				null,
				$translationId,
				$sectionId,
				$sourceSectionTitle,
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
	 * @param string $content
	 * @param Translation $translation Recently saved parent translation object
	 * @throws \ApiUsageException
	 */
	protected function saveParallelCorporaTranslationUnits( string $content, Translation $translation ) {
		try {
			$translationUnits = $this->corporaStore->createTranslationUnitsFromContent(
				$content,
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
			'isleadsection' => [
				ParamValidator::PARAM_REQUIRED => false,
				ParamValidator::PARAM_DEFAULT => false,
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
