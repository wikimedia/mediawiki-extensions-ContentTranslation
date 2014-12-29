<?php
/**
 * Delete a translation
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
class ApiContentTranslationDelete extends ApiBase {

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();
		$translator = new ContentTranslation\Translator( $user );
		$translation = ContentTranslation\Translation::find(
			$params['from'],
			$params['to'],
			$params['sourcetitle']
		);
		$translation = $translation->translation;
		$translationId = $translation['id'];
		if ( $translationId === null ||
			$translator->getGlobalUserId() !== intval( $translation['startedTranslator'] ) ) {
			// Translation does not exist or belong to another translator
			$this->dieUsageMsg( 'invalidtitle', $params['sourcetitle'] );
		}
		ContentTranslation\Translator::removeTranslation( $translationId );
		ContentTranslation\Translation::delete( $translationId );
		ContentTranslation\Draft::delete( $translationId );
		$result = array(
			'result' => 'success'
		);
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return array(
			'token' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'from' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'to' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcetitle' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
		);
	}

	public function needsToken() {
		return 'csrf';
	}

	public function getTokenSalt() {
		return '';
	}

	public function mustBePosted() {
		return true;
	}

	public function isWriteMode() {
		return true;
	}

	/**
	 * @see ApiBase::getExamplesMessages()
	 */
	protected function getExamplesMessages() {
		return array(
			'action=cxdelete&from=en&to=es&sourcetitle=Food' => 'apihelp-cxdelete-example-1'
		);
	}

}
