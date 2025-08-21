<?php
/**
 * Saving a section to an existing wikipage, created using Section translation feature of ContentTranslation.
 * The following special things happen when the page is created:
 * - HTML from the translation editor's contenteditable is converted to wiki syntax using Parsoid.
 * - A change tag is added.
 * - The edit summary shows a link to the revision from which the translation was made.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\ContentTranslationHookRunner;
use ContentTranslation\Exception\HtmlToWikitextConversionException;
use ContentTranslation\Exception\SectionWikitextRetrievalException;
use ContentTranslation\LogNames;
use ContentTranslation\SectionAction;
use ContentTranslation\Service\SandboxTitleMaker;
use ContentTranslation\Service\SectionContentEvaluator;
use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\TranslationTargetUrlCreator;
use ContentTranslation\Service\UserPermissionChecker;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use Exception;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use MediaWiki\Api\ApiUsageException;
use MediaWiki\ChangeTags\ChangeTagsStore;
use MediaWiki\Deferred\DeferredUpdates;
use MediaWiki\HookContainer\HookContainer;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\Logger\LoggerFactory;
use MediaWiki\Request\DerivativeRequest;
use MediaWiki\Title\Title;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;
use Psr\Log\LoggerInterface;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationPublish extends ApiBase {
	private LoggerInterface $logger;

	public function __construct(
		ApiMain $main,
		string $action,
		private readonly TitleFactory $titleFactory,
		private readonly HookContainer $hookContainer,
		private readonly LanguageNameUtils $languageNameUtils,
		private readonly SectionContentEvaluator $sectionContentEvaluator,
		private readonly SectionPositionCalculator $sectionPositionCalculator,
		private readonly SandboxTitleMaker $sandboxTitleMaker,
		private readonly SectionTranslationStore $sectionTranslationStore,
		private readonly TranslationStore $translationStore,
		private readonly TranslationTargetUrlCreator $targetUrlCreator,
		private readonly UserPermissionChecker $userPermissionChecker,
		private readonly ChangeTagsStore $changeTagsStore
	) {
		parent::__construct( $main, $action );
		$this->logger = LoggerFactory::getInstance( LogNames::MAIN );
	}

	/**
	 * @param string $sourceLanguage
	 * @param string $sourceRevId
	 * @param string $sourceTitle
	 * @param SectionAction $sectionAction
	 * @param string $sourceSectionTitle
	 * @return string
	 */
	private function getPublishSummary(
		string $sourceLanguage,
		string $sourceRevId,
		string $sourceTitle,
		SectionAction $sectionAction,
		string $sourceSectionTitle
	): string {
		$sourceLink = "[[:{$sourceLanguage}:Special:Redirect/revision/{$sourceRevId}|{$sourceTitle}]]";
		// if the published section is a lead section, the summary should be slightly different
		if ( $sectionAction === SectionAction::CREATE_LEAD_SECTION ) {
			$message = $this->msg( 'cx-sx-publish-lead-section-summary', $sourceLink );
		} else {
			$message = $this->msg( 'cx-sx-publish-summary', $sourceSectionTitle, $sourceLink );
		}

		return $message->inContentLanguage()->text();
	}

	/**
	 * Attempt to save a given page's wikitext to MediaWiki's storage layer via its API
	 *
	 * @param Title $title The title of the page to write
	 * @param string $wikitext The wikitext to write
	 * @param int|string $sectionNumber
	 * @return mixed The result of the save attempt
	 * @throws ApiUsageException
	 */
	protected function submitEditAction( Title $title, string $wikitext, $sectionNumber ) {
		$params = $this->extractRequestParams();
		[ 'sourcelanguage' => $from, 'sourcerevid' => $sourceRevId, 'sourcetitle' => $sourceTitle ] = $params;
		$existingSectionTitle = $params['existingsectiontitle'];
		$sectionAction = SectionAction::fromData( $sectionNumber, $existingSectionTitle );
		$summary = $this->getPublishSummary(
			$from,
			$sourceRevId,
			$sourceTitle,
			$sectionAction,
			$params['sourcesectiontitle']
		);

		$apiParams = [
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'summary' => $summary,
			'sectiontitle' => $params['targetsectiontitle'],
			'section' => $sectionNumber,
			'captchaid' => $params['captchaid'],
			'captchaword' => $params['captchaword'],
		];

		if ( $sectionAction === SectionAction::CREATE_NUMBERED_SECTION ) {
			$apiParams['prependtext'] = $wikitext;
		} else {
			$apiParams['text'] = $wikitext;
		}

		// Pass any unrecognized query parameters to the internal action=edit API request.
		$allowedParams = array_diff_key(
			$this->getRequest()->getValues(),
			$this->getAllowedParams(),
			$this->getMain()->getAllowedParams()
		);
		$api = new ApiMain(
			new DerivativeRequest(
				$this->getRequest(),
				$apiParams + $allowedParams,
				/* was posted? */ true
			),
			/* enable write? */ true
		);
		$api->execute();
		return $api->getResult()->getResultData();
	}

	/**
	 * @throws ApiUsageException
	 */
	public function execute() {
		$params = $this->extractRequestParams();

		$block = $this->getUser()->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['sourcelanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['targetlanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		if ( trim( $params['html'] ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'html' ], 'invalidhtml' );
		}

		// Check user group publishing requirements
		if (
			!$this->userPermissionChecker->checkUserCanPublish(
				$this->getUser(),
				$params['title'],
				$params['issandbox'] ?? false
			)
		) {
			$this->dieWithError( 'apierror-cx-publish-usergroup-required', 'usergroup-required' );
		}

		$this->publish();
	}

	public function publish() {
		$params = $this->extractRequestParams();

		$targetTitleRaw = $params['title'];
		$isSandbox = $params['issandbox'];
		$user = $this->getUser();
		if ( $isSandbox ) {
			$targetTitle = $this->sandboxTitleMaker->makeSandboxTitle( $user, $targetTitleRaw );
		} else {
			$targetTitle = $this->titleFactory->newFromText( $targetTitleRaw );
		}

		if ( !$targetTitle ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $targetTitleRaw ) ] );
		}

		$hookRunner = new ContentTranslationHookRunner( $this->hookContainer );
		$targetLanguage = $params['targetlanguage'];
		'@phan-var Title $targetTitle';
		$hookRunner->onSectionTranslationBeforePublish( $targetTitle, $targetLanguage, $user );

		$existingTargetSectionTitle = $params['existingsectiontitle'];
		$sourceSectionTitle = $params['sourcesectiontitle'];
		$sourceLanguage = $params['sourcelanguage'];
		$sourceTitle = $params['sourcetitle'];
		$sectionNumber = $this->sectionPositionCalculator->calculateSectionPosition(
			$targetTitle,
			$targetLanguage,
			$isSandbox,
			$sourceLanguage,
			$sourceTitle,
			$sourceSectionTitle,
			$existingTargetSectionTitle,
		);

		$targetSectionTitle = $params['targetsectiontitle'];
		try {
			$editResult = $this->saveWikitext(
				$params['html'],
				$targetTitle,
				$sectionNumber,
				$targetSectionTitle,
				$existingTargetSectionTitle
			);
		} catch ( ApiUsageException $e ) {
			throw $e;
		} catch ( Exception $e ) {
			$this->logger->error(
				'Error when publishing section {targetTitle}, {exception}',
				[
					'targetTitle' => $targetTitle->getPrefixedDBkey(),
					'exception' => $e->getMessage(),
				]
			);

			throw $e;
		}

		$editStatus = $editResult['result'];

		if ( $editStatus === 'Success' ) {
			[ 'sourcelanguage' => $sourceLanguage, 'sourcetitle' => $sourceTitle ] = $params;
			$result = [
				'result' => 'success',
				'edit' => $editResult,
				'targettitle' => $targetTitle->getPrefixedDBkey(),
				'targeturl' => $this->targetUrlCreator->createUrlForSXRedirection(
					$targetTitle->getPrefixedDBkey(),
					$targetLanguage,
					$sourceLanguage,
					$sourceTitle,
					$targetSectionTitle
				)
			];
			// newrevid can be unset when publishing already present sections with the exact same
			// contents as the current revision
			if ( isset( $editResult['newrevid'] ) ) {
				// Add the tags post-send, after RC row insertion
				$newRevId = intval( $editResult['newrevid'] );
				$this->storeTags( $newRevId );

				$translation = $this->translationStore->findTranslationByUser(
					$user,
					$sourceTitle,
					$sourceLanguage,
					$targetLanguage,
				);

				if ( $translation === null ) {
					$this->dieWithError( 'apierror-cxpublishsection-translationnotfound', 'translationnotfound' );
				}

				// if translation exists update the "translation_target_revision_id" field for this row
				'@phan-var Translation $translation';
				$this->updateTranslation(
					$translation,
					$user,
					$newRevId,
					$targetTitle->getPrefixedDBkey(),
					$targetLanguage
				);

				$publishedStatusIndex = SectionTranslationStore::getStatusIndexByStatus(
					SectionTranslationStore::TRANSLATION_STATUS_PUBLISHED
				);
				$this->sectionTranslationStore->updateTranslationStatusById(
					$params['sectiontranslationid'],
					$publishedStatusIndex
				);
			}
		} else {
			$result = [
				'result' => 'error',
				'edit' => $editResult
			];

			// Don't bother logging captcha related errors
			// ApiContentTranslationPublish::saveWikiText returns the API response directly, whereas
			// ApiSectionTranslationPublish::saveWikiText returns 'edit' property from API response.
			if ( !isset( $editResult['captcha'] ) ) {
				$this->logger->error(
					'Error when publishing section {targetTitle}',
					[
						'targetTitle' => $targetTitle->getPrefixedDBkey(),
						'editResult' => json_encode( $editResult, JSON_PRETTY_PRINT ),
					]
				);
			}
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * Given the HTML of the published translation and the target page title (as a Title instance),
	 * this method uses the ParsoidClient service to convert the HTML to wikitext and calls
	 * the "submitEditAction" method to save the wikitext to MediaWiki's storage layer via its API.
	 *
	 * @param string $html
	 * @param Title $targetTitle
	 * @param int|string $sectionNumber
	 * @param string $targetSectionTitle
	 * @param string|null $existingSectionTitle
	 * @return mixed
	 * @throws ApiUsageException
	 */
	private function saveWikitext(
		string $html,
		Title $targetTitle,
		$sectionNumber,
		string $targetSectionTitle,
		?string $existingSectionTitle = null
	) {
		$sectionAction = SectionAction::fromData( $sectionNumber, $existingSectionTitle );
		try {
			$wikitext = $this->sectionContentEvaluator->calculateSectionContent(
				$html,
				$targetTitle,
				$sectionAction,
				$targetSectionTitle,
				$existingSectionTitle
			);
		} catch ( HtmlToWikitextConversionException $e ) {
			$this->logger->error(
				'Error when converting section HTML to Wikitext using ParsoidClient for {targetTitle}, {errorMessage}',
				[
					'errorMessage' => $e->getMessage(),
					'targetTitle' => $targetTitle->getPrefixedDBkey(),
				]
			);
			$this->dieWithError(
				[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		} catch ( SectionWikitextRetrievalException $e ) {
			$this->logger->error(
				'Error while retrieving wikitext of {targetTitle}:{sectionTitle}. {errorMessage}.',
				[
					'targetTitle' => $targetTitle->getPrefixedDBkey(),
					'sectionTitle' => $existingSectionTitle,
					'errorMessage' => $e->getMessage(),
				]
			);
			$this->dieWithError(
				[ 'apierror-cx-wikitext-retrieval-exception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		}
		$editResult = $this->submitEditAction( $targetTitle, $wikitext, $sectionNumber );
		return $editResult['edit'];
	}

	/**
	 * Given a new target revision id, this method adds a deferred update to be executed at the end
	 * of the current request. This update adds the "contenttranslation" and "sectiontranslation" tags
	 * to the given revision.
	 *
	 * @param int $newRevId
	 * @return void
	 */
	private function storeTags( int $newRevId ) {
		$tags = [
			'contenttranslation',
			'sectiontranslation'
		];
		DeferredUpdates::addCallableUpdate( function () use ( $newRevId, $tags ) {
			$this->changeTagsStore->addTags( $tags, null, $newRevId, null );
		} );
	}

	/**
	 * Given an existing Translation model and a new target revision id, this method updates the target
	 * revision id for this model and saves the corresponding row inside "cx_translations" table.
	 *
	 * @param Translation $translation
	 * @param User $user
	 * @param int $newRevId
	 * @param string $targetTitle
	 * @param string $targetLanguage
	 * @return void
	 */
	private function updateTranslation(
		Translation $translation,
		User $user,
		int $newRevId,
		string $targetTitle,
		string $targetLanguage
	): void {
		$translation->translation['status'] = TranslationStore::TRANSLATION_STATUS_PUBLISHED;
		$translation->translation['targetURL'] = $this->targetUrlCreator->createTargetUrl(
			$targetTitle,
			$targetLanguage
		);
		$translation->translation['targetRevisionId'] = $newRevId;
		$this->translationStore->saveTranslation( $translation, $user );
	}

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'title' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'html' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcelanguage' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'targetlanguage' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcerevid' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcesectiontitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'targetsectiontitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sectiontranslationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'issandbox' => [
				ParamValidator::PARAM_TYPE => 'boolean',
				ParamValidator::PARAM_REQUIRED => false,
			],
			'existingsectiontitle' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => false,
			],
			'captchaid' => null,
			'captchaword' => null,
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
