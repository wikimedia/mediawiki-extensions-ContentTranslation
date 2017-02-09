<?php
/**
 * Api module for querying Content translations.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\CorporaLookup;
use ContentTranslation\Database;
use ContentTranslation\Draft;
use ContentTranslation\Translation;
use ContentTranslation\Translator;

/**
 * Api module for querying ContentTranslation.
 *
 * @ingroup API ContentTranslationAPI
 */
class ApiQueryContentTranslation extends ApiQueryGeneratorBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$this->run();
	}

	public function executeGenerator( $resultPageSet ) {
		$this->run( $resultPageSet );
	}

	/**
	 * @param ApiPageSet $resultPageSet
	 */
	private function run( $resultPageSet = null ) {
		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();

		if ( $params['sourcetitle'] && $params['from'] && $params['to'] ) {
			$this->find(
				$params['sourcetitle'],
				$params['from'],
				$params['to']
			);

			return;
		}

		if ( $user->isAnon() ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-mustbeloggedin-viewtranslations', 'notloggedin' );
			} else {
				$this->dieUsage( 'To view your translations, you must log in', 'notloggedin' );
			}
		}

		if ( $params['translationid'] ) {
			$translator = new Translator( $user );
			$translation = $translator->getTranslation( $params['translationid'] );
			if ( $translation !== null ) {
				$translation->translation['translationUnits'] =
					$this->getTranslationContent( $translation );
				$result->addValue(
					[ 'query', 'contenttranslation' ],
					'translation',
					$translation->translation
				);
			} else {
				if ( is_callable( [ $this, 'dieWithError' ] ) ) {
					$this->dieWithError( 'apierror-cx-missingdraft', 'missingdraft' );
				} else {
					$this->dieUsage( 'Draft does not exist', 'missingdraft' );
				}
			}

			return;
		}

		// The main case, no filters
		$translator = new Translator( $user );
		$translations = $translator->getAllTranslations(
			$params['limit'],
			$params['offset'],
			$params['type'],
			$params['from'],
			$params['to']
		);

		// We will have extra continue in case the last batch is exactly the size of the limit
		$count = count( $translations );
		if ( $count === $params['limit'] ) {
			$offset = $translations[$count - 1]->translation['lastUpdateTimestamp'];
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
	 */
	public function find( $sourceTitle, $sourceLanguage, $targetLanguage ) {
		$result = $this->getResult();
		$translation = Translation::find(
			$sourceLanguage,
			$targetLanguage,
			$sourceTitle
		);

		if ( $translation !== null ) {
			$translator = $translation->translation['lastUpdatedTranslator'];
			$centralIdLookup = CentralIdLookup::factory();
			// $user can be null, but should never happen in our case because
			// we redirect translators to the target wiki, and they cannot do
			// translations without logging in.
			$user = $centralIdLookup->localUserFromCentralId( $translator );
			$gender = GenderCache::singleton()->getGenderOf( $user, __METHOD__ );

			$translation->translation['translatorName'] = $user->getName();
			$translation->translation['translatorGender'] = $gender;
			$result->addValue(
				[ 'query', 'contenttranslation' ],
				'translation', $translation->translation
			);
		}
	}

	/**
	 * @param Translation $translation
	 * @return array
	 */
	protected function getTranslationContent( Translation $translation ) {
		$db = Database::getConnection( DB_SLAVE );

		$lookup = new CorporaLookup( $db );
		$draft = Draft::fetch( $translation->getTranslationId() );
		$content = $draft['draftContent'];
		// If no content present in drafts table, try corpora table
		if ( $content === null ) {
			$content = $lookup->getByTranslationId( $translation->getTranslationId() );
		}

		return $content;
	}

	public function getAllowedParams() {
		$allowedParams = [
			'translationid' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'from' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'to' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'sourcetitle' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'limit' => [
				ApiBase::PARAM_DFLT => 100,
				ApiBase::PARAM_TYPE => 'limit',
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => ApiBase::LIMIT_BIG1,
				ApiBase::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ApiBase::PARAM_DFLT => null,
				ApiBase::PARAM_TYPE => 'string',
			],
			'type' => [
				ApiBase::PARAM_DFLT => null,
				ApiBase::PARAM_TYPE => [ 'draft', 'published' ],
			],
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
