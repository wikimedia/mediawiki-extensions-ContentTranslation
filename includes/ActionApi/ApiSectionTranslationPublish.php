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

use ApiBase;
use ApiMain;
use ContentTranslation\ContentTranslationHookRunner;
use ContentTranslation\ParsoidClient;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\Service\SandboxTitleMaker;
use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\TranslationTargetUrlCreator;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use Exception;
use MediaWiki\Deferred\DeferredUpdates;
use MediaWiki\HookContainer\HookContainer;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\Request\DerivativeRequest;
use MediaWiki\Title\Title;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\User;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationPublish extends ApiBase {

	private TitleFactory $titleFactory;
	private HookContainer $hookContainer;
	private LanguageNameUtils $languageNameUtils;
	protected ParsoidClientFactory $parsoidClientFactory;
	private SectionPositionCalculator $sectionPositionCalculator;
	private SandboxTitleMaker $sandboxTitleMaker;
	private SectionTranslationStore $sectionTranslationStore;
	private TranslationStore $translationStore;
	private TranslationTargetUrlCreator $targetUrlCreator;

	/**
	 * @param ApiMain $main
	 * @param string $action
	 * @param TitleFactory $titleFactory
	 * @param HookContainer $hookContainer
	 * @param LanguageNameUtils $languageNameUtils
	 * @param ParsoidClientFactory $parsoidClientFactory
	 * @param SectionPositionCalculator $sectionPositionCalculator
	 * @param SandboxTitleMaker $sandboxTitleMaker
	 * @param SectionTranslationStore $sectionTranslationStore
	 * @param TranslationStore $translationStore
	 * @param TranslationTargetUrlCreator $targetUrlCreator
	 */
	public function __construct(
		ApiMain $main,
		$action,
		TitleFactory $titleFactory,
		HookContainer $hookContainer,
		LanguageNameUtils $languageNameUtils,
		ParsoidClientFactory $parsoidClientFactory,
		SectionPositionCalculator $sectionPositionCalculator,
		SandboxTitleMaker $sandboxTitleMaker,
		SectionTranslationStore $sectionTranslationStore,
		TranslationStore $translationStore,
		TranslationTargetUrlCreator $targetUrlCreator
	) {
		parent::__construct( $main, $action );
		$this->titleFactory = $titleFactory;
		$this->hookContainer = $hookContainer;
		$this->languageNameUtils = $languageNameUtils;
		$this->parsoidClientFactory = $parsoidClientFactory;
		$this->sectionPositionCalculator = $sectionPositionCalculator;
		$this->sandboxTitleMaker = $sandboxTitleMaker;
		$this->sectionTranslationStore = $sectionTranslationStore;
		$this->translationStore = $translationStore;
		$this->targetUrlCreator = $targetUrlCreator;
	}

	protected function getParsoidClient(): ParsoidClient {
		return $this->parsoidClientFactory->createParsoidClient();
	}

	/**
	 * @param string $sourceLanguage
	 * @param string $sourceRevId
	 * @param string $sourceTitle
	 * @param bool $isLeadSection
	 * @param string $sourceSectionTitle
	 * @return string
	 */
	private function getPublishSummary(
		string $sourceLanguage,
		string $sourceRevId,
		string $sourceTitle,
		bool $isLeadSection,
		string $sourceSectionTitle
	): string {
		$sourceLink = "[[:{$sourceLanguage}:Special:Redirect/revision/{$sourceRevId}|{$sourceTitle}]]";
		// if the published section is a lead section, the summary should be slightly different
		if ( $isLeadSection ) {
			return $this->msg(
				'cx-sx-publish-lead-section-summary',
				$sourceLink
			)->inContentLanguage()->text();
		} else {
			return $this->msg(
				'cx-sx-publish-summary',
				$sourceSectionTitle,
				$sourceLink
			)->inContentLanguage()->text();
		}
	}

	/**
	 * Attempt to save a given page's wikitext to MediaWiki's storage layer via its API
	 *
	 * @param Title $title The title of the page to write
	 * @param string $wikitext The wikitext to write
	 * @param int|string $sectionNumber
	 * @return mixed The result of the save attempt
	 * @throws \ApiUsageException
	 */
	protected function submitEditAction( Title $title, string $wikitext, $sectionNumber ) {
		$params = $this->extractRequestParams();
		[ 'sourcelanguage' => $from, 'sourcerevid' => $sourceRevId, 'sourcetitle' => $sourceTitle ] = $params;
		$isLeadSection = $sectionNumber === 0;
		$summary = $this->getPublishSummary(
			$from,
			$sourceRevId,
			$sourceTitle,
			$isLeadSection,
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

		if ( (int)$sectionNumber > 0 ) {
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
	 * @throws \ApiUsageException
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

		$sectionNumber = $this->sectionPositionCalculator->calculateSectionPosition(
			$targetTitle,
			$targetLanguage,
			$isSandbox
		);

		$targetSectionTitle = $params['targetsectiontitle'];
		$editResult = $this->saveWikitext( $params['html'], $targetTitle, $sectionNumber, $targetSectionTitle );
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
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * Given the HTML of the published translation and the target page title (as a Title instance),
	 * this method uses the RestbaseClient service to convert the HTML to wikitext and calls
	 * the "submitEditAction" method to save the wikitext to MediaWiki's storage layer via its API.
	 *
	 * @param string $html
	 * @param Title $targetTitle
	 * @param int|string $sectionNumber
	 * @param string $targetSectionTitle
	 * @return mixed
	 * @throws \ApiUsageException
	 */
	private function saveWikitext( string $html, Title $targetTitle, $sectionNumber, string $targetSectionTitle ) {
		// When the section number is a positive integer, it means that the section needs to be positioned
		// before the first appendix section. In those cases, we need to prepend the target section title
		// to the HTML that is being published
		if ( (int)$sectionNumber > 0 ) {
			$html = $this->prependSectionTitle( $html, $targetSectionTitle );
		}
		$wikitext = null;
		try {
			$wikitext = $this->getParsoidClient()->convertHtmlToWikitext(
				$targetTitle,
				$html
			)['body'];
		} catch ( Exception $e ) {
			$this->dieWithError(
				[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		}
		$editResult = $this->submitEditAction( $targetTitle, $wikitext, $sectionNumber );
		return $editResult['edit'];
	}

	/**
	 * This method prepends the target section title to the HTML that is being published.
	 * Used for sections that need to be prepended to the first appendix section of the
	 * target article.
	 * @param string $html
	 * @param string $sectionTitle
	 * @return string
	 */
	private function prependSectionTitle( string $html, string $sectionTitle ): string {
		// add empty line to the end of HTML string, so that the first appendix section title goes into the next line
		return "<h2>$sectionTitle</h2>\n$html\n";
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
		DeferredUpdates::addCallableUpdate( static function () use ( $newRevId, $tags ) {
			\ChangeTags::addTags( $tags, null, $newRevId, null );
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
			'captchaid' => null,
			'captchaword' => null,
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
