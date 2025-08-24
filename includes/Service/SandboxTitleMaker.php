<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use MediaWiki\Title\Title;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;

class SandboxTitleMaker {

	public function __construct(
		private readonly TitleFactory $titleFactory,
		private readonly bool $isSandboxLinkLoaded
	) {
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
		$targetTitle = $user->getName() . '/' . $targetTitle;
		if ( $this->isSandboxLinkLoaded ) {
			$subpageMsg = wfMessage( 'sandboxlink-subpage-name' )->inContentLanguage();
			if ( !$subpageMsg->isDisabled() ) {
				$targetTitle = $user->getName() . '/' . $subpageMsg->plain();
			}
		}

		return $this->titleFactory->makeTitleSafe( NS_USER, $targetTitle );
	}
}
