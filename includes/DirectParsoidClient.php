<?php
/**
 * Helper functions for using the REST interface to Parsoid.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use Exception;
use LocalizedException;
use MediaWiki\Language\RawMessage;
use MediaWiki\Page\PageIdentity;
use MediaWiki\Permissions\Authority;
use MediaWiki\Rest\Handler\Helper\HtmlInputTransformHelper;
use MediaWiki\Rest\Handler\Helper\HtmlOutputRendererHelper;
use MediaWiki\Rest\Handler\Helper\PageRestHelperFactory;
use MediaWiki\Rest\HttpException;
use MediaWiki\Rest\LocalizedHttpException;
use MediaWiki\Revision\MutableRevisionRecord;
use MediaWiki\Revision\RevisionRecord;
use MediaWiki\Revision\SlotRecord;
use MediaWiki\User\User;
use WikitextContent;

class DirectParsoidClient implements ParsoidClient {

	/**
	 * Requested Parsoid HTML version.
	 * Keep this in sync with the Accept: header in
	 * ve.init.mw.ArticleTargetLoader.js
	 */
	public const PARSOID_VERSION = '2.6.0';

	/** @var PageRestHelperFactory */
	private $helperFactory;

	/** @var Authority */
	private $performer;

	/**
	 * @param PageRestHelperFactory $helperFactory
	 * @param Authority $performer
	 */
	public function __construct(
		PageRestHelperFactory $helperFactory,
		Authority $performer
	) {
		$this->helperFactory = $helperFactory;
		$this->performer = $performer;
	}

	/**
	 * @param PageIdentity $page
	 * @param RevisionRecord|null $revision
	 *
	 * @return HtmlOutputRendererHelper
	 */
	private function getHtmlOutputRendererHelper(
		PageIdentity $page,
		RevisionRecord $revision = null
	): HtmlOutputRendererHelper {
		// TODO: remove this once we no longer need a User object for rate limiting (T310476).
		if ( $this->performer instanceof User ) {
			$user = $this->performer;
		} else {
			$user = User::newFromIdentity( $this->performer->getUser() );
		}
		$helper = $this->helperFactory->newHtmlOutputRendererHelper( $page, [], $user, null );

		if ( $revision ) {
			$helper->setRevision( $revision );
		}

		return $helper;
	}

	/**
	 * @param PageIdentity $page
	 * @param string $html
	 *
	 * @return HtmlInputTransformHelper
	 */
	private function getHtmlInputTransformHelper(
		PageIdentity $page,
		string $html
	): HtmlInputTransformHelper {
		// Fake REST body
		$body = [
			'html' => [
				'body' => $html,
			]
		];

		$helper = $this->helperFactory->newHtmlInputTransformHelper(
			[], $page, $body, [], null, null
		);

		return $helper;
	}

	/**
	 * @param PageIdentity $page
	 * @param string $wikitext
	 *
	 * @return RevisionRecord
	 */
	private function makeFakeRevision(
		PageIdentity $page,
		string $wikitext
	): RevisionRecord {
		$rev = new MutableRevisionRecord( $page );
		$rev->setId( 0 );
		$rev->setPageId( $page->getId() );

		$rev->setContent( SlotRecord::MAIN, new WikitextContent( $wikitext ) );

		return $rev;
	}

	/**
	 * Transform wikitext to HTML with Parsoid. Wrapper for ::postData().
	 *
	 * @param PageIdentity $page The page the content belongs to use as the parsing context
	 * @param string $wikitext The wikitext fragment to parse
	 *
	 * @return array An array mimicking a RESTbase server's response,
	 *   with keys 'code', 'reason', 'headers' and 'body'
	 */
	public function convertWikitextToHtml(
		PageIdentity $page,
		string $wikitext
	): array {
		$revision = $this->makeFakeRevision( $page, $wikitext );
		$helper = $this->getHtmlOutputRendererHelper( $page, $revision );

		try {
			$parserOutput = $helper->getHtml();
			$html = $parserOutput->getRawText();

			return $this->fakeRESTbaseHTMLResponse( $html, $helper );
		} catch ( HttpException $ex ) {
			return $this->fakeRESTbaseError( $ex );
		}
	}

	/**
	 * Transform HTML to wikitext with Parsoid
	 *
	 * @param PageIdentity $page The page the content belongs to
	 * @param string $html The HTML of the page to be transformed
	 *
	 * @return array The response, 'code', 'reason', 'headers' and 'body'
	 */
	public function convertHtmlToWikitext(
		PageIdentity $page, string $html
	): array {
		$helper = $this->getHtmlInputTransformHelper( $page, $html );

		try {
			$content = $helper->getContent();
			$format = $content->getDefaultFormat();

			return [
				'code' => 200,
				'headers' => [
					'Content-Type' => $format,
				],
				'body' => $content->serialize( $format ),
			];
		} catch ( HttpException $ex ) {
			return $this->fakeRESTbaseError( $ex );
		}
	}

	/**
	 * @param mixed $data
	 * @param HtmlOutputRendererHelper $helper
	 *
	 * @return array
	 */
	private function fakeRESTbaseHTMLResponse( $data, HtmlOutputRendererHelper $helper ): array {
		return [
			'code' => 200,
			'headers' => [
				'content-language' => $helper->getHtmlOutputContentLanguage(),
				'etag' => $helper->getETag()
			],
			'body' => $data,
		];
	}

	/**
	 * @param Exception $ex
	 *
	 * @return array
	 */
	private function fakeRESTbaseError( Exception $ex ): array {
		if ( $ex instanceof LocalizedHttpException ) {
			$msg = $ex->getMessageValue();
		} elseif ( $ex instanceof LocalizedException ) {
			$msg = $ex->getMessageObject();
		} else {
			$msg = new RawMessage( $ex->getMessage() );
		}

		return [
			'error' => [
				'message' => $msg->getKey() ?? '',
				'params' => $msg->getParams() ?? []
			],
			'headers' => [],
			'body' => $ex->getMessage(),
		];
	}
}
