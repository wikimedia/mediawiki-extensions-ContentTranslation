<?php

namespace ContentTranslation\Skin;

use MediaWiki\Linker\Linker;
use MediaWiki\MediaWikiServices;
use MediaWiki\Parser\Sanitizer;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\Skin\SkinMustache;
use MediaWiki\Title\Title;

/**
 * Skin subclass for Content Translation
 *
 * @ingroup Skins
 * @internal
 */
class SkinContentTranslation extends SkinMustache {
	/**
	 * @inheritDoc
	 */
	public function __construct( $options = [] ) {
		$options['templateDirectory'] = __DIR__ . '/templates';
		parent::__construct( $options );
	}

	/**
	 * @inheritDoc
	 */
	public function getHtmlElementAttributes() {
		$attribs = parent::getHtmlElementAttributes();
		// Apply the night mode color palette via the shared client preference class.
		// Together with 'clientPrefEnabled' this lets anonymous users' choice carry
		// over through the client preferences cookie. See CSSCustomProperties.less.
		$attribs['class'] = trim( ( $attribs['class'] ?? '' )
			. ' skin-theme-clientpref-' . $this->getNightModeValue() );
		return $attribs;
	}

	/**
	 * Resolve the night mode value for the current user.
	 *
	 * Core has no skin-agnostic night mode preference: Vector stores the user's
	 * choice in the 'vector-theme' option. We reuse it so a preference set elsewhere
	 * on the wiki carries over to this page. For anonymous users the emitted value
	 * is a base that is overridden client-side from the client preferences cookie.
	 *
	 * @return string One of 'day', 'night' or 'os'.
	 */
	private function getNightModeValue(): string {
		$default = 'day';
		$user = $this->getUser();
		if ( !$user->isRegistered()
			|| !ExtensionRegistry::getInstance()->isLoaded( 'Vector' )
		) {
			return $default;
		}

		$value = MediaWikiServices::getInstance()
			->getUserOptionsLookup()
			->getOption( $user, 'vector-theme' );

		return in_array( $value, [ 'day', 'night', 'os' ], true ) ? $value : $default;
	}

	/**
	 * @inheritDoc
	 */
	public function getTemplateData(): array {
		$config = $this->getConfig();

		return parent::getTemplateData() + [
			'cx-version' => $config->get( 'ContentTranslationVersion' ),
			'main-page-href' => Title::newMainPage()->getLinkURL(),
			'user-name' => $this->getUser()->getName(),
		] + $this->getNavigationTemplateData();
	}

	/**
	 * Generate data for a custom p-personal menu
	 * @param array $items
	 * @return array
	 */
	private function getCustomPortletData( array $items ): array {
		$data = [
			'class' => 'mw-portlet ' . Sanitizer::escapeClass( "mw-portlet-personal" ),
			'html-tooltip' => Linker::tooltip( 'p-personal' ),
			'html-items' => '',
			'html-after-portal' => '',
			'html-before-portal' => '',
		];

		foreach ( $items as $key => $item ) {
			$data['html-items'] .= $this->makeListItem( $key, $item );
		}

		$data['label'] = $this->msg( 'personaltools' )->text();
		$data['is-empty'] = count( $items ) === 0;
		$data['class'] .= $data['is-empty'] ? ' emptyPortlet' : '';
		return $data;
	}

	/**
	 * @return array of portlet data for navigation
	 */
	private function getNavigationTemplateData(): array {
		$personalToolsUrls = $this->buildPersonalUrls();

		// Extract some of the items to a separate list.
		// Rest of them goes to a dropdown menu.
		$ptoolPrimaryKeys = [ 'uls', 'notifications-alert', 'notifications-notice' ];
		$personalToolsUrlsPrimary = [];
		foreach ( $ptoolPrimaryKeys as $key ) {
			if ( isset( $personalToolsUrls[ $key ] ) ) {
				$personalToolsUrlsPrimary[ $key ] = $personalToolsUrls[ $key ];
				unset( $personalToolsUrls[ $key ] );
			}
		}
		return [
			'data-personal' => $this->getCustomPortletData(
				$this->getPersonalToolsForMakeListItem( $personalToolsUrlsPrimary )
			),
			'data-personal-dropdown' => $this->getCustomPortletData(
				$this->getPersonalToolsForMakeListItem( $personalToolsUrls )
			)
		];
	}
}
