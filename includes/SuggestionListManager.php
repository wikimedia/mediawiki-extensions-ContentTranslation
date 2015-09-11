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
			'cxl_public' => $list->isPublic(),

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

	public function getListByName( $name, $owner = 0 ) {
		$dbr = Database::getConnection( DB_MASTER );
		$row = $dbr->selectRow(
			'cx_lists',
			'*',
			array(
				'cxl_name' => $name,
				'cxl_owner' => $owner,
			),
			__METHOD__
		);

		if ( $row ) {
			return SuggestionList::newFromRow( $row );
		}
		return null;
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

	public function getRelevantSuggestions( Translator $translators, $from, $to, $limit ) {
		$dbw = Database::getConnection( DB_MASTER );

		$lists = array();
		$suggestions = array();

		$res = $dbw->select(
			'cx_lists',
			'*',
			array(
				'cxl_type' => SuggestionList::TYPE_FEATURED,
				'cxl_public' => true,
			),
			__METHOD__
		);

		foreach ( $res as $row ) {
			$list = SuggestionList::newFromRow( $row );
			$lists[$list->getId()] = $list;
		}

		if ( count( $lists ) ) {
			$conds = array(
				'cxs_list_id' => array_keys( $lists ),
				'cxs_source_language' => $from,
				'cxs_target_language' => array( $to, '*' ),
			);

			$options = array(
				'LIMIT' => $limit,
				'ORDER BY' => 'RAND()'
			);

			$res = $dbw->select( 'cx_suggestions', '*', $conds, __METHOD__, $options );

			foreach ( $res as $row ) {
				$suggestions[] = Suggestion::newFromRow( $row );
			}
		}

		return array(
			'lists' => $lists,
			'suggestions' => $suggestions,
		);
	}
}
