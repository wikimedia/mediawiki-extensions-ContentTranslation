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
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

namespace ContentTranslation;

class AbuseFilterCheck {
	/**
	 * Check a title for any rule violations.
	 *
	 * @param \User $user User performing the action
	 * @param \Title $title Title to check
	 * @return array List of any rule violations
	 */
	public function checkTitle( \User $user, \Title $title ) {
		if ( !class_exists( 'AbuseFilter' ) ) {
			return array();
		}

		$vars = new \AbuseFilterVariableHolder();

		$vars->addHolders(
			\AbuseFilter::generateUserVars( $user ),
			\AbuseFilter::generateTitleVars( $title, 'ARTICLE' )
		);

		return $this->getResults( $vars );
	}

	/**
	 * Check some text for rule violations.
	 *
	 * @param \User $user User performing the action
	 * @param \Title $title Title to check
	 * @param string $text Text to check
	 * @return array List of any rule violations
	 */
	public function checkSection( \User $user, \Title $title, $text ) {
		if ( !class_exists( 'AbuseFilter' ) ) {
			return array();
		}

		$vars = new \AbuseFilterVariableHolder();

		$vars->addHolders(
			\AbuseFilter::generateUserVars( $user ),
			\AbuseFilter::generateTitleVars( $title, 'ARTICLE' ),
			\AbuseFilter::getEditVars( $title )
		);

		$vars->setVar( 'action', 'edit' );
		$vars->setVar( 'old_wikitext', '' );
		$vars->setVar( 'new_wikitext', $text );

		return $this->getResults( $vars );
	}

	protected function getResults( \AbuseFilterVariableHolder $vars ) {
		$filters = \AbuseFilter::checkAllFilters( $vars );
		$filters = array_keys( array_filter( $filters ) );
		$actions = \AbuseFilter::getConsequencesForFilters( $filters );

		$results = array();
		foreach ( $actions as $key => $val ) {
			$rulename = \AbuseFilter::$filters[$key]->af_public_comments;

			if ( isset( $val['warn']['parameters'][0] ) ) {
				$val['warning_html'] =
					wfMessage( $val['warn']['parameters'][0] )
						->params( $rulename )
						->parsed();
			}

			$results[$rulename] = $val;
		}

		return $results;
	}
}
