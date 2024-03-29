<?php
declare( strict_types=1 );

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\DTO\PublishedTranslationDTO;
use ContentTranslation\Service\UserService;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;

/**
 * Action API module that is used to check if any "unreviewed" translation
 * has just been published by the current user. A translation is considered
 * "unreviewed" if the user has spent fewer minutes to complete it, than the
 * number of the translated paragraphs, with a maximum limit to 10 minutes.
 * That is, if the user has spent 10 or more minutes to complete a translation,
 * the translation is considered "reviewed", even if it contains hundreds
 * of paragraphs.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2024.03
 */
class ApiContentTranslationUnreviewedCheck extends ApiBase {
	private UserService $userService;
	private TranslationStore $translationStore;
	private TranslationCorporaStore $corporaStore;

	public function __construct(
		ApiMain $mainModule,
		$action,
		TranslationStore $translationStore,
		TranslationCorporaStore $corporaStore,
		UserService $userService
	) {
		parent::__construct( $mainModule, $action );
		$this->translationStore = $translationStore;
		$this->userService = $userService;
		$this->corporaStore = $corporaStore;
	}

	private function validateRequest(): void {
		$user = $this->getUser();

		if ( !$user->isNamed() ) {
			$this->dieWithError( 'apierror-cxcheckunreviewed-anon-user' );
		}
	}

	public function execute() {
		$this->validateRequest();

		// This method returns the last published translation, in the last 10 minutes.
		// Checking the most recent translation is enough here. Previous translations
		// have already been checked before the most recent translation was published.
		$recentTranslation = $this->translationStore->findRecentTranslationByUser(
			$this->userService->getGlobalUserId( $this->getUser() )
		);
		$result = [ 'result' => 'success' ];

		if ( !$recentTranslation ) {
			$this->getResult()->addValue( null, $this->getModuleName(), $result );
			return;
		}

		$translatedSubSectionsCount = $this->corporaStore->countTranslatedSubSectionsByTranslationId(
			$recentTranslation->getTranslationId()
		);

		$startUnixTimestamp = (int)wfTimestamp( TS_UNIX, $recentTranslation->translation['startTimestamp'] );
		$minutesPassed = ( time() - $startUnixTimestamp ) / 60;
		if ( $translatedSubSectionsCount > $minutesPassed ) {
			$result['result'] = 'failure';
			$translationDTO = new PublishedTranslationDTO(
				$recentTranslation->getTranslationId(),
				$recentTranslation->translation['sourceTitle'],
				$recentTranslation->translation['sourceLanguage'],
				$recentTranslation->translation['targetLanguage'],
				$recentTranslation->translation['startTimestamp'],
				$recentTranslation->translation['lastUpdateTimestamp'],
				$recentTranslation->translation['sourceRevisionId'],
				$recentTranslation->translation['targetTitle'],
				$recentTranslation->translation['targetURL'],
				[]
			);
			$result['translation'] = $translationDTO->toArray();
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function isInternal() {
		return true;
	}
}
