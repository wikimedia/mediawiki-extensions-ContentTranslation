<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use MediaWiki\Actions\ActionFactory;
use MediaWiki\Output\Hook\BeforePageDisplayHook;

class ULSQuickActionEntrypointRegistrationHandler implements BeforePageDisplayHook {

	/** @var ActionFactory */
	private $actionFactory;

	public function __construct( ActionFactory $actionFactory ) {
		$this->actionFactory = $actionFactory;
	}

	public function onBeforePageDisplay( $out, $skin ): void {
		$title = $out->getTitle();
		$action = $this->actionFactory->getActionName( $out->getContext() );
		$isVector2022Skin = $skin->getSkinName() === 'vector-2022';
		$isView = $action === 'view';

		// Do not load the module:
		// 1. if page doesn't exist
		// 2. if page is the Main Page
		// 3. if action is other than "view"
		// 4. if namespace is not a "Content" (article) namespace
		// 5. if skin is other than Vector 2022
		if ( !$title->exists() || $title->isMainPage() || !$isView || !$title->isContentPage() || !$isVector2022Skin ) {
			return;
		}

		$out->addModules( 'ext.cx.uls.quick.actions' );
	}
}
