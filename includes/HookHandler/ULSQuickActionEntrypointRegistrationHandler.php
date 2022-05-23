<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use MediaWiki\Actions\ActionFactory;
use MediaWiki\Hook\BeforePageDisplayHook;

class ULSQuickActionEntrypointRegistrationHandler implements BeforePageDisplayHook {

	/** @var ActionFactory */
	private $actionFactory;

	public function __construct( ActionFactory $actionFactory ) {
		$this->actionFactory = $actionFactory;
	}

	public function onBeforePageDisplay( $out, $skin ): void {
		$title = $out->getTitle();

		// Do not load module for main page
		if ( $title->isMainPage() ) {
			return;
		}

		$action = $this->actionFactory->getActionName( $out->getContext() );
		// Do not load module for actions other than "view"
		if ( $action !== 'view' ) {
			return;
		}

		// The ULS quick action entrypoint should only be enabled for article pages and Vector 2022 skin
		if ( !$title->isContentPage() || $skin->getSkinName() !== 'vector-2022' ) {
			return;
		}
		$out->addModules( 'ext.cx.uls.quick.actions' );
	}
}
