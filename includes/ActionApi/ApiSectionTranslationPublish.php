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
use ContentTranslation\RestbaseClient;
use ContentTranslation\SiteMapper;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use MediaWiki\HookContainer\HookContainer;
use MediaWiki\Languages\LanguageNameUtils;
use Title;
use TitleFactory;
use User;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationPublish extends ApiBase {

	/** @var TitleFactory */
	private $titleFactory;

	/** @var HookContainer */
	private $hookContainer;

	/** @var LanguageNameUtils */
	private $languageNameUtils;

	/** @var RestbaseClient */
	protected $restbaseClient;

	/**
	 * @param ApiMain $main
	 * @param string $action
	 * @param TitleFactory $titleFactory
	 * @param HookContainer $hookContainer
	 * @param LanguageNameUtils $languageNameUtils
	 * @param RestbaseClient $restbaseClient
	 */
	public function __construct(
		ApiMain $main,
		$action,
		TitleFactory $titleFactory,
		HookContainer $hookContainer,
		LanguageNameUtils $languageNameUtils,
		RestbaseClient $restbaseClient
	) {
		parent::__construct( $main, $action );
		$this->titleFactory = $titleFactory;
		$this->hookContainer = $hookContainer;
		$this->languageNameUtils = $languageNameUtils;
		$this->restbaseClient = $restbaseClient;
	}

	/**
	 * Attempt to save a given page's wikitext to MediaWiki's storage layer via its API
	 *
	 * @param Title $title The title of the page to write
	 * @param string $wikitext The wikitext to write
	 * @param array $params The edit parameters
	 * @return mixed The result of the save attempt
	 */
	protected function saveWikitext( Title $title, string $wikitext, array $params ) {
		[ 'sourcelanguage' => $from, 'sourcerevid' => $sourceRevId, 'sourcetitle' => $sourceTitle ] = $params;
		$sectionNumber = $params['sectionnumber'];
		$sourceLink = "[[:{$from}:Special:Redirect/revision/{$sourceRevId}|{$sourceTitle}]]";

		// if the published section is a lead section, the summary should be slightly different
		if ( $sectionNumber === "0" ) {
			$summary = $this->msg(
				'cx-sx-publish-lead-section-summary',
				$sourceLink
			)->inContentLanguage()->text();
		} else {
			$summary = $this->msg(
				'cx-sx-publish-summary',
				$params['sourcesectiontitle'],
				$sourceLink
			)->inContentLanguage()->text();
		}

		$apiParams = [
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'text' => $wikitext,
			'summary' => $summary,
			'sectiontitle' => $params['targetsectiontitle'],
			'section' => $sectionNumber,
			'captchaid' => $params['captchaid'],
			'captchaword' => $params['captchaword'],
		];

		// Pass any unrecognized query parameters to the internal action=edit API request.
		$allowedParams = array_diff_key(
			$this->getRequest()->getValues(),
			$this->getAllowedParams(),
			$this->getMain()->getAllowedParams()
		);

		$api = new \ApiMain(
			new \DerivativeRequest(
				$this->getRequest(),
				$apiParams + $allowedParams,
				/* was posted? */ true
			),
			/* enable write? */ true
		);

		$api->execute();

		return $api->getResult()->getResultData();
	}

	protected function getTags() {
		return [
			'contenttranslation',
			'sectiontranslation'
		];
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
		$targetTitle = $this->titleFactory->newFromText( $params['title'] );
		if ( !$targetTitle ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $params['title'] ) ] );
		}

		$targetLanguage = $params['targetlanguage'];

		$hookRunner = new ContentTranslationHookRunner( $this->hookContainer );
		'@phan-var \Title $targetTitle';
		$hookRunner->onSectionTranslationBeforePublish( $targetTitle, $targetLanguage, $this->getUser() );

		$html = $params['html'];
		$wikitext = null;
		try {
			$wikitext = $this->restbaseClient->convertHtmlToWikitext(
				$targetTitle,
				$html
			);
		} catch ( \MWException $e ) {
			$this->dieWithError(
				[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		}

		$saveresult = $this->saveWikitext( $targetTitle, $wikitext, $params );
		$editStatus = $saveresult['edit']['result'];

		if ( $editStatus === 'Success' ) {
			// Add the tags post-send, after RC row insertion
			$tags = $this->getTags();
			$newRevId = intval( $saveresult['edit']['newrevid'] );
			\DeferredUpdates::addCallableUpdate( static function () use ( $newRevId, $tags ) {
				\ChangeTags::addTags( $tags, null, $newRevId, null );
			} );

			[ 'sourcelanguage' => $from, 'targetlanguage' => $to,'sourcetitle' => $sourceTitle ] = $params;
			$translation = $this->getExistingTranslation( $from, $to, $sourceTitle );
			if ( $translation === null ) {
				$this->dieWithError( 'apierror-cxpublishsection-translationnotfound', 'translationnotfound' );
			}

			// if translation exists update the "translation_target_revision_id" field for this row
			'@phan-var Translation $translation';
			$this->updateTranslation( $translation, $this->getUser(), $newRevId, $params['title'], $targetLanguage );

			$result = [
				'result' => 'success',
				'edit' => $saveresult['edit'],
				'translationid' => $translation->getTranslationId()
			];

			// newrevid can be unset when publishing already present sections with the exact same
			// contents as the current revision
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				// Add the tags post-send, after RC row insertion
				$tags = $this->getTags();
				$revId = intval( $saveresult['edit']['newrevid'] );
				\DeferredUpdates::addCallableUpdate( static function () use ( $revId, $tags ) {
					\ChangeTags::addTags( $tags, null, $revId, null );
				} );
			}
		} else {
			$result = [
				'result' => 'error',
				'edit' => $saveresult['edit']
			];
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * This method finds a translation inside "cx_translations" table, that corresponds
	 * to the source/target languages, the source title and the user of the published
	 * translation, and returns it. If no such translation exists, the method returns null.
	 *
	 * @param string $from
	 * @param string $to
	 * @param string $sourceTitle
	 * @return Translation|null
	 */
	private function getExistingTranslation( string $from, string $to, string $sourceTitle ): ?Translation {
		$translator = new Translator( $this->getUser() );
		$work = new TranslationWork( $sourceTitle, $from, $to );
		return Translation::findForTranslator( $work, $translator );
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
		$translator = new Translator( $user );
		$translation->translation['status'] = 'published';
		$translation->translation['translation_target_url'] = $this->createTargetUrl(
			$user,
			$targetTitle,
			$targetLanguage
		);
		$translation->translation['targetRevisionId'] = $newRevId;
		$translation->save( $translator );
	}

	/**
	 * Given the target page title as a string and the target language of the translation,
	 * this method returns a string containing the URL of the target page.
	 *
	 * @param User $user
	 * @param string $targetTitleRaw
	 * @param string $targetLanguage
	 * @return string
	 */
	private function createTargetUrl( User $user, string $targetTitleRaw, string $targetLanguage ): string {
		$contentTranslationTranslateInTarget = $this->getConfig()->get( 'ContentTranslationTranslateInTarget' );
		if ( $contentTranslationTranslateInTarget ) {
			$targetPage = SiteMapper::getTargetTitle( $targetTitleRaw, $user->getName() );
			return SiteMapper::getPageURL( $targetLanguage, $targetPage );
		}
		$targetTitle = $this->titleFactory->newFromText( $targetTitleRaw );
		return $targetTitle->getCanonicalURL();
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
			'sectionnumber' => [
				ParamValidator::PARAM_REQUIRED => false,
				ParamValidator::PARAM_DEFAULT => 'new',
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
