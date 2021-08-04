<?php
/**
 * Api module for querying translation suggestions.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiPageSet;
use ApiQueryGeneratorBase;
use ContentTranslation\SiteMapper;
use ContentTranslation\SuggestionListManager;
use ContentTranslation\Translation;
use ContentTranslation\Translator;
use DeferredUpdates;
use FormatJson;
use MediaWiki\MediaWikiServices;

/**
 * Api module for querying translation suggestions.
 */
class ApiQueryContentTranslationSuggestions extends ApiQueryGeneratorBase {
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
	 * @param ApiPageSet|null $resultPageSet
	 */
	private function run( $resultPageSet = null ) {
		$config = $this->getConfig();
		if ( !$config->get( 'ContentTranslationEnableSuggestions' ) ) {
			$this->dieWithError( 'apierror-cx-suggestionsdisabled', 'suggestionsdisabled' );
		}

		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();

		if ( !$user->isRegistered() ) {
			$this->dieWithError( 'apierror-cx-mustbeloggedin-get-suggestions', 'notloggedin' );
		}

		$from = $params['from'];
		$to = $params['to'];

		if ( !empty( $from ) && $from === $to ) {
			$this->dieWithError( 'apierror-cx-samelanguages', 'invalidparam' );
		}
		$translator = new Translator( $user );
		$manager = new SuggestionListManager();

		// Get personalized suggestions.
		// We do not want to send personalized suggestions in paginated results
		// other than the first page. Hence checking offset.
		if ( $params['listid'] !== null ) {
			$list = $manager->getListById( $params['listid'] );
			if ( $list === null ) {
				$this->dieWithError(
					[ 'apierror-badparameter', $this->encodeParamName( 'listid' ) ],
					'invalidparam'
				);
			}

			$suggestions = $manager->getSuggestionsInList(
				$list->getId(),
				$from,
				$to,
				$params['limit'],
				$params['offset'],
				$params['seed']
			);
			$data = [
				'lists' => [ $list ],
				'suggestions' => $suggestions,
			];
		} else {
			$personalizedSuggestions = $manager->getFavoriteSuggestions(
				$translator->getGlobalUserId()
			);

			$data = $personalizedSuggestions;

			if ( !empty( $from ) && !empty( $to ) ) {
				// Get non-personalized suggestions
				$publicSuggestions = $manager->getPublicSuggestions(
					$from,
					$to,
					$params['limit'],
					$params['offset'],
					$params['seed']
				);
				// Merge the personal lists to public lists. There won't be duplicates
				// because the list of lists is an associative array with listId as a key.
				$data['lists'] = array_merge( $data['lists'], $publicSuggestions['lists'] );
				$data['suggestions'] = array_merge( $data['suggestions'], $publicSuggestions['suggestions'] );

			}
		}

		$lists = [];
		$suggestions = $data['suggestions'];

		if ( count( $suggestions ) ) {
			// Find the titles to filter out from suggestions.
			$ongoingTranslations = $this->getOngoingTranslations( $suggestions );
			$existingTitles = $this->getExistingTitles( $suggestions );
			$discardedSuggestions = $manager->getDiscardedSuggestions(
				$translator->getGlobalUserId(), $from, $to
			);
			$suggestions = $this->filterSuggestions(
				$suggestions,
				array_merge( $existingTitles, $ongoingTranslations, $discardedSuggestions )
			);

			// Remove the Suggestions that are no longer valid.
			$this->removeInvalidSuggestions( $from, $existingTitles );
		}

		foreach ( $data['lists'] as $list ) {
			$lists[$list->getId()] = [
				'displayName' => $list->getDisplayNameMessage( $this->getContext() )->text(),
				'name' => $list->getName(),
				'type' => $list->getType(),
				'suggestions' => [],
			];
			foreach ( $suggestions as $suggestion ) {
				if ( $list->getId() !== $suggestion->getListId() ) {
					continue;
				}
				$lists[$suggestion->getListId()]['suggestions'][] = [
					'title' => $suggestion->getTitle()->getPrefixedText(),
					'sourceLanguage' => $suggestion->getSourceLanguage(),
					'targetLanguage' => $suggestion->getTargetLanguage(),
					'listId' => $suggestion->getListId(),
				];
			}
		}

		if ( count( $suggestions ) ) {
			$this->setContinueEnumParameter( 'offset', $params['limit'] + $params['offset'] );
		}
		$result->addValue( [ 'query', $this->getModuleName() ], 'lists', $lists );
	}

