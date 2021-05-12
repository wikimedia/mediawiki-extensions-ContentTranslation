<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;

class SuggestionListManager {
	/**
	 * @param SuggestionList $list
	 * @return int Id of the list.
	 */
	public function insertList( SuggestionList $list ) {
		$dbw = Database::getConnection( DB_PRIMARY );
		$values = [
			'cxl_id' => $list->getId(),
			'cxl_owner' => $list->getOwner(),
			'cxl_public' => (int)$list->isPublic(),
			'cxl_name' => $list->getName(),
			'cxl_info' => $list->getInfo(),
			'cxl_type' => $list->getType(),
		];

		if ( $list->getStartTime() !== null ) {
			$values['cxl_start_time'] = $dbw->timestamp( $list->getStartTime() );
		}

		if ( $list->getEndTime() !== null ) {
			$values['cxl_end_time'] = $dbw->timestamp( $list->getEndTime() );
		}

		$dbw->insert( 'cx_lists', $values, __METHOD__ );

		return $dbw->insertId();
	}

	public function deleteList( $id ) {
		$dbw = Database::getConnection( DB_PRIMARY );
		$dbw->delete(
			'cx_suggestions',
			[
				'cxs_list_id' => $id,
			],
			__METHOD__
		);
		$dbw->delete(
			'cx_lists',
			[
				'cxl_id' => $id
			],
			__METHOD__
		);
	}

	public function removeTitles( $sourceLanguage, array $titles ) {
		if ( $titles === [] ) {
			return;
		}

		$dbw = Database::getConnection( DB_PRIMARY );
		$dbw->delete(
			'cx_suggestions',
			[
				'cxs_title' => $titles,
				'cxs_source_language' => $sourceLanguage,
			],
			__METHOD__
		);
	}

	protected function getListByConds( array $conds ) {
		$dbr = Database::getConnection( DB_REPLICA );
		$row = $dbr->selectRow( 'cx_lists', '*', $conds, __METHOD__ );

		if ( $row ) {
			return SuggestionList::newFromRow( $row );
		}

		return null;
	}

	public function getListByName( $name, $owner = 0 ) {
		$conds = [
			'cxl_name' => $name,
			'cxl_owner' => $owner,
		];

		return $this->getListByConds( $conds );
	}

	public function getListById( $id ) {
		$conds = [
			'cxl_id' => $id,
			'cxl_owner' => 0,
		];

		return $this->getListByConds( $conds );
	}

	/**
	 * Get the titles discarded by the user between a language pair
	 *
	 * @param int $owner Owner's global user id.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @return \Title[]
	 */
	public function getDiscardedSuggestions( $owner, $from, $to ) {
		$titles = [];
		$listName = 'cx-suggestionlist-discarded';

		$suggestions = $this->getSuggestionsByListName( $owner, $listName, $from, $to );

		foreach ( $suggestions as $suggestion ) {
			$titles[] = $suggestion->getTitle();
		}

		return $titles;
	}

	/**
	 * Get suggestions markes as favorite by the translator.
	 *
	 * @param int $owner Owner's global user id.
	 * @return array Lists and suggestions
	 */
	public function getFavoriteSuggestions( $owner ) {
		$lists = [];
		$listName = 'cx-suggestionlist-favorite';
		$favoriteList = $this->getListByName( $listName, $owner );
		$suggestions = $this->getSuggestionsByListName( $owner, $listName );

		if ( $favoriteList ) {
			$lists[] = $favoriteList;
		}

		return [
			'lists' => $lists,
			'suggestions' => $suggestions,
		];
	}

	/**
	 * Get the suggestions by list name for the given owner.
	 *
	 * @param int $owner Owner's global user id.
	 * @param string $listName List name.
	 * @param string|null $from Source language code.
	 * @param string|null $to Target language code.
	 * @return Suggestion[] Suggestions
	 */
	private function getSuggestionsByListName( $owner, $listName, $from = null, $to = null ) {
		$dbr = Database::getConnection( DB_REPLICA );
		$suggestions = [];
		$conds = [
			'cxl_name' => $listName,
			'cxl_owner' => $owner,
			'cxs_list_id = cxl_id',
		];

		if ( $from !== null ) {
			$conds[ 'cxs_source_language' ] = $from;
		}
		if ( $to !== null ) {
			$conds[ 'cxs_target_language' ] = $to;
		}

		$res = $dbr->select(
			[ 'cx_suggestions', 'cx_lists' ],
			[ 'cxs_list_id', 'cxs_title', 'cxs_source_language', 'cxs_target_language' ],
			$conds,
			__METHOD__
		);

		foreach ( $res as $row ) {
			$suggestions[] = Suggestion::newFromRow( $row );
		}

		return $suggestions;
	}

