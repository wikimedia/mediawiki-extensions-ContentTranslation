<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\CategoryStore;
use ContentTranslation\Exception\InvalidSectionDataException;
use ContentTranslation\Exception\TranslationSaveException;
use ContentTranslation\LogNames;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Store\TranslatorStore;
use ContentTranslation\Translation;
use ContentTranslation\Validator\TranslationUnitValidator;
use Deflate;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use MediaWiki\Json\FormatJson;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\Logger\LoggerFactory;
use MediaWiki\User\User;
use MediaWiki\User\UserIdentity;
use Psr\Log\LoggerInterface;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;
use Wikimedia\ParamValidator\TypeDef\StringDef;
use Wikimedia\Rdbms\IConnectionProvider;

class ApiContentTranslationSave extends ApiBase {
	private LoggerInterface $logger;
	/**
	 * 64KB
	 */
	private const SQL_BLOB_MAX_SIZE = 65535;

	public function __construct(
		ApiMain $mainModule,
		string $action,
		private readonly TranslationCorporaManager $corporaManager,
		private readonly IConnectionProvider $connectionProvider,
		private readonly TranslationUnitValidator $translationUnitValidator,
		private readonly LanguageNameUtils $languageNameUtils,
		private readonly TranslationStore $translationStore,
		private readonly TranslatorStore $translatorStore,
		private readonly CategoryStore $categoryStore
	) {
		parent::__construct( $mainModule, $action );
		$this->logger = LoggerFactory::getInstance( LogNames::MAIN );
	}

	public function execute() {
		$params = $this->extractRequestParams();

		if ( $this->connectionProvider->getPrimaryDatabase()->isReadOnly() ) {
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

		try {
			$translation = $this->saveTranslation( $params, $user );
		} catch ( TranslationSaveException $e ) {
			$this->logger->info(
				'Error saving translation: {sourcelanguage} -> {targetlanguage}, ' .
				'{sourcetitle} -> {targettitle} by {user}: {exception}',
				$this->getLogParams( $params, $user ) + [ 'exception' => $e->getMessage() ]
			);
			$this->dieWithException( $e );
		}

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
		} catch ( InvalidSectionDataException ) {
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
	 * @throws TranslationSaveException
	 */
	private function saveTranslation( array $params, UserIdentity $user ): Translation {
		[ 'sourcetitle' => $sourceTitle, 'from' => $sourceLanguage, 'to' => $targetLanguage ] = $params;
		$existingTranslation = $this->translationStore->findTranslationByUser(
			$user,
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
		$this->translationStore->saveTranslation( $translation, $user );

		// Associate the translation with the translator
		$translationId = $translation->getTranslationId();
		$this->translatorStore->linkTranslationToTranslator( $translationId, $user );

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
	 */
	protected function saveCategories(
		?string $sourceCategories,
		?string $targetCategories,
		Translation $translation
	): void {
		// source categories can be null, but if target categories are null, there is nothing to be done here
		if ( !$targetCategories ) {
			return;
		}

		$translationId = $translation->getTranslationId();
		$newTranslation = $translation->isNew();

		$this->categoryStore->save(
			$translationId,
			$sourceCategories,
			$targetCategories,
			$newTranslation
		);
	}

	/** @inheritDoc */
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

	/** @inheritDoc */
	public function needsToken() {
		return 'csrf';
	}

	/** @inheritDoc */
	public function isWriteMode() {
		return true;
	}

	/** @inheritDoc */
	public function isInternal() {
		return true;
	}

	private function getLogParams( array $params, User $user ): array {
		return [
			'sourcelanguage' => $params['from'],
			'targetlanguage' => $params['to'],
			'sourcetitle' => $params['sourcetitle'],
			'targettitle' => $params['title'],
			'user' => $user->getId()
		];
	}
}