	/**
	 * TODO: This is misnamed. Translation::find returns all translations in any state.
	 * @param array $suggestions
	 * @return array
	 */
	private function getOngoingTranslations( array $suggestions ) {
		$titles = [];
		if ( !count( $suggestions ) ) {
			return $titles;
		}

		$params = $this->extractRequestParams();
		$sourceLanguage = $params['from'];
		$targetLanguage = $params['to'];
		$ongoingTranslationTitles = [];
		foreach ( $suggestions as $suggestion ) {
			$titles[] = $suggestion->getTitle()->getPrefixedText();
		}
		$translations = Translation::find( $sourceLanguage, $targetLanguage, $titles );
		'@phan-var Translation[] $translations';
		foreach ( $translations as $translation ) {
			// $translation['sourceTitle'] is prefixed title with spaces
			$ongoingTranslationTitles[] = $translation->translation['sourceTitle'];
		}
		return $ongoingTranslationTitles;
	}

	private function getExistingTitles( array $suggestions ) {
		$titles = [];
		if ( !count( $suggestions ) ) {
			return $titles;
		}

		$params = $this->extractRequestParams();
		$sourceLanguage = $params['from'];
		$targetLanguage = $params['to'];
		$existingTitles = [];
		foreach ( $suggestions as $suggestion ) {
			$titles[] = $suggestion->getTitle()->getPrefixedText();
		}
		$params = [
			'action' => 'query',
			'format' => 'json',
			'titles' => implode( '|', $titles ),
			'prop' => 'langlinks',
			'lllimit' => $params['limit'],
			'lllang' => SiteMapper::getDomainCode( $targetLanguage ),
			'redirects' => true
		];
		$apiUrl = SiteMapper::getApiURL( $sourceLanguage, $params );
		$json = MediaWikiServices::getInstance()->getHttpRequestFactory()
			->get( $apiUrl, [], __METHOD__ );
		$response = FormatJson::decode( $json, true );
		if ( !isset( $response['query'] ) || !isset( $response['query']['pages'] ) ) {
			// Something wrong with response. Should we throw exception?
			return $existingTitles;
		}

		$pages = $response['query']['pages'];
		foreach ( $pages as $page ) {
			if ( isset( $page['langlinks'] ) ) {
				// API returns titles in PrefixedText format
				$existingTitles[] = $page['title'];
			}
		}

		return $existingTitles;
	}

	private function filterSuggestions( array $suggestions, array $titlesToFilter ) {
		return array_filter( $suggestions,
			static function ( $suggestion ) use( $titlesToFilter ) {
				return !in_array(
					$suggestion->getTitle()->getPrefixedText(),
					$titlesToFilter
				);
			}
		);
	}

	private function removeInvalidSuggestions( $sourceLanguage, array $existingTitles ) {
		DeferredUpdates::addCallableUpdate( static function () use ( $sourceLanguage, $existingTitles ) {
			// Remove the already existing links from cx_suggestion table
			$manager = new SuggestionListManager();
			$manager->removeTitles( $sourceLanguage, $existingTitles );
		} );
	}

	public function getAllowedParams() {
		$allowedParams = [
			'from' => [
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			],
			'to' => [
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			],
			'listid' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'limit' => [
				ApiBase::PARAM_DFLT => 10,
				ApiBase::PARAM_TYPE => 'limit',
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => ApiBase::LIMIT_BIG1,
				ApiBase::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'seed' => [
				ApiBase::PARAM_TYPE => 'integer',
			],
		];
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationsuggestions&from=en&to=es' =>
				'apihelp-query+contenttranslationsuggestions-example-1',
		];
	}
}
