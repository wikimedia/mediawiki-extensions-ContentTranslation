<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use MediaWiki\Actions\ActionFactory;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use UniversalLanguageSelector\Hooks;

class ULSQuickActionEntrypointRegistrationHandler implements BeforePageDisplayHook {

	public function __construct( private readonly ActionFactory $actionFactory ) {
	}

	/** @inheritDoc */
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
		if ( !$title->exists() || $title->isMainPage() || !$isView || !$title->isContentPage() ) {
			return;
		}

		// Do not load the module if ULS v2 is disabled, OR it is not Vector 2022 skin.
		if ( !Hooks::isLanguageSelectorV2Enabled( $out->getUser(), $skin, $out->getConfig() ) || !$isVector2022Skin ) {
			return;
		}

		$out->addModules( 'ext.cx.uls.quick.actions' );
	}
}
