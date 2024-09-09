<?php

declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\ResourceLoader\Context;

class ArticleTopicsDefinition {

	/**
	 * Get the article topics definition, organized into groups
	 * with their associated ORES topics and labels.
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
	 *         'orestopics' => string[]
	 *       ],
	 *     ]
	 *   ],
	 * ]
	 */
	public static function getTopics( Context $context ) {
		$groupsTopicsOrestopics = [
			'geography' => [
				'africa' => [
					'africa',
					'central-africa',
					'eastern-africa',
					'northern-africa',
					'southern-africa',
					'western-africa',
				],
				'asia' => [
					'asia',
					'central-asia',
					'east-asia',
					'south-asia',
					'southeast-asia',
					'west-asia',
				],
				'central-america',
				'north-america',
				'south-america',
				'europe' => [
					'north-asia', // !?
					'europe',
					'eastern-europe',
					'northern-europe',
					'southern-europe',
					'western-europe',
				],
				'oceania',
			],
			'culture' => [
				'architecture',
				'art' => 'visual-arts',
				'comics-and-anime',
				'entertainment' => [
					'entertainment',
					'radio',
				],
				'fashion',
				'literature' => 'books',
				'music',
				'performing-arts',
				'sports',
				'tv-and-film' => [ 'films', 'television' ],
				'video-games',
			],
			'history-and-society' => [
				'biography',
				'business-and-economics',
				'education',
				'food-and-drink',
				'history',
				'military-and-warfare',
				'philosophy-and-religion',
				'politics-and-government',
				'society',
				'transportation',
				'women',
			],
			'science-technology-and-math' => [
				'biology',
				'chemistry',
				'computers-and-internet' => [
					'internet-culture',
					'computing',
					'software',
				],
				'earth-and-environment' => [
					'geographical',
					'earth-and-environment',
				],
				'engineering',
				'general-science' => 'stem',
				'mathematics',
				'medicine-and-health',
				'physics' => [
					'physics',
					'space',
				],
				'technology',
			],
		];

		$groupsDefinitions = [];

		foreach ( $groupsTopicsOrestopics as $groupId => $topics ) {
			$topicsDefinitions = [];

			foreach ( $topics as $key => $value ) {
				// If there is 1-1 match between topic and ORES topic then the
				// array entry is a single value with a numeric key so
				// the topic id is actually the value and the ORES topic is wrapped
				// in an array for consistency.
				if ( is_numeric( $key ) ) {
					$topicId = $value;
					$oresTopics = [ $value ];
				} else {
					$topicId = $key;
					$oresTopics = is_array( $value ) ? $value : [ $value ];
				}

				$topicsDefinitions[] = [
					'topicId' => $topicId,
					'label' => $context->msg( 'cx-articletopics-topic-' . $topicId )->text(),
					'orestopics' => $oresTopics,
				];
			}

			$groupsDefinitions[] = [
				'groupId' => $groupId,
				'label' => $context->msg( 'cx-articletopics-group-' . $groupId )->text(),
				'topics' => $topicsDefinitions,
			];
		}

		return $groupsDefinitions;
	}
}
