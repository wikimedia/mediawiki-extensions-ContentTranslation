<?php
/**
 * Delete a translation
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Draft;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\Translator;

class ApiContentTranslationDelete extends ApiBase {

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( $user->isBlocked() ) {
			$this->dieUsageMsg( 'blockedtext' );
		}

		$translator = new Translator( $user );
		$translation = Translation::find(
			$params['from'],
			$params['to'],
			$params['sourcetitle']
		);

		$translationId = $translation->translation['id'];
		if ( $translationId === null ||
			$translator->getGlobalUserId() !== intval( $translation->translation['lastUpdatedTranslator'] )
		) {
			// Translation does not exist or it belongs to another translator
			$this->dieUsageMsg( [ 'invalidtitle', $params['sourcetitle'] ] );
		}

		if ( $translation->translation['targetURL'] !== null ) {
			// Translation was once published. Don't delete, move it to published status.
			$translation->translation['status'] = 'published';
			$translation->update();
		} else {
			Translator::removeTranslation( $translationId );
			Translation::delete( $translationId );
			Draft::delete( $translationId );
			TranslationStorageManager::deleteTranslationUnits( $translationId );
		}
		$result = [
			'result' => 'success'
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ApiBase::PARAM_REQUIRED => true,
			],
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	/**
	 * @see ApiBase::getExamplesMessages()
	 */
	protected function getExamplesMessages() {
		return [
			'action=cxdelete&from=en&to=es&sourcetitle=Food' => 'apihelp-cxdelete-example-1'
		];
	}

}
