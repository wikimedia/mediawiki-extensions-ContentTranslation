<?php
/**
 * Contains the abstract class SpecialContentTranslationPage that is used as common
 * parent class for classes that display special pages:
 * Special:ContentTranslation and
 * Special:ContentTranslationStats
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

use MediaWiki\MediaWikiServices;

/**
 * @ingroup SpecialPage
 */
abstract class ContentTranslationSpecialPage extends SpecialPage {
	final public function execute( $parameters ) {
		global $wgULSPosition;
		$out = $this->getOutput();

		if ( !$this->canUserProceed() ) {
			return;
		}

		if ( $this->isVueDashboard() ) {
			parent::execute( $parameters );
			// Use custom 'contenttranslation' skin
			$skinFactory = MediaWikiServices::getInstance()->getSkinFactory();
			/** @var MutableContext $context */
			$context = $out->getContext();
			'@phan-var MutableContext $context';
			$context->setSkin(
				$skinFactory->makeSkin( 'contenttranslation' )
			);
			// Enforce mobile target for all devices to support
			// mobile-first design.
			$out->setTarget( 'mobile' );
			$out->addHTML( Html::element(
				'div',
				[ 'id' => 'contenttranslation' ]
			) );
			// Run the extendable chunks from the sub class.
			$this->initModules();
			$this->addJsConfigVars();
		} else {
			$out = $this->getOutput();
			$skin = $this->getSkin();

			// Since we are essentially a custom skin, trick ULS to appear in the personal bar
			$wgULSPosition = 'personal';

			$this->setHeaders();
			$out->setArticleBodyOnly( true );

			// Preloading to avoid FOUC
			$out->addModuleStyles( 'mw.cx.ui.Header.skin' );
			// Run the extendable chunks from the sub class.
			$this->initModules();
			$this->addJsConfigVars();

			// Based on OutputPage::output, which will still get called for real.
			// The below is a copy of its non-ArticleBodyOnly branch only.
			$out->loadSkinModules( $skin );
			Hooks::runWithoutAbort( 'BeforePageDisplay', [ &$out, &$skin ] );

			// Substitute for BaseTemplate::execute, based on VectorTemplate::execute.
			$this->createHeaderHtml();
			// Based on BaseTemplate::getTrail
			$out->addHTML( MWDebug::getDebugHTML( $this->getContext() ) );
			$out->addHTML( $skin->bottomScripts() );
			$out->addHTML( '</body></html>' );
		}
	}

	/**
	 * Check whether the current page is the new Vue dashboard.
	 *
	 * @return boolean True if page is vue dashboard
	 */
	abstract protected function isVueDashboard();

	/**
	 * Check whether user can proceed to the page.
	 *
	 * @return boolean True if user can proceed
	 */
	abstract protected function canUserProceed();

	/**
	 * Load modules for initialization.
	 */
	abstract protected function initModules();

	/**
	 * Export configuration variables to JavaScript
	 */
	abstract protected function addJsConfigVars();

	/**
	 * Creates HTML and prepares data for the customized personal header
	 */
	private function createHeaderHtml() {
		$out = $this->getOutput();
		$skin = $this->getSkin();

		'@phan-var SkinTemplate $skin';

		// Get personal tools for the user
		$personalTools = $skin->getStructuredPersonalTools();

		if ( $this->getUser()->isAnon() ) {
			// JS will add custom implementation for this
			unset( $personalTools['anonuserpage'] );

			// Reorder personal tools for anonymous user.
			$personalTools = $this->reorderPersonalTools( $personalTools,
				[ 'createaccount', 'login', 'anontalk', 'anoncontribs' ]
			);
		}

		// Pass list of menu items to JavaScript code. Used to populate customized personal menu
		// on Content Translation special pages
		$personalMenuList = $this->getPersonalMenuList( $personalTools );
		$out->addJsConfigVars( 'personalMenuList', $personalMenuList );

		$out->addHTML( $out->headElement( $skin ) );
		$out->addHTML( Html::element(
			'div',
			[ 'class' => 'cx-nojs errorbox' ],
			$this->msg( 'cx-javascript' )->text()
		) );

		// Display notification tools from Echo extension and ULS.
		// Intended to display ULS, alerts and notices.
		// Initially hidden, until rest of DOM elements are rendered through JavaScript.
		$out->addHTML( Html::rawElement(
			'div',
			[ 'class' => 'cx-header__personal' ],
			Html::rawElement( 'ul', [], $skin->makePersonalToolsList( $personalTools ) )
		) );
		$wordmark = $this->getProjectWordmark();
		if ( $wordmark ) {
			$out->addHTML( $wordmark );
		}
	}

