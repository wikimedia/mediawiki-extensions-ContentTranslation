<?php

namespace ContentTranslation;

use Title;
use TitleFactory;
use User;

class SandboxTitleMaker {
	/** @var bool */
	private $isSandboxLinkLoaded;

	/** @var TitleFactory */
	private $titleFactory;

	public function __construct( TitleFactory $titleFactory, bool $isSandboxLinkLoaded ) {
		$this->titleFactory = $titleFactory;
		$this->isSandboxLinkLoaded = $isSandboxLinkLoaded;
	}

	/**
	 * The logic for this function is copied by the "getSandboxTitle" private function,
	 * which lives inside the Hooks of the SandboxLink extension.
	 * Reference: https://github.com/wikimedia/mediawiki-extensions-SandboxLink/blob/master/includes/Hooks.php#L39
	 *
	 * @param User $user
	 * @param string $targetTitle
	 * @return Title|null
	 */
	public function makeSandboxTitle( User $user, string $targetTitle ): ?Title {
		if ( $this->isSandboxLinkLoaded ) {
			$subpageMsg = wfMessage( 'sandboxlink-subpage-name' )->inContentLanguage();
			if ( !$subpageMsg->isDisabled() ) {
				$targetTitle = $user->getName() . '/' . $subpageMsg->plain();
			}
		}

		return $this->titleFactory->makeTitleSafe( NS_USER, $targetTitle );
	}
}
