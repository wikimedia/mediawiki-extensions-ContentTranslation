<?php

declare( strict_types = 1 );

namespace ContentTranslation\Config\Schemas;

use MediaWiki\Extension\CommunityConfiguration\Schema\JsonSchema;

// phpcs:disable Generic.NamingConventions.UpperCaseConstantName.ClassConstantNotUpperCase
class ContentTranslationSchema extends JsonSchema {
	public const VERSION = '1.0.0';

	public const ContentTranslationFeaturedCollection = [
		self::TYPE => self::TYPE_STRING,
		self::DEFAULT => '',
		self::MAX_LENGTH => 100,
	];
}
