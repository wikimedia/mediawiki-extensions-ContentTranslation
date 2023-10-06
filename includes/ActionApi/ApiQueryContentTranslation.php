<?php
/**
 * Api module for querying Content translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiPageSet;
use ApiQuery;
use ApiQueryGeneratorBase;
use ContentTranslation\CorporaLookup;
use ContentTranslation\DTO\TranslationUnitDTO;
use ContentTranslation\Service\UserService;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;

/**
 * Api module for querying ContentTranslation.
 */
class ApiQueryContentTranslation extends ApiQueryGeneratorBase {

	private SectionTranslationStore $sectionTranslationStore;
	private CorporaLookup $corporaLookup;
	private UserService $userService;
	private TranslationStore $translationStore;

	/**
	 * @param ApiQuery $query
	 * @param string $moduleName
	 * @param SectionTranslationStore $sectionTranslationStore
	 * @param CorporaLookup $corporaLookup
	 * @param UserService $userService
	 * @param TranslationStore $translationStore
	 */
	public function __construct(
		$query,
		$moduleName,
		SectionTranslationStore $sectionTranslationStore,
		CorporaLookup $corporaLookup,
		UserService $userService,
		TranslationStore $translationStore
	) {
		parent::__construct( $query, $moduleName );

		$this->sectionTranslationStore = $sectionTranslationStore;
		$this->corporaLookup = $corporaLookup;
		$this->userService = $userService;
		$this->translationStore = $translationStore;
	}

	public function execute() {
		$this->run();
	}

	public function executeGenerator( $resultPageSet ) {
		$this->run( $resultPageSet );
	}

	/**
	 * @param ApiPageSet|null $resultPageSet
	 */
	private function run( $resultPageSet = null ) {
		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();
		[ 'sourcetitle' => $sourceTitle, 'from' => $sourceLanguage, 'to' => $targetLanguage ] = $params;

		// Case A: Find a translation for given work from anonymous context
		if ( !$user->isRegistered() ) {
			if ( $params['translationid'] ) {
				$this->dieWithError( 'apierror-cx-mustbeloggedin-viewtranslations', 'notloggedin' );
			}
			if ( $sourceTitle && $sourceLanguage && $targetLanguage ) {
				$translation = $this->translationStore->findTranslationByTitle(
					$sourceTitle,
					$sourceLanguage,
					$targetLanguage
				);

				if ( $translation === null ) {
					$this->dieWithError( 'apierror-cx-translationnotfound', 'translationnotfound' );
				}

				$result->addValue(
					[ 'query', 'contenttranslation' ],
					'translation',
					$translation->translation
				);
			}

			return;
		}

		$translator = new Translator( $user );

		// Case B: Find a translation for given work for the current user.
		if ( $sourceTitle && $sourceLanguage && $targetLanguage ) {
			$work = new TranslationWork( $sourceTitle, $sourceLanguage, $targetLanguage );
			$this->find( $work, $translator );

			return;
		}

		// Case C: Find a translation for given id
		if ( $params['translationid'] ) {
			$translation = $translator->getTranslation( $params['translationid'] );
			if ( $translation !== null ) {
				// Translation units and target categories. Only target categories are fetched
				// when translation draft is restored. Source categories are saved into cx_corpora table for
				// pairing with target categories, but not retrieved when translation draft is restored.
				// Associative array with 'translationUnits' and 'categories' data
				$unitsAndCategories = $this->corporaLookup->getByTranslationId( (int)$translation->getTranslationId() );
				$translation->translation['translationUnits'] = array_map(
					static function ( TranslationUnitDTO $unit ) {
						return $unit->toArray();
					}, $unitsAndCategories['sections']
				);
				// Only target categories are fetched when translation draft is restored
				$translation->translation['targetCategories'] = $unitsAndCategories['categories'];

				$result->addValue(
					[ 'query', 'contenttranslation' ],
					'translation',
					$translation->translation
				);
			} else {
				$this->dieWithError( 'apierror-cx-missingdraft', 'missingdraft' );
			}

			return;
		}

		// Case D: Find list of translations. Either section translations or article translations
		$offset = null;
		$translatorUserId = $this->userService->getGlobalUserId( $user );
		if ( $params['sectiontranslationsonly'] ) {
			$status = $params['type'];
			if ( !$status || !in_array( $status, SectionTranslationStore::TRANSLATION_STATUSES ) ) {
				$this->dieWithError( 'apierror-cx-invalid-type-viewtranslations', 'invalidtype' );
			}

			$sectionTranslations = [];
			if ( $status === SectionTranslationStore::TRANSLATION_STATUS_PUBLISHED ) {
				$sectionTranslations = $this->sectionTranslationStore->findPublishedSectionTranslationsByUser(
					$translatorUserId,
					$sourceLanguage,
					$targetLanguage,
					$params['limit'],
					$params['offset']
				);
			} elseif ( $status === SectionTranslationStore::TRANSLATION_STATUS_DRAFT ) {
				$sectionTranslations = $this->sectionTranslationStore->findDraftSectionTranslationsByUser(
					$translatorUserId,
					$sourceLanguage,
					$targetLanguage,
					$params['limit'],
					$params['offset']
				);
			}

			$translations = array_map( static function ( $sectionTranslation ) {
				return $sectionTranslation->toArray();
			}, $sectionTranslations );

			// We will have extra "continue" in case the last batch is exactly the size of the limit
			$count = count( $sectionTranslations );
			if ( $count === $params['limit'] ) {
				$offset = $sectionTranslations[$count - 1]->getLastUpdatedTimestamp();
			}
		} else {
			$translations = $this->translationStore->getAllTranslationsByUserId(
				$translatorUserId,
				$params['limit'],
				$params['offset'],
				$params['type'],
				$sourceLanguage,
				$targetLanguage
			);

			$count = count( $translations );
			if ( $count === $params['limit'] ) {
				$offset = $translations[$count - 1]->translation['lastUpdateTimestamp'];
			}
		}

		// We will have extra "continue" in case the last batch is exactly the size of the limit
		if ( $offset ) {
			$this->setContinueEnumParameter( 'offset', $offset );
		}

		$result->addValue(
			[ 'query', 'contenttranslation' ],
			'translations',
			$translations
		);

		// Simple optimization
		if ( $params['offset'] === null ) {
			$result->addValue(
				[ 'query', 'contenttranslation' ],
				'languages',
				$translator->getLanguages( $params['type'] )
			);
		}
	}

