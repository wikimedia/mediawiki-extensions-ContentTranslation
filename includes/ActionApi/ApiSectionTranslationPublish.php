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
use MediaWiki\HookContainer\HookContainer;
use MediaWiki\MediaWikiServices;
use Title;
use TitleFactory;
use Wikimedia\ParamValidator\ParamValidator;

class ApiSectionTranslationPublish extends ApiBase {

	/** @var RestbaseClient */
	protected $restbaseClient;

	/** @var TitleFactory */
	private $titleFactory;

	/** @var HookContainer */
	private $hookContainer;

	/**
	 * @param ApiMain $main
	 * @param string $action
	 * @param TitleFactory $titleFactory
	 * @param HookContainer $hookContainer
	 */
	public function __construct( ApiMain $main, $action, TitleFactory $titleFactory, HookContainer $hookContainer ) {
		parent::__construct( $main, $action );
		$this->titleFactory = $titleFactory;
		$this->hookContainer = $hookContainer;
		$config = $this->getConfig();
		$this->restbaseClient = new RestbaseClient( $config );
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
		$sourceLink = "[[:{$from}:Special:Redirect/revision/{$sourceRevId}|{$sourceTitle}]]";

		$summary = $this->msg(
			'cx-sx-publish-summary',
			$params['sourcesectiontitle'],
			$sourceLink
		)->inContentLanguage()->text();

		$apiParams = [
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'text' => $wikitext,
			'summary' => $summary,
			'sectiontitle' => $params['targetsectiontitle'],
			'section' => $params['sectionnumber'],
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
		$languageNameUtils = MediaWikiServices::getInstance()->getLanguageNameUtils();

		$block = $this->getUser()->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( !$languageNameUtils->isKnownLanguageTag( $params['sourcelanguage'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$languageNameUtils->isKnownLanguageTag( $params['targetlanguage'] ) ) {
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
			$result = [
				'result' => 'success',
				'edit' => $saveresult['edit']
			];
			// Add the tags post-send, after RC row insertion
			$tags = $this->getTags();
			$revId = intval( $saveresult['edit']['newrevid'] );
			\DeferredUpdates::addCallableUpdate( static function () use ( $revId, $tags ) {
				\ChangeTags::addTags( $tags, null, $revId, null );
			} );
		} else {
			$result = [
				'result' => 'error',
				'edit' => $saveresult['edit']
			];
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return [
			'title' => [
				\ApiBase::PARAM_REQUIRED => true,
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
