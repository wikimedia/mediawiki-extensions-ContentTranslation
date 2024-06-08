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
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\Service\SandboxTitleMaker;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use ContentTranslation\Translator;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationSave extends ApiBase {
	private TranslationCorporaManager $corporaManager;
	private LoadBalancer $lb;
	private SectionTranslationStore $sectionTranslationStore;
	private SandboxTitleMaker $sandboxTitleMaker;
	private TitleFactory $titleFactory;
	private LanguageNameUtils $languageNameUtils;
	private TranslationStore $translationStore;

	public function __construct(
		ApiMain $mainModule,
		$action,
		TranslationCorporaManager $corporaManager,
		LoadBalancer $loadBalancer,
		SectionTranslationStore $sectionTranslationStore,
		SandboxTitleMaker $sandboxTitleMaker,
		TitleFactory $titleFactory,
		LanguageNameUtils $languageNameUtils,
		TranslationStore $translationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaManager = $corporaManager;
		$this->lb = $loadBalancer;
		$this->sectionTranslationStore = $sectionTranslationStore;
		$this->sandboxTitleMaker = $sandboxTitleMaker;
		$this->titleFactory = $titleFactory;
		$this->languageNameUtils = $languageNameUtils;
		$this->translationStore = $translationStore;
	}

	private function validateRequest() {
		if ( $this->lb->getConnection( DB_PRIMARY )->isReadOnly() ) {
			$this->dieReadOnly();
		}

		$user = $this->getUser();

		if ( !$user->isNamed() ) {
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
		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['sourcelanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['targetlanguage'] ) ) {
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
		$targetTitleRaw = $params['targettitle'];
		$isSandbox = $params['issandbox'];
		if ( $isSandbox ) {
			$targetTitle = $this->sandboxTitleMaker->makeSandboxTitle( $user, $targetTitleRaw );
		} else {
			$targetTitle = $this->titleFactory->newFromText( $targetTitleRaw );
		}

		if ( !$targetTitle ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $targetTitleRaw ) ] );
		}

		$translation = $this->saveTranslation(
			$user,
			$params['sourcelanguage'],
			$params['targetlanguage'],
			$params['sourcetitle'],
			$targetTitle->getPrefixedText(),
			$params['sourcerevision']
		);
		$translationId = $translation->getTranslationId();

		try {
			$this->corporaManager->saveTranslationUnits( $translation, $params['content'] );
		} catch ( InvalidSectionDataException $exception ) {
			$this->dieWithError( 'apierror-cx-invalidsectiondata', 'invalidcontent' );
		}
		$sectionTranslationId = $this->saveSectionTranslation(
			$translationId,
			$params['sectionid'],
			$params['sourcesectiontitle'],
			$params['targetsectiontitle'],
			$params['progress']
		);
		$result = [
			'result' => 'success',
			'sectiontranslationid' => $sectionTranslationId,
			'translationid' => $translationId
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
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
			'status' => TranslationStore::TRANSLATION_STATUS_DRAFT,
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
		$translation = $this->translationStore->findTranslationByUser(
			$user,
			$sourceTitle,
			$sourceLanguage,
			$targetLanguage
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
			// target title can be changed any time during translation
			$translation->translation['targetTitle'] = $targetTitle;
		}
		$this->translationStore->saveTranslation( $translation, $user );

		// Associate the translation with the translator
		$translator = new Translator( $user );
		$translationId = $translation->getTranslationId();
		$translator->addTranslation( $translationId );

		return $translation;
	}

	/**
	 * Given a translation id (corresponding to a row inside "cx_translations" table), this
	 * method creates a new SectionTranslation model and stores it inside "cx_section_translations"
	 * table.
	 *
	 * Lead sections are also stored inside the table. For such sections we set empty strings as
	 * values for "cxsx_source_section_title" and "cxsx_target_section_title" values, as empty
	 * strings are considered valid values for non-nullable fields in MySQL.
	 *
	 * @param int $translationId
	 * @param string $sectionId
	 * @param string $sourceSectionTitle
	 * @param string $targetSectionTitle
	 * @return int the id (cxsx_id) of the saved section translation
	 */
	private function saveSectionTranslation(
		int $translationId,
		string $sectionId,
		string $sourceSectionTitle,
		string $targetSectionTitle,
		string $progress
	): int {
		$sectionTranslation = $this->sectionTranslationStore->findTranslation( $translationId, $sectionId );
		$draftStatusIndex = SectionTranslationStore::getStatusIndexByStatus(
			SectionTranslationStore::TRANSLATION_STATUS_DRAFT
		);

		if ( !$sectionTranslation ) {
			$sectionTranslation = new SectionTranslation(
				null,
				$translationId,
				$sectionId,
				$sourceSectionTitle,
				$targetSectionTitle,
				$draftStatusIndex,
				$progress
			);
			$this->sectionTranslationStore->insertTranslation( $sectionTranslation );
		} else {
			// update updatable fields
			$sectionTranslation->setTargetSectionTitle( $targetSectionTitle );
			$sectionTranslation->setTranslationStatus( $draftStatusIndex );
			$sectionTranslation->setProgress( $progress );
			$this->sectionTranslationStore->updateTranslation( $sectionTranslation );
		}

		// the id of the section translation is always set, since the entity has been stored in the database
		// @phan-suppress-next-line PhanTypeMismatchReturnNullable
		return $sectionTranslation->getId();
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
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sectionid' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true
			],
			'issandbox' => [
				ParamValidator::PARAM_TYPE => 'boolean',
				ParamValidator::PARAM_REQUIRED => false,
			],
			'progress' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
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
