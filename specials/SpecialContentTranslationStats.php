<?php
/**
 * Contains the special page Special:ContentTranslationStats.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Shows some metrics about ContentTranslation usage.
 * @ingroup SpecialPage
 */
class SpecialContentTranslationStats extends SpecialPage {
	function __construct() {
		parent::__construct( 'ContentTranslationStats' );
	}

	public function getDescription() {
		return $this->msg( 'cx-stats-title' )->text();
	}

	public function execute( $parameters ) {
		$out = $this->getOutput();
		$skin = $this->getSkin();

		$this->setHeaders();
		$this->outputHeader();

		$out->wrapWikiMsg( '== $1 ==',  array( 'cx-stats-pages-title' ) );

		// @TODO better to return title => stats iterator
		$stats = ContentTranslationStats::getStats();
		$out->addHtml( $this->getPagesTable( $stats ) );
	}

	private function getPagesTable( $pages ) {
		global $wgContLang;

		$namespaces = $wgContLang->getFormattedNamespaces();
		$blanknamespace = $this->msg( 'blanknamespace' )->text();

		$headingMsgs = array(
			'cx-stats-page-title',
			'cx-stats-from',
			'cx-stats-to',
		);

		// @TODO want to use html template here
		$headingRow = '';
		foreach ( $headingMsgs as $headingMsg ) {
			$headingRow .= Html::element( 'th',
				array(),
				$this->msg( $headingMsg )->text()
			);
		}

		$rows = array( Html::rawElement( 'tr',
			array(),
			$headingRow
		) );

		$total = $main = 0;

		foreach ( $pages as $row ) {
			$title = Title::newFromRow( $row );

			$total++;
			if ( $title->inNamespace( NS_MAIN ) ) {
				$main++;
			}

			$titleCell = Html::rawElement( 'td', array(), Linker::link( $title ) );

			$languages = FormatJson::decode( $row->ct_params );
			if ( $languages === null ) {
				$from = $to = $this->msg( 'cx-stats-unknown' )->text();
			} else {
				$from = $languages->from;
				$to = $languages->to;
			}

			$fromCell = Html::element( 'td', array(), $from );
			$toCell = Html::element( 'td', array(), $to );

			$rows[] = Html::rawElement( 'tr',
				array(),
				$titleCell . $fromCell . $toCell
			);
		}

		$table = Html::rawElement( 'table',
			array(
				'class' => 'wikitable sortable',
			),
			implode( "\n", $rows )
		);

		$percentage = round( $main / $total * 100 );
		$summary = wfMessage( 'cx-stats-summary' )
			->numParams( $main, $total, $percentage )
			->parse();

		return $table . $summary;
	}
}
