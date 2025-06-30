<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;
use MediaWiki\Title\Title;
use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\SelectQueryBuilder;

class SuggestionListManager {
	/**
	 * @param string $sourceLanguage
	 * @param array $titles
	 */
	public function removeTitles( $sourceLanguage, array $titles ) {
		if ( $titles === [] ) {
			return;
		}

		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbw = $connectionProvider->getPrimaryDatabase();
		$dbw->newDeleteQueryBuilder()
			->deleteFrom( 'cx_suggestions' )
			->where( [
				'cxs_title' => $titles,
				'cxs_source_language' => $sourceLanguage,
			] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * @param array $conds
	 * @return SuggestionList|null
	 */
	protected function getListByConds( array $conds ) {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();
		$row = $dbr->newSelectQueryBuilder()
			->select( '*' )
			->from( 'cx_lists' )
			->where( $conds )
			->caller( __METHOD__ )
			->fetchRow();

		if ( $row ) {
			return SuggestionList::newFromRow( $row );
		}

		return null;
	}

	/**
	 * @param string $name
	 * @param int $owner
	 * @return SuggestionList|null
	 */
	public function getListByName( $name, $owner = 0 ) {
		$conds = [
			'cxl_name' => $name,
			'cxl_owner' => $owner,
		];

		return $this->getListByConds( $conds );
	}

	/**
	 * @param int $id
	 * @return SuggestionList|null
	 */
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
	 * @return Title[]
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
	 * @param string $listName
	 * @param string|null $from Source language code.
	 * @param string|null $to Target language code.
	 * @return Suggestion[] Suggestions
	 */
	private function getSuggestionsByListName( $owner, $listName, $from = null, $to = null ) {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();
		$suggestions = [];
		$conds = [
			'cxl_name' => $listName,
			'cxl_owner' => $owner,
		];

		if ( $from !== null ) {
			$conds[ 'cxs_source_language' ] = $from;
		}
		if ( $to !== null ) {
			$conds[ 'cxs_target_language' ] = $to;
		}

		$res = $dbr->newSelectQueryBuilder()
			->select( [ 'cxs_list_id', 'cxs_title', 'cxs_source_language', 'cxs_target_language' ] )
			->from( 'cx_suggestions' )
			->join( 'cx_lists', null, 'cxs_list_id = cxl_id' )
			->where( $conds )
			->caller( __METHOD__ )
			->fetchResultSet();

		foreach ( $res as $row ) {
			$suggestions[] = Suggestion::newFromRow( $row );
		}

		return $suggestions;
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
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();

		$lists = [];
		$suggestions = [];

		$res = $dbr->newSelectQueryBuilder()
			->select( '*' )
			->from( 'cx_lists' )
			->where( [
				'cxl_type' => $type,
				'cxl_public' => true,
			] )
			->caller( __METHOD__ )
			->orderBy( 'cxl_type', SelectQueryBuilder::SORT_DESC )
			->fetchResultSet();

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
	 * @param int $listId
	 * @param string $from Source language code.
	 * @param string $to Target language code.
	 * @param int $limit How many suggestions to fetch.
	 * @param int $offset Offset from the beginning to fetch.
	 * @param int $seed Seed to use with randomizing of results.
	 * @return Suggestion[] Suggestions
	 */
	public function getSuggestionsInList( $listId, $from, $to, $limit, $offset, $seed ) {
		$suggestions = [];
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();

		$seed = (int)$seed;

		$queryBuilder = $dbr->newSelectQueryBuilder()
			->select( '*' )
			->from( 'cx_suggestions' )
			->where( [
				'cxs_source_language' => $from,
				'cxs_target_language' => $to,
				'cxs_list_id' => $listId
			] )
			->limit( $limit )
			->orderBy( "RAND( $seed )" )
			->caller( __METHOD__ );

		if ( $offset ) {
			$queryBuilder->offset( $offset );
		}

		$res = $queryBuilder->fetchResultSet();

		foreach ( $res as $row ) {
			$suggestions[] = Suggestion::newFromRow( $row );
		}

		return $suggestions;
	}
}
