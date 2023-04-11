<?php
/**
 * Delete a section translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationDelete extends ApiBase {
	/** @var TranslationCorporaStore */
	private $corporaStore;

	/** @var TranslationStore */
	private TranslationStore $translationStore;

	/** @var SectionTranslationStore */
	private SectionTranslationStore $sectionTranslationStore;

	public function __construct(
		ApiMain $mainModule, $action,
		TranslationCorporaStore $corporaStore,
		SectionTranslationStore $sectionTranslationStore,
		TranslationStore $translationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaStore = $corporaStore;
		$this->translationStore = $translationStore;
		$this->sectionTranslationStore = $sectionTranslationStore;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		$sectionTranslationId = $params['sectiontranslationid'];
		$translationId = $params['translationid'];
		$sectionId = $params['sectionid'];
		// delete all corpora translation units associated with this draft section translation
		$this->corporaStore->deleteTranslationDataBySectionId( $translationId, $sectionId );
		// delete the section translation from the database
		$this->sectionTranslationStore->deleteTranslationById( $sectionTranslationId );

		// if no other corpora units are associated with the "parent" translation id, update the
		// status of the "parent" translation to "deleted" and remove the association with the
		// current translator from inside the "cx_translators" table
		if ( !$this->corporaStore->countByTranslationId( $translationId ) ) {
			$this->translationStore->unlinkTranslationFromTranslator( $translationId );
			$this->translationStore->deleteTranslation( $translationId );
		}

		$result = [ 'result' => 'success' ];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return [
			'sectiontranslationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'translationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sectionid' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
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
	 * @return array
	 */
	protected function getExamplesMessages() {
		return [
			'action=sxdelete&translationid=1&sectionid=100_20' => 'apihelp-sxdelete-example-1'
		];
	}

}