	/**
	 * Give custom order to personal tools.
	 *
	 * @param array $personalTools Array of personal tools.
	 * @param array $order Array of tool IDs in desired order.
	 *
	 * @return array
	 */
	protected function reorderPersonalTools( $personalTools, $order ) {
		foreach ( $order as $value ) {
			if ( !isset( $personalTools[ $value ] ) ) {
				continue;
			}

			$savedValue = $personalTools[ $value ];
			unset( $personalTools[ $value ] );
			$personalTools[ $value ] = $savedValue;
		}

		return $personalTools;
	}

	/**
	 * Get flat structure of text, href, title and accesskey attributes for
	 * non-notifications and non-ULS personal tools
	 *
	 * @param array &$personalTools Array of personal tools
	 * @return array Flat array attributes
	 */
	protected function getPersonalMenuList( &$personalTools ) {
		$personalMenuItems = [];

		foreach ( $personalTools as $key => $item ) {
			// We want to keep notification icons outside of dropdown menu, for alerts and notices
			// from Echo extension to register event listeners correctly in the Echo code.
			if ( strpos( $key, 'notifications-' ) !== false ) {
				continue;
			}

			// We want to keep ULS always visible and not in the dropdown menu
			if ( $key === 'uls' ) {
				continue;
			}

			// From the rest of the personal tools, we need flat structures of attributes
			if ( isset( $item[ 'links' ] ) ) {
				foreach ( $item[ 'links' ] as $linkKey => $link ) {
					$isMissing = false;

					$menuItem = [
						'text' => $link[ 'text' ],
						'href' => $link[ 'href' ]
					];

					// We want red links for missing pages in custom header on Content Translation
					if ( isset( $link[ 'class' ] ) && $link[ 'class' ] === 'new' &&
						isset( $link[ 'exists' ] ) && $link[ 'exists' ] === false
					) {
						$isMissing = true;
						$menuItem[ 'notvisited' ] = true;
					}

					// single-id has the form of 'pt-uls', 'pt-watchlist'...
					// This id is used to get the message as 'tooltip-$id'
					if ( $link[ 'single-id' ] ) {
						if ( isset( $link[ 'tooltiponly' ] ) && $link[ 'tooltiponly' ] ) {
							$title = Linker::titleAttrib( $link[ 'single-id' ], [ 'nonexisting' ] );
							if ( $title !== false ) {
								$menuItem[ 'title' ] = $title;
							}
						} else {
							$menuItem = array_merge(
								$menuItem,
								$this->getTooltipAndAccesskey( $link[ 'single-id' ], $isMissing )
							);
						}
					}

					// In Content Translation custom header, we want to treat User page menu option
					// separatelly, as username is displayed in menu handle, and we use just display
					// "User" as menu option for user's page.
					if ( $key === 'userpage' ) {
						$menuItem[ 'text' ] =
							$this->msg( 'cx-personaltools-user' )->inContentLanguage()->text();
						$personalMenuItems[ 'user' ] = $menuItem;
					} else {
						$personalMenuItems[] = $menuItem;
					}
				}

				// We unset all tools except notification alerts and notices and ULS,
				// because we need three of those to pass as parameters to makePersonalToolsList
				// so HTML gets created for notification alerts and notices and for ULS
				unset( $personalTools[ $key ] );
			}
		}

		return $personalMenuItems;
	}

	/**
	 * Get tooltip and access key for the specified personal tool ( e.g. Preferences )
	 *
	 * @param string $tool Name of the tool
	 * @param bool $isMissing True if tool page is missing
	 * @return array Associative array of title and/or accesskey for the tool or empty array
	 */
	protected function getTooltipAndAccesskey( $tool, $isMissing ) {
		$tipAndAccesskey = [];

		$tip = Linker::tooltipAndAccesskeyAttribs( $tool, [], $isMissing ? 'nonexisting' : [] );
		if ( isset( $tip[ 'title' ] ) ) {
			$tipAndAccesskey[ 'title' ] = $tip[ 'title' ];
		}
		if ( isset( $tip[ 'accesskey' ] ) ) {
			$tipAndAccesskey[ 'accesskey' ] = $tip[ 'accesskey' ];
		}

		return $tipAndAccesskey;
	}

	/**
	 * Try to get project wordmark, if defined. This is a MediaWiki 1.35+ feature,
	 * but fails gracefully if wgLogos does not have a 'wordmark' key defined, so
	 * won't cause any issues for older installs.
	 *
	 * @return string|null HTML string of wordmark <img> or null
	 */
	private function getProjectWordmark() {
		$config = $this->getConfig();

		try {
			$siteLogos = $config->get( 'Logos' );

			if ( isset( $siteLogos[ 'wordmark' ] ) ) {
				$attributes = $siteLogos[ 'wordmark' ] + [
					'id' => 'cx-header__wordmark',
					'title' => $this->msg( 'tooltip-p-logo' )->inContentLanguage()->text()
				];

				return Html::element( 'img', $attributes );
			}
		} catch ( ConfigException $e ) {
			return null;
		}

		return null;
	}
}
