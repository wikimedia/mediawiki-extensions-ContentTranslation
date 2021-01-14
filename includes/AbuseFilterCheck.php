<?php
/**
 * Utility class for checking AbuseFilter rules before publishing.
 *
 * The results from these methods return an array, where the keys are
 * the public names of the rules, and values are arrays consisting of
 * different actions the rules would cause. Those can be tag, warn,
 * disallow and others. Example:
 * @code
 * array = [
 *   'rule1' => [
 *     'warn' => [
 *       'action' => 'warn',
 *       'parameters' => [ 'abusefilter-warning' ]
 *     ]
 *   ]
 * ];
 * @endcode
 *
 * With type 'warn' there is also warning_html for html warning message.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use MediaWiki\Extension\AbuseFilter\AbuseFilterServices;
use MediaWiki\Extension\AbuseFilter\GlobalNameUtils;

class AbuseFilterCheck {
	protected $user;
	protected $title;
	protected $titleResults;

	/**
	 * @param \User $user User performing the action
	 * @param \Title $title Title to check
	 */
	public function __construct( \User $user, \Title $title ) {
		$this->user = $user;
		$this->title = $title;
	}

	/**
	 * Check a title for any rule violations.
	 *
	 * @return array List of any rule violations
	 */
	public function checkTitle() {
		if ( !\ExtensionRegistry::getInstance()->isLoaded( 'Abuse Filter' ) ) {
			return [];
		}

		// Simple in-object caching
		if ( is_array( $this->titleResults ) ) {
			return $this->titleResults;
		}

		$gen = AbuseFilterServices::getVariableGeneratorFactory()->newGenerator();
		$vars = $gen
			->addUserVars( $this->user )
			->addTitleVars( $this->title, 'page' )
			->getVariableHolder();
		$vars->setVar( 'action', 'edit' );

		$this->titleResults = $this->getResults( $vars );

		return $this->titleResults;
	}

	/**
	 * Check some text for rule violations.
	 *
	 * @param string $text Text to check
	 * @return array List of any rule violations
	 */
	public function checkSection( $text ) {
		if ( !\ExtensionRegistry::getInstance()->isLoaded( 'Abuse Filter' ) ) {
			return [];
		}

		if ( $text === null || mb_strlen( $text ) < 150 ) {
			// Don't validate sections that are too short. The validations
			// happen while editing is going on.
			return [];
		}

		// Add AbuseFilter variables. Note that we are adding the title
		// here. That will cause filters about titles executed for every sections.
		// But not passing title will cause content filters with namespace rules
		// not to produce results. We will attempt to filter out title errors
		// away with array_diff_key.
		$gen = AbuseFilterServices::getVariableGeneratorFactory()->newGenerator();
		$vars = $gen
			->addUserVars( $this->user )
			->addTitleVars( $this->title, 'page' )
			->addEditVars( \WikiPage::factory( $this->title ), $this->user )
			->getVariableHolder();
		$vars->setVar( 'action', 'edit' );
		$vars->setVar( 'old_wikitext', '' );
		$vars->setVar( 'new_wikitext', $text );

		$results = $this->getResults( $vars );
		$results = array_diff_key( $results, $this->checkTitle() );

		return $results;
	}

	/**
	 * @param \AbuseFilterVariableHolder $vars
	 * @return array
	 */
	protected function getResults( \AbuseFilterVariableHolder $vars ) {
		static $seriousActions = [ 'warn', 'block', 'disallow', 'degroup' ];

		$filters = \AbuseFilter::checkAllFilters( $vars, $this->title );
		$filters = array_keys( array_filter( $filters ) );
		$actions = AbuseFilterServices::getConsequencesLookup()->getConsequencesForFilters( $filters );
		$filterLookup = AbuseFilterServices::getFilterLookup();

		$results = [];
		foreach ( $actions as $key => $val ) {
			[ $filterID, $isGlobal ] = GlobalNameUtils::splitGlobalName( $key );
			$rulename = $filterLookup->getFilter( $filterID, $isGlobal )->getName();

			// No point alerting the user about non-serious actions. T136596
			$actionsForRule = array_keys( $val );
			if ( array_intersect( $seriousActions, $actionsForRule ) === [] ) {
				continue;
			}

			if ( isset( $val['warn'][0] ) ) {
				$val['warn']['messageHtml'] =
					wfMessage( $val['warn'][0] )
						->params( $rulename )
						->parse();
			}

			$results[$key] = $val;
		}

		return $results;
	}
}
