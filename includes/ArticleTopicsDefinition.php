<?php

declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\Extension\WikimediaMessages\ArticleTopicFiltersRegistry;
use MediaWiki\ResourceLoader\Context;

class ArticleTopicsDefinition {

	/**
	 * Get the article topic filters definition, organized into groups
	 * with their associated articletopics and labels.
	 *
	 * @param Context $context
	 * @return array
	 * [
	 *   [
	 *     'groupId' => string,
	 *     'label' => string,
	 *     'topics' => [
	 *       [
	 *         'topicId' => string,
	 *         'label' => string,
	 *         'articletopics' => string[]
	 *       ],
	 *     ]
	 *   ],
	 * ]
	 */
	public static function getTopics( Context $context ) {
		$groupedTopics = ArticleTopicFiltersRegistry::getGroupedTopics();

		$groupsDefinitions = [];

		foreach ( $groupedTopics as $topicGroup ) {
			$topicsDefinitions = [];

			foreach ( $topicGroup['topics'] as $topicData ) {
				$topicsDefinitions[] = [
					'topicId' => $topicData['topicId'],
					'label' => $context->msg( $topicData['msgKey'] )->text(),
					'articletopics' => $topicData['articleTopics'],
				];
			}

			usort(
				$topicsDefinitions,
				static fn ( array $a, array $b ) => strnatcasecmp( $a['label'], $b['label'] )
			);

			$groupsDefinitions[] = [
				'groupId' => $topicGroup['groupId'],
				'label' => $context->msg( $topicGroup['msgKey'] )->text(),
				'topics' => $topicsDefinitions,
			];
		}

		return $groupsDefinitions;
	}
}
