<?php
/**
 * Contains the special page Special:ContentTranslationStats.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

/**
 * Shows some metrics about ContentTranslation usage.
 */
class SpecialContentTranslationStats extends ContentTranslationSpecialPage {
	public function __construct() {
		parent::__construct( 'ContentTranslationStats' );
	}

	public function getDescription() {
		return $this->msg( 'cx-stats-title' )->text();
	}

	/**
	 * @inheritDoc
	 */
	protected function canUserProceed() {
		return true;
	}

	/**
	 * @inheritDoc
	 */
	protected function initModules() {
		$this->getOutput()->addModules( 'ext.cx.stats' );
	}

	/**
	 * @inheritDoc
	 */
	protected function addJsConfigVars() {
		global $wgContentTranslationCampaigns;

		$this->getOutput()->addJsConfigVars(
			'wgContentTranslationCampaigns',
			$wgContentTranslationCampaigns
		);
	}
}
