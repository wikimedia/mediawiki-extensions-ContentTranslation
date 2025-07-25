<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use ContentTranslation\Service\TranslationSplitter;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use MediaWiki\Api\ApiUsageException;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\Rdbms\IConnectionProvider;

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
	private IConnectionProvider $connectionProvider;

	public function __construct(
		ApiMain $mainModule,
		string $action,
		IConnectionProvider $connectionProvider,
		TranslationSplitter $translationSplitter,
		TranslationStore $translationStore,
		SectionTranslationStore $sectionTranslationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->connectionProvider = $connectionProvider;
		$this->translationSplitter = $translationSplitter;
		$this->translationStore = $translationStore;
		$this->sectionTranslationStore = $sectionTranslationStore;
	}

	/**
	 * @return void
	 * @throws ApiUsageException
	 */
	private function validateRequest(): void {
		if ( $this->connectionProvider->getPrimaryDatabase()->isReadOnly() ) {
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
	 * @throws ApiUsageException
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

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'translationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			]
		];
	}

	/** @inheritDoc */
	public function needsToken() {
		return 'csrf';
	}

	/** @inheritDoc */
	public function isWriteMode() {
		return true;
	}

	/** @inheritDoc */
	public function isInternal() {
		return true;
	}
}
