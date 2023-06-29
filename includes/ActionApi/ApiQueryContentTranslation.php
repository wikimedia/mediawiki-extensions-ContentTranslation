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
use ContentTranslation\Service\TranslatorService;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use MediaWiki\MediaWikiServices;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;

/**
 * Api module for querying ContentTranslation.
 */
class ApiQueryContentTranslation extends ApiQueryGeneratorBase {

	private SectionTranslationStore $sectionTranslationStore;
	private CorporaLookup $corporaLookup;
	private TranslatorService $translatorService;
	private TranslationStore $translationStore;

	/**
	 * @param ApiQuery $query
	 * @param string $moduleName
	 * @param SectionTranslationStore $sectionTranslationStore
	 * @param CorporaLookup $corporaLookup
	 * @param TranslatorService $translatorService
	 * @param TranslationStore $translationStore
	 */
	public function __construct(
		$query,
		$moduleName,
		SectionTranslationStore $sectionTranslationStore,
		CorporaLookup $corporaLookup,
		TranslatorService $translatorService,
		TranslationStore $translationStore
	) {
		parent::__construct( $query, $moduleName );

		$this->sectionTranslationStore = $sectionTranslationStore;
		$this->corporaLookup = $corporaLookup;
		$this->translatorService = $translatorService;
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

		// Case A: Find a translation for given work from anonymous context
		if ( !$user->isRegistered() ) {
			if ( $params['translationid'] ) {
				$this->dieWithError( 'apierror-cx-mustbeloggedin-viewtranslations', 'notloggedin' );
			}
			if ( $params['sourcetitle'] && $params['from'] && $params['to'] ) {
				$translation = Translation::find(
					$params['from'], $params['to'], $params[ 'sourcetitle' ]
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
		if ( $params['sourcetitle'] && $params['from'] && $params['to'] ) {
			$work = new TranslationWork( $params['sourcetitle'], $params['from'], $params['to'] );
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
		$translatorUserId = $this->translatorService->getGlobalUserId( $user );
		if ( $params['sectiontranslationsonly'] ) {
			$status = $params['type'];
			if ( !$status || !in_array( $status, SectionTranslationStore::TRANSLATION_STATUSES ) ) {
				$this->dieWithError( 'apierror-cx-invalid-type-viewtranslations', 'invalidtype' );
			}

			$sectionTranslations = [];
			if ( $status === SectionTranslationStore::TRANSLATION_STATUS_PUBLISHED ) {
				$sectionTranslations = $this->sectionTranslationStore->findPublishedSectionTranslationsByUser(
					$translatorUserId,
					$params['from'],
					$params['to'],
					$params['limit'],
					$params['offset']
				);
			} elseif ( $status === SectionTranslationStore::TRANSLATION_STATUS_DRAFT ) {
				$sectionTranslations = $this->sectionTranslationStore->findDraftSectionTranslationsByUser(
					$translatorUserId,
					$params['from'],
					$params['to'],
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
				$params['from'],
				$params['to']
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
		$translation = null;
		$result = $this->getResult();
		$translation = Translation::findForTranslator( $work, $translator );

		// Check for other drafts. If one exists, return that to the UI which will then
		// know to display an error to the user because we disallow two users to start
		// drafts on the same translation work.
		if ( $translation === null ) {
			$translations = Translation::getConflictingTranslations( $work );
			if ( $translations !== [] ) {
				// Take the last one due to UI limitations
				$translation = array_pop( $translations );
			}
		}

		if ( $translation === null ) {
			// Return empty result. The UI will treat it as a new translation.
			return;
		}

		$services = MediaWikiServices::getInstance();

		// Add name and gender information to the returned result. The UI can use this
		// to display the conflict message.
		$globalUserId = $translation->getData()['lastUpdatedTranslator'];
		$centralIdLookup = $services->getCentralIdLookup();
		// $user can be null if the local user does not exist. This should never happen
		// in our case because we redirect translators to the target wiki, and they cannot
		// do translations without logging in.
		// $user can also be null, if the current user has no permission to see the user name.
		// For whatever reason, fallback gracefully.
		$userIdentity = $centralIdLookup->localUserFromCentralId( $globalUserId );
		if ( $userIdentity ) {
			$gender = $services->getGenderCache()->getGenderOf( $userIdentity, __METHOD__ );
			$translation->translation['translatorName'] = $userIdentity->getName();
			$translation->translation['translatorGender'] = $gender;
		}

		$result->addValue(
			[ 'query', 'contenttranslation' ],
			'translation',
			$translation->translation
		);
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
