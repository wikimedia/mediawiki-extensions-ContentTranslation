<?php

declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\Extension\WikimediaMessages\ArticleCountryFiltersRegistry;
use MediaWiki\ResourceLoader\Context;

class ArticleCountriesDefinition {

	/**
	 * Get the list of supported article countries, grouped by regions,
	 * with their label in the current language.
	 *
	 * Sorted by localized label.
	 *
	 * @param Context $context
	 * @return array
	 * [
	 *   [
	 *     'id' => string,
	 *     'label' => string,
	 *     'countries' => [
	 *      [
	 *        'id' => string,
	 *        'label' => string,
	 *      ]
	 *   ],
	 * ]
	 */
	public static function getCountries( Context $context ) {
		return ArticleCountryFiltersRegistry::getLocalizedRegionsAndCountries( $context->getLanguage() );
	}
}
