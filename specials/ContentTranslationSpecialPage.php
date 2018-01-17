<?php
/**
 * Contains the abstract class SpecialContentTranslationPage that is used as common
 * parent class for classes that display special pages:
 * Special:ContentTranslation and
 * Special:ContentTranslationStats
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * @ingroup SpecialPage
 */
abstract class ContentTranslationSpecialPage extends SpecialPage {
	public function execute( $parameters ) {
		global $wgULSPosition;

		$out = $this->getOutput();
		$skin = $this->getSkin();

		// Since we are essentially a custom skin, trick ULS to appear in the personal bar
		$wgULSPosition = 'personal';
		$out->addJsConfigVars( [ 'wgULSPosition' => 'personal' ] );

		if ( !$this->canUserProceed() ) {
			return;
		}

		$this->setHeaders();
		$out->setArticleBodyOnly( true );

		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( [
			'site',
			'mediawiki.user',
			'mediawiki.page.startup',
		] );

		// Preloading to avoid FOUC
		$out->addModuleStyles( 'mw.cx.ui.Header.skin' );
		$this->initModules();

		// Do not add skin specific modules, as there shouldn't be any skin left
		// that could use these. It's more likely to cause issues, such as with
		// with the minerva skin.
		// $modules = $skin->getDefaultModules();

		Hooks::run( 'BeforePageDisplay', [ &$out, &$skin ] );
		$skin->setupSkinUserCss( $out );

		$this->createHeaderHtml();

		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );

		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}

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
	 * Creates HTML and prepares data for the customized personal header
	 */
	protected function createHeaderHtml() {
		$out = $this->getOutput();
		$skin = $this->getSkin();

		// Get personal tools for the user
		$personalTools = $skin->getStructuredPersonalTools();

		if ( $this->getUser()->isAnon() ) {
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
		$out->addHTML( Html::rawElement( 'div',
			[ 'class' => 'cx-header__personal' ],
			$skin->makePersonalToolsList( $personalTools ) ) );

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
							wfMessage( "cx-personaltools-user" )->inContentLanguage()->text();
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
	 * Try to get project wordmark, if defined. For WMF purposes, wordmarks are defined in
	 * InitialiseSettings.php in MinervaCustomLogos array.
	 * This fails gracefully if MinervaCustomLogos is not defined.
	 *
	 * @return string|null HTML string of wordmark <img> or null
	 */
	private function getProjectWordmark() {
		$config = $this->getConfig();

		try {
			$customLogo = $config->get( 'MinervaCustomLogos' );

			if ( isset( $customLogo[ 'copyright' ] ) ) {
				$attributes = [
					'src' => $customLogo[ 'copyright' ],
					'id' => 'cx-header__wordmark'
				];

				if ( isset( $customLogo[ 'copyright-height' ] ) ) {
					$attributes[ 'height' ] = $customLogo[ 'copyright-height' ];
				}

				if ( isset( $customLogo[ 'copyright-width' ] ) ) {
					$attributes[ 'width' ] = $customLogo[ 'copyright-width' ];
				}

				return Html::element( 'img', $attributes );
			}
		} catch ( ConfigException $e ) {
			return null;
		}

		return null;
	}
}
