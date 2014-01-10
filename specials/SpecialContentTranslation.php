<?php
/**
 * Contains special page Special:ContentTranslation.
 *
 * @file
 * @copyright 2014 ContentTranslation Team and others; see AUTHORS.txt
 * @license GPL-2.0+; see LICENSE.txt
 */

/**
 * Implements the core of Content Translation extension - a special page which
 * shows Content Translation user interface.
 * @ingroup SpecialPage
 */
class SpecialContentTranslation extends SpecialPage {
	function __construct() {
		parent::__construct( 'ContentTranslation' );
	}

	public function getDescription() {
		return $this->msg( 'cot' )->text();
	}

	public function execute( $parameters ) {
		$out = $this->getOutput();
		$skin = $this->getSkin();
		$this->setHeaders();
		$out->setArticleBodyOnly( true );
		// Default modules copied from OutputPage::addDefaultModules
		$out->addModules( array(
			'mediawiki.user',
			'mediawiki.page.startup',
			'mediawiki.page.ready',
		) );

		$out->addHTML( $out->headElement( $skin ) );

		$out->addHTML( $this->makeContent() );

		// Enable this if you need useful debugging information
		$out->addHtml( MWDebug::getDebugHTML( $this->getContext() ) );
		wfRunHooks( 'BeforePageDisplay', array( &$out, &$skin ) );
		$out->addHTML( $skin->bottomScripts() );
		$out->addHTML( '</body></html>' );
	}

	private function makeContent() {
		$header = $this->makeHeader();
		$source = $this->makeSourceContent();
		$translation = $this->makeTranslationContent();
		$tools = $this->makeToolsContent();

		$html = <<<HTML
<div class="content">
	<div class="header">$header</div>
	<div class="source">$source</div>
	<div class="translation" contenteditable>$translation</div>
	<div class="tools">$tools</div>
</div>
HTML;

		return $html;
	}

	private function makeHeader() {
		global $wgLogo;
		return <<<HTML
<img src=$wgLogo></img>
HTML;
	}

	private function makeSourceContent() {
		$html = <<<HTML
<h2>Article title</h2>
<p>Article content</p>
HTML;
		return $html;
	}

	private function makeTranslationContent() {
		$html = <<<HTML
<h2>Article title</h2>
<p>Your translation</p>
HTML;

		return $html;
	}

	private function makeToolsContent() {
		$html = <<<HTML
	<h2>Create a translation</h2>
	<ol>
		<li>Add some paragraphs to the translation.</li>
		<li>Adjust the automatic translations provided to ensure quality.
			<ul>
				<li>Machine translation is a useful starting point for
				translations, but translators must revise errors as
				necessary and confirm that the translation is accurate.</li>
				<li>Do not translate text that appears unreliable
				or low-quality. If possible, verify the text with
				references provided in the source article.</li>
			</ul>
		</li>
		<li>When you are happy with the result, select "Publish Translation"
		to create a new article.</li>
	</ol>
HTML;

		return $html;
	}
}
