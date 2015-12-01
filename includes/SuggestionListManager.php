<?php

namespace ContentTranslation;

class SuggestionListManager {

	/**
	 * @return int Id of the list.
	 */
	public function insertList( SuggestionList $list ) {
		$dbw = Database::getConnection( DB_MASTER );
		$values = array(
			'cxl_id' => $list->getId(),
			'cxl_owner' => $list->getOwner(),
			'cxl_public' => (int)$list->isPublic(),
			'cxl_name' => $list->getName(),
			'cxl_info' => $list->getInfo(),
			'cxl_type' => $list->getType(),
		);

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
		$dbw = Database::getConnection( DB_MASTER );
		$dbw->delete(
			'cx_suggestions',
			array(
				'cxs_list_id' => $this->getId(),
			),
			__METHOD__
		);
		$dbw->delete(
			'cx_lists',
			array(
				'cxl_id' => $this->getId()
			),
			__METHOD__
		);
	}

	public function removeTitles( $sourceLanguage, array $titles ) {
		if ( count( $titles ) === 0 ) {
			return;
		}

		$dbw = Database::getConnection( DB_MASTER );
		$dbw->delete(
			'cx_suggestions',
			array(
				'cxs_title' => $titles,
				'cxs_source_language' => $sourceLanguage,
			),
			__METHOD__
		);
	}

	protected function getListByConds( array $conds ) {
		$dbr = Database::getConnection( DB_MASTER );
		$row = $dbr->selectRow( 'cx_lists', '*', $conds, __METHOD__ );

		if ( $row ) {
			return SuggestionList::newFromRow( $row );
		}

		return null;
	}

	public function getListByName( $name, $owner = 0 ) {
		$conds = array(
			'cxl_name' => $name,
			'cxl_owner' => $owner,
		);

		return $this->getListByConds( $conds );
	}

	public function getListById( $id ) {
		$conds = array(
			'cxl_id' => $id,
			'cxl_owner' => 0,
		);

		return $this->getListByConds( $conds );
	}

	/**
	 * Get the titles discarded by the user between a language pair
	 *
	 * @param int $owner Owner's global user id.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @return Title[] String array of titles.
	 */
	public function getDiscardedSuggestions( $owner, $from, $to ) {
		$titles = array();
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
	 * @param string $from Source language.
	 * @param string $to Target language code.
	 * @return array Lists and suggestions
	 */
	public function getFavoriteSuggestions( $owner, $from, $to ) {
		$lists = array();
		$listName = 'cx-suggestionlist-favorite';
		$favoriteList = $this->getListByName( $listName, $owner );
		$suggestions = $this->getSuggestionsByListName( $owner, $listName, $from, $to );

		if ( $favoriteList ) {
			$lists[] = $favoriteList;
		}

		return array(
			'lists' => $lists,
			'suggestions' => $suggestions,
		);
	}

	/**
	 * Get the suggestions by list name for the given owner.
	 *
	 * @param int $owner Owner's global user id.
	 * @param string $listName List name.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @return Suggestion[] Suggestions
	 */
	private function getSuggestionsByListName( $owner, $listName, $from, $to ) {
		$suggestions = array();
		$dbr = Database::getConnection( DB_MASTER );
		$res = $dbr->select(
			array( 'cx_suggestions', 'cx_lists' ),
			array( 'cxs_list_id', 'cxs_title', 'cxs_source_language', 'cxs_target_language' ),
			array(
				'cxl_name' => $listName,
				'cxl_owner' => $owner,
				'cxs_source_language' => $from,
				'cxs_target_language' => $to,
				'cxs_list_id = cxl_id',
			),
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
		$dbw = Database::getConnection( DB_MASTER );

		$batchSize = 100;
		while ( count( $suggestions ) > 0 ) {
			$values = array();
			$batch = array_splice( $suggestions, 0, $batchSize );

			$values = array();
			foreach ( $batch as $suggestion ) {
				$values[] = array(
					'cxs_list_id' => $suggestion->getListId(),
					'cxs_title' => $suggestion->getTitle()->getPrefixedText(),
					'cxs_source_language' => $suggestion->getSourceLanguage(),
					'cxs_target_language' => $suggestion->getTargetLanguage(),
				);
			}

			$dbw->insert(
				'cx_suggestions',
				$values,
				__METHOD__,
				array( 'IGNORE' )
			);

			wfWaitForSlaves();
		}
	}

	/**
	 * Remove each suggestions from the list it belongs to.
	 *
	 * @param Suggestion[] $suggestions
	 */
	public function removeSuggestions( array $suggestions ) {
		$dbw = Database::getConnection( DB_MASTER );

		foreach ( $suggestions as $suggestion ) {
			$values = array(
				'cxs_list_id' => $suggestion->getListId(),
				'cxs_title' => $suggestion->getTitle()->getPrefixedText(),
				'cxs_source_language' => $suggestion->getSourceLanguage(),
				'cxs_target_language' => $suggestion->getTargetLanguage(),
			);
			$dbw->delete(
				'cx_suggestions',
				$values,
				__METHOD__
			);
		}
	}

	/**
	 * Get personalized suggestions.
	 *
	 * @param int $owner Owner's global user id.
	 * @param string $from Source language.
	 * @param string $to Target language code.
	 * @return array Lists and suggestions
	 */
	public function getPersonalizedSuggestions( $owner, $from, $to ) {
		// We have only this kind of personalized suggestions now, but more
		// coming.
		return $this->getFavoriteSuggestions( $owner, $from, $to );
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
	public function getPublicSuggestions( $from, $to, $limit ) {
		return $this->getSuggestionsByType(
			array(
				SuggestionList::TYPE_CATEGORY,
				SuggestionList::TYPE_FEATURED
			),
			$from,
			$to,
			$limit
		 );
	}

	/**
	 * Get public suggestions by list type
	 *
	 * @param string $type List type.
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @param int $limit How many suggestions to fetch.
	 * @param int $offset Offset from the beginning to fetch.
	 * @param int $seed Seed to use with randomizing of results.
	 * @return array Lists and suggestions
	 */
	public function getSuggestionsByType( $type, $from, $to, $limit, $offset = null, $seed = null ) {
		$dbw = Database::getConnection( DB_MASTER );

		$lists = array();
		$suggestions = array();

		$res = $dbw->select(
			'cx_lists',
			'*',
			array(
				'cxl_type' => $type,
				'cxl_public' => true,
			),
			__METHOD__,
			array(
				'ORDER BY' => 'cxl_type desc'
			)
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

		return array(
			'lists' => $lists,
			'suggestions' => $suggestions,
		);
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
		$suggestions = array();
		$dbr = Database::getConnection( DB_MASTER );

		$seed = (int)$seed;

		$options = array(
			'LIMIT' => $limit,
			'ORDER BY' => "RAND( $seed )"
		);

		if ( $offset ) {
			$options['OFFSET'] = $offset;
		}

		$res = $dbr->select(
			array( 'cx_suggestions' ),
			'*',
			array(
				'cxs_source_language' => $from,
				'cxs_target_language' => $to,
				'cxs_list_id' => $listId
			),
			__METHOD__,
			$options
		);

		foreach ( $res as $row ) {
			$suggestions[] = Suggestion::newFromRow( $row );
		}

		return $suggestions;
	}
}
