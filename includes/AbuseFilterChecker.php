<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use MediaWiki\Extension\AbuseFilter\Consequences\ConsequencesLookup;
use MediaWiki\Extension\AbuseFilter\FilterLookup;
use MediaWiki\Extension\AbuseFilter\FilterRunnerFactory;
use MediaWiki\Extension\AbuseFilter\GlobalNameUtils;
use MediaWiki\Extension\AbuseFilter\VariableGenerator\VariableGeneratorFactory;
use MediaWiki\Extension\AbuseFilter\Variables\VariableHolder;
use MediaWiki\Page\WikiPageFactory;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

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
class AbuseFilterChecker {
	private ?VariableGeneratorFactory $variableGeneratorFactory;

	private bool $isAbuseFilterExtensionLoaded;

	private WikiPageFactory $wikiPageFactory;

	private ?ConsequencesLookup $consequencesLookup;

	private ?FilterLookup $filterLookup;

	private ?FilterRunnerFactory $filterRunnerFactory;

	public function __construct(
		$isAbuseFilterExtensionLoaded,
		WikiPageFactory $wikiPageFactory,
		?VariableGeneratorFactory $variableGeneratorFactory,
		?ConsequencesLookup $consequencesLookup,
		?FilterLookup $filterLookup,
		?FilterRunnerFactory $filterRunnerFactory
	) {
		$this->isAbuseFilterExtensionLoaded = $isAbuseFilterExtensionLoaded;
		$this->wikiPageFactory = $wikiPageFactory;
		$this->variableGeneratorFactory = $variableGeneratorFactory;
		$this->consequencesLookup = $consequencesLookup;
		$this->filterLookup = $filterLookup;
		$this->filterRunnerFactory = $filterRunnerFactory;
	}

	/**
	 * Check a title for any rule violations.
	 *
	 * @param Title $title Title to check
	 * @param User $user User performing the action
	 *
	 * @return array List of any rule violations
	 */
	public function checkTitleForUser( Title $title, User $user ): array {
		if ( !$this->isAbuseFilterExtensionLoaded ) {
			return [];
		}

		$gen = $this->variableGeneratorFactory->newGenerator();
		$vars = $gen
			->addUserVars( $user )
			->addTitleVars( $title, 'page' )
			->addGenericVars()
			->getVariableHolder();
		$vars->setVar( 'action', 'edit' );

		return $this->getResults( $user, $title, $vars );
	}

	/**
	 * Check some text for rule violations.
	 *
	 * @param User $user
	 * @param Title $title
	 * @param string|null $text Text to check
	 * @return array List of any rule violations
	 */
	public function checkSectionForTitleAndUser( User $user, Title $title, ?string $text ): array {
		if ( !$this->isAbuseFilterExtensionLoaded ) {
			return [];
		}

		if ( $text === null || mb_strlen( $text ) < 150 ) {
			// Don't validate sections that are too short. The validations
			// happen while editing is going on.
			return [];
		}

		// Add AbuseFilter variables. Note that we are adding the title
		// here. That will cause filters about titles executed for every section.
		// But not passing title will cause content filters with namespace rules
		// not to produce results. We will attempt to filter out title errors
		// away with array_diff_key.
		$gen = $this->variableGeneratorFactory->newGenerator();
		$vars = $gen
			->addUserVars( $user )
			->addTitleVars( $title, 'page' )
			->addEditVars( $this->wikiPageFactory->newFromTitle( $title ), $user )
			->addGenericVars()
			->getVariableHolder();
		$vars->setVar( 'action', 'edit' );
		$vars->setVar( 'old_wikitext', '' );
		$vars->setVar( 'new_wikitext', $text );

		$results = $this->getResults( $user, $title, $vars );
		return array_diff_key( $results, $this->checkTitleForUser( $title, $user ) );
	}

	private function getResults( User $user, Title $title, VariableHolder $vars ): array {
		static $seriousActions = [ 'warn', 'block', 'disallow', 'degroup' ];

		$runner = $this->filterRunnerFactory->newRunner( $user, $title, $vars, 'default' );
		$filters = $runner->checkAllFilters();

		$filters = array_keys( array_filter( $filters ) );
		$actions = $this->consequencesLookup->getConsequencesForFilters( $filters );

		$results = [];
		foreach ( $actions as $key => $val ) {
			[ $filterID, $isGlobal ] = GlobalNameUtils::splitGlobalName( $key );
			$rulename = $this->filterLookup->getFilter( $filterID, $isGlobal )->getName();

			// No point alerting the user about non-serious actions. T136596
			$actionsForRule = array_keys( $val );
			if ( array_intersect( $seriousActions, $actionsForRule ) === [] ) {
				continue;
			}

			if ( isset( $val['warn'][0] ) ) {
				$val['warn']['messageHtml'] = wfMessage( $val['warn'][0] )->params( $rulename )->parse();
			}

			$results[$key] = $val;
		}

		return $results;
	}
}
