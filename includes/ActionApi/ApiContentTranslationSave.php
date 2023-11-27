<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\CategoriesStorageManager;
use ContentTranslation\Exception\InvalidSectionDataException;
use ContentTranslation\LoadBalancer;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use ContentTranslation\Translator;
use ContentTranslation\Validator\TranslationUnitValidator;
use Deflate;
use FormatJson;
use MediaWiki\Languages\LanguageNameUtils;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;
use Wikimedia\ParamValidator\TypeDef\StringDef;

class ApiContentTranslationSave extends ApiBase {
	private TranslationCorporaManager $corporaManager;
	private LoadBalancer $lb;
	private TranslationUnitValidator $translationUnitValidator;
	private LanguageNameUtils $languageNameUtils;
	private TranslationStore $translationStore;

	/**
	 * 64KB
	 */
	private const SQL_BLOB_MAX_SIZE = 65535;

	public function __construct(
		ApiMain $mainModule,
		$action,
		TranslationCorporaManager $corporaManager,
		LoadBalancer $loadBalancer,
		TranslationUnitValidator $translationUnitValidator,
		LanguageNameUtils $languageNameUtils,
		TranslationStore $translationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaManager = $corporaManager;
		$this->lb = $loadBalancer;
		$this->translationUnitValidator = $translationUnitValidator;
		$this->languageNameUtils = $languageNameUtils;
		$this->translationStore = $translationStore;
	}

	public function execute() {
		$params = $this->extractRequestParams();

		if ( $this->lb->getConnection( DB_PRIMARY )->isReadOnly() ) {
			$this->dieReadOnly();
		}

		$user = $this->getUser();
		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['from'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['to'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		$progress = FormatJson::decode( $params['progress'], true );
		if ( !is_array( $progress ) ) {
			$this->dieWithError( 'apierror-cx-invalidprogress', 'invalidprogress' );
		}

		if ( $user->pingLimiter( 'cxsave' ) ) {
			$this->dieWithError( 'apierror-ratelimited' );
		}

		$sourceCategories = $params['sourcecategories'];
		$targetCategories = $params['targetcategories'];
		if ( !$this->isValidCategoriesJSON( $sourceCategories ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcecategories', 'invalidsourcecategories' );
		}
		if ( !$this->isValidCategoriesJSON( $targetCategories ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetcategories', 'invalidtargetcategories' );
		}

		$translator = new Translator( $user );
		$translation = $this->saveTranslation( $params, $translator );
		$translationId = $translation->getTranslationId();

		$content = Deflate::inflate( $params['content'] );
		if ( !$content->isGood() ) {
			$this->dieWithError( 'deflate-invaliddeflate', 'invaliddeflate' );
		}

		if ( trim( $content->getValue() ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'content' ], 'invalidcontent' );
		}

		try {
			$translationUnits = $this->corporaManager->saveTranslationUnits( $translation, $content->getValue() );
		} catch ( InvalidSectionDataException $exception ) {
			$this->dieWithError( 'apierror-cx-invalidsectiondata', 'invalidcontent' );
		}

		$validationResults = $this->translationUnitValidator->validateTranslationUnitsForTitleUser(
			$translationUnits,
			$translation->getData()['targetTitle'],
			$this->getUser()
		);

		$this->saveCategories( $sourceCategories, $targetCategories, $translation );

		$result = [
			'result' => 'success',
			'validations' => $validationResults,
			'translationid' => $translationId
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * @param array $params
	 * @param Translator $translator
	 * @return Translation
	 */
	protected function saveTranslation( array $params, Translator $translator ) {
		[ 'sourcetitle' => $sourceTitle, 'from' => $sourceLanguage, 'to' => $targetLanguage ] = $params;
		$existingTranslation = $this->translationStore->findTranslationByUser(
			$translator->getUser(),
			$sourceTitle,
			$sourceLanguage,
			$targetLanguage
		);

		if ( $existingTranslation ) {
			$data = $existingTranslation->getData();
		} else {
			$conflictingTranslations = $this->translationStore->findConflictingDraftTranslations(
				$sourceTitle,
				$sourceLanguage,
				$targetLanguage
			);

			if ( $conflictingTranslations !== [] ) {
				$this->dieWithError( 'apierror-cx-inuse', 'noaccess' );
			}

			// First time save, add relevant fields
			$data = [
				'sourceTitle' => $sourceTitle,
				'sourceLanguage' => $sourceLanguage,
				'targetLanguage' => $targetLanguage,
				'sourceURL' => SiteMapper::getPageURL( $sourceLanguage, $sourceTitle ),
			];
		}

		// Update updateable fields
		$data['targetTitle'] = $params['title'];
		$data['sourceRevisionId'] = $params['sourcerevision'];
		$data['status'] = TranslationStore::TRANSLATION_STATUS_DRAFT;
		$data['progress'] = $params['progress'];
		$data['cxVersion'] = $params['cxversion'] ?? $this->getConfig()->get( 'ContentTranslationVersion' );

		// Save the translation
		$translation = new Translation( $data );
		$this->translationStore->saveTranslation( $translation, $translator->getUser() );

		// Associate the translation with the translator
		$translationId = $translation->getTranslationId();
		$translator->addTranslation( $translationId );

		return $translation;
	}

	/**
	 * Validate categories JSON param.
	 *
	 * @param string $categories JSON encoded array of categories
	 * @return bool
	 */
	protected function isValidCategoriesJSON( $categories ) {
		// Categories are optional, so empty categories param is valid.
		if ( $categories === null || $categories === '' ) {
			return true;
		}

		$parsedCategories = FormatJson::parse( $categories );
		return $parsedCategories->isGood();
	}

	/**
	 * Save categories in cx_corpora table, if any are supplied.
	 *
	 * @param string $sourceCategories JSON encoded array of source categories
	 * @param string $targetCategories JSON encoded array of target categories
	 * @param Translation $translation Recently saved parent translation object
	 */
	protected function saveCategories(
		$sourceCategories, $targetCategories, Translation $translation
	) {
		if ( !$sourceCategories && !$targetCategories ) {
			return;
		}

		$translationId = $translation->getTranslationId();
		$newTranslation = $translation->isNew();

		CategoriesStorageManager::save(
			$translationId,
			$sourceCategories,
			$targetCategories,
			$newTranslation
		);
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'to' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'title' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'content' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcerevision' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'progress' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'cxversion' => [
				ParamValidator::PARAM_TYPE => 'integer',
				// Making this required immediately would cause issues for ongoing translations
				// during deployment. Maybe this doesn't ever need to be required.
				ParamValidator::PARAM_REQUIRED => false,
				ApiBase::PARAM_RANGE_ENFORCE => true,
				IntegerDef::PARAM_MIN => 1,
				IntegerDef::PARAM_MAX => 2,
			],
			'sourcecategories' => [
				ParamValidator::PARAM_TYPE => 'string',
				// We don't always save categories when saving translation. Only save
				// categories when user changes target categories by reordering,
				// removing or adding. Source categories are saved only once per
				// session and target categories are saved for every change.
				ParamValidator::PARAM_REQUIRED => false,
				// Source and target categories are saved in cx_corpora table, whose
				// content column is MEDIUMBLOB, which has 16MB limit, but we limit
				// the size of categories at BLOB limit, which is 64KB.
				StringDef::PARAM_MAX_BYTES => self::SQL_BLOB_MAX_SIZE
			],
			'targetcategories' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => false,
				StringDef::PARAM_MAX_BYTES => self::SQL_BLOB_MAX_SIZE
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