	/**
	 * Add suggestions to database.
	 *
	 * @param Suggestion[] $suggestions
	 */
	public function addSuggestions( array $suggestions ) {
		$dbw = Database::getConnection( DB_PRIMARY );

		$lbFactory = MediaWikiServices::getInstance()->getDBLoadBalancerFactory();

		$batchSize = 100;
		while ( count( $suggestions ) > 0 ) {
			$batch = array_splice( $suggestions, 0, $batchSize );

			$values = [];
			foreach ( $batch as $suggestion ) {
				$values[] = [
					'cxs_list_id' => $suggestion->getListId(),
					'cxs_title' => $suggestion->getTitle()->getPrefixedText(),
					'cxs_source_language' => $suggestion->getSourceLanguage(),
					'cxs_target_language' => $suggestion->getTargetLanguage(),
				];
			}

			$dbw->insert(
				'cx_suggestions',
				$values,
				__METHOD__,
				[ 'IGNORE' ]
			);

			// TODO: This should really wait for replication on the
			// Database returned by Database::getConnection( DB_PRIMARY );
			$lbFactory->waitForReplication();
		}
	}

	/**
	 * Remove each suggestions from the list it belongs to.
	 *
	 * @param Suggestion[] $suggestions
	 */
	public function removeSuggestions( array $suggestions ) {
		$dbw = Database::getConnection( DB_PRIMARY );

		foreach ( $suggestions as $suggestion ) {
			$values = [
				'cxs_list_id' => $suggestion->getListId(),
				'cxs_title' => $suggestion->getTitle()->getPrefixedText(),
				'cxs_source_language' => $suggestion->getSourceLanguage(),
				'cxs_target_language' => $suggestion->getTargetLanguage(),
			];
			$dbw->delete(
				'cx_suggestions',
				$values,
				__METHOD__
			);
		}
	}

	/**
	 * Check if suggestion exist in a list
	 *
	 * @param Suggestion $suggestion
	 * @return bool
	 */
	public function doesSuggestionExist( Suggestion $suggestion ) {
		$dbr = Database::getConnection( DB_REPLICA );

		$conds = [
			'cxs_list_id' => $suggestion->getListId(),
			'cxs_title' => $suggestion->getTitle()->getPrefixedText(),
			'cxs_source_language' => $suggestion->getSourceLanguage(),
			'cxs_target_language' => $suggestion->getTargetLanguage(),
		];
		$row = $dbr->selectRow( 'cx_suggestions', '1', $conds, __METHOD__ );

		// If there is no result, `selectRow` returns `false`
		return $row !== false;
	}

	/**
	 * Get public (non-personalized) suggestions.
	 *
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @param int $limit How many suggestions to fetch.
	 * @param int $offset Offset from the beginning to fetch.
	 * @param int $seed Seed to use with randomizing of results.
	 * @return array Lists and suggestions
	 */
	public function getPublicSuggestions( $from, $to, $limit, $offset, $seed ) {
		return $this->getSuggestionsByType(
			[
				SuggestionList::TYPE_CATEGORY,
				SuggestionList::TYPE_FEATURED
			],
			$from,
			$to,
			$limit,
			$offset,
			$seed
		);
	}

	/**
	 * Get public suggestions by list type
	 *
	 * @param int|int[] $type List type.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @param int $limit How many suggestions to fetch.
	 * @param int|null $offset Offset from the beginning to fetch.
	 * @param int|null $seed Seed to use with randomizing of results.
	 * @return array Lists and suggestions
	 */
	public function getSuggestionsByType( $type, $from, $to, $limit, $offset = null, $seed = null ) {
		$dbw = Database::getConnection( DB_REPLICA );

		$lists = [];
		$suggestions = [];

		$res = $dbw->select(
			'cx_lists',
			'*',
			[
				'cxl_type' => $type,
				'cxl_public' => true,
			],
			__METHOD__,
			[
				'ORDER BY' => 'cxl_type desc'
			]
		);

		foreach ( $res as $row ) {
			$list = SuggestionList::newFromRow( $row );
			$suggestionsInList = $this->getSuggestionsInList(
				$list->getId(), $from, $to, $limit, $offset, $seed
			);
			if ( !count( $suggestionsInList ) ) {
				continue;
			}
			$lists[$list->getId()] = $list;
			$suggestions = array_merge(
				$suggestions,
				$suggestionsInList
			);
		}

		return [
			'lists' => $lists,
			'suggestions' => $suggestions,
		];
	}

	/**
	 * Get the suggestions by list id
	 *
	 * @param string $listId List id.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @param int $limit How many suggestions to fetch.
	 * @param int $offset Offset from the beginning to fetch.
	 * @param int $seed Seed to use with randomizing of results.
	 * @return Suggestion[] Suggestions
	 */
	public function getSuggestionsInList( $listId, $from, $to, $limit, $offset, $seed ) {
		$suggestions = [];
		$dbr = Database::getConnection( DB_REPLICA );

		$seed = (int)$seed;

		$options = [
			'LIMIT' => $limit,
			'ORDER BY' => "RAND( $seed )"
		];

		if ( $offset ) {
			$options['OFFSET'] = $offset;
		}

		$res = $dbr->select(
			[ 'cx_suggestions' ],
			'*',
			[
				'cxs_source_language' => $from,
				'cxs_target_language' => $to,
				'cxs_list_id' => $listId
			],
			__METHOD__,
			$options
		);

		foreach ( $res as $row ) {
			$suggestions[] = Suggestion::newFromRow( $row );
		}

		return $suggestions;
	}
}