	/**
	 * Find a translation with any status for the given language pair and title.
	 * @param TranslationWork $work
	 * @param Translator $translator
	 */
	public function find( TranslationWork $work, Translator $translator ) {
		$result = $this->getResult();
		$translation = $this->translationStore->findTranslationByUser(
			$translator->getUser(),
			$work->getPage(),
			$work->getSourceLanguage(),
			$work->getTargetLanguage()
		);

		if ( $translation instanceof Translation ) {
			$result->addValue( [ 'query', 'contenttranslation' ], 'translation', $translation->translation );
		} else {
			// Check for other drafts. If one exists, return that to the UI which will then
			// know to display an error to the user because we disallow two users to start
			// drafts on the same translation work.
			$conflictingTranslations = $this->translationStore->findConflictingDraftTranslations(
				$work->getPage(),
				$work->getSourceLanguage(),
				$work->getTargetLanguage()
			);

			if ( !$conflictingTranslations ) {
				return;
			}

			// if at least one conflicting translation is found, let the UI know
			$result->addValue( [ 'query', 'contenttranslation' ], 'hasConflicts', true );

			// Take only the last conflicting translation due to UI limitations
			$translation = array_pop( $conflictingTranslations );

			// $globalUserId is always expected to be integer or null, since it has been populated
			// by the "translation_started_by" column of "cx_translations" table
			$globalUserId = $translation->getData()['lastUpdatedTranslator'];
			// $user can be null if the local user does not exist. Currently, this should never happen
			// in our case because we redirect translators to the target wiki, and they cannot
			// do translations without logging in.
			// $user can also be null, if the current user has no permission to see the username.
			// For whatever reason, fallback gracefully by letting 'translatorName' and 'translatorGender'
			// to be null.
			[ 'name' => $name, 'gender' => $gender ] = $this->userService->getUsernameAndGender( $globalUserId );

			// Add name and gender information to the returned result. The UI can use this
			// to display the conflict message.
			$result->addValue( [ 'query', 'contenttranslation' ], 'translatorName', $name );
			$result->addValue( [ 'query', 'contenttranslation' ], 'translatorGender', $gender );
		}
	}

	public function getAllowedParams() {
		$allowedParams = [
			'translationid' => [
				ParamValidator::PARAM_TYPE => 'string',
			],
			'from' => [
				ParamValidator::PARAM_TYPE => 'string',
			],
			'to' => [
				ParamValidator::PARAM_TYPE => 'string',
			],
			'sourcetitle' => [
				ParamValidator::PARAM_TYPE => 'string',
			],
			'limit' => [
				ParamValidator::PARAM_DEFAULT => 100,
				ParamValidator::PARAM_TYPE => 'limit',
				IntegerDef::PARAM_MIN => 1,
				IntegerDef::PARAM_MAX => ApiBase::LIMIT_BIG1,
				IntegerDef::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ParamValidator::PARAM_DEFAULT => null,
				ParamValidator::PARAM_TYPE => 'string',
			],
			'type' => [
				ParamValidator::PARAM_DEFAULT => null,
				ParamValidator::PARAM_TYPE => [ 'draft', 'published' ],
			],
			'sectiontranslationsonly' => [
				ParamValidator::PARAM_DEFAULT => false,
				ParamValidator::PARAM_TYPE => 'boolean',

			]
		];
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslation' =>
				'apihelp-query+contenttranslation-example-1',
			'action=query&list=contenttranslation&translationid=94' =>
				'apihelp-query+contenttranslation-example-2',
			'action=query&list=contenttranslation&from=en&to=es&sourcetitle=Hibiscus' =>
				'apihelp-query+contenttranslation-example-3',
		];
	}
}
