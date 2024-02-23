<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\LoadBalancer;
use ContentTranslation\Service\TranslationSplitter;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use Wikimedia\ParamValidator\ParamValidator;

/**
 * Action API module that is used to split a content translation
 * into section translations.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2024.01
 */
class ApiContentTranslationSplit extends ApiBase {
	private TranslationSplitter $translationSplitter;
	private TranslationStore $translationStore;
	private SectionTranslationStore $sectionTranslationStore;
	private LoadBalancer $loadBalancer;

	public function __construct(
		ApiMain $mainModule,
		$action,
		LoadBalancer $loadBalancer,
		TranslationSplitter $translationSplitter,
		TranslationStore $translationStore,
		SectionTranslationStore $sectionTranslationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->loadBalancer = $loadBalancer;
		$this->translationSplitter = $translationSplitter;
		$this->translationStore = $translationStore;
		$this->sectionTranslationStore = $sectionTranslationStore;
	}

	/**
	 * @return void
	 * @throws \ApiUsageException
	 */
	private function validateRequest(): void {
		if ( $this->loadBalancer->getConnection( DB_PRIMARY )->isReadOnly() ) {
			$this->dieReadOnly();
		}

		$user = $this->getUser();

		if ( !$user->isNamed() ) {
			$this->dieWithError( 'apierror-cxsplit-anon-user' );
		}

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}
	}

	/**
	 * @throws \ApiUsageException
	 */
	public function execute() {
		$this->validateRequest();

		$params = $this->extractRequestParams();
		$translationId = $params['translationid'];
		$user = $this->getUser();

		$translation = $this->translationStore->findByUserAndId( $user, $translationId );

		if ( !$translation ) {
			$this->dieWithError( 'apierror-cxsplit-no-translation-found' );
		}
		$newSectionTranslations = $this->translationSplitter->splitIntoSectionTranslations(
			$translation
		);
		$this->sectionTranslationStore->insertMultipleTranslations( $newSectionTranslations );

		$result = [ 'result' => 'success' ];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return [
			'translationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			]
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	public function isInternal() {
		return true;
	}
}
