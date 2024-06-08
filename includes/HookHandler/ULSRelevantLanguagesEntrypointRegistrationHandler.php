<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\PreferenceHelper;
use MediaWiki\Output\Hook\BeforePageDisplayHook;

class ULSRelevantLanguagesEntrypointRegistrationHandler implements BeforePageDisplayHook {

	/** @var PreferenceHelper */
	private $preferenceHelper;

	public function __construct( PreferenceHelper $preferenceHelper ) {
		$this->preferenceHelper = $preferenceHelper;
	}

	public function onBeforePageDisplay( $out, $skin ): void {
		$user = $out->getUser();
		// Enable entrypoint only on Wikipedias where Content Translation is enabled and only for users
		// that have not disabled CX entrypoints
		if (
			!$this->preferenceHelper->isEnabledForUser( $user )
			|| $this->preferenceHelper->isCXEntrypointDisabled( $user )
		) {
			return;
		}

		$isContentPage = $out->getTitle()->isContentPage();

		if ( !$isContentPage ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.ulsrelevantlanguages' );
	}
}
